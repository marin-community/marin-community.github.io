# Perplexity Gap Report

**Model A:** marin-community/marin-32b-base

**Model B:** Qwen/Qwen3-32B

## Datasets

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| prompt_format_sensitivity/news_classification/json_object | 3 | 80 | 0.505986 | 0.838233 | -0.332246 | -26.579711 |
| prompt_format_sensitivity/news_classification/jsonl | 3 | 80 | 0.513037 | 0.817878 | -0.304841 | -24.387288 |
| prompt_format_sensitivity/string_transformation/jsonl | 3 | 48 | 1.031148 | 1.448929 | -0.417782 | -20.053513 |
| prompt_format_sensitivity/short_factual_qa/s_expression | 3 | 114 | 0.406848 | 0.570445 | -0.163597 | -18.650017 |
| prompt_format_sensitivity/short_factual_qa/json_object | 3 | 114 | 0.491297 | 0.647858 | -0.156561 | -17.848008 |
| prompt_format_sensitivity/string_transformation/json_object | 3 | 48 | 0.987530 | 1.309013 | -0.321483 | -15.431197 |
| prompt_format_sensitivity/news_classification/key_value_block | 3 | 80 | 0.008560 | 0.192579 | -0.184019 | -14.721484 |
| prompt_format_sensitivity/record_extraction/jsonl | 3 | 303 | 0.159833 | 0.111494 | 0.048339 | 14.646576 |
| prompt_format_sensitivity/record_extraction/python_repl | 3 | 303 | 0.077838 | 0.031889 | 0.045948 | 13.922338 |
| prompt_format_sensitivity/short_factual_qa/jsonl | 3 | 114 | 0.492669 | 0.612665 | -0.119996 | -13.679566 |
| prompt_format_sensitivity/record_extraction/shell_transcript | 3 | 303 | 0.079373 | 0.034332 | 0.045040 | 13.647248 |
| prompt_format_sensitivity/record_extraction/qa | 3 | 303 | 0.073185 | 0.032029 | 0.041156 | 12.470318 |
| prompt_format_sensitivity/mcqa_science/key_value_block | 3 | 110 | 0.174090 | 0.287154 | -0.113063 | -12.436964 |
| prompt_format_sensitivity/record_extraction/markdown_table | 3 | 303 | 0.073128 | 0.033086 | 0.040042 | 12.132745 |
| prompt_format_sensitivity/record_extraction/json_object | 3 | 303 | 0.157233 | 0.118492 | 0.038741 | 11.738420 |
| prompt_format_sensitivity/record_extraction/colon_mapping | 3 | 303 | 0.074041 | 0.035831 | 0.038210 | 11.577530 |
| prompt_format_sensitivity/short_factual_qa/toml | 3 | 114 | 0.248691 | 0.343649 | -0.094958 | -10.825256 |
| prompt_format_sensitivity/mcqa_science/toml | 3 | 110 | 0.259681 | 0.357687 | -0.098006 | -10.780659 |
| prompt_format_sensitivity/short_factual_qa/labeled_example | 3 | 114 | 0.107609 | 0.200495 | -0.092886 | -10.588949 |
| prompt_format_sensitivity/mcqa_science/bullet_list | 3 | 110 | 0.169662 | 0.263848 | -0.094186 | -10.360427 |
| prompt_format_sensitivity/python_repl/tsv | 3 | 14 | 0.244409 | 0.960509 | -0.716100 | -10.025398 |
| prompt_format_sensitivity/record_extraction/s_expression | 3 | 303 | 0.141539 | 0.108941 | 0.032597 | 9.876954 |
| prompt_format_sensitivity/short_factual_qa/xml | 3 | 114 | 0.246830 | 0.329702 | -0.082872 | -9.447418 |
| prompt_format_sensitivity/record_extraction/html_dl | 3 | 303 | 0.179769 | 0.210364 | -0.030595 | -9.270166 |
| prompt_format_sensitivity/record_extraction/python_doctest | 3 | 303 | 0.071026 | 0.041473 | 0.029553 | 8.954489 |
| prompt_format_sensitivity/news_classification/s_expression | 3 | 80 | 0.709001 | 0.820488 | -0.111488 | -8.919001 |
| prompt_format_sensitivity/mcqa_science/plain_arrow | 3 | 110 | 0.156561 | 0.232445 | -0.075883 | -8.347181 |
| prompt_format_sensitivity/short_factual_qa/python_repl | 3 | 114 | 0.172571 | 0.102293 | 0.070279 | 8.011764 |
| prompt_format_sensitivity/record_extraction/ini | 3 | 303 | 0.076143 | 0.102453 | -0.026310 | -7.971802 |
| prompt_format_sensitivity/record_extraction/yaml | 3 | 303 | 0.072155 | 0.046014 | 0.026141 | 7.920728 |
| prompt_format_sensitivity/news_classification/yaml | 3 | 80 | 0.018171 | 0.114642 | -0.096471 | -7.717708 |
| prompt_format_sensitivity/news_classification/problem_solution | 3 | 80 | 0.015828 | 0.111400 | -0.095573 | -7.645808 |
| prompt_format_sensitivity/short_factual_qa/flashcard | 3 | 114 | 0.146109 | 0.211469 | -0.065361 | -7.451106 |
| prompt_format_sensitivity/record_extraction/sql_result | 3 | 303 | 0.076714 | 0.052944 | 0.023770 | 7.202270 |
| prompt_format_sensitivity/mcqa_science/python_repl | 3 | 110 | 0.205512 | 0.140577 | 0.064935 | 7.142812 |
| prompt_format_sensitivity/news_classification/qa | 3 | 80 | 0.006328 | 0.094834 | -0.088506 | -7.080483 |
| prompt_format_sensitivity/record_extraction/labeled_example | 3 | 303 | 0.077311 | 0.098761 | -0.021450 | -6.499336 |
| prompt_format_sensitivity/mcqa_science/numbered_steps | 3 | 110 | 0.194184 | 0.252568 | -0.058384 | -6.422202 |
| prompt_format_sensitivity/mcqa_science/labeled_example | 3 | 110 | 0.166809 | 0.224320 | -0.057511 | -6.326255 |
| prompt_format_sensitivity/python_repl/python_repl | 3 | 14 | 0.500768 | 0.049880 | 0.450888 | 6.312428 |
| prompt_format_sensitivity/short_factual_qa/colon_mapping | 3 | 114 | 0.179065 | 0.124021 | 0.055044 | 6.274994 |
| prompt_format_sensitivity/mcqa_science/xml | 3 | 110 | 0.293226 | 0.349910 | -0.056684 | -6.235222 |
| prompt_format_sensitivity/record_extraction/plain_equals | 3 | 303 | 0.069228 | 0.049659 | 0.019570 | 5.929588 |
| prompt_format_sensitivity/news_classification/bullet_list | 3 | 80 | 0.023038 | 0.097124 | -0.074086 | -5.926894 |
| prompt_format_sensitivity/news_classification/faq | 3 | 80 | 0.018808 | 0.092219 | -0.073412 | -5.872946 |
| prompt_format_sensitivity/record_extraction/problem_solution | 3 | 303 | 0.078904 | 0.059714 | 0.019190 | 5.814677 |
| prompt_format_sensitivity/mcqa_science/python_doctest | 3 | 110 | 0.207824 | 0.155445 | 0.052379 | 5.761695 |
| prompt_format_sensitivity/mcqa_science/shell_transcript | 3 | 110 | 0.181867 | 0.233558 | -0.051692 | -5.686088 |
| prompt_format_sensitivity/mcqa_science/tsv | 3 | 110 | 0.199037 | 0.250463 | -0.051426 | -5.656833 |
| prompt_format_sensitivity/short_factual_qa/numbered_steps | 3 | 114 | 0.142064 | 0.190437 | -0.048373 | -5.514498 |
| prompt_format_sensitivity/mcqa_science/flashcard | 3 | 110 | 0.176478 | 0.224062 | -0.047585 | -5.234313 |
| prompt_format_sensitivity/python_repl/xml | 3 | 14 | 0.514980 | 0.144117 | 0.370863 | 5.192086 |
| prompt_format_sensitivity/mcqa_science/csv | 3 | 110 | 0.209287 | 0.255704 | -0.046417 | -5.105884 |
| prompt_format_sensitivity/short_factual_qa/key_value_block | 3 | 114 | 0.130987 | 0.175096 | -0.044109 | -5.028441 |
| prompt_format_sensitivity/mcqa_science/plain_equals | 3 | 110 | 0.177767 | 0.223188 | -0.045421 | -4.996346 |
| prompt_format_sensitivity/python_repl/sql_result | 3 | 14 | 0.422120 | 0.072837 | 0.349282 | 4.889955 |
| prompt_format_sensitivity/python_repl/html_dl | 3 | 14 | 0.426287 | 0.094009 | 0.332278 | 4.651894 |
| prompt_format_sensitivity/python_repl/s_expression | 3 | 14 | 1.080280 | 0.750750 | 0.329531 | 4.613429 |
| prompt_format_sensitivity/python_repl/ini | 3 | 14 | 0.335569 | 0.007851 | 0.327717 | 4.588045 |
| prompt_format_sensitivity/short_factual_qa/tsv | 3 | 114 | 0.175743 | 0.135759 | 0.039984 | 4.558202 |
| prompt_format_sensitivity/short_factual_qa/qa | 3 | 114 | 0.177708 | 0.137755 | 0.039953 | 4.554651 |
| prompt_format_sensitivity/news_classification/colon_mapping | 3 | 80 | 0.007072 | 0.062736 | -0.055665 | -4.453167 |
| prompt_format_sensitivity/short_factual_qa/plain_arrow | 3 | 114 | 0.126949 | 0.165781 | -0.038832 | -4.426820 |
| prompt_format_sensitivity/news_classification/shell_transcript | 3 | 80 | 0.015231 | 0.065367 | -0.050136 | -4.010846 |
| prompt_format_sensitivity/mcqa_science/s_expression | 3 | 110 | 0.507111 | 0.472504 | 0.034607 | 3.806802 |
| prompt_format_sensitivity/python_repl/json_object | 3 | 14 | 1.099108 | 1.368483 | -0.269375 | -3.771250 |
| prompt_format_sensitivity/python_repl/bullet_list | 3 | 14 | 0.263714 | 0.003937 | 0.259777 | 3.636882 |
| prompt_format_sensitivity/python_repl/shell_transcript | 3 | 14 | 0.288455 | 0.029073 | 0.259383 | 3.631359 |
| prompt_format_sensitivity/python_repl/qa | 3 | 14 | 0.264570 | 0.006577 | 0.257994 | 3.611910 |
| prompt_format_sensitivity/python_repl/numbered_steps | 3 | 14 | 0.271305 | 0.013536 | 0.257769 | 3.608765 |
| prompt_format_sensitivity/python_repl/jsonl | 3 | 14 | 1.107357 | 0.851181 | 0.256175 | 3.586456 |
| prompt_format_sensitivity/python_repl/yaml | 3 | 14 | 0.253350 | 0.002282 | 0.251068 | 3.514951 |
| prompt_format_sensitivity/news_classification/ini | 3 | 80 | 0.015699 | 0.059452 | -0.043753 | -3.500256 |
| prompt_format_sensitivity/record_extraction/tsv | 3 | 303 | 0.067826 | 0.056428 | 0.011398 | 3.453514 |
| prompt_format_sensitivity/record_extraction/xml | 3 | 303 | 0.159124 | 0.170508 | -0.011384 | -3.449486 |
| prompt_format_sensitivity/python_repl/toml | 3 | 14 | 0.253127 | 0.006990 | 0.246137 | 3.445913 |
| prompt_format_sensitivity/python_repl/faq | 3 | 14 | 0.245765 | 0.007244 | 0.238521 | 3.339290 |
| prompt_format_sensitivity/python_repl/markdown_table | 3 | 14 | 0.218091 | 0.454706 | -0.236615 | -3.312605 |
| prompt_format_sensitivity/short_factual_qa/python_doctest | 3 | 114 | 0.166129 | 0.137525 | 0.028604 | 3.260863 |
| prompt_format_sensitivity/mcqa_science/yaml | 3 | 110 | 0.194648 | 0.223613 | -0.028965 | -3.186155 |
| prompt_format_sensitivity/record_extraction/plain_arrow | 3 | 303 | 0.071193 | 0.060987 | 0.010207 | 3.092671 |
| prompt_format_sensitivity/mcqa_science/colon_mapping | 3 | 110 | 0.183746 | 0.211617 | -0.027871 | -3.065785 |
| prompt_format_sensitivity/python_repl/labeled_example | 3 | 14 | 0.255581 | 0.037339 | 0.218242 | 3.055391 |
| prompt_format_sensitivity/short_factual_qa/sql_result | 3 | 114 | 0.137722 | 0.164200 | -0.026478 | -3.018474 |
| prompt_format_sensitivity/python_repl/flashcard | 3 | 14 | 0.218173 | 0.003861 | 0.214313 | 3.000381 |
| prompt_format_sensitivity/python_repl/key_value_block | 3 | 14 | 0.239459 | 0.025230 | 0.214229 | 2.999204 |
| prompt_format_sensitivity/mcqa_science/jsonl | 3 | 110 | 0.573920 | 0.600070 | -0.026149 | -2.876432 |
| prompt_format_sensitivity/python_repl/colon_mapping | 3 | 14 | 0.217510 | 0.013142 | 0.204368 | 2.861157 |
| prompt_format_sensitivity/mcqa_science/qa | 3 | 110 | 0.215172 | 0.189235 | 0.025938 | 2.853134 |
| prompt_format_sensitivity/news_classification/flashcard | 3 | 80 | 0.041764 | 0.076948 | -0.035184 | -2.814702 |
| prompt_format_sensitivity/python_repl/plain_equals | 3 | 14 | 0.218610 | 0.023333 | 0.195278 | 2.733887 |
| prompt_format_sensitivity/python_repl/plain_arrow | 3 | 14 | 0.203126 | 0.013926 | 0.189200 | 2.648798 |
| prompt_format_sensitivity/short_factual_qa/ini | 3 | 114 | 0.159163 | 0.182355 | -0.023192 | -2.643849 |
| prompt_format_sensitivity/record_extraction/numbered_steps | 3 | 303 | 0.074834 | 0.066435 | 0.008399 | 2.544913 |
| prompt_format_sensitivity/python_repl/problem_solution | 3 | 14 | 0.249261 | 0.068164 | 0.181097 | 2.535360 |
| prompt_format_sensitivity/short_factual_qa/yaml | 3 | 114 | 0.162071 | 0.141168 | 0.020902 | 2.382857 |
| prompt_format_sensitivity/news_classification/sql_result | 3 | 80 | 0.007381 | 0.036503 | -0.029122 | -2.329791 |
| prompt_format_sensitivity/python_repl/csv | 3 | 14 | 0.535884 | 0.371467 | 0.164417 | 2.301838 |
| prompt_format_sensitivity/short_factual_qa/markdown_table | 3 | 114 | 0.169472 | 0.151349 | 0.018123 | 2.066043 |
| prompt_format_sensitivity/mcqa_science/json_object | 3 | 110 | 0.573421 | 0.556531 | 0.016890 | 1.857931 |
| prompt_format_sensitivity/record_extraction/faq | 3 | 303 | 0.071986 | 0.065867 | 0.006120 | 1.854258 |
| prompt_format_sensitivity/mcqa_science/markdown_table | 3 | 110 | 0.200353 | 0.216572 | -0.016219 | -1.784081 |
| prompt_format_sensitivity/news_classification/markdown_table | 3 | 80 | 0.047769 | 0.025540 | 0.022229 | 1.778295 |
| prompt_format_sensitivity/string_transformation/labeled_example | 3 | 48 | 0.005711 | 0.040455 | -0.034744 | -1.667696 |
| prompt_format_sensitivity/record_extraction/bullet_list | 3 | 303 | 0.073848 | 0.068902 | 0.004946 | 1.498518 |
| prompt_format_sensitivity/python_repl/python_doctest | 3 | 14 | 0.351821 | 0.247818 | 0.104003 | 1.456044 |
| prompt_format_sensitivity/mcqa_science/ini | 3 | 110 | 0.194286 | 0.181912 | 0.012373 | 1.361071 |
| prompt_format_sensitivity/news_classification/plain_arrow | 3 | 80 | 0.009655 | 0.026129 | -0.016474 | -1.317904 |
| prompt_format_sensitivity/short_factual_qa/shell_transcript | 3 | 114 | 0.162280 | 0.173481 | -0.011200 | -1.276825 |
| prompt_format_sensitivity/string_transformation/sql_result | 3 | 48 | 0.024761 | 0.000198 | 0.024563 | 1.179003 |
| prompt_format_sensitivity/record_extraction/flashcard | 3 | 303 | 0.071728 | 0.075516 | -0.003788 | -1.147680 |
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
| prompt_format_sensitivity/news_classification/xml | 3 | 80 | 0.035727 | 0.044825 | -0.009098 | -0.727854 |
| prompt_format_sensitivity/short_factual_qa/faq | 3 | 114 | 0.136240 | 0.142364 | -0.006124 | -0.698170 |
| prompt_format_sensitivity/string_transformation/csv | 3 | 48 | 0.015575 | 0.001397 | 0.014178 | 0.680562 |
| prompt_format_sensitivity/string_transformation/shell_transcript | 3 | 48 | 0.013879 | 0.001077 | 0.012802 | 0.614505 |
| prompt_format_sensitivity/string_transformation/yaml | 3 | 48 | 0.013303 | 0.000896 | 0.012406 | 0.595499 |
| prompt_format_sensitivity/mcqa_science/problem_solution | 3 | 110 | 0.206411 | 0.211740 | -0.005329 | -0.586160 |
| prompt_format_sensitivity/string_transformation/python_repl | 3 | 48 | 0.012652 | 0.000710 | 0.011943 | 0.573258 |
| prompt_format_sensitivity/string_transformation/bullet_list | 3 | 48 | 0.010564 | 0.000277 | 0.010287 | 0.493797 |
| prompt_format_sensitivity/string_transformation/toml | 3 | 48 | 0.010695 | 0.000536 | 0.010159 | 0.487614 |
| prompt_format_sensitivity/string_transformation/plain_equals | 3 | 48 | 0.010431 | 0.000550 | 0.009881 | 0.474279 |
| prompt_format_sensitivity/short_factual_qa/csv | 3 | 114 | 0.166820 | 0.170920 | -0.004100 | -0.467388 |
| prompt_format_sensitivity/string_transformation/tsv | 3 | 48 | 0.012166 | 0.002581 | 0.009586 | 0.460121 |
| prompt_format_sensitivity/string_transformation/markdown_table | 3 | 48 | 0.010777 | 0.001266 | 0.009511 | 0.456536 |
| prompt_format_sensitivity/string_transformation/key_value_block | 3 | 48 | 0.009381 | 0.001754 | 0.007627 | 0.366097 |
| prompt_format_sensitivity/mcqa_science/html_dl | 3 | 110 | 0.306830 | 0.303577 | 0.003253 | 0.357849 |
| prompt_format_sensitivity/string_transformation/flashcard | 3 | 48 | 0.007791 | 0.000617 | 0.007174 | 0.344342 |
| prompt_format_sensitivity/short_factual_qa/plain_equals | 3 | 114 | 0.165734 | 0.162760 | 0.002973 | 0.338976 |
| prompt_format_sensitivity/string_transformation/plain_arrow | 3 | 48 | 0.009819 | 0.002852 | 0.006967 | 0.334428 |
| prompt_format_sensitivity/string_transformation/html_dl | 3 | 48 | 0.006364 | 0.000141 | 0.006222 | 0.298677 |
| prompt_format_sensitivity/string_transformation/s_expression | 3 | 48 | 1.024443 | 1.030074 | -0.005630 | -0.270262 |
| prompt_format_sensitivity/news_classification/python_doctest | 3 | 80 | 0.015175 | 0.018412 | -0.003237 | -0.258933 |
| prompt_format_sensitivity/short_factual_qa/problem_solution | 3 | 114 | 0.127566 | 0.125341 | 0.002225 | 0.253690 |
| prompt_format_sensitivity/short_factual_qa/html_dl | 3 | 114 | 0.266662 | 0.264449 | 0.002213 | 0.252330 |
| prompt_format_sensitivity/short_factual_qa/bullet_list | 3 | 114 | 0.143267 | 0.145135 | -0.001867 | -0.212894 |
| prompt_format_sensitivity/string_transformation/xml | 3 | 48 | 0.006255 | 0.001885 | 0.004370 | 0.209775 |
| prompt_format_sensitivity/record_extraction/csv | 3 | 303 | 0.097561 | 0.098177 | -0.000615 | -0.186398 |
| prompt_format_sensitivity/record_extraction/toml | 3 | 303 | 0.000671 | 0.000142 | 0.000529 | 0.160427 |
| prompt_format_sensitivity/string_transformation/qa | 3 | 48 | 0.006080 | 0.002766 | 0.003314 | 0.159090 |
| prompt_format_sensitivity/news_classification/toml | 3 | 80 | 0.054051 | 0.055912 | -0.001861 | -0.148885 |
| prompt_format_sensitivity/string_transformation/numbered_steps | 3 | 48 | 0.006710 | 0.004577 | 0.002133 | 0.102394 |
| prompt_format_sensitivity/record_extraction/key_value_block | 3 | 303 | 0.074067 | 0.074356 | -0.000289 | -0.087621 |
| prompt_format_sensitivity/news_classification/html_dl | 3 | 80 | 0.050159 | 0.050584 | -0.000426 | -0.034050 |
| prompt_format_sensitivity/string_transformation/faq | 3 | 48 | 0.005199 | 0.005775 | -0.000575 | -0.027608 |
| prompt_format_sensitivity/mcqa_science/sql_result | 3 | 110 | 0.193978 | 0.193762 | 0.000216 | 0.023712 |
| prompt_format_sensitivity/string_transformation/ini | 3 | 48 | 0.004947 | 0.005107 | -0.000161 | -0.007709 |

## Dataset Groups

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| format:supervised_target_only | 468 | 17394 | 0.141617 | 0.149225 | -0.007608 | -132.339879 |
| issue:6067 | 468 | 17394 | 0.141617 | 0.149225 | -0.007608 | -132.339879 |
| num_fewshot:5 | 468 | 17394 | 0.141617 | 0.149225 | -0.007608 | -132.339879 |
| prompt_format_sensitivity | 468 | 17394 | 0.141617 | 0.149225 | -0.007608 | -132.339879 |
| prompt_format_sensitivity/news_classification | 78 | 2080 | 0.084811 | 0.147462 | -0.062652 | -130.315809 |
| task:news_classification | 78 | 2080 | 0.084811 | 0.147462 | -0.062652 | -130.315809 |
| prompt_format_sensitivity/record_extraction | 78 | 7878 | 0.088471 | 0.073261 | 0.015210 | 119.825693 |
| task:record_extraction | 78 | 7878 | 0.088471 | 0.073261 | 0.015210 | 119.825693 |
| prompt_format_sensitivity/short_factual_qa | 78 | 2964 | 0.200318 | 0.227249 | -0.026931 | -79.823308 |
| task:short_factual_qa | 78 | 2964 | 0.200318 | 0.227249 | -0.026931 | -79.823308 |
| prompt_format_sensitivity/mcqa_science | 78 | 2860 | 0.242927 | 0.269735 | -0.026808 | -76.670381 |
| task:mcqa_science | 78 | 2860 | 0.242927 | 0.269735 | -0.026808 | -76.670381 |
| prompt_format_sensitivity/python_repl | 78 | 364 | 0.395334 | 0.216471 | 0.178863 | 65.106167 |
| task:python_repl | 78 | 364 | 0.395334 | 0.216471 | 0.178863 | 65.106167 |
| template:json_object | 18 | 669 | 0.403578 | 0.478367 | -0.074789 | -50.033815 |
| template:jsonl | 18 | 669 | 0.409217 | 0.473139 | -0.063922 | -42.763767 |
| template:python_repl | 18 | 669 | 0.113362 | 0.058007 | 0.055355 | 37.032483 |
| prompt_format_sensitivity/string_transformation | 78 | 1248 | 0.126192 | 0.150600 | -0.024409 | -30.462241 |
| task:string_transformation | 78 | 1248 | 0.126192 | 0.150600 | -0.024409 | -30.462241 |
| template:key_value_block | 18 | 669 | 0.091199 | 0.134412 | -0.043213 | -28.909208 |
| template:labeled_example | 18 | 669 | 0.088537 | 0.123020 | -0.034483 | -23.068907 |
| template:python_doctest | 18 | 669 | 0.105474 | 0.075242 | 0.030232 | 20.225274 |
| template:toml | 18 | 669 | 0.097908 | 0.124307 | -0.026399 | -17.660846 |
| template:qa | 18 | 669 | 0.105538 | 0.080772 | 0.024766 | 16.568621 |
| template:xml | 18 | 669 | 0.177842 | 0.199453 | -0.021612 | -14.458119 |
| template:flashcard | 18 | 669 | 0.096520 | 0.116405 | -0.019885 | -13.303078 |
| template:colon_mapping | 18 | 669 | 0.100078 | 0.081799 | 0.018278 | 12.228218 |
| template:markdown_table | 18 | 669 | 0.105992 | 0.089046 | 0.016946 | 11.336934 |
| template:bullet_list | 18 | 669 | 0.094788 | 0.111038 | -0.016250 | -10.871017 |
| template:s_expression | 18 | 669 | 0.397708 | 0.411971 | -0.014263 | -9.542096 |
| template:tsv | 18 | 669 | 0.100027 | 0.112448 | -0.012421 | -8.309662 |
| template:ini | 18 | 669 | 0.102808 | 0.115027 | -0.012219 | -8.174499 |
| template:plain_arrow | 18 | 669 | 0.085729 | 0.097712 | -0.011982 | -8.016009 |
| template:sql_result | 18 | 669 | 0.101601 | 0.089722 | 0.011878 | 7.946676 |
| template:shell_transcript | 18 | 669 | 0.102359 | 0.092016 | 0.010343 | 6.919352 |
| template:numbered_steps | 18 | 669 | 0.097598 | 0.107454 | -0.009856 | -6.593930 |
| template:html_dl | 18 | 669 | 0.192686 | 0.198282 | -0.005596 | -3.743466 |
| template:plain_equals | 18 | 669 | 0.095349 | 0.090025 | 0.005324 | 3.561599 |
| template:csv | 18 | 669 | 0.120941 | 0.126202 | -0.005262 | -3.520131 |
| template:yaml | 18 | 669 | 0.100732 | 0.095485 | 0.005247 | 3.510171 |
| template:faq | 18 | 669 | 0.095524 | 0.098743 | -0.003219 | -2.153576 |
| template:problem_solution | 18 | 669 | 0.098951 | 0.099768 | -0.000818 | -0.547082 |

## Pattern Buckets

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| text/word | 2210 | 11622 | 0.062202 | 0.090904 | -0.028703 | -333.580568 |
| text/punctuation | 1300 | 3120 | 0.525286 | 0.480842 | 0.044444 | 138.664709 |
| text/number | 364 | 1534 | 0.058277 | 0.016270 | 0.042007 | 64.438593 |
| whitespace/single_space | 1118 | 1118 | 0.010816 | 0.012482 | -0.001666 | -1.862613 |

## Top Documents: Model A Worse

| dataset | shard | row_index | bytes | score_byte_start | score_byte_end | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| prompt_format_sensitivity/record_extraction/jsonl | staged_jsonl_gz | 2 | 96 | 1269 | 1365 | 0.166479 | 0.096005 | 0.070474 | 6.765464 | text/punctuation | {" | 1.748120 | …cameras␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.",␠"output":␠{"batch_id":"63","city":"Busan","date":"2026-08-22","items":… |
| prompt_format_sensitivity/record_extraction/json_object | staged_jsonl_gz | 2 | 96 | 1267 | 1363 | 0.162399 | 0.101721 | 0.060678 | 5.825077 | text/punctuation | {" | 1.249835 | …cameras␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.",␠"output":␠{"batch_id":"63","city":"Busan","date":"2026-08-22","items":… |
| prompt_format_sensitivity/record_extraction/python_repl | staged_jsonl_gz | 2 | 96 | 1090 | 1186 | 0.082519 | 0.028365 | 0.054154 | 5.198741 | text/punctuation | } | 5.210436 | …usan␠on␠2026-08-22.")⏎{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} |
| prompt_format_sensitivity/record_extraction/shell_transcript | staged_jsonl_gz | 0 | 105 | 1158 | 1263 | 0.078549 | 0.029948 | 0.048601 | 5.103150 | text/punctuation | } | 5.652691 | …06-03.⏎INPUT⏎{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} |
| prompt_format_sensitivity/record_extraction/python_repl | staged_jsonl_gz | 0 | 105 | 1087 | 1192 | 0.075805 | 0.028753 | 0.047052 | 4.940463 | text/punctuation | } | 4.982557 | …026-06-03.")⏎{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} |
| prompt_format_sensitivity/string_transformation/s_expression | staged_jsonl_gz | 1 | 17 | 595 | 612 | 1.155279 | 0.872486 | 0.282793 | 4.807479 | text/word | NORTH | 0.947285 | …rple")␠(output␠"CENTRAL-0005-PURPLE"))⏎⏎(example␠(input␠"region=north;␠id=64;␠color=silver")␠(output␠NORTH-0064-SILVER |
| prompt_format_sensitivity/record_extraction/jsonl | staged_jsonl_gz | 1 | 102 | 1268 | 1370 | 0.149612 | 0.102787 | 0.046825 | 4.776150 | text/punctuation | {" | 1.184496 | …␠to␠inspect␠4␠bridges␠in␠Porto␠by␠2026-07-11.",␠"output":␠{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026… |
| prompt_format_sensitivity/record_extraction/qa | staged_jsonl_gz | 2 | 96 | 1046 | 1142 | 0.079340 | 0.030612 | 0.048728 | 4.677879 | text/punctuation | } | 4.932559 | …san␠on␠2026-08-22.⏎A:␠{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} |
| prompt_format_sensitivity/record_extraction/shell_transcript | staged_jsonl_gz | 1 | 102 | 1160 | 1262 | 0.077486 | 0.031698 | 0.045788 | 4.670367 | text/punctuation | } | 4.825126 | …26-07-11.⏎INPUT⏎{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026-07-11","assets":["bridges"],"quantity":4} |
| prompt_format_sensitivity/record_extraction/colon_mapping | staged_jsonl_gz | 2 | 96 | 1116 | 1212 | 0.078830 | 0.030881 | 0.047948 | 4.603023 | text/punctuation | } | 5.183925 | …n␠2026-08-22.⏎Output:␠{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} |
| prompt_format_sensitivity/record_extraction/s_expression | staged_jsonl_gz | 2 | 96 | 1297 | 1393 | 0.148563 | 0.101716 | 0.046848 | 4.497394 | text/punctuation | {" | 1.444616 | …2␠cameras␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.")␠(output␠{"batch_id":"63","city":"Busan","date":"2026-08-22","items":… |
| prompt_format_sensitivity/python_repl/xml | staged_jsonl_gz | 1 | 10 | 746 | 756 | 0.446139 | 0.000036 | 0.446103 | 4.461029 | text/word | east-north | 0.446103 | …xample>⏎⏎<example><input>&#x27;-&#x27;.join(reversed([&#x27;north&#x27;,␠&#x27;east&#x27;]))</input><output>east-north |
| prompt_format_sensitivity/record_extraction/markdown_table | staged_jsonl_gz | 0 | 105 | 1040 | 1145 | 0.070300 | 0.028847 | 0.041453 | 4.352576 | text/punctuation | } | 4.439516 | …026-06-03.␠\|␠{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} |
| prompt_format_sensitivity/record_extraction/json_object | staged_jsonl_gz | 1 | 102 | 1266 | 1368 | 0.149586 | 0.109064 | 0.040521 | 4.133161 | text/punctuation | {" | 0.889052 | …␠to␠inspect␠4␠bridges␠in␠Porto␠by␠2026-07-11.",␠"output":␠{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026… |
| prompt_format_sensitivity/record_extraction/markdown_table | staged_jsonl_gz | 2 | 96 | 1043 | 1139 | 0.078291 | 0.036008 | 0.042283 | 4.059148 | text/punctuation | } | 4.038176 | …usan␠on␠2026-08-22.␠\|␠{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} |
| prompt_format_sensitivity/record_extraction/colon_mapping | staged_jsonl_gz | 0 | 105 | 1113 | 1218 | 0.071655 | 0.033756 | 0.037900 | 3.979464 | text/punctuation | } | 4.388137 | …-03.⏎Output:␠{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} |
| prompt_format_sensitivity/record_extraction/qa | staged_jsonl_gz | 0 | 105 | 1043 | 1148 | 0.069658 | 0.032059 | 0.037599 | 3.947910 | text/punctuation | } | 4.767898 | …26-06-03.⏎A:␠{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} |
| prompt_format_sensitivity/record_extraction/shell_transcript | staged_jsonl_gz | 2 | 96 | 1161 | 1257 | 0.082278 | 0.041927 | 0.040351 | 3.873732 | text/punctuation | } | 5.580399 | …␠on␠2026-08-22.⏎INPUT⏎{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} |
| prompt_format_sensitivity/record_extraction/qa | staged_jsonl_gz | 1 | 102 | 1045 | 1147 | 0.071023 | 0.033331 | 0.037691 | 3.844530 | text/punctuation | } | 3.836910 | …␠2026-07-11.⏎A:␠{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026-07-11","assets":["bridges"],"quantity":4} |
| prompt_format_sensitivity/record_extraction/python_repl | staged_jsonl_gz | 1 | 102 | 1089 | 1191 | 0.075525 | 0.038435 | 0.037090 | 3.783135 | text/punctuation | } | 3.910019 | …y␠2026-07-11.")⏎{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026-07-11","assets":["bridges"],"quantity":4} |
| prompt_format_sensitivity/record_extraction/markdown_table | staged_jsonl_gz | 1 | 102 | 1042 | 1144 | 0.071180 | 0.034699 | 0.036481 | 3.721021 | text/punctuation | } | 3.748389 | …y␠2026-07-11.␠\|␠{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026-07-11","assets":["bridges"],"quantity":4} |
| prompt_format_sensitivity/python_repl/qa | staged_jsonl_gz | 0 | 2 | 341 | 343 | 1.837053 | 0.029919 | 1.807133 | 3.614266 | text/number | 42 | 1.807133 | …␠16⏎⏎Q:␠sorted(['delta',␠'alpha',␠'beta'])[0]⏎A:␠alpha⏎⏎Q:␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎A:␠15⏎⏎Q:␠len('prompt')␠*␠7⏎A:␠42 |
| prompt_format_sensitivity/python_repl/ini | staged_jsonl_gz | 0 | 2 | 445 | 447 | 1.842014 | 0.038644 | 1.803371 | 3.606741 | text/number | 42 | 1.803371 | …a'])[0]⏎output=alpha⏎⏎[example]⏎input={'a':␠2,␠'b':␠5}['b']␠*␠3⏎output=15⏎⏎[example]⏎input=len('prompt')␠*␠7⏎output=42 |
| prompt_format_sensitivity/short_factual_qa/colon_mapping | staged_jsonl_gz | 2 | 42 | 621 | 663 | 0.154057 | 0.070581 | 0.083475 | 3.505957 | text/punctuation | . | 3.122579 | …st␠mammal.⏎⏎Input:␠Which␠planet␠has␠the␠most␠prominent␠ring␠system?⏎Output:␠Saturn␠has␠the␠most␠prominent␠ring␠system. |
| prompt_format_sensitivity/short_factual_qa/python_repl | staged_jsonl_gz | 2 | 42 | 595 | 637 | 0.150433 | 0.067028 | 0.083404 | 3.502984 | text/punctuation | . | 3.408032 | …gest␠mammal.⏎⏎>>>␠solve("Which␠planet␠has␠the␠most␠prominent␠ring␠system?")⏎Saturn␠has␠the␠most␠prominent␠ring␠system. |

## Top Documents: Model B Worse

| dataset | shard | row_index | bytes | score_byte_start | score_byte_end | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| prompt_format_sensitivity/news_classification/jsonl | staged_jsonl_gz | 1 | 28 | 750 | 778 | 0.488297 | 1.017323 | -0.529026 | -14.812727 | text/word | Politics | -1.859244 | …lture␠news"}⏎⏎{"input":␠"The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.",␠"output":␠Politics␠and␠government␠news |
| prompt_format_sensitivity/news_classification/json_object | staged_jsonl_gz | 1 | 28 | 748 | 776 | 0.484540 | 1.008369 | -0.523829 | -14.667214 | text/word | Politics | -1.840629 | …lture␠news"}⏎⏎{"input":␠"The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.",␠"output":␠Politics␠and␠government␠news |
| prompt_format_sensitivity/short_factual_qa/s_expression | staged_jsonl_gz | 0 | 32 | 687 | 719 | 0.423601 | 0.765240 | -0.341639 | -10.932445 | text/word | Ottawa | -2.005794 | …he␠largest␠mammal."))⏎⏎(example␠(input␠"What␠city␠is␠the␠capital␠of␠Canada?")␠(output␠Ottawa␠is␠the␠capital␠of␠Canada. |
| prompt_format_sensitivity/short_factual_qa/json_object | staged_jsonl_gz | 0 | 32 | 657 | 689 | 0.553939 | 0.859550 | -0.305611 | -9.779567 | text/word | Ottawa | -2.220228 | …␠is␠the␠largest␠mammal."}⏎⏎{"input":␠"What␠city␠is␠the␠capital␠of␠Canada?",␠"output":␠Ottawa␠is␠the␠capital␠of␠Canada. |
| prompt_format_sensitivity/short_factual_qa/jsonl | staged_jsonl_gz | 0 | 32 | 659 | 691 | 0.555945 | 0.848228 | -0.292282 | -9.353038 | text/word | Ottawa | -2.011419 | …␠is␠the␠largest␠mammal."}⏎⏎{"input":␠"What␠city␠is␠the␠capital␠of␠Canada?",␠"output":␠Ottawa␠is␠the␠capital␠of␠Canada. |
| prompt_format_sensitivity/string_transformation/jsonl | staged_jsonl_gz | 0 | 16 | 567 | 583 | 1.008944 | 1.565492 | -0.556548 | -8.904773 | text/word | WEST | -2.153952 | …r=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=west;␠id=108;␠color=orange",␠"output":␠WEST-0108-ORANGE |
| prompt_format_sensitivity/string_transformation/json_object | staged_jsonl_gz | 0 | 16 | 565 | 581 | 0.989753 | 1.492721 | -0.502968 | -8.047482 | text/word | WEST | -1.985008 | …r=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=west;␠id=108;␠color=orange",␠"output":␠WEST-0108-ORANGE |
| prompt_format_sensitivity/short_factual_qa/json_object | staged_jsonl_gz | 1 | 40 | 648 | 688 | 0.493618 | 0.684171 | -0.190552 | -7.622089 | text/word | Leonardo | -1.433541 | …e␠is␠the␠largest␠mammal."}⏎⏎{"input":␠"Who␠painted␠the␠Mona␠Lisa?",␠"output":␠Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. |
| prompt_format_sensitivity/python_repl/tsv | staged_jsonl_gz | 0 | 2 | 303 | 305 | 1.208426 | 4.812619 | -3.604193 | -7.208387 | text/number | 42 | -3.604193 | …UE⏎⏎sum([3,␠5,␠8])⇥16⏎⏎sorted(['delta',␠'alpha',␠'beta'])[0]⇥alpha⏎⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⇥15⏎⏎len('prompt')␠*␠7⇥42 |
| prompt_format_sensitivity/news_classification/key_value_block | staged_jsonl_gz | 0 | 27 | 719 | 746 | 0.006982 | 0.263576 | -0.256594 | -6.928051 | text/word | Science | -0.989416 | …e␠news⏎⏎input:⏎The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.⏎⏎output:⏎Science␠and␠technology␠news |
| prompt_format_sensitivity/news_classification/json_object | staged_jsonl_gz | 2 | 25 | 739 | 764 | 0.494299 | 0.750651 | -0.256352 | -6.408791 | text/word | Sports | -1.080529 | …"Arts␠and␠culture␠news"}⏎⏎{"input":␠"The␠tennis␠final␠was␠delayed␠by␠heavy␠rain.",␠"output":␠Sports␠competition␠report |
| prompt_format_sensitivity/mcqa_science/jsonl | staged_jsonl_gz | 2 | 38 | 1168 | 1206 | 0.520676 | 0.688161 | -0.167485 | -6.364438 | text/word | Copper | -0.903926 | …good␠electrical␠conductor?\\nA.␠Rubber\\nB.␠Copper\\nC.␠Glass\\nD.␠Wood",␠"output":␠Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/string_transformation/jsonl | staged_jsonl_gz | 1 | 17 | 567 | 584 | 1.013369 | 1.370334 | -0.356965 | -6.068397 | text/word | NORTH | -1.212139 | …=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=north;␠id=64;␠color=silver",␠"output":␠NORTH-0064-SILVER |
| prompt_format_sensitivity/news_classification/key_value_block | staged_jsonl_gz | 2 | 25 | 696 | 721 | 0.004005 | 0.246144 | -0.242139 | -6.053477 | text/word | Sports | -0.950162 | …⏎⏎output:⏎Arts␠and␠culture␠news⏎⏎input:⏎The␠tennis␠final␠was␠delayed␠by␠heavy␠rain.⏎⏎output:⏎Sports␠competition␠report |
| prompt_format_sensitivity/short_factual_qa/s_expression | staged_jsonl_gz | 2 | 42 | 700 | 742 | 0.374170 | 0.517470 | -0.143300 | -6.018582 | text/word | Saturn | -1.201630 | …(example␠(input␠"Which␠planet␠has␠the␠most␠prominent␠ring␠system?")␠(output␠Saturn␠has␠the␠most␠prominent␠ring␠system. |
| prompt_format_sensitivity/short_factual_qa/jsonl | staged_jsonl_gz | 1 | 40 | 650 | 690 | 0.492557 | 0.642686 | -0.150129 | -6.005166 | text/word | Leonardo | -0.961407 | …e␠is␠the␠largest␠mammal."}⏎⏎{"input":␠"Who␠painted␠the␠Mona␠Lisa?",␠"output":␠Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. |
| prompt_format_sensitivity/python_repl/json_object | staged_jsonl_gz | 1 | 10 | 480 | 490 | 1.322363 | 1.886774 | -0.564411 | -5.644109 | text/word | east-north | -0.564411 | …␠"{'a':␠2,␠'b':␠5}['b']␠*␠3",␠"output":␠"15"}⏎⏎{"input":␠"'-'.join(reversed(['north',␠'east']))",␠"output":␠east-north |
| prompt_format_sensitivity/news_classification/json_object | staged_jsonl_gz | 0 | 27 | 762 | 789 | 0.539048 | 0.742889 | -0.203841 | -5.503706 | text/word | Science | -0.791334 | …⏎{"input":␠"The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.",␠"output":␠Science␠and␠technology␠news |
| prompt_format_sensitivity/mcqa_science/bullet_list | staged_jsonl_gz | 2 | 38 | 1113 | 1151 | 0.142146 | 0.282849 | -0.140703 | -5.346702 | text/word | Copper | -0.761961 | …␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎␠␠output:␠Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/string_transformation/jsonl | staged_jsonl_gz | 2 | 15 | 566 | 581 | 1.074980 | 1.413670 | -0.338690 | -5.080343 | text/word | EAST | -1.377157 | …lor=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=east;␠id=901;␠color=black",␠"output":␠EAST-0901-BLACK |
| prompt_format_sensitivity/news_classification/faq | staged_jsonl_gz | 1 | 28 | 761 | 789 | 0.034836 | 0.214835 | -0.179999 | -5.039960 | text/word | Politics | -0.630574 | …re␠news⏎⏎FAQ␠entry⏎Question:␠The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎Answer:␠Politics␠and␠government␠news |
| prompt_format_sensitivity/short_factual_qa/toml | staged_jsonl_gz | 1 | 40 | 738 | 778 | 0.250519 | 0.371824 | -0.121305 | -4.852203 | text/punctuation | . | -4.972104 | …␠mammal."""⏎⏎[[example]]⏎input␠=␠"""Who␠painted␠the␠Mona␠Lisa?"""⏎output␠=␠"""Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. |
| prompt_format_sensitivity/news_classification/jsonl | staged_jsonl_gz | 2 | 25 | 741 | 766 | 0.510280 | 0.703599 | -0.193319 | -4.832974 | text/word | Sports | -0.835904 | …"Arts␠and␠culture␠news"}⏎⏎{"input":␠"The␠tennis␠final␠was␠delayed␠by␠heavy␠rain.",␠"output":␠Sports␠competition␠report |
| prompt_format_sensitivity/news_classification/jsonl | staged_jsonl_gz | 0 | 27 | 764 | 791 | 0.541245 | 0.716860 | -0.175614 | -4.741587 | text/word | Science | -0.683211 | …⏎{"input":␠"The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.",␠"output":␠Science␠and␠technology␠news |
| prompt_format_sensitivity/mcqa_science/key_value_block | staged_jsonl_gz | 0 | 34 | 1098 | 1132 | 0.236598 | 0.370988 | -0.134390 | -4.569259 | text/word | The | -1.980931 | …rt␠of␠a␠plant␠takes␠in␠water␠from␠soil?⏎A.␠Flower⏎B.␠Root⏎C.␠Petal⏎D.␠Seed⏎⏎output:⏎The␠root␠takes␠in␠water␠from␠soil. |

## Top Segments: Model A Worse

| dataset | bucket | bytes | delta_bits | gap_bpb | text | doc_preview |
| --- | --- | --- | --- | --- | --- | --- |
| prompt_format_sensitivity/record_extraction/shell_transcript | text/punctuation | 1 | 5.652691 | 5.652691 | } | …06-03.⏎INPUT⏎{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} |
| prompt_format_sensitivity/record_extraction/shell_transcript | text/punctuation | 1 | 5.580399 | 5.580399 | } | …␠on␠2026-08-22.⏎INPUT⏎{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} |
| prompt_format_sensitivity/record_extraction/python_repl | text/punctuation | 1 | 5.210436 | 5.210436 | } | …usan␠on␠2026-08-22.")⏎{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} |
| prompt_format_sensitivity/record_extraction/colon_mapping | text/punctuation | 1 | 5.183925 | 5.183925 | } | …n␠2026-08-22.⏎Output:␠{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} |
| prompt_format_sensitivity/record_extraction/problem_solution | text/punctuation | 1 | 5.106319 | 5.106319 | } | …026-08-22.⏎⏎Solution:⏎{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} |
| prompt_format_sensitivity/record_extraction/key_value_block | text/punctuation | 1 | 4.985989 | 4.985989 | } | …␠2026-08-22.⏎⏎output:⏎{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} |
| prompt_format_sensitivity/record_extraction/python_repl | text/punctuation | 1 | 4.982557 | 4.982557 | } | …026-06-03.")⏎{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} |
| prompt_format_sensitivity/record_extraction/qa | text/punctuation | 1 | 4.932559 | 4.932559 | } | …san␠on␠2026-08-22.⏎A:␠{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} |
| prompt_format_sensitivity/record_extraction/shell_transcript | text/punctuation | 1 | 4.825126 | 4.825126 | } | …26-07-11.⏎INPUT⏎{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026-07-11","assets":["bridges"],"quantity":4} |
| prompt_format_sensitivity/record_extraction/qa | text/punctuation | 1 | 4.767898 | 4.767898 | } | …26-06-03.⏎A:␠{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} |
| prompt_format_sensitivity/string_transformation/s_expression | text/word | 5 | 4.736424 | 0.947285 | NORTH | …rple")␠(output␠"CENTRAL-0005-PURPLE"))⏎⏎(example␠(input␠"region=north;␠id=64;␠color=silver")␠(output␠NORTH-0064-SILVER |
| prompt_format_sensitivity/record_extraction/key_value_block | text/punctuation | 1 | 4.559277 | 4.559277 | } | …03.⏎⏎output:⏎{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} |
| prompt_format_sensitivity/python_repl/xml | text/word | 10 | 4.461029 | 0.446103 | east-north | …xample>⏎⏎<example><input>&#x27;-&#x27;.join(reversed([&#x27;north&#x27;,␠&#x27;east&#x27;]))</input><output>east-north |
| prompt_format_sensitivity/record_extraction/markdown_table | text/punctuation | 1 | 4.439516 | 4.439516 | } | …026-06-03.␠\|␠{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} |
| prompt_format_sensitivity/record_extraction/colon_mapping | text/punctuation | 1 | 4.388137 | 4.388137 | } | …-03.⏎Output:␠{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} |
| prompt_format_sensitivity/short_factual_qa/json_object | text/punctuation | 1 | 4.048945 | 4.048945 | . | …e␠is␠the␠largest␠mammal."}⏎⏎{"input":␠"Who␠painted␠the␠Mona␠Lisa?",␠"output":␠Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. |
| prompt_format_sensitivity/record_extraction/markdown_table | text/punctuation | 1 | 4.038176 | 4.038176 | } | …usan␠on␠2026-08-22.␠\|␠{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} |
| prompt_format_sensitivity/record_extraction/python_repl | text/punctuation | 1 | 3.910019 | 3.910019 | } | …y␠2026-07-11.")⏎{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026-07-11","assets":["bridges"],"quantity":4} |
| prompt_format_sensitivity/record_extraction/qa | text/punctuation | 1 | 3.836910 | 3.836910 | } | …␠2026-07-11.⏎A:␠{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026-07-11","assets":["bridges"],"quantity":4} |
| prompt_format_sensitivity/record_extraction/yaml | text/punctuation | 1 | 3.784231 | 3.784231 | } | …2026-08-22.⏎␠␠output:␠{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} |
| prompt_format_sensitivity/record_extraction/markdown_table | text/punctuation | 1 | 3.748389 | 3.748389 | } | …y␠2026-07-11.␠\|␠{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026-07-11","assets":["bridges"],"quantity":4} |
| prompt_format_sensitivity/record_extraction/yaml | text/punctuation | 1 | 3.674166 | 3.674166 | } | …3.⏎␠␠output:␠{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} |
| prompt_format_sensitivity/record_extraction/problem_solution | text/punctuation | 1 | 3.629208 | 3.629208 | } | ….⏎⏎Solution:⏎{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} |
| prompt_format_sensitivity/record_extraction/jsonl | text/punctuation | 2 | 3.628184 | 1.814092 | {" | …9␠sensors␠to␠Tallinn␠for␠Jules␠on␠2026-06-03.",␠"output":␠{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"… |
| prompt_format_sensitivity/python_repl/qa | text/number | 2 | 3.614266 | 1.807133 | 42 | …␠16⏎⏎Q:␠sorted(['delta',␠'alpha',␠'beta'])[0]⏎A:␠alpha⏎⏎Q:␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎A:␠15⏎⏎Q:␠len('prompt')␠*␠7⏎A:␠42 |
| prompt_format_sensitivity/python_repl/ini | text/number | 2 | 3.606741 | 1.803371 | 42 | …a'])[0]⏎output=alpha⏎⏎[example]⏎input={'a':␠2,␠'b':␠5}['b']␠*␠3⏎output=15⏎⏎[example]⏎input=len('prompt')␠*␠7⏎output=42 |
| prompt_format_sensitivity/short_factual_qa/json_object | text/punctuation | 1 | 3.579328 | 3.579328 | . | …␠is␠the␠largest␠mammal."}⏎⏎{"input":␠"What␠city␠is␠the␠capital␠of␠Canada?",␠"output":␠Ottawa␠is␠the␠capital␠of␠Canada. |
| prompt_format_sensitivity/record_extraction/colon_mapping | text/punctuation | 1 | 3.510880 | 3.510880 | } | …-07-11.⏎Output:␠{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026-07-11","assets":["bridges"],"quantity":4} |
| prompt_format_sensitivity/record_extraction/jsonl | text/punctuation | 2 | 3.496239 | 1.748120 | {" | …cameras␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.",␠"output":␠{"batch_id":"63","city":"Busan","date":"2026-08-22","items":… |
| prompt_format_sensitivity/python_repl/numbered_steps | text/number | 2 | 3.430939 | 1.715470 | 42 | …␠'beta'])[0]⏎2.␠Return␠alpha⏎⏎1.␠Given␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎2.␠Return␠15⏎⏎1.␠Given␠len('prompt')␠*␠7⏎2.␠Return␠42 |
| prompt_format_sensitivity/python_repl/bullet_list | text/number | 2 | 3.410648 | 1.705324 | 42 | …␠'beta'])[0]⏎␠␠output:␠alpha⏎⏎-␠input:␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎␠␠output:␠15⏎⏎-␠input:␠len('prompt')␠*␠7⏎␠␠output:␠42 |
| prompt_format_sensitivity/python_repl/labeled_example | text/number | 2 | 3.410100 | 1.705050 | 42 | …'])[0]⏎Result:⏎alpha⏎⏎Example⏎Given:⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⏎Result:⏎15⏎⏎Example⏎Given:⏎len('prompt')␠*␠7⏎Result:⏎42 |
| prompt_format_sensitivity/short_factual_qa/python_repl | text/punctuation | 1 | 3.408032 | 3.408032 | . | …gest␠mammal.⏎⏎>>>␠solve("Which␠planet␠has␠the␠most␠prominent␠ring␠system?")⏎Saturn␠has␠the␠most␠prominent␠ring␠system. |
| prompt_format_sensitivity/python_repl/shell_transcript | text/number | 2 | 3.405421 | 1.702710 | 42 | …'])[0]⏎INPUT⏎alpha⏎⏎$␠solve␠<<'INPUT'⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⏎INPUT⏎15⏎⏎$␠solve␠<<'INPUT'⏎len('prompt')␠*␠7⏎INPUT⏎42 |
| prompt_format_sensitivity/short_factual_qa/json_object | text/punctuation | 1 | 3.400694 | 3.400694 | . | …"}⏎⏎{"input":␠"Which␠planet␠has␠the␠most␠prominent␠ring␠system?",␠"output":␠Saturn␠has␠the␠most␠prominent␠ring␠system. |
| prompt_format_sensitivity/record_extraction/sql_result | text/punctuation | 1 | 3.345029 | 3.345029 | } | …output;⏎output⏎------⏎{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} |
| prompt_format_sensitivity/mcqa_science/s_expression | text/punctuation | 1 | 3.323253 | 3.323253 | . | …␠a␠plant␠takes␠in␠water␠from␠soil?\\nA.␠Flower\\nB.␠Root\\nC.␠Petal\\nD.␠Seed")␠(output␠The␠root␠takes␠in␠water␠from␠soil. |
| prompt_format_sensitivity/python_repl/python_repl | text/word | 10 | 3.263056 | 0.326306 | east-north | …)[0]")⏎alpha⏎⏎>>>␠solve("{'a':␠2,␠'b':␠5}['b']␠*␠3")⏎15⏎⏎>>>␠solve("'-'.join(reversed(['north',␠'east']))")⏎east-north |
| prompt_format_sensitivity/python_repl/faq | text/number | 2 | 3.242388 | 1.621194 | 42 | …wer:␠alpha⏎⏎FAQ␠entry⏎Question:␠{'a':␠2,␠'b':␠5}['b']␠*␠3⏎Answer:␠15⏎⏎FAQ␠entry⏎Question:␠len('prompt')␠*␠7⏎Answer:␠42 |
| prompt_format_sensitivity/python_repl/problem_solution | text/number | 2 | 3.239970 | 1.619985 | 42 | …eta'])[0]⏎⏎Solution:⏎alpha⏎⏎Problem:⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⏎⏎Solution:⏎15⏎⏎Problem:⏎len('prompt')␠*␠7⏎⏎Solution:⏎42 |

## Top Segments: Model B Worse

| dataset | bucket | bytes | delta_bits | gap_bpb | text | doc_preview |
| --- | --- | --- | --- | --- | --- | --- |
| prompt_format_sensitivity/news_classification/jsonl | text/word | 8 | -14.873955 | -1.859244 | Politics | …lture␠news"}⏎⏎{"input":␠"The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.",␠"output":␠Politics␠and␠government␠news |
| prompt_format_sensitivity/news_classification/json_object | text/word | 8 | -14.725035 | -1.840629 | Politics | …lture␠news"}⏎⏎{"input":␠"The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.",␠"output":␠Politics␠and␠government␠news |
| prompt_format_sensitivity/short_factual_qa/json_object | text/word | 6 | -13.321369 | -2.220228 | Ottawa | …␠is␠the␠largest␠mammal."}⏎⏎{"input":␠"What␠city␠is␠the␠capital␠of␠Canada?",␠"output":␠Ottawa␠is␠the␠capital␠of␠Canada. |
| prompt_format_sensitivity/short_factual_qa/jsonl | text/word | 6 | -12.068517 | -2.011419 | Ottawa | …␠is␠the␠largest␠mammal."}⏎⏎{"input":␠"What␠city␠is␠the␠capital␠of␠Canada?",␠"output":␠Ottawa␠is␠the␠capital␠of␠Canada. |
| prompt_format_sensitivity/short_factual_qa/s_expression | text/word | 6 | -12.034764 | -2.005794 | Ottawa | …he␠largest␠mammal."))⏎⏎(example␠(input␠"What␠city␠is␠the␠capital␠of␠Canada?")␠(output␠Ottawa␠is␠the␠capital␠of␠Canada. |
| prompt_format_sensitivity/short_factual_qa/json_object | text/word | 8 | -11.468328 | -1.433541 | Leonardo | …e␠is␠the␠largest␠mammal."}⏎⏎{"input":␠"Who␠painted␠the␠Mona␠Lisa?",␠"output":␠Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. |
| prompt_format_sensitivity/string_transformation/jsonl | text/word | 4 | -8.615808 | -2.153952 | WEST | …r=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=west;␠id=108;␠color=orange",␠"output":␠WEST-0108-ORANGE |
| prompt_format_sensitivity/string_transformation/json_object | text/word | 4 | -7.940032 | -1.985008 | WEST | …r=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=west;␠id=108;␠color=orange",␠"output":␠WEST-0108-ORANGE |
| prompt_format_sensitivity/short_factual_qa/jsonl | text/word | 8 | -7.691254 | -0.961407 | Leonardo | …e␠is␠the␠largest␠mammal."}⏎⏎{"input":␠"Who␠painted␠the␠Mona␠Lisa?",␠"output":␠Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. |
| prompt_format_sensitivity/short_factual_qa/s_expression | text/word | 6 | -7.209781 | -1.201630 | Saturn | …(example␠(input␠"Which␠planet␠has␠the␠most␠prominent␠ring␠system?")␠(output␠Saturn␠has␠the␠most␠prominent␠ring␠system. |
| prompt_format_sensitivity/python_repl/tsv | text/number | 2 | -7.208387 | -3.604193 | 42 | …UE⏎⏎sum([3,␠5,␠8])⇥16⏎⏎sorted(['delta',␠'alpha',␠'beta'])[0]⇥alpha⏎⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⇥15⏎⏎len('prompt')␠*␠7⇥42 |
| prompt_format_sensitivity/news_classification/key_value_block | text/word | 7 | -6.925915 | -0.989416 | Science | …e␠news⏎⏎input:⏎The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.⏎⏎output:⏎Science␠and␠technology␠news |
| prompt_format_sensitivity/news_classification/json_object | text/word | 6 | -6.483176 | -1.080529 | Sports | …"Arts␠and␠culture␠news"}⏎⏎{"input":␠"The␠tennis␠final␠was␠delayed␠by␠heavy␠rain.",␠"output":␠Sports␠competition␠report |
| prompt_format_sensitivity/mcqa_science/shell_transcript | text/word | 6 | -6.065038 | -1.010840 | Copper | …rial␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎INPUT⏎Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/string_transformation/jsonl | text/word | 5 | -6.060696 | -1.212139 | NORTH | …=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=north;␠id=64;␠color=silver",␠"output":␠NORTH-0064-SILVER |
| prompt_format_sensitivity/mcqa_science/key_value_block | text/word | 6 | -6.040791 | -1.006798 | Copper | …l␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎⏎output:⏎Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/mcqa_science/key_value_block | text/word | 3 | -5.942792 | -1.980931 | The | …rt␠of␠a␠plant␠takes␠in␠water␠from␠soil?⏎A.␠Flower⏎B.␠Root⏎C.␠Petal⏎D.␠Seed⏎⏎output:⏎The␠root␠takes␠in␠water␠from␠soil. |
| prompt_format_sensitivity/news_classification/key_value_block | text/word | 6 | -5.700971 | -0.950162 | Sports | …⏎⏎output:⏎Arts␠and␠culture␠news⏎⏎input:⏎The␠tennis␠final␠was␠delayed␠by␠heavy␠rain.⏎⏎output:⏎Sports␠competition␠report |
| prompt_format_sensitivity/python_repl/json_object | text/word | 10 | -5.644109 | -0.564411 | east-north | …␠"{'a':␠2,␠'b':␠5}['b']␠*␠3",␠"output":␠"15"}⏎⏎{"input":␠"'-'.join(reversed(['north',␠'east']))",␠"output":␠east-north |
| prompt_format_sensitivity/news_classification/json_object | text/word | 7 | -5.539340 | -0.791334 | Science | …⏎{"input":␠"The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.",␠"output":␠Science␠and␠technology␠news |
| prompt_format_sensitivity/string_transformation/jsonl | text/word | 4 | -5.508629 | -1.377157 | EAST | …lor=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=east;␠id=901;␠color=black",␠"output":␠EAST-0901-BLACK |
| prompt_format_sensitivity/short_factual_qa/key_value_block | text/word | 8 | -5.473612 | -0.684202 | Leonardo | …blue␠whale␠is␠the␠largest␠mammal.⏎⏎input:⏎Who␠painted␠the␠Mona␠Lisa?⏎⏎output:⏎Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. |
| prompt_format_sensitivity/mcqa_science/jsonl | text/word | 6 | -5.423559 | -0.903926 | Copper | …good␠electrical␠conductor?\\nA.␠Rubber\\nB.␠Copper\\nC.␠Glass\\nD.␠Wood",␠"output":␠Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/short_factual_qa/shell_transcript | text/word | 6 | -5.223137 | -0.870523 | Ottawa | …e␠is␠the␠largest␠mammal.⏎⏎$␠solve␠<<'INPUT'⏎What␠city␠is␠the␠capital␠of␠Canada?⏎INPUT⏎Ottawa␠is␠the␠capital␠of␠Canada. |
| prompt_format_sensitivity/news_classification/faq | text/word | 8 | -5.044595 | -0.630574 | Politics | …re␠news⏎⏎FAQ␠entry⏎Question:␠The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎Answer:␠Politics␠and␠government␠news |
| prompt_format_sensitivity/news_classification/jsonl | text/word | 6 | -5.015422 | -0.835904 | Sports | …"Arts␠and␠culture␠news"}⏎⏎{"input":␠"The␠tennis␠final␠was␠delayed␠by␠heavy␠rain.",␠"output":␠Sports␠competition␠report |
| prompt_format_sensitivity/short_factual_qa/toml | text/punctuation | 1 | -4.972104 | -4.972104 | . | …␠mammal."""⏎⏎[[example]]⏎input␠=␠"""Who␠painted␠the␠Mona␠Lisa?"""⏎output␠=␠"""Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. |
| prompt_format_sensitivity/string_transformation/s_expression | text/word | 4 | -4.940201 | -1.235050 | EAST | …=purple")␠(output␠"CENTRAL-0005-PURPLE"))⏎⏎(example␠(input␠"region=east;␠id=901;␠color=black")␠(output␠EAST-0901-BLACK |
| prompt_format_sensitivity/news_classification/jsonl | text/word | 7 | -4.782477 | -0.683211 | Science | …⏎{"input":␠"The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.",␠"output":␠Science␠and␠technology␠news |
| prompt_format_sensitivity/record_extraction/key_value_block | text/punctuation | 2 | -4.745193 | -2.372597 | {" | …␠2␠cameras␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎⏎output:⏎{"batch_id":"63","city":"Busan","date":"2026-08-22","items":… |
| prompt_format_sensitivity/mcqa_science/colon_mapping | text/word | 6 | -4.608411 | -0.768068 | Copper | …al␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎Output:␠Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/mcqa_science/bullet_list | text/word | 6 | -4.571767 | -0.761961 | Copper | …␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎␠␠output:␠Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/string_transformation/json_object | text/word | 4 | -4.429874 | -1.107468 | EAST | …lor=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=east;␠id=901;␠color=black",␠"output":␠EAST-0901-BLACK |
| prompt_format_sensitivity/mcqa_science/toml | text/punctuation | 1 | -4.328342 | -4.328342 | . | …␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood"""⏎output␠=␠"""Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/news_classification/qa | text/word | 8 | -4.252660 | -0.531583 | Politics | …end.⏎A:␠Arts␠and␠culture␠news⏎⏎Q:␠The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.⏎A:␠Politics␠and␠government␠news |
| prompt_format_sensitivity/record_extraction/json_object | text/word | 5 | -4.218263 | -0.843653 | owner | …for␠Jules␠on␠2026-06-03.",␠"output":␠{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":[… |
| prompt_format_sensitivity/mcqa_science/yaml | text/word | 6 | -4.084189 | -0.680698 | Copper | …rical␠conductor?⏎␠␠␠␠A.␠Rubber⏎␠␠␠␠B.␠Copper⏎␠␠␠␠C.␠Glass⏎␠␠␠␠D.␠Wood⏎␠␠output:␠Copper␠is␠a␠good␠electrical␠conductor. |
| prompt_format_sensitivity/short_factual_qa/xml | text/word | 6 | -4.045395 | -0.674233 | Ottawa | …output></example>⏎⏎<example><input>What␠city␠is␠the␠capital␠of␠Canada?</input><output>Ottawa␠is␠the␠capital␠of␠Canada. |
| prompt_format_sensitivity/short_factual_qa/labeled_example | text/punctuation | 1 | -3.993084 | -3.993084 | . | …l.⏎⏎Example⏎Given:⏎Which␠planet␠has␠the␠most␠prominent␠ring␠system?⏎Result:⏎Saturn␠has␠the␠most␠prominent␠ring␠system. |
| prompt_format_sensitivity/record_extraction/key_value_block | text/punctuation | 2 | -3.961300 | -1.980650 | {" | …Nia␠to␠inspect␠4␠bridges␠in␠Porto␠by␠2026-07-11.⏎⏎output:⏎{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026… |

## Top Literals: Model A Worse

Representative token boundaries come from the highest-gap occurrence for each literal. `|` marks token boundaries for each model; an ellipsis means the token continues outside the literal boundary in that example.

| name | bucket | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | example_dataset | example_doc_preview | model_a_token_boundaries | model_b_token_boundaries |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| } | text/punctuation | 78 | 78 | 6.571339 | 4.921005 | 1.650334 | 128.726077 | prompt_format_sensitivity/record_extraction/shell_transcript | …06-03.⏎INPUT⏎{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} | \|}\| | \|}\| |
| 42 | text/number | 26 | 52 | 1.487125 | 0.423972 | 1.063152 | 55.283910 | prompt_format_sensitivity/python_repl/tsv | …UE⏎⏎sum([3,␠5,␠8])⇥16⏎⏎sorted(['delta',␠'alpha',␠'beta'])[0]⇥alpha⏎⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⇥15⏎⏎len('prompt')␠*␠7⇥42 | \|42\| | \|4\|2\| |
| east-north | text/word | 26 | 260 | 0.255340 | 0.212140 | 0.043200 | 11.231997 | prompt_format_sensitivity/python_repl/json_object | …␠"{'a':␠2,␠'b':␠5}['b']␠*␠3",␠"output":␠"15"}⏎⏎{"input":␠"'-'.join(reversed(['north',␠'east']))",␠"output":␠east-north | \|…east\|-n\|orth\| | \|…east\|-n\|orth\| |
| 0901 | text/number | 26 | 104 | 0.107214 | 0.004701 | 0.102513 | 10.661393 | prompt_format_sensitivity/string_transformation/sql_result | …-----⏎CENTRAL-0005-PURPLE⏎⏎SELECT␠solve($$region=east;␠id=901;␠color=black$$)␠AS␠output;⏎output⏎------⏎EAST-0901-BLACK | \|090\|1\| | \|0\|9\|0\|1\| |
| . | text/punctuation | 156 | 156 | 6.123970 | 6.059072 | 0.064898 | 10.124094 | prompt_format_sensitivity/short_factual_qa/toml | …␠mammal."""⏎⏎[[example]]⏎input␠=␠"""Who␠painted␠the␠Mona␠Lisa?"""⏎output␠=␠"""Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. | \|.\| | \|.\| |
| ":" | text/punctuation | 286 | 858 | 0.012660 | 0.003057 | 0.009603 | 8.239358 | prompt_format_sensitivity/record_extraction/jsonl | …to␠Tallinn␠for␠Jules␠on␠2026-06-03.",␠"output":␠{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03… | \|":"\| | \|":"\| |
| takes | text/word | 26 | 130 | 0.147675 | 0.100510 | 0.047165 | 6.131514 | prompt_format_sensitivity/mcqa_science/tsv | …ch␠part␠of␠a␠plant␠takes␠in␠water␠from␠soil?\\nA.␠Flower\\nB.␠Root\\nC.␠Petal\\nD.␠Seed⇥The␠root␠takes␠in␠water␠from␠soil. | \|…takes\| | \|…takes\| |
| ":[" | text/punctuation | 78 | 312 | 0.008285 | 0.001099 | 0.007185 | 2.241812 | prompt_format_sensitivity/record_extraction/jsonl | …",␠"output":␠{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} | \|":["\| | \|":["\| |
| "," | text/punctuation | 312 | 936 | 0.003076 | 0.000708 | 0.002368 | 2.216693 | prompt_format_sensitivity/record_extraction/jsonl | …ripods␠to␠Busan␠on␠2026-08-22.",␠"output":␠{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tri… | \|","\| | \|","\| |
| batch_id | text/word | 26 | 208 | 0.008962 | 0.000507 | 0.008455 | 1.758702 | prompt_format_sensitivity/record_extraction/jsonl | …as␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.",␠"output":␠{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cam… | \|batch\|_id\| | \|batch\|_id\| |
| "]," | text/punctuation | 78 | 312 | 0.004527 | 0.000069 | 0.004458 | 1.390902 | prompt_format_sensitivity/record_extraction/csv | …␠Busan␠on␠2026-08-22.,{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} | \|"],"\| | \|"],"\| |
| has | text/word | 26 | 78 | 0.022112 | 0.006328 | 0.015784 | 1.231117 | prompt_format_sensitivity/short_factual_qa/qa | …the␠largest␠mammal.⏎⏎Q:␠Which␠planet␠has␠the␠most␠prominent␠ring␠system?⏎A:␠Saturn␠has␠the␠most␠prominent␠ring␠system. | \|…has\| | \|…has\| |
| order_id | text/word | 26 | 208 | 0.006308 | 0.000666 | 0.005642 | 1.173543 | prompt_format_sensitivity/record_extraction/jsonl | …sors␠to␠Tallinn␠for␠Jules␠on␠2026-06-03.",␠"output":␠{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-… | \|order\|_id\| | \|order\|_id\| |
| date | text/word | 78 | 312 | 0.003259 | 0.000187 | 0.003072 | 0.958403 | prompt_format_sensitivity/record_extraction/csv | …␠2026-06-03.,{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} | \|date\| | \|date\| |
| the | text/word | 78 | 234 | 0.003335 | 0.000374 | 0.002961 | 0.692795 | prompt_format_sensitivity/short_factual_qa/colon_mapping | …␠blue␠whale␠is␠the␠largest␠mammal.⏎⏎Input:␠Who␠painted␠the␠Mona␠Lisa?⏎Output:␠Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. | \|…the\| | \|…the\| |
| city | text/word | 78 | 312 | 0.002273 | 0.000438 | 0.001835 | 0.572452 | prompt_format_sensitivity/record_extraction/csv | …␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.,{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods… | \|city\| | \|city\| |
| ticket_id | text/word | 26 | 234 | 0.002777 | 0.000428 | 0.002349 | 0.549633 | prompt_format_sensitivity/record_extraction/json_object | …nspect␠4␠bridges␠in␠Porto␠by␠2026-07-11.",␠"output":␠{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026-07-1… | \|ticket\|_id\| | \|ticket\|_id\| |
| SILVER | text/word | 26 | 156 | 0.003722 | 0.000290 | 0.003432 | 0.535395 | prompt_format_sensitivity/string_transformation/s_expression | …rple")␠(output␠"CENTRAL-0005-PURPLE"))⏎⏎(example␠(input␠"region=north;␠id=64;␠color=silver")␠(output␠NORTH-0064-SILVER | \|…S\|IL\|VER\| | \|…S\|IL\|VER\| |
| BLACK | text/word | 26 | 130 | 0.004173 | 0.000152 | 0.004020 | 0.522622 | prompt_format_sensitivity/string_transformation/markdown_table | …LLOW⏎⏎\|␠region=central;␠id=5;␠color=purple␠\|␠CENTRAL-0005-PURPLE⏎⏎\|␠region=east;␠id=901;␠color=black␠\|␠EAST-0901-BLACK | \|…B\|L\|ACK\| | \|…B\|L\|ACK\| |
| assets | text/word | 26 | 156 | 0.006668 | 0.004110 | 0.002557 | 0.398956 | prompt_format_sensitivity/record_extraction/qa | …␠2026-07-11.⏎A:␠{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026-07-11","assets":["bridges"],"quantity":4} | \|assets\| | \|assets\| |
| - | text/punctuation | 156 | 156 | 0.005376 | 0.003082 | 0.002293 | 0.357743 | prompt_format_sensitivity/string_transformation/jsonl | …lor=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=east;␠id=901;␠color=black",␠"output":␠EAST-0901-BLACK | \|-\| | \|-\| |
| items | text/word | 52 | 260 | 0.001955 | 0.000898 | 0.001057 | 0.274868 | prompt_format_sensitivity/record_extraction/csv | …␠2026-06-03.,{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} | \|items\| | \|items\| |
| ring | text/word | 26 | 104 | 0.003146 | 0.000577 | 0.002569 | 0.267151 | prompt_format_sensitivity/short_factual_qa/flashcard | …gest␠mammal.⏎⏎Front:␠Which␠planet␠has␠the␠most␠prominent␠ring␠system?⏎Back:␠Saturn␠has␠the␠most␠prominent␠ring␠system. | \|…ring\| | \|…ring\| |
| report | text/word | 26 | 156 | 0.003435 | 0.002039 | 0.001396 | 0.217744 | prompt_format_sensitivity/news_classification/jsonl | …"Arts␠and␠culture␠news"}⏎⏎{"input":␠"The␠tennis␠final␠was␠delayed␠by␠heavy␠rain.",␠"output":␠Sports␠competition␠report | \|…report\| | \|…report\| |
| is | text/word | 52 | 104 | 0.004527 | 0.002444 | 0.002083 | 0.216621 | prompt_format_sensitivity/short_factual_qa/s_expression | …he␠largest␠mammal."))⏎⏎(example␠(input␠"What␠city␠is␠the␠capital␠of␠Canada?")␠(output␠Ottawa␠is␠the␠capital␠of␠Canada. | \|…is\| | \|…is\| |
| government | text/word | 26 | 260 | 0.001023 | 0.000260 | 0.000763 | 0.198345 | prompt_format_sensitivity/news_classification/toml | …[example]]⏎input␠=␠"""The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals."""⏎output␠=␠"""Politics␠and␠government␠news | \|…government\| | \|…government\| |
| and | text/word | 52 | 156 | 0.001530 | 0.000272 | 0.001258 | 0.196281 | prompt_format_sensitivity/news_classification/s_expression | …ample␠(input␠"The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.")␠(output␠Science␠and␠technology␠news | \|…and\| | \|…and\| |
| prominent | text/word | 26 | 234 | 0.000755 | 0.000020 | 0.000735 | 0.171952 | prompt_format_sensitivity/short_factual_qa/markdown_table | …s␠the␠largest␠mammal.⏎⏎\|␠Which␠planet␠has␠the␠most␠prominent␠ring␠system?␠\|␠Saturn␠has␠the␠most␠prominent␠ring␠system. | \|…prominent\| | \|…prominent\| |
| in | text/word | 26 | 52 | 0.003321 | 0.000226 | 0.003096 | 0.160974 | prompt_format_sensitivity/mcqa_science/qa | …ich␠part␠of␠a␠plant␠takes␠in␠water␠from␠soil?⏎A.␠Flower⏎B.␠Root⏎C.␠Petal⏎D.␠Seed⏎A:␠The␠root␠takes␠in␠water␠from␠soil. | \|…in\| | \|…in\| |
| cameras | text/word | 26 | 182 | 0.000939 | 0.000090 | 0.000849 | 0.154439 | prompt_format_sensitivity/record_extraction/csv | …␠Busan␠on␠2026-08-22.,{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} | \|cam\|eras\| | \|cam\|eras\| |
| bridges | text/word | 26 | 182 | 0.000836 | 0.000031 | 0.000805 | 0.146510 | prompt_format_sensitivity/record_extraction/csv | …␠by␠2026-07-11.,{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026-07-11","assets":["bridges"],"quantity":4} | \|brid\|ges\| | \|brid\|ges\| |
| ": | text/punctuation | 78 | 156 | 0.001306 | 0.000396 | 0.000910 | 0.141948 | prompt_format_sensitivity/record_extraction/csv | …␠by␠2026-07-11.,{"ticket_id":"415","owner":"Nia","city":"Porto","date":"2026-07-11","assets":["bridges"],"quantity":4} | \|":\| | \|":\| |
| electrical | text/word | 26 | 260 | 0.001074 | 0.000600 | 0.000474 | 0.123329 | prompt_format_sensitivity/mcqa_science/python_repl | …rial␠is␠a␠good␠electrical␠conductor?\\nA.␠Rubber\\nB.␠Copper\\nC.␠Glass\\nD.␠Wood")⏎Copper␠is␠a␠good␠electrical␠conductor. | \|…electrical\| | \|…electrical\| |
| news | text/word | 52 | 208 | 0.001495 | 0.000977 | 0.000518 | 0.107797 | prompt_format_sensitivity/news_classification/json_object | …lture␠news"}⏎⏎{"input":␠"The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.",␠"output":␠Politics␠and␠government␠news | \|…news\| | \|…news\| |
| most | text/word | 52 | 208 | 0.001005 | 0.000495 | 0.000510 | 0.106020 | prompt_format_sensitivity/short_factual_qa/colon_mapping | …st␠mammal.⏎⏎Input:␠Which␠planet␠has␠the␠most␠prominent␠ring␠system?⏎Output:␠Saturn␠has␠the␠most␠prominent␠ring␠system. | \|…most\| | \|…most\| |
| quantity | text/word | 78 | 624 | 0.000164 | 0.000016 | 0.000148 | 0.092085 | prompt_format_sensitivity/record_extraction/csv | …␠Busan␠on␠2026-08-22.,{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} | \|quantity\| | \|quantity\| |
| tripods | text/word | 26 | 182 | 0.000618 | 0.000181 | 0.000437 | 0.079450 | prompt_format_sensitivity/record_extraction/tsv | …␠Busan␠on␠2026-08-22.⇥{"batch_id":"63","city":"Busan","date":"2026-08-22","items":["cameras","tripods"],"quantity":10} | \|trip\|ods\| | \|trip\|ods\| |
| sensors | text/word | 26 | 182 | 0.000480 | 0.000051 | 0.000429 | 0.078072 | prompt_format_sensitivity/record_extraction/html_dl | …-03.</dt><dd>{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":["sensors"],"quantity":9} | \|s\|ensors\| | \|s\|ensors\| |
| technology | text/word | 26 | 260 | 0.000587 | 0.000326 | 0.000261 | 0.067973 | prompt_format_sensitivity/news_classification/jsonl | …⏎{"input":␠"The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.",␠"output":␠Science␠and␠technology␠news | \|…technology\| | \|…technology\| |
| ORANGE | text/word | 26 | 156 | 0.000427 | 0.000026 | 0.000400 | 0.062453 | prompt_format_sensitivity/string_transformation/json_object | …r=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=west;␠id=108;␠color=orange",␠"output":␠WEST-0108-ORANGE | \|OR\|ANGE\| | \|OR\|ANGE\| |

## Top Literals: Model B Worse

Representative token boundaries come from the highest-gap occurrence for each literal. `|` marks token boundaries for each model; an ellipsis means the token continues outside the literal boundary in that example.

| name | bucket | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | example_dataset | example_doc_preview | model_a_token_boundaries | model_b_token_boundaries |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Politics | text/word | 26 | 208 | 0.336410 | 0.654343 | -0.317932 | -66.129958 | prompt_format_sensitivity/news_classification/jsonl | …lture␠news"}⏎⏎{"input":␠"The␠mayor␠proposed␠new␠rules␠for␠short-term␠rentals.",␠"output":␠Politics␠and␠government␠news | \|…Politics\| | \|…Politics\| |
| Ottawa | text/word | 26 | 156 | 0.249647 | 0.642379 | -0.392733 | -61.266275 | prompt_format_sensitivity/short_factual_qa/json_object | …␠is␠the␠largest␠mammal."}⏎⏎{"input":␠"What␠city␠is␠the␠capital␠of␠Canada?",␠"output":␠Ottawa␠is␠the␠capital␠of␠Canada. | \|…Ottawa\| | \|…Ottawa\| |
| Copper | text/word | 26 | 156 | 0.312309 | 0.599245 | -0.286936 | -44.762053 | prompt_format_sensitivity/mcqa_science/shell_transcript | …rial␠is␠a␠good␠electrical␠conductor?⏎A.␠Rubber⏎B.␠Copper⏎C.␠Glass⏎D.␠Wood⏎INPUT⏎Copper␠is␠a␠good␠electrical␠conductor. | \|C\|opper\| | \|C\|opper\| |
| Science | text/word | 26 | 182 | 0.321853 | 0.501072 | -0.179219 | -32.617834 | prompt_format_sensitivity/news_classification/key_value_block | …e␠news⏎⏎input:⏎The␠software␠company␠released␠a␠smaller␠language␠model␠for␠phones.⏎⏎output:⏎Science␠and␠technology␠news | \|Science\| | \|Science\| |
| Leonardo | text/word | 26 | 208 | 0.211204 | 0.365644 | -0.154440 | -32.123499 | prompt_format_sensitivity/short_factual_qa/json_object | …e␠is␠the␠largest␠mammal."}⏎⏎{"input":␠"Who␠painted␠the␠Mona␠Lisa?",␠"output":␠Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. | \|…Leonardo\| | \|…Leonardo\| |
| Sports | text/word | 26 | 156 | 0.269215 | 0.453463 | -0.184248 | -28.742624 | prompt_format_sensitivity/news_classification/json_object | …"Arts␠and␠culture␠news"}⏎⏎{"input":␠"The␠tennis␠final␠was␠delayed␠by␠heavy␠rain.",␠"output":␠Sports␠competition␠report | \|…Sports\| | \|…Sports\| |
| WEST | text/word | 26 | 104 | 0.446599 | 0.631032 | -0.184433 | -19.181043 | prompt_format_sensitivity/string_transformation/jsonl | …r=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=west;␠id=108;␠color=orange",␠"output":␠WEST-0108-ORANGE | \|…WEST\| | \|…WEST\| |
| EAST | text/word | 26 | 104 | 0.428254 | 0.581110 | -0.152856 | -15.896985 | prompt_format_sensitivity/string_transformation/jsonl | …lor=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=east;␠id=901;␠color=black",␠"output":␠EAST-0901-BLACK | \|…EAST\| | \|…EAST\| |
| Saturn | text/word | 26 | 156 | 0.284058 | 0.385499 | -0.101441 | -15.824806 | prompt_format_sensitivity/short_factual_qa/s_expression | …(example␠(input␠"Which␠planet␠has␠the␠most␠prominent␠ring␠system?")␠(output␠Saturn␠has␠the␠most␠prominent␠ring␠system. | \|…Saturn\| | \|…Saturn\| |
| owner | text/word | 52 | 260 | 0.022813 | 0.080606 | -0.057793 | -15.026185 | prompt_format_sensitivity/record_extraction/json_object | …for␠Jules␠on␠2026-06-03.",␠"output":␠{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","items":[… | \|owner\| | \|owner\| |
| {" | text/punctuation | 78 | 156 | 0.975682 | 1.070386 | -0.094705 | -14.773917 | prompt_format_sensitivity/record_extraction/key_value_block | …␠2␠cameras␠and␠8␠tripods␠to␠Busan␠on␠2026-08-22.⏎⏎output:⏎{"batch_id":"63","city":"Busan","date":"2026-08-22","items":… | \|{"\| | \|{"\| |
| soil | text/word | 26 | 104 | 0.106852 | 0.177955 | -0.071103 | -7.394688 | prompt_format_sensitivity/mcqa_science/problem_solution | …␠of␠a␠plant␠takes␠in␠water␠from␠soil?⏎A.␠Flower⏎B.␠Root⏎C.␠Petal⏎D.␠Seed⏎⏎Solution:⏎The␠root␠takes␠in␠water␠from␠soil. | \|…soil\| | \|…soil\| |
| NORTH | text/word | 26 | 130 | 0.407667 | 0.462769 | -0.055103 | -7.163355 | prompt_format_sensitivity/string_transformation/jsonl | …=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=north;␠id=64;␠color=silver",␠"output":␠NORTH-0064-SILVER | \|…NORTH\| | \|…NORTH\| |
| The | text/word | 52 | 156 | 0.644933 | 0.681587 | -0.036655 | -5.718107 | prompt_format_sensitivity/mcqa_science/key_value_block | …rt␠of␠a␠plant␠takes␠in␠water␠from␠soil?⏎A.␠Flower⏎B.␠Root⏎C.␠Petal⏎D.␠Seed⏎⏎output:⏎The␠root␠takes␠in␠water␠from␠soil. | \|The\| | \|The\| |
| Sun | text/word | 26 | 78 | 0.081104 | 0.128403 | -0.047299 | -3.689314 | prompt_format_sensitivity/mcqa_science/python_doctest | …stial␠body␠gives␠Earth␠most␠of␠its␠light?⏎A.␠Moon⏎B.␠Sun⏎C.␠Mars⏎D.␠Polaris""")⏎The␠Sun␠gives␠Earth␠most␠of␠its␠light. | \|…Sun\| | \|…Sun\| |
| competition | text/word | 26 | 286 | 0.013029 | 0.025109 | -0.012080 | -3.454764 | prompt_format_sensitivity/news_classification/problem_solution | …tion:⏎Arts␠and␠culture␠news⏎⏎Problem:⏎The␠tennis␠final␠was␠delayed␠by␠heavy␠rain.⏎⏎Solution:⏎Sports␠competition␠report | \|…competition\| | \|…competition\| |
| ␠ | whitespace/single_space | 1118 | 1118 | 0.010816 | 0.012482 | -0.001666 | -1.862613 | prompt_format_sensitivity/short_factual_qa/s_expression | …the␠largest␠mammal."))⏎⏎(example␠(input␠"Who␠painted␠the␠Mona␠Lisa?")␠(output␠Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. | \|␠…\| | \|␠…\| |
| 29 | text/number | 26 | 52 | 0.003515 | 0.030625 | -0.027110 | -1.409740 | prompt_format_sensitivity/python_repl/problem_solution | …olution:⏎alpha⏎⏎Problem:⏎{'a':␠2,␠'b':␠5}['b']␠*␠3⏎⏎Solution:⏎15⏎⏎Problem:⏎sum(x␠*␠x␠for␠x␠in␠[2,␠3,␠4])⏎⏎Solution:⏎29 | \|29\| | \|2\|9\| |
| Earth | text/word | 26 | 130 | 0.003604 | 0.011425 | -0.007821 | -1.016793 | prompt_format_sensitivity/mcqa_science/s_expression | …␠gives␠Earth␠most␠of␠its␠light?\\nA.␠Moon\\nB.␠Sun\\nC.␠Mars\\nD.␠Polaris")␠(output␠The␠Sun␠gives␠Earth␠most␠of␠its␠light. | \|…Earth\| | \|…Earth\| |
| gives | text/word | 26 | 130 | 0.004920 | 0.011969 | -0.007049 | -0.916358 | prompt_format_sensitivity/mcqa_science/json_object | …ives␠Earth␠most␠of␠its␠light?\\nA.␠Moon\\nB.␠Sun\\nC.␠Mars\\nD.␠Polaris",␠"output":␠The␠Sun␠gives␠Earth␠most␠of␠its␠light. | \|…gives\| | \|…gives\| |
| root | text/word | 26 | 104 | 0.012060 | 0.020105 | -0.008045 | -0.836660 | prompt_format_sensitivity/mcqa_science/json_object | …␠plant␠takes␠in␠water␠from␠soil?\\nA.␠Flower\\nB.␠Root\\nC.␠Petal\\nD.␠Seed",␠"output":␠The␠root␠takes␠in␠water␠from␠soil. | \|…root\| | \|…root\| |
| of | text/word | 52 | 104 | 0.006317 | 0.010641 | -0.004323 | -0.449627 | prompt_format_sensitivity/short_factual_qa/plain_arrow | …mal?⏎->␠The␠blue␠whale␠is␠the␠largest␠mammal.⏎⏎What␠city␠is␠the␠capital␠of␠Canada?⏎->␠Ottawa␠is␠the␠capital␠of␠Canada. | \|…of\| | \|…of\| |
| 0108 | text/number | 26 | 104 | 0.001716 | 0.005386 | -0.003670 | -0.381696 | prompt_format_sensitivity/string_transformation/jsonl | …r=purple",␠"output":␠"CENTRAL-0005-PURPLE"}⏎⏎{"input":␠"region=west;␠id=108;␠color=orange",␠"output":␠WEST-0108-ORANGE | \|010\|8\| | \|0\|1\|0\|8\| |
| da | text/word | 26 | 52 | 0.014155 | 0.015935 | -0.001780 | -0.092578 | prompt_format_sensitivity/short_factual_qa/s_expression | …the␠largest␠mammal."))⏎⏎(example␠(input␠"Who␠painted␠the␠Mona␠Lisa?")␠(output␠Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. | \|…da\| | \|…da\| |
| painted | text/word | 26 | 182 | 0.001223 | 0.001731 | -0.000508 | -0.092451 | prompt_format_sensitivity/short_factual_qa/s_expression | …the␠largest␠mammal."))⏎⏎(example␠(input␠"Who␠painted␠the␠Mona␠Lisa?")␠(output␠Leonardo␠da␠Vinci␠painted␠the␠Mona␠Lisa. | \|…painted\| | \|…painted\| |
| Canada | text/word | 26 | 156 | 0.000150 | 0.000449 | -0.000299 | -0.046673 | prompt_format_sensitivity/short_factual_qa/ini | …le␠is␠the␠largest␠mammal.⏎⏎[example]⏎input=What␠city␠is␠the␠capital␠of␠Canada?⏎output=Ottawa␠is␠the␠capital␠of␠Canada. | \|…Canada\| | \|…Canada\| |
| 2880 | text/number | 26 | 104 | 0.000090 | 0.000138 | -0.000048 | -0.005007 | prompt_format_sensitivity/record_extraction/html_dl | …to␠Tallinn␠for␠Jules␠on␠2026-06-03.</dt><dd>{"order_id":"2880","owner":"Jules","city":"Tallinn","date":"2026-06-03","i… | \|288\|0\| | \|2\|8\|8\|0\| |
| water | text/word | 26 | 130 | 0.000049 | 0.000056 | -0.000007 | -0.000960 | prompt_format_sensitivity/mcqa_science/json_object | …␠plant␠takes␠in␠water␠from␠soil?\\nA.␠Flower\\nB.␠Root\\nC.␠Petal\\nD.␠Seed",␠"output":␠The␠root␠takes␠in␠water␠from␠soil. | \|…water\| | \|…water\| |
