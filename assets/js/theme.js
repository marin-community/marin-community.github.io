// The head initializer applies the saved choice before CSS/first paint.
document.querySelectorAll('[data-theme-control]').forEach(control => {
  control.value = document.documentElement.dataset.themePreference;
  control.addEventListener('change', () => window.MarinTheme.setPreference(control.value));
  control.hidden = false;
});
