# Perplexity Gap Report

**Model A:** marin-community/marin-32b-base

**Model B:** Qwen/Qwen3-32B

## Datasets

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| code_interpretation/function_definition_calls/python_doctest | 3 | 19 | 0.565849 | 0.056972 | 0.508877 | 9.668664 |
| code_interpretation/function_definition_calls/python_repl | 3 | 19 | 0.555203 | 0.050900 | 0.504303 | 9.581749 |
| code_interpretation/expression_arithmetic_slices/python_doctest | 3 | 6 | 0.908676 | 2.369526 | -1.460850 | -8.765098 |
| code_interpretation/expression_arithmetic_slices/python_repl | 3 | 6 | 0.838721 | 2.261518 | -1.422797 | -8.536779 |
| code_interpretation/expression_arithmetic_slices/arrow_control | 3 | 6 | 0.988196 | 2.288252 | -1.300056 | -7.800335 |
| code_interpretation/function_definition_calls/arrow_control | 3 | 19 | 0.276118 | 0.040859 | 0.235259 | 4.469917 |
| code_interpretation/expression_strings_collections/arrow_control | 3 | 14 | 0.140731 | 0.019380 | 0.121351 | 1.698917 |
| code_interpretation/expression_strings_collections/python_repl | 3 | 14 | 0.184724 | 0.139306 | 0.045418 | 0.635851 |
| code_interpretation/expression_strings_collections/python_doctest | 3 | 14 | 0.186506 | 0.196742 | -0.010236 | -0.143306 |

## Dataset Groups

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| code_interpretation/expression_arithmetic_slices | 9 | 18 | 0.911864 | 2.306432 | -1.394567 | -25.102212 |
| task:expression_arithmetic_slices | 9 | 18 | 0.911864 | 2.306432 | -1.394567 | -25.102212 |
| code_interpretation/function_definition_calls | 9 | 57 | 0.465723 | 0.049577 | 0.416146 | 23.720330 |
| task:function_definition_calls | 9 | 57 | 0.465723 | 0.049577 | 0.416146 | 23.720330 |
| task_family:function_definition | 9 | 57 | 0.465723 | 0.049577 | 0.416146 | 23.720330 |
| task_family:expression_only | 18 | 60 | 0.393017 | 0.774863 | -0.381846 | -22.910750 |
| code_interpretation/expression_strings_collections | 9 | 42 | 0.170654 | 0.118476 | 0.052178 | 2.191462 |
| task:expression_strings_collections | 9 | 42 | 0.170654 | 0.118476 | 0.052178 | 2.191462 |
| template:python_repl | 9 | 39 | 0.465829 | 0.422731 | 0.043098 | 1.680821 |
| template:arrow_control | 9 | 39 | 0.337068 | 0.378901 | -0.041833 | -1.631501 |
| code_interpretation | 27 | 117 | 0.428438 | 0.421519 | 0.006919 | 0.809580 |
| format:supervised_target_only | 27 | 117 | 0.428438 | 0.421519 | 0.006919 | 0.809580 |
| issue:6070 | 27 | 117 | 0.428438 | 0.421519 | 0.006919 | 0.809580 |
| num_fewshot:5 | 27 | 117 | 0.428438 | 0.421519 | 0.006919 | 0.809580 |
| template:python_doctest | 9 | 39 | 0.482418 | 0.462924 | 0.019494 | 0.760260 |

## Pattern Buckets

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| text/word | 12 | 78 | 0.340424 | 0.096942 | 0.243483 | 18.991638 |
| text/number | 18 | 36 | 0.654006 | 1.159889 | -0.505883 | -18.211802 |
| text/punctuation | 3 | 3 | 0.009974 | 0.000060 | 0.009915 | 0.029744 |

## Top Documents: Model A Worse

| dataset | shard | row_index | bytes | score_byte_start | score_byte_end | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| code_interpretation/function_definition_calls/python_repl | staged_jsonl_gz | 0 | 3 | 1014 | 1017 | 2.879967 | 0.307662 | 2.572305 | 7.716916 | text/word | mnn | 2.572305 | …3),␠box.add(5))⏎(7,␠12)⏎⏎>>>␠def␠edge_repeat(text):⏎...␠␠␠␠␠return␠text[0]␠+␠text[-1]␠*␠2⏎>>>␠edge_repeat('marin')⏎mnn |
| code_interpretation/function_definition_calls/python_doctest | staged_jsonl_gz | 0 | 3 | 1015 | 1018 | 2.884973 | 0.347659 | 2.537314 | 7.611942 | text/word | mnn | 2.537314 | …3),␠box.add(5))⏎(7,␠12)⏎⏎>>>␠def␠edge_repeat(text):⏎...␠␠␠␠␠return␠text[0]␠+␠text[-1]␠*␠2⏎>>>␠edge_repeat('marin')⏎mnn |
| code_interpretation/function_definition_calls/arrow_control | staged_jsonl_gz | 0 | 3 | 978 | 981 | 1.618111 | 0.231503 | 1.386608 | 4.159825 | text/word | mnn | 1.386608 | …,␠box.add(5))⏎=>␠(7,␠12)⏎⏎Python:⏎def␠edge_repeat(text):⏎␠␠␠␠return␠text[0]␠+␠text[-1]␠*␠2⏎edge_repeat('marin')⏎=>␠mnn |
| code_interpretation/expression_strings_collections/python_doctest | staged_jsonl_gz | 0 | 2 | 406 | 408 | 1.244954 | 0.025358 | 1.219596 | 2.439191 | text/number | 42 | 1.219596 | …delta',␠'alpha',␠'beta'])[0]⏎alpha⏎⏎>>>␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎15⏎⏎>>>␠'abcdef'[1:5:2]⏎bd⏎⏎>>>␠len('prompt')␠*␠7⏎42 |
| code_interpretation/expression_strings_collections/python_repl | staged_jsonl_gz | 0 | 2 | 405 | 407 | 1.235924 | 0.019149 | 1.216775 | 2.433550 | text/number | 42 | 1.216775 | …delta',␠'alpha',␠'beta'])[0]⏎alpha⏎⏎>>>␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎15⏎⏎>>>␠'abcdef'[1:5:2]⏎bd⏎⏎>>>␠len('prompt')␠*␠7⏎42 |
| code_interpretation/expression_strings_collections/arrow_control | staged_jsonl_gz | 0 | 2 | 453 | 455 | 0.917107 | 0.015359 | 0.901748 | 1.803496 | text/number | 42 | 0.901748 | …)[0]⏎=>␠alpha⏎⏎Python:⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⏎=>␠15⏎⏎Python:⏎'abcdef'[1:5:2]⏎=>␠bd⏎⏎Python:⏎len('prompt')␠*␠7⏎=>␠42 |
| code_interpretation/expression_arithmetic_slices/python_doctest | staged_jsonl_gz | 1 | 2 | 417 | 419 | 0.645741 | 0.061590 | 0.584151 | 1.168302 | text/number | 10 | 0.584151 | …-1]⏎11⏎⏎>>>␠min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎11⏎⏎>>>␠list(range(2,␠9,␠3))[1]⏎5⏎⏎>>>␠[n␠*␠2␠for␠n␠in␠range(3,␠7)][2]⏎10 |
| code_interpretation/expression_arithmetic_slices/python_repl | staged_jsonl_gz | 1 | 2 | 416 | 418 | 0.658636 | 0.098831 | 0.559805 | 1.119610 | text/number | 10 | 0.559805 | …-1]⏎11⏎⏎>>>␠min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎11⏎⏎>>>␠list(range(2,␠9,␠3))[1]⏎5⏎⏎>>>␠[n␠*␠2␠for␠n␠in␠range(3,␠7)][2]⏎10 |
| code_interpretation/function_definition_calls/python_repl | staged_jsonl_gz | 2 | 10 | 1166 | 1176 | 0.109015 | 0.003772 | 0.105243 | 1.052435 | text/word | EAST-NORTH | 0.105243 | …ipped(self):⏎...␠␠␠␠␠␠␠␠␠return␠self.right␠+␠'-'␠+␠self.left⏎>>>␠PairBox('north',␠'east').flipped().upper()⏎EAST-NORTH |
| code_interpretation/function_definition_calls/python_doctest | staged_jsonl_gz | 2 | 10 | 1167 | 1177 | 0.106309 | 0.002776 | 0.103533 | 1.035333 | text/word | EAST-NORTH | 0.103533 | …ipped(self):⏎...␠␠␠␠␠␠␠␠␠return␠self.right␠+␠'-'␠+␠self.left⏎>>>␠PairBox('north',␠'east').flipped().upper()⏎EAST-NORTH |
| code_interpretation/function_definition_calls/python_doctest | staged_jsonl_gz | 1 | 6 | 1040 | 1046 | 0.172188 | 0.001957 | 0.170231 | 1.021388 | text/word | job | 0.312748 | …␠def␠scale_and_tag(x,␠tag):⏎...␠␠␠␠␠y␠=␠x␠*␠4⏎...␠␠␠␠␠return␠tag␠+␠':'␠+␠str(y␠-␠1)⏎>>>␠scale_and_tag(6,␠'job')⏎job:23 |
| code_interpretation/function_definition_calls/python_repl | staged_jsonl_gz | 1 | 6 | 1039 | 1045 | 0.136466 | 0.001067 | 0.135400 | 0.812398 | text/word | job | 0.239060 | …␠def␠scale_and_tag(x,␠tag):⏎...␠␠␠␠␠y␠=␠x␠*␠4⏎...␠␠␠␠␠return␠tag␠+␠':'␠+␠str(y␠-␠1)⏎>>>␠scale_and_tag(6,␠'job')⏎job:23 |
| code_interpretation/expression_arithmetic_slices/arrow_control | staged_jsonl_gz | 1 | 2 | 464 | 466 | 1.225420 | 0.883109 | 0.342311 | 0.684621 | text/number | 10 | 0.342311 | …12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎=>␠11⏎⏎Python:⏎list(range(2,␠9,␠3))[1]⏎=>␠5⏎⏎Python:⏎[n␠*␠2␠for␠n␠in␠range(3,␠7)][2]⏎=>␠10 |
| code_interpretation/function_definition_calls/arrow_control | staged_jsonl_gz | 1 | 6 | 999 | 1005 | 0.027992 | 0.001059 | 0.026933 | 0.161598 | text/word | job | 0.027947 | …⏎⏎Python:⏎def␠scale_and_tag(x,␠tag):⏎␠␠␠␠y␠=␠x␠*␠4⏎␠␠␠␠return␠tag␠+␠':'␠+␠str(y␠-␠1)⏎scale_and_tag(6,␠'job')⏎=>␠job:23 |
| code_interpretation/function_definition_calls/arrow_control | staged_jsonl_gz | 2 | 10 | 1114 | 1124 | 0.022395 | 0.007546 | 0.014849 | 0.148494 | text/word | EAST-NORTH | 0.014849 | …ef␠flipped(self):⏎␠␠␠␠␠␠␠␠return␠self.right␠+␠'-'␠+␠self.left⏎PairBox('north',␠'east').flipped().upper()⏎=>␠EAST-NORTH |
| code_interpretation/expression_strings_collections/python_doctest | staged_jsonl_gz | 2 | 2 | 424 | 426 | 0.016871 | 0.009533 | 0.007338 | 0.014676 | text/number | 14 | 0.007338 | …beta'])[0]⏎alpha⏎⏎>>>␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎15⏎⏎>>>␠'abcdef'[1:5:2]⏎bd⏎⏎>>>␠{'x':␠[4,␠8],␠'y':␠[3]}['x'][1]␠+␠6⏎14 |
| code_interpretation/expression_arithmetic_slices/arrow_control | staged_jsonl_gz | 0 | 2 | 462 | 464 | 0.009854 | 0.002592 | 0.007261 | 0.014523 | text/number | 29 | 0.007261 | …([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎=>␠11⏎⏎Python:⏎list(range(2,␠9,␠3))[1]⏎=>␠5⏎⏎Python:⏎sum(x␠*␠x␠for␠x␠in␠[2,␠3,␠4])⏎=>␠29 |
| code_interpretation/expression_strings_collections/python_repl | staged_jsonl_gz | 2 | 2 | 423 | 425 | 0.015549 | 0.011971 | 0.003578 | 0.007156 | text/number | 14 | 0.003578 | …beta'])[0]⏎alpha⏎⏎>>>␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎15⏎⏎>>>␠'abcdef'[1:5:2]⏎bd⏎⏎>>>␠{'x':␠[4,␠8],␠'y':␠[3]}['x'][1]␠+␠6⏎14 |
| code_interpretation/expression_arithmetic_slices/python_doctest | staged_jsonl_gz | 0 | 2 | 415 | 417 | 0.007530 | 0.005655 | 0.001875 | 0.003750 | text/number | 29 | 0.001875 | …][-1]⏎11⏎⏎>>>␠min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎11⏎⏎>>>␠list(range(2,␠9,␠3))[1]⏎5⏎⏎>>>␠sum(x␠*␠x␠for␠x␠in␠[2,␠3,␠4])⏎29 |

## Top Documents: Model B Worse

| dataset | shard | row_index | bytes | score_byte_start | score_byte_end | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| code_interpretation/expression_arithmetic_slices/python_doctest | staged_jsonl_gz | 2 | 2 | 408 | 410 | 2.072758 | 7.041333 | -4.968575 | -9.937151 | text/number | 18 | -4.968575 | …,␠7,␠9]][-1]⏎11⏎⏎>>>␠min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎11⏎⏎>>>␠list(range(2,␠9,␠3))[1]⏎5⏎⏎>>>␠sum([10,␠-3,␠65])␠//␠4⏎18 |
| code_interpretation/expression_arithmetic_slices/python_repl | staged_jsonl_gz | 2 | 2 | 407 | 409 | 1.851999 | 6.674889 | -4.822890 | -9.645780 | text/number | 18 | -4.822890 | …,␠7,␠9]][-1]⏎11⏎⏎>>>␠min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎11⏎⏎>>>␠list(range(2,␠9,␠3))[1]⏎5⏎⏎>>>␠sum([10,␠-3,␠65])␠//␠4⏎18 |
| code_interpretation/expression_arithmetic_slices/arrow_control | staged_jsonl_gz | 2 | 2 | 455 | 457 | 1.729314 | 5.979054 | -4.249739 | -8.499479 | text/number | 18 | -4.249739 | …on:⏎min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎=>␠11⏎⏎Python:⏎list(range(2,␠9,␠3))[1]⏎=>␠5⏎⏎Python:⏎sum([10,␠-3,␠65])␠//␠4⏎=>␠18 |
| code_interpretation/expression_strings_collections/python_doctest | staged_jsonl_gz | 1 | 10 | 426 | 436 | 0.008743 | 0.268461 | -0.259717 | -2.597173 | text/word | east-north | -0.259717 | …⏎alpha⏎⏎>>>␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎15⏎⏎>>>␠'abcdef'[1:5:2]⏎bd⏎⏎>>>␠'-'.join(reversed(['north',␠'east']))⏎east-north |
| code_interpretation/expression_strings_collections/python_repl | staged_jsonl_gz | 1 | 10 | 425 | 435 | 0.008319 | 0.188805 | -0.180485 | -1.804855 | text/word | east-north | -0.180485 | …⏎alpha⏎⏎>>>␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎15⏎⏎>>>␠'abcdef'[1:5:2]⏎bd⏎⏎>>>␠'-'.join(reversed(['north',␠'east']))⏎east-north |
| code_interpretation/expression_strings_collections/arrow_control | staged_jsonl_gz | 1 | 10 | 473 | 483 | 0.009284 | 0.016339 | -0.007054 | -0.070545 | text/word | east-north | -0.007054 | …␠2,␠'b':␠5}['b']␠*␠3⏎=>␠15⏎⏎Python:⏎'abcdef'[1:5:2]⏎=>␠bd⏎⏎Python:⏎'-'.join(reversed(['north',␠'east']))⏎=>␠east-north |
| code_interpretation/expression_strings_collections/arrow_control | staged_jsonl_gz | 2 | 2 | 471 | 473 | 0.021591 | 0.038608 | -0.017017 | -0.034034 | text/number | 14 | -0.017017 | …hon:⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⏎=>␠15⏎⏎Python:⏎'abcdef'[1:5:2]⏎=>␠bd⏎⏎Python:⏎{'x':␠[4,␠8],␠'y':␠[3]}['x'][1]␠+␠6⏎=>␠14 |
| code_interpretation/expression_arithmetic_slices/python_repl | staged_jsonl_gz | 0 | 2 | 414 | 416 | 0.005529 | 0.010834 | -0.005305 | -0.010609 | text/number | 29 | -0.005305 | …][-1]⏎11⏎⏎>>>␠min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎11⏎⏎>>>␠list(range(2,␠9,␠3))[1]⏎5⏎⏎>>>␠sum(x␠*␠x␠for␠x␠in␠[2,␠3,␠4])⏎29 |

## Top Segments: Model A Worse

| dataset | bucket | bytes | delta_bits | gap_bpb | text | doc_preview |
| --- | --- | --- | --- | --- | --- | --- |
| code_interpretation/function_definition_calls/python_repl | text/word | 3 | 7.716916 | 2.572305 | mnn | …3),␠box.add(5))⏎(7,␠12)⏎⏎>>>␠def␠edge_repeat(text):⏎...␠␠␠␠␠return␠text[0]␠+␠text[-1]␠*␠2⏎>>>␠edge_repeat('marin')⏎mnn |
| code_interpretation/function_definition_calls/python_doctest | text/word | 3 | 7.611942 | 2.537314 | mnn | …3),␠box.add(5))⏎(7,␠12)⏎⏎>>>␠def␠edge_repeat(text):⏎...␠␠␠␠␠return␠text[0]␠+␠text[-1]␠*␠2⏎>>>␠edge_repeat('marin')⏎mnn |
| code_interpretation/function_definition_calls/arrow_control | text/word | 3 | 4.159825 | 1.386608 | mnn | …,␠box.add(5))⏎=>␠(7,␠12)⏎⏎Python:⏎def␠edge_repeat(text):⏎␠␠␠␠return␠text[0]␠+␠text[-1]␠*␠2⏎edge_repeat('marin')⏎=>␠mnn |
| code_interpretation/expression_strings_collections/python_doctest | text/number | 2 | 2.439191 | 1.219596 | 42 | …delta',␠'alpha',␠'beta'])[0]⏎alpha⏎⏎>>>␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎15⏎⏎>>>␠'abcdef'[1:5:2]⏎bd⏎⏎>>>␠len('prompt')␠*␠7⏎42 |
| code_interpretation/expression_strings_collections/python_repl | text/number | 2 | 2.433550 | 1.216775 | 42 | …delta',␠'alpha',␠'beta'])[0]⏎alpha⏎⏎>>>␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎15⏎⏎>>>␠'abcdef'[1:5:2]⏎bd⏎⏎>>>␠len('prompt')␠*␠7⏎42 |
| code_interpretation/expression_strings_collections/arrow_control | text/number | 2 | 1.803496 | 0.901748 | 42 | …)[0]⏎=>␠alpha⏎⏎Python:⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⏎=>␠15⏎⏎Python:⏎'abcdef'[1:5:2]⏎=>␠bd⏎⏎Python:⏎len('prompt')␠*␠7⏎=>␠42 |
| code_interpretation/expression_arithmetic_slices/python_doctest | text/number | 2 | 1.168302 | 0.584151 | 10 | …-1]⏎11⏎⏎>>>␠min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎11⏎⏎>>>␠list(range(2,␠9,␠3))[1]⏎5⏎⏎>>>␠[n␠*␠2␠for␠n␠in␠range(3,␠7)][2]⏎10 |
| code_interpretation/expression_arithmetic_slices/python_repl | text/number | 2 | 1.119610 | 0.559805 | 10 | …-1]⏎11⏎⏎>>>␠min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎11⏎⏎>>>␠list(range(2,␠9,␠3))[1]⏎5⏎⏎>>>␠[n␠*␠2␠for␠n␠in␠range(3,␠7)][2]⏎10 |
| code_interpretation/function_definition_calls/python_repl | text/word | 10 | 1.052435 | 0.105243 | EAST-NORTH | …ipped(self):⏎...␠␠␠␠␠␠␠␠␠return␠self.right␠+␠'-'␠+␠self.left⏎>>>␠PairBox('north',␠'east').flipped().upper()⏎EAST-NORTH |
| code_interpretation/function_definition_calls/python_doctest | text/word | 10 | 1.035333 | 0.103533 | EAST-NORTH | …ipped(self):⏎...␠␠␠␠␠␠␠␠␠return␠self.right␠+␠'-'␠+␠self.left⏎>>>␠PairBox('north',␠'east').flipped().upper()⏎EAST-NORTH |
| code_interpretation/function_definition_calls/python_doctest | text/word | 3 | 0.938245 | 0.312748 | job | …␠def␠scale_and_tag(x,␠tag):⏎...␠␠␠␠␠y␠=␠x␠*␠4⏎...␠␠␠␠␠return␠tag␠+␠':'␠+␠str(y␠-␠1)⏎>>>␠scale_and_tag(6,␠'job')⏎job:23 |
| code_interpretation/function_definition_calls/python_repl | text/word | 3 | 0.717180 | 0.239060 | job | …␠def␠scale_and_tag(x,␠tag):⏎...␠␠␠␠␠y␠=␠x␠*␠4⏎...␠␠␠␠␠return␠tag␠+␠':'␠+␠str(y␠-␠1)⏎>>>␠scale_and_tag(6,␠'job')⏎job:23 |
| code_interpretation/expression_arithmetic_slices/arrow_control | text/number | 2 | 0.684621 | 0.342311 | 10 | …12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎=>␠11⏎⏎Python:⏎list(range(2,␠9,␠3))[1]⏎=>␠5⏎⏎Python:⏎[n␠*␠2␠for␠n␠in␠range(3,␠7)][2]⏎=>␠10 |
| code_interpretation/function_definition_calls/arrow_control | text/word | 10 | 0.148494 | 0.014849 | EAST-NORTH | …ef␠flipped(self):⏎␠␠␠␠␠␠␠␠return␠self.right␠+␠'-'␠+␠self.left⏎PairBox('north',␠'east').flipped().upper()⏎=>␠EAST-NORTH |
| code_interpretation/function_definition_calls/python_repl | text/number | 2 | 0.085075 | 0.042537 | 23 | …␠def␠scale_and_tag(x,␠tag):⏎...␠␠␠␠␠y␠=␠x␠*␠4⏎...␠␠␠␠␠return␠tag␠+␠':'␠+␠str(y␠-␠1)⏎>>>␠scale_and_tag(6,␠'job')⏎job:23 |
| code_interpretation/function_definition_calls/arrow_control | text/word | 3 | 0.083840 | 0.027947 | job | …⏎⏎Python:⏎def␠scale_and_tag(x,␠tag):⏎␠␠␠␠y␠=␠x␠*␠4⏎␠␠␠␠return␠tag␠+␠':'␠+␠str(y␠-␠1)⏎scale_and_tag(6,␠'job')⏎=>␠job:23 |
| code_interpretation/function_definition_calls/python_doctest | text/number | 2 | 0.072904 | 0.036452 | 23 | …␠def␠scale_and_tag(x,␠tag):⏎...␠␠␠␠␠y␠=␠x␠*␠4⏎...␠␠␠␠␠return␠tag␠+␠':'␠+␠str(y␠-␠1)⏎>>>␠scale_and_tag(6,␠'job')⏎job:23 |
| code_interpretation/function_definition_calls/arrow_control | text/number | 2 | 0.068398 | 0.034199 | 23 | …⏎⏎Python:⏎def␠scale_and_tag(x,␠tag):⏎␠␠␠␠y␠=␠x␠*␠4⏎␠␠␠␠return␠tag␠+␠':'␠+␠str(y␠-␠1)⏎scale_and_tag(6,␠'job')⏎=>␠job:23 |
| code_interpretation/expression_strings_collections/python_doctest | text/number | 2 | 0.014676 | 0.007338 | 14 | …beta'])[0]⏎alpha⏎⏎>>>␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎15⏎⏎>>>␠'abcdef'[1:5:2]⏎bd⏎⏎>>>␠{'x':␠[4,␠8],␠'y':␠[3]}['x'][1]␠+␠6⏎14 |
| code_interpretation/expression_arithmetic_slices/arrow_control | text/number | 2 | 0.014523 | 0.007261 | 29 | …([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎=>␠11⏎⏎Python:⏎list(range(2,␠9,␠3))[1]⏎=>␠5⏎⏎Python:⏎sum(x␠*␠x␠for␠x␠in␠[2,␠3,␠4])⏎=>␠29 |
| code_interpretation/function_definition_calls/python_doctest | text/punctuation | 1 | 0.010240 | 0.010240 | : | …␠def␠scale_and_tag(x,␠tag):⏎...␠␠␠␠␠y␠=␠x␠*␠4⏎...␠␠␠␠␠return␠tag␠+␠':'␠+␠str(y␠-␠1)⏎>>>␠scale_and_tag(6,␠'job')⏎job:23 |
| code_interpretation/function_definition_calls/python_repl | text/punctuation | 1 | 0.010144 | 0.010144 | : | …␠def␠scale_and_tag(x,␠tag):⏎...␠␠␠␠␠y␠=␠x␠*␠4⏎...␠␠␠␠␠return␠tag␠+␠':'␠+␠str(y␠-␠1)⏎>>>␠scale_and_tag(6,␠'job')⏎job:23 |
| code_interpretation/function_definition_calls/arrow_control | text/punctuation | 1 | 0.009361 | 0.009361 | : | …⏎⏎Python:⏎def␠scale_and_tag(x,␠tag):⏎␠␠␠␠y␠=␠x␠*␠4⏎␠␠␠␠return␠tag␠+␠':'␠+␠str(y␠-␠1)⏎scale_and_tag(6,␠'job')⏎=>␠job:23 |
| code_interpretation/expression_strings_collections/python_repl | text/number | 2 | 0.007156 | 0.003578 | 14 | …beta'])[0]⏎alpha⏎⏎>>>␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎15⏎⏎>>>␠'abcdef'[1:5:2]⏎bd⏎⏎>>>␠{'x':␠[4,␠8],␠'y':␠[3]}['x'][1]␠+␠6⏎14 |
| code_interpretation/expression_arithmetic_slices/python_doctest | text/number | 2 | 0.003750 | 0.001875 | 29 | …][-1]⏎11⏎⏎>>>␠min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎11⏎⏎>>>␠list(range(2,␠9,␠3))[1]⏎5⏎⏎>>>␠sum(x␠*␠x␠for␠x␠in␠[2,␠3,␠4])⏎29 |

## Top Segments: Model B Worse

| dataset | bucket | bytes | delta_bits | gap_bpb | text | doc_preview |
| --- | --- | --- | --- | --- | --- | --- |
| code_interpretation/expression_arithmetic_slices/python_doctest | text/number | 2 | -9.937151 | -4.968575 | 18 | …,␠7,␠9]][-1]⏎11⏎⏎>>>␠min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎11⏎⏎>>>␠list(range(2,␠9,␠3))[1]⏎5⏎⏎>>>␠sum([10,␠-3,␠65])␠//␠4⏎18 |
| code_interpretation/expression_arithmetic_slices/python_repl | text/number | 2 | -9.645780 | -4.822890 | 18 | …,␠7,␠9]][-1]⏎11⏎⏎>>>␠min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎11⏎⏎>>>␠list(range(2,␠9,␠3))[1]⏎5⏎⏎>>>␠sum([10,␠-3,␠65])␠//␠4⏎18 |
| code_interpretation/expression_arithmetic_slices/arrow_control | text/number | 2 | -8.499479 | -4.249739 | 18 | …on:⏎min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎=>␠11⏎⏎Python:⏎list(range(2,␠9,␠3))[1]⏎=>␠5⏎⏎Python:⏎sum([10,␠-3,␠65])␠//␠4⏎=>␠18 |
| code_interpretation/expression_strings_collections/python_doctest | text/word | 10 | -2.597173 | -0.259717 | east-north | …⏎alpha⏎⏎>>>␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎15⏎⏎>>>␠'abcdef'[1:5:2]⏎bd⏎⏎>>>␠'-'.join(reversed(['north',␠'east']))⏎east-north |
| code_interpretation/expression_strings_collections/python_repl | text/word | 10 | -1.804855 | -0.180485 | east-north | …⏎alpha⏎⏎>>>␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎15⏎⏎>>>␠'abcdef'[1:5:2]⏎bd⏎⏎>>>␠'-'.join(reversed(['north',␠'east']))⏎east-north |
| code_interpretation/expression_strings_collections/arrow_control | text/word | 10 | -0.070545 | -0.007054 | east-north | …␠2,␠'b':␠5}['b']␠*␠3⏎=>␠15⏎⏎Python:⏎'abcdef'[1:5:2]⏎=>␠bd⏎⏎Python:⏎'-'.join(reversed(['north',␠'east']))⏎=>␠east-north |
| code_interpretation/expression_strings_collections/arrow_control | text/number | 2 | -0.034034 | -0.017017 | 14 | …hon:⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⏎=>␠15⏎⏎Python:⏎'abcdef'[1:5:2]⏎=>␠bd⏎⏎Python:⏎{'x':␠[4,␠8],␠'y':␠[3]}['x'][1]␠+␠6⏎=>␠14 |
| code_interpretation/expression_arithmetic_slices/python_repl | text/number | 2 | -0.010609 | -0.005305 | 29 | …][-1]⏎11⏎⏎>>>␠min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎11⏎⏎>>>␠list(range(2,␠9,␠3))[1]⏎5⏎⏎>>>␠sum(x␠*␠x␠for␠x␠in␠[2,␠3,␠4])⏎29 |

## Top Literals: Model A Worse

Representative token boundaries come from the highest-gap occurrence for each literal. `|` marks token boundaries for each model; an ellipsis means the token continues outside the literal boundary in that example.

| name | bucket | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | example_dataset | example_doc_preview | model_a_token_boundaries | model_b_token_boundaries |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| mnn | text/word | 3 | 9 | 2.461017 | 0.295608 | 2.165409 | 19.488683 | code_interpretation/function_definition_calls/python_repl | …3),␠box.add(5))⏎(7,␠12)⏎⏎>>>␠def␠edge_repeat(text):⏎...␠␠␠␠␠return␠text[0]␠+␠text[-1]␠*␠2⏎>>>␠edge_repeat('marin')⏎mnn | \|m\|nn\| | \|m\|nn\| |
| 42 | text/number | 3 | 6 | 1.132662 | 0.019955 | 1.112706 | 6.676237 | code_interpretation/expression_strings_collections/python_doctest | …delta',␠'alpha',␠'beta'])[0]⏎alpha⏎⏎>>>␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎15⏎⏎>>>␠'abcdef'[1:5:2]⏎bd⏎⏎>>>␠len('prompt')␠*␠7⏎42 | \|42\| | \|4\|2\| |
| 10 | text/number | 3 | 6 | 0.843266 | 0.347843 | 0.495422 | 2.972533 | code_interpretation/expression_arithmetic_slices/python_doctest | …-1]⏎11⏎⏎>>>␠min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎11⏎⏎>>>␠list(range(2,␠9,␠3))[1]⏎5⏎⏎>>>␠[n␠*␠2␠for␠n␠in␠range(3,␠7)][2]⏎10 | \|10\| | \|1\|0\| |
| EAST-NORTH | text/word | 3 | 30 | 0.079240 | 0.004698 | 0.074542 | 2.236262 | code_interpretation/function_definition_calls/python_repl | …ipped(self):⏎...␠␠␠␠␠␠␠␠␠return␠self.right␠+␠'-'␠+␠self.left⏎>>>␠PairBox('north',␠'east').flipped().upper()⏎EAST-NORTH | \|E\|AST\|-N\|ORTH\| | \|E\|AST\|-N\|ORTH\| |
| job | text/word | 3 | 9 | 0.195922 | 0.002670 | 0.193252 | 1.739265 | code_interpretation/function_definition_calls/python_doctest | …␠def␠scale_and_tag(x,␠tag):⏎...␠␠␠␠␠y␠=␠x␠*␠4⏎...␠␠␠␠␠return␠tag␠+␠':'␠+␠str(y␠-␠1)⏎>>>␠scale_and_tag(6,␠'job')⏎job:23 | \|job\| | \|job\| |
| 23 | text/number | 3 | 6 | 0.037777 | 0.000048 | 0.037729 | 0.226376 | code_interpretation/function_definition_calls/python_repl | …␠def␠scale_and_tag(x,␠tag):⏎...␠␠␠␠␠y␠=␠x␠*␠4⏎...␠␠␠␠␠return␠tag␠+␠':'␠+␠str(y␠-␠1)⏎>>>␠scale_and_tag(6,␠'job')⏎job:23 | \|23\| | \|2\|3\| |
| : | text/punctuation | 3 | 3 | 0.009974 | 0.000060 | 0.009915 | 0.029744 | code_interpretation/function_definition_calls/python_doctest | …␠def␠scale_and_tag(x,␠tag):⏎...␠␠␠␠␠y␠=␠x␠*␠4⏎...␠␠␠␠␠return␠tag␠+␠':'␠+␠str(y␠-␠1)⏎>>>␠scale_and_tag(6,␠'job')⏎job:23 | \|:\| | \|:\| |
| 29 | text/number | 3 | 6 | 0.007638 | 0.006360 | 0.001277 | 0.007664 | code_interpretation/expression_arithmetic_slices/arrow_control | …([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎=>␠11⏎⏎Python:⏎list(range(2,␠9,␠3))[1]⏎=>␠5⏎⏎Python:⏎sum(x␠*␠x␠for␠x␠in␠[2,␠3,␠4])⏎=>␠29 | \|29\| | \|2\|9\| |

## Top Literals: Model B Worse

Representative token boundaries come from the highest-gap occurrence for each literal. `|` marks token boundaries for each model; an ellipsis means the token continues outside the literal boundary in that example.

| name | bucket | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | example_dataset | example_doc_preview | model_a_token_boundaries | model_b_token_boundaries |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 18 | text/number | 3 | 6 | 1.884690 | 6.565092 | -4.680402 | -28.082409 | code_interpretation/expression_arithmetic_slices/python_doctest | …,␠7,␠9]][-1]⏎11⏎⏎>>>␠min([12,␠4,␠9])␠+␠max([1,␠7,␠3])⏎11⏎⏎>>>␠list(range(2,␠9,␠3))[1]⏎5⏎⏎>>>␠sum([10,␠-3,␠65])␠//␠4⏎18 | \|18\| | \|1\|8\| |
| east-north | text/word | 3 | 30 | 0.008782 | 0.157868 | -0.149086 | -4.472572 | code_interpretation/expression_strings_collections/python_doctest | …⏎alpha⏎⏎>>>␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎15⏎⏎>>>␠'abcdef'[1:5:2]⏎bd⏎⏎>>>␠'-'.join(reversed(['north',␠'east']))⏎east-north | \|east\|-n\|orth\| | \|east\|-n\|orth\| |
| 14 | text/number | 3 | 6 | 0.018004 | 0.020038 | -0.002034 | -0.012203 | code_interpretation/expression_strings_collections/arrow_control | …hon:⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⏎=>␠15⏎⏎Python:⏎'abcdef'[1:5:2]⏎=>␠bd⏎⏎Python:⏎{'x':␠[4,␠8],␠'y':␠[3]}['x'][1]␠+␠6⏎=>␠14 | \|14\| | \|1\|4\| |
