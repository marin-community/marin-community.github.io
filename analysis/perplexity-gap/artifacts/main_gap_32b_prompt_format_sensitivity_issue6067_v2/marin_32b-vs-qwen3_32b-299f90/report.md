# Perplexity Gap Report

**Model A:** marin-community/marin-32b-base

**Model B:** Qwen/Qwen3-32B

## Datasets

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| prompt_format_sensitivity/record_extraction/jsonl | 3 | 250 | 0.118957 | 0.045185 | 0.073772 | 18.443084 |
| prompt_format_sensitivity/python_repl/jsonl | 3 | 23 | 1.176436 | 0.443989 | 0.732447 | 16.846290 |
| prompt_format_sensitivity/python_repl/json_object | 3 | 23 | 1.160096 | 0.465602 | 0.694494 | 15.973364 |
| prompt_format_sensitivity/short_factual_qa/html_dl | 3 | 144 | 0.155934 | 0.045166 | 0.110768 | 15.950577 |
| prompt_format_sensitivity/record_extraction/json_object | 3 | 250 | 0.111480 | 0.051560 | 0.059921 | 14.980198 |
| prompt_format_sensitivity/news_classification/key_value_block | 3 | 80 | 0.008560 | 0.192579 | -0.184019 | -14.721484 |
| prompt_format_sensitivity/python_repl/s_expression | 3 | 26 | 0.980685 | 0.429738 | 0.550947 | 14.324633 |
| prompt_format_sensitivity/python_repl/html_dl | 3 | 44 | 0.583675 | 0.260323 | 0.323352 | 14.227473 |
| prompt_format_sensitivity/string_transformation/json_object | 3 | 57 | 0.287560 | 0.044511 | 0.243049 | 13.853800 |
| prompt_format_sensitivity/string_transformation/html_dl | 3 | 78 | 0.224376 | 0.047389 | 0.176987 | 13.804990 |
| prompt_format_sensitivity/string_transformation/jsonl | 3 | 57 | 0.286384 | 0.052062 | 0.234321 | 13.356312 |
| prompt_format_sensitivity/mcqa_science/key_value_block | 3 | 110 | 0.174090 | 0.287154 | -0.113063 | -12.436964 |
| prompt_format_sensitivity/record_extraction/csv | 3 | 243 | 0.073238 | 0.028213 | 0.045024 | 10.940882 |
| prompt_format_sensitivity/short_factual_qa/labeled_example | 3 | 114 | 0.107609 | 0.200495 | -0.092886 | -10.588949 |
| prompt_format_sensitivity/mcqa_science/bullet_list | 3 | 110 | 0.169662 | 0.263848 | -0.094186 | -10.360427 |
| prompt_format_sensitivity/python_repl/toml | 3 | 23 | 1.086385 | 0.639535 | 0.446850 | 10.277553 |
| prompt_format_sensitivity/record_extraction/tsv | 3 | 241 | 0.047391 | 0.005061 | 0.042330 | 10.201492 |
| prompt_format_sensitivity/python_repl/tsv | 3 | 14 | 0.244409 | 0.960509 | -0.716100 | -10.025398 |
| prompt_format_sensitivity/short_factual_qa/jsonl | 3 | 123 | 0.165172 | 0.083810 | 0.081362 | 10.007585 |
| prompt_format_sensitivity/short_factual_qa/json_object | 3 | 123 | 0.164030 | 0.087255 | 0.076775 | 9.443270 |
| prompt_format_sensitivity/record_extraction/python_repl | 3 | 241 | 0.041958 | 0.003528 | 0.038429 | 9.261478 |
| prompt_format_sensitivity/news_classification/jsonl | 3 | 89 | 0.221458 | 0.121529 | 0.099930 | 8.893738 |
| prompt_format_sensitivity/news_classification/json_object | 3 | 89 | 0.227494 | 0.128694 | 0.098800 | 8.793187 |
| prompt_format_sensitivity/record_extraction/python_doctest | 3 | 241 | 0.038912 | 0.004061 | 0.034850 | 8.398887 |
| prompt_format_sensitivity/python_repl/xml | 3 | 71 | 0.357643 | 0.239786 | 0.117858 | 8.367911 |
| prompt_format_sensitivity/mcqa_science/plain_arrow | 3 | 110 | 0.156561 | 0.232445 | -0.075883 | -8.347181 |
| prompt_format_sensitivity/record_extraction/numbered_steps | 3 | 241 | 0.043504 | 0.009071 | 0.034434 | 8.298515 |
| prompt_format_sensitivity/string_transformation/xml | 3 | 105 | 0.161385 | 0.082360 | 0.079025 | 8.297639 |
| prompt_format_sensitivity/record_extraction/plain_equals | 3 | 241 | 0.040530 | 0.006550 | 0.033980 | 8.189159 |
| prompt_format_sensitivity/news_classification/html_dl | 3 | 110 | 0.226008 | 0.152627 | 0.073381 | 8.071914 |
| prompt_format_sensitivity/short_factual_qa/python_repl | 3 | 114 | 0.172571 | 0.102293 | 0.070279 | 8.011764 |
| prompt_format_sensitivity/news_classification/yaml | 3 | 80 | 0.018171 | 0.114642 | -0.096471 | -7.717708 |
| prompt_format_sensitivity/news_classification/problem_solution | 3 | 80 | 0.015828 | 0.111400 | -0.095573 | -7.645808 |
| prompt_format_sensitivity/record_extraction/xml | 3 | 298 | 0.104985 | 0.079364 | 0.025622 | 7.635211 |
| prompt_format_sensitivity/short_factual_qa/flashcard | 3 | 114 | 0.146109 | 0.211469 | -0.065361 | -7.451106 |
| prompt_format_sensitivity/record_extraction/markdown_table | 3 | 241 | 0.039130 | 0.008376 | 0.030754 | 7.411769 |
| prompt_format_sensitivity/mcqa_science/python_repl | 3 | 110 | 0.205512 | 0.140577 | 0.064935 | 7.142812 |
| prompt_format_sensitivity/news_classification/qa | 3 | 80 | 0.006328 | 0.094834 | -0.088506 | -7.080483 |
| prompt_format_sensitivity/record_extraction/html_dl | 3 | 271 | 0.116447 | 0.090834 | 0.025613 | 6.941126 |
| prompt_format_sensitivity/record_extraction/faq | 3 | 241 | 0.042355 | 0.013635 | 0.028720 | 6.921437 |
| prompt_format_sensitivity/record_extraction/shell_transcript | 3 | 241 | 0.041318 | 0.013161 | 0.028157 | 6.785788 |
| prompt_format_sensitivity/record_extraction/labeled_example | 3 | 241 | 0.042171 | 0.014128 | 0.028043 | 6.758331 |
| prompt_format_sensitivity/record_extraction/ini | 3 | 241 | 0.038000 | 0.010095 | 0.027905 | 6.725155 |
| prompt_format_sensitivity/mcqa_science/jsonl | 3 | 119 | 0.169886 | 0.114552 | 0.055334 | 6.584779 |
| prompt_format_sensitivity/record_extraction/s_expression | 3 | 253 | 0.086075 | 0.060447 | 0.025628 | 6.483867 |
| prompt_format_sensitivity/mcqa_science/numbered_steps | 3 | 110 | 0.194184 | 0.252568 | -0.058384 | -6.422202 |
| prompt_format_sensitivity/mcqa_science/labeled_example | 3 | 110 | 0.166809 | 0.224320 | -0.057511 | -6.326255 |
| prompt_format_sensitivity/python_repl/python_repl | 3 | 14 | 0.500768 | 0.049880 | 0.450888 | 6.312428 |
| prompt_format_sensitivity/short_factual_qa/colon_mapping | 3 | 114 | 0.179065 | 0.124021 | 0.055044 | 6.274994 |
| prompt_format_sensitivity/record_extraction/bullet_list | 3 | 241 | 0.037512 | 0.011849 | 0.025663 | 6.184878 |
| prompt_format_sensitivity/string_transformation/s_expression | 3 | 60 | 0.211071 | 0.109941 | 0.101131 | 6.067853 |
| prompt_format_sensitivity/record_extraction/plain_arrow | 3 | 241 | 0.040942 | 0.015771 | 0.025170 | 6.066083 |
| prompt_format_sensitivity/mcqa_science/json_object | 3 | 119 | 0.160781 | 0.110159 | 0.050622 | 6.023993 |
| prompt_format_sensitivity/news_classification/bullet_list | 3 | 80 | 0.023038 | 0.097124 | -0.074086 | -5.926894 |
| prompt_format_sensitivity/record_extraction/toml | 3 | 250 | 0.137596 | 0.113933 | 0.023664 | 5.915928 |
| prompt_format_sensitivity/news_classification/faq | 3 | 80 | 0.018808 | 0.092219 | -0.073412 | -5.872946 |
| prompt_format_sensitivity/mcqa_science/python_doctest | 3 | 110 | 0.207824 | 0.155445 | 0.052379 | 5.761695 |
| prompt_format_sensitivity/mcqa_science/shell_transcript | 3 | 110 | 0.181867 | 0.233558 | -0.051692 | -5.686088 |
| prompt_format_sensitivity/mcqa_science/tsv | 3 | 110 | 0.199037 | 0.250463 | -0.051426 | -5.656833 |
| prompt_format_sensitivity/mcqa_science/toml | 3 | 119 | 0.132656 | 0.180152 | -0.047497 | -5.652090 |
| prompt_format_sensitivity/record_extraction/qa | 3 | 241 | 0.043299 | 0.019998 | 0.023301 | 5.615423 |
| prompt_format_sensitivity/short_factual_qa/numbered_steps | 3 | 114 | 0.142064 | 0.190437 | -0.048373 | -5.514498 |
| prompt_format_sensitivity/record_extraction/yaml | 3 | 241 | 0.039659 | 0.017426 | 0.022233 | 5.358266 |
| prompt_format_sensitivity/mcqa_science/flashcard | 3 | 110 | 0.176478 | 0.224062 | -0.047585 | -5.234313 |
| prompt_format_sensitivity/mcqa_science/csv | 3 | 110 | 0.209287 | 0.255704 | -0.046417 | -5.105884 |
| prompt_format_sensitivity/short_factual_qa/key_value_block | 3 | 114 | 0.130987 | 0.175096 | -0.044109 | -5.028441 |
| prompt_format_sensitivity/mcqa_science/plain_equals | 3 | 110 | 0.177767 | 0.223188 | -0.045421 | -4.996346 |
| prompt_format_sensitivity/python_repl/sql_result | 3 | 14 | 0.422120 | 0.072837 | 0.349282 | 4.889955 |
| prompt_format_sensitivity/short_factual_qa/toml | 3 | 123 | 0.119745 | 0.157999 | -0.038254 | -4.705196 |
| prompt_format_sensitivity/python_repl/ini | 3 | 14 | 0.335569 | 0.007851 | 0.327717 | 4.588045 |
| prompt_format_sensitivity/record_extraction/colon_mapping | 3 | 241 | 0.038381 | 0.019382 | 0.018999 | 4.578686 |
| prompt_format_sensitivity/short_factual_qa/tsv | 3 | 114 | 0.175743 | 0.135759 | 0.039984 | 4.558202 |
| prompt_format_sensitivity/short_factual_qa/qa | 3 | 114 | 0.177708 | 0.137755 | 0.039953 | 4.554651 |
| prompt_format_sensitivity/news_classification/colon_mapping | 3 | 80 | 0.007072 | 0.062736 | -0.055665 | -4.453167 |
| prompt_format_sensitivity/short_factual_qa/plain_arrow | 3 | 114 | 0.126949 | 0.165781 | -0.038832 | -4.426820 |
| prompt_format_sensitivity/news_classification/shell_transcript | 3 | 80 | 0.015231 | 0.065367 | -0.050136 | -4.010846 |
| prompt_format_sensitivity/string_transformation/toml | 3 | 57 | 0.328248 | 0.259876 | 0.068372 | 3.897209 |
| prompt_format_sensitivity/record_extraction/problem_solution | 3 | 241 | 0.041008 | 0.025162 | 0.015846 | 3.818787 |
| prompt_format_sensitivity/python_repl/bullet_list | 3 | 14 | 0.263714 | 0.003937 | 0.259777 | 3.636882 |
| prompt_format_sensitivity/python_repl/shell_transcript | 3 | 14 | 0.288455 | 0.029073 | 0.259383 | 3.631359 |
| prompt_format_sensitivity/python_repl/qa | 3 | 14 | 0.264570 | 0.006577 | 0.257994 | 3.611910 |
| prompt_format_sensitivity/python_repl/numbered_steps | 3 | 14 | 0.271305 | 0.013536 | 0.257769 | 3.608765 |
| prompt_format_sensitivity/mcqa_science/html_dl | 3 | 140 | 0.158836 | 0.133129 | 0.025707 | 3.599002 |
| prompt_format_sensitivity/python_repl/yaml | 3 | 14 | 0.253350 | 0.002282 | 0.251068 | 3.514951 |
| prompt_format_sensitivity/news_classification/ini | 3 | 80 | 0.015699 | 0.059452 | -0.043753 | -3.500256 |
| prompt_format_sensitivity/record_extraction/flashcard | 3 | 241 | 0.041468 | 0.055682 | -0.014214 | -3.425640 |
| prompt_format_sensitivity/news_classification/toml | 3 | 89 | 0.283973 | 0.322197 | -0.038224 | -3.401963 |
| prompt_format_sensitivity/python_repl/faq | 3 | 14 | 0.245765 | 0.007244 | 0.238521 | 3.339290 |
| prompt_format_sensitivity/python_repl/markdown_table | 3 | 14 | 0.218091 | 0.454706 | -0.236615 | -3.312605 |
| prompt_format_sensitivity/short_factual_qa/python_doctest | 3 | 114 | 0.166129 | 0.137525 | 0.028604 | 3.260863 |
| prompt_format_sensitivity/mcqa_science/yaml | 3 | 110 | 0.194648 | 0.223613 | -0.028965 | -3.186155 |
| prompt_format_sensitivity/mcqa_science/colon_mapping | 3 | 110 | 0.183746 | 0.211617 | -0.027871 | -3.065785 |
| prompt_format_sensitivity/python_repl/labeled_example | 3 | 14 | 0.255581 | 0.037339 | 0.218242 | 3.055391 |
| prompt_format_sensitivity/short_factual_qa/sql_result | 3 | 114 | 0.137722 | 0.164200 | -0.026478 | -3.018474 |
| prompt_format_sensitivity/python_repl/flashcard | 3 | 14 | 0.218173 | 0.003861 | 0.214313 | 3.000381 |
| prompt_format_sensitivity/python_repl/key_value_block | 3 | 14 | 0.239459 | 0.025230 | 0.214229 | 2.999204 |
| prompt_format_sensitivity/mcqa_science/s_expression | 3 | 122 | 0.166568 | 0.142360 | 0.024207 | 2.953308 |
| prompt_format_sensitivity/python_repl/colon_mapping | 3 | 14 | 0.217510 | 0.013142 | 0.204368 | 2.861157 |
| prompt_format_sensitivity/mcqa_science/qa | 3 | 110 | 0.215172 | 0.189235 | 0.025938 | 2.853134 |
| prompt_format_sensitivity/record_extraction/sql_result | 3 | 241 | 0.040652 | 0.028855 | 0.011797 | 2.843125 |
| prompt_format_sensitivity/news_classification/flashcard | 3 | 80 | 0.041764 | 0.076948 | -0.035184 | -2.814702 |
| prompt_format_sensitivity/python_repl/plain_equals | 3 | 14 | 0.218610 | 0.023333 | 0.195278 | 2.733887 |
| prompt_format_sensitivity/short_factual_qa/s_expression | 3 | 126 | 0.150766 | 0.129503 | 0.021263 | 2.679129 |
| prompt_format_sensitivity/python_repl/plain_arrow | 3 | 14 | 0.203126 | 0.013926 | 0.189200 | 2.648798 |
| prompt_format_sensitivity/short_factual_qa/ini | 3 | 114 | 0.159163 | 0.182355 | -0.023192 | -2.643849 |
| prompt_format_sensitivity/python_repl/problem_solution | 3 | 14 | 0.249261 | 0.068164 | 0.181097 | 2.535360 |
| prompt_format_sensitivity/short_factual_qa/yaml | 3 | 114 | 0.162071 | 0.141168 | 0.020902 | 2.382857 |
| prompt_format_sensitivity/news_classification/sql_result | 3 | 80 | 0.007381 | 0.036503 | -0.029122 | -2.329791 |
| prompt_format_sensitivity/python_repl/csv | 3 | 14 | 0.535884 | 0.371467 | 0.164417 | 2.301838 |
| prompt_format_sensitivity/short_factual_qa/markdown_table | 3 | 114 | 0.169472 | 0.151349 | 0.018123 | 2.066043 |
| prompt_format_sensitivity/short_factual_qa/xml | 3 | 171 | 0.112074 | 0.100040 | 0.012034 | 2.057838 |
| prompt_format_sensitivity/mcqa_science/markdown_table | 3 | 110 | 0.200353 | 0.216572 | -0.016219 | -1.784081 |
| prompt_format_sensitivity/news_classification/markdown_table | 3 | 80 | 0.047769 | 0.025540 | 0.022229 | 1.778295 |
| prompt_format_sensitivity/record_extraction/key_value_block | 3 | 241 | 0.038630 | 0.031524 | 0.007106 | 1.712658 |
| prompt_format_sensitivity/string_transformation/labeled_example | 3 | 48 | 0.005711 | 0.040455 | -0.034744 | -1.667696 |
| prompt_format_sensitivity/python_repl/python_doctest | 3 | 14 | 0.351821 | 0.247818 | 0.104003 | 1.456044 |
| prompt_format_sensitivity/mcqa_science/ini | 3 | 110 | 0.194286 | 0.181912 | 0.012373 | 1.361071 |
| prompt_format_sensitivity/news_classification/plain_arrow | 3 | 80 | 0.009655 | 0.026129 | -0.016474 | -1.317904 |
| prompt_format_sensitivity/short_factual_qa/shell_transcript | 3 | 114 | 0.162280 | 0.173481 | -0.011200 | -1.276825 |
| prompt_format_sensitivity/string_transformation/sql_result | 3 | 48 | 0.024761 | 0.000198 | 0.024563 | 1.179003 |
| prompt_format_sensitivity/news_classification/tsv | 3 | 80 | 0.005405 | 0.019146 | -0.013741 | -1.099268 |
| prompt_format_sensitivity/news_classification/python_repl | 3 | 80 | 0.029461 | 0.016088 | 0.013374 | 1.069883 |
| prompt_format_sensitivity/string_transformation/python_doctest | 3 | 48 | 0.022971 | 0.001073 | 0.021898 | 1.051116 |
| prompt_format_sensitivity/news_classification/labeled_example | 3 | 80 | 0.016717 | 0.029742 | -0.013026 | -1.042060 |
| prompt_format_sensitivity/string_transformation/colon_mapping | 3 | 48 | 0.005859 | 0.025995 | -0.020136 | -0.966510 |
| prompt_format_sensitivity/string_transformation/problem_solution | 3 | 48 | 0.005968 | 0.025110 | -0.019143 | -0.918841 |
| prompt_format_sensitivity/news_classification/plain_equals | 3 | 80 | 0.010034 | 0.021519 | -0.011485 | -0.918785 |
| prompt_format_sensitivity/news_classification/numbered_steps | 3 | 80 | 0.011780 | 0.023196 | -0.011416 | -0.913301 |
| prompt_format_sensitivity/mcqa_science/faq | 3 | 110 | 0.194247 | 0.201051 | -0.006804 | -0.748399 |
| prompt_format_sensitivity/news_classification/csv | 3 | 80 | 0.013240 | 0.022525 | -0.009286 | -0.742861 |
| prompt_format_sensitivity/short_factual_qa/faq | 3 | 114 | 0.136240 | 0.142364 | -0.006124 | -0.698170 |
| prompt_format_sensitivity/string_transformation/csv | 3 | 48 | 0.015575 | 0.001397 | 0.014178 | 0.680562 |
| prompt_format_sensitivity/news_classification/s_expression | 3 | 92 | 0.176906 | 0.183737 | -0.006831 | -0.628461 |
| prompt_format_sensitivity/string_transformation/shell_transcript | 3 | 48 | 0.013879 | 0.001077 | 0.012802 | 0.614505 |
| prompt_format_sensitivity/string_transformation/yaml | 3 | 48 | 0.013303 | 0.000896 | 0.012406 | 0.595499 |
| prompt_format_sensitivity/mcqa_science/problem_solution | 3 | 110 | 0.206411 | 0.211740 | -0.005329 | -0.586160 |
| prompt_format_sensitivity/news_classification/xml | 3 | 137 | 0.157961 | 0.153715 | 0.004246 | 0.581688 |
| prompt_format_sensitivity/string_transformation/python_repl | 3 | 48 | 0.012652 | 0.000710 | 0.011943 | 0.573258 |
| prompt_format_sensitivity/string_transformation/bullet_list | 3 | 48 | 0.010564 | 0.000277 | 0.010287 | 0.493797 |
| prompt_format_sensitivity/string_transformation/plain_equals | 3 | 48 | 0.010431 | 0.000550 | 0.009881 | 0.474279 |
| prompt_format_sensitivity/short_factual_qa/csv | 3 | 114 | 0.166820 | 0.170920 | -0.004100 | -0.467388 |
| prompt_format_sensitivity/string_transformation/tsv | 3 | 48 | 0.012166 | 0.002581 | 0.009586 | 0.460121 |
| prompt_format_sensitivity/string_transformation/markdown_table | 3 | 48 | 0.010777 | 0.001266 | 0.009511 | 0.456536 |
| prompt_format_sensitivity/mcqa_science/xml | 3 | 167 | 0.122100 | 0.124526 | -0.002426 | -0.405109 |
| prompt_format_sensitivity/string_transformation/key_value_block | 3 | 48 | 0.009381 | 0.001754 | 0.007627 | 0.366097 |
| prompt_format_sensitivity/string_transformation/flashcard | 3 | 48 | 0.007791 | 0.000617 | 0.007174 | 0.344342 |
| prompt_format_sensitivity/short_factual_qa/plain_equals | 3 | 114 | 0.165734 | 0.162760 | 0.002973 | 0.338976 |
| prompt_format_sensitivity/string_transformation/plain_arrow | 3 | 48 | 0.009819 | 0.002852 | 0.006967 | 0.334428 |
| prompt_format_sensitivity/news_classification/python_doctest | 3 | 80 | 0.015175 | 0.018412 | -0.003237 | -0.258933 |
| prompt_format_sensitivity/short_factual_qa/problem_solution | 3 | 114 | 0.127566 | 0.125341 | 0.002225 | 0.253690 |
| prompt_format_sensitivity/short_factual_qa/bullet_list | 3 | 114 | 0.143267 | 0.145135 | -0.001867 | -0.212894 |
| prompt_format_sensitivity/string_transformation/qa | 3 | 48 | 0.006080 | 0.002766 | 0.003314 | 0.159090 |
| prompt_format_sensitivity/string_transformation/numbered_steps | 3 | 48 | 0.006710 | 0.004577 | 0.002133 | 0.102394 |
| prompt_format_sensitivity/string_transformation/faq | 3 | 48 | 0.005199 | 0.005775 | -0.000575 | -0.027608 |
| prompt_format_sensitivity/mcqa_science/sql_result | 3 | 110 | 0.193978 | 0.193762 | 0.000216 | 0.023712 |
| prompt_format_sensitivity/string_transformation/ini | 3 | 48 | 0.004947 | 0.005107 | -0.000161 | -0.007709 |

## Dataset Groups

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| format:supervised_target_only | 468 | 16540 | 0.113806 | 0.095491 | 0.018315 | 302.926050 |
| issue:6067 | 468 | 16540 | 0.113806 | 0.095491 | 0.018315 | 302.926050 |
| num_fewshot:5 | 468 | 16540 | 0.113806 | 0.095491 | 0.018315 | 302.926050 |
| prompt_format_sensitivity | 468 | 16540 | 0.113806 | 0.095491 | 0.018315 | 302.926050 |
| prompt_format_sensitivity/record_extraction | 78 | 6394 | 0.059687 | 0.031059 | 0.028628 | 183.044571 |
| task:record_extraction | 78 | 6394 | 0.059687 | 0.031059 | 0.028628 | 183.044571 |
| prompt_format_sensitivity/python_repl | 78 | 490 | 0.482581 | 0.222571 | 0.260010 | 127.404864 |
| task:python_repl | 78 | 490 | 0.482581 | 0.222571 | 0.260010 | 127.404864 |
| template:jsonl | 18 | 661 | 0.201760 | 0.089609 | 0.112151 | 74.131788 |
| template:json_object | 18 | 661 | 0.197426 | 0.092936 | 0.104490 | 69.067812 |
| prompt_format_sensitivity/string_transformation | 78 | 1374 | 0.079210 | 0.032940 | 0.046270 | 63.574468 |
| task:string_transformation | 78 | 1374 | 0.079210 | 0.032940 | 0.046270 | 63.574468 |
| template:html_dl | 18 | 787 | 0.183345 | 0.103809 | 0.079536 | 62.595082 |
| prompt_format_sensitivity/mcqa_science | 78 | 2986 | 0.179603 | 0.196247 | -0.016643 | -49.696765 |
| task:mcqa_science | 78 | 2986 | 0.179603 | 0.196247 | -0.016643 | -49.696765 |
| prompt_format_sensitivity/news_classification | 78 | 2206 | 0.070252 | 0.091652 | -0.021400 | -47.208916 |
| task:news_classification | 78 | 2206 | 0.070252 | 0.091652 | -0.021400 | -47.208916 |
| template:python_repl | 18 | 607 | 0.102745 | 0.049414 | 0.053331 | 32.371622 |
| template:s_expression | 18 | 679 | 0.170150 | 0.123199 | 0.046952 | 31.880329 |
| template:key_value_block | 18 | 607 | 0.078879 | 0.123540 | -0.044661 | -27.108930 |
| template:xml | 18 | 949 | 0.142065 | 0.114104 | 0.027961 | 26.535177 |
| prompt_format_sensitivity/short_factual_qa | 78 | 3090 | 0.150206 | 0.141854 | 0.008352 | 25.807828 |
| task:short_factual_qa | 78 | 3090 | 0.150206 | 0.141854 | 0.008352 | 25.807828 |
| template:python_doctest | 18 | 607 | 0.096242 | 0.063838 | 0.032405 | 19.669673 |
| template:flashcard | 18 | 607 | 0.087038 | 0.112707 | -0.025669 | -15.581037 |
| template:labeled_example | 18 | 607 | 0.075732 | 0.091895 | -0.016163 | -9.811240 |
| template:qa | 18 | 607 | 0.096977 | 0.080974 | 0.016003 | 9.713725 |
| template:csv | 18 | 609 | 0.113538 | 0.101047 | 0.012491 | 7.607149 |
| template:markdown_table | 18 | 607 | 0.095850 | 0.084951 | 0.010899 | 6.615957 |
| template:ini | 18 | 607 | 0.090388 | 0.079642 | 0.010745 | 6.522458 |
| template:toml | 18 | 661 | 0.202548 | 0.192970 | 0.009579 | 6.331441 |
| template:bullet_list | 18 | 607 | 0.082501 | 0.092690 | -0.010189 | -6.184657 |
| template:plain_equals | 18 | 607 | 0.086622 | 0.077032 | 0.009590 | 5.821170 |
| template:colon_mapping | 18 | 607 | 0.088579 | 0.079964 | 0.008615 | 5.229374 |
| template:plain_arrow | 18 | 607 | 0.075203 | 0.083511 | -0.008307 | -5.042597 |
| template:sql_result | 18 | 607 | 0.089825 | 0.083915 | 0.005910 | 3.587531 |
| template:faq | 18 | 607 | 0.086163 | 0.081363 | 0.004800 | 2.913604 |
| template:problem_solution | 18 | 607 | 0.085952 | 0.090142 | -0.004189 | -2.542972 |
| template:tsv | 18 | 607 | 0.095203 | 0.097776 | -0.002573 | -1.561684 |
| template:yaml | 18 | 607 | 0.090749 | 0.089187 | 0.001561 | 0.947709 |
| template:numbered_steps | 18 | 607 | 0.087484 | 0.088868 | -0.001384 | -0.840327 |
| template:shell_transcript | 18 | 607 | 0.089598 | 0.089503 | 0.000095 | 0.057892 |

## Pattern Buckets

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| text/punctuation | 1344 | 1596 | 1.012201 | 0.747465 | 0.264737 | 422.519617 |
| text/word | 2282 | 11928 | 0.013798 | 0.029184 | -0.015387 | -183.530292 |
| text/number | 364 | 1534 | 0.058427 | 0.015764 | 0.042663 | 65.445623 |
| whitespace/single_space | 1482 | 1482 | 0.008549 | 0.009567 | -0.001018 | -1.508897 |

## Top Documents: Model A Worse

| dataset | shard | row_index | bytes | score_byte_start | score_byte_end | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| prompt_format_sensitivity/record_extraction/jsonl | staged_jsonl_gz | 2 | 79 | 1068 | 1147 | 0.213401 | 0.044841 | 0.168560 | 13.316243 | text/punctuation | = | 10.087001 | …ds␠to␠Busan␠on␠2026-08-22.",␠"output":␠"batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10"} |
| prompt_format_sensitivity/record_extraction/json_object | staged_jsonl_gz | 2 | 79 | 1066 | 1145 | 0.204692 | 0.048555 | 0.156137 | 12.334850 | text/punctuation | = | 9.723660 | …ds␠to␠Busan␠on␠2026-08-22.",␠"output":␠"batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10"} |
| prompt_format_sensitivity/record_extraction/csv | staged_jsonl_gz | 2 | 78 | 911 | 989 | 0.221645 | 0.081293 | 0.140352 | 10.947472 | text/punctuation | = | 9.735271 | …s␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.,"batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10" |
| prompt_format_sensitivity/python_repl/jsonl | staged_jsonl_gz | 1 | 13 | 482 | 495 | 1.025741 | 0.214822 | 0.810919 | 10.541943 | text/word | east-north | 0.717392 | …'a':␠2,␠'b':␠5}['b']␠*␠3",␠"output":␠"15"}⏎⏎{"input":␠"'-'.join(reversed(['north',␠'east']))",␠"output":␠"east-north"} |
| prompt_format_sensitivity/python_repl/json_object | staged_jsonl_gz | 1 | 13 | 480 | 493 | 1.011446 | 0.202138 | 0.809308 | 10.521009 | text/word | east-north | 0.711951 | …'a':␠2,␠'b':␠5}['b']␠*␠3",␠"output":␠"15"}⏎⏎{"input":␠"'-'.join(reversed(['north',␠'east']))",␠"output":␠"east-north"} |
| prompt_format_sensitivity/python_repl/s_expression | staged_jsonl_gz | 1 | 14 | 510 | 524 | 0.976364 | 0.232043 | 0.744320 | 10.420486 | text/word | east-north | 0.860359 | …␠2,␠'b':␠5}['b']␠*␠3")␠(output␠"15"))⏎⏎(example␠(input␠"'-'.join(reversed(['north',␠'east']))")␠(output␠"east-north")) |
| prompt_format_sensitivity/record_extraction/tsv | staged_jsonl_gz | 2 | 76 | 909 | 985 | 0.144070 | 0.009649 | 0.134420 | 10.215934 | text/punctuation | = | 10.292895 | …ras␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⇥batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/numbered_steps | staged_jsonl_gz | 2 | 76 | 1043 | 1119 | 0.133968 | 0.010809 | 0.123158 | 9.360045 | text/punctuation | = | 9.678444 | …tripods␠to␠Busan␠on␠2026-08-22.⏎2.␠Return␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/python_repl | staged_jsonl_gz | 2 | 76 | 991 | 1067 | 0.127627 | 0.008100 | 0.119527 | 9.084088 | text/punctuation | = | 9.156693 | …s␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.")⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/plain_equals | staged_jsonl_gz | 2 | 76 | 933 | 1009 | 0.122303 | 0.008225 | 0.114078 | 8.669926 | text/punctuation | = | 8.733596 | …s␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎=␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/faq | staged_jsonl_gz | 2 | 76 | 1079 | 1155 | 0.129406 | 0.015757 | 0.113649 | 8.637333 | text/punctuation | = | 9.291626 | …8␠tripods␠to␠Busan␠on␠2026-08-22.⏎Answer:␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/html_dl | staged_jsonl_gz | 2 | 86 | 1069 | 1155 | 0.193599 | 0.094201 | 0.099398 | 8.548240 | text/punctuation | = | 8.475553 | …to␠Busan␠on␠2026-08-22.</dt><dd>batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10</dd></dl> |
| prompt_format_sensitivity/record_extraction/toml | staged_jsonl_gz | 2 | 79 | 1156 | 1235 | 0.229555 | 0.121912 | 0.107642 | 8.503736 | text/punctuation | = | 8.252002 | …to␠Busan␠on␠2026-08-22."""⏎output␠=␠"""batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10""" |
| prompt_format_sensitivity/record_extraction/xml | staged_jsonl_gz | 2 | 95 | 1202 | 1297 | 0.181950 | 0.092472 | 0.089478 | 8.500405 | text/punctuation | = | 9.403707 | …-08-22.</input><output>batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10</output></example> |
| prompt_format_sensitivity/record_extraction/markdown_table | staged_jsonl_gz | 2 | 76 | 944 | 1020 | 0.118304 | 0.006581 | 0.111722 | 8.490882 | text/punctuation | = | 8.366320 | …s␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.␠\|␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/qa | staged_jsonl_gz | 2 | 76 | 947 | 1023 | 0.130718 | 0.019741 | 0.110978 | 8.434302 | text/punctuation | = | 9.647082 | …␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎A:␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/plain_arrow | staged_jsonl_gz | 2 | 76 | 938 | 1014 | 0.123976 | 0.013887 | 0.110089 | 8.366772 | text/punctuation | = | 8.847242 | …␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎->␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/python_doctest | staged_jsonl_gz | 2 | 76 | 1018 | 1094 | 0.118960 | 0.010474 | 0.108486 | 8.244961 | text/punctuation | = | 8.313141 | …and␠8␠tripods␠to␠Busan␠on␠2026-08-22.""")⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/s_expression | staged_jsonl_gz | 2 | 80 | 1096 | 1176 | 0.169765 | 0.068119 | 0.101646 | 8.131687 | text/punctuation | = | 8.817095 | …ods␠to␠Busan␠on␠2026-08-22.")␠(output␠"batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10")) |
| prompt_format_sensitivity/record_extraction/bullet_list | staged_jsonl_gz | 2 | 76 | 1037 | 1113 | 0.113589 | 0.013723 | 0.099866 | 7.589843 | text/punctuation | = | 8.222217 | …tripods␠to␠Busan␠on␠2026-08-22.⏎␠␠output:␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/shell_transcript | staged_jsonl_gz | 2 | 76 | 1062 | 1138 | 0.125105 | 0.027971 | 0.097134 | 7.382220 | text/punctuation | = | 8.778619 | …d␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎INPUT⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/labeled_example | staged_jsonl_gz | 2 | 76 | 1060 | 1136 | 0.127260 | 0.030985 | 0.096275 | 7.316915 | text/punctuation | = | 9.072982 | …8␠tripods␠to␠Busan␠on␠2026-08-22.⏎Result:⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/colon_mapping | staged_jsonl_gz | 2 | 76 | 1017 | 1093 | 0.116488 | 0.021980 | 0.094508 | 7.182611 | text/punctuation | = | 8.581319 | …8␠tripods␠to␠Busan␠on␠2026-08-22.⏎Output:␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/yaml | staged_jsonl_gz | 2 | 76 | 1071 | 1147 | 0.118817 | 0.028380 | 0.090437 | 6.873231 | text/punctuation | = | 8.540082 | …tripods␠to␠Busan␠on␠2026-08-22.⏎␠␠output:␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/ini | staged_jsonl_gz | 2 | 76 | 1051 | 1127 | 0.113438 | 0.025614 | 0.087824 | 6.674656 | text/punctuation | = | 7.708419 | …␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎output=batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |

## Top Documents: Model B Worse

| dataset | shard | row_index | bytes | score_byte_start | score_byte_end | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| prompt_format_sensitivity/python_repl/tsv | staged_jsonl_gz | 0 | 2 | 303 | 305 | 1.208426 | 4.812619 | -3.604193 | -7.208387 | text/number | 42 | -3.604193 | …UE⏎⏎sum([3,␠5,␠8])⇥16⏎⏎sorted(['delta',␠'alpha',␠'beta'])[0]⇥alpha⏎⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⇥15⏎⏎len('prompt')␠*␠7⇥42 |
| prompt_format_sensitivity/news_classification/key_value_block | staged_jsonl_gz | 0 | 27 | 719 | 746 | 0.006982 | 0.263576 | -0.256594 | -6.928051 | text/word | Science | -0.989416 | …e␠news⏎⏎input:⏎The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.⏎⏎output:⏎Science␠and␠technology␠news |
| prompt_format_sensitivity/record_extraction/flashcard | staged_jsonl_gz | 0 | 84 | 997 | 1081 | 0.001503 | 0.076508 | -0.075005 | -6.300416 | text/word | order_id | -0.787173 | …ps␠9␠sensors␠to␠Tallinn␠for␠Jules␠on␠2026-06-03.⏎Back:␠order_id=2880;␠owner=Jules;␠city=Tallinn;␠date=2026-06-03;␠item… |
| prompt_format_sensitivity/news_classification/key_value_block | staged_jsonl_gz | 2 | 25 | 696 | 721 | 0.004005 | 0.246144 | -0.242139 | -6.053477 | text/word | Sports | -0.950162 | …⏎⏎output:⏎Arts␠and␠culture␠news⏎⏎input:⏎The␠tennis␠final␠was␠delayed␠by␠heavy␠rain.⏎⏎output:⏎Sports␠competition␠report |
| prompt_format_sensitivity/mcqa_science/bullet_list | staged_jsonl_gz | 2 | 38 | 1113 | 1151 | 0.142146 | 0.282849 | -0.140703 | -5.346702 | text/word | Copper | -0.761961 | …␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎␠␠output:␠Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/news_classification/faq | staged_jsonl_gz | 1 | 28 | 761 | 789 | 0.034836 | 0.214835 | -0.179999 | -5.039960 | text/word | Politics | -0.630574 | …re␠news⏎⏎FAQ␠entry⏎Question:␠The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎Answer:␠Politics␠and␠government␠news |
| prompt_format_sensitivity/mcqa_science/key_value_block | staged_jsonl_gz | 0 | 34 | 1098 | 1132 | 0.236598 | 0.370988 | -0.134390 | -4.569259 | text/word | The | -1.980931 | …rt␠of␠a␠plant␠takes␠in␠water␠from␠soil?⏎A.␠Flower⏎B.␠Root⏎C.␠Petal⏎D.␠Seed⏎⏎output:⏎The␠root␠takes␠in␠water␠from␠soil. |
| prompt_format_sensitivity/mcqa_science/key_value_block | staged_jsonl_gz | 2 | 38 | 1099 | 1137 | 0.144369 | 0.260840 | -0.116471 | -4.425894 | text/word | Copper | -1.006798 | …l␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎⏎output:⏎Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/mcqa_science/shell_transcript | staged_jsonl_gz | 2 | 38 | 1138 | 1176 | 0.150691 | 0.267008 | -0.116317 | -4.420037 | text/word | Copper | -1.010840 | …rial␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎INPUT⏎Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/news_classification/qa | staged_jsonl_gz | 1 | 28 | 629 | 657 | 0.007650 | 0.159623 | -0.151973 | -4.255235 | text/word | Politics | -0.531583 | …end.⏎A:␠Arts␠and␠culture␠news⏎⏎Q:␠The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎A:␠Politics␠and␠government␠news |
| prompt_format_sensitivity/mcqa_science/numbered_steps | staged_jsonl_gz | 2 | 38 | 1119 | 1157 | 0.165576 | 0.276826 | -0.111250 | -4.227507 | text/word | Copper | -0.497636 | …␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎2.␠Return␠Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/short_factual_qa/key_value_block | staged_jsonl_gz | 1 | 40 | 605 | 645 | 0.127904 | 0.232198 | -0.104294 | -4.171748 | text/word | Leonardo | -0.684202 | …blue␠whale␠is␠the␠largest␠mammal.⏎⏎input:⏎Who␠painted␠the␠Mona␠Lisa?⏎⏎output:⏎Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. |
| prompt_format_sensitivity/short_factual_qa/labeled_example | staged_jsonl_gz | 2 | 42 | 664 | 706 | 0.083166 | 0.176089 | -0.092922 | -3.902744 | text/punctuation | . | -3.993084 | …l.⏎⏎Example⏎Given:⏎Which␠planet␠has␠the␠most␠prominent␠ring␠system?⏎Result:⏎Saturn␠has␠the␠most␠prominent␠ring␠system. |
| prompt_format_sensitivity/short_factual_qa/labeled_example | staged_jsonl_gz | 1 | 40 | 642 | 682 | 0.109481 | 0.200058 | -0.090577 | -3.623091 | text/punctuation | . | -3.431607 | …ale␠is␠the␠largest␠mammal.⏎⏎Example⏎Given:⏎Who␠painted␠the␠Mona␠Lisa?⏎Result:⏎Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. |
| prompt_format_sensitivity/mcqa_science/plain_arrow | staged_jsonl_gz | 1 | 38 | 1016 | 1054 | 0.135780 | 0.228720 | -0.092940 | -3.531721 | text/punctuation | . | -2.992373 | …estial␠body␠gives␠Earth␠most␠of␠its␠light?⏎A.␠Moon⏎B.␠Sun⏎C.␠Mars⏎D.␠Polaris⏎->␠The␠Sun␠gives␠Earth␠most␠of␠its␠light. |
| prompt_format_sensitivity/mcqa_science/yaml | staged_jsonl_gz | 2 | 38 | 1243 | 1281 | 0.162081 | 0.254755 | -0.092673 | -3.521579 | text/word | Copper | -0.680698 | …rical␠conductor?⏎␠␠␠␠A.␠Rubber⏎␠␠␠␠B.␠Copper⏎␠␠␠␠C.␠Glass⏎␠␠␠␠D.␠Wood⏎␠␠output:␠Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/short_factual_qa/shell_transcript | staged_jsonl_gz | 0 | 32 | 653 | 685 | 0.191231 | 0.300773 | -0.109541 | -3.505314 | text/word | Ottawa | -0.870523 | …e␠is␠the␠largest␠mammal.⏎⏎$␠solve␠<<'INPUT'⏎What␠city␠is␠the␠capital␠of␠Canada?⏎INPUT⏎Ottawa␠is␠the␠capital␠of␠Canada. |
| prompt_format_sensitivity/mcqa_science/colon_mapping | staged_jsonl_gz | 2 | 38 | 1093 | 1131 | 0.158278 | 0.249013 | -0.090735 | -3.447916 | text/word | Copper | -0.768068 | …al␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎Output:␠Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/mcqa_science/key_value_block | staged_jsonl_gz | 1 | 38 | 1101 | 1139 | 0.147883 | 0.238457 | -0.090574 | -3.441811 | text/word | The | -1.233211 | …␠body␠gives␠Earth␠most␠of␠its␠light?⏎A.␠Moon⏎B.␠Sun⏎C.␠Mars⏎D.␠Polaris⏎⏎output:⏎The␠Sun␠gives␠Earth␠most␠of␠its␠light. |
| prompt_format_sensitivity/python_repl/markdown_table | staged_jsonl_gz | 0 | 2 | 338 | 340 | 1.409639 | 3.088942 | -1.679303 | -3.358605 | text/number | 42 | -1.679303 | …␠8])␠\|␠16⏎⏎\|␠sorted(['delta',␠'alpha',␠'beta'])[0]␠\|␠alpha⏎⏎\|␠{'a':␠2,␠'b':␠5}['b']␠*␠3␠\|␠15⏎⏎\|␠len('prompt')␠*␠7␠\|␠42 |
| prompt_format_sensitivity/news_classification/yaml | staged_jsonl_gz | 1 | 28 | 753 | 781 | 0.032680 | 0.151412 | -0.118732 | -3.324505 | text/word | Politics | -0.417200 | …ture␠news⏎⏎-␠input:␠\|-⏎␠␠␠␠The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎␠␠output:␠Politics␠and␠government␠news |
| prompt_format_sensitivity/news_classification/problem_solution | staged_jsonl_gz | 2 | 25 | 717 | 742 | 0.006721 | 0.136378 | -0.129657 | -3.241431 | text/word | Sports | -0.445009 | …tion:⏎Arts␠and␠culture␠news⏎⏎Problem:⏎The␠tennis␠final␠was␠delayed␠by␠heavy␠rain.⏎⏎Solution:⏎Sports␠competition␠report |
| prompt_format_sensitivity/news_classification/bullet_list | staged_jsonl_gz | 1 | 28 | 719 | 747 | 0.040738 | 0.155104 | -0.114366 | -3.202260 | text/word | Politics | -0.403753 | …and␠culture␠news⏎⏎-␠input:␠The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎␠␠output:␠Politics␠and␠government␠news |
| prompt_format_sensitivity/short_factual_qa/flashcard | staged_jsonl_gz | 1 | 40 | 582 | 622 | 0.149247 | 0.228936 | -0.079688 | -3.187533 | text/punctuation | . | -3.083571 | …he␠blue␠whale␠is␠the␠largest␠mammal.⏎⏎Front:␠Who␠painted␠the␠Mona␠Lisa?⏎Back:␠Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. |
| prompt_format_sensitivity/news_classification/ini | staged_jsonl_gz | 1 | 28 | 733 | 761 | 0.026317 | 0.140060 | -0.113744 | -3.184827 | text/word | Politics | -0.399630 | …culture␠news⏎⏎[example]⏎input=The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎output=Politics␠and␠government␠news |

## Top Segments: Model A Worse

| dataset | bucket | bytes | delta_bits | gap_bpb | text | doc_preview |
| --- | --- | --- | --- | --- | --- | --- |
| prompt_format_sensitivity/record_extraction/tsv | text/punctuation | 1 | 10.292895 | 10.292895 | = | …ras␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⇥batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/jsonl | text/punctuation | 1 | 10.087001 | 10.087001 | = | …ds␠to␠Busan␠on␠2026-08-22.",␠"output":␠"batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10"} |
| prompt_format_sensitivity/record_extraction/csv | text/punctuation | 1 | 9.735271 | 9.735271 | = | …s␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.,"batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10" |
| prompt_format_sensitivity/record_extraction/json_object | text/punctuation | 1 | 9.723660 | 9.723660 | = | …ds␠to␠Busan␠on␠2026-08-22.",␠"output":␠"batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10"} |
| prompt_format_sensitivity/record_extraction/numbered_steps | text/punctuation | 1 | 9.678444 | 9.678444 | = | …tripods␠to␠Busan␠on␠2026-08-22.⏎2.␠Return␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/qa | text/punctuation | 1 | 9.647082 | 9.647082 | = | …␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎A:␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/xml | text/punctuation | 1 | 9.403707 | 9.403707 | = | …-08-22.</input><output>batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10</output></example> |
| prompt_format_sensitivity/record_extraction/problem_solution | text/punctuation | 1 | 9.307768 | 9.307768 | = | …ripods␠to␠Busan␠on␠2026-08-22.⏎⏎Solution:⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/faq | text/punctuation | 1 | 9.291626 | 9.291626 | = | …8␠tripods␠to␠Busan␠on␠2026-08-22.⏎Answer:␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/flashcard | text/punctuation | 1 | 9.248928 | 9.248928 | = | …d␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎Back:␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/python_repl | text/punctuation | 1 | 9.156693 | 9.156693 | = | …s␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.")⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/labeled_example | text/punctuation | 1 | 9.072982 | 9.072982 | = | …8␠tripods␠to␠Busan␠on␠2026-08-22.⏎Result:⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/sql_result | text/punctuation | 1 | 8.999675 | 8.999675 | = | …n␠2026-08-22.$$)␠AS␠output;⏎output⏎------⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/plain_arrow | text/punctuation | 1 | 8.847242 | 8.847242 | = | …␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎->␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/s_expression | text/punctuation | 1 | 8.817095 | 8.817095 | = | …ods␠to␠Busan␠on␠2026-08-22.")␠(output␠"batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10")) |
| prompt_format_sensitivity/record_extraction/shell_transcript | text/punctuation | 1 | 8.778619 | 8.778619 | = | …d␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎INPUT⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/key_value_block | text/punctuation | 1 | 8.744856 | 8.744856 | = | …␠tripods␠to␠Busan␠on␠2026-08-22.⏎⏎output:⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/plain_equals | text/punctuation | 1 | 8.733596 | 8.733596 | = | …s␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎=␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/python_repl/s_expression | text/word | 10 | 8.603591 | 0.860359 | east-north | …␠2,␠'b':␠5}['b']␠*␠3")␠(output␠"15"))⏎⏎(example␠(input␠"'-'.join(reversed(['north',␠'east']))")␠(output␠"east-north")) |
| prompt_format_sensitivity/record_extraction/colon_mapping | text/punctuation | 1 | 8.581319 | 8.581319 | = | …8␠tripods␠to␠Busan␠on␠2026-08-22.⏎Output:␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/yaml | text/punctuation | 1 | 8.540082 | 8.540082 | = | …tripods␠to␠Busan␠on␠2026-08-22.⏎␠␠output:␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/html_dl | text/punctuation | 1 | 8.475553 | 8.475553 | = | …to␠Busan␠on␠2026-08-22.</dt><dd>batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10</dd></dl> |
| prompt_format_sensitivity/record_extraction/markdown_table | text/punctuation | 1 | 8.366320 | 8.366320 | = | …s␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.␠\|␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/python_doctest | text/punctuation | 1 | 8.313141 | 8.313141 | = | …and␠8␠tripods␠to␠Busan␠on␠2026-08-22.""")⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/toml | text/punctuation | 1 | 8.252002 | 8.252002 | = | …to␠Busan␠on␠2026-08-22."""⏎output␠=␠"""batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10""" |
| prompt_format_sensitivity/record_extraction/bullet_list | text/punctuation | 1 | 8.222217 | 8.222217 | = | …tripods␠to␠Busan␠on␠2026-08-22.⏎␠␠output:␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/record_extraction/ini | text/punctuation | 1 | 7.708419 | 7.708419 | = | …␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎output=batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 |
| prompt_format_sensitivity/python_repl/jsonl | text/word | 10 | 7.173922 | 0.717392 | east-north | …'a':␠2,␠'b':␠5}['b']␠*␠3",␠"output":␠"15"}⏎⏎{"input":␠"'-'.join(reversed(['north',␠'east']))",␠"output":␠"east-north"} |
| prompt_format_sensitivity/python_repl/json_object | text/word | 10 | 7.119513 | 0.711951 | east-north | …'a':␠2,␠'b':␠5}['b']␠*␠3",␠"output":␠"15"}⏎⏎{"input":␠"'-'.join(reversed(['north',␠'east']))",␠"output":␠"east-north"} |
| prompt_format_sensitivity/short_factual_qa/html_dl | text/punctuation | 1 | 5.360160 | 5.360160 | > | …rgest␠mammal.</dd></dl>⏎⏎<dl><dt>Who␠painted␠the␠Mona␠Lisa?</dt><dd>Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa.</dd></dl> |
| prompt_format_sensitivity/short_factual_qa/html_dl | text/punctuation | 1 | 5.215611 | 5.215611 | > | …⏎<dl><dt>Which␠planet␠has␠the␠most␠prominent␠ring␠system?</dt><dd>Saturn␠has␠the␠most␠prominent␠ring␠system.</dd></dl> |
| prompt_format_sensitivity/short_factual_qa/html_dl | text/punctuation | 1 | 5.180309 | 5.180309 | > | …gest␠mammal.</dd></dl>⏎⏎<dl><dt>What␠city␠is␠the␠capital␠of␠Canada?</dt><dd>Ottawa␠is␠the␠capital␠of␠Canada.</dd></dl> |
| prompt_format_sensitivity/string_transformation/html_dl | text/punctuation | 1 | 4.760995 | 4.760995 | > | …e</dt><dd>CENTRAL-0005-PURPLE</dd></dl>⏎⏎<dl><dt>region=north;␠id=64;␠color=silver</dt><dd>NORTH-0064-SILVER</dd></dl> |
| prompt_format_sensitivity/string_transformation/json_object | text/punctuation | 2 | 4.711940 | 2.355970 | "} | …urple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=west;␠id=108;␠color=orange",␠"output":␠"WEST-0108-ORANGE"} |
| prompt_format_sensitivity/string_transformation/json_object | text/punctuation | 2 | 4.501234 | 2.250617 | "} | …=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=east;␠id=901;␠color=black",␠"output":␠"EAST-0901-BLACK"} |
| prompt_format_sensitivity/string_transformation/jsonl | text/punctuation | 2 | 4.461232 | 2.230616 | "} | …urple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=west;␠id=108;␠color=orange",␠"output":␠"WEST-0108-ORANGE"} |
| prompt_format_sensitivity/python_repl/xml | text/word | 10 | 4.461029 | 0.446103 | east-north | …input>&#x27;-&#x27;.join(reversed([&#x27;north&#x27;,␠&#x27;east&#x27;]))</input><output>east-north</output></example> |
| prompt_format_sensitivity/string_transformation/html_dl | text/punctuation | 1 | 4.405029 | 4.405029 | > | …rple</dt><dd>CENTRAL-0005-PURPLE</dd></dl>⏎⏎<dl><dt>region=east;␠id=901;␠color=black</dt><dd>EAST-0901-BLACK</dd></dl> |
| prompt_format_sensitivity/string_transformation/jsonl | text/punctuation | 2 | 4.340983 | 2.170491 | "} | …=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=east;␠id=901;␠color=black",␠"output":␠"EAST-0901-BLACK"} |
| prompt_format_sensitivity/string_transformation/html_dl | text/punctuation | 1 | 4.337514 | 4.337514 | > | …le</dt><dd>CENTRAL-0005-PURPLE</dd></dl>⏎⏎<dl><dt>region=west;␠id=108;␠color=orange</dt><dd>WEST-0108-ORANGE</dd></dl> |

## Top Segments: Model B Worse

| dataset | bucket | bytes | delta_bits | gap_bpb | text | doc_preview |
| --- | --- | --- | --- | --- | --- | --- |
| prompt_format_sensitivity/python_repl/tsv | text/number | 2 | -7.208387 | -3.604193 | 42 | …UE⏎⏎sum([3,␠5,␠8])⇥16⏎⏎sorted(['delta',␠'alpha',␠'beta'])[0]⇥alpha⏎⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⇥15⏎⏎len('prompt')␠*␠7⇥42 |
| prompt_format_sensitivity/news_classification/key_value_block | text/word | 7 | -6.925915 | -0.989416 | Science | …e␠news⏎⏎input:⏎The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.⏎⏎output:⏎Science␠and␠technology␠news |
| prompt_format_sensitivity/record_extraction/flashcard | text/word | 8 | -6.297385 | -0.787173 | order_id | …ps␠9␠sensors␠to␠Tallinn␠for␠Jules␠on␠2026-06-03.⏎Back:␠order_id=2880;␠owner=Jules;␠city=Tallinn;␠date=2026-06-03;␠item… |
| prompt_format_sensitivity/mcqa_science/shell_transcript | text/word | 6 | -6.065038 | -1.010840 | Copper | …rial␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎INPUT⏎Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/mcqa_science/key_value_block | text/word | 6 | -6.040791 | -1.006798 | Copper | …l␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎⏎output:⏎Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/mcqa_science/key_value_block | text/word | 3 | -5.942792 | -1.980931 | The | …rt␠of␠a␠plant␠takes␠in␠water␠from␠soil?⏎A.␠Flower⏎B.␠Root⏎C.␠Petal⏎D.␠Seed⏎⏎output:⏎The␠root␠takes␠in␠water␠from␠soil. |
| prompt_format_sensitivity/news_classification/key_value_block | text/word | 6 | -5.700971 | -0.950162 | Sports | …⏎⏎output:⏎Arts␠and␠culture␠news⏎⏎input:⏎The␠tennis␠final␠was␠delayed␠by␠heavy␠rain.⏎⏎output:⏎Sports␠competition␠report |
| prompt_format_sensitivity/short_factual_qa/key_value_block | text/word | 8 | -5.473612 | -0.684202 | Leonardo | …blue␠whale␠is␠the␠largest␠mammal.⏎⏎input:⏎Who␠painted␠the␠Mona␠Lisa?⏎⏎output:⏎Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. |
| prompt_format_sensitivity/short_factual_qa/shell_transcript | text/word | 6 | -5.223137 | -0.870523 | Ottawa | …e␠is␠the␠largest␠mammal.⏎⏎$␠solve␠<<'INPUT'⏎What␠city␠is␠the␠capital␠of␠Canada?⏎INPUT⏎Ottawa␠is␠the␠capital␠of␠Canada. |
| prompt_format_sensitivity/news_classification/faq | text/word | 8 | -5.044595 | -0.630574 | Politics | …re␠news⏎⏎FAQ␠entry⏎Question:␠The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎Answer:␠Politics␠and␠government␠news |
| prompt_format_sensitivity/record_extraction/key_value_block | text/word | 8 | -4.848262 | -0.606033 | batch_id | …cameras␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎⏎output:⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods… |
| prompt_format_sensitivity/mcqa_science/colon_mapping | text/word | 6 | -4.608411 | -0.768068 | Copper | …al␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎Output:␠Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/mcqa_science/bullet_list | text/word | 6 | -4.571767 | -0.761961 | Copper | …␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎␠␠output:␠Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/news_classification/qa | text/word | 8 | -4.252660 | -0.531583 | Politics | …end.⏎A:␠Arts␠and␠culture␠news⏎⏎Q:␠The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎A:␠Politics␠and␠government␠news |
| prompt_format_sensitivity/mcqa_science/yaml | text/word | 6 | -4.084189 | -0.680698 | Copper | …rical␠conductor?⏎␠␠␠␠A.␠Rubber⏎␠␠␠␠B.␠Copper⏎␠␠␠␠C.␠Glass⏎␠␠␠␠D.␠Wood⏎␠␠output:␠Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/short_factual_qa/xml | text/word | 6 | -4.045395 | -0.674233 | Ottawa | …<example><input>What␠city␠is␠the␠capital␠of␠Canada?</input><output>Ottawa␠is␠the␠capital␠of␠Canada.</output></example> |
| prompt_format_sensitivity/short_factual_qa/labeled_example | text/punctuation | 1 | -3.993084 | -3.993084 | . | …l.⏎⏎Example⏎Given:⏎Which␠planet␠has␠the␠most␠prominent␠ring␠system?⏎Result:⏎Saturn␠has␠the␠most␠prominent␠ring␠system. |
| prompt_format_sensitivity/mcqa_science/key_value_block | text/word | 3 | -3.699633 | -1.233211 | The | …␠body␠gives␠Earth␠most␠of␠its␠light?⏎A.␠Moon⏎B.␠Sun⏎C.␠Mars⏎D.␠Polaris⏎⏎output:⏎The␠Sun␠gives␠Earth␠most␠of␠its␠light. |
| prompt_format_sensitivity/short_factual_qa/key_value_block | text/word | 6 | -3.632167 | -0.605361 | Ottawa | …lue␠whale␠is␠the␠largest␠mammal.⏎⏎input:⏎What␠city␠is␠the␠capital␠of␠Canada?⏎⏎output:⏎Ottawa␠is␠the␠capital␠of␠Canada. |
| prompt_format_sensitivity/mcqa_science/shell_transcript | text/word | 3 | -3.584246 | -1.194749 | The | …␠part␠of␠a␠plant␠takes␠in␠water␠from␠soil?⏎A.␠Flower⏎B.␠Root⏎C.␠Petal⏎D.␠Seed⏎INPUT⏎The␠root␠takes␠in␠water␠from␠soil. |
| prompt_format_sensitivity/record_extraction/flashcard | text/word | 8 | -3.484780 | -0.435598 | batch_id | …␠2␠cameras␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎Back:␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods… |
| prompt_format_sensitivity/short_factual_qa/labeled_example | text/punctuation | 1 | -3.431607 | -3.431607 | . | …ale␠is␠the␠largest␠mammal.⏎⏎Example⏎Given:⏎Who␠painted␠the␠Mona␠Lisa?⏎Result:⏎Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. |
| prompt_format_sensitivity/python_repl/markdown_table | text/number | 2 | -3.358605 | -1.679303 | 42 | …␠8])␠\|␠16⏎⏎\|␠sorted(['delta',␠'alpha',␠'beta'])[0]␠\|␠alpha⏎⏎\|␠{'a':␠2,␠'b':␠5}['b']␠*␠3␠\|␠15⏎⏎\|␠len('prompt')␠*␠7␠\|␠42 |
| prompt_format_sensitivity/news_classification/yaml | text/word | 8 | -3.337602 | -0.417200 | Politics | …ture␠news⏎⏎-␠input:␠\|-⏎␠␠␠␠The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎␠␠output:␠Politics␠and␠government␠news |
| prompt_format_sensitivity/news_classification/bullet_list | text/word | 8 | -3.230028 | -0.403753 | Politics | …and␠culture␠news⏎⏎-␠input:␠The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎␠␠output:␠Politics␠and␠government␠news |
| prompt_format_sensitivity/news_classification/ini | text/word | 8 | -3.197043 | -0.399630 | Politics | …culture␠news⏎⏎[example]⏎input=The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎output=Politics␠and␠government␠news |
| prompt_format_sensitivity/mcqa_science/tsv | text/punctuation | 1 | -3.187584 | -3.187584 | . | …stial␠body␠gives␠Earth␠most␠of␠its␠light?\\nA.␠Moon\\nB.␠Sun\\nC.␠Mars\\nD.␠Polaris⇥The␠Sun␠gives␠Earth␠most␠of␠its␠light. |
| prompt_format_sensitivity/short_factual_qa/flashcard | text/punctuation | 1 | -3.083571 | -3.083571 | . | …he␠blue␠whale␠is␠the␠largest␠mammal.⏎⏎Front:␠Who␠painted␠the␠Mona␠Lisa?⏎Back:␠Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. |
| prompt_format_sensitivity/news_classification/yaml | text/word | 7 | -3.033828 | -0.433404 | Science | …input:␠\|-⏎␠␠␠␠The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.⏎␠␠output:␠Science␠and␠technology␠news |
| prompt_format_sensitivity/mcqa_science/plain_arrow | text/punctuation | 1 | -2.992373 | -2.992373 | . | …estial␠body␠gives␠Earth␠most␠of␠its␠light?⏎A.␠Moon⏎B.␠Sun⏎C.␠Mars⏎D.␠Polaris⏎->␠The␠Sun␠gives␠Earth␠most␠of␠its␠light. |
| prompt_format_sensitivity/mcqa_science/numbered_steps | text/word | 6 | -2.985814 | -0.497636 | Copper | …␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎2.␠Return␠Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/record_extraction/problem_solution | text/word | 8 | -2.935704 | -0.366963 | batch_id | …meras␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎⏎Solution:⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods… |
| prompt_format_sensitivity/record_extraction/flashcard | text/word | 9 | -2.908255 | -0.323139 | ticket_id | …Nia␠to␠inspect␠4␠bridges␠in␠Porto␠by␠2026-07-11.⏎Back:␠ticket_id=415;␠owner=Nia;␠city=Porto;␠date=2026-07-11;␠assets=b… |
| prompt_format_sensitivity/news_classification/problem_solution | text/word | 7 | -2.862904 | -0.408986 | Science | …ws⏎⏎Problem:⏎The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.⏎⏎Solution:⏎Science␠and␠technology␠news |
| prompt_format_sensitivity/news_classification/s_expression | text/word | 8 | -2.844257 | -0.355532 | Politics | …s"))⏎⏎(example␠(input␠"The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.")␠(output␠"Politics␠and␠government␠news")) |
| prompt_format_sensitivity/python_repl/tsv | text/word | 10 | -2.818316 | -0.281832 | east-north | …d(['delta',␠'alpha',␠'beta'])[0]⇥alpha⏎⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⇥15⏎⏎'-'.join(reversed(['north',␠'east']))⇥east-north |
| prompt_format_sensitivity/short_factual_qa/labeled_example | text/punctuation | 1 | -2.737050 | -2.737050 | . | …le␠is␠the␠largest␠mammal.⏎⏎Example⏎Given:⏎What␠city␠is␠the␠capital␠of␠Canada?⏎Result:⏎Ottawa␠is␠the␠capital␠of␠Canada. |
| prompt_format_sensitivity/news_classification/problem_solution | text/word | 6 | -2.670052 | -0.445009 | Sports | …tion:⏎Arts␠and␠culture␠news⏎⏎Problem:⏎The␠tennis␠final␠was␠delayed␠by␠heavy␠rain.⏎⏎Solution:⏎Sports␠competition␠report |
| prompt_format_sensitivity/news_classification/colon_mapping | text/word | 8 | -2.507925 | -0.313491 | Politics | …rts␠and␠culture␠news⏎⏎Input:␠The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎Output:␠Politics␠and␠government␠news |
| prompt_format_sensitivity/mcqa_science/plain_arrow | text/punctuation | 1 | -2.484280 | -2.484280 | . | …aterial␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎->␠Copper␠is␠a␠good␠electrical␠conductor. |

## Top Literals: Model A Worse

Representative token boundaries come from the highest-gap occurrence for each literal. `|` marks token boundaries for each model; an ellipsis means the token continues outside the literal boundary in that example.

| name | bucket | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | example_dataset | example_doc_preview | model_a_token_boundaries | model_b_token_boundaries |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| = | text/punctuation | 442 | 442 | 0.554290 | 0.017252 | 0.537038 | 237.370724 | prompt_format_sensitivity/record_extraction/tsv | …ras␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⇥batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 | \|=\| | \|=\| |
| "} | text/punctuation | 24 | 48 | 2.881657 | 1.311198 | 1.570459 | 75.382034 | prompt_format_sensitivity/string_transformation/json_object | …urple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=west;␠id=108;␠color=orange",␠"output":␠"WEST-0108-ORANGE"} | \|"}\| | \|"}\| |
| > | text/punctuation | 36 | 36 | 6.452365 | 4.636400 | 1.815966 | 65.374759 | prompt_format_sensitivity/short_factual_qa/html_dl | …rgest␠mammal.</dd></dl>⏎⏎<dl><dt>Who␠painted␠the␠Mona␠Lisa?</dt><dd>Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa.</dd></dl> | \|>\| | \|>\| |
| 42 | text/number | 26 | 52 | 1.506212 | 0.419237 | 1.086974 | 56.522662 | prompt_format_sensitivity/python_repl/tsv | …UE⏎⏎sum([3,␠5,␠8])⇥16⏎⏎sorted(['delta',␠'alpha',␠'beta'])[0]⇥alpha⏎⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⇥15⏎⏎len('prompt')␠*␠7⇥42 | \|42\| | \|4\|2\| |
| east-north | text/word | 26 | 260 | 0.190945 | 0.055290 | 0.135656 | 35.270476 | prompt_format_sensitivity/python_repl/s_expression | …␠2,␠'b':␠5}['b']␠*␠3")␠(output␠"15"))⏎⏎(example␠(input␠"'-'.join(reversed(['north',␠'east']))")␠(output␠"east-north")) | \|east\|-n\|orth\| | \|east\|-n\|orth\| |
| ."} | text/punctuation | 12 | 36 | 2.069758 | 1.188740 | 0.881019 | 31.716675 | prompt_format_sensitivity/short_factual_qa/jsonl | …s␠the␠largest␠mammal."}⏎⏎{"input":␠"Who␠painted␠the␠Mona␠Lisa?",␠"output":␠"Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa."} | \|."\|}\| | \|."\|}\| |
| 0901 | text/number | 26 | 104 | 0.099502 | 0.000426 | 0.099075 | 10.303824 | prompt_format_sensitivity/string_transformation/sql_result | …-----⏎CENTRAL-0005-PURPLE⏎⏎SELECT␠solve($$region=east;␠id=901;␠color=black$$)␠AS␠output;⏎output⏎------⏎EAST-0901-BLACK | \|090\|1\| | \|0\|9\|0\|1\| |
| . | text/punctuation | 120 | 120 | 5.906659 | 5.822476 | 0.084183 | 10.101995 | prompt_format_sensitivity/short_factual_qa/labeled_example | …l.⏎⏎Example⏎Given:⏎Which␠planet␠has␠the␠most␠prominent␠ring␠system?⏎Result:⏎Saturn␠has␠the␠most␠prominent␠ring␠system. | \|.\| | \|.\| |
| ")) | text/punctuation | 12 | 36 | 1.483140 | 1.216575 | 0.266565 | 9.596329 | prompt_format_sensitivity/string_transformation/s_expression | …e")␠(output␠"CENTRAL-0005-PURPLE"))⏎⏎(example␠(input␠"region=west;␠id=108;␠color=orange")␠(output␠"WEST-0108-ORANGE")) | \|"))\| | \|"))\| |
| takes | text/word | 26 | 130 | 0.147188 | 0.092506 | 0.054682 | 7.108679 | prompt_format_sensitivity/mcqa_science/tsv | …ch␠part␠of␠a␠plant␠takes␠in␠water␠from␠soil?\\nA.␠Flower\\nB.␠Root\\nC.␠Petal\\nD.␠Seed⇥The␠root␠takes␠in␠water␠from␠soil. | \|…takes\| | \|…takes\| |
| """ | text/punctuation | 12 | 36 | 2.369004 | 2.201019 | 0.167985 | 6.047458 | prompt_format_sensitivity/python_repl/toml | …put␠=␠"""{'a':␠2,␠'b':␠5}['b']␠*␠3"""⏎output␠=␠"""15"""⏎⏎[[example]]⏎input␠=␠"""len('prompt')␠*␠7"""⏎output␠=␠"""42""" | \|"""\| | \|"""\| |
| .")) | text/punctuation | 6 | 24 | 1.511975 | 1.296178 | 0.215797 | 5.179134 | prompt_format_sensitivity/mcqa_science/s_expression | …lant␠takes␠in␠water␠from␠soil?\\nA.␠Flower\\nB.␠Root\\nC.␠Petal\\nD.␠Seed")␠(output␠"The␠root␠takes␠in␠water␠from␠soil.")) | \|."\|))\| | \|."\|))\| |
| has | text/word | 26 | 78 | 0.019051 | 0.001898 | 0.017153 | 1.337924 | prompt_format_sensitivity/short_factual_qa/qa | …the␠largest␠mammal.⏎⏎Q:␠Which␠planet␠has␠the␠most␠prominent␠ring␠system?⏎A:␠Saturn␠has␠the␠most␠prominent␠ring␠system. | \|…has\| | \|…has\| |
| tripods | text/word | 26 | 182 | 0.004335 | 0.000347 | 0.003989 | 0.725911 | prompt_format_sensitivity/record_extraction/ini | …␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎output=batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 | \|trip\|ods\| | \|trip\|ods\| |
| the | text/word | 78 | 234 | 0.003202 | 0.000187 | 0.003015 | 0.705525 | prompt_format_sensitivity/short_factual_qa/colon_mapping | …␠blue␠whale␠is␠the␠largest␠mammal.⏎⏎Input:␠Who␠painted␠the␠Mona␠Lisa?⏎Output:␠Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. | \|…the\| | \|…the\| |
| da | text/word | 26 | 52 | 0.013640 | 0.000949 | 0.012691 | 0.659950 | prompt_format_sensitivity/short_factual_qa/faq | …s␠the␠largest␠mammal.⏎⏎FAQ␠entry⏎Question:␠Who␠painted␠the␠Mona␠Lisa?⏎Answer:␠Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. | \|…da\| | \|…da\| |
| items | text/word | 52 | 260 | 0.002928 | 0.000758 | 0.002169 | 0.564054 | prompt_format_sensitivity/record_extraction/markdown_table | …allinn␠for␠Jules␠on␠2026-06-03.␠\|␠order_id=2880;␠owner=Jules;␠city=Tallinn;␠date=2026-06-03;␠items=sensors;␠quantity=9 | \|…items\| | \|…items\| |
| - | text/punctuation | 156 | 156 | 0.003518 | 0.000087 | 0.003432 | 0.535321 | prompt_format_sensitivity/string_transformation/tsv | …090-YELLOW⏎⏎region=central;␠id=5;␠color=purple⇥CENTRAL-0005-PURPLE⏎⏎region=west;␠id=108;␠color=orange⇥WEST-0108-ORANGE | \|-\| | \|-\| |
| BLACK | text/word | 26 | 130 | 0.003972 | 0.000096 | 0.003875 | 0.503783 | prompt_format_sensitivity/string_transformation/markdown_table | …LLOW⏎⏎\|␠region=central;␠id=5;␠color=purple␠\|␠CENTRAL-0005-PURPLE⏎⏎\|␠region=east;␠id=901;␠color=black␠\|␠EAST-0901-BLACK | \|…B\|L\|ACK\| | \|…B\|L\|ACK\| |
| SILVER | text/word | 26 | 156 | 0.003378 | 0.000207 | 0.003171 | 0.494692 | prompt_format_sensitivity/string_transformation/markdown_table | …W⏎⏎\|␠region=central;␠id=5;␠color=purple␠\|␠CENTRAL-0005-PURPLE⏎⏎\|␠region=north;␠id=64;␠color=silver␠\|␠NORTH-0064-SILVER | \|…S\|IL\|VER\| | \|…S\|IL\|VER\| |
| root | text/word | 26 | 104 | 0.010640 | 0.006655 | 0.003984 | 0.414345 | prompt_format_sensitivity/mcqa_science/csv | …Which␠part␠of␠a␠plant␠takes␠in␠water␠from␠soil?⏎A.␠Flower⏎B.␠Root⏎C.␠Petal⏎D.␠Seed",The␠root␠takes␠in␠water␠from␠soil. | \|…root\| | \|…root\| |
| .</ | text/punctuation | 12 | 36 | 0.021226 | 0.011276 | 0.009950 | 0.358202 | prompt_format_sensitivity/mcqa_science/xml | …ter␠from␠soil?⏎A.␠Flower⏎B.␠Root⏎C.␠Petal⏎D.␠Seed</input><output>The␠root␠takes␠in␠water␠from␠soil.</output></example> | \|.</\| | \|.</\| |
| ; | text/punctuation | 364 | 364 | 0.001538 | 0.000675 | 0.000863 | 0.313980 | prompt_format_sensitivity/record_extraction/labeled_example | …8␠tripods␠to␠Busan␠on␠2026-08-22.⏎Result:⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 | \|;\| | \|;\| |
| assets | text/word | 26 | 156 | 0.015637 | 0.013752 | 0.001885 | 0.294056 | prompt_format_sensitivity/record_extraction/problem_solution | …s␠in␠Porto␠by␠2026-07-11.⏎⏎Solution:⏎ticket_id=415;␠owner=Nia;␠city=Porto;␠date=2026-07-11;␠assets=bridges;␠quantity=4 | \|…assets\| | \|…assets\| |
| ring | text/word | 26 | 104 | 0.003035 | 0.000444 | 0.002591 | 0.269444 | prompt_format_sensitivity/short_factual_qa/flashcard | …gest␠mammal.⏎⏎Front:␠Which␠planet␠has␠the␠most␠prominent␠ring␠system?⏎Back:␠Saturn␠has␠the␠most␠prominent␠ring␠system. | \|…ring\| | \|…ring\| |
| is | text/word | 52 | 104 | 0.003047 | 0.000731 | 0.002316 | 0.240909 | prompt_format_sensitivity/short_factual_qa/colon_mapping | …blue␠whale␠is␠the␠largest␠mammal.⏎⏎Input:␠What␠city␠is␠the␠capital␠of␠Canada?⏎Output:␠Ottawa␠is␠the␠capital␠of␠Canada. | \|…is\| | \|…is\| |
| government | text/word | 26 | 260 | 0.000905 | 0.000226 | 0.000679 | 0.176418 | prompt_format_sensitivity/news_classification/toml | …ample]]⏎input␠=␠"""The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals."""⏎output␠=␠"""Politics␠and␠government␠news""" | \|…government\| | \|…government\| |
| prominent | text/word | 26 | 234 | 0.000719 | 0.000008 | 0.000712 | 0.166501 | prompt_format_sensitivity/short_factual_qa/markdown_table | …s␠the␠largest␠mammal.⏎⏎\|␠Which␠planet␠has␠the␠most␠prominent␠ring␠system?␠\|␠Saturn␠has␠the␠most␠prominent␠ring␠system. | \|…prominent\| | \|…prominent\| |
| in | text/word | 26 | 52 | 0.003195 | 0.000166 | 0.003029 | 0.157501 | prompt_format_sensitivity/mcqa_science/qa | …ich␠part␠of␠a␠plant␠takes␠in␠water␠from␠soil?⏎A.␠Flower⏎B.␠Root⏎C.␠Petal⏎D.␠Seed⏎A:␠The␠root␠takes␠in␠water␠from␠soil. | \|…in\| | \|…in\| |
| electrical | text/word | 26 | 260 | 0.001102 | 0.000510 | 0.000592 | 0.153952 | prompt_format_sensitivity/mcqa_science/python_repl | …rial␠is␠a␠good␠electrical␠conductor?\\nA.␠Rubber\\nB.␠Copper\\nC.␠Glass\\nD.␠Wood")⏎Copper␠is␠a␠good␠electrical␠conductor. | \|…electrical\| | \|…electrical\| |
| quantity | text/word | 78 | 624 | 0.000293 | 0.000051 | 0.000242 | 0.150777 | prompt_format_sensitivity/record_extraction/plain_equals | …s␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎=␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 | \|…quantity\| | \|…quantity\| |
| most | text/word | 52 | 208 | 0.000985 | 0.000312 | 0.000674 | 0.140117 | prompt_format_sensitivity/short_factual_qa/colon_mapping | …st␠mammal.⏎⏎Input:␠Which␠planet␠has␠the␠most␠prominent␠ring␠system?⏎Output:␠Saturn␠has␠the␠most␠prominent␠ring␠system. | \|…most\| | \|…most\| |
| date | text/word | 78 | 312 | 0.000866 | 0.000422 | 0.000444 | 0.138465 | prompt_format_sensitivity/record_extraction/sql_result | …6-03.$$)␠AS␠output;⏎output⏎------⏎order_id=2880;␠owner=Jules;␠city=Tallinn;␠date=2026-06-03;␠items=sensors;␠quantity=9 | \|…date\| | \|…date\| |
| city | text/word | 78 | 312 | 0.000902 | 0.000467 | 0.000435 | 0.135731 | prompt_format_sensitivity/record_extraction/yaml | …8␠tripods␠to␠Busan␠on␠2026-08-22.⏎␠␠output:␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=… | \|…city\| | \|…city\| |
| report | text/word | 26 | 156 | 0.002907 | 0.002045 | 0.000862 | 0.134546 | prompt_format_sensitivity/news_classification/toml | …ews"""⏎⏎[[example]]⏎input␠=␠"""The␠tennis␠final␠was␠delayed␠by␠heavy␠rain."""⏎output␠=␠"""Sports␠competition␠report""" | \|…report\| | \|…report\| |
| cameras | text/word | 26 | 182 | 0.000867 | 0.000219 | 0.000648 | 0.117987 | prompt_format_sensitivity/record_extraction/plain_equals | …s␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎=␠batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 | \|cam\|eras\| | \|cam\|eras\| |
| news | text/word | 52 | 208 | 0.001204 | 0.000734 | 0.000470 | 0.097737 | prompt_format_sensitivity/news_classification/markdown_table | …s␠and␠culture␠news⏎⏎\|␠The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.␠\|␠Science␠and␠technology␠news | \|…news\| | \|…news\| |
| bridges | text/word | 26 | 182 | 0.000598 | 0.000107 | 0.000492 | 0.089491 | prompt_format_sensitivity/record_extraction/ini | …idges␠in␠Porto␠by␠2026-07-11.⏎output=ticket_id=415;␠owner=Nia;␠city=Porto;␠date=2026-07-11;␠assets=bridges;␠quantity=4 | \|brid\|ges\| | \|brid\|ges\| |
| and | text/word | 52 | 156 | 0.000630 | 0.000124 | 0.000505 | 0.078809 | prompt_format_sensitivity/news_classification/flashcard | …␠Arts␠and␠culture␠news⏎⏎Front:␠The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎Back:␠Politics␠and␠government␠news | \|…and\| | \|…and\| |
| Jules | text/word | 26 | 130 | 0.000636 | 0.000046 | 0.000590 | 0.076650 | prompt_format_sensitivity/record_extraction/bullet_list | …␠for␠Jules␠on␠2026-06-03.⏎␠␠output:␠order_id=2880;␠owner=Jules;␠city=Tallinn;␠date=2026-06-03;␠items=sensors;␠quantity… | \|J\|ules\| | \|J\|ules\| |

## Top Literals: Model B Worse

Representative token boundaries come from the highest-gap occurrence for each literal. `|` marks token boundaries for each model; an ellipsis means the token continues outside the literal boundary in that example.

| name | bucket | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | example_dataset | example_doc_preview | model_a_token_boundaries | model_b_token_boundaries |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Politics | text/word | 26 | 208 | 0.122298 | 0.307034 | -0.184736 | -38.425191 | prompt_format_sensitivity/news_classification/faq | …re␠news⏎⏎FAQ␠entry⏎Question:␠The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎Answer:␠Politics␠and␠government␠news | \|…Politics\| | \|…Politics\| |
| Copper | text/word | 26 | 156 | 0.001025 | 0.207901 | -0.206875 | -32.272538 | prompt_format_sensitivity/mcqa_science/shell_transcript | …rial␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎INPUT⏎Copper␠is␠a␠good␠electrical␠conductor. | \|C\|opper\| | \|C\|opper\| |
| Ottawa | text/word | 26 | 156 | 0.006149 | 0.160510 | -0.154361 | -24.080281 | prompt_format_sensitivity/short_factual_qa/shell_transcript | …e␠is␠the␠largest␠mammal.⏎⏎$␠solve␠<<'INPUT'⏎What␠city␠is␠the␠capital␠of␠Canada?⏎INPUT⏎Ottawa␠is␠the␠capital␠of␠Canada. | \|O\|tt\|awa\| | \|O\|tt\|awa\| |
| batch_id | text/word | 26 | 208 | 0.001154 | 0.098515 | -0.097361 | -20.251051 | prompt_format_sensitivity/record_extraction/key_value_block | …cameras␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎⏎output:⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods… | \|batch\|_id\| | \|batch\|_id\| |
| Science | text/word | 26 | 182 | 0.052478 | 0.161654 | -0.109176 | -19.869964 | prompt_format_sensitivity/news_classification/key_value_block | …e␠news⏎⏎input:⏎The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.⏎⏎output:⏎Science␠and␠technology␠news | \|Science\| | \|Science\| |
| order_id | text/word | 26 | 208 | 0.002893 | 0.095927 | -0.093033 | -19.350883 | prompt_format_sensitivity/record_extraction/flashcard | …ps␠9␠sensors␠to␠Tallinn␠for␠Jules␠on␠2026-06-03.⏎Back:␠order_id=2880;␠owner=Jules;␠city=Tallinn;␠date=2026-06-03;␠item… | \|…order\|_id\| | \|…order\|_id\| |
| Sports | text/word | 26 | 156 | 0.017253 | 0.109724 | -0.092470 | -14.425383 | prompt_format_sensitivity/news_classification/key_value_block | …⏎⏎output:⏎Arts␠and␠culture␠news⏎⏎input:⏎The␠tennis␠final␠was␠delayed␠by␠heavy␠rain.⏎⏎output:⏎Sports␠competition␠report | \|Sports\| | \|Sports\| |
| The | text/word | 52 | 156 | 0.082250 | 0.167590 | -0.085340 | -13.313067 | prompt_format_sensitivity/mcqa_science/key_value_block | …rt␠of␠a␠plant␠takes␠in␠water␠from␠soil?⏎A.␠Flower⏎B.␠Root⏎C.␠Petal⏎D.␠Seed⏎⏎output:⏎The␠root␠takes␠in␠water␠from␠soil. | \|The\| | \|The\| |
| ticket_id | text/word | 26 | 234 | 0.001001 | 0.048879 | -0.047878 | -11.203427 | prompt_format_sensitivity/record_extraction/flashcard | …Nia␠to␠inspect␠4␠bridges␠in␠Porto␠by␠2026-07-11.⏎Back:␠ticket_id=415;␠owner=Nia;␠city=Porto;␠date=2026-07-11;␠assets=b… | \|…ticket\|_id\| | \|…ticket\|_id\| |
| .""" | text/punctuation | 6 | 24 | 1.170277 | 1.604855 | -0.434578 | -10.429875 | prompt_format_sensitivity/short_factual_qa/toml | …put␠=␠"""Which␠planet␠has␠the␠most␠prominent␠ring␠system?"""⏎output␠=␠"""Saturn␠has␠the␠most␠prominent␠ring␠system.""" | \|."""\| | \|."""\| |
| Leonardo | text/word | 26 | 208 | 0.009092 | 0.057744 | -0.048652 | -10.119527 | prompt_format_sensitivity/short_factual_qa/key_value_block | …blue␠whale␠is␠the␠largest␠mammal.⏎⏎input:⏎Who␠painted␠the␠Mona␠Lisa?⏎⏎output:⏎Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. | \|Leon\|ardo\| | \|Leon\|ardo\| |
| , | text/punctuation | 26 | 26 | 0.169991 | 0.494865 | -0.324874 | -8.446722 | prompt_format_sensitivity/record_extraction/toml | …to␠Busan␠on␠2026-08-22."""⏎output␠=␠"""batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10""" | \|,\| | \|,\| |
| soil | text/word | 26 | 104 | 0.104298 | 0.171889 | -0.067591 | -7.029453 | prompt_format_sensitivity/mcqa_science/problem_solution | …␠of␠a␠plant␠takes␠in␠water␠from␠soil?⏎A.␠Flower⏎B.␠Root⏎C.␠Petal⏎D.␠Seed⏎⏎Solution:⏎The␠root␠takes␠in␠water␠from␠soil. | \|…soil\| | \|…soil\| |
| owner | text/word | 52 | 260 | 0.006746 | 0.026606 | -0.019860 | -5.163652 | prompt_format_sensitivity/record_extraction/markdown_table | …ors␠to␠Tallinn␠for␠Jules␠on␠2026-06-03.␠\|␠order_id=2880;␠owner=Jules;␠city=Tallinn;␠date=2026-06-03;␠items=sensors;␠qu… | \|…owner\| | \|…owner\| |
| competition | text/word | 26 | 286 | 0.012148 | 0.025502 | -0.013353 | -3.819004 | prompt_format_sensitivity/news_classification/problem_solution | …tion:⏎Arts␠and␠culture␠news⏎⏎Problem:⏎The␠tennis␠final␠was␠delayed␠by␠heavy␠rain.⏎⏎Solution:⏎Sports␠competition␠report | \|…competition\| | \|…competition\| |
| Sun | text/word | 26 | 78 | 0.080643 | 0.126027 | -0.045384 | -3.539920 | prompt_format_sensitivity/mcqa_science/python_doctest | …stial␠body␠gives␠Earth␠most␠of␠its␠light?⏎A.␠Moon⏎B.␠Sun⏎C.␠Mars⏎D.␠Polaris""")⏎The␠Sun␠gives␠Earth␠most␠of␠its␠light. | \|…Sun\| | \|…Sun\| |
| Saturn | text/word | 26 | 156 | 0.018698 | 0.039405 | -0.020707 | -3.230308 | prompt_format_sensitivity/short_factual_qa/numbered_steps | …ammal.⏎⏎1.␠Given␠Which␠planet␠has␠the␠most␠prominent␠ring␠system?⏎2.␠Return␠Saturn␠has␠the␠most␠prominent␠ring␠system. | \|…Saturn\| | \|…Saturn\| |
| NORTH | text/word | 26 | 130 | 0.000961 | 0.018496 | -0.017535 | -2.279533 | prompt_format_sensitivity/string_transformation/labeled_example | …;␠color=purple⏎Result:⏎CENTRAL-0005-PURPLE⏎⏎Example⏎Given:⏎region=north;␠id=64;␠color=silver⏎Result:⏎NORTH-0064-SILVER | \|N\|ORTH\| | \|N\|ORTH\| |
| WEST | text/word | 26 | 104 | 0.001137 | 0.020013 | -0.018876 | -1.963060 | prompt_format_sensitivity/string_transformation/colon_mapping | …ral;␠id=5;␠color=purple⏎Output:␠CENTRAL-0005-PURPLE⏎⏎Input:␠region=west;␠id=108;␠color=orange⏎Output:␠WEST-0108-ORANGE | \|…WEST\| | \|…WEST\| |
| ␠ | whitespace/single_space | 1482 | 1482 | 0.008549 | 0.009567 | -0.001018 | -1.508897 | prompt_format_sensitivity/mcqa_science/python_doctest | …stial␠body␠gives␠Earth␠most␠of␠its␠light?⏎A.␠Moon⏎B.␠Sun⏎C.␠Mars⏎D.␠Polaris""")⏎The␠Sun␠gives␠Earth␠most␠of␠its␠light. | \|␠…\| | \|␠…\| |
| 29 | text/number | 26 | 52 | 0.002898 | 0.023643 | -0.020745 | -1.078747 | prompt_format_sensitivity/python_repl/problem_solution | …olution:⏎alpha⏎⏎Problem:⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⏎⏎Solution:⏎15⏎⏎Problem:⏎sum(x␠*␠x␠for␠x␠in␠[2,␠3,␠4])⏎⏎Solution:⏎29 | \|29\| | \|2\|9\| |
| dl | text/word | 18 | 36 | 0.000513 | 0.029713 | -0.029200 | -1.051217 | prompt_format_sensitivity/news_classification/html_dl | …l><dt>The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.</dt><dd>Science␠and␠technology␠news</dd></dl> | \|dl\| | \|dl\| |
| EAST | text/word | 26 | 104 | 0.004930 | 0.014772 | -0.009843 | -1.023645 | prompt_format_sensitivity/string_transformation/problem_solution | …d=5;␠color=purple⏎⏎Solution:⏎CENTRAL-0005-PURPLE⏎⏎Problem:⏎region=east;␠id=901;␠color=black⏎⏎Solution:⏎EAST-0901-BLACK | \|E\|AST\| | \|E\|AST\| |
| Earth | text/word | 26 | 130 | 0.003458 | 0.009631 | -0.006173 | -0.802486 | prompt_format_sensitivity/mcqa_science/python_doctest | …stial␠body␠gives␠Earth␠most␠of␠its␠light?⏎A.␠Moon⏎B.␠Sun⏎C.␠Mars⏎D.␠Polaris""")⏎The␠Sun␠gives␠Earth␠most␠of␠its␠light. | \|…Earth\| | \|…Earth\| |
| gives | text/word | 26 | 130 | 0.004646 | 0.009904 | -0.005258 | -0.683534 | prompt_format_sensitivity/mcqa_science/tsv | …stial␠body␠gives␠Earth␠most␠of␠its␠light?\\nA.␠Moon\\nB.␠Sun\\nC.␠Mars\\nD.␠Polaris⇥The␠Sun␠gives␠Earth␠most␠of␠its␠light. | \|…gives\| | \|…gives\| |
| 10 | text/number | 26 | 52 | 0.005555 | 0.017917 | -0.012362 | -0.642830 | prompt_format_sensitivity/record_extraction/shell_transcript | …d␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎INPUT⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 | \|10\| | \|1\|0\| |
| " | text/punctuation | 56 | 56 | 0.126604 | 0.137861 | -0.011257 | -0.630368 | prompt_format_sensitivity/record_extraction/csv | …s␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.,"batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10" | \|"\| | \|"\| |
| of | text/word | 52 | 104 | 0.005685 | 0.009427 | -0.003741 | -0.389078 | prompt_format_sensitivity/short_factual_qa/plain_arrow | …mal?⏎->␠The␠blue␠whale␠is␠the␠largest␠mammal.⏎⏎What␠city␠is␠the␠capital␠of␠Canada?⏎->␠Ottawa␠is␠the␠capital␠of␠Canada. | \|…of\| | \|…of\| |
| output | text/word | 18 | 108 | 0.000026 | 0.000577 | -0.000551 | -0.059547 | prompt_format_sensitivity/record_extraction/xml | …/input><output>order_id=2880;␠owner=Jules;␠city=Tallinn;␠date=2026-06-03;␠items=sensors;␠quantity=9</output></example> | \|output\| | \|output\| |
| Canada | text/word | 26 | 156 | 0.000121 | 0.000462 | -0.000341 | -0.053225 | prompt_format_sensitivity/short_factual_qa/ini | …le␠is␠the␠largest␠mammal.⏎⏎[example]⏎input=What␠city␠is␠the␠capital␠of␠Canada?⏎output=Ottawa␠is␠the␠capital␠of␠Canada. | \|…Canada\| | \|…Canada\| |
| 2880 | text/number | 26 | 104 | 0.000173 | 0.000303 | -0.000129 | -0.013465 | prompt_format_sensitivity/record_extraction/problem_solution | …␠to␠Tallinn␠for␠Jules␠on␠2026-06-03.⏎⏎Solution:⏎order_id=2880;␠owner=Jules;␠city=Tallinn;␠date=2026-06-03;␠items=senso… | \|288\|0\| | \|2\|8\|8\|0\| |
| Busan | text/word | 26 | 130 | 0.000070 | 0.000150 | -0.000080 | -0.010349 | prompt_format_sensitivity/record_extraction/problem_solution | …ripods␠to␠Busan␠on␠2026-08-22.⏎⏎Solution:⏎batch_id=63;␠city=Busan;␠date=2026-08-22;␠items=cameras,tripods;␠quantity=10 | \|Bus\|an\| | \|Bus\|an\| |
| ></ | text/punctuation | 36 | 108 | 0.000502 | 0.000543 | -0.000041 | -0.004434 | prompt_format_sensitivity/news_classification/html_dl | …l><dt>The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.</dt><dd>Science␠and␠technology␠news</dd></dl> | \|></\| | \|></\| |
| 415 | text/number | 26 | 78 | 0.000172 | 0.000182 | -0.000010 | -0.000759 | prompt_format_sensitivity/record_extraction/csv | …ia␠to␠inspect␠4␠bridges␠in␠Porto␠by␠2026-07-11.,ticket_id=415;␠owner=Nia;␠city=Porto;␠date=2026-07-11;␠assets=bridges;… | \|415\| | \|4\|1\|5\| |
