# Perplexity Gap Report

**Model A:** marin-community/marin-32b-base

**Model B:** Qwen/Qwen3-32B

## Datasets

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| ppl_circuit_coverage/vocab_mechanics/token_chars | 126648 | 3909567 | 0.563348 | 0.225275 | 0.338073 | 1321717.165533 |
| ppl_circuit_coverage/text_mechanics/line_rhythm | 1000 | 58483 | 0.936259 | 0.742695 | 0.193564 | 11320.221457 |
| ppl_circuit_coverage/text_mechanics/character_indices | 1000 | 6268 | 2.273152 | 0.950101 | 1.323050 | 8292.878258 |
| ppl_circuit_coverage/python_interpretation/arithmetic_repl | 1000 | 3013 | 3.410476 | 2.033686 | 1.376790 | 4148.269224 |

## Dataset Groups

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| epic:5005 | 129648 | 3977331 | 0.573682 | 0.235395 | 0.338287 | 1345478.534471 |
| eval_only | 129648 | 3977331 | 0.573682 | 0.235395 | 0.338287 | 1345478.534471 |
| issue:6103 | 129648 | 3977331 | 0.573682 | 0.235395 | 0.338287 | 1345478.534471 |
| loss:target_only | 129648 | 3977331 | 0.573682 | 0.235395 | 0.338287 | 1345478.534471 |
| ppl_circuit_coverage | 129648 | 3977331 | 0.573682 | 0.235395 | 0.338287 | 1345478.534471 |
| seed:6103 | 129648 | 3977331 | 0.573682 | 0.235395 | 0.338287 | 1345478.534471 |
| source:generated_ppl_circuit_coverage_v1 | 129648 | 3977331 | 0.573682 | 0.235395 | 0.338287 | 1345478.534471 |
| tokenizer:marin-community | 129648 | 3977331 | 0.573682 | 0.235395 | 0.338287 | 1345478.534471 |
| tokenizer:marin-community/marin-tokenizer | 129648 | 3977331 | 0.573682 | 0.235395 | 0.338287 | 1345478.534471 |
| examples:tokenizer_vocab_coverage | 126648 | 3909567 | 0.563348 | 0.225275 | 0.338073 | 1321717.165533 |
| family:vocab_mechanics | 126648 | 3909567 | 0.563348 | 0.225275 | 0.338073 | 1321717.165533 |
| ppl_circuit_coverage/vocab_mechanics | 126648 | 3909567 | 0.563348 | 0.225275 | 0.338073 | 1321717.165533 |
| task:token_chars | 126648 | 3909567 | 0.563348 | 0.225275 | 0.338073 | 1321717.165533 |
| examples:1000 | 3000 | 67764 | 1.169930 | 0.819281 | 0.350649 | 23761.368939 |
| family:text_mechanics | 2000 | 64751 | 1.065673 | 0.762772 | 0.302900 | 19613.099715 |
| ppl_circuit_coverage/text_mechanics | 2000 | 64751 | 1.065673 | 0.762772 | 0.302900 | 19613.099715 |
| task:line_rhythm | 1000 | 58483 | 0.936259 | 0.742695 | 0.193564 | 11320.221457 |
| task:character_indices | 1000 | 6268 | 2.273152 | 0.950101 | 1.323050 | 8292.878258 |
| family:python_interpretation | 1000 | 3013 | 3.410476 | 2.033686 | 1.376790 | 4148.269224 |
| ppl_circuit_coverage/python_interpretation | 1000 | 3013 | 3.410476 | 2.033686 | 1.376790 | 4148.269224 |
| task:arithmetic_repl | 1000 | 3013 | 3.410476 | 2.033686 | 1.376790 | 4148.269224 |

## Pattern Buckets

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| text/punctuation | 1432112 | 2401100 | 0.576808 | 0.258266 | 0.318543 | 764853.213689 |
| text/word | 555937 | 579285 | 0.639765 | 0.171885 | 0.467880 | 271035.998789 |
| text/non_ascii_word | 68470 | 155800 | 1.404737 | 0.269409 | 1.135328 | 176884.157357 |
| whitespace/single_space | 673787 | 673787 | 0.235324 | 0.139249 | 0.096074 | 64733.577632 |
| whitespace/newline | 129648 | 129648 | 0.636429 | 0.289940 | 0.346489 | 44921.619721 |
| text/number | 8769 | 29213 | 1.822814 | 1.293865 | 0.528950 | 15452.205939 |
| text/non_ascii | 1311 | 8498 | 1.525776 | 0.631712 | 0.894065 | 7597.761344 |

## Top Documents: Model A Worse

| dataset | shard | row_index | bytes | score_byte_start | score_byte_end | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 110774 | 78 | 49 | 127 | 1.286583 | 0.070233 | 1.216350 | 94.875299 | text/non_ascii_word | х | 9.599536 | >>>␠token_chars("""␠характеристи""")⏎['␠',␠'х',␠'а',␠'р',␠'а',␠'к',␠'т',␠'е',␠'р',␠'и',␠'с',␠'т',␠'и']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 125284 | 84 | 51 | 135 | 1.189904 | 0.070246 | 1.119658 | 94.051285 | text/non_ascii_word | а | 7.839022 | >>>␠token_chars("""␠адміністратив""")⏎['␠',␠'а',␠'д',␠'м',␠'і',␠'н',␠'і',␠'с',␠'т',␠'р',␠'а',␠'т',␠'и',␠'в']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 124525 | 43 | 42 | 85 | 2.116996 | 0.015925 | 2.101072 | 90.346083 | text/non_ascii_word | 网 | 8.554271 | >>>␠token_chars("""网刊下载次数""")⏎['网',␠'刊',␠'下',␠'载',␠'次',␠'数']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 122295 | 62 | 37 | 99 | 1.492599 | 0.120337 | 1.372262 | 85.080239 | text/non_ascii_word | Č | 12.375292 | >>>␠token_chars("""␠Českosloven""")⏎['␠',␠'Č',␠'e',␠'s',␠'k',␠'o',␠'s',␠'l',␠'o',␠'v',␠'e',␠'n']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 125681 | 66 | 45 | 111 | 1.349384 | 0.078123 | 1.271261 | 83.903193 | text/non_ascii_word | п | 9.202382 | >>>␠token_chars("""␠профилакти""")⏎['␠',␠'п',␠'р',␠'о',␠'ф',␠'и',␠'л',␠'а',␠'к',␠'т',␠'и']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 112666 | 78 | 49 | 127 | 1.112236 | 0.058122 | 1.054114 | 82.220875 | text/non_ascii_word | з | 6.041668 | >>>␠token_chars("""␠забезпечення""")⏎['␠',␠'з',␠'а',␠'б',␠'е',␠'з',␠'п',␠'е',␠'ч',␠'е',␠'н',␠'н',␠'я']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 119418 | 66 | 45 | 111 | 1.339190 | 0.129884 | 1.209306 | 79.814200 | text/non_ascii_word | х | 9.837922 | >>>␠token_chars("""␠характериз""")⏎['␠',␠'х',␠'а',␠'р',␠'а',␠'к',␠'т',␠'е',␠'р',␠'и',␠'з']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 110743 | 57 | 36 | 93 | 1.459309 | 0.074610 | 1.384699 | 78.927829 | text/non_ascii_word | ş | 6.678157 | >>>␠token_chars("""␠arşivlendi""")⏎['␠',␠'a',␠'r',␠'ş',␠'i',␠'v',␠'l',␠'e',␠'n',␠'d',␠'i']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 112113 | 78 | 49 | 127 | 1.090823 | 0.080263 | 1.010560 | 78.823648 | text/non_ascii_word | и | 5.040428 | >>>␠token_chars("""␠використання""")⏎['␠',␠'в',␠'и',␠'к',␠'о',␠'р',␠'и',␠'с',␠'т',␠'а',␠'н',␠'н',␠'я']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 116452 | 61 | 44 | 105 | 1.296957 | 0.018894 | 1.278064 | 77.961876 | text/non_ascii_word | А | 12.913487 | >>>␠token_chars("""Архівовано""")⏎['А',␠'р',␠'х',␠'і',␠'в',␠'о',␠'в',␠'а',␠'н',␠'о']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 125266 | 72 | 47 | 119 | 1.199471 | 0.120440 | 1.079031 | 77.690268 | text/non_ascii_word | і | 4.781713 | >>>␠token_chars("""␠підприємств""")⏎['␠',␠'п',␠'і',␠'д',␠'п',␠'р',␠'и',␠'є',␠'м',␠'с',␠'т',␠'в']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 123014 | 96 | 55 | 151 | 0.875375 | 0.077458 | 0.797917 | 76.600039 | text/non_ascii_word | и | 4.462920 | >>>␠token_chars("""␠використовувати""")⏎['␠',␠'в',␠'и',␠'к',␠'о',␠'р',␠'и',␠'с',␠'т',␠'о',␠'в',␠'у',␠'в',␠'а',␠'т',␠'и… |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 123297 | 78 | 49 | 127 | 1.061272 | 0.100396 | 0.960876 | 74.948318 | text/non_ascii_word | б | 5.302612 | >>>␠token_chars("""␠відбувається""")⏎['␠',␠'в',␠'і',␠'д',␠'б',␠'у',␠'в',␠'а',␠'є',␠'т',␠'ь',␠'с',␠'я']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 107930 | 56 | 35 | 91 | 1.479142 | 0.145029 | 1.334114 | 74.710367 | text/word | e | 12.030910 | >>>␠token_chars("""␠eoqkrvldkf""")⏎['␠',␠'e',␠'o',␠'q',␠'k',␠'r',␠'v',␠'l',␠'d',␠'k',␠'f']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 117125 | 78 | 49 | 127 | 1.050661 | 0.101684 | 0.948977 | 74.020226 | text/non_ascii_word | и | 8.068353 | >>>␠token_chars("""␠использовани""")⏎['␠',␠'и',␠'с',␠'п',␠'о',␠'л',␠'ь',␠'з',␠'о',␠'в',␠'а',␠'н',␠'и']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 115730 | 54 | 41 | 95 | 1.426996 | 0.071294 | 1.355702 | 73.207908 | text/non_ascii_word | п | 12.465070 | >>>␠token_chars("""␠професси""")⏎['␠',␠'п',␠'р',␠'о',␠'ф',␠'е',␠'с',␠'с',␠'и']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 111338 | 78 | 49 | 127 | 1.031945 | 0.099743 | 0.932202 | 72.711763 | text/non_ascii_word | д | 7.695808 | >>>␠token_chars("""␠деятельности""")⏎['␠',␠'д',␠'е',␠'я',␠'т',␠'е',␠'л',␠'ь',␠'н',␠'о',␠'с',␠'т',␠'и']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 117045 | 34 | 37 | 71 | 2.245386 | 0.118198 | 2.127188 | 72.324397 | text/non_ascii_word | 노 | 7.080219 | >>>␠token_chars("""␠노출등록""")⏎['␠',␠'노',␠'출',␠'등',␠'록']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 123707 | 72 | 47 | 119 | 1.149697 | 0.150420 | 0.999277 | 71.947941 | text/non_ascii_word | ν | 7.381851 | >>>␠token_chars("""␠νεφοκάλυψης""")⏎['␠',␠'ν',␠'ε',␠'φ',␠'ο',␠'κ',␠'ά',␠'λ',␠'υ',␠'ψ',␠'η',␠'ς']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 125016 | 66 | 45 | 111 | 1.325256 | 0.238605 | 1.086651 | 71.718991 | text/non_ascii_word | п | 10.713643 | >>>␠token_chars("""␠предназнач""")⏎['␠',␠'п',␠'р',␠'е',␠'д',␠'н',␠'а',␠'з',␠'н',␠'а',␠'ч']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 125772 | 47 | 38 | 85 | 1.552884 | 0.030146 | 1.522739 | 71.568719 | text/non_ascii_word | Ў | 8.473789 | >>>␠token_chars("""ЎыџNЎыџN""")⏎['Ў',␠'ы',␠'џ',␠'N',␠'Ў',␠'ы',␠'џ',␠'N']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 107466 | 51 | 34 | 85 | 1.421678 | 0.019558 | 1.402120 | 71.508127 | text/word | i | 13.051696 | >>>␠token_chars("""ilmektedir""")⏎['i',␠'l',␠'m',␠'e',␠'k',␠'t',␠'e',␠'d',␠'i',␠'r']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 106126 | 66 | 45 | 111 | 1.217562 | 0.135429 | 1.082133 | 71.420797 | text/non_ascii_word | в | 8.239718 | >>>␠token_chars("""␠використов""")⏎['␠',␠'в',␠'и',␠'к',␠'о',␠'р',␠'и',␠'с',␠'т',␠'о',␠'в']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 123169 | 78 | 49 | 127 | 0.963874 | 0.054952 | 0.908922 | 70.895909 | text/non_ascii_word | ю | 4.701181 | >>>␠token_chars("""␠захворювання""")⏎['␠',␠'з',␠'а',␠'х',␠'в',␠'о',␠'р',␠'ю',␠'в',␠'а',␠'н',␠'н',␠'я']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 115154 | 34 | 37 | 71 | 2.241949 | 0.174349 | 2.067599 | 70.298378 | text/non_ascii_word | 등 | 7.666061 | >>>␠token_chars("""␠등록대행""")⏎['␠',␠'등',␠'록',␠'대',␠'행']⏎ |

## Top Documents: Model B Worse

| dataset | shard | row_index | bytes | score_byte_start | score_byte_end | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 83966 | 46 | 33 | 79 | 0.556531 | 1.559108 | -1.002577 | -46.118548 | text/word | w | -17.551719 | >>>␠token_chars("""␠wannonce""")⏎['␠',␠'w',␠'a',␠'n',␠'n',␠'o',␠'n',␠'c',␠'e']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 86656 | 61 | 36 | 97 | 0.533097 | 1.139369 | -0.606272 | -36.982605 | text/word | n | -7.829942 | >>>␠token_chars("""␠sexkontakte""")⏎['␠',␠'s',␠'e',␠'x',␠'k',␠'o',␠'n',␠'t',␠'a',␠'k',␠'t',␠'e']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 65287 | 56 | 35 | 91 | 0.489528 | 1.090515 | -0.600987 | -33.655253 | text/word | v | -13.251872 | >>>␠token_chars("""␠vivastreet""")⏎['␠',␠'v',␠'i',␠'v',␠'a',␠'s',␠'t',␠'r',␠'e',␠'e',␠'t']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 62411 | 41 | 32 | 73 | 0.521114 | 1.291522 | -0.770408 | -31.586743 | text/word | d | -9.797161 | >>>␠token_chars("""␠sexdate""")⏎['␠',␠'s',␠'e',␠'x',␠'d',␠'a',␠'t',␠'e']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 40271 | 52 | 34 | 86 | 0.390459 | 0.969304 | -0.578846 | -30.099970 | text/word | N | -11.864087 | >>>␠token_chars("""⇥TokenName""")⏎['\\t',␠'T',␠'o',␠'k',␠'e',␠'n',␠'N',␠'a',␠'m',␠'e']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 46457 | 61 | 36 | 97 | 0.445138 | 0.915704 | -0.470566 | -28.704538 | text/word | s | -10.569358 | >>>␠token_chars("""␠swingerclub""")⏎['␠',␠'s',␠'w',␠'i',␠'n',␠'g',␠'e',␠'r',␠'c',␠'l',␠'u',␠'b']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 69096 | 36 | 31 | 67 | 0.576030 | 1.362704 | -0.786675 | -28.320286 | text/word | i | -15.398427 | >>>␠token_chars("""erdings""")⏎['e',␠'r',␠'d',␠'i',␠'n',␠'g',␠'s']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 97172 | 56 | 35 | 91 | 0.609848 | 1.111569 | -0.501721 | -28.096379 | text/word | x | -12.100203 | >>>␠token_chars("""␠sextreffen""")⏎['␠',␠'s',␠'e',␠'x',␠'t',␠'r',␠'e',␠'f',␠'f',␠'e',␠'n']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 38820 | 41 | 32 | 73 | 0.362770 | 1.021015 | -0.658245 | -26.988060 | text/word | e | -8.980834 | >>>␠token_chars("""␠eskorte""")⏎['␠',␠'e',␠'s',␠'k',␠'o',␠'r',␠'t',␠'e']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 67627 | 16 | 3 | 19 | 2.371002 | 3.969736 | -1.598734 | -25.579745 | text/punctuation | ['(', | -3.698696 | (?:['(',␠'?',␠':']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 78741 | 76 | 39 | 115 | 0.875130 | 1.185052 | -0.309921 | -23.554025 | text/word | t | -10.833787 | >>>␠token_chars("""␠thuisontvangst""")⏎['␠',␠'t',␠'h',␠'u',␠'i',␠'s',␠'o',␠'n',␠'t',␠'v',␠'a',␠'n',␠'g',␠'s',␠'t']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 59493 | 91 | 42 | 133 | 0.566592 | 0.808143 | -0.241551 | -21.981116 | text/word | o | -9.996542 | …oken_chars("""MASConstraintMaker""")⏎['M',␠'A',␠'S',␠'C',␠'o',␠'n',␠'s',␠'t',␠'r',␠'a',␠'i',␠'n',␠'t',␠'M',␠'a',␠'k',␠… |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 99172 | 41 | 32 | 73 | 0.860676 | 1.393493 | -0.532817 | -21.845492 | text/word | d | -8.041444 | >>>␠token_chars("""␠davidjl""")⏎['␠',␠'d',␠'a',␠'v',␠'i',␠'d',␠'j',␠'l']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 51183 | 66 | 37 | 103 | 0.582911 | 0.906085 | -0.323174 | -21.329467 | text/word | p | -8.178307 | >>>␠token_chars("""␠prostituerte""")⏎['␠',␠'p',␠'r',␠'o',␠'s',␠'t',␠'i',␠'t',␠'u',␠'e',␠'r',␠'t',␠'e']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 64019 | 71 | 81 | 152 | 0.492511 | 0.788213 | -0.295703 | -20.994900 | text/word | p | -9.587274 | …oproject⏎token_chars␠raw␠block␠end⏎characters:⏎['.',␠'d',␠'j',␠'a',␠'n',␠'g',␠'o',␠'p',␠'r',␠'o',␠'j',␠'e',␠'c',␠'t']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 32887 | 31 | 30 | 61 | 0.210957 | 0.887908 | -0.676951 | -20.985472 | text/word | t | -17.438648 | >>>␠token_chars("""iosity""")⏎['i',␠'o',␠'s',␠'i',␠'t',␠'y']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 88747 | 56 | 35 | 91 | 0.950894 | 1.309672 | -0.358778 | -20.091554 | text/word | u | -5.378970 | >>>␠token_chars("""useRalative""")⏎['u',␠'s',␠'e',␠'R',␠'a',␠'l',␠'a',␠'t',␠'i',␠'v',␠'e']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 53420 | 16 | 3 | 19 | 3.272459 | 4.527444 | -1.254985 | -20.079761 | text/punctuation | [']', | -2.867046 | ]+"[']',␠'+',␠'"']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 75603 | 57 | 35 | 92 | 1.069129 | 1.414797 | -0.345669 | -19.703114 | text/word | N | -9.225047 | >>>␠token_chars("""⇥NdrFcShort""")⏎['\\t',␠'N',␠'d',␠'r',␠'F',␠'c',␠'S',␠'h',␠'o',␠'r',␠'t']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 61900 | 17 | 3 | 20 | 2.675684 | 3.813359 | -1.137676 | -19.340486 | text/punctuation | ['+', | -1.126847 | +'\\['+',␠"'",␠'\\\\']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 82343 | 36 | 31 | 67 | 0.960738 | 1.497692 | -0.536953 | -19.330325 | text/word | k | -12.894884 | >>>␠token_chars("""␠bakeka""")⏎['␠',␠'b',␠'a',␠'k',␠'e',␠'k',␠'a']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 26212 | 33 | 30 | 63 | 1.028585 | 1.603278 | -0.574692 | -18.964840 | text/punctuation | '"', | -1.319039 | >>>␠token_chars("""␠"""↵⏎""")⏎['␠',␠'"',␠'"',␠'"',␠'\\r',␠'\\n']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 18793 | 56 | 35 | 91 | 0.629090 | 0.967391 | -0.338301 | -18.944831 | text/punctuation | '.', | -1.886830 | >>>␠token_chars("""␠'../../../""")⏎['␠',␠"'",␠'.',␠'.',␠'/',␠'.',␠'.',␠'/',␠'.',␠'.',␠'/']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 66360 | 61 | 36 | 97 | 0.351709 | 0.657655 | -0.305946 | -18.662686 | text/word | s | -7.122219 | >>>␠token_chars("""␠thaimassage""")⏎['␠',␠'t',␠'h',␠'a',␠'i',␠'m',␠'a',␠'s',␠'s',␠'a',␠'g',␠'e']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | vocab_mechanics_token_chars_jsonl_gz | 76462 | 56 | 35 | 91 | 0.370503 | 0.700883 | -0.330379 | -18.501250 | text/word | d | -8.319856 | >>>␠token_chars("""␠datingside""")⏎['␠',␠'d',␠'a',␠'t',␠'i',␠'n',␠'g',␠'s',␠'i',␠'d',␠'e']⏎ |

## Top Segments: Model A Worse

| dataset | bucket | bytes | delta_bits | gap_bpb | text | doc_preview |
| --- | --- | --- | --- | --- | --- | --- |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii | 7 | 30.015899 | 4.287986 | ['／', | >>>␠token_chars("""／／／／／／／／""")⏎['／',␠'／',␠'／',␠'／',␠'／',␠'／',␠'／',␠'／']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 26.652121 | 8.884040 | ﾆ | >>>␠token_chars("""ﾆﾆﾆﾆ""")⏎['ﾆ',␠'ﾆ',␠'ﾆ',␠'ﾆ']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii | 7 | 26.613346 | 3.801907 | ['）', | token_chars␠raw␠block␠begin⏎）は⏎token_chars␠raw␠block␠end⏎characters:⏎['）',␠'は']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 2 | 25.826973 | 12.913487 | А | >>>␠token_chars("""Архівовано""")⏎['А',␠'р',␠'х',␠'і',␠'в',␠'о',␠'в',␠'а',␠'н',␠'о']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 25.662814 | 8.554271 | 网 | >>>␠token_chars("""网刊下载次数""")⏎['网',␠'刊',␠'下',␠'载',␠'次',␠'数']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 2 | 25.172113 | 12.586056 | џ | >>>␠token_chars("""џN""")⏎['џ',␠'N']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 25.158695 | 8.386232 | ै | >>>␠token_chars("""ै.⏎""")⏎['ै',␠'.',␠'\\n']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 25.040818 | 8.346939 | ै | >>>␠token_chars("""ैं.⏎""")⏎['ै',␠'ं',␠'.',␠'\\n']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 25.021570 | 8.340523 | 갤 | >>>␠token_chars("""␠갤로그로""")⏎['␠',␠'갤',␠'로',␠'그',␠'로']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii | 7 | 24.953128 | 3.564733 | ['）', | token_chars␠raw␠block␠begin⏎）の⏎token_chars␠raw␠block␠end⏎characters:⏎['）',␠'の']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 24.949333 | 8.316444 | 매 | >>>␠token_chars("""␠매매가""")⏎['␠',␠'매',␠'매',␠'가']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 2 | 24.930140 | 12.465070 | п | >>>␠token_chars("""␠професси""")⏎['␠',␠'п',␠'р',␠'о',␠'ф',␠'е',␠'с',␠'с',␠'и']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 2 | 24.750585 | 12.375292 | Č | >>>␠token_chars("""␠Českosloven""")⏎['␠',␠'Č',␠'e',␠'s',␠'k',␠'o',␠'s',␠'l',␠'o',␠'v',␠'e',␠'n']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 24.662172 | 8.220724 | ी | >>>␠token_chars("""ी)""")⏎['ी',␠')']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii | 7 | 24.542530 | 3.506076 | ['・', | >>>␠token_chars("""・━・━""")⏎['・',␠'━',␠'・',␠'━']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 24.421225 | 8.140408 | ै | >>>␠token_chars("""ै?⏎""")⏎['ै',␠'?',␠'\\n']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 24.316748 | 8.105583 | ์ | >>>␠token_chars("""์)""")⏎['์',␠')']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 24.131901 | 8.043967 | 重 | >>>␠token_chars("""重複重複""")⏎['重',␠'複',␠'重',␠'複']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii | 7 | 24.054734 | 3.436391 | ['・', | >>>␠token_chars("""・━""")⏎['・',␠'━']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii | 6 | 24.011794 | 4.001966 | ['±', | token_chars␠raw␠block␠begin⏎±ظ⏎token_chars␠raw␠block␠end⏎characters:⏎['±',␠'ظ']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/punctuation | 5 | 23.977095 | 4.795419 | ["'", | >>>␠token_chars("""'])){⏎""")⏎["'",␠']',␠')',␠')',␠'{',␠'\\n']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 23.949547 | 7.983182 | े | >>>␠token_chars("""े-""")⏎['े',␠'-']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 23.880676 | 7.960225 | 글 | >>>␠token_chars("""글상위""")⏎['글',␠'상',␠'위']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/punctuation | 5 | 23.714395 | 4.742879 | ['}', | >>>␠token_chars("""});⏎⏎⏎""")⏎['}',␠')',␠';',␠'\\n',␠'\\n',␠'\\n']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 2 | 23.703304 | 11.851652 | м | >>>␠token_chars("""␠мови""")⏎['␠',␠'м',␠'о',␠'в',␠'и']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/punctuation | 5 | 23.688644 | 4.737729 | ["'", | >>>␠token_chars("""');↵⏎""")⏎["'",␠')',␠';',␠'\\r',␠'\\n']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii | 7 | 23.587689 | 3.369670 | ['」', | token_chars␠raw␠block␠begin⏎」と⏎token_chars␠raw␠block␠end⏎characters:⏎['」',␠'と']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/punctuation | 5 | 23.443251 | 4.688650 | ['}', | >>>␠token_chars("""})⏎⏎⏎""")⏎['}',␠')',␠'\\n',␠'\\n',␠'\\n']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 23.400375 | 7.800125 | 醴 | >>>␠token_chars("""醴醴""")⏎['醴',␠'醴']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii | 6 | 23.304432 | 3.884072 | ['±', | token_chars␠raw␠block␠begin⏎±ط⏎token_chars␠raw␠block␠end⏎characters:⏎['±',␠'ط']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 23.296792 | 7.765597 | ा | >>>␠token_chars("""ा)""")⏎['ा',␠')']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 23.251273 | 7.750424 | 만 | >>>␠token_chars("""만원입니다""")⏎['만',␠'원',␠'입',␠'니',␠'다']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 23.150821 | 7.716940 | ै | >>>␠token_chars("""ै?""")⏎['ै',␠'?']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/punctuation | 5 | 23.148407 | 4.629681 | ['}', | >>>␠token_chars("""}))⏎⏎""")⏎['}',␠')',␠')',␠'\\n',␠'\\n']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/punctuation | 5 | 23.127782 | 4.625556 | ['}', | >>>␠token_chars("""}")⏎⏎""")⏎['}',␠'"',␠')',␠'\\n',␠'\\n']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 2 | 23.020602 | 11.510301 | з | >>>␠token_chars("""␠землі""")⏎['␠',␠'з',␠'е',␠'м',␠'л',␠'і']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 22.998182 | 7.666061 | 등 | >>>␠token_chars("""␠등록대행""")⏎['␠',␠'등',␠'록',␠'대',␠'행']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 2 | 22.890905 | 11.445452 | д | >>>␠token_chars("""␠диза""")⏎['␠',␠'д',␠'и',␠'з',␠'а']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | 22.755346 | 7.585115 | 神 | >>>␠token_chars("""␠神马收录""")⏎['␠',␠'神',␠'马',␠'收',␠'录']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 2 | 22.708595 | 11.354297 | з | >>>␠token_chars("""␠здат""")⏎['␠',␠'з',␠'д',␠'а',␠'т']⏎ |

## Top Segments: Model B Worse

| dataset | bucket | bytes | delta_bits | gap_bpb | text | doc_preview |
| --- | --- | --- | --- | --- | --- | --- |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -22.346765 | -22.346765 | j | >>>␠token_chars("""nestjs""")⏎['n',␠'e',␠'s',␠'t',␠'j',␠'s']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -19.706595 | -19.706595 | o | >>>␠token_chars("""AccessorType""")⏎['A',␠'c',␠'c',␠'e',␠'s',␠'s',␠'o',␠'r',␠'T',␠'y',␠'p',␠'e']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -19.042632 | -19.042632 | r | >>>␠token_chars("""␠judiciary""")⏎['␠',␠'j',␠'u',␠'d',␠'i',␠'c',␠'i',␠'a',␠'r',␠'y']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -18.984533 | -18.984533 | q | >>>␠token_chars("""buquerque""")⏎['b',␠'u',␠'q',␠'u',␠'e',␠'r',␠'q',␠'u',␠'e']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/punctuation | 5 | -18.493481 | -3.698696 | ['(', | (?:['(',␠'?',␠':']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -17.850224 | -17.850224 | p | …_chars("""␠sourceMappingURL""")⏎['␠',␠'s',␠'o',␠'u',␠'r',␠'c',␠'e',␠'M',␠'a',␠'p',␠'p',␠'i',␠'n',␠'g',␠'U',␠'R',␠'L']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -17.551719 | -17.551719 | w | >>>␠token_chars("""␠wannonce""")⏎['␠',␠'w',␠'a',␠'n',␠'n',␠'o',␠'n',␠'c',␠'e']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -17.438648 | -17.438648 | t | >>>␠token_chars("""iosity""")⏎['i',␠'o',␠'s',␠'i',␠'t',␠'y']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -17.338602 | -17.338602 | O | >>>␠token_chars("""␠SubLObject""")⏎['␠',␠'S',␠'u',␠'b',␠'L',␠'O',␠'b',␠'j',␠'e',␠'c',␠'t']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -16.373938 | -16.373938 | C | >>>␠token_chars("""TexCoord""")⏎['T',␠'e',␠'x',␠'C',␠'o',␠'o',␠'r',␠'d']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -16.178017 | -16.178017 | T | >>>␠token_chars("""␠XCTAssert""")⏎['␠',␠'X',␠'C',␠'T',␠'A',␠'s',␠'s',␠'e',␠'r',␠'t']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -16.174280 | -16.174280 | f | >>>␠token_chars("""ificador""")⏎['i',␠'f',␠'i',␠'c',␠'a',␠'d',␠'o',␠'r']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/punctuation | 4 | -16.151222 | -4.037806 | '!', | >>>␠token_chars("""␠!!}""")⏎['␠',␠'!',␠'!',␠'}']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -16.096573 | -16.096573 | g | >>>␠token_chars("""␠innings""")⏎['␠',␠'i',␠'n',␠'n',␠'i',␠'n',␠'g',␠'s']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -15.854450 | -15.854450 | B | >>>␠token_chars("""toBeInTheDocument""")⏎['t',␠'o',␠'B',␠'e',␠'I',␠'n',␠'T',␠'h',␠'e',␠'D',␠'o',␠'c',␠'u',␠'m',␠'e',␠'… |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -15.653689 | -15.653689 | R | >>>␠token_chars("""⇥RTHOOK""")⏎['\\t',␠'R',␠'T',␠'H',␠'O',␠'O',␠'K']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -15.398427 | -15.398427 | i | >>>␠token_chars("""erdings""")⏎['e',␠'r',␠'d',␠'i',␠'n',␠'g',␠'s']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -15.354227 | -15.354227 | u | >>>␠token_chars("""␠astounding""")⏎['␠',␠'a',␠'s',␠'t',␠'o',␠'u',␠'n',␠'d',␠'i',␠'n',␠'g']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -15.231572 | -15.231572 | l | >>>␠token_chars("""␠everlasting""")⏎['␠',␠'e',␠'v',␠'e',␠'r',␠'l',␠'a',␠'s',␠'t',␠'i',␠'n',␠'g']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -15.199616 | -15.199616 | o | >>>␠token_chars("""uento""")⏎['u',␠'e',␠'n',␠'t',␠'o']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -15.157253 | -15.157253 | b | >>>␠token_chars("""ibbean""")⏎['i',␠'b',␠'b',␠'e',␠'a',␠'n']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -15.010869 | -15.010869 | a | …␠token_chars("""TouchableOpacity""")⏎['T',␠'o',␠'u',␠'c',␠'h',␠'a',␠'b',␠'l',␠'e',␠'O',␠'p',␠'a',␠'c',␠'i',␠'t',␠'y']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -14.911587 | -14.911587 | P | >>>␠token_chars("""arParams""")⏎['a',␠'r',␠'P',␠'a',␠'r',␠'a',␠'m',␠'s']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | -14.828101 | -4.942700 | ㅇ | >>>␠token_chars("""␠ㅇㅇ""")⏎['␠',␠'ㅇ',␠'ㅇ']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -14.812445 | -14.812445 | n | >>>␠token_chars("""embrance""")⏎['e',␠'m',␠'b',␠'r',␠'a',␠'n',␠'c',␠'e']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | -14.601342 | -4.867114 | ภ | >>>␠token_chars("""␠พฤษภาคม""")⏎['␠',␠'พ',␠'ฤ',␠'ษ',␠'ภ',␠'า',␠'ค',␠'ม']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -14.587448 | -14.587448 | g | >>>␠token_chars("""igInteger""")⏎['i',␠'g',␠'I',␠'n',␠'t',␠'e',␠'g',␠'e',␠'r']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -14.573455 | -14.573455 | g | >>>␠token_chars("""tridges""")⏎['t',␠'r',␠'i',␠'d',␠'g',␠'e',␠'s']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | -14.416864 | -4.805621 | ㅡ | >>>␠token_chars("""␠ㅡ""")⏎['␠',␠'ㅡ']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -14.412925 | -14.412925 | a | …_chars("""␠TouchableOpacity""")⏎['␠',␠'T',␠'o',␠'u',␠'c',␠'h',␠'a',␠'b',␠'l',␠'e',␠'O',␠'p',␠'a',␠'c',␠'i',␠'t',␠'y']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -14.372839 | -14.372839 | I | >>>␠token_chars("""ISyntaxException""")⏎['I',␠'S',␠'y',␠'n',␠'t',␠'a',␠'x',␠'E',␠'x',␠'c',␠'e',␠'p',␠'t',␠'i',␠'o',␠'n… |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 2 | -14.341172 | -7.170586 | ø | >>>␠token_chars("""ketøy""")⏎['k',␠'e',␠'t',␠'ø',␠'y']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/punctuation | 5 | -14.335232 | -2.867046 | [']', | ]+"[']',␠'+',␠'"']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/punctuation | 4 | -14.277907 | -3.569477 | '<', | >>>␠token_chars("""')?></""")⏎["'",␠')',␠'?',␠'>',␠'<',␠'/']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -14.260322 | -14.260322 | m | >>>␠token_chars("""mızı""")⏎['m',␠'ı',␠'z',␠'ı']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -14.215481 | -14.215481 | J | >>>␠token_chars("""␠DJs""")⏎['␠',␠'D',␠'J',␠'s']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/non_ascii_word | 3 | -14.210298 | -4.736766 | ง | >>>␠token_chars("""ตรง""")⏎['ต',␠'ร',␠'ง']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -14.072372 | -14.072372 | a | >>>␠token_chars("""ordial""")⏎['o',␠'r',␠'d',␠'i',␠'a',␠'l']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -14.016524 | -14.016524 | f | >>>␠token_chars("""addafi""")⏎['a',␠'d',␠'d',␠'a',␠'f',␠'i']⏎ |
| ppl_circuit_coverage/vocab_mechanics/token_chars | text/word | 1 | -13.989825 | -13.989825 | o | >>>␠token_chars("""caffold""")⏎['c',␠'a',␠'f',␠'f',␠'o',␠'l',␠'d']⏎ |

## Top Literals: Model A Worse

Representative token boundaries come from the highest-gap occurrence for each literal. `|` marks token boundaries for each model; an ellipsis means the token continues outside the literal boundary in that example.

| name | bucket | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | example_dataset | example_doc_preview | model_a_token_boundaries | model_b_token_boundaries |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [' | text/punctuation | 101704 | 203408 | 2.439141 | 0.257564 | 2.181577 | 443750.139445 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠));⏎""")⏎['␠',␠')',␠')',␠';',␠'\\n']⏎ | \|['\| | \|['\| |
| '] | text/punctuation | 122502 | 245004 | 0.616745 | 0.268061 | 0.348684 | 85428.967582 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠řid""")⏎['␠',␠'ř',␠'i',␠'d']⏎ | \|']…\| | \|']…\| |
| ', | text/punctuation | 566459 | 1132918 | 0.196051 | 0.129744 | 0.066306 | 75119.432019 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""CompanyName""")⏎['C',␠'o',␠'m',␠'p',␠'a',␠'n',␠'y',␠'N',␠'a',␠'m',␠'e']⏎ | \|',\| | \|',\| |
| ␠ | whitespace/single_space | 673787 | 673787 | 0.235324 | 0.139249 | 0.096074 | 64733.577632 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""')?></""")⏎["'",␠')',␠'?',␠'>',␠'<',␠'/']⏎ | \|␠…\| | \|␠…\| |
| ⏎ | whitespace/newline | 129648 | 129648 | 0.636429 | 0.289940 | 0.346489 | 44921.619721 | ppl_circuit_coverage/python_interpretation/arithmetic_repl | >>>␠(((15␠*␠-9)␠-␠(16␠*␠17))␠*␠((7␠+␠-2)␠+␠(7␠-␠-2)))⏎-5698⏎ | \|⏎\| | \|⏎\| |
| ['.', | text/punctuation | 6136 | 30680 | 3.264430 | 1.834446 | 1.429984 | 43871.920516 | ppl_circuit_coverage/vocab_mechanics/token_chars | …in⏎.LayoutInflater⏎token_chars␠raw␠block␠end⏎characters:⏎['.',␠'L',␠'a',␠'y',␠'o',␠'u',␠'t',␠'I',␠'n',␠'f',␠'l',␠'a',␠… | \|['\|.',\| | \|['\|.',\| |
| ' | text/punctuation | 580524 | 580524 | 0.061918 | 0.012225 | 0.049693 | 28848.229933 | ppl_circuit_coverage/vocab_mechanics/token_chars | token_chars␠raw␠block␠begin⏎(tokens⏎token_chars␠raw␠block␠end⏎characters:⏎['(',␠'t',␠'o',␠'k',␠'e',␠'n',␠'s']⏎ | \|…'\| | \|…'\| |
| e | text/word | 59097 | 59097 | 0.400551 | 0.090206 | 0.310345 | 18340.449727 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠článek""")⏎['␠',␠'č',␠'l',␠'á',␠'n',␠'e',␠'k']⏎ | \|e\| | \|e\| |
| s | text/word | 32328 | 32328 | 0.692447 | 0.167570 | 0.524877 | 16968.218981 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""cassert""")⏎['c',␠'a',␠'s',␠'s',␠'e',␠'r',␠'t']⏎ | \|s\| | \|s\| |
| ['(', | text/punctuation | 2651 | 13255 | 3.202311 | 1.973679 | 1.228632 | 16285.520084 | ppl_circuit_coverage/vocab_mechanics/token_chars | ((((['(',␠'(',␠'(',␠'(']⏎ | \|['\|(',\| | \|['\|(',\| |
| r | text/word | 36782 | 36782 | 0.575582 | 0.176262 | 0.399319 | 14687.757249 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠judiciary""")⏎['␠',␠'j',␠'u',␠'d',␠'i',␠'c',␠'i',␠'a',␠'r',␠'y']⏎ | \|r\| | \|r\| |
| i | text/word | 38381 | 38381 | 0.510670 | 0.129129 | 0.381541 | 14643.936363 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""erdings""")⏎['e',␠'r',␠'d',␠'i',␠'n',␠'g',␠'s']⏎ | \|i\| | \|i\| |
| a | text/word | 39260 | 39260 | 0.482476 | 0.109951 | 0.372525 | 14625.337618 | ppl_circuit_coverage/vocab_mechanics/token_chars | …␠token_chars("""TouchableOpacity""")⏎['T',␠'o',␠'u',␠'c',␠'h',␠'a',␠'b',␠'l',␠'e',␠'O',␠'p',␠'a',␠'c',␠'i',␠'t',␠'y']⏎ | \|a\| | \|a\| |
| c | text/word | 19695 | 19695 | 0.906850 | 0.189240 | 0.717609 | 14133.316968 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""syscall""")⏎['s',␠'y',␠'s',␠'c',␠'a',␠'l',␠'l']⏎ | \|c\| | \|c\| |
| ['-', | text/punctuation | 1914 | 9570 | 3.446978 | 2.050435 | 1.396543 | 13364.918952 | ppl_circuit_coverage/vocab_mechanics/token_chars | token_chars␠raw␠block␠begin⏎-sum⏎token_chars␠raw␠block␠end⏎characters:⏎['-',␠'s',␠'u',␠'m']⏎ | \|['\|-',\| | \|['\|-',\| |
| t | text/word | 39968 | 39968 | 0.482604 | 0.153463 | 0.329141 | 13155.102372 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""iosity""")⏎['i',␠'o',␠'s',␠'i',␠'t',␠'y']⏎ | \|t\| | \|t\| |
| o | text/word | 32640 | 32640 | 0.445880 | 0.098063 | 0.347817 | 11352.752072 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""AccessorType""")⏎['A',␠'c',␠'c',␠'e',␠'s',␠'s',␠'o',␠'r',␠'T',␠'y',␠'p',␠'e']⏎ | \|o\| | \|o\| |
| l | text/word | 24477 | 24477 | 0.515081 | 0.097924 | 0.417157 | 10210.751842 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""ælland""")⏎['æ',␠'l',␠'l',␠'a',␠'n',␠'d']⏎ | \|l\| | \|l\| |
| n | text/word | 38393 | 38393 | 0.369737 | 0.108907 | 0.260830 | 10014.061622 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""čně""")⏎['č',␠'n',␠'ě']⏎ | \|n\| | \|n\| |
| p | text/word | 14304 | 14304 | 0.893168 | 0.210964 | 0.682204 | 9758.243556 | ppl_circuit_coverage/vocab_mechanics/token_chars | …_chars("""␠sourceMappingURL""")⏎['␠',␠'s',␠'o',␠'u',␠'r',␠'c',␠'e',␠'M',␠'a',␠'p',␠'p',␠'i',␠'n',␠'g',␠'U',␠'R',␠'L']⏎ | \|p\| | \|p\| |
| d | text/word | 18275 | 18275 | 0.625264 | 0.147220 | 0.478044 | 8736.250720 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠både""")⏎['␠',␠'b',␠'å',␠'d',␠'e']⏎ | \|d\| | \|d\| |
| m | text/word | 14032 | 14032 | 0.720485 | 0.133296 | 0.587189 | 8239.438037 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""mızı""")⏎['m',␠'ı',␠'z',␠'ı']⏎ | \|m\| | \|m\| |
| u | text/word | 16440 | 16440 | 0.658211 | 0.180713 | 0.477498 | 7850.063917 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠astounding""")⏎['␠',␠'a',␠'s',␠'t',␠'o',␠'u',␠'n',␠'d',␠'i',␠'n',␠'g']⏎ | \|u\| | \|u\| |
| ['\\ | text/punctuation | 1671 | 5013 | 3.542284 | 2.121595 | 1.420689 | 7121.913096 | ppl_circuit_coverage/vocab_mechanics/token_chars | token_chars␠raw␠block␠begin⏎‌تواند⏎token_chars␠raw␠block␠end⏎characters:⏎['\\u200c',␠'ت',␠'و',␠'ا',␠'ن',␠'د']⏎ | \|['\|\\\| | \|['\|\\\| |
| g | text/word | 12019 | 12019 | 0.681064 | 0.138689 | 0.542375 | 6518.806108 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠innings""")⏎['␠',␠'i',␠'n',␠'n',␠'i',␠'n',␠'g',␠'s']⏎ | \|g\| | \|g\| |
| C | text/word | 4705 | 4705 | 1.803331 | 0.578687 | 1.224644 | 5761.948493 | ppl_circuit_coverage/vocab_mechanics/token_chars | …␠token_chars("""␠activeClassName""")⏎['␠',␠'a',␠'c',␠'t',␠'i',␠'v',␠'e',␠'C',␠'l',␠'a',␠'s',␠'s',␠'N',␠'a',␠'m',␠'e']⏎ | \|C\| | \|C\| |
| S | text/word | 5232 | 5232 | 1.560569 | 0.469728 | 1.090841 | 5707.282418 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠weakSelf""")⏎['␠',␠'w',␠'e',␠'a',␠'k',␠'S',␠'e',␠'l',␠'f']⏎ | \|S\| | \|S\| |
| и | text/non_ascii_word | 1754 | 3508 | 1.687097 | 0.091059 | 1.596038 | 5598.900060 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""итися""")⏎['и',␠'т',␠'и',␠'с',␠'я']⏎ | \|и\| | \|и\| |
| о | text/non_ascii_word | 2657 | 5314 | 1.078800 | 0.065692 | 1.013107 | 5383.652082 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠останні""")⏎['␠',␠'о',␠'с',␠'т',␠'а',␠'н',␠'н',␠'і']⏎ | \|о\| | \|о\| |
| а | text/non_ascii_word | 2086 | 4172 | 1.263016 | 0.040811 | 1.222206 | 5099.042755 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""адження""")⏎['а',␠'д',␠'ж',␠'е',␠'н',␠'н',␠'я']⏎ | \|а\| | \|а\| |
| ['/', | text/punctuation | 1156 | 5780 | 3.009067 | 2.138880 | 0.870186 | 5029.676262 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""/／""")⏎['/',␠'／']⏎ | \|['\|/',\| | \|['\|/',\| |
| f | text/word | 6170 | 6170 | 0.977437 | 0.179374 | 0.798063 | 4924.046465 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""ificador""")⏎['i',␠'f',␠'i',␠'c',␠'a',␠'d',␠'o',␠'r']⏎ | \|f\| | \|f\| |
| b | text/word | 7439 | 7439 | 0.821251 | 0.193834 | 0.627417 | 4667.356188 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""ibbean""")⏎['i',␠'b',␠'b',␠'e',␠'a',␠'n']⏎ | \|b\| | \|b\| |
| е | text/non_ascii_word | 1916 | 3832 | 1.235879 | 0.063731 | 1.172148 | 4491.672457 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""еріга""")⏎['е',␠'р',␠'і',␠'г',␠'а']⏎ | \|е\| | \|е\| |
| с | text/non_ascii_word | 1429 | 2858 | 1.624571 | 0.109611 | 1.514960 | 4329.756795 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""слід""")⏎['с',␠'л',␠'і',␠'д']⏎ | \|с\| | \|с\| |
| v | text/word | 6020 | 6020 | 0.908038 | 0.191155 | 0.716883 | 4315.635364 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""avadoc""")⏎['a',␠'v',␠'a',␠'d',␠'o',␠'c']⏎ | \|v\| | \|v\| |
| h | text/word | 9723 | 9723 | 0.536648 | 0.101996 | 0.434652 | 4226.120882 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠trhu""")⏎['␠',␠'t',␠'r',␠'h',␠'u']⏎ | \|h\| | \|h\| |
| line_lengths | text/word | 1000 | 12000 | 0.398607 | 0.060263 | 0.338345 | 4060.135127 | ppl_circuit_coverage/text_mechanics/line_rhythm | …␠␠oxpkqip⏎␠␠␠mmvxzp⏎␠bveu⏎erdgv⏎␠␠␠␠bwdwd⏎␠␠␠␠r⏎result:⏎{"line_lengths":[11,9,5,5,9,5],"indent_widths":[4,3,1,0,4,4]}⏎ | \|line\|_lengths\| | \|line\|_lengths\| |
| н | text/non_ascii_word | 1629 | 3258 | 1.336757 | 0.105705 | 1.231051 | 4010.765165 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""ництва""")⏎['н',␠'и',␠'ц',␠'т',␠'в',␠'а']⏎ | \|н\| | \|н\| |
| ['_', | text/punctuation | 5533 | 27665 | 3.590563 | 3.449842 | 0.140722 | 3893.062990 | ppl_circuit_coverage/vocab_mechanics/token_chars | __(['_',␠'_',␠'(']⏎ | \|['_\|',\| | \|['_\|',\| |

## Top Literals: Model B Worse

Representative token boundaries come from the highest-gap occurrence for each literal. `|` marks token boundaries for each model; an ellipsis means the token continues outside the literal boundary in that example.

| name | bucket | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | example_dataset | example_doc_preview | model_a_token_boundaries | model_b_token_boundaries |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ":[ | text/punctuation | 2000 | 6000 | 0.325525 | 0.975338 | -0.649813 | -3898.879856 | ppl_circuit_coverage/text_mechanics/line_rhythm | line_lengths␠and␠indent_widths␠for␠raw␠block:⏎␠v⏎␠gunsto⏎j⏎result:⏎{"line_lengths":[2,7,1],"indent_widths":[1,1,0]}⏎ | \|":[\| | \|":[\| |
| '('] | text/punctuation | 169 | 676 | 2.214117 | 2.595972 | -0.381856 | -258.134384 | ppl_circuit_coverage/vocab_mechanics/token_chars | (^)(['(',␠'^',␠')',␠'(']⏎ | \|…'('\|]…\| | \|…'('\|]…\| |
| '"', | text/punctuation | 937 | 3748 | 0.891843 | 0.953880 | -0.062037 | -232.514569 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""":"","""")⏎['"',␠':',␠'"',␠'"',␠',',␠'"']⏎ | \|…'"\|',\| | \|…'"\|',\| |
| '\\\\'] | text/punctuation | 91 | 455 | 1.592066 | 1.997019 | -0.404954 | -184.254065 | ppl_circuit_coverage/vocab_mechanics/token_chars | +"\\['+',␠'"',␠'\\\\']⏎ | \|…'\\\\\|']…\| | \|…'\\\\\|']…\| |
| ]} | text/punctuation | 1000 | 2000 | 0.331492 | 0.393282 | -0.061790 | -123.580039 | ppl_circuit_coverage/text_mechanics/line_rhythm | …for␠raw␠block:⏎␠s⏎␠␠xsfcmdja⏎␠␠␠␠injswjh⏎␠gh⏎␠␠␠dk⏎result:⏎{"line_lengths":[2,10,11,3,5],"indent_widths":[1,2,4,1,3]}⏎ | \|]}…\| | \|]}…\| |
| '<', | text/punctuation | 195 | 780 | 0.743657 | 0.878778 | -0.135121 | -105.394287 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""')?></""")⏎["'",␠')',␠'?',␠'>',␠'<',␠'/']⏎ | \|…'<\|',\| | \|…'<\|',\| |
| ':'] | text/punctuation | 139 | 556 | 1.494493 | 1.653628 | -0.159134 | -88.478749 | ppl_circuit_coverage/vocab_mechanics/token_chars | ा:['ा',␠':']⏎ | \|…':\|']…\| | \|…':\|']…\| |
| '['] | text/punctuation | 107 | 428 | 2.275106 | 2.470831 | -0.195725 | -83.770183 | ppl_circuit_coverage/vocab_mechanics/token_chars | #[['#',␠'[']⏎ | \|…'[\|']…\| | \|…'[\|']…\| |
| [']', | text/punctuation | 212 | 1060 | 5.737658 | 5.811353 | -0.073695 | -78.116211 | ppl_circuit_coverage/vocab_mechanics/token_chars | ]+"[']',␠'+',␠'"']⏎ | \|[\|']\|',\| | \|[\|']\|',\| |
| '\\\\', | text/punctuation | 93 | 465 | 0.951572 | 1.070499 | -0.118928 | -55.301428 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠'\\''""")⏎['␠',␠"'",␠'\\\\',␠"'",␠"'"]⏎ | \|…'\\\\\|',\| | \|…'\\\\\|',\| |
| ',', | text/punctuation | 321 | 1284 | 0.686060 | 0.722029 | -0.035969 | -46.183965 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""','=','""")⏎["'",␠',',␠"'",␠'=',␠"'",␠',',␠"'"]⏎ | \|…',',\| | \|…',',\| |
| '!', | text/punctuation | 89 | 356 | 0.521437 | 0.637934 | -0.116497 | -41.473060 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠!!}""")⏎['␠',␠'!',␠'!',␠'}']⏎ | \|…'\|!',\| | \|…'\|!',\| |
| '.'] | text/punctuation | 230 | 920 | 1.297974 | 1.335682 | -0.037707 | -34.690513 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""({...""")⏎['(',␠'{',␠'.',␠'.',␠'.']⏎ | \|…'.\|']…\| | \|…'.\|']…\| |
| ㅇ | text/non_ascii_word | 4 | 12 | 0.196405 | 2.467538 | -2.271133 | -27.253599 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠ㅇㅇ""")⏎['␠',␠'ㅇ',␠'ㅇ']⏎ | \|ㅇ\| | \|ㅇ\| |
| '>'] | text/punctuation | 118 | 472 | 0.842312 | 0.895483 | -0.053171 | -25.096937 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠<->""")⏎['␠',␠'<',␠'-',␠'>']⏎ | \|…'>\|']…\| | \|…'>\|']…\| |
| '='] | text/punctuation | 125 | 500 | 1.411456 | 1.448969 | -0.037513 | -18.756354 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""")==""")⏎['"',␠')',␠'=',␠'=']⏎ | \|…'=\|']…\| | \|…'=\|']…\| |
| 4,4,2 | text/number | 3 | 15 | 1.881623 | 3.076555 | -1.194932 | -17.923975 | ppl_circuit_coverage/text_mechanics/line_rhythm | …dths␠for␠raw␠block:⏎␠␠␠␠fkyvvqdxwzv⏎␠␠␠␠gmaguuvs⏎␠␠jvknwnb⏎result:⏎{"line_lengths":[15,12,9],"indent_widths":[4,4,2]}⏎ | \|4\|,\|4\|,\|2\| | \|4\|,\|4\|,\|2\| |
| å | text/non_ascii_word | 32 | 64 | 0.499592 | 0.778501 | -0.278910 | -17.850209 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""ckså""")⏎['c',␠'k',␠'s',␠'å']⏎ | \|å\| | \|å\| |
| シ | text/non_ascii_word | 15 | 45 | 1.481796 | 1.850333 | -0.368536 | -16.584141 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""シャ""")⏎['シ',␠'ャ']⏎ | \|シ\| | \|シ\| |
| '《'] | text/non_ascii | 3 | 18 | 0.348053 | 1.168375 | -0.820322 | -14.765798 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""，《""")⏎['，',␠'《']⏎ | \|…'\|《\|']…\| | \|…'\|《\|']…\| |
| 2,1,1 | text/number | 5 | 25 | 1.710971 | 2.299539 | -0.588567 | -14.714186 | ppl_circuit_coverage/text_mechanics/line_rhythm | …s␠and␠indent_widths␠for␠raw␠block:⏎␠␠xqnlpoxpsh⏎␠lbah⏎␠shku⏎result:⏎{"line_lengths":[12,5,5],"indent_widths":[2,1,1]}⏎ | \|2\|,\|1\|,\|1\| | \|2\|,\|1\|,\|1\| |
| '{', | text/punctuation | 253 | 1012 | 0.634132 | 0.648634 | -0.014502 | -14.675584 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""={({""")⏎['=',␠'{',␠'(',␠'{']⏎ | \|…'{\|',\| | \|…'{\|',\| |
| っ | text/non_ascii_word | 34 | 102 | 0.921102 | 1.062995 | -0.141893 | -14.473119 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""ちょっと""")⏎['ち',␠'ょ',␠'っ',␠'と']⏎ | \|っ\| | \|っ\| |
| ㅡ | text/non_ascii_word | 1 | 3 | 0.407650 | 5.213271 | -4.805621 | -14.416864 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠ㅡ""")⏎['␠',␠'ㅡ']⏎ | \|ㅡ\|ㅡ\| | \|ㅡ\| |
| '、'] | text/non_ascii | 4 | 24 | 0.815613 | 1.361138 | -0.545524 | -13.092586 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠、""")⏎['␠',␠'、']⏎ | \|…'\|、\|']…\| | \|…'\|、\|']…\| |
| 族 | text/non_ascii_word | 4 | 12 | 0.535001 | 1.618671 | -1.083670 | -13.004039 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""族自治""")⏎['族',␠'自',␠'治']⏎ | \|族\| | \|族\| |
| '》'] | text/non_ascii | 1 | 6 | 0.447952 | 2.446907 | -1.998955 | -11.993729 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠》""")⏎['␠',␠'》']⏎ | \|…'\|》\|']…\| | \|…'\|》\|']…\| |
| '〜'] | text/non_ascii | 1 | 6 | 0.468856 | 2.367919 | -1.899063 | -11.394380 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠〜""")⏎['␠',␠'〜']⏎ | \|…'\|〜\|']…\| | \|…'\|〜\|']…\| |
| '฿'] | text/non_ascii | 1 | 6 | 0.263438 | 2.122753 | -1.859314 | -11.155886 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠฿""")⏎['␠',␠'฿']⏎ | \|…'\|฿\|฿\|']…\| | \|…'\|฿\|']…\| |
| 3,1,4 | text/number | 2 | 10 | 2.493211 | 3.549628 | -1.056417 | -10.564168 | ppl_circuit_coverage/text_mechanics/line_rhythm | …␠and␠indent_widths␠for␠raw␠block:⏎␠␠␠yg⏎␠ktakh⏎␠␠␠␠mljedgdx⏎result:⏎{"line_lengths":[5,6,12],"indent_widths":[3,1,4]}⏎ | \|3\|,\|1\|,\|4\| | \|3\|,\|1\|,\|4\| |
| 4,4,1 | text/number | 3 | 15 | 2.259694 | 2.950108 | -0.690414 | -10.356206 | ppl_circuit_coverage/text_mechanics/line_rhythm | …and␠indent_widths␠for␠raw␠block:⏎␠␠␠␠wbaqly⏎␠␠␠␠yde⏎␠giipae⏎result:⏎{"line_lengths":[10,7,7],"indent_widths":[4,4,1]}⏎ | \|4\|,\|4\|,\|1\| | \|4\|,\|4\|,\|1\| |
| 2,4,3 | text/number | 2 | 10 | 2.046406 | 3.065794 | -1.019388 | -10.193876 | ppl_circuit_coverage/text_mechanics/line_rhythm | …ent_widths␠for␠raw␠block:⏎␠␠qbhvtre⏎␠␠␠␠gcqecjh⏎␠␠␠hbbpqry⏎result:⏎{"line_lengths":[9,11,10],"indent_widths":[2,4,3]}⏎ | \|2\|,\|4\|,\|3\| | \|2\|,\|4\|,\|3\| |
| 2,4,4,2 | text/number | 1 | 7 | 1.683800 | 3.133454 | -1.449654 | -10.147575 | ppl_circuit_coverage/text_mechanics/line_rhythm | …␠block:⏎␠␠qnujq⏎␠␠␠␠bspjqvka⏎␠␠␠␠knspfj⏎␠␠kvwvxeocspu⏎result:⏎{"line_lengths":[7,12,10,13],"indent_widths":[2,4,4,2]}⏎ | \|2\|,\|4\|,\|4\|,\|2\| | \|2\|,\|4\|,\|4\|,\|2\| |
| 万 | text/non_ascii_word | 6 | 18 | 0.735993 | 1.278214 | -0.542221 | -9.759982 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠万""")⏎['␠',␠'万']⏎ | \|万\| | \|万\| |
| 參 | text/non_ascii_word | 2 | 6 | 0.289949 | 1.788963 | -1.499014 | -8.994084 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠參""")⏎['␠',␠'參']⏎ | \|參\| | \|參\| |
| 많 | text/non_ascii_word | 3 | 9 | 0.981606 | 1.959000 | -0.977394 | -8.796543 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠많이""")⏎['␠',␠'많',␠'이']⏎ | \|많\|많\| | \|많\| |
| 3,0,2 | text/number | 3 | 15 | 2.138661 | 2.716184 | -0.577523 | -8.662838 | ppl_circuit_coverage/text_mechanics/line_rhythm | …ths␠and␠indent_widths␠for␠raw␠block:⏎␠␠␠homy⏎bscwglq⏎␠␠oopmv⏎result:⏎{"line_lengths":[7,7,7],"indent_widths":[3,0,2]}⏎ | \|3\|,\|0\|,\|2\| | \|3\|,\|0\|,\|2\| |
| '█', | text/non_ascii | 7 | 42 | 0.141613 | 0.345102 | -0.203489 | -8.546546 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠██""")⏎['␠',␠'█',␠'█']⏎ | \|…'\|█\|',\| | \|…'\|█\|',\| |
| 4,1,2 | text/number | 2 | 10 | 2.131432 | 2.982332 | -0.850900 | -8.509003 | ppl_circuit_coverage/text_mechanics/line_rhythm | …and␠indent_widths␠for␠raw␠block:⏎␠␠␠␠banx⏎␠bybttpq⏎␠␠juehpkg⏎result:⏎{"line_lengths":[8,8,9],"indent_widths":[4,1,2]}⏎ | \|4\|,\|1\|,\|2\| | \|4\|,\|1\|,\|2\| |
| '◑'] | text/non_ascii | 1 | 6 | 0.576717 | 1.987023 | -1.410305 | -8.461832 | ppl_circuit_coverage/vocab_mechanics/token_chars | >>>␠token_chars("""␠◑""")⏎['␠',␠'◑']⏎ | \|…'\|◑\|◑\|']…\| | \|…'\|◑\|']…\| |
