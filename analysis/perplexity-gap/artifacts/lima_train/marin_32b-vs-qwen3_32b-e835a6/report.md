# Perplexity Gap Report

**Model A:** marin-community/marin-32b-base

**Model B:** Qwen/Qwen3-32B

## Datasets

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| instruction_tuning/lima_train | 256 | 478871 | 0.557954 | 0.698266 | -0.140312 | -67191.145880 |

## Dataset Groups

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| format:chatml_final_assistant_target_only | 256 | 478871 | 0.557954 | 0.698266 | -0.140312 | -67191.145880 |
| instruction_tuning | 256 | 478871 | 0.557954 | 0.698266 | -0.140312 | -67191.145880 |
| issue:5819 | 256 | 478871 | 0.557954 | 0.698266 | -0.140312 | -67191.145880 |
| lima_train | 256 | 478871 | 0.557954 | 0.698266 | -0.140312 | -67191.145880 |
| source:GAIR | 256 | 478871 | 0.557954 | 0.698266 | -0.140312 | -67191.145880 |
| source:GAIR/lima | 256 | 478871 | 0.557954 | 0.698266 | -0.140312 | -67191.145880 |
| split:train | 256 | 478871 | 0.557954 | 0.698266 | -0.140312 | -67191.145880 |

## Pattern Buckets

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| text/word | 75648 | 361554 | 0.506693 | 0.648829 | -0.142135 | -51389.620457 |
| whitespace/single_space | 72621 | 72621 | 0.614150 | 0.734852 | -0.120701 | -8765.458899 |
| text/punctuation | 18165 | 27792 | 0.951250 | 1.140120 | -0.188869 | -5249.049700 |
| text/number | 1769 | 4090 | 0.704632 | 0.940342 | -0.235709 | -964.050390 |
| whitespace/newline | 2503 | 2503 | 0.927413 | 1.116878 | -0.189465 | -474.230970 |
| text/non_ascii_word | 180 | 1367 | 0.510295 | 0.743001 | -0.232707 | -318.110173 |
| text/non_ascii | 187 | 694 | 0.753689 | 1.011224 | -0.257535 | -178.729311 |
| whitespace/multi_newline | 674 | 1371 | 1.355880 | 1.247410 | 0.108470 | 148.712454 |
| whitespace/multi_space | 645 | 2441 | 0.754477 | 0.749906 | 0.004571 | 11.156748 |
| whitespace/tab_or_cr | 7 | 14 | 1.818622 | 2.491804 | -0.673182 | -9.424549 |
| text/url | 1 | 19 | 0.464641 | 0.588768 | -0.124127 | -2.358405 |
| whitespace/mixed | 801 | 4405 | 0.634499 | 0.634495 | 0.000004 | 0.017771 |

## Top Documents: Model A Worse

| dataset | shard | row_index | bytes | score_byte_start | score_byte_end | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| instruction_tuning/lima_train | staged_jsonl_gz | 69 | 1658 | 386 | 2044 | 0.602702 | 0.592724 | 0.009977 | 16.542279 | text/word | about | 1.101695 | …␠\\in␠\\cal{O}(f)$.⏎$f␠\\in␠\\Theta(g)$␠means␠that␠$f$␠grows␠about␠as␠fast␠as␠$g$;␠formally␠$f␠\\in␠\\cal{O}(g)␠\\cap␠\\Omega(… |

## Top Documents: Model B Worse

| dataset | shard | row_index | bytes | score_byte_start | score_byte_end | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| instruction_tuning/lima_train | staged_jsonl_gz | 222 | 6727 | 709 | 7436 | 0.226133 | 0.427149 | -0.201016 | -1352.234692 | text/word | Fuzzy | -9.638058 | …this␠is␠appreciated␠too!<\|im_end\|>⏎<\|im_start\|>assistant⏎Fuzzy␠String␠Matching␠is␠the␠process␠of␠performing␠a␠human-li… |
| instruction_tuning/lima_train | staged_jsonl_gz | 141 | 4030 | 530 | 4560 | 0.545667 | 0.824107 | -0.278440 | -1122.113117 | text/word | Welcome | -5.222144 | …evels,␠such␠as␠6␠and␠7?<\|im_end\|>⏎<\|im_start\|>assistant⏎Welcome␠to␠Rusty␠Dagger␠Shanktown!⏎What␠you␠have␠noticed␠is␠ve… |
| instruction_tuning/lima_train | staged_jsonl_gz | 50 | 3773 | 350 | 4123 | 0.514316 | 0.806392 | -0.292075 | -1102.000536 | text/word | First | -6.985111 | …o␠put␠him␠in␠Hufflepuff.<\|im_end\|>⏎<\|im_start\|>assistant⏎First␠of␠all,␠in␠the␠first␠4␠years,␠it␠isn't␠really␠shown␠tha… |
| instruction_tuning/lima_train | staged_jsonl_gz | 110 | 2605 | 686 | 3291 | 0.335116 | 0.706624 | -0.371509 | -967.780526 | text/word | Tolkien | -5.591318 | …build␠bigger␠societies?<\|im_end\|>⏎<\|im_start\|>assistant⏎Tolkien␠himself␠addresses␠this␠in␠an␠essay␠called␠&quot;Laws␠a… |
| instruction_tuning/lima_train | staged_jsonl_gz | 53 | 2246 | 208 | 2454 | 0.404299 | 0.815263 | -0.410964 | -923.025298 | text/punctuation | * | -33.217095 | …t␠the␠taste␠of␠the␠coffee?<\|im_end\|>⏎<\|im_start\|>assistant⏎*␠One␠reason␠that␠the␠taste␠isn't␠as␠good␠for␠Robusta␠is␠th… |
| instruction_tuning/lima_train | staged_jsonl_gz | 228 | 3395 | 1036 | 4431 | 0.594183 | 0.812207 | -0.218024 | -740.190393 | text/word | Yes | -13.158464 | …eeks,␠but␠only␠in␠summer.<\|im_end\|>⏎<\|im_start\|>assistant⏎Yes,␠it␠is␠definitely␠doable.␠-20&deg;C␠is␠only␠-4&deg;F.␠Th… |
| instruction_tuning/lima_train | staged_jsonl_gz | 145 | 2958 | 290 | 3248 | 0.555989 | 0.802350 | -0.246362 | -728.738363 | text/word | Apollo | -5.912110 | …as␠there␠much␠of␠a␠lag?<\|im_end\|>⏎<\|im_start\|>assistant⏎Apollo␠11␠mission␠had␠two␠modules⏎⏎*␠Lunar␠module␠-␠which␠desc… |
| instruction_tuning/lima_train | staged_jsonl_gz | 119 | 1668 | 302 | 1970 | 0.313840 | 0.750162 | -0.436323 | -727.786101 | text/punctuation | ## | -15.731748 | …to␠the␠correct␠partition.<\|im_end\|>⏎<\|im_start\|>assistant⏎##␠DriveImage␠XML⏎DriveImage␠XML␠will␠do␠the␠job.␠␠It␠runs␠f… |
| instruction_tuning/lima_train | staged_jsonl_gz | 159 | 3161 | 412 | 3573 | 0.530863 | 0.754505 | -0.223642 | -706.930917 | text/word | The | -15.396021 | …Does␠it␠change␠over␠time?<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠question␠you're␠really␠asking␠is␠&quot;When␠does␠the␠com… |
| instruction_tuning/lima_train | staged_jsonl_gz | 1 | 3122 | 703 | 3825 | 0.549809 | 0.749256 | -0.199447 | -622.674405 | text/word | There | -8.428801 | …tectures.␠What␠are␠they?<\|im_end\|>⏎<\|im_start\|>assistant⏎There␠is␠a␠general␠historical␠trend.⏎In␠the␠olden␠days,␠memor… |
| instruction_tuning/lima_train | staged_jsonl_gz | 238 | 1922 | 873 | 2795 | 0.369179 | 0.689327 | -0.320148 | -615.325351 | text/word | Dennis | -6.400377 | …ction␠defining␠keyword?<\|im_end\|>⏎<\|im_start\|>assistant⏎Dennis␠Ritchie’s␠paper␠on␠The␠Development␠of␠the␠C␠Language␠gi… |
| instruction_tuning/lima_train | staged_jsonl_gz | 181 | 2500 | 330 | 2830 | 0.640546 | 0.885370 | -0.244824 | -612.059882 | text/word | Ima | -13.032976 | …em␠lol.⏎⏎⏎Source:␠Twitter<\|im_end\|>⏎<\|im_start\|>assistant⏎Ima␠is␠an␠informal␠contraction␠of␠I'm␠going␠to␠when␠it's␠use… |
| instruction_tuning/lima_train | staged_jsonl_gz | 51 | 2701 | 274 | 2975 | 0.534227 | 0.758438 | -0.224211 | -605.593436 | text/word | This | -10.340509 | …ng␠in␠the␠United␠States?<\|im_end\|>⏎<\|im_start\|>assistant⏎This␠claim␠can␠actually␠be␠tested␠very␠easily.␠Others␠have␠do… |
| instruction_tuning/lima_train | staged_jsonl_gz | 161 | 3081 | 430 | 3511 | 0.684265 | 0.880187 | -0.195922 | -603.636089 | text/word | The | -12.394946 | …␠explore␠digital␠options.<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠content␠deemed␠acceptable␠for␠Japanese␠children␠generall… |
| instruction_tuning/lima_train | staged_jsonl_gz | 107 | 4009 | 95 | 4104 | 0.465860 | 0.615292 | -0.149432 | -599.072127 | text/word | Not | -9.631399 | …ra␠an␠Unforgivable␠Curse?<\|im_end\|>⏎<\|im_start\|>assistant⏎Not␠many␠people␠knew␠Sectumsempra␠-␠they'd␠need␠to␠know␠it␠e… |
| instruction_tuning/lima_train | staged_jsonl_gz | 200 | 1240 | 235 | 1475 | 0.367420 | 0.849700 | -0.482280 | -598.027081 | text/word | No | -20.078071 | …I␠still␠be␠alive␠by␠then?<\|im_end\|>⏎<\|im_start\|>assistant⏎No.␠There␠are␠some␠rules␠that␠prevent␠this.␠From␠the␠Rules␠o… |
| instruction_tuning/lima_train | staged_jsonl_gz | 10 | 2941 | 110 | 3051 | 0.626863 | 0.824452 | -0.197589 | -581.108972 | text/word | DOOM | -11.961158 | …rom␠a␠PCI␠graphics␠card?<\|im_end\|>⏎<\|im_start\|>assistant⏎DOOM␠itself␠doesn’t␠do␠anything␠special␠to␠benefit␠from␠PCI␠g… |
| instruction_tuning/lima_train | staged_jsonl_gz | 255 | 1893 | 278 | 2171 | 0.535895 | 0.840676 | -0.304781 | -576.950275 | text/word | In | -21.163560 | …sed␠instead␠of␠the␠other?<\|im_end\|>⏎<\|im_start\|>assistant⏎In␠terms␠of␠ascii␠code,␠it's␠3␠--␠since␠they're␠10␠and␠13␠re… |
| instruction_tuning/lima_train | staged_jsonl_gz | 54 | 3102 | 455 | 3557 | 0.763574 | 0.948576 | -0.185002 | -573.877675 | text/word | The | -13.722168 | …hot␠shoe␠port.␠Who␠knows?<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠peak␠power␠at␠work␠when␠a␠flash␠is␠being␠discharged␠is␠e… |
| instruction_tuning/lima_train | staged_jsonl_gz | 247 | 3047 | 1047 | 4094 | 0.577552 | 0.765876 | -0.188324 | -573.823148 | text/word | Assets | -3.872223 | …n␠why␠it␠can't␠be␠done.<\|im_end\|>⏎<\|im_start\|>assistant⏎Assets⏎⏎*␠1␠obsolete␠piece␠of␠short␠range␠comms␠kit␠requiring␠… |
| instruction_tuning/lima_train | staged_jsonl_gz | 102 | 1669 | 169 | 1838 | 0.336518 | 0.672783 | -0.336265 | -561.225846 | text/word | Yes | -12.997263 | …st␠because␠of␠their␠diet?<\|im_end\|>⏎<\|im_start\|>assistant⏎Yes,␠according␠to␠a␠paper␠by␠the␠American␠Society␠for␠Clinic… |
| instruction_tuning/lima_train | staged_jsonl_gz | 193 | 2367 | 874 | 3241 | 0.679561 | 0.914034 | -0.234473 | -554.996755 | text/word | By | -16.283147 | …ing␠in␠and␠of␠themselves?<\|im_end\|>⏎<\|im_start\|>assistant⏎By␠definition,␠nothing's␠going␠to␠happen␠in␠an␠empty␠room␠(t… |
| instruction_tuning/lima_train | staged_jsonl_gz | 34 | 2071 | 310 | 2381 | 0.623138 | 0.885081 | -0.261944 | -542.485302 | text/word | Halflings | -4.646907 | …or␠our␠little␠friends?<\|im_end\|>⏎<\|im_start\|>assistant⏎Halflings␠were␠originally␠called␠hobbits␠prior␠to␠a␠legal␠chall… |
| instruction_tuning/lima_train | staged_jsonl_gz | 19 | 1869 | 104 | 1973 | 0.455211 | 0.741851 | -0.286640 | -535.730459 | text/word | There | -7.892972 | …tant␠replay␠to␠the␠game?<\|im_end\|>⏎<\|im_start\|>assistant⏎There␠are␠a␠few␠fundamental␠considerations:⏎⏎*␠Uncertainty␠is… |
| instruction_tuning/lima_train | staged_jsonl_gz | 60 | 2268 | 568 | 2836 | 0.690366 | 0.920744 | -0.230378 | -522.496598 | text/word | Aliens | -7.682316 | …pensive␠procedure␠have?<\|im_end\|>⏎<\|im_start\|>assistant⏎Aliens␠are␠alien,␠without␠a␠common␠background␠their␠motives␠ma… |

## Top Segments: Model A Worse

| dataset | bucket | bytes | delta_bits | gap_bpb | text | doc_preview |
| --- | --- | --- | --- | --- | --- | --- |
| instruction_tuning/lima_train | text/word | 42 | 22.605499 | 0.538226 | disableScrollsToTopPropertyOnAl… | …⏎}⏎```⏎Disable␠Scroll␠To␠Top:⏎```func␠disableScrollsToTopPropertyOnAllSubviewsOf(view:␠UIView)␠{⏎␠␠␠␠for␠subview␠in␠vi… |
| instruction_tuning/lima_train | text/number | 5 | 19.013794 | 3.802759 | 47521 | …␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠v.getBackground().setColorFilter(0xe0f47521,PorterDuff.Mode.SRC_ATOP);⏎␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠v.invali… |
| instruction_tuning/lima_train | whitespace/mixed | 3 | 15.756586 | 5.252195 | ⏎␠␠ | …hat␠you␠want␠to␠scroll␠into␠view,␠like␠this:⏎```.example␠{⏎␠␠scroll-margin-top:␠10px;⏎}⏎```⏎This␠affects␠```scrollInto… |
| instruction_tuning/lima_train | whitespace/newline | 1 | 15.649155 | 15.649155 | ⏎ | …rence␠between␠attributes␠and␠properties␠can␠be␠important␠in⏎specific␠situations.␠Before␠jQuery␠1.6,␠the␠```.attr()```␠… |
| instruction_tuning/lima_train | text/word | 16 | 15.329929 | 0.958121 | bidi-inhibit-bpa | …direction```␠to␠```left-to-right```␠and␠setting␠```bidi-inhibit-bpa```␠(new␠in␠Emacs␠27,␠see␠footnote␠1)␠to␠```t```␠im… |
| instruction_tuning/lima_train | text/number | 7 | 15.319292 | 2.188470 | 2831360 | …W95␠FAT32␠(LBA)⏎whatever.img2␠␠␠␠␠␠␠␠␠␠122880␠␠␠5785599␠2831360␠␠83␠Linux⏎```⏎These␠are␠the␠two␠partitions.␠␠The␠first… |
| instruction_tuning/lima_train | text/number | 7 | 14.283019 | 2.040431 | 5785599 | …344␠␠␠c␠W95␠FAT32␠(LBA)⏎whatever.img2␠␠␠␠␠␠␠␠␠␠122880␠␠␠5785599␠2831360␠␠83␠Linux⏎```⏎These␠are␠the␠two␠partitions.␠␠T… |
| instruction_tuning/lima_train | text/punctuation | 3 | 13.741019 | 4.580340 | .<\| | …␠$i^\\text{th}$␠smallest␠of␠the␠mutual␠distances␠and␠$e_i␠=␠2\\sqrt{i/m}$.␠␠The␠plot␠should␠be␠close␠to␠zero.<\|im_end\|>⏎ |
| instruction_tuning/lima_train | text/word | 17 | 12.708949 | 0.747585 | snipmate-snippets | …us␠and␠run:⏎⏎```git␠submodule␠add␠<git@github␠...>␠snipmate-snippets/snippets/```⏎⏎If␠you␠need␠more␠information␠about␠… |
| instruction_tuning/lima_train | text/word | 24 | 11.498214 | 0.479092 | TYMActivityIndicatorView | …d␠'IQKeyboardManager'⏎pod␠'FTPopOverMenu'⏎pod␠'TYMActivityIndicatorView'⏎pod␠'SCSkypeActivityIndicatorView'⏎pod␠'Googl… |
| instruction_tuning/lima_train | text/punctuation | 4 | 11.219103 | 2.804776 | (_(& | …␠example),␠as␠in␠code␠like⏎```raise␠forms.ValidationError(_(&quot;Please␠enter␠a␠correct␠username&quot;))⏎```⏎⏎3.␠As␠a… |
| instruction_tuning/lima_train | whitespace/mixed | 3 | 10.505522 | 3.501841 | ⏎␠␠ | …⏎A␠general␠model␠(with␠continuous␠paths)␠can␠be␠written⏎$$⏎␠␠\\frac{dS_t}{S_t}␠=␠r_t␠dt␠+␠\\sigma_t␠dW_t^S⏎$$⏎where␠the␠… |
| instruction_tuning/lima_train | whitespace/mixed | 2 | 10.441719 | 5.220859 | ␠⏎ | …t␠for␠chemical␠energy␠storage␠or␠electrical␠connectivity).␠⏎Also,␠since␠the␠charge␠in␠a␠a␠capacitor␠is␠limited,␠it␠all… |
| instruction_tuning/lima_train | text/word | 5 | 10.329886 | 2.065977 | ellas | …sí␠que␠no␠es␠lo␠más␠eficiente␠si␠no␠estas␠trabajando␠con␠ellas.⏎⏎2.␠Utilizando␠la␠clase␠```StringTokenizer```␠:⏎```sta… |
| instruction_tuning/lima_train | whitespace/mixed | 3 | 10.189875 | 3.396625 | ⏎␠␠ | …8859-1␠-c␠1␠-m␠"de"␠worldcitiespop␠\|␠csvgrep␠-c␠5␠-r␠"\\d+"⏎␠␠\|␠csvsort␠-r␠-c␠5␠-l␠\|␠csvcut␠-c␠1,2,4,6␠\|␠head␠-n␠11␠\|␠c… |
| instruction_tuning/lima_train | text/word | 11 | 10.162459 | 0.923860 | targetValue | …```public␠static␠boolean␠useList(String[]␠arr,␠String␠targetValue)␠{⏎␠␠␠␠return␠Arrays.asList(arr).contains(targetValu… |
| instruction_tuning/lima_train | text/word | 9 | 10.025215 | 1.113913 | MGwynne's | …itive␠and␠unpretentious␠explanation␠along␠the␠lines␠of␠MGwynne's␠answer.⏎With␠$2$-SAT,␠you␠can␠only␠express␠implicatio… |
| instruction_tuning/lima_train | whitespace/mixed | 5 | 10.000097 | 2.000019 | ⏎␠␠␠␠ | …nditional␠comments⏎function␠img_create(src,␠alt,␠title)␠{⏎␠␠␠␠var␠img␠=␠IEWIN␠?␠new␠Image()␠:␠document.createElement('… |
| instruction_tuning/lima_train | text/punctuation | 3 | 9.630982 | 3.210327 | ``` | …␠checkbox.␠The␠```.prop()```␠method⏎should␠be␠used␠to␠set␠```disabled```␠and␠```checked```␠instead␠of␠the␠```.attr()``… |
| instruction_tuning/lima_train | text/word | 7 | 9.571549 | 1.367364 | maximum | …,␠"E"]⏎```⏎Apple␠states␠for␠```prefix(_:)```:⏎⏎␠␠If␠the␠maximum␠length␠exceeds␠the␠number␠of␠elements␠in␠the␠collectio… |
| instruction_tuning/lima_train | whitespace/mixed | 17 | 9.491570 | 0.558328 | ⏎␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠ | …e␠body:⏎```⏎msg␠=␠new␠MailMessage("xxxx@gmail.com",⏎␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠"yyyy@gmail.com",␠"Message␠from␠PSSP␠System",⏎␠␠␠␠… |
| instruction_tuning/lima_train | text/number | 11 | 9.363508 | 0.851228 | 1,193,181.8 | …e␠those␠that␠result␠from␠dividing␠the␠base␠frequency␠(1,193,181.8␠Hz)␠by␠an␠integer␠in␠the␠range␠of␠1&ndash;65535.␠So␠… |
| instruction_tuning/lima_train | text/word | 6 | 9.265047 | 1.544174 | calloc | …d␠implementations␠of␠```calloc```␠may␠leave␠it␠up␠to␠```calloc```␠itself␠to␠zero␠memory␠if␠there's␠no␠OS,␠or␠it's␠not␠… |
| instruction_tuning/lima_train | text/word | 5 | 9.231522 | 1.846304 | about | …161␠from␠above␠then␠there␠are␠about␠1,370,537,000/161␠=␠␠about␠8,513,000␠geniuses␠in␠China,␠which␠is␠significantly␠les… |
| instruction_tuning/lima_train | whitespace/mixed | 4 | 9.013208 | 2.253302 | ␠␠⏎⏎ | …␠Temperature,␠Humidity,␠Light,␠The␠air␠in␠your␠apartment.␠␠⏎⏎You␠didn't␠mention␠exactly␠where␠your␠dying␠plants␠are␠be… |
| instruction_tuning/lima_train | whitespace/multi_space | 3 | 8.874370 | 2.958123 | ␠␠␠ | …␠regular␠```du```.␠It's␠in␠512-byte␠blocks:⏎```$␠du␠-s⏎248␠␠␠.⏎```⏎The␠```-h```␠flag␠results␠in␠a␠more␠readable␠number… |
| instruction_tuning/lima_train | text/word | 10 | 8.818437 | 0.881844 | AccentCity | …--------------------------⏎\|␠␠line_number␠\|␠Country␠\|␠AccentCity␠\|␠Population␠␠\|⏎-------------------------------------… |
| instruction_tuning/lima_train | text/word | 8 | 8.774315 | 1.096789 | passthru | …he␠config␠is␠not␠an␠error␠but␠makes␠the␠filter␠a␠no-op␠passthru.⏎The␠content␠filtering␠is␠done␠to␠massage␠the␠content␠… |
| instruction_tuning/lima_train | text/word | 7 | 8.760861 | 1.251552 | useList | …␠a␠Value:⏎⏎*␠Using␠```List```:⏎```public␠static␠boolean␠useList(String[]␠arr,␠String␠targetValue)␠{⏎␠␠␠␠return␠Arrays.… |
| instruction_tuning/lima_train | whitespace/mixed | 6 | 8.598040 | 1.433007 | ⏎␠␠␠␠␠ | …⏎Examples:⏎```␠def␠matchTest(x:␠Int):␠String␠=␠x␠match␠{⏎␠␠␠␠␠case␠1␠=>␠"one"⏎␠␠␠␠␠case␠2␠=>␠"two"⏎␠␠␠␠␠case␠_␠=>␠"any… |
| instruction_tuning/lima_train | text/punctuation | 3 | 8.563349 | 2.854450 | .<\| | …uery␠3.0␠Breaking␠Changes⏎⏎While␠```prop()```␠merely␠sets␠the␠property's␠underlying␠boolean␠value␠to␠false.<\|im_end\|>⏎ |
| instruction_tuning/lima_train | text/number | 6 | 8.430351 | 1.405059 | 8859-1 | …esult␠in␠a␠console-readable␠format:⏎```$␠csvgrep␠-e␠iso-8859-1␠-c␠1␠-m␠"de"␠worldcitiespop␠\|␠csvgrep␠-c␠5␠-r␠"\\d+"⏎␠␠\|… |
| instruction_tuning/lima_train | whitespace/mixed | 5 | 8.297690 | 1.659538 | ⏎␠␠␠␠ | …s␠=␠User::with('posts')->get();⏎foreach($users␠as␠$user){⏎␠␠␠␠$users->posts;␠//␠posts␠is␠already␠loaded␠and␠no␠additio… |
| instruction_tuning/lima_train | text/word | 8 | 8.248677 | 1.031085 | Enormous | …osed␠to␠explain␠the␠Moon's␠motion,␠among␠other␠things.␠Enormous␠effort␠was␠spent␠on␠this␠problem␠by␠many␠famous␠mathem… |
| instruction_tuning/lima_train | whitespace/mixed | 5 | 8.211074 | 1.642215 | ⏎␠␠␠␠ | …tKey␠=␠array_key_first($array);⏎if␠(null␠===␠$firstKey)␠{⏎␠␠␠␠$value␠=␠&quot;Array␠is␠empty&quot;;␠//␠An␠error␠should␠… |
| instruction_tuning/lima_train | text/word | 6 | 8.176766 | 1.362794 | styles | …ther,␠we␠can␠find␠the␠parameters␠that,␠for␠our␠specific␠styles␠of␠strings,␠give␠the␠best␠fuzzy␠match␠results.⏎⏎To␠allo… |
| instruction_tuning/lima_train | whitespace/mixed | 5 | 8.170635 | 1.634127 | ⏎␠␠␠␠ | …nDistance(ByRef␠S1␠As␠String,␠ByVal␠S2␠As␠String)␠As␠Long⏎␠␠␠␠Dim␠L1␠As␠Long,␠L2␠As␠Long,␠D()␠As␠Long␠'Length␠of␠input… |
| instruction_tuning/lima_train | text/word | 7 | 8.095483 | 1.156498 | JumpStm | …␠`bad_cast`␠exception␠is␠thrown␠in␠that␠case).⏎⏎```⏎if␠(JumpStm␠*j␠=␠dynamic_cast<JumpStm*>(&stm))␠{⏎␠␠...⏎}␠else␠if␠(… |
| instruction_tuning/lima_train | whitespace/mixed | 3 | 8.057192 | 2.685731 | ⏎␠␠ | …ecessary.␠Here␠is␠an␠example:⏎⏎```⏎void␠func(void␠*data)␠{⏎␠␠//␠Conversion␠from␠MyClass*␠->␠void*␠is␠implicit⏎␠␠MyClas… |
| instruction_tuning/lima_train | text/word | 13 | 7.958587 | 0.612199 | activesupport | …r/local/bin␠cocoapods⏎```⏎If␠there␠is␠an␠error␠&quot;activesupport␠requires␠Ruby␠version␠>=␠2.xx&quot;,␠then␠install␠t… |

## Top Segments: Model B Worse

| dataset | bucket | bytes | delta_bits | gap_bpb | text | doc_preview |
| --- | --- | --- | --- | --- | --- | --- |
| instruction_tuning/lima_train | text/word | 6 | -57.239214 | -9.539869 | Asking | …a␠bad␠impression␠there.<\|im_end\|>⏎<\|im_start\|>assistant⏎Asking␠her␠out␠directly␠seems␠like␠a␠bad␠idea.⏎Instead,␠in␠the… |
| instruction_tuning/lima_train | text/word | 11 | -49.044454 | -4.458587 | Convolution | …ms␠of␠effects?⏎Thanks<\|im_end\|>⏎<\|im_start\|>assistant⏎Convolution␠is␠correlation␠with␠the␠filter␠rotated␠180␠degrees.␠… |
| instruction_tuning/lima_train | text/word | 6 | -48.719943 | -8.119991 | Kotlin | …alk␠is␠accessible␠here.<\|im_end\|>⏎<\|im_start\|>assistant⏎Kotlin␠coroutines␠are␠different␠from␠Rx.␠It␠is␠hard␠to␠compare… |
| instruction_tuning/lima_train | text/word | 5 | -48.190291 | -9.638058 | Fuzzy | …this␠is␠appreciated␠too!<\|im_end\|>⏎<\|im_start\|>assistant⏎Fuzzy␠String␠Matching␠is␠the␠process␠of␠performing␠a␠human-li… |
| instruction_tuning/lima_train | text/word | 6 | -48.055836 | -8.009306 | Random | …ptimal␠number␠of␠trees?<\|im_end\|>⏎<\|im_start\|>assistant⏎Random␠forest␠uses␠bagging␠(picking␠a␠sample␠of␠observations␠r… |
| instruction_tuning/lima_train | text/word | 4 | -47.844631 | -11.961158 | DOOM | …rom␠a␠PCI␠graphics␠card?<\|im_end\|>⏎<\|im_start\|>assistant⏎DOOM␠itself␠doesn’t␠do␠anything␠special␠to␠benefit␠from␠PCI␠g… |
| instruction_tuning/lima_train | text/word | 6 | -47.741569 | -7.956928 | Indoor | …ch␠appreciated,␠thanks!<\|im_end\|>⏎<\|im_start\|>assistant⏎Indoor␠gardening␠is␠a␠bit␠more␠difficult␠then␠the␠regular␠outd… |
| instruction_tuning/lima_train | text/word | 3 | -47.654287 | -15.884762 | Tor | …all␠UDP␠traffic␠over␠Tor?<\|im_end\|>⏎<\|im_start\|>assistant⏎Tor␠clients␠do␠not,␠in␠general,␠directly␠do␠DNS␠requests.␠␠W… |
| instruction_tuning/lima_train | text/word | 6 | -47.470339 | -7.911723 | Safely | …ete␠those␠files␠myself?<\|im_end\|>⏎<\|im_start\|>assistant⏎Safely␠remove/overwrite␠only␠bothersome␠files⏎When␠you␠want␠to… |
| instruction_tuning/lima_train | text/word | 6 | -47.187385 | -7.864564 | Mormon | …hurch␠Id␠appreciate␠it.<\|im_end\|>⏎<\|im_start\|>assistant⏎Mormon␠services␠are␠a␠bit␠different,␠as␠you␠discovered.␠In␠the… |
| instruction_tuning/lima_train | text/word | 3 | -46.330312 | -15.443437 | The | …erence␠in␠layman's␠terms?<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠difference␠simply␠lies␠in␠that␠they␠solve␠different␠prob… |
| instruction_tuning/lima_train | text/word | 3 | -46.188062 | -15.396021 | The | …Does␠it␠change␠over␠time?<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠question␠you're␠really␠asking␠is␠&quot;When␠does␠the␠com… |
| instruction_tuning/lima_train | text/word | 4 | -46.102236 | -11.525559 | Tres | …1=123⏎string2=654321⏎```<\|im_end\|>⏎<\|im_start\|>assistant⏎Tres␠formas␠diferentes␠de␠hacerlo:⏎1.␠Utilizando␠la␠función␠`… |
| instruction_tuning/lima_train | text/word | 6 | -46.093895 | -7.682316 | Aliens | …pensive␠procedure␠have?<\|im_end\|>⏎<\|im_start\|>assistant⏎Aliens␠are␠alien,␠without␠a␠common␠background␠their␠motives␠ma… |
| instruction_tuning/lima_train | text/word | 2 | -46.009760 | -23.004880 | In | …ow␠us␠after␠clocking␠out?<\|im_end\|>⏎<\|im_start\|>assistant⏎In␠general,␠employers␠in␠the␠United␠States␠are␠free␠to␠fire␠… |
| instruction_tuning/lima_train | text/word | 4 | -45.898599 | -11.474650 | Java | …static␠classes␠good␠for?<\|im_end\|>⏎<\|im_start\|>assistant⏎Java␠has␠static␠nested␠classes␠but␠it␠sounds␠like␠you're␠look… |
| instruction_tuning/lima_train | text/word | 3 | -45.773052 | -15.257684 | The | …titude␠a␠plane␠can␠reach?<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠higher␠you␠get,␠the␠lower␠the␠density␠of␠the␠air␠becomes… |
| instruction_tuning/lima_train | text/word | 3 | -45.533883 | -15.177961 | The | …in␠it␠in␠layman's␠terms?)<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠parameter␠```'items_wrap'```␠for␠```wp_nav_menu()```␠def… |
| instruction_tuning/lima_train | text/word | 3 | -45.353778 | -15.117926 | The | …uced␠at␠a␠different␠time?<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠volt,␠ohm␠and␠farad␠were␠introduced␠by␠the␠same␠person,␠… |
| instruction_tuning/lima_train | text/word | 3 | -45.297066 | -15.099022 | The | …␠and␠```-dev```␠keywords?<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠difference␠between␠```--save```␠and␠```--save-dev```␠may… |
| instruction_tuning/lima_train | text/word | 3 | -45.222272 | -15.074091 | Yes | …e␠be␠run␠through␠conduit?<\|im_end\|>⏎<\|im_start\|>assistant⏎Yes,␠NM␠(Romex)␠cable␠can␠be␠in␠conduit.␠In␠fact,␠National␠E… |
| instruction_tuning/lima_train | text/word | 4 | -45.109363 | -11.277341 | Many | …ston␠Symphony␠Orchestra.<\|im_end\|>⏎<\|im_start\|>assistant⏎Many␠phonographs␠were␠able␠to␠play␠multiple␠records␠in␠sequen… |
| instruction_tuning/lima_train | text/word | 3 | -45.062399 | -15.020800 | The | …mmatically␠and␠logically?<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠```synchronized```␠keyword␠is␠all␠about␠different␠thread… |
| instruction_tuning/lima_train | text/word | 3 | -45.002780 | -15.000927 | The | …pecially␠of␠the␠2nd␠case?<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠difference␠is␠that␠the␠explicit␠type␠of␠the␠```returnsNu… |
| instruction_tuning/lima_train | text/word | 5 | -44.956065 | -8.991213 | There | …ays␠ride␠their␠TT␠bikes?<\|im_end\|>⏎<\|im_start\|>assistant⏎There␠are␠2␠good␠reasons␠for␠this.␠⏎⏎First,␠a␠TT␠bike␠is␠the␠… |
| instruction_tuning/lima_train | text/word | 8 | -44.879452 | -5.609932 | Cohesion | …␠overall␠code␠quality?<\|im_end\|>⏎<\|im_start\|>assistant⏎Cohesion␠refers␠to␠what␠the␠class␠(or␠module)␠can␠do.␠Low␠cohes… |
| instruction_tuning/lima_train | text/word | 3 | -44.754141 | -14.918047 | The | …n␠and␠why␠am␠I␠seeing␠it?<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠error␠message␠is␠due␠to␠the␠unfortunate␠fact␠that␠PHP␠wi… |
| instruction_tuning/lima_train | text/word | 5 | -44.584661 | -8.916932 | Bokeh | …nitions␠of␠each␠of␠them?<\|im_end\|>⏎<\|im_start\|>assistant⏎Bokeh␠is␠specifically␠the␠out-of-focus␠areas␠of␠an␠image.␠Gau… |
| instruction_tuning/lima_train | text/word | 5 | -44.448658 | -8.889732 | ASCII | …tween␠ASCII␠and␠Unicode?<\|im_end\|>⏎<\|im_start\|>assistant⏎ASCII␠has␠128␠code␠points,␠0␠through␠127.␠␠It␠can␠fit␠in␠a␠si… |
| instruction_tuning/lima_train | text/word | 3 | -44.344001 | -14.781334 | The | …er␠of␠days␠in␠the␠month)?<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠syntax␠you␠tried␠is␠actually␠ambiguous.␠Depending␠on␠how… |
| instruction_tuning/lima_train | text/word | 2 | -44.276307 | -22.138153 | No | …n␠it␠comes␠to␠being␠seen?<\|im_end\|>⏎<\|im_start\|>assistant⏎No.␠You␠should␠always␠ride␠with␠a␠white␠light␠facing␠forward… |
| instruction_tuning/lima_train | text/word | 2 | -44.049876 | -22.024938 | In | …␠line␠of␠a␠Python␠script?<\|im_end\|>⏎<\|im_start\|>assistant⏎In␠order␠to␠run␠the␠python␠script,␠we␠need␠to␠tell␠the␠shell… |
| instruction_tuning/lima_train | text/word | 2 | -43.979988 | -21.989994 | In | …blem.␠⏎Thanks␠in␠advance!<\|im_end\|>⏎<\|im_start\|>assistant⏎In␠Python,␠everything␠is␠shared,␠except␠for␠function-local␠v… |
| instruction_tuning/lima_train | text/word | 3 | -43.896309 | -14.632103 | The | …eap␠allocations␠involved?<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠implementation␠of␠```std::function```␠can␠differ␠from␠on… |
| instruction_tuning/lima_train | text/word | 5 | -43.778207 | -8.755641 | There | …er␠than␠ethical␠reasons?<\|im_end\|>⏎<\|im_start\|>assistant⏎There␠are␠multiple␠reasons␠why␠people␠are/become␠Vegetarian/V… |
| instruction_tuning/lima_train | text/word | 2 | -43.077661 | -21.538830 | As | …s,␠classes␠and␠functions?<\|im_end\|>⏎<\|im_start\|>assistant⏎As␠you␠must␠already␠be␠aware␠by␠now␠there␠are␠no␠classes␠in␠… |
| instruction_tuning/lima_train | text/word | 3 | -43.048566 | -14.349522 | The | …ally␠wanted␠every␠column?<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠asterisk␠character,␠"*",␠in␠the␠SELECT␠statement␠is␠shor… |
| instruction_tuning/lima_train | text/word | 3 | -42.916266 | -14.305422 | The | …words␠by␠their␠frequency?<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠main␠advantage␠is␠that␠by␠learning␠higher␠frequency␠word… |
| instruction_tuning/lima_train | text/word | 3 | -42.465182 | -14.155061 | The | …␠my␠own␠computer.⏎Thanks.<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠downside␠of␠using␠```docker␠exec```␠is␠that␠it␠requires␠… |
| instruction_tuning/lima_train | text/word | 2 | -42.327121 | -21.163560 | In | …sed␠instead␠of␠the␠other?<\|im_end\|>⏎<\|im_start\|>assistant⏎In␠terms␠of␠ascii␠code,␠it's␠3␠--␠since␠they're␠10␠and␠13␠re… |

## Top Literals: Model A Worse

Representative token boundaries come from the highest-gap occurrence for each literal. `|` marks token boundaries for each model; an ellipsis means the token continues outside the literal boundary in that example.

| name | bucket | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | example_dataset | example_doc_preview | model_a_token_boundaries | model_b_token_boundaries |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ⏎⏎ | whitespace/multi_newline | 652 | 1304 | 1.324027 | 1.174795 | 0.149232 | 194.598681 | instruction_tuning/lima_train | …␠As␠a␠general␠purpose␠&quot;throwaway&quot;␠variable␠name:⏎⏎*␠To␠indicate␠that␠part␠of␠a␠function␠result␠is␠being␠deli… | \|…⏎⏎\| | \|…⏎⏎\| |
| is | text/word | 1407 | 2814 | 0.470105 | 0.428236 | 0.041868 | 117.817121 | instruction_tuning/lima_train | …␠the␠next␠barrier.␠One␠of␠the␠reasons␠Itanium␠didn't␠take␠is␠that␠nobody,␠whether␠at␠Intel␠or␠elsewhere,␠could␠write␠a… | \|…is\| | \|…is\| |
| So | text/word | 88 | 176 | 1.716828 | 1.149252 | 0.567576 | 99.893425 | instruction_tuning/lima_train | …ut␠resetting␠the␠array's␠internal␠state␠as␠a␠side␠effect.⏎So␠since␠PHP␠7.3␠the␠first␠value␠of␠```$array```␠may␠be␠acce… | \|So\| | \|So\| |
| ␠⏎⏎ | whitespace/mixed | 55 | 165 | 1.711823 | 1.159150 | 0.552673 | 91.190991 | instruction_tuning/lima_train | …is␠the␠HRR␠or␠"Heiliges␠Römisches␠Reich␠Deutscher␠Nation".␠⏎⏎Wiktionary␠quotes␠Busching,␠who␠in␠1762␠explained␠Reich␠a… | \|␠⏎⏎\| | \|␠⏎⏎\| |
| ⏎␠␠␠␠ | whitespace/mixed | 178 | 890 | 0.244902 | 0.177794 | 0.067108 | 59.726236 | instruction_tuning/lima_train | …nditional␠comments⏎function␠img_create(src,␠alt,␠title)␠{⏎␠␠␠␠var␠img␠=␠IEWIN␠?␠new␠Image()␠:␠document.createElement('… | \|…⏎\|␠␠␠\|␠…\| | \|…⏎\|␠␠␠\|␠…\| |
| <\| | text/punctuation | 14 | 28 | 3.957059 | 2.416658 | 1.540401 | 43.131238 | instruction_tuning/lima_train | …␠Yuba␠City,␠Calif.,␠and␠another␠north␠of␠Goldsboro,␠N.C.␠The␠bombs␠survived␠both␠crashes␠without␠detonating<\|im_end\|>⏎ | \|<\|\|\| | \|<\|…\| |
| But | text/word | 47 | 141 | 1.278442 | 1.052867 | 0.225575 | 31.806056 | instruction_tuning/lima_train | …␠have␠committed␠a␠crime.␠In␠that␠case,␠its␠an␠admission.␠␠But␠there␠must␠be␠other,␠either␠circumstantial,␠or␠actual␠ph… | \|…But\| | \|…But\| |
| ⏎␠␠␠ | whitespace/mixed | 42 | 168 | 0.731817 | 0.558973 | 0.172844 | 29.037726 | instruction_tuning/lima_train | …use␠it.␠I'll␠borrow␠from␠his␠diagrams:⏎```␠␠_\|←_cW_→_\|_↓_⏎␠␠␠\|␠␠␠␠␠␠␠\|⏎---------------⏎␠␠␠\|content\|␠↑⏎␠↑␠\|content\|␠con… | \|…⏎\|␠␠\|␠…\| | \|…⏎\|␠␠\|␠…\| |
| ␠␠␠ | whitespace/multi_space | 71 | 213 | 0.567481 | 0.461612 | 0.105868 | 22.549919 | instruction_tuning/lima_train | …␠regular␠```du```.␠It's␠in␠512-byte␠blocks:⏎```$␠du␠-s⏎248␠␠␠.⏎```⏎The␠```-h```␠flag␠results␠in␠a␠more␠readable␠number… | \|␠␠\|␠…\| | \|␠␠\|␠…\| |
| ␠␠⏎⏎ | whitespace/mixed | 6 | 24 | 2.221678 | 1.321311 | 0.900367 | 21.608803 | instruction_tuning/lima_train | …␠Temperature,␠Humidity,␠Light,␠The␠air␠in␠your␠apartment.␠␠⏎⏎You␠didn't␠mention␠exactly␠where␠your␠dying␠plants␠are␠be… | \|␠␠⏎⏎\| | \|␠␠⏎⏎\| |
| 47521 | text/number | 1 | 5 | 3.805277 | 0.002518 | 3.802759 | 19.013794 | instruction_tuning/lima_train | …␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠v.getBackground().setColorFilter(0xe0f47521,PorterDuff.Mode.SRC_ATOP);⏎␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠v.invali… | \|475\|21\| | \|4\|7\|5\|2\|1\| |
| ␠␠␠␠ | whitespace/multi_space | 51 | 204 | 0.404477 | 0.318447 | 0.086030 | 17.550189 | instruction_tuning/lima_train | …---␠␠␠␠␠----␠␠␠␠␠␠1889568␠␠.```⏎␠```16␠␠␠␠48␠␠␠␠144␠␠␠432␠␠␠␠1296␠␠␠3888␠␠␠␠11664␠␠␠34992␠␠␠␠104976␠␠␠314928␠␠␠␠944784… | \|␠␠␠\|␠\| | \|␠␠␠\|␠\| |
| bidi-inhibit-bpa | text/word | 3 | 48 | 0.357678 | 0.019955 | 0.337723 | 16.210709 | instruction_tuning/lima_train | …direction```␠to␠```left-to-right```␠and␠setting␠```bidi-inhibit-bpa```␠(new␠in␠Emacs␠27,␠see␠footnote␠1)␠to␠```t```␠im… | \|b\|idi\|-in\|hibit\|-b\|pa\| | \|b\|idi\|-in\|hibit\|-b\|pa\| |
| Also | text/word | 21 | 84 | 1.352978 | 1.166518 | 0.186459 | 15.662594 | instruction_tuning/lima_train | …u've␠encountered␠a␠lot␠recently,␠or␠that␠just␠seem␠easy.⏎Also,␠although␠memorizing␠words␠has␠benefits,␠it␠is␠best␠to␠c… | \|Also\| | \|Also\| |
| 2831360 | text/number | 1 | 7 | 2.189616 | 0.001146 | 2.188470 | 15.319292 | instruction_tuning/lima_train | …W95␠FAT32␠(LBA)⏎whatever.img2␠␠␠␠␠␠␠␠␠␠122880␠␠␠5785599␠2831360␠␠83␠Linux⏎```⏎These␠are␠the␠two␠partitions.␠␠The␠first… | \|283\|136\|0\| | \|2\|8\|3\|1\|3\|6\|0\| |
| ⏎␠␠ | whitespace/mixed | 114 | 342 | 1.143111 | 1.098619 | 0.044492 | 15.216355 | instruction_tuning/lima_train | …hat␠you␠want␠to␠scroll␠into␠view,␠like␠this:⏎```.example␠{⏎␠␠scroll-margin-top:␠10px;⏎}⏎```⏎This␠affects␠```scrollInto… | \|…⏎\|␠\|␠…\| | \|…⏎\|␠\|␠…\| |
| Then | text/word | 37 | 148 | 0.537344 | 0.439713 | 0.097631 | 14.449334 | instruction_tuning/lima_train | …␠tokens.␠⏎Scenario:⏎⏎*␠Visit␠your␠bank's␠site,␠log␠in.⏎*␠Then␠visit␠the␠attacker's␠site␠(e.g.␠sponsored␠ad␠from␠an␠unt… | \|…Then\| | \|…Then\| |
| 5785599 | text/number | 1 | 7 | 3.646603 | 1.606172 | 2.040431 | 14.283019 | instruction_tuning/lima_train | …344␠␠␠c␠W95␠FAT32␠(LBA)⏎whatever.img2␠␠␠␠␠␠␠␠␠␠122880␠␠␠5785599␠2831360␠␠83␠Linux⏎```⏎These␠are␠the␠two␠partitions.␠␠T… | \|578\|559\|9\| | \|5\|7\|8\|5\|5\|9\|9\| |
| ⏎␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠ | whitespace/mixed | 20 | 340 | 0.120844 | 0.081685 | 0.039158 | 13.313809 | instruction_tuning/lima_train | …e␠body:⏎```⏎msg␠=␠new␠MailMessage("xxxx@gmail.com",⏎␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠"yyyy@gmail.com",␠"Message␠from␠PSSP␠System",⏎␠␠␠␠… | \|…⏎\|␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠\|␠…\| | \|…⏎\|␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠\|␠…\| |
| snipmate-snippets | text/word | 1 | 17 | 1.669964 | 0.922379 | 0.747585 | 12.708949 | instruction_tuning/lima_train | …us␠and␠run:⏎⏎```git␠submodule␠add␠<git@github␠...>␠snipmate-snippets/snippets/```⏎⏎If␠you␠need␠more␠information␠about␠… | \|…sn\|ip\|mate\|-sn\|ippets\| | \|…sn\|ip\|mate\|-sn\|ippets\| |
| example | text/word | 94 | 658 | 0.164902 | 0.145601 | 0.019302 | 12.700606 | instruction_tuning/lima_train | …ement␠that␠you␠want␠to␠scroll␠into␠view,␠like␠this:⏎```.example␠{⏎␠␠scroll-margin-top:␠10px;⏎}⏎```⏎This␠affects␠```scr… | \|example\| | \|example\| |
| test | text/word | 24 | 96 | 0.784864 | 0.662112 | 0.122752 | 11.784215 | instruction_tuning/lima_train | …␠identified␠with␠a␠tarball␠or␠git␠URL.␠Please␠do␠not␠put␠test␠harnesses␠or␠transpilers␠in␠your␠dependencies␠object.␠Se… | \|…test\| | \|…test\| |
| TYMActivityIndicatorView | text/word | 1 | 24 | 1.439663 | 0.960570 | 0.479092 | 11.498214 | instruction_tuning/lima_train | …d␠'IQKeyboardManager'⏎pod␠'FTPopOverMenu'⏎pod␠'TYMActivityIndicatorView'⏎pod␠'SCSkypeActivityIndicatorView'⏎pod␠'Googl… | \|TY\|M\|ActivityIndicatorView\| | \|TY\|M\|ActivityIndicatorView\| |
| ., | text/punctuation | 20 | 40 | 1.098793 | 0.814741 | 0.284052 | 11.362092 | instruction_tuning/lima_train | …press␠the␠sense␠of␠‘bereave␠of,’␠as␠in␠behead,␠belimb,␠etc.,␠q.v.␠Cf.␠3,␠above.⏎⏎Although␠6a␠and␠6b␠are␠still␠producti… | \|.,\| | \|.,\| |
| (_(& | text/punctuation | 1 | 4 | 8.001574 | 5.196798 | 2.804776 | 11.219103 | instruction_tuning/lima_train | …␠example),␠as␠in␠code␠like⏎```raise␠forms.ValidationError(_(&quot;Please␠enter␠a␠correct␠username&quot;))⏎```⏎⏎3.␠As␠a… | \|(_\|(&\| | \|(_\|(&\| |
| targetValue | text/word | 8 | 88 | 0.119070 | 0.001264 | 0.117806 | 10.366910 | instruction_tuning/lima_train | …```public␠static␠boolean␠useList(String[]␠arr,␠String␠targetValue)␠{⏎␠␠␠␠return␠Arrays.asList(arr).contains(targetValu… | \|…target\|Value\| | \|…target\|Value\| |
| ellas | text/word | 1 | 5 | 2.377012 | 0.311035 | 2.065977 | 10.329886 | instruction_tuning/lima_train | …sí␠que␠no␠es␠lo␠más␠eficiente␠si␠no␠estas␠trabajando␠con␠ellas.⏎⏎2.␠Utilizando␠la␠clase␠```StringTokenizer```␠:⏎```sta… | \|…ellas\| | \|…ellas\| |
| x | text/word | 36 | 36 | 1.093015 | 0.808831 | 0.284184 | 10.230633 | instruction_tuning/lima_train | …defined␠in␠TikZ?<\|im_end\|>⏎<\|im_start\|>assistant⏎```\\draw␠(x,y)␠arc␠(start:stop:radius);```␠draws␠an␠arc⏎⏎*␠with␠radiu… | \|x\| | \|x\| |
| MGwynne's | text/word | 1 | 9 | 2.582379 | 1.468466 | 1.113913 | 10.025215 | instruction_tuning/lima_train | …itive␠and␠unpretentious␠explanation␠along␠the␠lines␠of␠MGwynne's␠answer.⏎With␠$2$-SAT,␠you␠can␠only␠express␠implicatio… | \|…MG\|wyn\|ne\|'s\| | \|…MG\|wyn\|ne\|'s\| |
| $\\ | text/punctuation | 30 | 60 | 1.004132 | 0.839057 | 0.165075 | 9.904472 | instruction_tuning/lima_train | …ssible␠implication␠chain,␠and␠see␠if␠you␠ever␠derive␠both␠$\\lnot␠l$␠from␠$l$␠and␠$l$␠from␠$\\lnot␠l$:␠if␠you␠do␠for␠som… | \|…$\\\| | \|…$\\\| |
| clean | text/word | 9 | 45 | 0.542372 | 0.323128 | 0.219244 | 9.865966 | instruction_tuning/lima_train | …antee.⏎This␠means␠```calloc```␠memory␠can␠still␠be␠&quot;clean&quot;␠and␠lazily-allocated,␠and␠copy-on-write␠mapped␠to… | \|clean\| | \|clean\| |
| styles | text/word | 4 | 24 | 1.443275 | 1.041075 | 0.402200 | 9.652808 | instruction_tuning/lima_train | …ther,␠we␠can␠find␠the␠parameters␠that,␠for␠our␠specific␠styles␠of␠strings,␠give␠the␠best␠fuzzy␠match␠results.⏎⏎To␠allo… | \|…styles\| | \|…styles\| |
| 1,193,181.8 | text/number | 1 | 11 | 2.027529 | 1.176301 | 0.851228 | 9.363508 | instruction_tuning/lima_train | …e␠those␠that␠result␠from␠dividing␠the␠base␠frequency␠(1,193,181.8␠Hz)␠by␠an␠integer␠in␠the␠range␠of␠1&ndash;65535.␠So␠… | \|1\|,\|193\|,\|181\|.\|8\| | \|1\|,\|1\|9\|3\|,\|1\|8\|1\|.\|8\| |
| sudo | text/word | 12 | 48 | 0.446735 | 0.252400 | 0.194335 | 9.328066 | instruction_tuning/lima_train | …ing␠steps␠to␠install␠Pod:⏎⏎1.␠Open␠terminal␠and␠type:⏎```sudo␠gem␠install␠cocoapods⏎```⏎Gem␠will␠get␠installed␠in␠Ruby… | \|sudo\| | \|sudo\| |
| exist | text/word | 15 | 75 | 0.541567 | 0.422466 | 0.119101 | 8.932563 | instruction_tuning/lima_train | …he␠guru␠just␠claims␠all␠those␠pseudo-scientific␠benefits␠exist␠to␠get␠people␠to␠pay␠them␠ridiculous␠amounts␠of␠money␠f… | \|…exist\| | \|…exist\| |
| extraCheese | text/word | 3 | 33 | 0.574313 | 0.306344 | 0.267969 | 8.842977 | instruction_tuning/lima_train | …e,⏎␠␠␠␠␠␠extraCheese:␠false⏎␠␠␠␠}⏎␠␠}⏎}⏎```⏎To␠update␠extraCheese␠of␠pizza␠object:⏎```this.setState(prevState␠=>␠({⏎␠␠… | \|…extra\|Che\|ese\| | \|…extra\|Che\|ese\| |
| allowed | text/word | 12 | 84 | 0.374425 | 0.269225 | 0.105200 | 8.836829 | instruction_tuning/lima_train | …last␠part␠inside␠the␠current␠shell␠(both␠behaviours␠are␠allowed␠by␠POSIX).␠Thus⏎```exit␠\|␠exit␠\|␠exit⏎```⏎does␠basical… | \|…allowed\| | \|…allowed\| |
| AccentCity | text/word | 1 | 10 | 1.910591 | 1.028748 | 0.881844 | 8.818437 | instruction_tuning/lima_train | …--------------------------⏎\|␠␠line_number␠\|␠Country␠\|␠AccentCity␠\|␠Population␠␠\|⏎-------------------------------------… | \|…Accent\|City\| | \|…Accent\|City\| |
| passthru | text/word | 1 | 8 | 2.811343 | 1.714554 | 1.096789 | 8.774315 | instruction_tuning/lima_train | …he␠config␠is␠not␠an␠error␠but␠makes␠the␠filter␠a␠no-op␠passthru.⏎The␠content␠filtering␠is␠done␠to␠massage␠the␠content␠… | \|…pas\|sth\|ru\| | \|…pas\|sth\|ru\| |
| useList | text/word | 1 | 7 | 1.290445 | 0.038893 | 1.251552 | 8.760861 | instruction_tuning/lima_train | …␠a␠Value:⏎⏎*␠Using␠```List```:⏎```public␠static␠boolean␠useList(String[]␠arr,␠String␠targetValue)␠{⏎␠␠␠␠return␠Arrays.… | \|…use\|List\| | \|…use\|List\| |

## Top Literals: Model B Worse

Representative token boundaries come from the highest-gap occurrence for each literal. `|` marks token boundaries for each model; an ellipsis means the token continues outside the literal boundary in that example.

| name | bucket | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | example_dataset | example_doc_preview | model_a_token_boundaries | model_b_token_boundaries |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ␠ | whitespace/single_space | 72621 | 72621 | 0.614150 | 0.734852 | -0.120701 | -8765.458899 | instruction_tuning/lima_train | …␠are␠stored␠in␠XML␠files,␠allowing␠you␠to␠process␠them␠with␠3rd␠party␠tools.␠Never␠again␠be␠stuck␠with␠a␠useless␠backu… | \|␠\| | \|␠\| |
| im_end | text/word | 256 | 1536 | 0.000610 | 1.531689 | -1.531079 | -2351.737208 | instruction_tuning/lima_train | …ordsages␠don’t␠get␠Wis-to-AC␠until␠2nd.⏎But␠plenty␠of␠characters␠are␠fine␠from␠1st,␠so␠this␠can␠vary␠a␠lot.<\|im_end\|>⏎ | \|im\|_end\| | \|…im_end…\| |
| The | text/word | 406 | 1218 | 0.896783 | 2.297808 | -1.401025 | -1706.448591 | instruction_tuning/lima_train | …erence␠in␠layman's␠terms?<\|im_end\|>⏎<\|im_start\|>assistant⏎The␠difference␠simply␠lies␠in␠that␠they␠solve␠different␠prob… | \|The\| | \|The\| |
| There | text/word | 83 | 415 | 1.045787 | 2.893510 | -1.847724 | -766.805279 | instruction_tuning/lima_train | …ays␠ride␠their␠TT␠bikes?<\|im_end\|>⏎<\|im_start\|>assistant⏎There␠are␠2␠good␠reasons␠for␠this.␠⏎⏎First,␠a␠TT␠bike␠is␠the␠… | \|There\| | \|There\| |
| , | text/punctuation | 3326 | 3326 | 1.533242 | 1.744312 | -0.211070 | -702.017585 | instruction_tuning/lima_train | …ays␠rule⏎⏎␠␠How␠to␠use:␠XXVII⏎␠␠⏎␠␠*␠[...]⏎␠␠*␠If␠you␠write,␠“die␠of␠disease”␠for␠the␠cause␠of␠death,␠but␠only␠write␠a… | \|,\| | \|,\| |
| \|> | text/punctuation | 256 | 512 | 0.189120 | 1.531689 | -1.342569 | -687.395529 | instruction_tuning/lima_train | …ordsages␠don’t␠get␠Wis-to-AC␠until␠2nd.⏎But␠plenty␠of␠characters␠are␠fine␠from␠1st,␠so␠this␠can␠vary␠a␠lot.<\|im_end\|>⏎ | \|\|\|>…\| | \|…\|>\| |
| ``` | text/punctuation | 1554 | 4662 | 0.469555 | 0.578446 | -0.108891 | -507.649218 | instruction_tuning/lima_train | …ver␠malloc␠or␠vice␠versa?<\|im_end\|>⏎<\|im_start\|>assistant⏎```calloc()```␠gives␠you␠a␠zero-initialized␠buffer,␠while␠``… | \|```\| | \|```\| |
| This | text/word | 205 | 820 | 0.770291 | 1.357682 | -0.587390 | -481.660031 | instruction_tuning/lima_train | …d␠against␠infringements?<\|im_end\|>⏎<\|im_start\|>assistant⏎This␠is␠a␠great␠question,␠with␠no␠one␠right␠answer.⏎The␠stren… | \|This\| | \|This\| |
| ⏎ | whitespace/newline | 2503 | 2503 | 0.927413 | 1.116878 | -0.189465 | -474.230970 | instruction_tuning/lima_train | …rence␠between␠attributes␠and␠properties␠can␠be␠important␠in⏎specific␠situations.␠Before␠jQuery␠1.6,␠the␠```.attr()```␠… | \|⏎\| | \|⏎\| |
| . | text/punctuation | 3292 | 3292 | 1.348641 | 1.476313 | -0.127671 | -420.294244 | instruction_tuning/lima_train | …ften␠lost␠through␠syncope␠(for␠example,␠'chocolate'␠is␠choc.late␠for␠most␠speakers).␠If␠we␠removed␠the␠schwa␠from␠the␠… | \|.…\| | \|.…\| |
| In | text/word | 174 | 348 | 1.773452 | 2.896603 | -1.123151 | -390.856526 | instruction_tuning/lima_train | …ow␠us␠after␠clocking␠out?<\|im_end\|>⏎<\|im_start\|>assistant⏎In␠general,␠employers␠in␠the␠United␠States␠are␠free␠to␠fire␠… | \|In\| | \|In\| |
| You | text/word | 105 | 315 | 1.227569 | 2.431998 | -1.204429 | -379.395104 | instruction_tuning/lima_train | …odule␠to␠a␠sub-directory?<\|im_end\|>⏎<\|im_start\|>assistant⏎You␠go␠into␠~/.janus␠and␠run:⏎⏎```git␠submodule␠add␠<git@git… | \|You\| | \|You\| |
| If | text/word | 182 | 364 | 1.373821 | 2.327584 | -0.953763 | -347.169787 | instruction_tuning/lima_train | …`␠into␠a␠member␠variable.<\|im_end\|>⏎<\|im_start\|>assistant⏎If␠you␠want␠performance,␠pass␠by␠value␠if␠you␠are␠storing␠it… | \|If\| | \|If\| |
| that | text/word | 869 | 3476 | 0.442852 | 0.540128 | -0.097276 | -338.131164 | instruction_tuning/lima_train | …ion␠also␠requires␠&quot;demonstrated␠skills␠in␠diplomacy␠that␠resulted␠in␠win-win␠solutions␠during␠extremely␠difficult… | \|…that\| | \|…that\| |
| It | text/word | 87 | 174 | 1.684856 | 3.554131 | -1.869274 | -325.253741 | instruction_tuning/lima_train | …urrent␠software␠industry?<\|im_end\|>⏎<\|im_start\|>assistant⏎It␠is␠extremely␠important.⏎What␠is␠more␠important␠though␠is␠… | \|It\| | \|It\| |
| the | text/word | 3784 | 11352 | 0.370308 | 0.397580 | -0.027272 | -309.595017 | instruction_tuning/lima_train | …actually␠remarkably␠simple:␠Yes,␠brain␠cells␠migrate.⏎In␠␠the␠adult␠brain␠glial␠cells␠migrate␠in␠the␠brain␠(Klämbt,␠20… | \|…the\| | \|…the\| |
| a | text/word | 1844 | 1844 | 1.092759 | 1.241819 | -0.149060 | -274.866481 | instruction_tuning/lima_train | …ovide␠the␠same␠general␠function␠as␠table␠views␠except␠that␠a␠collection␠view␠is␠able␠to␠support␠more␠than␠just␠single-… | \|…a\| | \|…a\| |
| of | text/word | 1682 | 3364 | 0.307625 | 0.388734 | -0.081109 | -272.849479 | instruction_tuning/lima_train | …rt␠names␠only⏎%~aI␠␠␠␠␠␠␠␠-␠expands␠%I␠to␠file␠attributes␠of␠file⏎%~tI␠␠␠␠␠␠␠␠-␠expands␠%I␠to␠date/time␠of␠file⏎%~zI␠␠… | \|…of\| | \|…of\| |
| Yes | text/word | 11 | 33 | 1.240776 | 9.104884 | -7.864108 | -259.515556 | instruction_tuning/lima_train | …e␠be␠run␠through␠conduit?<\|im_end\|>⏎<\|im_start\|>assistant⏎Yes,␠NM␠(Romex)␠cable␠can␠be␠in␠conduit.␠In␠fact,␠National␠E… | \|Yes\| | \|Yes\| |
| to | text/word | 2080 | 4160 | 0.351271 | 0.410275 | -0.059004 | -245.458041 | instruction_tuning/lima_train | …words␠and␠must␠occur␠where␠a␠reserved␠word␠is␠␠permitted␠␠to␠␠be␠recognized.␠␠Since␠they␠do␠not␠cause␠a␠word␠break,␠th… | \|…to\| | \|…to\| |
| you | text/word | 784 | 2352 | 0.455374 | 0.551624 | -0.096250 | -226.379948 | instruction_tuning/lima_train | …n␠intermediate␠representation␠of␠a␠compiled␠program.␠Apps␠you␠upload␠to␠iTunes␠Connect␠that␠contain␠bitcode␠will␠be␠co… | \|…you\| | \|…you\| |
| your | text/word | 309 | 1236 | 0.554840 | 0.726918 | -0.172077 | -212.687429 | instruction_tuning/lima_train | …ountpoint⏎*␠Create␠a␠mountpoint␠on␠the␠guest␠OS␠(best␠in␠your␠HOME␠directory).⏎⏎Testing␠shared␠folders␠functionality␠c… | \|…your\| | \|…your\| |
| ## | text/punctuation | 23 | 46 | 2.381294 | 6.627528 | -4.246234 | -195.326778 | instruction_tuning/lima_train | …tages␠of␠a␠such␠approach?<\|im_end\|>⏎<\|im_start\|>assistant⏎##␠TL;DR⏎They␠belong␠to␠the␠same␠family␠of␠solvers,␠where␠sp… | \|##\| | \|##\| |
| and | text/word | 1462 | 4386 | 0.575623 | 0.619317 | -0.043694 | -191.642673 | instruction_tuning/lima_train | …␠cD␠As␠Long,␠cS␠As␠Long␠'cost␠of␠next␠Insertion,␠Deletion␠and␠Substitution⏎␠␠␠␠L1␠=␠Len(S1):␠L2␠=␠Len(S2)⏎␠␠␠␠ReDim␠D(… | \|…and\| | \|…and\| |
| on | text/word | 411 | 822 | 0.747685 | 0.979077 | -0.231392 | -190.203850 | instruction_tuning/lima_train | …␠either␠crashed␠or␠otherwise␠been␠lost␠without␠the␠device␠on␠board␠detonating.⏎It's␠likely␠that␠the␠crash␠might␠cause␠… | \|…on\| | \|…on\| |
| A | text/word | 138 | 138 | 3.003477 | 4.304265 | -1.300788 | -179.508796 | instruction_tuning/lima_train | …del␠is␠highly␠unrealistic?<\|im_end\|>⏎<\|im_start\|>assistant⏎A␠general␠model␠(with␠continuous␠paths)␠can␠be␠written⏎$$⏎␠… | \|A\| | \|A\| |
| an | text/word | 335 | 670 | 1.107051 | 1.369666 | -0.262615 | -175.952333 | instruction_tuning/lima_train | …()␠vs␠add()⏎As␠per␠the␠doc␠⏎⏎␠␠>␠The␠offer␠method␠inserts␠an␠element␠if␠possible,␠otherwise␠returning␠false.␠This␠diff… | \|…an\| | \|…an\| |
| With | text/word | 23 | 92 | 1.559464 | 3.366915 | -1.807452 | -166.285547 | instruction_tuning/lima_train | …ostgreSQL␠JSON␠datatype?<\|im_end\|>⏎<\|im_start\|>assistant⏎With␠Postgresql␠9.5␠it␠can␠be␠done␠by␠following-⏎```UPDATE␠te… | \|With\| | \|With\| |
| it | text/word | 642 | 1284 | 0.706275 | 0.833571 | -0.127296 | -163.447964 | instruction_tuning/lima_train | …pace.⏎⏎In␠2008,␠FiFA␠President␠Sepp␠Blatter␠said:⏎⏎␠␠"Let␠it␠be␠as␠it␠is␠and␠let's␠leave␠[football]␠with␠errors.␠The␠t… | \|…it\| | \|…it\| |
| It's | text/word | 38 | 152 | 1.347703 | 2.414649 | -1.066946 | -162.175720 | instruction_tuning/lima_train | …␠mixed␠for␠best␠results?<\|im_end\|>⏎<\|im_start\|>assistant⏎It's␠usually␠best␠to␠avoid␠dichotomies␠like␠"Is␠strategy␠X␠be… | \|It\|'s\| | \|It\|'s\| |
| will | text/word | 306 | 1224 | 0.495678 | 0.621367 | -0.125689 | -153.843691 | instruction_tuning/lima_train | …ter␠repo.␠Type␠in␠terminal:⏎```pod␠setup⏎```⏎And␠wait␠it␠will␠download␠the␠master␠repo.␠The␠size␠is␠very␠big␠(370.0MB␠… | \|…will\| | \|…will\| |
| or | text/word | 418 | 836 | 0.928428 | 1.112152 | -0.183724 | -153.593233 | instruction_tuning/lima_train | …ord␠break,␠they␠must␠be␠separated␠from␠list␠by␠whitespace␠or␠another␠shell␠metacharacter.⏎⏎It's␠worth␠mentioning␠that␠… | \|…or\| | \|…or\| |
| Here | text/word | 21 | 84 | 1.544185 | 3.317189 | -1.773004 | -148.932336 | instruction_tuning/lima_train | …3..␠```␠would␠be␠invalid<\|im_end\|>⏎<\|im_start\|>assistant⏎Here␠is␠the␠regular␠expression␠you␠can␠use:⏎⏎```⏎/^\\d*\\.?\\d*$… | \|Here\| | \|Here\| |
| As | text/word | 59 | 118 | 1.438569 | 2.644826 | -1.206258 | -142.338403 | instruction_tuning/lima_train | …s,␠classes␠and␠functions?<\|im_end\|>⏎<\|im_start\|>assistant⏎As␠you␠must␠already␠be␠aware␠by␠now␠there␠are␠no␠classes␠in␠… | \|As\| | \|As\| |
| > | text/punctuation | 69 | 69 | 2.540890 | 4.558246 | -2.017355 | -139.197508 | instruction_tuning/lima_train | …BLE_BITCODE```␠in␠Xcode␠7?<\|im_end\|>⏎<\|im_start\|>assistant⏎>␠What␠is␠embedded␠bitcode?⏎According␠to␠docs:⏎⏎>␠Bitcode␠i… | \|>\| | \|>\| |
| this | text/word | 337 | 1348 | 0.582931 | 0.685686 | -0.102755 | -138.513986 | instruction_tuning/lima_train | …␠a␠player␠who␠remained␠silent␠rather␠than␠explicitly␠calling␠out␠a␠pair␠could␠be␠ruled␠against␠in␠this␠way.<\|im_end\|>⏎ | \|…this\| | \|…this\| |
| : | text/punctuation | 700 | 700 | 1.613678 | 1.807455 | -0.193776 | -135.643481 | instruction_tuning/lima_train | …t's␠the␠same␠reason␠you'll␠see␠words␠like␠"forté"␠with␠an␠é:␠English-speakers␠associate␠the␠acute␠accent␠with␠Romance␠… | \|:\| | \|:\| |
| * | text/punctuation | 549 | 549 | 1.340601 | 1.583085 | -0.242484 | -133.123863 | instruction_tuning/lima_train | …t␠the␠taste␠of␠the␠coffee?<\|im_end\|>⏎<\|im_start\|>assistant⏎*␠One␠reason␠that␠the␠taste␠isn't␠as␠good␠for␠Robusta␠is␠th… | \|*\| | \|*\| |
| all | text/word | 215 | 645 | 0.816643 | 1.020309 | -0.203665 | -131.364057 | instruction_tuning/lima_train | …n␠this␠regard.␠If␠you␠store␠the␠`Thread`␠object␠somewhere␠all␠threads␠can␠access␠(like␠a␠global␠variable)␠then␠all␠thr… | \|…all\| | \|…all\| |
| / | text/punctuation | 282 | 282 | 1.649843 | 2.106691 | -0.456848 | -128.831125 | instruction_tuning/lima_train | …ever,␠both␠these␠factors␠are␠not␠in␠any␠way␠close␠to␠the␠US/Chinese␠population␠ratio␠of␠about␠1/4.375,␠so␠the␠original… | \|/\| | \|/\| |
