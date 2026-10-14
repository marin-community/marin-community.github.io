// Preference behavior in both OS modes, including persistence and blocked storage.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const boot = fs.readFileSync(path.join(root, '_includes/theme-head.html'), 'utf8').match(/<script[^>]*>([\s\S]*?)<\/script>/)[1];
const controlsScript = fs.readFileSync(path.join(root, 'assets/js/theme.js'), 'utf8');

function load(dark, storage = new Map(), blocked = false) {
  const listeners = {};
  const control = { hidden:true, value:'', addEventListener:(name, fn) => { control[name] = fn; } };
  const document = { documentElement:{dataset:{},style:{}}, querySelectorAll:() => [control] };
  const media = { matches:dark, addEventListener:(_, fn) => { media.change = fn; } };
  const localStorage = {
    getItem:key => { if (blocked) throw Error('blocked'); return storage.get(key) ?? null; },
    setItem:(key, value) => { if (blocked) throw Error('blocked'); storage.set(key, value); },
    removeItem:key => { if (blocked) throw Error('blocked'); storage.delete(key); }
  };
  const window = { matchMedia:() => media, addEventListener:(name, fn) => { listeners[name] = fn; } };
  const context = vm.createContext({document, window, localStorage});
  vm.runInContext(boot, context); // Runs with no body/styles, as in the real head.
  assert.equal(document.documentElement.style.colorScheme, document.documentElement.dataset.theme);
  assert.equal(document.documentElement.style.backgroundColor, document.documentElement.dataset.theme === 'dark' ? '#1a2028' : '#eee8dd');
  vm.runInContext(controlsScript, context);
  return { data:document.documentElement.dataset, media, window, listeners, control };
}

for (const dark of [false, true]) {
  for (const saved of [undefined, 'light', 'dark', 'system', 'invalid']) {
    const storage = new Map(saved === undefined ? [] : [['marin-theme', saved]]);
    let page = load(dark, storage);
    const explicit = saved === 'light' || saved === 'dark';
    assert.equal(page.data.theme, explicit ? saved : dark ? 'dark' : 'light');
    assert.equal(page.control.value, explicit ? saved : 'system');
    assert.equal(page.control.hidden, false);
    for (const choice of ['light', 'dark']) {
      page.control.value = choice;
      page.control.change();
      assert.equal(page.data.theme, choice);
      page = load(!dark, storage); // Reload/navigation with the opposite OS setting.
      assert.equal(page.data.theme, choice);
      page.media.matches = dark;
      page.media.change();
      assert.equal(page.data.theme, choice); // Explicit selection survives OS changes.
    }
    page.window.MarinTheme.setPreference('system');
    assert.equal(storage.has('marin-theme'), false);
    page.media.matches = !dark;
    page.media.change();
    assert.equal(page.data.theme, !dark ? 'dark' : 'light');
    storage.set('marin-theme', 'light');
    page.listeners.storage({key:'marin-theme'});
    assert.equal(page.control.value, 'light');
    storage.set('marin-theme', 'dark');
    page.listeners.pageshow(); // Back/forward cache restores the latest preference.
    assert.equal(page.data.theme, 'dark');
  }
  const page = load(dark, new Map(), true);
  assert.equal(page.data.theme, dark ? 'dark' : 'light');
  page.window.MarinTheme.setPreference('light');
  assert.equal(page.data.theme, 'light');
}
console.log('PASS: theme initialization, controls, persistence/reloads, explicit overrides, both system modes, OS changes, cross-tab/back-forward updates, blocked storage');
