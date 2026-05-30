# Perplexity Gap Report

**Model A:** marin-community/marin-32b-base

**Model B:** Qwen/Qwen3-32B

## Datasets

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| fineweb2_multilingual/snd_Arab | 256 | 1190739 | 1.535303 | 0.883846 | 0.651457 | 775715.384075 |
| fineweb2_multilingual/kaz_Cyrl | 256 | 1638274 | 1.096549 | 0.640917 | 0.455632 | 746449.812737 |
| fineweb2_multilingual/kat_Geor | 256 | 1743619 | 0.797539 | 0.479801 | 0.317737 | 554013.113593 |
| bio_chem/uniprot/uniprot_sprot_dat | 256 | 3102742 | 0.773431 | 0.597958 | 0.175472 | 544445.412948 |
| fineweb2_multilingual/lit_Latn | 256 | 1024151 | 1.487528 | 1.019648 | 0.467880 | 479180.174752 |
| fineweb2_multilingual/srp_Cyrl | 256 | 1454893 | 0.964076 | 0.637255 | 0.326821 | 475490.169604 |
| fineweb2_multilingual/azj_Latn | 256 | 895617 | 1.356138 | 0.937885 | 0.418253 | 374594.879536 |
| fineweb2_multilingual/hun_Latn | 256 | 1007373 | 1.294781 | 0.955621 | 0.339160 | 341660.723941 |
| fineweb2_multilingual/sin_Sinh | 256 | 1993722 | 0.852659 | 0.682062 | 0.170598 | 340124.121750 |
| fineweb2_multilingual/lvs_Latn | 256 | 733076 | 1.436577 | 0.975059 | 0.461518 | 338328.057067 |
| fineweb2_multilingual/hrv_Latn | 256 | 1395834 | 1.263019 | 1.022096 | 0.240923 | 336288.529910 |
| fineweb2_multilingual/arb_Arab | 256 | 1286134 | 0.856587 | 0.607364 | 0.249223 | 320534.180011 |
| fineweb2_multilingual/tel_Telu | 256 | 1880846 | 0.611514 | 0.454532 | 0.156981 | 295257.587489 |
| fineweb2_multilingual/npi_Deva | 256 | 1516762 | 0.660333 | 0.473057 | 0.187276 | 284052.753617 |
| fineweb2_multilingual/mai_Deva | 232 | 1676423 | 0.909183 | 0.740355 | 0.168828 | 283026.713408 |
| bio_chem/pubchem/pubchem_sdf | 256 | 4676576 | 0.472801 | 0.412903 | 0.059898 | 280116.501670 |
| fineweb2_multilingual/vie_Latn | 256 | 1397947 | 0.835082 | 0.635608 | 0.199474 | 278853.986971 |
| bio_chem/rcsb/rcsb_mmcif | 51 | 1669561 | 0.380403 | 0.214964 | 0.165439 | 276210.187587 |
| fineweb2_multilingual/san_Deva | 233 | 2278485 | 0.749954 | 0.628979 | 0.120974 | 275638.318922 |
| fineweb2_multilingual/mkd_Cyrl | 256 | 963670 | 0.858567 | 0.574070 | 0.284497 | 274161.379516 |
| fineweb2_multilingual/ekk_Latn | 256 | 778278 | 1.602314 | 1.250932 | 0.351383 | 273473.402680 |
| fineweb2_multilingual/als_Latn | 256 | 587355 | 1.557249 | 1.095480 | 0.461769 | 271222.427695 |
| fineweb2_multilingual/urd_Arab | 256 | 1069004 | 0.897434 | 0.643817 | 0.253617 | 271117.914344 |
| paloma/m2d2_s2orc_unsplit | 167 | 5472253 | 0.577298 | 0.626573 | -0.049275 | -269647.921859 |
| fineweb2_multilingual/mal_Mlym | 256 | 2072961 | 0.561258 | 0.432771 | 0.128486 | 266347.237930 |
| bio_chem/chembl/chembl_sdf | 256 | 4667923 | 0.443909 | 0.388070 | 0.055839 | 260653.072853 |
| fineweb2_multilingual/asm_Beng | 256 | 1630111 | 0.689022 | 0.533560 | 0.155462 | 253419.937922 |
| fineweb2_multilingual/tha_Thai | 256 | 1896224 | 0.527275 | 0.395472 | 0.131804 | 249928.964185 |
| fineweb2_multilingual/guj_Gujr | 256 | 1578310 | 0.656235 | 0.503930 | 0.152306 | 240385.532117 |
| fineweb2_multilingual/slv_Latn | 256 | 822455 | 1.323642 | 1.031912 | 0.291730 | 239935.109353 |
| fineweb2_multilingual/tam_Taml | 256 | 2095015 | 0.514816 | 0.400362 | 0.114455 | 239784.216855 |
| fineweb2_multilingual/mar_Deva | 256 | 1810917 | 0.579047 | 0.448889 | 0.130157 | 235704.070823 |
| fineweb2_multilingual/cmn_Hani | 256 | 1002238 | 1.348307 | 1.119102 | 0.229205 | 229717.692710 |
| fineweb2_multilingual/kan_Knda | 256 | 1621756 | 0.610101 | 0.470122 | 0.139979 | 227012.297578 |
| fineweb2_multilingual/ukr_Cyrl | 256 | 1349243 | 0.658950 | 0.493197 | 0.165753 | 223640.450367 |
| fineweb2_multilingual/ben_Beng | 256 | 1762108 | 0.548667 | 0.422112 | 0.126554 | 223002.498256 |
| fineweb2_multilingual/kor_Hang | 256 | 923709 | 0.986194 | 0.763178 | 0.223016 | 206001.523090 |
| long_tail_ppl/code_ecosystem/stack_v2_json | 224 | 1535135 | 0.914300 | 0.782180 | 0.132121 | 202823.331177 |
| fineweb2_multilingual/fas_Arab | 256 | 1512436 | 0.775616 | 0.649632 | 0.125984 | 190542.870201 |
| paloma/m2d2_wikipedia_unsplit | 49 | 1605632 | 0.572730 | 0.688642 | -0.115911 | -186110.749571 |
| fineweb2_multilingual/bul_Cyrl | 256 | 1256872 | 0.693235 | 0.545266 | 0.147970 | 185978.877353 |
| fineweb2_multilingual/isl_Latn | 256 | 706172 | 1.570200 | 1.312529 | 0.257671 | 181959.731832 |
| fineweb2_multilingual/bos_Latn | 256 | 746428 | 1.276610 | 1.035160 | 0.241450 | 180224.715063 |
| fineweb2_multilingual/slk_Latn | 256 | 669166 | 1.239395 | 0.970234 | 0.269161 | 180113.507037 |
| fineweb2_multilingual/pan_Guru | 256 | 1513842 | 0.618509 | 0.503127 | 0.115382 | 174670.726458 |
| fineweb2_multilingual/ory_Orya | 256 | 1132886 | 0.619812 | 0.479209 | 0.140604 | 159288.082679 |
| paloma/manosphere_meta_sep | 256 | 1000476 | 0.831861 | 0.990129 | -0.158268 | -158343.112748 |
| bio_chem/uniprot/uniprot_sprot_fasta | 256 | 2128309 | 2.055718 | 1.982851 | 0.072867 | 155084.125566 |
| bio_chem/chembl/chembl_chemreps | 256 | 1166963 | 1.114351 | 0.982500 | 0.131851 | 153865.259924 |
| fineweb2_multilingual/bho_Deva | 199 | 991636 | 0.859856 | 0.706632 | 0.153224 | 151942.646250 |
| diagnostic_logs/ghalogs_issue_5093_holdout | 111 | 3160781 | 2.710941 | 2.757363 | -0.046422 | -146730.395597 |
| fineweb2_multilingual/jpn_Jpan | 256 | 917844 | 0.966105 | 0.808608 | 0.157497 | 144557.227373 |
| paloma/4chan | 256 | 1067444 | 0.821866 | 0.952846 | -0.130980 | -139813.498380 |
| fineweb2_multilingual/new_Deva | 180 | 1207399 | 0.952650 | 0.839335 | 0.113314 | 136815.809572 |
| fineweb2_multilingual/zsm_Latn | 256 | 1028425 | 1.024529 | 0.893405 | 0.131124 | 134851.295157 |
| fineweb2_multilingual/hne_Deva | 143 | 847488 | 0.922062 | 0.764167 | 0.157895 | 133813.915523 |
| fineweb2_multilingual/ind_Latn | 256 | 1015559 | 0.890739 | 0.758978 | 0.131761 | 133810.964176 |
| fineweb2_multilingual/heb_Hebr | 256 | 1310615 | 0.929213 | 0.827664 | 0.101550 | 133092.390646 |
| fineweb2_multilingual/hin_Deva | 256 | 1557780 | 0.494857 | 0.411384 | 0.083473 | 130032.798606 |
| paloma/wikitext_103 | 59 | 987693 | 0.526438 | 0.656190 | -0.129753 | -128155.788159 |
| fineweb2_multilingual/pol_Latn | 256 | 842265 | 1.012215 | 0.860180 | 0.152034 | 128053.274038 |
| bio_chem/refseq/refseq_viral_fasta | 256 | 3400185 | 1.900994 | 1.937883 | -0.036889 | -125428.024008 |
| uncheatable_eval/ao3_english | 256 | 1223044 | 0.773171 | 0.858676 | -0.085506 | -104577.203162 |
| fineweb2_multilingual/glg_Latn | 256 | 636799 | 1.083537 | 0.926483 | 0.157053 | 100011.497643 |
| paloma/dolma-v1_5 | 256 | 858825 | 0.685130 | 0.800131 | -0.115002 | -98766.487281 |
| gh_archive_structured_output/PullRequestEvent | 256 | 5008728 | 0.155160 | 0.137308 | 0.017852 | 89415.387932 |
| paloma/falcon-refinedweb | 256 | 700803 | 0.669666 | 0.796359 | -0.126693 | -88786.697500 |
| fineweb2_multilingual/rus_Cyrl | 256 | 1420436 | 0.530097 | 0.467609 | 0.062488 | 88760.277744 |
| paloma/mc4 | 256 | 974819 | 0.621711 | 0.712388 | -0.090677 | -88393.637434 |
| fineweb2_multilingual/ron_Latn | 256 | 899610 | 0.999353 | 0.901392 | 0.097961 | 88126.656741 |
| fineweb2_multilingual/ita_Latn | 256 | 825217 | 0.919523 | 0.813561 | 0.105962 | 87441.933957 |
| paloma/c4_100_domains | 256 | 744402 | 0.663057 | 0.779438 | -0.116382 | -86634.735743 |
| fineweb2_multilingual/div_Thaa | 256 | 1098690 | 1.313613 | 1.234915 | 0.078698 | 86465.011705 |
| fineweb2_multilingual/cat_Latn | 256 | 657750 | 1.014584 | 0.884532 | 0.130052 | 85541.439857 |
| uncheatable_eval/bbc_news | 256 | 841249 | 0.618173 | 0.707094 | -0.088921 | -74804.433507 |
| raw_web_markup/common_crawl/warc | 256 | 2101130 | 0.550891 | 0.515700 | 0.035191 | 73941.855979 |
| paloma/redpajama | 256 | 887837 | 0.615545 | 0.698697 | -0.083151 | -73824.904492 |
| structured_text/totto | 256 | 582125 | 0.607101 | 0.730137 | -0.123036 | -71622.579037 |
| long_tail_ppl/code_ecosystem/stack_v2_assembly | 256 | 1232929 | 0.369678 | 0.427637 | -0.057959 | -71459.417097 |
| fineweb2_multilingual/por_Latn | 256 | 707637 | 0.901293 | 0.807346 | 0.093947 | 66480.126861 |
| long_tail_ppl_runnable/web_markup_image_text/svg_stack_test | 256 | 593175 | 0.875796 | 0.770387 | 0.105410 | 62526.515198 |
| raw_web_markup/svg_stack/svg_xml_test | 256 | 593175 | 0.875796 | 0.770387 | 0.105410 | 62526.515198 |
| long_tail_ppl/code_ecosystem/stack_v2_html | 256 | 2115527 | 0.446468 | 0.416978 | 0.029490 | 62385.882279 |
| fineweb2_multilingual/gom_Deva | 56 | 437688 | 0.908832 | 0.781717 | 0.127115 | 55636.635326 |
| paloma/c4_en | 256 | 523373 | 0.664946 | 0.769540 | -0.104594 | -54741.834180 |
| long_tail_ppl_runnable/web_markup_image_text/svg_stack_val | 256 | 530695 | 0.843309 | 0.744951 | 0.098358 | 52198.311219 |
| raw_web_markup/svg_stack/svg_xml_val | 256 | 530695 | 0.843309 | 0.744951 | 0.098358 | 52198.311219 |
| uncheatable_eval/wikipedia_english | 256 | 635606 | 0.604842 | 0.682241 | -0.077399 | -49195.211169 |
| long_tail_ppl/code_ecosystem/stack_v2_vue | 256 | 1066691 | 0.283842 | 0.239647 | 0.044195 | 47142.321732 |
| bio_chem/moleculenet/moleculenet_clintox_smiles | 96 | 410728 | 0.604674 | 0.490532 | 0.114142 | 46881.148331 |
| uncheatable_eval/github_python | 256 | 1006410 | 0.322999 | 0.278618 | 0.044380 | 44664.764972 |
| uncheatable_eval/github_cpp | 256 | 876685 | 0.309825 | 0.259151 | 0.050674 | 44425.338364 |
| gh_archive_structured_output/IssuesEvent | 256 | 1078449 | 0.341149 | 0.301115 | 0.040033 | 43174.066638 |
| bio_chem/pubchem/pubchem_cid_smiles | 66 | 269899 | 0.983154 | 0.828126 | 0.155027 | 41841.706587 |
| long_tail_ppl/code_ecosystem/stack_v2_scala | 256 | 761031 | 0.282668 | 0.229740 | 0.052928 | 40279.992505 |
| structured_text/wikitablequestions | 256 | 471371 | 0.657023 | 0.740892 | -0.083869 | -39533.470168 |
| gh_archive_structured_output/IssueCommentEvent | 256 | 2681436 | 0.312819 | 0.298661 | 0.014157 | 37962.228116 |
| fineweb2_multilingual/sat_Olck | 21 | 138147 | 1.244198 | 0.993130 | 0.251068 | 34684.301113 |
| long_tail_ppl/code_ecosystem/stack_v2_perl | 256 | 1566271 | 0.401754 | 0.379684 | 0.022071 | 34568.407331 |
| long_tail_ppl/code_ecosystem/stack_v2_xml | 173 | 1374432 | 0.434603 | 0.409781 | 0.024822 | 34115.487835 |
| long_tail_ppl/code_ecosystem/stack_v2_tex | 256 | 1911653 | 0.494877 | 0.478342 | 0.016535 | 31609.499808 |
| fineweb2_multilingual/deu_Latn | 256 | 681226 | 0.853170 | 0.808931 | 0.044239 | 30137.026508 |
| formal_methods/tptp | 256 | 1595080 | 0.183276 | 0.165071 | 0.018205 | 29038.075584 |
| fineweb2_multilingual/dan_Latn | 256 | 665640 | 1.050900 | 1.007955 | 0.042945 | 28586.231765 |
| synthetic_reasoning_ppl/stepmath/algebra_linear_equation | 256 | 339439 | 0.149878 | 0.067355 | 0.082523 | 28011.383853 |
| synthetic_reasoning_ppl/stepmath/algebra_linear_equation_3shot_icl | 256 | 339439 | 0.149878 | 0.067355 | 0.082523 | 28011.383853 |
| fineweb2_multilingual/nld_Latn | 256 | 600203 | 0.958173 | 0.912385 | 0.045788 | 27482.020884 |
| uncheatable_eval/arxiv_physics | 256 | 1282105 | 0.562328 | 0.581889 | -0.019562 | -25080.035321 |
| fineweb2_multilingual/anp_Deva | 60 | 307339 | 0.458620 | 0.379214 | 0.079406 | 24404.489901 |
| paloma/dolma_100_subreddits | 256 | 204005 | 0.831155 | 0.950763 | -0.119609 | -24400.756391 |
| binary_network_security/uwf_zeek | 256 | 127072 | 1.900269 | 1.716878 | 0.183391 | 23303.920923 |
| fineweb2_multilingual/swe_Latn | 256 | 557706 | 1.035646 | 0.994432 | 0.041214 | 22985.392239 |
| long_tail_ppl/code_ecosystem/stack_v2_javascript | 256 | 901009 | 0.384140 | 0.359589 | 0.024551 | 22121.067216 |
| long_tail_ppl/code_ecosystem/stack_v2_java | 256 | 1141187 | 0.222411 | 0.203104 | 0.019307 | 22032.619396 |
| long_tail_ppl/code_ecosystem/stack_v2_markdown | 256 | 1005783 | 0.610134 | 0.631759 | -0.021625 | -21750.197177 |
| long_tail_ppl/code_ecosystem/stack_v2_mathematica | 29 | 540685 | 0.970504 | 0.930669 | 0.039836 | 21538.572173 |
| gh_archive_structured_output/PushEvent | 256 | 238527 | 0.706446 | 0.617041 | 0.089404 | 21325.382389 |
| fineweb2_multilingual/awa_Deva | 23 | 133480 | 0.904609 | 0.748948 | 0.155661 | 20777.674479 |
| long_tail_ppl/code_ecosystem/stack_v2_php | 256 | 844761 | 0.304596 | 0.280396 | 0.024201 | 20443.876103 |
| uncheatable_eval/arxiv_computer_science | 256 | 1237838 | 0.566623 | 0.583055 | -0.016431 | -20339.227808 |
| long_tail_ppl/code_ecosystem/stack_v2_typescript | 256 | 668847 | 0.293280 | 0.264225 | 0.029055 | 19433.372311 |
| raw_web_markup/common_crawl/wat | 256 | 1416856 | 0.633899 | 0.621124 | 0.012774 | 18099.381656 |
| fineweb2_multilingual/brx_Deva | 38 | 138432 | 1.091018 | 0.961927 | 0.129090 | 17870.241429 |
| long_tail_ppl/code_ecosystem/stack_v2_c | 249 | 1585788 | 0.365128 | 0.354458 | 0.010670 | 16920.593528 |
| fineweb2_multilingual/fra_Latn | 256 | 826860 | 0.742411 | 0.721969 | 0.020442 | 16902.921300 |
| fineweb2_multilingual/fin_Latn | 256 | 874277 | 1.091812 | 1.110586 | -0.018774 | -16413.673558 |
| diagnostic_logs/logchunks_eval | 256 | 422514 | 0.380277 | 0.341894 | 0.038383 | 16217.458726 |
| long_tail_ppl/code_ecosystem/stack_v2_abap | 64 | 361008 | 0.326081 | 0.282061 | 0.044020 | 15891.744476 |
| long_tail_ppl/code_ecosystem/stack_v2_c_sharp | 256 | 1040743 | 0.214517 | 0.199390 | 0.015127 | 15743.211919 |
| synthetic_reasoning_ppl/native/n_queens_backtracking | 256 | 894900 | 0.069766 | 0.052338 | 0.017428 | 15596.262474 |
| synthetic_reasoning_ppl/native/n_queens_backtracking_1shot_icl | 256 | 894900 | 0.069766 | 0.052338 | 0.017428 | 15596.262474 |
| structured_text/gittables | 256 | 1028512 | 0.849867 | 0.836459 | 0.013408 | 13790.348112 |
| long_tail_ppl/code_ecosystem/stack_v2_antlr | 57 | 345338 | 0.309026 | 0.269185 | 0.039841 | 13758.778930 |
| lm_eval/gsm8k_train | 256 | 68195 | 0.112389 | 0.313033 | -0.200643 | -13682.880429 |
| diagnostic_logs/loghub_eval | 16 | 524288 | 0.304153 | 0.328166 | -0.024013 | -12589.545018 |
| synthetic_science_markup_ppl/scientific_records/genbank_feature_record | 256 | 50432 | 0.880034 | 0.636425 | 0.243609 | 12285.711578 |
| raw_web_markup/ocr_vqa/ocr_info_json_validation | 256 | 624497 | 0.474290 | 0.455617 | 0.018673 | 11661.077762 |
| long_tail_ppl/code_ecosystem/stack_v2_ruby | 256 | 584938 | 0.324204 | 0.304923 | 0.019281 | 11277.939179 |
| game_music/irishman_abc | 256 | 72959 | 1.550430 | 1.698809 | -0.148379 | -10825.567651 |
| raw_web_markup/ocr_vqa/book_metadata_validation | 256 | 65840 | 0.975842 | 1.129675 | -0.153833 | -10128.344280 |
| raw_web_markup/textocr/ocr_strings | 256 | 53066 | 1.638403 | 1.822791 | -0.184387 | -9784.697550 |
| synthetic_reasoning_ppl/clrs_style/clrs_floyd_warshall | 256 | 236130 | 0.239629 | 0.199877 | 0.039752 | 9386.660462 |
| synthetic_numeric_format_ppl/format_transforms/format_preserving_transforms | 256 | 13227 | 0.096187 | 0.765778 | -0.669590 | -8856.671768 |
| fineweb2_multilingual/mni_Beng | 27 | 318380 | 0.958258 | 0.930500 | 0.027759 | 8837.810103 |
| long_tail_ppl/code_ecosystem/stack_v2_python | 256 | 1088118 | 0.306974 | 0.298862 | 0.008112 | 8827.144081 |
| synthetic_reasoning_ppl/native/kmp_string_search | 256 | 429145 | 0.106928 | 0.087126 | 0.019802 | 8497.763002 |
| synthetic_reasoning_ppl/native/kmp_string_search_1shot_icl | 256 | 429145 | 0.106928 | 0.087126 | 0.019802 | 8497.763002 |
| formal_methods/coqgym | 256 | 908699 | 0.446431 | 0.437690 | 0.008741 | 7943.145916 |
| synthetic_numeric_format_ppl/structured_records/tabular_tsv_csv | 256 | 6861 | 0.718774 | 1.808139 | -1.089365 | -7474.130159 |
| paloma/gab | 256 | 37599 | 1.236561 | 1.431234 | -0.194673 | -7319.510699 |
| synthetic_reasoning_ppl/native/floyd_warshall_apsp | 256 | 202027 | 0.210339 | 0.174404 | 0.035935 | 7259.756979 |
| paloma/dolma_100_programing_languages | 256 | 898445 | 0.394032 | 0.386089 | 0.007943 | 7136.169918 |
| synthetic_machine_records_ppl/config_manifests/dockerfile | 256 | 23040 | 0.821938 | 0.521851 | 0.300087 | 6914.001192 |
| synthetic_numeric_format_ppl/numeric_transduction/numeric_compare_sort | 256 | 8466 | 0.267850 | 0.993703 | -0.725853 | -6145.075283 |
| long_tail_ppl/code_ecosystem/stack_v2_css | 256 | 1022723 | 0.363471 | 0.369424 | -0.005953 | -6088.747214 |
| synthetic_numeric_format_ppl/chunk_boundary/chunk_boundary_stress | 256 | 7252 | 0.237136 | 1.064811 | -0.827675 | -6002.300874 |
| raw_web_markup/ocr_vqa/ocr_tokens_validation | 256 | 33378 | 2.380641 | 2.555775 | -0.175134 | -5845.607821 |
| raw_web_markup/ocr_vqa/question_context_validation | 256 | 86943 | 0.713525 | 0.780517 | -0.066991 | -5824.441799 |
| synthetic_reasoning_ppl/native/knapsack_01_dp | 112 | 265614 | 0.063048 | 0.041184 | 0.021864 | 5807.297679 |
| synthetic_reasoning_ppl/native/knapsack_01_dp_1shot_icl | 112 | 265614 | 0.063048 | 0.041184 | 0.021864 | 5807.297679 |
| synthetic_numeric_format_ppl/dense_numeric_blobs/mmcif_coordinate_tables | 256 | 16128 | 0.121351 | 0.481023 | -0.359672 | -5800.790472 |
| asr_ocr_noisy_ppl/hypr_librispeech_without_lm_test_clean/clean | 256 | 31537 | 1.106237 | 1.287005 | -0.180767 | -5700.857843 |
| synthetic_numeric_format_ppl/dense_numeric_blobs/svg_path_numeric_blobs | 256 | 21225 | 1.979478 | 2.247697 | -0.268220 | -5692.960512 |
| synthetic_numeric_format_ppl/numeric_transduction/numeric_copy_increment | 256 | 1597 | 1.185625 | 4.716539 | -3.530914 | -5638.869125 |
| fineweb2_multilingual/mag_Deva | 3 | 37283 | 0.895191 | 0.744806 | 0.150385 | 5606.796958 |
| asr_ocr_noisy_ppl/hypr_librispeech_without_lm_test_clean/noisy | 256 | 31506 | 1.160552 | 1.337944 | -0.177393 | -5588.928345 |
| fineweb2_multilingual/bpy_Beng | 18 | 64273 | 0.979572 | 0.894206 | 0.085366 | 5486.748377 |
| synthetic_reasoning_ppl/native/edit_distance_dp | 256 | 690254 | 0.060186 | 0.052327 | 0.007859 | 5424.795634 |
| synthetic_reasoning_ppl/native/edit_distance_dp_1shot_icl | 256 | 690254 | 0.060186 | 0.052327 | 0.007859 | 5424.795634 |
| bio_chem/moleculenet/moleculenet_esol_smiles | 9 | 34415 | 1.505976 | 1.348712 | 0.157263 | 5412.215588 |
| synthetic_numeric_format_ppl/numeric_transduction/numeric_range_checksum_base | 256 | 2120 | 1.926899 | 4.409950 | -2.483052 | -5264.069419 |
| long_tail_ppl/code_ecosystem/stack_v2_yaml | 256 | 1198543 | 0.310105 | 0.305730 | 0.004376 | 5244.390234 |
| synthetic_numeric_format_ppl/structured_records/network_ip_port_rows | 256 | 19917 | 0.576703 | 0.839249 | -0.262547 | -5229.144292 |
| synthetic_numeric_format_ppl/dense_numeric_blobs/json_numeric_arrays | 256 | 5892 | 0.488779 | 1.362305 | -0.873527 | -5146.819439 |
| synthetic_reasoning_ppl/native/lcs_dp | 256 | 682884 | 0.060472 | 0.053350 | 0.007122 | 4863.611766 |
| synthetic_reasoning_ppl/native/lcs_dp_1shot_icl | 256 | 682884 | 0.060472 | 0.053350 | 0.007122 | 4863.611766 |
| fineweb2_multilingual/tcy_Knda | 4 | 56618 | 1.015110 | 0.930622 | 0.084488 | 4783.524787 |
| formal_methods/dimacs_cnf | 13 | 425984 | 0.239466 | 0.228659 | 0.010807 | 4603.715067 |
| synthetic_science_markup_ppl/scientific_records/sdf_record_closure | 256 | 8596 | 2.209033 | 1.675090 | 0.533942 | 4589.769551 |
| fineweb2_multilingual/snd_Deva | 6 | 42729 | 0.931635 | 0.829264 | 0.102371 | 4374.202967 |
| synthetic_patch_diff_ppl/file_path_line_refs | 256 | 26624 | 0.757375 | 0.912085 | -0.154710 | -4119.008025 |
| paloma/twitterAAE_HELM_fixed | 256 | 9649 | 2.233505 | 2.659092 | -0.425587 | -4106.489021 |
| synthetic_machine_records_ppl/config_manifests/pyproject_toml | 256 | 30354 | 0.737995 | 0.605814 | 0.132182 | 4012.248108 |
| synthetic_machine_records_ppl/trace_errors/compiler_errors | 256 | 26005 | 0.786342 | 0.940212 | -0.153870 | -4001.391247 |
| hardware_rtl/verilog_eval | 256 | 464820 | 0.686978 | 0.695445 | -0.008467 | -3935.807786 |
| synthetic_reasoning_ppl/clrs_style/clrs_lcs_length | 256 | 673567 | 0.062335 | 0.056509 | 0.005826 | 3923.949994 |
| fineweb2_multilingual/skr_Arab | 2 | 11653 | 1.519046 | 1.193100 | 0.325946 | 3798.248820 |
| bio_chem/rnacentral/rnacentral_active_fasta | 256 | 2545459 | 1.649496 | 1.650945 | -0.001448 | -3686.992943 |
| synthetic_identifier_encoding_ppl/encoded_text/data_image_base64_prefixes | 256 | 13056 | 6.119761 | 6.387375 | -0.267614 | -3493.970822 |
| fineweb2_multilingual/rav_Deva | 3 | 28660 | 0.969207 | 0.848487 | 0.120720 | 3459.845305 |
| paloma/ptb | 1 | 32768 | 0.713748 | 0.819122 | -0.105374 | -3452.880943 |
| synthetic_patch_diff_ppl/failing_test_trace_to_patch | 256 | 32000 | 0.109335 | 0.217197 | -0.107862 | -3451.596515 |
| long_tail_ppl/code_ecosystem/stack_v2_postscript | 12 | 274153 | 0.362738 | 0.350169 | 0.012570 | 3445.987312 |
| synthetic_reasoning_ppl/native/union_find_connectivity | 256 | 340536 | 0.035049 | 0.025231 | 0.009817 | 3343.194354 |
| synthetic_reasoning_ppl/native/union_find_connectivity_1shot_icl | 256 | 340536 | 0.035049 | 0.025231 | 0.009817 | 3343.194354 |
| synthetic_machine_records_ppl/service_logs/nginx_access_error | 256 | 12258 | 0.879782 | 0.607794 | 0.271987 | 3334.020602 |
| long_tail_ppl/code_ecosystem/stack_v2_objective_c | 256 | 866424 | 0.255461 | 0.251639 | 0.003823 | 3312.031286 |
| fineweb2_multilingual/suz_Deva | 4 | 34828 | 0.931690 | 0.837599 | 0.094092 | 3277.026045 |
| fineweb2_multilingual/thl_Deva | 2 | 41972 | 1.086709 | 1.009768 | 0.076940 | 3229.340508 |
| synthetic_science_markup_ppl/scientific_records/pdb_atom_records | 256 | 42496 | 0.721318 | 0.646238 | 0.075080 | 3190.594715 |
| synthetic_patch_diff_ppl/commit_message_metadata | 256 | 35840 | 1.479298 | 1.567640 | -0.088341 | -3166.151776 |
| synthetic_machine_records_ppl/config_manifests/github_actions_yaml | 256 | 31232 | 0.745587 | 0.644472 | 0.101116 | 3158.043764 |
| synthetic_science_markup_ppl/tree_closure/xml_tag_closure | 256 | 18426 | 1.503378 | 1.668137 | -0.164759 | -3035.850125 |
| synthetic_identifier_encoding_ppl/identifier_grammars/package_names_versions | 256 | 16750 | 2.355384 | 2.535952 | -0.180568 | -3024.513451 |
| synthetic_identifier_encoding_ppl/escaped_text/json_unicode_byte_escapes | 256 | 7632 | 2.297754 | 2.686916 | -0.389161 | -2970.080516 |
| long_tail_ppl/code_ecosystem/stack_v2_webassembly | 26 | 204234 | 0.557759 | 0.543247 | 0.014512 | 2963.845804 |
| synthetic_patch_diff_ppl/unified_diff_hunks | 256 | 48384 | 0.538903 | 0.599333 | -0.060430 | -2923.866822 |
| synthetic_reasoning_ppl/native/lis_dp | 256 | 238048 | 0.032772 | 0.020744 | 0.012028 | 2863.206289 |
| raw_web_markup/textocr/annotations_json | 256 | 1127491 | 1.061190 | 1.063709 | -0.002519 | -2840.550790 |
| synthetic_science_markup_ppl/tree_closure/entity_escaping | 256 | 9992 | 0.396331 | 0.119116 | 0.277215 | 2769.929552 |
| synthetic_reasoning_ppl/native/dijkstra_shortest_path | 256 | 155506 | 0.071579 | 0.054111 | 0.017468 | 2716.324070 |
| synthetic_reasoning_ppl/clrs_style/clrs_dijkstra | 256 | 151886 | 0.071929 | 0.054558 | 0.017371 | 2638.372456 |
| synthetic_reasoning_ppl/clrs_style/clrs_lis | 256 | 235292 | 0.031397 | 0.020318 | 0.011080 | 2607.023787 |
| synthetic_machine_records_ppl/ci_logs/github_actions_jobs | 256 | 8398 | 1.180995 | 0.881136 | 0.299860 | 2518.222114 |
| synthetic_reasoning_ppl/native/euclid_gcd | 256 | 84172 | 0.085530 | 0.056321 | 0.029209 | 2458.611077 |
| synthetic_reasoning_ppl/native/euclid_gcd_5shot_icl | 256 | 84172 | 0.085530 | 0.056321 | 0.029209 | 2458.611077 |
| long_tail_ppl_runnable/formal_hardware/verilogeval_prompt | 156 | 14070 | 0.950770 | 0.779703 | 0.171067 | 2406.906016 |
| asr_ocr_noisy_ppl/rtm_sgt_ocr_v1_train/clean | 256 | 38288 | 0.988037 | 1.049982 | -0.061945 | -2371.750090 |
| asr_ocr_noisy_ppl/rtm_sgt_ocr_v1_train/noisy | 256 | 35909 | 1.427266 | 1.491647 | -0.064380 | -2311.838760 |
| synthetic_reasoning_ppl/native/coin_change_dp | 256 | 946712 | 0.034080 | 0.036477 | -0.002397 | -2269.708015 |
| long_tail_ppl_runnable/formal_hardware/verilogeval_canonical_solution | 156 | 35043 | 0.703083 | 0.641029 | 0.062054 | 2174.557936 |
| fineweb2_multilingual/kle_Deva | 1 | 32767 | 0.998517 | 0.934734 | 0.063783 | 2089.964809 |
| synthetic_machine_records_ppl/config_manifests/package_json | 256 | 29842 | 0.862976 | 0.794842 | 0.068134 | 2033.245940 |
| structured_text/web_data_commons_sample1k | 256 | 208388 | 0.786046 | 0.795729 | -0.009683 | -2017.867915 |
| package_metadata/npm_registry_metadata | 20 | 50370 | 1.058405 | 1.020670 | 0.037735 | 1900.709308 |
| fineweb2_multilingual/taj_Deva | 3 | 41558 | 0.860497 | 0.815357 | 0.045140 | 1875.923289 |
| synthetic_identifier_encoding_ppl/escaped_text/url_query_escaping | 256 | 5071 | 1.947203 | 2.312217 | -0.365014 | -1850.987044 |
| synthetic_reasoning_ppl/clrs_style/clrs_insertion_sort | 256 | 283633 | 0.092333 | 0.085814 | 0.006520 | 1849.275480 |
| synthetic_science_markup_ppl/tree_closure/mathml_nested_tree | 256 | 18688 | 0.359581 | 0.261538 | 0.098043 | 1832.234027 |
| synthetic_science_markup_ppl/scientific_records/mmcif_loop_completion | 256 | 19712 | 1.739828 | 1.647326 | 0.092502 | 1823.390421 |
| fineweb2_multilingual/doi_Deva | 10 | 18298 | 1.167289 | 1.075654 | 0.091635 | 1676.737685 |
| synthetic_patch_diff_ppl/review_comment_threads | 256 | 32000 | 0.895519 | 0.947167 | -0.051648 | -1652.749990 |
| synthetic_science_markup_ppl/markup_bibliography/bibtex_entry_completion | 256 | 26449 | 1.079278 | 1.017582 | 0.061696 | 1631.795118 |
| synthetic_identifier_encoding_ppl/identifier_grammars/commit_hashes | 256 | 7680 | 3.754986 | 3.965475 | -0.210488 | -1616.550270 |
| synthetic_identifier_encoding_ppl/identifier_grammars/mixed_case_symbolic_identifiers | 256 | 6810 | 5.855090 | 6.073533 | -0.218443 | -1487.596208 |
| fineweb2_multilingual/lif_Deva | 1 | 22920 | 0.824854 | 0.761292 | 0.063561 | 1456.826096 |
| synthetic_science_markup_ppl/markup_bibliography/latex_table_rows | 256 | 13312 | 1.263129 | 1.155869 | 0.107260 | 1427.840528 |
| fineweb2_multilingual/grt_Beng | 2 | 17981 | 0.946948 | 0.869037 | 0.077911 | 1400.917958 |
| synthetic_reasoning_ppl/native/interval_scheduling | 256 | 290318 | 0.030529 | 0.035260 | -0.004731 | -1373.574655 |
| synthetic_reasoning_ppl/native/interval_scheduling_1shot_icl | 256 | 290318 | 0.030529 | 0.035260 | -0.004731 | -1373.574655 |
| synthetic_reasoning_ppl/native/binary_search | 256 | 101610 | 0.070395 | 0.057151 | 0.013245 | 1345.811487 |
| synthetic_reasoning_ppl/native/binary_search_5shot_icl | 256 | 101610 | 0.070395 | 0.057151 | 0.013245 | 1345.811487 |
| synthetic_identifier_encoding_ppl/identifier_grammars/uuid_build_ids | 256 | 6285 | 3.392748 | 3.604723 | -0.211975 | -1332.260850 |
| synthetic_identifier_encoding_ppl/encoded_text/base64_continuation | 256 | 10752 | 5.932019 | 6.053210 | -0.121191 | -1303.043037 |
| synthetic_machine_records_ppl/structured_logs/json_application_logs | 256 | 32321 | 1.331771 | 1.371634 | -0.039863 | -1288.402333 |
| synthetic_reasoning_ppl/native/propositional_entailment | 256 | 175248 | 0.030999 | 0.023718 | 0.007281 | 1275.991083 |
| synthetic_science_markup_ppl/scientific_records/smiles_formula_completion | 256 | 10686 | 0.641737 | 0.759725 | -0.117988 | -1260.821256 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/chunk_boundary/chunk_boundary_stress | 256 | 7169 | 0.218993 | 0.389315 | -0.170322 | -1221.041695 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/chunk_boundary/chunk_boundary_stress | 256 | 7169 | 0.160094 | 0.319277 | -0.159183 | -1141.182706 |
| synthetic_delimiter_format_ppl/whitespace_control/python_indentation_or_makefile_tabs | 256 | 6325 | 1.449015 | 1.623541 | -0.174526 | -1103.874809 |
| synthetic_reasoning_ppl/clrs_style/clrs_binary_search | 256 | 100637 | 0.072745 | 0.061776 | 0.010968 | 1103.808621 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/chunk_boundary/chunk_boundary_stress | 256 | 7169 | 0.170390 | 0.324282 | -0.153892 | -1103.254881 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/numeric_transduction/numeric_compare_sort | 256 | 7805 | 0.319769 | 0.458861 | -0.139093 | -1085.618941 |
| fineweb2_multilingual/nob_Latn | 256 | 683953 | 1.124413 | 1.125935 | -0.001522 | -1040.792968 |
| fineweb2_multilingual/xsr_Deva | 2 | 13413 | 0.871106 | 0.794075 | 0.077031 | 1033.214553 |
| synthetic_reasoning_ppl/clrs_style/clrs_bfs | 256 | 121637 | 0.046132 | 0.037774 | 0.008358 | 1016.605724 |
| synthetic_machine_records_ppl/service_logs/k8s_system_events | 256 | 12288 | 1.894143 | 1.973581 | -0.079437 | -976.123655 |
| synthetic_reasoning_ppl/clrs_style/clrs_mst_prim | 256 | 238764 | 0.056463 | 0.052467 | 0.003996 | 954.126408 |
| synthetic_machine_records_ppl/trace_errors/python_tracebacks | 256 | 8052 | 0.488024 | 0.604079 | -0.116055 | -934.475144 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/dense_numeric_blobs/mmcif_coordinate_tables | 256 | 16128 | 0.105294 | 0.049921 | 0.055373 | 893.057713 |
| synthetic_reasoning_ppl/native/parentheses_balance | 256 | 290211 | 0.022107 | 0.019062 | 0.003045 | 883.665004 |
| synthetic_reasoning_ppl/native/parentheses_balance_5shot_icl | 256 | 290211 | 0.022107 | 0.019062 | 0.003045 | 883.665004 |
| synthetic_reasoning_ppl/stepmath/arithmetic | 256 | 66916 | 0.112496 | 0.099581 | 0.012915 | 864.208192 |
| synthetic_reasoning_ppl/stepmath/arithmetic_5shot_icl | 256 | 66916 | 0.112496 | 0.099581 | 0.012915 | 864.208192 |
| synthetic_reasoning_ppl/native/bfs_shortest_path | 256 | 124236 | 0.045962 | 0.039112 | 0.006850 | 851.042964 |
| synthetic_machine_records_ppl/service_logs/systemd_journal | 256 | 8312 | 0.880633 | 0.780773 | 0.099860 | 830.036608 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/dense_numeric_blobs/json_numeric_arrays | 256 | 6227 | 0.632075 | 0.500893 | 0.131182 | 816.869402 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/dense_numeric_blobs/json_numeric_arrays | 256 | 6227 | 0.613211 | 0.485853 | 0.127358 | 793.060171 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/dense_numeric_blobs/mmcif_coordinate_tables | 256 | 16128 | 0.109798 | 0.061223 | 0.048575 | 783.419948 |
| fineweb2_multilingual/mup_Deva | 2 | 11054 | 0.990588 | 0.919824 | 0.070764 | 782.220209 |
| synthetic_reasoning_ppl/native/insertion_sort | 256 | 282356 | 0.089618 | 0.086895 | 0.002724 | 769.028076 |
| synthetic_machine_records_ppl/service_logs/zeek_conn_http_dns | 256 | 4608 | 1.664316 | 1.501061 | 0.163255 | 752.278658 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/dense_numeric_blobs/json_numeric_arrays | 256 | 6227 | 0.691377 | 0.572842 | 0.118535 | 738.116969 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/numeric_transduction/numeric_range_checksum_base | 256 | 2046 | 1.949781 | 1.603544 | 0.346237 | 708.400931 |
| synthetic_science_markup_ppl/markup_bibliography/latex_reference_closure | 256 | 18434 | 1.184904 | 1.147609 | 0.037295 | 687.489245 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/dense_numeric_blobs/svg_path_numeric_blobs | 256 | 20073 | 1.952733 | 1.986778 | -0.034045 | -683.382312 |
| synthetic_machine_records_ppl/config_manifests/terraform_hcl | 256 | 21248 | 0.804643 | 0.777233 | 0.027410 | 582.400531 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/dense_numeric_blobs/mmcif_coordinate_tables | 256 | 16128 | 0.101627 | 0.066582 | 0.035045 | 565.211892 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/dense_numeric_blobs/svg_path_numeric_blobs | 256 | 20073 | 1.950073 | 1.976778 | -0.026705 | -536.041446 |
| fineweb2_multilingual/mni_Mtei | 2 | 4462 | 1.194957 | 1.314084 | -0.119127 | -531.544774 |
| formal_methods/smt_lib | 12 | 55068 | 0.288918 | 0.279408 | 0.009510 | 523.699218 |
| synthetic_identifier_encoding_ppl/identifier_grammars/bio_accessions | 256 | 2493 | 4.286202 | 4.494572 | -0.208370 | -519.467462 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/dense_numeric_blobs/svg_path_numeric_blobs | 256 | 20073 | 1.950057 | 1.975693 | -0.025636 | -514.581491 |
| synthetic_science_markup_ppl/tree_closure/svg_group_path_closure | 256 | 18688 | 0.820877 | 0.847165 | -0.026288 | -491.265646 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/structured_records/network_ip_port_rows | 256 | 19856 | 0.557408 | 0.580409 | -0.023001 | -456.703599 |
| synthetic_reasoning_ppl/native/prim_mst | 256 | 250215 | 0.061857 | 0.060048 | 0.001809 | 452.630518 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/structured_records/network_ip_port_rows | 256 | 19856 | 0.554714 | 0.577342 | -0.022628 | -449.301912 |
| synthetic_patch_diff_ppl/gh_pr_event_patch | 256 | 42496 | 0.501424 | 0.491186 | 0.010238 | 435.091926 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/structured_records/tabular_tsv_csv | 256 | 6866 | 0.669596 | 0.732547 | -0.062951 | -432.219813 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/numeric_transduction/numeric_compare_sort | 256 | 7805 | 0.273572 | 0.326563 | -0.052991 | -413.591198 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/structured_records/tabular_tsv_csv | 256 | 6866 | 0.596366 | 0.652918 | -0.056552 | -388.289321 |
| synthetic_science_markup_ppl/tree_closure/nested_attribute_tree | 256 | 10370 | 1.013910 | 0.976901 | 0.037009 | 383.787577 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/numeric_transduction/numeric_copy_increment | 256 | 1586 | 1.055276 | 0.820218 | 0.235058 | 372.802355 |
| synthetic_science_markup_ppl/scientific_records/fasta_sequence_record | 256 | 6656 | 4.959284 | 5.004803 | -0.045519 | -302.971469 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/numeric_transduction/numeric_range_checksum_base | 256 | 2046 | 1.793994 | 1.663224 | 0.130770 | 267.555466 |
| fineweb2_multilingual/kas_Arab | 4 | 10820 | 1.612273 | 1.587837 | 0.024436 | 264.398206 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/numeric_transduction/numeric_compare_sort | 256 | 7805 | 0.264460 | 0.295354 | -0.030895 | -241.134134 |
| synthetic_reasoning_ppl/native/topological_sort | 256 | 227222 | 0.019856 | 0.020883 | -0.001027 | -233.311818 |
| synthetic_identifier_encoding_ppl/encoded_text/hex_dump_continuation | 256 | 11264 | 1.606976 | 1.627488 | -0.020513 | -231.054341 |
| synthetic_reasoning_ppl/clrs_style/clrs_topological_sort | 256 | 220262 | 0.020767 | 0.021719 | -0.000953 | -209.834400 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/numeric_transduction/numeric_range_checksum_base | 256 | 2046 | 1.753522 | 1.657161 | 0.096361 | 197.154227 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/structured_records/network_ip_port_rows | 256 | 19856 | 0.556781 | 0.566449 | -0.009668 | -191.971412 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/format_transforms/format_preserving_transforms | 256 | 13531 | 0.101185 | 0.089578 | 0.011607 | 157.055844 |
| synthetic_reasoning_ppl/native/connected_components | 256 | 68645 | 0.060150 | 0.057892 | 0.002257 | 154.935956 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/format_transforms/format_preserving_transforms | 256 | 13531 | 0.075866 | 0.086468 | -0.010602 | -143.450501 |
| synthetic_delimiter_format_ppl/delimited_fields/csv_next_field | 256 | 1792 | 2.556745 | 2.487367 | 0.069378 | 124.324686 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/numeric_transduction/numeric_copy_increment | 256 | 1586 | 1.174916 | 1.100250 | 0.074667 | 118.421264 |
| structured_text/web_data_commons_sample10 | 12 | 145111 | 0.384266 | 0.385038 | -0.000772 | -112.046445 |
| synthetic_science_markup_ppl/tree_closure/html_entity_attribute_closure | 256 | 16384 | 1.437510 | 1.431136 | 0.006374 | 104.432951 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/numeric_transduction/numeric_copy_increment | 256 | 1586 | 1.132491 | 1.075251 | 0.057240 | 90.783148 |
| synthetic_delimiter_format_ppl/table_rows/markdown_table_rows | 256 | 1280 | 1.513852 | 1.448713 | 0.065139 | 83.377667 |
| fineweb2_multilingual/kas_Deva | 1 | 1737 | 1.173543 | 1.128250 | 0.045292 | 78.672849 |
| fineweb2_multilingual/sck_Deva | 1 | 1603 | 0.916714 | 0.867922 | 0.048793 | 78.214902 |
| synthetic_machine_records_ppl/config_manifests/kubernetes_yaml | 256 | 18944 | 0.458918 | 0.455094 | 0.003824 | 72.443623 |
| lm_eval/mmlu_auxiliary_train | 256 | 256 | 0.790899 | 1.038070 | -0.247171 | -63.275795 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/format_transforms/format_preserving_transforms | 256 | 13531 | 0.096674 | 0.092054 | 0.004619 | 62.506099 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/structured_records/tabular_tsv_csv | 256 | 6866 | 0.673865 | 0.682474 | -0.008609 | -59.106216 |
| game_music/lichess_pgn_2013_01 | 256 | 188042 | 0.859080 | 0.859320 | -0.000240 | -45.050905 |
| synthetic_delimiter_format_ppl/whitespace_control/aligned_space_columns | 256 | 4352 | 0.847220 | 0.837137 | 0.010084 | 43.884344 |
| synthetic_delimiter_format_ppl/delimited_fields/rare_control_delimiters | 256 | 1280 | 2.765020 | 2.737572 | 0.027449 | 35.134668 |
| synthetic_delimiter_format_ppl/table_rows/pipe_rows | 256 | 512 | 1.970867 | 1.906673 | 0.064194 | 32.867095 |
| synthetic_delimiter_format_ppl/delimited_fields/tsv_next_field | 256 | 1792 | 3.342975 | 3.332889 | 0.010086 | 18.074047 |
| synthetic_delimiter_format_ppl/table_rows/fixed_width_rows | 256 | 1792 | 1.062342 | 1.057810 | 0.004532 | 8.120992 |
| synthetic_reasoning_ppl/clrs_style/clrs_connected_components | 256 | 67875 | 0.057547 | 0.057520 | 0.000026 | 1.765565 |

## Dataset Groups

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| fineweb2_multilingual | 15875 | 75438161 | 0.883743 | 0.700524 | 0.183219 | 13821710.497348 |
| fineweb2_multilingual/language | 15875 | 75438161 | 0.883743 | 0.700524 | 0.183219 | 13821710.497348 |
| fineweb2_multilingual/script | 15875 | 75438161 | 0.883743 | 0.700524 | 0.183219 | 13821710.497348 |
| fineweb2_multilingual/top_50_by_rows | 12288 | 52827733 | 0.907913 | 0.717072 | 0.190841 | 10081701.980000 |
| fineweb2_multilingual/indic | 5379 | 34494975 | 0.744869 | 0.588612 | 0.156256 | 5390050.007779 |
| fineweb2_multilingual/script/Latn | 6912 | 22266979 | 1.140788 | 0.942791 | 0.197997 | 4408791.560437 |
| fineweb2_multilingual/script/Cyrl | 1536 | 8083388 | 0.809043 | 0.562305 | 0.246738 | 1994480.967322 |
| fineweb2_multilingual/script/Deva | 1971 | 13232651 | 0.752890 | 0.618470 | 0.134420 | 1778735.054032 |
| bio_chem | 2014 | 24072760 | 1.006187 | 0.938251 | 0.067935 | 1635394.614103 |
| fineweb2_multilingual/script/Arab | 1030 | 5080786 | 1.003271 | 0.695844 | 0.307427 | 1561972.995658 |
| paloma | 3348 | 16006023 | 0.623209 | 0.711011 | -0.087802 | -1405362.834483 |
| epic:5005 | 43842 | 55944405 | 0.344465 | 0.328814 | 0.015651 | 875579.419300 |
| fineweb2_multilingual/language/snd | 262 | 1233468 | 1.514391 | 0.881955 | 0.632436 | 780089.587042 |
| fineweb2_multilingual/language/kaz | 256 | 1638274 | 1.096549 | 0.640917 | 0.455632 | 746449.812737 |
| bio_chem/uniprot | 512 | 5231051 | 1.295143 | 1.161417 | 0.133726 | 699529.538515 |
| long_tail_ppl | 6522 | 26671935 | 0.438452 | 0.413519 | 0.024933 | 665017.406944 |
| code_ecosystem | 5186 | 25237951 | 0.412659 | 0.390605 | 0.022053 | 556581.735130 |
| issue:5254 | 5186 | 25237951 | 0.412659 | 0.390605 | 0.022053 | 556581.735130 |
| long_tail_ppl/code_ecosystem | 5186 | 25237951 | 0.412659 | 0.390605 | 0.022053 | 556581.735130 |
| fineweb2_multilingual/language/kat | 256 | 1743619 | 0.797539 | 0.479801 | 0.317737 | 554013.113593 |
| fineweb2_multilingual/script/Geor | 256 | 1743619 | 0.797539 | 0.479801 | 0.317737 | 554013.113593 |
| fineweb2_multilingual/script/Beng | 559 | 3792853 | 0.652561 | 0.522805 | 0.129757 | 492147.912617 |
| fineweb2_multilingual/language/lit | 256 | 1024151 | 1.487528 | 1.019648 | 0.467880 | 479180.174752 |
| fineweb2_multilingual/language/srp | 256 | 1454893 | 0.964076 | 0.637255 | 0.326821 | 475490.169604 |
| bio_chem/chembl | 512 | 5834886 | 0.577996 | 0.506955 | 0.071041 | 414518.332778 |
| fineweb2_multilingual/language/azj | 256 | 895617 | 1.356138 | 0.937885 | 0.418253 | 374594.879536 |
| fineweb2_multilingual/language/hun | 256 | 1007373 | 1.294781 | 0.955621 | 0.339160 | 341660.723941 |
| fineweb2_multilingual/language/sin | 256 | 1993722 | 0.852659 | 0.682062 | 0.170598 | 340124.121750 |
| fineweb2_multilingual/script/Sinh | 256 | 1993722 | 0.852659 | 0.682062 | 0.170598 | 340124.121750 |
| fineweb2_multilingual/language/lvs | 256 | 733076 | 1.436577 | 0.975059 | 0.461518 | 338328.057067 |
| fineweb2_multilingual/language/hrv | 256 | 1395834 | 1.263019 | 1.022096 | 0.240923 | 336288.529910 |
| bio_chem/pubchem | 322 | 4946475 | 0.500647 | 0.435559 | 0.065088 | 321958.208256 |
| fineweb2_multilingual/language/arb | 256 | 1286134 | 0.856587 | 0.607364 | 0.249223 | 320534.180011 |
| fineweb2_multilingual/language/tel | 256 | 1880846 | 0.611514 | 0.454532 | 0.156981 | 295257.587489 |
| fineweb2_multilingual/script/Telu | 256 | 1880846 | 0.611514 | 0.454532 | 0.156981 | 295257.587489 |
| fineweb2_multilingual/language/npi | 256 | 1516762 | 0.660333 | 0.473057 | 0.187276 | 284052.753617 |
| fineweb2_multilingual/language/mai | 232 | 1676423 | 0.909183 | 0.740355 | 0.168828 | 283026.713408 |
| fineweb2_multilingual/language/vie | 256 | 1397947 | 0.835082 | 0.635608 | 0.199474 | 278853.986971 |
| bio_chem/rcsb | 51 | 1669561 | 0.380403 | 0.214964 | 0.165439 | 276210.187587 |
| fineweb2_multilingual/language/san | 233 | 2278485 | 0.749954 | 0.628979 | 0.120974 | 275638.318922 |
| fineweb2_multilingual/language/mkd | 256 | 963670 | 0.858567 | 0.574070 | 0.284497 | 274161.379516 |
| fineweb2_multilingual/language/ekk | 256 | 778278 | 1.602314 | 1.250932 | 0.351383 | 273473.402680 |
| fineweb2_multilingual/language/als | 256 | 587355 | 1.557249 | 1.095480 | 0.461769 | 271222.427695 |
| fineweb2_multilingual/language/urd | 256 | 1069004 | 0.897434 | 0.643817 | 0.253617 | 271117.914344 |
| fineweb2_multilingual/language/mal | 256 | 2072961 | 0.561258 | 0.432771 | 0.128486 | 266347.237930 |
| fineweb2_multilingual/script/Mlym | 256 | 2072961 | 0.561258 | 0.432771 | 0.128486 | 266347.237930 |
| fineweb2_multilingual/language/asm | 256 | 1630111 | 0.689022 | 0.533560 | 0.155462 | 253419.937922 |
| fineweb2_multilingual/language/tha | 256 | 1896224 | 0.527275 | 0.395472 | 0.131804 | 249928.964185 |
| fineweb2_multilingual/script/Thai | 256 | 1896224 | 0.527275 | 0.395472 | 0.131804 | 249928.964185 |
| fineweb2_multilingual/language/guj | 256 | 1578310 | 0.656235 | 0.503930 | 0.152306 | 240385.532117 |
| fineweb2_multilingual/script/Gujr | 256 | 1578310 | 0.656235 | 0.503930 | 0.152306 | 240385.532117 |
| fineweb2_multilingual/language/slv | 256 | 822455 | 1.323642 | 1.031912 | 0.291730 | 239935.109353 |
| fineweb2_multilingual/language/tam | 256 | 2095015 | 0.514816 | 0.400362 | 0.114455 | 239784.216855 |
| fineweb2_multilingual/script/Taml | 256 | 2095015 | 0.514816 | 0.400362 | 0.114455 | 239784.216855 |
| fineweb2_multilingual/language/mar | 256 | 1810917 | 0.579047 | 0.448889 | 0.130157 | 235704.070823 |
| fineweb2_multilingual/script/Knda | 260 | 1678374 | 0.623764 | 0.485657 | 0.138107 | 231795.822365 |
| fineweb2_multilingual/language/cmn | 256 | 1002238 | 1.348307 | 1.119102 | 0.229205 | 229717.692710 |
| fineweb2_multilingual/script/Hani | 256 | 1002238 | 1.348307 | 1.119102 | 0.229205 | 229717.692710 |
| fineweb2_multilingual/language/kan | 256 | 1621756 | 0.610101 | 0.470122 | 0.139979 | 227012.297578 |
| fineweb2_multilingual/language/ukr | 256 | 1349243 | 0.658950 | 0.493197 | 0.165753 | 223640.450367 |
| fineweb2_multilingual/language/ben | 256 | 1762108 | 0.548667 | 0.422112 | 0.126554 | 223002.498256 |
| fineweb2_multilingual/language/kor | 256 | 923709 | 0.986194 | 0.763178 | 0.223016 | 206001.523090 |
| fineweb2_multilingual/script/Hang | 256 | 923709 | 0.986194 | 0.763178 | 0.223016 | 206001.523090 |
| gh_archive_structured_output | 1024 | 9007140 | 0.238963 | 0.217660 | 0.021303 | 191877.065076 |
| issue:5098 | 1024 | 9007140 | 0.238963 | 0.217660 | 0.021303 | 191877.065076 |
| fineweb2_multilingual/language/fas | 256 | 1512436 | 0.775616 | 0.649632 | 0.125984 | 190542.870201 |
| hf_revision:0cedc373025ae08edf24e24d73eeda75980ddf8c | 10976 | 13951896 | 0.067946 | 0.054431 | 0.013515 | 188557.709933 |
| icl_shots:5 | 10976 | 13951896 | 0.067946 | 0.054431 | 0.013515 | 188557.709933 |
| issue:4148 | 10976 | 13951896 | 0.067946 | 0.054431 | 0.013515 | 188557.709933 |
| issue:5052 | 10976 | 13951896 | 0.067946 | 0.054431 | 0.013515 | 188557.709933 |
| prompt_format:arrow_5shot_icl_v1 | 10976 | 13951896 | 0.067946 | 0.054431 | 0.013515 | 188557.709933 |
| seed:1073741824 | 10976 | 13951896 | 0.067946 | 0.054431 | 0.013515 | 188557.709933 |
| source:generated_synthetic_reasoning_arrow_icl_v1 | 10976 | 13951896 | 0.067946 | 0.054431 | 0.013515 | 188557.709933 |
| source_repo:marin-community | 10976 | 13951896 | 0.067946 | 0.054431 | 0.013515 | 188557.709933 |
| source_repo:marin-community/synth-bootstrap-trial | 10976 | 13951896 | 0.067946 | 0.054431 | 0.013515 | 188557.709933 |
| synthetic_reasoning_ppl | 10976 | 13951896 | 0.067946 | 0.054431 | 0.013515 | 188557.709933 |
| fineweb2_multilingual/language/bul | 256 | 1256872 | 0.693235 | 0.545266 | 0.147970 | 185978.877353 |
| uncheatable_eval | 1792 | 7102937 | 0.544724 | 0.570756 | -0.026032 | -184906.007631 |
| issue:5056 | 2560 | 6633071 | 0.724859 | 0.697119 | 0.027740 | 184003.499573 |
| raw_web_markup | 2560 | 6633071 | 0.724859 | 0.697119 | 0.027740 | 184003.499573 |
| fineweb2_multilingual/language/isl | 256 | 706172 | 1.570200 | 1.312529 | 0.257671 | 181959.731832 |
| fineweb2_multilingual/language/bos | 256 | 746428 | 1.276610 | 1.035160 | 0.241450 | 180224.715063 |
| fineweb2_multilingual/language/slk | 256 | 669166 | 1.239395 | 0.970234 | 0.269161 | 180113.507037 |
| fineweb2_multilingual/language/pan | 256 | 1513842 | 0.618509 | 0.503127 | 0.115382 | 174670.726458 |
| fineweb2_multilingual/script/Guru | 256 | 1513842 | 0.618509 | 0.503127 | 0.115382 | 174670.726458 |
| fineweb2_multilingual/language/ory | 256 | 1132886 | 0.619812 | 0.479209 | 0.140604 | 159288.082679 |
| fineweb2_multilingual/script/Orya | 256 | 1132886 | 0.619812 | 0.479209 | 0.140604 | 159288.082679 |
| fineweb2_multilingual/language/bho | 199 | 991636 | 0.859856 | 0.706632 | 0.153224 | 151942.646250 |
| source:ghalogs | 111 | 3160781 | 2.710941 | 2.757363 | -0.046422 | -146730.395597 |
| split:issue_5093_holdout | 111 | 3160781 | 2.710941 | 2.757363 | -0.046422 | -146730.395597 |
| fineweb2_multilingual/language/jpn | 256 | 917844 | 0.966105 | 0.808608 | 0.157497 | 144557.227373 |
| fineweb2_multilingual/script/Jpan | 256 | 917844 | 0.966105 | 0.808608 | 0.157497 | 144557.227373 |
| diagnostic_logs | 383 | 4107583 | 2.164004 | 2.198843 | -0.034839 | -143102.481888 |
| issue:5094 | 383 | 4107583 | 2.164004 | 2.198843 | -0.034839 | -143102.481888 |
| fineweb2_multilingual/language/new | 180 | 1207399 | 0.952650 | 0.839335 | 0.113314 | 136815.809572 |
| fineweb2_multilingual/language/zsm | 256 | 1028425 | 1.024529 | 0.893405 | 0.131124 | 134851.295157 |
| examples:1000 | 34784 | 15238927 | 0.151857 | 0.143065 | 0.008792 | 133987.141460 |
| loss:target_only | 34784 | 15238927 | 0.151857 | 0.143065 | 0.008792 | 133987.141460 |
| fineweb2_multilingual/language/hne | 143 | 847488 | 0.922062 | 0.764167 | 0.157895 | 133813.915523 |
| fineweb2_multilingual/language/ind | 256 | 1015559 | 0.890739 | 0.758978 | 0.131761 | 133810.964176 |
| fineweb2_multilingual/language/heb | 256 | 1310615 | 0.929213 | 0.827664 | 0.101550 | 133092.390646 |
| fineweb2_multilingual/script/Hebr | 256 | 1310615 | 0.929213 | 0.827664 | 0.101550 | 133092.390646 |
| fineweb2_multilingual/language/hin | 256 | 1557780 | 0.494857 | 0.411384 | 0.083473 | 130032.798606 |
| split:test | 824 | 1235463 | 0.871751 | 0.766824 | 0.104928 | 129634.494349 |
| fineweb2_multilingual/language/pol | 256 | 842265 | 1.012215 | 0.860180 | 0.152034 | 128053.274038 |
| bio_chem/refseq | 256 | 3400185 | 1.900994 | 1.937883 | -0.036889 | -125428.024008 |
| long_tail_ppl_runnable | 824 | 1172983 | 0.856838 | 0.755126 | 0.101712 | 119306.290370 |
| long_tail_ppl_runnable/web_markup_image_text | 512 | 1123870 | 0.860456 | 0.758376 | 0.102080 | 114724.826417 |
| raw_web_markup/svg_stack | 512 | 1123870 | 0.860456 | 0.758376 | 0.102080 | 114724.826417 |
| source:svg_stack | 512 | 1123870 | 0.860456 | 0.758376 | 0.102080 | 114724.826417 |
| surface:svg_xml | 512 | 1123870 | 0.860456 | 0.758376 | 0.102080 | 114724.826417 |
| web_markup_image_text | 512 | 1123870 | 0.860456 | 0.758376 | 0.102080 | 114724.826417 |
| family:native | 7392 | 10809503 | 0.060428 | 0.050480 | 0.009948 | 107534.771745 |
| synthetic_reasoning_ppl/native | 7392 | 10809503 | 0.060428 | 0.050480 | 0.009948 | 107534.771745 |
| split:val | 512 | 1061390 | 0.843309 | 0.744951 | 0.098358 | 104396.622438 |
| fineweb2_multilingual/language/glg | 256 | 636799 | 1.083537 | 0.926483 | 0.157053 | 100011.497643 |
| issue:5059 | 1036 | 2435507 | 0.721317 | 0.762169 | -0.040852 | -99495.615452 |
| structured_text | 1036 | 2435507 | 0.721317 | 0.762169 | -0.040852 | -99495.615452 |
| raw_web_markup/common_crawl | 512 | 3517986 | 0.584322 | 0.558159 | 0.026163 | 92041.237635 |
| source:common_crawl | 512 | 3517986 | 0.584322 | 0.558159 | 0.026163 | 92041.237635 |
| event_type:PullRequestEvent | 256 | 5008728 | 0.155160 | 0.137308 | 0.017852 | 89415.387932 |
| fineweb2_multilingual/language/rus | 256 | 1420436 | 0.530097 | 0.467609 | 0.062488 | 88760.277744 |
| fineweb2_multilingual/language/ron | 256 | 899610 | 0.999353 | 0.901392 | 0.097961 | 88126.656741 |
| fineweb2_multilingual/language/ita | 256 | 825217 | 0.919523 | 0.813561 | 0.105962 | 87441.933957 |
| fineweb2_multilingual/language/div | 256 | 1098690 | 1.313613 | 1.234915 | 0.078698 | 86465.011705 |
| fineweb2_multilingual/script/Thaa | 256 | 1098690 | 1.313613 | 1.234915 | 0.078698 | 86465.011705 |
| fineweb2_multilingual/language/cat | 256 | 657750 | 1.014584 | 0.884532 | 0.130052 | 85541.439857 |
| surface:warc | 256 | 2101130 | 0.550891 | 0.515700 | 0.035191 | 73941.855979 |
| totto | 256 | 582125 | 0.607101 | 0.730137 | -0.123036 | -71622.579037 |
| fineweb2_multilingual/language/por | 256 | 707637 | 0.901293 | 0.807346 | 0.093947 | 66480.126861 |
| issue:5614 | 10240 | 406546 | 0.704803 | 0.861605 | -0.156802 | -63747.287489 |
| hf_revision:57cd2ab0f7b507cc2598d0cceeb95db47a739653 | 2560 | 102685 | 0.725590 | 1.322082 | -0.596492 | -61250.831342 |
| seed:5614 | 2560 | 102685 | 0.725590 | 1.322082 | -0.596492 | -61250.831342 |
| source:generated_numeric_format_ppl_v1 | 2560 | 102685 | 0.725590 | 1.322082 | -0.596492 | -61250.831342 |
| synthetic_numeric_format_ppl | 2560 | 102685 | 0.725590 | 1.322082 | -0.596492 | -61250.831342 |
| family:stepmath | 1024 | 812710 | 0.143722 | 0.072662 | 0.071060 | 57751.184091 |
| synthetic_reasoning_ppl/stepmath | 1024 | 812710 | 0.143722 | 0.072662 | 0.071060 | 57751.184091 |
| fineweb2_multilingual/language/gom | 56 | 437688 | 0.908832 | 0.781717 | 0.127115 | 55636.635326 |
| bio_chem/moleculenet | 105 | 445143 | 0.674355 | 0.556880 | 0.117475 | 52293.363919 |
| event_type:IssuesEvent | 256 | 1078449 | 0.341149 | 0.301115 | 0.040033 | 43174.066638 |
| formal_methods | 537 | 2984831 | 0.273359 | 0.259251 | 0.014108 | 42108.635784 |
| wikitablequestions | 256 | 471371 | 0.657023 | 0.740892 | -0.083869 | -39533.470168 |
| issue:5060 | 793 | 3449651 | 0.329091 | 0.318026 | 0.011066 | 38172.827999 |
| event_type:IssueCommentEvent | 256 | 2681436 | 0.312819 | 0.298661 | 0.014157 | 37962.228116 |
| fineweb2_multilingual/language/sat | 21 | 138147 | 1.244198 | 0.993130 | 0.251068 | 34684.301113 |
| fineweb2_multilingual/script/Olck | 21 | 138147 | 1.244198 | 0.993130 | 0.251068 | 34684.301113 |
| fineweb2_multilingual/language/deu | 256 | 681226 | 0.853170 | 0.808931 | 0.044239 | 30137.026508 |
| fineweb2_multilingual/language/dan | 256 | 665640 | 1.050900 | 1.007955 | 0.042945 | 28586.231765 |
| task:algebra_linear_equation | 256 | 339439 | 0.149878 | 0.067355 | 0.082523 | 28011.383853 |
| task:algebra_linear_equation_3shot_icl | 256 | 339439 | 0.149878 | 0.067355 | 0.082523 | 28011.383853 |
| fineweb2_multilingual/language/nld | 256 | 600203 | 0.958173 | 0.912385 | 0.045788 | 27482.020884 |
| hf_revision:ff4f38e047c8950725566a22488cbe567e275d2c | 3840 | 289321 | 1.117020 | 1.028412 | 0.088608 | 25636.066769 |
| source:generated_science_markup_tree_ppl_v1 | 3840 | 289321 | 1.117020 | 1.028412 | 0.088608 | 25636.066769 |
| synthetic_science_markup_ppl | 3840 | 289321 | 1.117020 | 1.028412 | 0.088608 | 25636.066769 |
| fineweb2_multilingual/language/anp | 60 | 307339 | 0.458620 | 0.379214 | 0.079406 | 24404.489901 |
| binary_network_security | 256 | 127072 | 1.900269 | 1.716878 | 0.183391 | 23303.920923 |
| issue:5057 | 256 | 127072 | 1.900269 | 1.716878 | 0.183391 | 23303.920923 |
| family:clrs_style | 2560 | 2329683 | 0.076390 | 0.066401 | 0.009989 | 23271.754096 |
| synthetic_reasoning_ppl/clrs_style | 2560 | 2329683 | 0.076390 | 0.066401 | 0.009989 | 23271.754096 |
| fineweb2_multilingual/language/swe | 256 | 557706 | 1.035646 | 0.994432 | 0.041214 | 22985.392239 |
| event_type:PushEvent | 256 | 238527 | 0.706446 | 0.617041 | 0.089404 | 21325.382389 |
| fineweb2_multilingual/language/awa | 23 | 133480 | 0.904609 | 0.748948 | 0.155661 | 20777.674479 |
| family:scientific_records | 1536 | 138578 | 1.213655 | 1.066982 | 0.146673 | 20325.673541 |
| synthetic_science_markup_ppl/scientific_records | 1536 | 138578 | 1.213655 | 1.066982 | 0.146673 | 20325.673541 |
| surface:wat | 256 | 1416856 | 0.633899 | 0.621124 | 0.012774 | 18099.381656 |
| fineweb2_multilingual/language/brx | 38 | 138432 | 1.091018 | 0.961927 | 0.129090 | 17870.241429 |
| hf_revision:8e12c75bb1c9f4fed228b99d22f636ca426cf9b4 | 2560 | 87793 | 3.751614 | 3.954700 | -0.203086 | -17829.524002 |
| source:generated_identifier_encoding_ppl_v1 | 2560 | 87793 | 3.751614 | 3.954700 | -0.203086 | -17829.524002 |
| synthetic_identifier_encoding_ppl | 2560 | 87793 | 3.751614 | 3.954700 | -0.203086 | -17829.524002 |
| synthetic_numeric_format_ppl/numeric_transduction | 768 | 12183 | 0.676852 | 2.076180 | -1.399328 | -17048.013826 |
| family:numeric_transduction | 3072 | 46494 | 0.677978 | 1.044331 | -0.366354 | -17033.240707 |
| hf_revision:5efd713c2781e0a1a82dd850acd7d8de14f81748 | 3584 | 266902 | 0.908789 | 0.845071 | 0.063718 | 17006.548760 |
| seed:20260511 | 3584 | 266902 | 0.908789 | 0.845071 | 0.063718 | 17006.548760 |
| source:generated_synthetic_machine_records_ppl_v1 | 3584 | 266902 | 0.908789 | 0.845071 | 0.063718 | 17006.548760 |
| synthetic_machine_records_ppl | 3584 | 266902 | 0.908789 | 0.845071 | 0.063718 | 17006.548760 |
| fineweb2_multilingual/language/fra | 256 | 826860 | 0.742411 | 0.721969 | 0.020442 | 16902.921300 |
| family:config_manifests | 1536 | 154660 | 0.751121 | 0.642675 | 0.108447 | 16772.383158 |
| synthetic_machine_records_ppl/config_manifests | 1536 | 154660 | 0.751121 | 0.642675 | 0.108447 | 16772.383158 |
| synthetic_numeric_format_ppl/dense_numeric_blobs | 768 | 43245 | 1.083396 | 1.468193 | -0.384798 | -16640.570423 |
| fineweb2_multilingual/language/fin | 256 | 874277 | 1.091812 | 1.110586 | -0.018774 | -16413.673558 |
| source:logchunks | 256 | 422514 | 0.380277 | 0.341894 | 0.038383 | 16217.458726 |
| asr_ocr_noisy_ppl | 1024 | 137240 | 1.169728 | 1.286118 | -0.116390 | -15973.375037 |
| task:n_queens_backtracking | 256 | 894900 | 0.069766 | 0.052338 | 0.017428 | 15596.262474 |
| task:n_queens_backtracking_1shot_icl | 256 | 894900 | 0.069766 | 0.052338 | 0.017428 | 15596.262474 |
| hf_revision:7b7e44357aef62325a69d9b3e56241d90a277e5c | 1536 | 217344 | 0.702667 | 0.771122 | -0.068455 | -14878.281202 |
| seed:4693 | 1536 | 217344 | 0.702667 | 0.771122 | -0.068455 | -14878.281202 |
| source:generated_synthetic_patch_diff_ppl_v1 | 1536 | 217344 | 0.702667 | 0.771122 | -0.068455 | -14878.281202 |
| synthetic_patch_diff_ppl | 1536 | 217344 | 0.702667 | 0.771122 | -0.068455 | -14878.281202 |
| family:structured_records | 2048 | 106944 | 0.587918 | 0.725194 | -0.137276 | -14680.866725 |
| gittables | 256 | 1028512 | 0.849867 | 0.836459 | 0.013408 | 13790.348112 |
| family:dense_numeric_blobs | 3072 | 170529 | 1.064356 | 1.145192 | -0.080836 | -13784.839575 |
| issue:5053 | 512 | 68451 | 0.114927 | 0.315744 | -0.200817 | -13746.156224 |
| lm_eval | 512 | 68451 | 0.114927 | 0.315744 | -0.200817 | -13746.156224 |
| lm_eval_bridge | 512 | 68451 | 0.114927 | 0.315744 | -0.200817 | -13746.156224 |
| synthetic_numeric_format_ppl/structured_records | 512 | 26778 | 0.613104 | 1.087496 | -0.474392 | -12703.274451 |
| raw_web_markup/textocr | 512 | 1180557 | 1.087135 | 1.097830 | -0.010694 | -12625.248341 |
| source:textocr | 512 | 1180557 | 1.087135 | 1.097830 | -0.010694 | -12625.248341 |
| split:TextOCR | 512 | 1180557 | 1.087135 | 1.097830 | -0.010694 | -12625.248341 |
| source:loghub | 16 | 524288 | 0.304153 | 0.328166 | -0.024013 | -12589.545018 |
| task:genbank_feature_record | 256 | 50432 | 0.880034 | 0.636425 | 0.243609 | 12285.711578 |
| surface:ocr_info_json | 256 | 624497 | 0.474290 | 0.455617 | 0.018673 | 11661.077762 |
| asr_ocr_noisy_ppl/hypr_librispeech_without_lm_test_clean | 512 | 63043 | 1.133381 | 1.312462 | -0.179081 | -11289.786188 |
| family:asr | 512 | 63043 | 1.133381 | 1.312462 | -0.179081 | -11289.786188 |
| source:hypr_librispeech_without_lm_test_clean | 512 | 63043 | 1.133381 | 1.312462 | -0.179081 | -11289.786188 |
| game_music | 512 | 261001 | 1.052337 | 1.093987 | -0.041650 | -10870.618556 |
| issue:5062 | 512 | 261001 | 1.052337 | 1.093987 | -0.041650 | -10870.618556 |
| source:irishman | 256 | 72959 | 1.550430 | 1.698809 | -0.148379 | -10825.567651 |
| surface:abc_notation | 256 | 72959 | 1.550430 | 1.698809 | -0.148379 | -10825.567651 |
| raw_web_markup/ocr_vqa | 1024 | 810658 | 0.619175 | 0.631680 | -0.012505 | -10137.316138 |
| source:ocr_vqa | 1024 | 810658 | 0.619175 | 0.631680 | -0.012505 | -10137.316138 |
| split:validation | 1024 | 810658 | 0.619175 | 0.631680 | -0.012505 | -10137.316138 |
| surface:book_metadata | 256 | 65840 | 0.975842 | 1.129675 | -0.153833 | -10128.344280 |
| surface:ocr_strings | 256 | 53066 | 1.638403 | 1.822791 | -0.184387 | -9784.697550 |
| family:chunk_boundary | 1024 | 28759 | 0.196770 | 0.525981 | -0.329211 | -9467.780156 |
| task:chunk_boundary_stress | 1024 | 28759 | 0.196770 | 0.525981 | -0.329211 | -9467.780156 |
| task:clrs_floyd_warshall | 256 | 236130 | 0.239629 | 0.199877 | 0.039752 | 9386.660462 |
| issue:5618 | 13568 | 880485 | 1.226182 | 1.215760 | 0.010422 | 9176.719016 |
| synthetic_numeric_format_ppl/format_transforms | 256 | 13227 | 0.096187 | 0.765778 | -0.669590 | -8856.671768 |
| family:format_transforms | 1024 | 53820 | 0.092457 | 0.255604 | -0.163147 | -8780.560326 |
| task:format_preserving_transforms | 1024 | 53820 | 0.092457 | 0.255604 | -0.163147 | -8780.560326 |
| task:kmp_string_search | 256 | 429145 | 0.106928 | 0.087126 | 0.019802 | 8497.763002 |
| task:kmp_string_search_1shot_icl | 256 | 429145 | 0.106928 | 0.087126 | 0.019802 | 8497.763002 |
| task:tabular_tsv_csv | 1024 | 27459 | 0.664641 | 0.968867 | -0.304226 | -8353.745509 |
| fineweb2_multilingual/language/mni | 29 | 322842 | 0.961530 | 0.935801 | 0.025729 | 8306.265329 |
| variant:clean | 512 | 69825 | 1.041423 | 1.157035 | -0.115612 | -8072.607932 |
| family:identifier_grammars | 1280 | 40018 | 3.502751 | 3.702170 | -0.199420 | -7980.388242 |
| synthetic_identifier_encoding_ppl/identifier_grammars | 1280 | 40018 | 3.502751 | 3.702170 | -0.199420 | -7980.388242 |
| variant:noisy | 512 | 67415 | 1.302619 | 1.419815 | -0.117196 | -7900.767105 |
| task:numeric_compare_sort | 1024 | 31881 | 0.281131 | 0.528471 | -0.247339 | -7885.419556 |
| seed:5615 | 6400 | 377114 | 1.730359 | 1.709658 | 0.020701 | 7806.542768 |
| task:svg_path_numeric_blobs | 1024 | 81444 | 1.958388 | 2.049579 | -0.091191 | -7426.965761 |
| task:floyd_warshall_apsp | 256 | 202027 | 0.210339 | 0.174404 | 0.035935 | 7259.756979 |
| subset:dockerfile | 256 | 23040 | 0.821938 | 0.521851 | 0.300087 | 6914.001192 |
| task:dockerfile | 256 | 23040 | 0.821938 | 0.521851 | 0.300087 | 6914.001192 |
| task:network_ip_port_rows | 1024 | 79485 | 0.561413 | 0.641015 | -0.079601 | -6327.121216 |
| synthetic_numeric_format_ppl/chunk_boundary | 256 | 7252 | 0.237136 | 1.064811 | -0.827675 | -6002.300874 |
| surface:ocr_tokens | 256 | 33378 | 2.380641 | 2.555775 | -0.175134 | -5845.607821 |
| surface:question_context | 256 | 86943 | 0.713525 | 0.780517 | -0.066991 | -5824.441799 |
| task:knapsack_01_dp | 112 | 265614 | 0.063048 | 0.041184 | 0.021864 | 5807.297679 |
| task:knapsack_01_dp_1shot_icl | 112 | 265614 | 0.063048 | 0.041184 | 0.021864 | 5807.297679 |
| fineweb2_multilingual/language/mag | 3 | 37283 | 0.895191 | 0.744806 | 0.150385 | 5606.796958 |
| fineweb2_multilingual/language/bpy | 18 | 64273 | 0.979572 | 0.894206 | 0.085366 | 5486.748377 |
| task:edit_distance_dp | 256 | 690254 | 0.060186 | 0.052327 | 0.007859 | 5424.795634 |
| task:edit_distance_dp_1shot_icl | 256 | 690254 | 0.060186 | 0.052327 | 0.007859 | 5424.795634 |
| task:numeric_copy_increment | 1024 | 6355 | 1.137161 | 1.932891 | -0.795730 | -5056.862358 |
| family:encoded_text | 768 | 35072 | 4.612844 | 4.756208 | -0.143364 | -5028.068200 |
| synthetic_identifier_encoding_ppl/encoded_text | 768 | 35072 | 4.612844 | 4.756208 | -0.143364 | -5028.068200 |
| family:trace_errors | 512 | 34057 | 0.715811 | 0.860741 | -0.144930 | -4935.866391 |
| synthetic_machine_records_ppl/trace_errors | 512 | 34057 | 0.715811 | 0.860741 | -0.144930 | -4935.866391 |
| task:lcs_dp | 256 | 682884 | 0.060472 | 0.053350 | 0.007122 | 4863.611766 |
| task:lcs_dp_1shot_icl | 256 | 682884 | 0.060472 | 0.053350 | 0.007122 | 4863.611766 |
| family:escaped_text | 512 | 12703 | 2.157815 | 2.537337 | -0.379522 | -4821.067559 |
| synthetic_identifier_encoding_ppl/escaped_text | 512 | 12703 | 2.157815 | 2.537337 | -0.379522 | -4821.067559 |
| fineweb2_multilingual/language/tcy | 4 | 56618 | 1.015110 | 0.930622 | 0.084488 | 4783.524787 |
| asr_ocr_noisy_ppl/rtm_sgt_ocr_v1_train | 512 | 74197 | 1.200610 | 1.263734 | -0.063124 | -4683.588849 |
| family:ocr | 512 | 74197 | 1.200610 | 1.263734 | -0.063124 | -4683.588849 |
| source:rtm_sgt_ocr_v1_train | 512 | 74197 | 1.200610 | 1.263734 | -0.063124 | -4683.588849 |
| task:sdf_record_closure | 256 | 8596 | 2.209033 | 1.675090 | 0.533942 | 4589.769551 |
| formal_hardware | 312 | 49113 | 0.774041 | 0.680757 | 0.093284 | 4581.463952 |
| long_tail_ppl_runnable/formal_hardware | 312 | 49113 | 0.774041 | 0.680757 | 0.093284 | 4581.463952 |
| subset:file_path_line_refs | 256 | 26624 | 0.757375 | 0.912085 | -0.154710 | -4119.008025 |
| task:file_path_line_refs | 256 | 26624 | 0.757375 | 0.912085 | -0.154710 | -4119.008025 |
| task:numeric_range_checksum_base | 1024 | 8258 | 1.856684 | 2.352077 | -0.495393 | -4090.958794 |
| subset:pyproject | 256 | 30354 | 0.737995 | 0.605814 | 0.132182 | 4012.248108 |
| task:pyproject_toml | 256 | 30354 | 0.737995 | 0.605814 | 0.132182 | 4012.248108 |
| subset:compiler | 256 | 26005 | 0.786342 | 0.940212 | -0.153870 | -4001.391247 |
| task:compiler_errors | 256 | 26005 | 0.786342 | 0.940212 | -0.153870 | -4001.391247 |
| family:service_logs | 1024 | 37466 | 1.309149 | 1.203982 | 0.105168 | 3940.212213 |
| synthetic_machine_records_ppl/service_logs | 1024 | 37466 | 1.309149 | 1.203982 | 0.105168 | 3940.212213 |
| hardware_rtl | 256 | 464820 | 0.686978 | 0.695445 | -0.008467 | -3935.807786 |
| task:clrs_lcs_length | 256 | 673567 | 0.062335 | 0.056509 | 0.005826 | 3923.949994 |
| fineweb2_multilingual/language/skr | 2 | 11653 | 1.519046 | 1.193100 | 0.325946 | 3798.248820 |
| family:markup_bibliography | 768 | 58195 | 1.154792 | 1.090403 | 0.064389 | 3747.124891 |
| synthetic_science_markup_ppl/markup_bibliography | 768 | 58195 | 1.154792 | 1.090403 | 0.064389 | 3747.124891 |
| bio_chem/rnacentral | 256 | 2545459 | 1.649496 | 1.650945 | -0.001448 | -3686.992943 |
| split:eval_only | 272 | 946802 | 0.338124 | 0.334292 | 0.003832 | 3627.913708 |
| task:mmcif_coordinate_tables | 1024 | 64512 | 0.109518 | 0.164687 | -0.055170 | -3559.100918 |
| task:data_image_base64_prefixes | 256 | 13056 | 6.119761 | 6.387375 | -0.267614 | -3493.970822 |
| fineweb2_multilingual/language/rav | 3 | 28660 | 0.969207 | 0.848487 | 0.120720 | 3459.845305 |
| subset:failing_test_trace_to_patch | 256 | 32000 | 0.109335 | 0.217197 | -0.107862 | -3451.596515 |
| task:failing_test_trace_to_patch | 256 | 32000 | 0.109335 | 0.217197 | -0.107862 | -3451.596515 |
| task:union_find_connectivity | 256 | 340536 | 0.035049 | 0.025231 | 0.009817 | 3343.194354 |
| task:union_find_connectivity_1shot_icl | 256 | 340536 | 0.035049 | 0.025231 | 0.009817 | 3343.194354 |
| subset:nginx | 256 | 12258 | 0.879782 | 0.607794 | 0.271987 | 3334.020602 |
| task:nginx_access_error | 256 | 12258 | 0.879782 | 0.607794 | 0.271987 | 3334.020602 |
| fineweb2_multilingual/language/suz | 4 | 34828 | 0.931690 | 0.837599 | 0.094092 | 3277.026045 |
| fineweb2_multilingual/language/thl | 2 | 41972 | 1.086709 | 1.009768 | 0.076940 | 3229.340508 |
| task:pdb_atom_records | 256 | 42496 | 0.721318 | 0.646238 | 0.075080 | 3190.594715 |
| subset:commit_message_metadata | 256 | 35840 | 1.479298 | 1.567640 | -0.088341 | -3166.151776 |
| task:commit_message_metadata | 256 | 35840 | 1.479298 | 1.567640 | -0.088341 | -3166.151776 |
| subset:github_actions_yaml | 256 | 31232 | 0.745587 | 0.644472 | 0.101116 | 3158.043764 |
| task:github_actions_yaml | 256 | 31232 | 0.745587 | 0.644472 | 0.101116 | 3158.043764 |
| task:xml_tag_closure | 256 | 18426 | 1.503378 | 1.668137 | -0.164759 | -3035.850125 |
| task:package_names_versions | 256 | 16750 | 2.355384 | 2.535952 | -0.180568 | -3024.513451 |
| task:json_unicode_byte_escapes | 256 | 7632 | 2.297754 | 2.686916 | -0.389161 | -2970.080516 |
| subset:unified_diff_hunks | 256 | 48384 | 0.538903 | 0.599333 | -0.060430 | -2923.866822 |
| task:unified_diff_hunks | 256 | 48384 | 0.538903 | 0.599333 | -0.060430 | -2923.866822 |
| task:lis_dp | 256 | 238048 | 0.032772 | 0.020744 | 0.012028 | 2863.206289 |
| surface:annotations_json | 256 | 1127491 | 1.061190 | 1.063709 | -0.002519 | -2840.550790 |
| task:json_numeric_arrays | 1024 | 24573 | 0.607963 | 0.721860 | -0.113896 | -2798.772897 |
| task:entity_escaping | 256 | 9992 | 0.396331 | 0.119116 | 0.277215 | 2769.929552 |
| task:dijkstra_shortest_path | 256 | 155506 | 0.071579 | 0.054111 | 0.017468 | 2716.324070 |
| task:clrs_dijkstra | 256 | 151886 | 0.071929 | 0.054558 | 0.017371 | 2638.372456 |
| task:clrs_lis | 256 | 235292 | 0.031397 | 0.020318 | 0.011080 | 2607.023787 |
| family:ci_logs | 256 | 8398 | 1.180995 | 0.881136 | 0.299860 | 2518.222114 |
| subset:github_actions | 256 | 8398 | 1.180995 | 0.881136 | 0.299860 | 2518.222114 |
| synthetic_machine_records_ppl/ci_logs | 256 | 8398 | 1.180995 | 0.881136 | 0.299860 | 2518.222114 |
| task:github_actions_jobs | 256 | 8398 | 1.180995 | 0.881136 | 0.299860 | 2518.222114 |
| hf_revision:bca4b9413bc72ae66614da99dafcc87ab7bc074f | 7680 | 303861 | 0.697778 | 0.705994 | -0.008216 | -2496.456147 |
| seed:60935010 | 7680 | 303861 | 0.697778 | 0.705994 | -0.008216 | -2496.456147 |
| source:generated_numeric_format_prompt_ablation_ppl_v1 | 7680 | 303861 | 0.697778 | 0.705994 | -0.008216 | -2496.456147 |
| synthetic_numeric_format_prompt_ablation_ppl | 7680 | 303861 | 0.697778 | 0.705994 | -0.008216 | -2496.456147 |
| task:euclid_gcd | 256 | 84172 | 0.085530 | 0.056321 | 0.029209 | 2458.611077 |
| task:euclid_gcd_5shot_icl | 256 | 84172 | 0.085530 | 0.056321 | 0.029209 | 2458.611077 |
| task:coin_change_dp | 256 | 946712 | 0.034080 | 0.036477 | -0.002397 | -2269.708015 |
| fineweb2_multilingual/language/kle | 1 | 32767 | 0.998517 | 0.934734 | 0.063783 | 2089.964809 |
| subset:package_json | 256 | 29842 | 0.862976 | 0.794842 | 0.068134 | 2033.245940 |
| task:package_json | 256 | 29842 | 0.862976 | 0.794842 | 0.068134 | 2033.245940 |
| web_data_commons_sample1k | 256 | 208388 | 0.786046 | 0.795729 | -0.009683 | -2017.867915 |
| issue:5061 | 20 | 50370 | 1.058405 | 1.020670 | 0.037735 | 1900.709308 |
| package_metadata | 20 | 50370 | 1.058405 | 1.020670 | 0.037735 | 1900.709308 |
| fineweb2_multilingual/language/taj | 3 | 41558 | 0.860497 | 0.815357 | 0.045140 | 1875.923289 |
| task:url_query_escaping | 256 | 5071 | 1.947203 | 2.312217 | -0.365014 | -1850.987044 |
| task:clrs_insertion_sort | 256 | 283633 | 0.092333 | 0.085814 | 0.006520 | 1849.275480 |
| task:mathml_nested_tree | 256 | 18688 | 0.359581 | 0.261538 | 0.098043 | 1832.234027 |
| task:mmcif_loop_completion | 256 | 19712 | 1.739828 | 1.647326 | 0.092502 | 1823.390421 |
| fineweb2_multilingual/language/doi | 10 | 18298 | 1.167289 | 1.075654 | 0.091635 | 1676.737685 |
| subset:review_comment_threads | 256 | 32000 | 0.895519 | 0.947167 | -0.051648 | -1652.749990 |
| task:review_comment_threads | 256 | 32000 | 0.895519 | 0.947167 | -0.051648 | -1652.749990 |
| task:bibtex_entry_completion | 256 | 26449 | 1.079278 | 1.017582 | 0.061696 | 1631.795118 |
| task:commit_hashes | 256 | 7680 | 3.754986 | 3.965475 | -0.210488 | -1616.550270 |
| family:tree_closure | 1536 | 92548 | 0.948569 | 0.931678 | 0.016891 | 1563.268337 |
| synthetic_science_markup_ppl/tree_closure | 1536 | 92548 | 0.948569 | 0.931678 | 0.016891 | 1563.268337 |
| task:mixed_case_symbolic_identifiers | 256 | 6810 | 5.855090 | 6.073533 | -0.218443 | -1487.596208 |
| prompt_variant:newline | 2560 | 101287 | 0.698022 | 0.712691 | -0.014669 | -1485.782719 |
| synthetic_numeric_format_prompt_ablation_ppl/newline | 2560 | 101287 | 0.698022 | 0.712691 | -0.014669 | -1485.782719 |
| fineweb2_multilingual/language/lif | 1 | 22920 | 0.824854 | 0.761292 | 0.063561 | 1456.826096 |
| task:latex_table_rows | 256 | 13312 | 1.263129 | 1.155869 | 0.107260 | 1427.840528 |
| fineweb2_multilingual/language/grt | 2 | 17981 | 0.946948 | 0.869037 | 0.077911 | 1400.917958 |
| task:interval_scheduling | 256 | 290318 | 0.030529 | 0.035260 | -0.004731 | -1373.574655 |
| task:interval_scheduling_1shot_icl | 256 | 290318 | 0.030529 | 0.035260 | -0.004731 | -1373.574655 |
| task:binary_search | 256 | 101610 | 0.070395 | 0.057151 | 0.013245 | 1345.811487 |
| task:binary_search_5shot_icl | 256 | 101610 | 0.070395 | 0.057151 | 0.013245 | 1345.811487 |
| task:uuid_build_ids | 256 | 6285 | 3.392748 | 3.604723 | -0.211975 | -1332.260850 |
| task:base64_continuation | 256 | 10752 | 5.932019 | 6.053210 | -0.121191 | -1303.043037 |
| family:structured_logs | 256 | 32321 | 1.331771 | 1.371634 | -0.039863 | -1288.402333 |
| subset:json_logs | 256 | 32321 | 1.331771 | 1.371634 | -0.039863 | -1288.402333 |
| synthetic_machine_records_ppl/structured_logs | 256 | 32321 | 1.331771 | 1.371634 | -0.039863 | -1288.402333 |
| task:json_application_logs | 256 | 32321 | 1.331771 | 1.371634 | -0.039863 | -1288.402333 |
| task:propositional_entailment | 256 | 175248 | 0.030999 | 0.023718 | 0.007281 | 1275.991083 |
| task:smiles_formula_completion | 256 | 10686 | 0.641737 | 0.759725 | -0.117988 | -1260.821256 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/chunk_boundary | 256 | 7169 | 0.218993 | 0.389315 | -0.170322 | -1221.041695 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/chunk_boundary | 256 | 7169 | 0.160094 | 0.319277 | -0.159183 | -1141.182706 |
| task:python_indentation_or_makefile_tabs | 256 | 6325 | 1.449015 | 1.623541 | -0.174526 | -1103.874809 |
| task:clrs_binary_search | 256 | 100637 | 0.072745 | 0.061776 | 0.010968 | 1103.808621 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/chunk_boundary | 256 | 7169 | 0.170390 | 0.324282 | -0.153892 | -1103.254881 |
| family:whitespace_control | 512 | 10677 | 1.203721 | 1.302999 | -0.099278 | -1059.990465 |
| synthetic_delimiter_format_ppl/whitespace_control | 512 | 10677 | 1.203721 | 1.302999 | -0.099278 | -1059.990465 |
| fineweb2_multilingual/language/nob | 256 | 683953 | 1.124413 | 1.125935 | -0.001522 | -1040.792968 |
| fineweb2_multilingual/language/xsr | 2 | 13413 | 0.871106 | 0.794075 | 0.077031 | 1033.214553 |
| task:clrs_bfs | 256 | 121637 | 0.046132 | 0.037774 | 0.008358 | 1016.605724 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/dense_numeric_blobs | 768 | 42428 | 1.065795 | 1.042061 | 0.023733 | 1006.955427 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/dense_numeric_blobs | 768 | 42428 | 1.053876 | 1.030242 | 0.023634 | 1002.735573 |
| subset:k8s | 256 | 12288 | 1.894143 | 1.973581 | -0.079437 | -976.123655 |
| task:k8s_system_events | 256 | 12288 | 1.894143 | 1.973581 | -0.079437 | -976.123655 |
| task:clrs_mst_prim | 256 | 238764 | 0.056463 | 0.052467 | 0.003996 | 954.126408 |
| subset:python_traceback | 256 | 8052 | 0.488024 | 0.604079 | -0.116055 | -934.475144 |
| task:python_tracebacks | 256 | 8052 | 0.488024 | 0.604079 | -0.116055 | -934.475144 |
| task:parentheses_balance | 256 | 290211 | 0.022107 | 0.019062 | 0.003045 | 883.665004 |
| task:parentheses_balance_5shot_icl | 256 | 290211 | 0.022107 | 0.019062 | 0.003045 | 883.665004 |
| task:arithmetic | 256 | 66916 | 0.112496 | 0.099581 | 0.012915 | 864.208192 |
| task:arithmetic_5shot_icl | 256 | 66916 | 0.112496 | 0.099581 | 0.012915 | 864.208192 |
| task:bfs_shortest_path | 256 | 124236 | 0.045962 | 0.039112 | 0.006850 | 851.042964 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/dense_numeric_blobs | 768 | 42428 | 1.053992 | 1.034052 | 0.019941 | 846.039848 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/structured_records | 512 | 26722 | 0.565416 | 0.596761 | -0.031345 | -837.591233 |
| subset:system | 256 | 8312 | 0.880633 | 0.780773 | 0.099860 | 830.036608 |
| task:systemd_journal | 256 | 8312 | 0.880633 | 0.780773 | 0.099860 | 830.036608 |
| fineweb2_multilingual/language/mup | 2 | 11054 | 0.990588 | 0.919824 | 0.070764 | 782.220209 |
| task:insertion_sort | 256 | 282356 | 0.089618 | 0.086895 | 0.002724 | 769.028076 |
| format:supervised | 2048 | 19125 | 1.663487 | 1.703125 | -0.039639 | -758.091310 |
| hf_revision:5d3d6dfdd1f1dd8a691099edade2f210d2f2e2e8 | 2048 | 19125 | 1.663487 | 1.703125 | -0.039639 | -758.091310 |
| seed:6505 | 2048 | 19125 | 1.663487 | 1.703125 | -0.039639 | -758.091310 |
| source:generated_synthetic_delimiter_format_ppl_v1 | 2048 | 19125 | 1.663487 | 1.703125 | -0.039639 | -758.091310 |
| synthetic_delimiter_format_ppl | 2048 | 19125 | 1.663487 | 1.703125 | -0.039639 | -758.091310 |
| subset:zeek | 256 | 4608 | 1.664316 | 1.501061 | 0.163255 | 752.278658 |
| task:zeek_conn_http_dns | 256 | 4608 | 1.664316 | 1.501061 | 0.163255 | 752.278658 |
| task:latex_reference_closure | 256 | 18434 | 1.184904 | 1.147609 | 0.037295 | 687.489245 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/structured_records | 512 | 26722 | 0.585768 | 0.609126 | -0.023359 | -624.191225 |
| subset:terraform | 256 | 21248 | 0.804643 | 0.777233 | 0.027410 | 582.400531 |
| task:terraform_hcl | 256 | 21248 | 0.804643 | 0.777233 | 0.027410 | 582.400531 |
| fineweb2_multilingual/script/Mtei | 2 | 4462 | 1.194957 | 1.314084 | -0.119127 | -531.544774 |
| prompt_variant:arrow | 2560 | 101287 | 0.692616 | 0.697829 | -0.005213 | -528.005536 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow | 2560 | 101287 | 0.692616 | 0.697829 | -0.005213 | -528.005536 |
| task:bio_accessions | 256 | 2493 | 4.286202 | 4.494572 | -0.208370 | -519.467462 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/structured_records | 512 | 26722 | 0.587331 | 0.606633 | -0.019303 | -515.809815 |
| task:svg_group_path_closure | 256 | 18688 | 0.820877 | 0.847165 | -0.026288 | -491.265646 |
| prompt_variant:equals | 2560 | 101287 | 0.702696 | 0.707462 | -0.004765 | -482.667892 |
| synthetic_numeric_format_prompt_ablation_ppl/equals | 2560 | 101287 | 0.702696 | 0.707462 | -0.004765 | -482.667892 |
| task:prim_mst | 256 | 250215 | 0.061857 | 0.060048 | 0.001809 | 452.630518 |
| subset:gh_pr_event_patch | 256 | 42496 | 0.501424 | 0.491186 | 0.010238 | 435.091926 |
| task:gh_pr_event_patch | 256 | 42496 | 0.501424 | 0.491186 | 0.010238 | 435.091926 |
| task:nested_attribute_tree | 256 | 10370 | 1.013910 | 0.976901 | 0.037009 | 383.787577 |
| fineweb2_multilingual/language/kas | 5 | 12557 | 1.551584 | 1.524263 | 0.027321 | 343.071055 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/numeric_transduction | 768 | 11437 | 0.640507 | 0.611756 | 0.028751 | 328.822448 |
| task:fasta_sequence_record | 256 | 6656 | 4.959284 | 5.004803 | -0.045519 | -302.971469 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/numeric_transduction | 768 | 11437 | 0.724069 | 0.749114 | -0.025045 | -286.434862 |
| task:topological_sort | 256 | 227222 | 0.019856 | 0.020883 | -0.001027 | -233.311818 |
| task:hex_dump_continuation | 256 | 11264 | 1.606976 | 1.627488 | -0.020513 | -231.054341 |
| task:clrs_topological_sort | 256 | 220262 | 0.020767 | 0.021719 | -0.000953 | -209.834400 |
| family:delimited_fields | 768 | 4864 | 2.901218 | 2.864719 | 0.036499 | 177.533401 |
| synthetic_delimiter_format_ppl/delimited_fields | 768 | 4864 | 2.901218 | 2.864719 | 0.036499 | 177.533401 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/format_transforms | 256 | 13531 | 0.101185 | 0.089578 | 0.011607 | 157.055844 |
| task:connected_components | 256 | 68645 | 0.060150 | 0.057892 | 0.002257 | 154.935956 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/format_transforms | 256 | 13531 | 0.075866 | 0.086468 | -0.010602 | -143.450501 |
| family:table_rows | 768 | 3584 | 1.353385 | 1.318685 | 0.034700 | 124.365754 |
| synthetic_delimiter_format_ppl/table_rows | 768 | 3584 | 1.353385 | 1.318685 | 0.034700 | 124.365754 |
| task:csv_next_field | 256 | 1792 | 2.556745 | 2.487367 | 0.069378 | 124.324686 |
| web_data_commons_sample10 | 12 | 145111 | 0.384266 | 0.385038 | -0.000772 | -112.046445 |
| task:html_entity_attribute_closure | 256 | 16384 | 1.437510 | 1.431136 | 0.006374 | 104.432951 |
| task:markdown_table_rows | 256 | 1280 | 1.513852 | 1.448713 | 0.065139 | 83.377667 |
| fineweb2_multilingual/language/sck | 1 | 1603 | 0.916714 | 0.867922 | 0.048793 | 78.214902 |
| subset:kubernetes_yaml | 256 | 18944 | 0.458918 | 0.455094 | 0.003824 | 72.443623 |
| task:kubernetes_yaml | 256 | 18944 | 0.458918 | 0.455094 | 0.003824 | 72.443623 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/format_transforms | 256 | 13531 | 0.096674 | 0.092054 | 0.004619 | 62.506099 |
| source:lichess | 256 | 188042 | 0.859080 | 0.859320 | -0.000240 | -45.050905 |
| surface:pgn | 256 | 188042 | 0.859080 | 0.859320 | -0.000240 | -45.050905 |
| task:aligned_space_columns | 256 | 4352 | 0.847220 | 0.837137 | 0.010084 | 43.884344 |
| task:rare_control_delimiters | 256 | 1280 | 2.765020 | 2.737572 | 0.027449 | 35.134668 |
| task:pipe_rows | 256 | 512 | 1.970867 | 1.906673 | 0.064194 | 32.867095 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/numeric_transduction | 768 | 11437 | 0.670557 | 0.672971 | -0.002414 | -27.614467 |
| task:tsv_next_field | 256 | 1792 | 3.342975 | 3.332889 | 0.010086 | 18.074047 |
| task:fixed_width_rows | 256 | 1792 | 1.062342 | 1.057810 | 0.004532 | 8.120992 |
| task:clrs_connected_components | 256 | 67875 | 0.057547 | 0.057520 | 0.000026 | 1.765565 |

## Pattern Buckets

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| text/non_ascii_word | 4345022 | 55949119 | 0.786883 | 0.605629 | 0.181253 | 10140953.513628 |
| text/word | 12452318 | 67615356 | 0.784233 | 0.758652 | 0.025581 | 1729682.548486 |
| whitespace/single_space | 15799008 | 15799008 | 0.747732 | 0.672935 | 0.074798 | 1181730.674300 |
| text/number | 5369032 | 13384306 | 1.016027 | 0.931096 | 0.084931 | 1136738.945000 |
| text/punctuation | 9892768 | 14133067 | 0.413185 | 0.388331 | 0.024854 | 351264.766751 |
| text/url | 31198 | 8881548 | 0.261222 | 0.235151 | 0.026070 | 231545.723535 |
| text/non_ascii | 606539 | 3515361 | 1.348553 | 1.372873 | -0.024320 | -85493.917144 |
| whitespace/multi_space | 1738273 | 4546808 | 0.084925 | 0.067564 | 0.017361 | 78935.430062 |
| whitespace/newline | 1030566 | 1030566 | 0.844474 | 0.790786 | 0.053688 | 55328.925533 |
| whitespace/mixed | 723039 | 4577207 | 0.162216 | 0.156207 | 0.006009 | 27503.377145 |
| whitespace/multi_newline | 109251 | 234352 | 0.554682 | 0.620901 | -0.066219 | -15518.607918 |
| whitespace/tab_or_cr | 366107 | 880130 | 0.515684 | 0.515559 | 0.000125 | 109.832632 |

## Top Documents: Model A Worse

| dataset | shard | row_index | bytes | score_byte_start | score_byte_end | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| long_tail_ppl/code_ecosystem/stack_v2_json | heldout_jsonl_gz | 34 | 32768 | 0 | 32768 | 4.778370 | 3.715211 | 1.063159 | 34837.594175 | text/word | dzzSkgDJOKAFooooAKKaXVTgsAfrShl… | 1.771854 | …WikJAIGeT0paACim+YhfYHXd/dzzSkgDJOKAFooooAKKaXVTgsAfrShlboQfpQAtFFFABRTTIgcIWUOeQueTTqACimebHu2713ZxjIznrT6ACikLAEAnk9… |
| long_tail_ppl/code_ecosystem/stack_v2_html | heldout_jsonl_gz | 82 | 32768 | 0 | 32768 | 3.640131 | 2.872623 | 0.767508 | 25149.708568 | text/word | TwABtWACmhwAEIAABCEBgegIYoOmZMy… | 3.535563 | …ACEIAABCAwPQEM0PTMmRECEIAABCAAgQ0TwABtWACmhwAEIAABCEBgegIYoOmZMyMEIAABCEAAAhsmgAHasABM759A+56soUzbd2elj45L33ruv+K9GbYv… |
| fineweb2_multilingual/lit_Latn | 0000_parquet | 191 | 32768 | 0 | 32768 | 1.971101 | 1.265112 | 0.705990 | 23133.866318 | text/non_ascii_word | Pašnibždomis | 3.426028 | …augelis␠kitų.␠Buvo␠darbininkų,␠ūkininkų,␠valdininkų.␠Pašnibždomis␠pasakė,␠kad␠laikyčiausi␠atsargiai,␠nes␠kartu␠yra␠įle… |
| long_tail_ppl/code_ecosystem/stack_v2_json | heldout_jsonl_gz | 223 | 32768 | 0 | 32768 | 5.004369 | 4.348159 | 0.656210 | 21502.679261 | text/word | npXNXMSMhkddxzgDFFNmkHdHPKxZWmk… | 1.177584 | …zlc23cy72wLINxIX0HeuW1F54rnYDhRXfX8eYs+npXNXMSMhkddxzgDFFNmkHdHPKxZWmkBDDhaSwsnu2cqRuzxzT9Rdnfy1GMDgVLpsUkDptJ68mt3oje… |
| long_tail_ppl/code_ecosystem/stack_v2_tex | heldout_jsonl_gz | 244 | 32768 | 0 | 32768 | 1.548053 | 0.893523 | 0.654530 | 21447.649267 | text/non_ascii_word | 开天行道肇纪立极大圣至神仁文义武俊德成功高皇帝 | 2.313493 | …帝，原名朱重八，曾改名朱興宗，投军被郭子兴取名元璋，字国瑞，生於濠州钟离县。廟號「太祖」，谥號「开天行道肇纪立极大圣至神仁文义武俊德成功高皇帝」，統稱「太祖高皇帝」。在位三十一年，因年号洪武也俗稱洪武帝。太祖之後的皇帝除明英宗（二度在位… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 28 | 32767 | 0 | 32767 | 1.571179 | 0.921850 | 0.649329 | 21276.563310 | text/non_ascii_word | کانپوءِ | 2.409375 | …يو␠آهي.“[5]⏎عسفان␠۾[سنواريو]⏎پنهنجي␠قبيلي␠کان␠مطمئن␠ٿيڻ␠کانپوءِ␠ابوذر␠رضي␠الله␠عنه␠ٻين␠آسپاس␠جي␠بستين␠ڏانهن␠متوجهه␠ٿيو… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 107 | 32768 | 0 | 32768 | 1.596946 | 0.953343 | 0.643603 | 21089.581357 | text/non_ascii_word | ڀڃڪڙي | 3.305525 | …ل␠هيا،␠عرب␠سپاهين␠ڏٺيون␠ته␠ديوانا␠ٿي␠پيا.␠انهن␠معاهدي␠جي␠ڀڃڪڙي␠ڪئي.␠مندر␠جي␠خزاني␠کي␠لٽيو␠۽␠اڻويهه␠عورتن␠جي␠جسم␠تي␠جيڪ… |
| fineweb2_multilingual/lit_Latn | 0000_parquet | 87 | 32768 | 0 | 32768 | 1.642659 | 1.023276 | 0.619384 | 20295.961897 | text/word | vestibiulio | 3.785981 | …alus.␠„Ekskursija“␠po␠namus␠prasidėjo␠nuo␠šešiakampio␠vestibiulio␠su␠sietynu␠ir␠juodomis␠grindų␠plytelėmis␠bei␠erdvios… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 42 | 32768 | 0 | 32768 | 1.316284 | 0.704966 | 0.611318 | 20031.653426 | text/non_ascii_word | جيتوڻيڪ | 2.357972 | …ته:␠وحدانيت␠جي␠گواهي␠جي␠تاويل␠۽␠باطني␠حقيقت،␠اخلاص␠آهي.⏎جيتوڻيڪ␠عام␠اصطلاح␠۾␠اخلاص␠مان␠”عمل␠جو␠خالص␠هجڻ“␠مراد␠ورتي␠وين… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 39 | 32768 | 0 | 32768 | 1.655513 | 1.055393 | 0.600119 | 19664.707091 | text/non_ascii_word | ميرپوربٺورو | 1.642544 | …ر⏎ڪمپوزنگ:␠نعمان␠علي␠جوڻيجو⏎ڇپائيندڙ:␠سنڌي␠ادبي␠سنگت-␠ميرپوربٺورو⏎ڇپيندڙ:␠ساحل␠پرنٽر␠اينڊ␠پبليشر␠حيدرآباد␠03332634650⏎… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 94 | 29220 | 0 | 29220 | 1.582095 | 0.910231 | 0.671864 | 19631.863370 | text/non_ascii_word | کانسواءِ | 2.325343 | …نيتي␠آهي␠ته␠ڍلن␠وڌائڻ␠بدران␠پاڻ␠گهٽائڻ␠ضروري␠آهن،␠انهي␠کانسواءِ␠ڪانگريس␠جو␠رايو␠آهي␠ته␠تمام␠ننڍا␠کاتيدار␠جن␠کي␠پوک␠مان… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 43 | 32768 | 0 | 32768 | 1.670826 | 1.083791 | 0.587035 | 19235.961751 | text/non_ascii_word | کانسواءِ | 2.211545 | …تي␠جوڙڻ␠۽␠پنهنجي␠علمي،␠ادبي␠۽␠تهذيبي␠ورثي␠کي␠جيئرو␠رکڻ␠کانسواءِ␠اسان␠عام␠ماڻهوءَ␠جي␠جذبن␠جي␠اپٽار␠۽␠عڪاسي␠نٿا␠ڪري␠سگھو… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 159 | 30954 | 0 | 30954 | 1.489357 | 0.890149 | 0.599208 | 18547.894663 | text/non_ascii_word | مينيجمينٽ | 2.101733 | …␠مارڪيٽنگ␠،␠خريداري␠،␠گودام␠،␠پيداوار␠ڪنٽرول␠،␠پراجيڪٽ␠مينيجمينٽ␠،␠ريسورس␠پلاننگ␠،␠سروس␠ايريا␠،␠۽␠وسيلن␠جي␠صلاحيتن␠سان… |
| fineweb2_multilingual/lvs_Latn | 0000_parquet | 234 | 32768 | 0 | 32768 | 1.337886 | 0.773540 | 0.564346 | 18492.499960 | text/non_ascii_word | Itālija-KrievijaLabot | 2.320926 | …jās␠divas␠to␠atbalstīs,␠bet␠paliks␠neitrālas.[9]⏎Itālija-KrievijaLabot⏎1909.␠gada␠24.␠oktobrī␠Krievija␠un␠Itālija␠para… |
| fineweb2_multilingual/lit_Latn | 0000_parquet | 175 | 32768 | 0 | 32768 | 1.562170 | 1.023402 | 0.538768 | 17654.353608 | text/non_ascii_word | šaligatviuose | 2.605644 | …apčiomis␠filmavo␠eiseną.␠Miestelyje␠prie␠sankryžų␠ir␠šaligatviuose␠stovėjo␠milicininkai␠ir␠įdėmiai␠stebėjo␠praeinančiu… |
| fineweb2_multilingual/lit_Latn | 0000_parquet | 249 | 32768 | 0 | 32768 | 1.415676 | 0.883768 | 0.531908 | 17429.575604 | text/non_ascii_word | rankšluostį | 2.941193 | …␠plastikinę␠skrybėlę␠ir␠ant␠viršaus␠užsiriškite␠šiltą␠rankšluostį.␠Po␠45–60␠minučių␠kruopščiai␠nuplaukite␠šiltu␠vanden… |
| fineweb2_multilingual/kaz_Cyrl | 0000_parquet | 255 | 32768 | 0 | 32768 | 1.251261 | 0.743623 | 0.507638 | 16634.285289 | text/non_ascii_word | отансүйгіштікке | 1.849297 | …тары␠бар,␠оқырманын␠ойлантып,␠толғантатын,␠жастарды␠отансүйгіштікке,␠адалдыққа,␠шынайы␠махаббат␠пен␠достыққа␠шақыратын… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 211 | 32767 | 0 | 32767 | 1.397468 | 0.895179 | 0.502290 | 16458.529330 | text/non_ascii_word | اڪائونٽنٽ | 2.387632 | …دبئي␠شهر␠۾␠واڌارو␠آهي.␠بس␠هن␠قسم␠جا␠ڪيريئر␠حاصل␠ڪرڻ␠لاء␠توهان␠جونيئر␠اڪائونٽنٽ␠طور␠تي␠شروع␠ڪري␠سگهو␠ٿا.␠حقيقت␠جي␠طور␠ت |
| fineweb2_multilingual/ekk_Latn | 0000_parquet | 125 | 32768 | 0 | 32768 | 1.411789 | 0.912448 | 0.499340 | 16362.382059 | text/word | diferentseerumisega | 3.109192 | …astaase.␠Pahaloomulised␠kasvajad␠koosnevad␠madala␠diferentseerumisega␠rakkudest,␠kipuvad␠kasvama␠ümbritsevatesse␠kuded… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 35 | 27936 | 0 | 27936 | 1.704718 | 1.122569 | 0.582149 | 16262.916108 | text/non_ascii_word | چنيءَ | 3.117563 | …ڪيو.␠زمين␠ڦاٽي␠پيئي␠۽␠سسئي␠اندر␠گهڙي␠ويئي.␠فقط␠سسئيءَ␠جي␠چنيءَ␠جو␠پلاند␠ٻاهر␠رهجي␠ويو.␠ريڍار␠موٽي␠اچي،␠ته␠ٻيو␠ڪجهه␠به␠… |
| long_tail_ppl/code_ecosystem/stack_v2_html | heldout_jsonl_gz | 39 | 32768 | 0 | 32768 | 1.344089 | 0.872685 | 0.471403 | 15446.944247 | text/word | lJiZhLmlubmVySFRNTCYmIXAudHJpbS… | 0.983093 | …HAuc3VwcG9ydC5odG1sNUNsb25lJiZhLmlubmVySFRNTCYmIXAudHJpbShiLmlubmVySFRNTCkmJihiLmlubmVySFRNTD1hLmlubmVySFRNTCkpOmM9PT0… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 41 | 24704 | 0 | 24704 | 1.439736 | 0.835666 | 0.604069 | 14922.929333 | text/non_ascii_word | وڪيپيڊيا | 2.757850 | …ڇڏيندس.⏎وڪيپيڊيا␠تي␠ٽيڪسٽ␠کي␠لنڪ␠ڪيئن␠ڪجي␠۽␠پڻ␠اهو␠لنڪ␠وڪيپيڊيا␠تائين␠محدود␠آهي␠يا␠ڪنهن␠به␠سائِيٽ␠جو␠رکي␠سگھجي␠ٿو؟[سنو… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 220 | 23032 | 0 | 23032 | 1.375507 | 0.734954 | 0.640554 | 14753.229651 | text/non_ascii_word | آپٽمائزيشن | 1.896024 | …␠گهمڻ␠وارن␠جي␠تعداد␠۾␠مسلسل␠واڌارو␠ڪرڻ␠لاءِ.␠سرچ␠انجن␠آپٽمائزيشن␠(ايس␠اي␠او)␠،␠سادي␠اصطلاحن␠۾␠،␠اندروني␠۽␠بيروني␠اصلاح… |
| fineweb2_multilingual/ekk_Latn | 0000_parquet | 96 | 32767 | 0 | 32767 | 1.576569 | 1.129156 | 0.447413 | 14660.393033 | text/word | magamaminekut | 4.244431 | …␠1␠tund,␠tühjendada,␠pigistada.␠Võtke␠50-60␠gr.␠Enne␠magamaminekut.␠Kahjutu␠rahvapärane␠ravim␠unetuse␠vastu␠tagab␠hea␠… |
| fineweb2_multilingual/hun_Latn | 0000_parquet | 184 | 32164 | 0 | 32164 | 1.659141 | 1.204735 | 0.454406 | 14615.525586 | text/non_ascii_word | álldogáló | 3.205488 | …elen␠megakadsz␠a␠kilincs␠kezelésében,␠akkor␠a␠közelben␠álldogáló␠Evan␠Dodds␠–␠Exchange2007␠Shell␠program␠menedzser␠–␠p… |

## Top Documents: Model B Worse

| dataset | shard | row_index | bytes | score_byte_start | score_byte_end | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fineweb2_multilingual/nob_Latn | 0000_parquet | 116 | 27306 | 0 | 27306 | 1.268940 | 1.884262 | -0.615322 | -16801.991961 | text/word | rannveigheitmannblogg | -2.353139 | …o␠hvordan␠barbere␠seg␠nedentil␠menn␠gangbang␠ski␠rannveigheitmannblogg␠lek.⏎vedio␠real␠massage␠xxx␠victoriamilan␠no␠tr… |
| paloma/m2d2_s2orc_unsplit | cs_CY_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.242476 | 0.635993 | -0.393518 | -12894.787490 | text/word | Reinnasance | -2.557481 | …,␠the␠Safevids,␠and␠the␠Mughals.␠We␠continue␠with␠the␠Reinnasance␠period,␠the␠Protestant␠Reformation,␠and␠colonization… |
| paloma/falcon-refinedweb | 0_jsonl_gz | 99 | 22544 | 0 | 22544 | 0.136271 | 0.651204 | -0.514933 | -11608.645132 | text/word | personal | -2.702497 | …␠Accident␠Lawyers␠Farragut,␠Remember␠that␠you␠ought␠to␠personal␠injury␠lawyer␠nyc␠only␠pick␠lawyers␠who␠agree␠to␠go␠to… |
| paloma/m2d2_s2orc_unsplit | physics_hist-ph_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.317734 | 0.667358 | -0.349624 | -11456.474070 | text/word | Hermansphan | -2.877085 | …ion␠must␠be␠multiples␠of␠,␠too.␠Only␠in␠recent␠years,␠Hermansphan␠et␠al.␠(2000)␠have␠shown␠that␠the␠Larmor␠precession␠… |
| paloma/m2d2_s2orc_unsplit | physics_l1_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.317734 | 0.667358 | -0.349624 | -11456.474070 | text/word | Hermansphan | -2.877085 | …ion␠must␠be␠multiples␠of␠,␠too.␠Only␠in␠recent␠years,␠Hermansphan␠et␠al.␠(2000)␠have␠shown␠that␠the␠Larmor␠precession␠… |
| long_tail_ppl/code_ecosystem/stack_v2_assembly | heldout_jsonl_gz | 172 | 32768 | 0 | 32768 | 0.073566 | 0.419903 | -0.346337 | -11348.777851 | text/number | 07300713 | -3.772416 | …␠va_arg(ap,␠uint64));⏎␠␠␠␠␠␠}␠else␠if(c␠==␠'s'){⏎␠4d8:⇥07300713␠␠␠␠␠␠␠␠␠␠⇥li⇥a4,115⏎␠4dc:⇥0ce78663␠␠␠␠␠␠␠␠␠␠⇥beq⇥a5,a4… |
| long_tail_ppl/code_ecosystem/stack_v2_assembly | heldout_jsonl_gz | 38 | 32768 | 0 | 32768 | 0.076857 | 0.418937 | -0.342080 | -11209.284878 | text/number | 000000000000033 | -4.418234 | …␠␠␠␠␠␠␠␠⇥ecall⏎␠ret⏎␠338:⇥8082␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠⇥ret⏎⏎000000000000033a␠<mknod>:⏎.global␠mknod⏎mknod:⏎␠li␠a7,␠SYS_mknod⏎␠… |
| long_tail_ppl/code_ecosystem/stack_v2_assembly | heldout_jsonl_gz | 12 | 32768 | 0 | 32768 | 0.079163 | 0.411766 | -0.332603 | -10898.736157 | text/number | 19 | -15.891768 | …019c␠<stat>:⏎⏎int⏎stat(const␠char␠*n,␠struct␠stat␠*st)⏎{⏎␠19c:⇥1101␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠⇥addi⇥sp,sp,-32⏎␠19e:⇥ec06␠␠␠␠␠␠␠␠␠… |
| fineweb2_multilingual/fin_Latn | 0000_parquet | 101 | 18304 | 0 | 18304 | 1.098249 | 1.637889 | -0.539639 | -9877.555622 | text/word | orkasmin | -5.018648 | …es␠etsii␠naista␠transvestiitti␠seuraa␠miten␠nainen␠saa␠orkasmin␠free␠webcam␠xxx␠erotic␠massage␠the␠hairy␠pussy␠ilmaise… |
| fineweb2_multilingual/nob_Latn | 0000_parquet | 99 | 13197 | 0 | 13197 | 0.971538 | 1.706080 | -0.734543 | -9693.760418 | text/non_ascii_word | kjønnsleppen | -2.691212 | …inger␠sex␠lillehammer␠sms␠sextreff␠knullefilm␠kul␠på␠kjønnsleppen.␠Erotisk␠sex␠gratis␠date␠sider␠utendørs␠sex␠gratis␠n… |
| paloma/m2d2_s2orc_unsplit | astro-ph_EP_jsonl_gz | 0 | 32767 | 0 | 32767 | 0.360212 | 0.653146 | -0.292935 | -9598.586297 | text/word | materials | -2.486607 | …nets␠(Zhou␠et␠al.␠2005)␠.␠Mandell␠et␠al.␠(2007)␠showed␠materials␠that␠have␠been␠shepherded␠interior␠to␠the␠migrating␠g… |
| fineweb2_multilingual/swe_Latn | 0000_parquet | 238 | 17991 | 0 | 17991 | 0.871014 | 1.380438 | -0.509425 | -9165.057718 | text/word | sprutsugen | -3.220849 | …ting␠för␠gifta␠gratis␠dejtingsajt⏎Sexleksaker␠för␠män␠sprutsugen⏎Sexig␠klänningar␠sextips␠till␠tjejer␠Sex␠shop␠sverige… |
| fineweb2_multilingual/dan_Latn | 0000_parquet | 225 | 17872 | 0 | 17872 | 1.038346 | 1.537137 | -0.498791 | -8914.392092 | text/word | cassiopeiastars | -1.809823 | …ntim␠massage␠midtjylland␠Homoseksuel␠dansk␠pige␠sex␠cassiopeiastars␠dk⏎Homo␠massage␠sex␠vejle␠porn␠katja␠k⏎homoseksuel… |
| fineweb2_multilingual/dan_Latn | 0000_parquet | 230 | 14820 | 0 | 14820 | 1.244885 | 1.816136 | -0.571251 | -8465.938589 | text/word | saltvandsbryster | -2.296897 | …␠ømme␠bryster␠op␠til␠menstruation,⏎,␠katja␠k␠video␠saltvandsbryster,␠Seksueltforhold␠dk␠stripper␠nordjylland⏎Nakkeost␠… |
| paloma/m2d2_s2orc_unsplit | cs_ET_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.502607 | 0.753275 | -0.250669 | -8213.911788 | text/word | single-inverter-delay | -1.153831 | …es,␠which␠extend␠the␠precision␠to␠the␠order␠of␠a␠single-inverter-delay,␠can␠be␠used␠for␠more␠precise␠measurements␠[22]… |
| fineweb2_multilingual/dan_Latn | 0000_parquet | 226 | 18079 | 0 | 18079 | 1.287089 | 1.733486 | -0.446397 | -8070.411070 | text/word | sugardaters | -3.037244 | …␠mænd␠Apex␠Pizza␠Hvidovre␠Fisse␠Billeder␠kneppe␠fisse␠sugardaters␠anmeldelse␠Escort␠vejleder␠store␠buttet␠bryster␠Esco… |
| paloma/m2d2_s2orc_unsplit | physics_ins-det_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.447944 | 0.670367 | -0.222424 | -7288.374629 | text/word | PREMUX | -3.504730 | …t␠gap␠was␠kept␠as␠3mm.⏎Two␠detectors␠were␠equipped␠with␠PREMUX␠hybrid␠with␠512␠channels␠each.␠Detailed␠description␠of␠… |
| fineweb2_multilingual/nob_Latn | 0000_parquet | 119 | 15211 | 0 | 15211 | 0.994729 | 1.461930 | -0.467200 | -7106.580933 | text/word | Ubeskyttet | -3.402975 | …e␠Bøsse␠Gutter␠Knulle␠hardt␠imlive␠homoseksuell⏎Bøsse␠Ubeskyttet␠Samleie␠Escorte␠Oppland⏎find␠a␠fuck␠date␠group␠chat␠h… |
| fineweb2_multilingual/fin_Latn | 0000_parquet | 102 | 12935 | 0 | 12935 | 1.111047 | 1.646587 | -0.535540 | -6927.211892 | text/non_ascii_word | pettämissivusto | -2.089946 | …näläinen␠porno␠suomalainen␠mies␠Parhaat␠pornovideot␠pettämissivusto␠victoria␠milan,⏎Kotitekoinen␠pillu␠pornoon␠seksivi… |
| paloma/mc4 | 0_jsonl_gz | 160 | 32768 | 0 | 32768 | 0.563582 | 0.770600 | -0.207018 | -6783.568401 | text/word | MADEBYYOU | -5.492675 | …ping␠on␠qualified␠orders␠over␠$␠25␠shipped␠by␠Amazon␠20MADEBYYOU␠11␠colors␠…␠Introducing␠Coloris,␠DMC␠manufactured!␠To… |
| paloma/m2d2_wikipedia_unsplit | Mathematics_and_logic__Mathematics_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.412529 | 0.612294 | -0.199765 | -6545.887887 | text/number | 190.58 | -3.754638 | …ollapse␠of␠the␠junk␠bond␠market␠causing␠the␠Dow␠to␠fall␠190.58␠points,␠or␠6.91␠percent.⏎Similarly,␠there␠was␠a␠panic␠i… |
| paloma/m2d2_wikipedia_unsplit | Mathematics_and_logic_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.412529 | 0.612294 | -0.199765 | -6545.887887 | text/number | 190.58 | -3.754638 | …ollapse␠of␠the␠junk␠bond␠market␠causing␠the␠Dow␠to␠fall␠190.58␠points,␠or␠6.91␠percent.⏎Similarly,␠there␠was␠a␠panic␠i… |
| paloma/m2d2_s2orc_unsplit | cond-mat_soft_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.511989 | 0.706949 | -0.194960 | -6388.451658 | text/word | Kronberg | -3.472698 | …eity,␠causing␠a␠decrease␠in␠the␠entropy␠of␠the␠system␠(Kronberg␠et␠al.,␠1995)␠.␠An␠entropic␠force␠acts␠to␠gather␠toget… |
| fineweb2_multilingual/fin_Latn | 0000_parquet | 98 | 13339 | 0 | 13339 | 1.184300 | 1.661844 | -0.477544 | -6369.955889 | text/word | pakkotoisto | -3.390283 | …isään␠helsinki...␠Tutvumiskeskus␠anaboliset␠steroidit␠pakkotoisto␠Vaimo␠Luvalla␠Vieraissa␠Eroottiset␠Vaatteet␠Salkkari… |
| paloma/m2d2_wikipedia_unsplit | Culture_and_the_arts__The_arts_and_Entertainment_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.574165 | 0.766882 | -0.192717 | -6314.963143 | text/word | Sukiyanen | -3.334135 | …forward␠without␠looking␠back.␠Their␠late␠2005␠single,␠"Sukiyanen,␠Osaka/Oh!␠Enka/Mugendai"␠had␠shown␠signs␠of␠the␠grou… |

## Top Segments: Model A Worse

| dataset | bucket | bytes | delta_bits | gap_bpb | text | doc_preview |
| --- | --- | --- | --- | --- | --- | --- |
| long_tail_ppl/code_ecosystem/stack_v2_assembly | text/number | 933 | 1618.090399 | 1.734288 | 0,5,30,175,1020,5945,34650,2019… | …6092459417867769755,2779962110874670344845280,16202806572788604201301925,94436877325856954862966270,550418457382353124… |
| long_tail_ppl/code_ecosystem/stack_v2_assembly | text/number | 1007 | 820.072381 | 0.814372 | 18,340,2022,7400,20602,48060,99… | …700937160,1869252442,2050635420,2245832622,2455618480,2680795842,2922196484,3180681622,3457142424,3752500522,406770852… |
| raw_web_markup/common_crawl/wat | text/url | 10279 | 772.038489 | 0.075108 | http://webapi.weidaoliu.com/msg… | …tle":"瀹�寰界���虫���搴��ㄤ��藉伐瑕���","rel":"nofollow","text":"瀹�寰界���虫���搴��ㄤ��藉伐瑕���"},{"path":"A@/href","url":"/news115759… |
| long_tail_ppl/code_ecosystem/stack_v2_assembly | text/number | 663 | 720.198325 | 1.086272 | 1,1,7,73,793,8647,94321,1028881… | …41351886295070075746567,451079894183933072076481,4920526949728193717094721,53674716552826197815965447,5855013551313599… |
| raw_web_markup/common_crawl/wat | text/url | 21785 | 710.500355 | 0.032614 | https://soicaubet88.com/vn","ta… | …:"https://kqxoso2023.com/vn"},{"path":"A@/href","url":"https://kqxs-online.com/vn","target":"_blank","text":"https://k… |
| long_tail_ppl/code_ecosystem/stack_v2_assembly | text/number | 1123 | 710.154715 | 0.632373 | 0,24,576,4320,19200,63000,16934… | …6530176,47753786520,53348803200,59479728000,66186860544,73512731736,81502184640,90202456800,99663264000,109936885464,1… |
| long_tail_ppl/code_ecosystem/stack_v2_assembly | text/number | 1473 | 636.421629 | 0.432058 | 1,4,12,34,96,274,792,2314,6816,… | …5612872,2153693965327357579995994,6461081893730272926302736,19383245676687219151537714,58149737021054458199872152,1744… |
| raw_web_markup/common_crawl/wat | text/url | 3980 | 613.304782 | 0.154097 | http://anooblog.com/wp-content/… | …ttp://anooblog.com/2024/12/02/%e3%80%90%e6%9c%97%e5%a0%b1%e3%80%91%e3%83%80%e3%82%a4%e3%82%a8%e3%83%83%e3%83%88%e3%80%… |
| long_tail_ppl/code_ecosystem/stack_v2_assembly | text/number | 733 | 601.160396 | 0.820137 | 6,36,90,225,420,784,1260,2025,2… | …8276,1897506,2047761,2203740,2371600,2545620,2732409,2925810,3132900,3347070,3575881,3812256,4064256,4324320,4601025,4… |
| raw_web_markup/common_crawl/wat | text/url | 6881 | 597.519953 | 0.086836 | http://0553njl.com/","text":"河北… | …ry/","text":"综合荣誉"},{"path":"A@/href","url":"/qyry/dqry/","text":"党群荣誉"},{"path":"A@/href","url":"/qyry/zlry/","text":… |
| raw_web_markup/common_crawl/wat | text/url | 6048 | 575.020232 | 0.095076 | http://0553njl.com/","text":"河北… | …ext":"信息公开"},{"path":"A@/href","url":"/xxgk/qyjbqk.html","text":"企业基本情况"},{"path":"A@/href","url":"/xxgk/zztx/","text"… |
| raw_web_markup/common_crawl/wat | text/url | 3212 | 560.602993 | 0.174534 | https://www.google-analytics.co… | …:"STYLE/#text","href":"#wp-duotone-grayscale"},{"path":"STYLE/#text","href":"#wp-duotone-purple-yellow"},{"path":"STYL… |
| long_tail_ppl/code_ecosystem/stack_v2_assembly | text/number | 702 | 515.203637 | 0.733908 | 271,537,931,1477,2199,3121,4267… | …40301,572527,606009,640771,676837,714231,752977,793099,834621,877567,921961,967827,1015189,1064071,1114497,1166491,122… |
| gh_archive_structured_output/PullRequestEvent | text/url | 16291 | 512.444469 | 0.031456 | https://avatars.githubuserconte… | …ub.com/repos/mehrdad-ordobadi/melo-3.0/assignees{/user}","blobs_url":"https://api.github.com/repos/mehrdad-ordobadi/me… |
| long_tail_ppl/code_ecosystem/stack_v2_assembly | text/number | 728 | 500.790286 | 0.687899 | 398,1596,3594,6392,9990,14388,1… | …06,921504,960302,999900,1040298,1081496,1123494,1166292,1209890,1254288,1299486,1345484,1392282,1439880,1488278,153747… |
| raw_web_markup/common_crawl/warc | text/url | 220 | 500.689275 | 2.275860 | https://blogger.googleuserconte… | …l/AVvXsEiAHgKUhvkrvNB7krJX1Kp7EB70RIOgPtc2guSzmSAsgIZS16zil5R9YH3xMY1iG5OdnG-yXZeJxBzzLCeKsaC539_BIyzdKMDXBmwZX8bOBdPI… |
| gh_archive_structured_output/PullRequestEvent | text/url | 17311 | 497.833738 | 0.028758 | https://avatars.githubuserconte… | …mits_url":"https://api.github.com/repos/mehrdad-ordobadi/melo-3.0/commits{/sha}","compare_url":"https://api.github.com… |
| long_tail_ppl/code_ecosystem/stack_v2_assembly | text/number | 1170 | 465.118136 | 0.397537 | 11,36,140,540,2108,8316,33020,1… | …414098980860,2417851639231457372667900,9671406556921431444160508,38685626227676929683619836,15474250491069012654843494… |
| gh_archive_structured_output/PullRequestEvent | text/url | 17027 | 450.506799 | 0.026458 | https://avatars.githubuserconte… | …,"comments_url":"https://api.github.com/repos/subi9807/javaSpringMvcSample/comments{/number}","commits_url":"https://a… |
| raw_web_markup/common_crawl/wat | text/url | 12723 | 450.405495 | 0.035401 | https://lf6-cdn-tos.bytecdntp.c… | …target":"_blank","title":"未列入名册","text":"HD6.6"},{"path":"IMG@/src","url":"/template/zi/static/images/loading.gif","al… |
| gh_archive_structured_output/PullRequestEvent | text/url | 17599 | 445.265339 | 0.025301 | https://avatars.githubuserconte… | …ithub.com/users/Chaos0103/orgs","received_events_url":"https://api.github.com/users/Chaos0103/received_events","repos_… |
| long_tail_ppl/code_ecosystem/stack_v2_assembly | text/number | 589 | 442.022794 | 0.750463 | 1,4,11,25,48,83,133,200,287,397… | …711,50785,53988,57323,60793,64400,68147,72037,76072,80255,84589,89076,93719,98521,103484,108611,113905,119368,125003,1… |
| long_tail_ppl/code_ecosystem/stack_v2_assembly | text/number | 705 | 434.898124 | 0.616877 | 109,271,553,971,1573,2375,3425,… | …859,687885,729519,772809,817771,864453,912871,963073,1015075,1068925,1124639,1182265,1241819,1303349,1366871,1432433,1… |
| fineweb2_multilingual/tha_Thai | text/non_ascii_word | 4170 | 427.915309 | 0.102618 | บาทในกรณีแบบนี้จะเห็นได้อย่างชั… | …ของการร่วมสนุกกับโปรโมชั่นพวกนั้นว่ามีขอบเขตอยู่ที่ขณะใดถ้าเกิดเราเลือกรับโปรโมชั่นตัวนั้นไปแล้วและโปรโมชั่นก็ยังไม่หม… |
| gh_archive_structured_output/PullRequestEvent | text/url | 16809 | 420.269434 | 0.025003 | https://avatars.githubuserconte… | …or_providers_tf","repo":{"allow_forking":true,"archive_url":"https://api.github.com/repos/trevorpatch73/cisco-aci-terr… |
| long_tail_ppl/code_ecosystem/stack_v2_json | text/number | 3977 | 418.610771 | 0.105258 | 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0… | ….082794345906187,0.096177037926029,0.091438563498622,0.081449445993367,0.081620168876847,0.097670964757686,0.087881091… |
| gh_archive_structured_output/PullRequestEvent | text/url | 15962 | 417.868983 | 0.026179 | https://avatars.githubuserconte… | …ubscriptions","type":"Organization","url":"https://api.github.com/users/usdot-jpo-ode"}},"body":null,"changed_files":1… |
| raw_web_markup/common_crawl/wat | text/url | 277 | 413.978679 | 1.494508 | http://abaragambi.com/index.php… | …m/","WARC-Protocol":"http/1.1","WARC-Payload-Digest":"sha1:EQ4ZJZCI62D2F2V6UWLRJZQEUZIRFSOV","WARC-Block-Digest":"sha1… |
| long_tail_ppl/code_ecosystem/stack_v2_json | text/number | 3680 | 395.153571 | 0.107379 | 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0… | …8024410068488,0.087646739891507,0.083474986624391,0.08297052929753,0.082634224412956,0.093793578745991,0.0761893216046… |
| raw_web_markup/common_crawl/wat | text/url | 15416 | 389.877318 | 0.025290 | http://37online.com/post/1600.h… | …http://37online.com/post/1657.html","target":"_blank","title":"旭辉爆料最新消息,揭秘行业动态，洞察市场新趋势","text":"旭辉爆料最新消息,揭秘行业动态，洞察市场新趋… |
| gh_archive_structured_output/PullRequestEvent | text/url | 18586 | 389.740252 | 0.020970 | https://avatars.githubuserconte… | …"archived":false,"assignees_url":"https://api.github.com/repos/GabrielCamiloOliveira/ds_projeto_educacional/assignees{… |
| raw_web_markup/common_crawl/wat | text/url | 694 | 386.111330 | 0.556356 | https://www.addtoany.com/add_to… | …25e3%2583%2580%25e3%2583%25bc%25e3%2581%258c%25e5%2585%25a5%25e3%2581%25a3%25e3%2581%25a6%25e3%2581%259f%25e3%2582%259… |
| gh_archive_structured_output/PullRequestEvent | text/url | 15265 | 385.959554 | 0.025284 | https://avatars.githubuserconte… | …:"leonardotomascostadasilva-patch-1","repo":{"allow_forking":true,"archive_url":"https://api.github.com/repos/<ID_25>/… |
| gh_archive_structured_output/PullRequestEvent | text/url | 16370 | 381.614889 | 0.023312 | https://avatars.githubuserconte… | …eal-brother-ssafy/eggolism-study/pulls/18/commits","created_at":"<DATE:2024-02-01>","deletions":0,"diff_url":"https://… |
| gh_archive_structured_output/PullRequestEvent | text/url | 14856 | 380.720963 | 0.025627 | https://avatars.githubuserconte… | …"allow_forking":true,"archive_url":"https://api.github.com/repos/KGrim23/bs-ssg-site/{archive_format}{/ref}","archived… |
| raw_web_markup/common_crawl/warc | text/url | 265 | 375.369486 | 1.416489 | http://www.odnoklassniki.ru/dk?… | …surl=anyreplicawatches-blog.com/2018-1-19-updat-breitling-watches/','1410949501326','width=700,height=500,toolbar=0,me… |
| bio_chem/rcsb/rcsb_mmcif | text/word | 80 | 360.594172 | 4.507427 | QKQYWVCNSSDASISYTYCDKMQYPISINVN… | …LFCLEFVILHQPNSN⏎;⏎;QKQYWVCNSSDASISYTYCDKMQYPISINVNPCIELKGSKGLLHIFYIPRRDLKQLYFNLYITVNTMNLPKRKEVICRGS⏎DDDYSFCRALKGETVNTT… |
| gh_archive_structured_output/PullRequestEvent | text/url | 13944 | 360.403785 | 0.025847 | https://avatars.githubuserconte… | …y":null,"changed_files":8,"closed_at":null,"comments":0,"comments_url":"https://api.github.com/repos/KGrim23/bs-ssg-si… |
| gh_archive_structured_output/PullRequestEvent | text/url | 15825 | 357.946336 | 0.022619 | https://avatars.githubuserconte… | …ll,"changed_files":1,"closed_at":null,"comments":0,"comments_url":"https://api.github.com/repos/trevorpatch73/cisco-ac… |
| bio_chem/rcsb/rcsb_mmcif | text/word | 80 | 354.885904 | 4.436074 | YELPDGQVITIGNERFRCPETLFQPSFIGME… | …DFENEMATAASSSSLEKS⏎YELPDGQVITIGNERFRCPETLFQPSFIGMESAGIHETTYNSIMKCDIDIRKDLYANNVMSGGTTMYPGIADRMQKEITA⏎LAPSTMKIKIIAPPERKY… |

## Top Segments: Model B Worse

| dataset | bucket | bytes | delta_bits | gap_bpb | text | doc_preview |
| --- | --- | --- | --- | --- | --- | --- |
| raw_web_markup/common_crawl/wat | text/url | 300 | -500.984147 | -1.669947 | http://afrique-infos.com/2026/0… | …etting-sites/","WARC-Protocol":"http/1.1","WARC-Payload-Digest":"sha1:TIE7CSY7QZMWIK2DUIUTXO2Q5LBJRMVD","WARC-Block-Di… |
| raw_web_markup/common_crawl/wat | text/url | 255 | -492.874593 | -1.932842 | http://07921.cn/article/cid/12/… | …rotocol":"http/1.1","WARC-Payload-Digest":"sha1:YZYR4GUWFU4ZEIH7PK2AR3CFN2PTD6J7","WARC-Block-Digest":"sha1:YHSRWUXYUV… |
| raw_web_markup/common_crawl/wat | text/url | 298 | -488.655318 | -1.639783 | http://48.dou.spb.ru/roditelyam… | …","WARC-Protocol":"http/1.1","WARC-Payload-Digest":"sha1:QAEEZ55CUAEFSZGIRVNQVXVR65NIHFVO","WARC-Block-Digest":"sha1:7… |
| raw_web_markup/common_crawl/wat | text/url | 481 | -460.728147 | -0.957855 | https://blogger.googleuserconte… | …lyymu37ncGoTJNEkP0X9/s1600/anaphria3.jpg"},{"path":"IMG@/src","url":"https://blogger.googleusercontent.com/img/b/R29vZ… |
| raw_web_markup/common_crawl/wat | text/url | 274 | -451.257141 | -1.646924 | http://amgns54.blogspot.com/201… | …","WARC-Protocol":"http/1.1","WARC-Payload-Digest":"sha1:CAKDYO7FUTN7SR52RGQV5VLC6LTGQ6VL","WARC-Block-Digest":"sha1:E… |
| long_tail_ppl/code_ecosystem/stack_v2_json | text/url | 4689 | -419.561920 | -0.089478 | http://www.ted.com/talks/$1","t… | …roperty":"P2429","datavalue":{"value":{"entity-type":"item","numeric-id":47169297,"id":"Q47169297"},"type":"wikibase-e… |
| raw_web_markup/common_crawl/wat | text/url | 236 | -417.827734 | -1.770456 | http://3iio8u.xyyanglao.com/","… | …ARC-Payload-Digest":"sha1:VSOW7I4UXV4Z4GMHOLNCEMVQ7JW5ZTS7","WARC-Block-Digest":"sha1:AMLPR2S4NHF25PRAH62ZQW4XIIWQIJJ5… |
| raw_web_markup/common_crawl/wat | text/url | 4060 | -408.731013 | -0.100673 | http://anooblog.com/wp-content/… | …ts/fontawesome/css/font-awesome.min.css?ver=6.1.9&fver=20230112012741","rel":"stylesheet"},{"path":"LINK@/href","url":… |
| raw_web_markup/common_crawl/wat | text/url | 229 | -396.844249 | -1.732944 | http://168ps.com/kvpt/117579.ht… | …p/1.1","WARC-Payload-Digest":"sha1:YEIP2M244775TBI4FOHNRBTS65GUMEVP","WARC-Block-Digest":"sha1:YVCXR5H7QQ3JWSNKI2PJSB7… |
| raw_web_markup/common_crawl/wat | text/url | 230 | -393.330653 | -1.710133 | http://562snm.autos/post/1255.h… | …p/1.1","WARC-Payload-Digest":"sha1:B2BGR5TTICXACNVZHMAT7E7DNX4UFFBS","WARC-Block-Digest":"sha1:IT32EYL56LXHUQVFQXXKYKO… |
| bio_chem/rcsb/rcsb_mmcif | text/word | 80 | -351.308317 | -4.391354 | QERSAWVRAKTACEVAEISYKKFRQLIQVNP… | …SYLNQGDFIGELGLFEEG⏎QERSAWVRAKTACEVAEISYKKFRQLIQVNPDILMRLSAQMARRLQVTSEKVGNLAFLDVTGRIAQTLLNLAKQPDAMTH⏎PDGMQIKITRQEIGQIVG… |
| bio_chem/rcsb/rcsb_mmcif | text/word | 80 | -339.037197 | -4.237965 | LDFQHSNLKQMSEFSVFLSLRNLIYLDISHT… | …NGVITMSSNFLGLEQLEH⏎LDFQHSNLKQMSEFSVFLSLRNLIYLDISHTHTRVAFNGIFNGLSSLEVLKMAGNSFQENFLPDIFTELRNLTFLDLSQC⏎QLEQLSPTAFNSLSSLQV… |
| long_tail_ppl/code_ecosystem/stack_v2_yaml | text/number | 640 | -330.463165 | -0.516349 | 20031201,20031231,458018.48,216… | …8020.00,28020.00,21267.04,0.00,21267.04,20.00,0.00,20.00,552653.19,2003,312380.28,865033.47,413429.00,451604.47,192111… |
| raw_web_markup/common_crawl/wat | text/url | 12442 | -330.164669 | -0.026536 | https://okhealthcareers.com/","… | …tus.com"},{"path":"A@/href","url":"https://bradfordshops.com/","text":"bradfordshops.com"},{"path":"A@/href","url":"ht… |
| bio_chem/pubchem/pubchem_sdf | text/word | 154 | -325.311582 | -2.112413 | AAADccBwMAAAAAAAAAAAAAAAAAAAAAA… | …AAAAAAAAAAAAAAAAAwAAAAAAAAAAABAAAAGgAACAAADASAmAAwDoAAAgCIAiDSCAACAAAgIAAIiAEGCIgIJjKCFRKAcAAkwBEImAeIyKCOIAAAAAAAAABA… |
| bio_chem/rcsb/rcsb_mmcif | text/word | 80 | -323.209686 | -4.040121 | QLEQLSPTAFNSLSSLQVLNMSHNNFFSLDT… | …PDIFTELRNLTFLDLSQC⏎QLEQLSPTAFNSLSSLQVLNMSHNNFFSLDTFPYKCLNSLQVLDYSLNHIMTSKKQELQHFPSSLAFLNLTQNDFACTCE⏎HQSFLQWIKDQRQLLVEV… |
| raw_web_markup/common_crawl/wat | text/url | 541 | -323.143314 | -0.597307 | http://www.dogrudesign.com/","t… | …ng-Slop-Length":"4","Block-Digest":"sha1:RECDYUIMVXC5WXBG6DUP54NT2AX66G7G"},"Format":"WARC/1.0","WARC-Header-Length":"… |
| bio_chem/pubchem/pubchem_sdf | text/word | 154 | -321.242904 | -2.085993 | AAADcYBgPAIAAAAAAAAAAAAAAAAAAAA… | …AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgAACCAACBSggAIACAAAAxAIQICQCIIAAAAAAAAAAAFAAAABEBQAAAAAQAAFIAABAABCAAAAAAAAAAAAAAAA… |
| bio_chem/rcsb/rcsb_mmcif | text/word | 80 | -317.179766 | -3.964747 | XDEDETTALVCDNGSGLVKAGFAGDDAPRAV… | …TKQEYDEAGPSIVHR⏎;⏎;XDEDETTALVCDNGSGLVKAGFAGDDAPRAVFPSIVGRPRHQGVMVGMGQKDSYVGDEAQSKRGILTLKYPIEHGIITNW⏎DDMEKIWHHTFYNELRVA… |
| fineweb2_multilingual/hun_Latn | text/url | 280 | -313.976095 | -1.121343 | https://img4.hvg.hu/image.aspx?… | …e3a-e632-4abc-b367-3d9b3bb5573b","index":0,"item":"a94c8514-6336-4358-bd11-dfbe002e7a4b","keywords":null,"link":"/vila… |
| bio_chem/pubchem/pubchem_sdf | text/word | 154 | -300.896642 | -1.953874 | AAADccBwOAAAAAAAAAAAAAAAAAAAAAA… | …AAAAAAAAAAAAAAAAAwAAAAAAAAAAABAAAAGgAACAAADASAmAAwDoAAAgCIAqDSCAICAAAgIAAIiAFGCMgIJiKCERKAcAAkwBEImYeAwCAOAAAAAAAIAAAA… |
| long_tail_ppl/code_ecosystem/stack_v2_markdown | text/url | 100 | -300.765278 | -3.007653 | https://docs.google.com/forms/d… | …pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform)␠has␠been… |
| bio_chem/pubchem/pubchem_sdf | text/word | 154 | -288.952381 | -1.876314 | AAADccBgPAIAAAAAAAAAAAAAAAAAASA… | …AAAAAAAAAAASAAAAAAAAAAAAAAAAAAAAAAGgAACCAACBSggAIACAAABxAAQAAAAIAAAAAAAAAAAAAAAAAREAIAAAACQAAFAAAHAAHAYAQAAAAAAAAAAAAA… |
| raw_web_markup/common_crawl/wat | text/url | 365 | -286.102871 | -0.783843 | https://zzcchg42.wnvf9.com","ta… | …","url":"/assets/place/91banner_resized.png","alt":"意大利运钞车惊天大劫！蒙面悍匪伪装警车，AK47对轰宪兵，现场火光冲天直接变好莱坞大片！"},{"path":"A@/href","… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -281.247197 | -4.687453 | TSDLYDDWMRAASLKEPGARLEALHDVCSRL… | …SLEEFCSDPHAVAGALKSYLRELPEPLM⏎TSDLYDDWMRAASLKEPGARLEALHDVCSRLPQENFNNLRYLMKFLALLAEEQDVNKMTP⏎SNIAIVLGPNLLWPPEKEGDQAQLDAAS… |
| raw_web_markup/common_crawl/wat | text/url | 906 | -279.572671 | -0.308579 | http://abaragambi.com/index.php… | …,"text":"abaragambi.com"}]},"Entity-Length":"46137","Entity-Digest":"sha1:EQ4ZJZCI62D2F2V6UWLRJZQEUZIRFSOV","Entity-Tr… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -278.742679 | -4.645711 | MSHFFAHLSRLKLINRWPLMRNVRTENVSEH… | …377628␠GN=YPN_2153␠PE=3␠SV=1⏎MSHFFAHLSRLKLINRWPLMRNVRTENVSEHSLQVAFVAHALAIIKNRKFNGNLNAERIA⏎LLAMYHDASEVITGDLPTPIKYHNPKIA… |
| raw_web_markup/common_crawl/warc | text/url | 109 | -276.526984 | -2.536945 | https://aptekajakmarzenie.pl/de… | …ref="https://aptekajakmarzenie.pl/dermokosmetyki-twarz-szyja-c-21_25.html?osCsid=eshlo6o415mq6nvblpbi53n834">twarz␠i␠s… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -274.687351 | -4.578123 | VLVDQYRLLQLCIQPAEKSEIDRAWNELVKN… | …LGIVCAVMADLLFSPRSIKQDIDRLVDK⏎VLVDQYRLLQLCIQPAEKSEIDRAWNELVKNTTSLNGMRSYLMMESSRWQRCNRRLQVLH⏎TESLALITQACETYLVMSNHPEVISAEL… |
| gh_archive_structured_output/IssueCommentEvent | text/url | 245 | -273.400705 | -1.115921 | https://app.snyk.io/org/alogant… | …-a3fb-e982370375c8/settings/integration?pkg&#x3D;@aws-sdk/token-providers&amp;utm_source&#x3D;github&amp;utm_medium&#x… |
| bio_chem/pubchem/pubchem_sdf | text/word | 154 | -273.369548 | -1.775127 | AAADccBiPAIAAAAAAAAAAAAAAAAAAAA… | …AAAAAAAAAAAAAAAAAkAAAAAAAAAAAAAAAAHgAQCCAACDzxgAcACABABxAAQAAAAIAAAAAAAAAAAIAAAAATEAIAgAADQAAHEAAHAAHwcAUAAAAAAAAAAAAA… |
| bio_chem/pubchem/pubchem_sdf | text/word | 154 | -268.868140 | -1.745897 | AAADcYBwMAAAAAAAAAAAAAAAAAAAAAA… | …AAAAAAAAAAAAAAAAAwQAAAAAAAAACBAAAAGgAAAAAADASAmAAwDoAABACIAiDSCAACCAAgIAAIiAAGCMgMJiKEMRqCOiCkwBEIqYeAwCAOAAAAAAAIAAAA… |
| long_tail_ppl/code_ecosystem/stack_v2_json | text/url | 249 | -267.855129 | -1.075723 | https://i.ibb.co/VtCdwyP/era06-… | …uced":"3114","EraId":254,"EraStart":3101,"ImageUrl":"https://i.ibb.co/s10rHLc/hawk-moth-ii-3085.png","IsFeatured":fals… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -267.781648 | -4.463027 | KQQPEEEALILFTSGSEGHPKGVVHSHKSIL… | …LEDLKADVTTADKVWIFAHLLMPRLAQV⏎KQQPEEEALILFTSGSEGHPKGVVHSHKSILANVEQIKTIADFTTNDRFMSALPLFHSFG⏎LTVGLFTPLLTGAEVFLYPSPLHYRIVP… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -267.390758 | -4.456513 | WIMGHMVNEIYQIDEFVDLGANSIETDITFD… | …mazonica␠OX=571517␠PE=2␠SV=1⏎WIMGHMVNEIYQIDEFVDLGANSIETDITFDDDAMAEYSYHGVPCGCMRWCHKWEYVNDF⏎LEGLRRATTPGDSKYRKQLILVVFDLKT… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -266.922614 | -4.448710 | VTLQSLAKWSAAKIVIYVGCGERGNEMTDEL… | …GTRVLDTIFPIAKGGTAAIPGPFGSGKT⏎VTLQSLAKWSAAKIVIYVGCGERGNEMTDELRQFPSLKDPWTGRPLLERTILVANTSNMP⏎VAAREASIYVGITMAEYFRDQGYDTLLV… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -266.577413 | -4.442957 | MKQSHFFAHLSRMKLINRWPLMRNVRTENVS… | …␠OX=423368␠GN=yfbR␠PE=3␠SV=1⏎MKQSHFFAHLSRMKLINRWPLMRNVRTENVSEHSLQVAMVAHALAAIKNRKFGGQLNAER⏎IALLAMYHDASEVLTGDLPTPVKYFNSQ… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -265.981698 | -4.433028 | MQAPPSFYEGDTLEVAKKLLGQKLVHIVDGI… | …8681␠GN=BCE33L0774␠PE=3␠SV=1⏎MQAPPSFYEGDTLEVAKKLLGQKLVHIVDGIKRSGIIVEVEAYKGPDDKAAHSYGGRRTD⏎RTEVMFGAPGHAYVYLIYGMYHCFNVIT… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -265.808623 | -4.430144 | MDFVNNDTRQIAKNLLGVKVIYQDTTQTYTG… | …␠GN=USA300HOU_2325␠PE=3␠SV=1⏎MDFVNNDTRQIAKNLLGVKVIYQDTTQTYTGYIVETEAYLGLNDRAAHGYGGKITPKVTS⏎LYKRGGTIYAHVMHTHLLINFVTKSEGI… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -265.536862 | -4.425614 | IHEARGHTDAIIINPGAFTHTSVAIRDALIG… | …DNAKALAAAKGVKLESFHSNHEGRIIDR⏎IHEARGHTDAIIINPGAFTHTSVAIRDALIGVSVPFIEVHITNVHAREEFRHHSYLSDKA⏎AACIIGLGTYGYEAAIEYAAREIISAKE… |

## Top Literals: Model A Worse

Representative token boundaries come from the highest-gap occurrence for each literal. `|` marks token boundaries for each model; an ellipsis means the token continues outside the literal boundary in that example.

| name | bucket | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | example_dataset | example_doc_preview | model_a_token_boundaries | model_b_token_boundaries |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ␠ | whitespace/single_space | 15799008 | 15799008 | 0.747732 | 0.672935 | 0.074798 | 1181730.674300 | fineweb2_multilingual/heb_Hebr | …להמשך␠היום␠ברחובות␠הקפואים.␠היה␠טעים␠מאוד␠אך␠יקר.⏎אני␠חייבת␠3␠תודות:⏎1.␠פריז␠דרך␠הפה–␠אתר␠מעולה␠ששימש␠אותי␠במהלך␠שיטוט… | \|␠\| | \|␠\| |
| . | text/punctuation | 992855 | 992855 | 0.956148 | 0.823182 | 0.132967 | 132016.558846 | fineweb2_multilingual/heb_Hebr | …␠מהבחינה␠הזאת␠נראה␠לי␠שזבל␠זה␠אפילו␠גרוע␠יותר...␠זה␠בטוח␠לא.␠אני␠מניחה␠שאפשר␠להתקשר␠למוקד␠העירוני␠ולברר,␠אבל␠הייתי␠מעד… | \|.\| | \|.\| |
| । | text/non_ascii | 58121 | 174363 | 0.681954 | 0.254379 | 0.427576 | 74553.354038 | fineweb2_multilingual/ory_Orya | …ତ␠ଧୈର୍ଯ୍ୟ␠ଧରିବାକୁ␠କହିଛନ୍ତି।⏎ପଢନ୍ତୁ␠ଓଡ଼ିଶା␠ରିପୋର୍ଟର␠ଖବର␠ଏବେ␠ଟେଲିଗ୍ରାମ୍␠ରେ।␠ସମସ୍ତ␠ବଡ␠ଖବର␠ପାଇବା␠ପାଇଁ␠ଏଠାରେ␠କ୍ଲିକ୍␠କରନ୍ତୁ। | \|।\| | \|।\| |
| ⏎ | whitespace/newline | 1030566 | 1030566 | 0.844474 | 0.790786 | 0.053688 | 55328.925533 | fineweb2_multilingual/heb_Hebr | …המון␠המון␠תודה,␠האמת␠שהווטרינר␠הציע␠להביא␠אליו␠את␠צארלי␠כדי⏎שינתח␠אבל␠לא␠הייתי␠מסוגלת␠להישאר␠בבית␠כל␠הלילה␠עם␠ארנבונת␠… | \|⏎\| | \|⏎\| |
| 2 | text/number | 261711 | 261711 | 1.063077 | 0.921373 | 0.141704 | 37085.566971 | synthetic_reasoning_ppl/native/connected_components | …],␠"num_seen":␠2}⏎2.␠{"seed_node":␠1}␠->␠{"component":␠[1,␠2,␠4,␠5,␠6,␠7,␠8],␠"num_seen":␠9}⏎Therefore,␠the␠answer:␠{"… | \|2\| | \|2\| |
| 1 | text/number | 471473 | 471473 | 0.696226 | 0.622860 | 0.073366 | 34590.204194 | paloma/m2d2_wikipedia_unsplit | …ajor␠League␠Baseball␠(MLB)␠for␠the␠Philadelphia␠Phillies,␠Philadelphia␠Athletics␠(twice),␠and␠Cleveland␠Naps␠between␠1 | \|1\| | \|1\| |
| ( | text/punctuation | 356014 | 356014 | 0.836853 | 0.744129 | 0.092724 | 33010.962101 | bio_chem/chembl/chembl_chemreps | …2)62-54-116)186(306)242-129(45-25-32-79-208)175(295)246-138(69-72-153(213)276)182(302)241-136(52-39-86-229-204(223)224… | \|(\| | \|(\| |
| 3 | text/number | 200944 | 200944 | 1.102444 | 0.952375 | 0.150069 | 30155.389426 | bio_chem/pubchem/pubchem_sdf | …␠0␠␠0␠␠0␠␠0␠␠0␠␠0⏎␠␠␠11.1972␠␠␠-2.4320␠␠␠␠0.0000␠C␠␠␠0␠␠0␠␠3␠␠0␠␠0␠␠0␠␠0␠␠0␠␠0␠␠0␠␠0␠␠0⏎␠␠␠␠7.7331␠␠␠-5.4320␠␠␠␠0.0000… | \|3\| | \|3\| |
| ␠␠␠ | whitespace/multi_space | 205194 | 615582 | 0.174548 | 0.129806 | 0.044742 | 27542.272508 | bio_chem/uniprot/uniprot_sprot_dat | …,␠McPherson␠D.,␠Merkulov␠G.,␠Milshina␠N.V.,␠Mobarry␠C.,⏎RA␠␠␠Morris␠J.,␠Moshrefi␠A.,␠Mount␠S.M.,␠Moy␠M.,␠Murphy␠B.,␠Mu… | \|␠␠\|␠…\| | \|␠␠\|␠…\| |
| C | text/word | 205403 | 205403 | 0.846949 | 0.732664 | 0.114285 | 23474.534183 | synthetic_numeric_format_ppl/dense_numeric_blobs/svg_path_numeric_blobs | ….28⏎⏎User:␠complete_svg_path␠d="M␠386.50␠494.27⏎Assistant:⏎C␠462.69␠457.89,␠440.30␠481.33,␠454.36␠458.81␠L␠483.12␠412.… | \|C\| | \|C\| |
| 5 | text/number | 138625 | 138625 | 1.268647 | 1.103245 | 0.165402 | 22928.812459 | fineweb2_multilingual/tel_Telu | …ో⏎-␠ధర␠అంచనా:␠రూ.␠50␠లక్షల␠నుండి␠రూ.␠60␠లక్షల␠మధ్య⏎ఆడి␠క్యూ5⏎2016లో␠జరిగిన␠ప్యారిస్␠మోటార్␠షో␠లో␠ఆడి␠నెక్ట్స్␠జనరేషన్␠… | \|5\| | \|5\| |
| 4 | text/number | 161406 | 161406 | 1.169466 | 1.033530 | 0.135936 | 21940.880627 | fineweb2_multilingual/heb_Hebr | …לה␠בהחלט␠לזרז␠את␠התהליך␠ולהוביל␠לתוצאות␠מהירות␠וטובות␠בהרבה4.␠ניתן␠לכנות␠גישה␠זו␠"השאיפה␠לחרדה".␠משמעותה␠פשוטה␠אך␠לא␠א… | \|4\| | \|4\| |
| ， | text/non_ascii | 20149 | 60447 | 0.808069 | 0.446032 | 0.362037 | 21884.075289 | long_tail_ppl/code_ecosystem/stack_v2_tex | …：「凡孝子順孫、義夫節婦、志行卓異者，有司正官舉名，監察御史、按察司體覆，轉達上司，旌表門閭。又令：民間寡婦，三十以前，夫亡守制，五十以後，不改節者，旌表門閭(貞節牌坊)，除免本家差役。」洪武二十六年令：「凡婦人因夫、子得封者，不許再嫁… | \|，\| | \|，\| |
| के | text/non_ascii_word | 18964 | 113784 | 0.509899 | 0.327271 | 0.182628 | 20780.189776 | fineweb2_multilingual/hne_Deva | …े␠अऊ␠घर␠के␠समान␠ला␠टोरे␠लाग␠जाथे.”␠इहाँ␠ये␠सोचे␠के␠बात␠आय␠के,␠काय␠बिहार␠मं␠शराबबंदी␠नई␠ये?␠एनएफएचएस-4␠के␠मुताबिक␠शराबब… | \|…क\|े…\| | \|…क\|े\| |
| , | text/punctuation | 1389976 | 1389976 | 0.806532 | 0.792078 | 0.014454 | 20090.872647 | fineweb2_multilingual/heb_Hebr | …,␠מכונית,␠אקס␠בוקס,␠טיולים␠ברחבי␠העולם,␠כניסה␠לתוכניות␠ארוח,␠חייט␠פרטי,␠ציורים,␠תכשיטים,␠תיקים,␠צעיפים␠של␠הרמס␠ועוד.␠ע… | \|,\| | \|,\| |
| 6 | text/number | 109708 | 109708 | 1.546639 | 1.364792 | 0.181847 | 19950.113466 | bio_chem/rcsb/rcsb_mmcif | …␠?␠WATSON-CRICK␠␠␠␠␠␠␠␠␠␠␠␠?␠⏎?␠?␠⏎hydrog14␠hydrog␠?␠␠␠␠?␠A␠U␠␠␠6␠␠N3␠␠␠␠?␠?␠?␠1_555␠A␠A␠␠␠67␠N1␠?␠?␠A␠U␠␠␠6␠␠␠A␠A␠␠␠6 | \|6\| | \|6\| |
| 0 | text/number | 1528940 | 1528940 | 0.124624 | 0.112525 | 0.012099 | 18498.490406 | long_tail_ppl/code_ecosystem/stack_v2_tex | …box{\\hyperlink{class_point_aede82dc8eff80efec382853ecd2d31b0}{Point}}␠(float␠\\mbox{\\hyperlink{class_point_a05dfe2dfbde… | \|0\| | \|0\| |
| 7 | text/number | 83830 | 83830 | 1.624755 | 1.433911 | 0.190844 | 15998.459363 | synthetic_reasoning_ppl/native/knapsack_01_dp | …":␠28}⏎74.␠{"cap":␠13,␠"i":␠4,␠"prev":␠0}␠->␠{"dp_i_cap":␠28}⏎75.␠{"cap":␠14,␠"i":␠4,␠"prev":␠0}␠->␠{"dp_i_cap":␠33}⏎7 | \|7\| | \|7\| |
| ) | text/punctuation | 280847 | 280847 | 0.468818 | 0.413392 | 0.055426 | 15566.157355 | fineweb2_multilingual/azj_Latn | …təqdim␠edilməsi␠sözsüz␠ki,␠istifadəçilərin␠yararınadır.⏎-␠Ç)␠İdman␠oyunu␠təxirə␠salındıqda,␠həmin␠vaxt␠qalibin␠müəyyən… | \|)\| | \|)\| |
| ; | text/punctuation | 187920 | 187920 | 0.638087 | 0.555355 | 0.082732 | 15547.083487 | bio_chem/chembl/chembl_chemreps | …,21,23,25-26H,3-6,11-15,18-20H2,1-2H3;1-2H,(H,5,6)(H,7,8)/b;2-1+/t21-,23-,25-,26+;/m0./s1⇥SCJCAKLZCWCCCO-HTCZGZADSA-N⏎… | \|;\| | \|;\| |
| O | text/word | 85999 | 85999 | 1.110127 | 0.970908 | 0.139219 | 11972.690488 | bio_chem/pubchem/pubchem_sdf | …R_WEIGHT>⏎179.00⏎⏎>␠<PUBCHEM_SMILES>⏎C1=C(C(=CC(=C1Cl)O)Cl)O⏎⏎>␠<PUBCHEM_CONNECTIVITY_SMILES>⏎C1=C(C(=CC(=C1Cl)O)Cl)O⏎… | \|O\| | \|O\| |
| PUBCHEM_IUPAC_OPENEYE_NAME | text/word | 846 | 21996 | 1.119854 | 0.594704 | 0.525149 | 11551.186159 | bio_chem/pubchem/pubchem_sdf | …zACH6+CKJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==⏎⏎>␠<PUBCHEM_IUPAC_OPENEYE_NAME>⏎7-[2-[3-[[4-[[[5-(6-aminopurin-9-yl)-4-hydro… | \|P\|UB\|CHE\|M\|_I\|UP\|AC\|_OPEN\|E\|YE\|_NAME\| | \|P\|UB\|CHE\|M\|_I\|UP\|AC\|_OPEN\|E\|YE\|_NAME\| |
| 8 | text/number | 82983 | 82983 | 1.634121 | 1.496187 | 0.137933 | 11446.110603 | paloma/manosphere_meta_sep | …e␠girl␠as␠we␠used␠to␠live␠in␠the␠same␠residence.␠She's␠a␠HB8␠with␠quite␠some␠experience␠already.␠All␠the␠guys␠are␠fall… | \|8\| | \|8\| |
| 9 | text/number | 67097 | 67097 | 1.882110 | 1.712867 | 0.169243 | 11355.699467 | synthetic_reasoning_ppl/clrs_style/clrs_mst_prim | …>␠{"num_in_mst":␠9,␠"pushed_edges":␠1,␠"total_weight":␠39}⏎9.␠{"num_in_mst":␠9,␠"picked_edge":␠[0,␠2,␠9]}␠->␠{"num_in_… | \|9\| | \|9\| |
| ? | text/punctuation | 41076 | 41076 | 1.370297 | 1.109840 | 0.260457 | 10698.514341 | fineweb2_multilingual/sin_Sinh | …්වෙන්න␠පුළුවන්.␠මෙහෙම␠වෙලාවක␠අගමැති␠තනතුරට␠පත්කරන්න␠ඕන␠කවුද?␠ඒ␠වෙනුවෙන්␠එච්චර␠ජනප්රිය␠කෙනෙක්␠පත්කරන්න␠ඕන␠කියලා␠මම␠හිතන… | \|?\| | \|?\| |
| = | text/punctuation | 194548 | 194548 | 0.395457 | 0.340628 | 0.054829 | 10666.793782 | bio_chem/pubchem/pubchem_sdf | …HT>⏎231.20⏎⏎>␠<PUBCHEM_SMILES>⏎C(CC(C(=O)O)NC(=O)CCC(=O)O)C=O⏎⏎>␠<PUBCHEM_CONNECTIVITY_SMILES>⏎C(CC(C(=O)O)NC(=O)CCC(=… | \|=\| | \|=\| |
| N | text/word | 42683 | 42683 | 1.961909 | 1.715049 | 0.246860 | 10536.727861 | long_tail_ppl/code_ecosystem/stack_v2_tex | …eins⏎are␠labeled␠with␠their␠DIP␠identifiers␠(e.g.,␠DIP-2818N);␠the␠last⏎number␠in␠the␠label␠is␠just␠a␠sequential␠node␠… | \|N\| | \|N\| |
| جي | text/non_ascii_word | 6111 | 24444 | 0.784158 | 0.373813 | 0.410345 | 10030.469630 | fineweb2_multilingual/snd_Arab | اسان␠تيزي␠سان␠فرانس␠جي␠ڏوهن␠جي␠سيريز␠۾␠جڳهن␠تي␠عادي␠ٿي␠رهيا␠آهيون:␠'قتل␠۾'!⏎هر␠قسط␠هڪ␠نئين␠'تصوير'␠۽␠گهٽ␠سڃاتل␠هنڌ␠جي␠… | \|…جي\| | \|…ج\|ي\| |
| Step-by-step | text/word | 10975 | 131700 | 0.177018 | 0.103604 | 0.073414 | 9668.576396 | synthetic_reasoning_ppl/native/insertion_sort | …[29,␠-36,␠23,␠10,␠52,␠47,␠-39,␠-55,␠-24,␠58,␠-47]⏎=>␠Step-by-step␠solution:⏎1.␠{"array":␠[29,␠-36,␠23,␠10,␠52,␠47,␠-39… | \|…Step\|-by\|-step\| | \|…Step\|-by\|-step\| |
| آهي | text/non_ascii_word | 2564 | 15384 | 0.805208 | 0.235005 | 0.570204 | 8772.015017 | fineweb2_multilingual/snd_Arab | …ي␠وڃي␠يا␠بلڪل␠ئي␠ختم␠ٿي␠وڃي؟␠هرگز␠ائين␠نه␠آهي.␠اهو␠ئي␠سبب␠آهي␠جو␠سائڻ␠زهرا␠(س)␠توحيد␠جي␠حقيقت␠کي␠اخلاص␠ڄاڻائن␠ٿيون␠۽␠ا… | \|…آ\|ه\|ي\| | \|…آ\|هي\| |
| ته | text/non_ascii_word | 1847 | 7388 | 1.481885 | 0.304811 | 1.177073 | 8696.217982 | fineweb2_multilingual/snd_Arab | …␠کان␠پوءِ␠شهر␠پهچي،␠منهنجا␠وائيسر␠ڦري␠ويا.␠شاهن␠نه␠هجي␠ها␠ته␠وڃائجي␠وڃان␠ها.␠ماڻهن␠جا␠هشام،␠ڪارين␠جا␠ڪٽڪ،␠هيڏانهن␠کان␠… | \|…ته\| | \|…ت\|ه\| |
| / | text/punctuation | 114189 | 114189 | 1.079539 | 1.006772 | 0.072767 | 8309.135340 | long_tail_ppl/code_ecosystem/stack_v2_typescript | …public_api";⏎import␠{JigsawDemoDescriptionModule}␠from␠"app/for-internal/description/demo-description";⏎import␠{DatePi… | \|/\| | \|/\| |
| : | text/punctuation | 310780 | 310780 | 0.685865 | 0.659359 | 0.026506 | 8237.380897 | raw_web_markup/common_crawl/warc | …p--preset--color--purple:␠#884898;--wp--preset--color--deep:␠#55295b;--wp--preset--color--indigo:␠#1e50a2;--wp--preset… | \|:\| | \|:\| |
| ۽ | text/non_ascii | 3218 | 6436 | 1.809011 | 0.548127 | 1.260884 | 8115.047090 | fineweb2_multilingual/snd_Arab | رضوان␠گل⏎محقق،␠صحافي␠۽␠تاريخدان⏎پير␠حسام␠الدين␠راشدي⏎سنڌ␠جي␠زرخير␠مٽيءَ␠مان␠اهڙا␠آدرشي␠انسان␠پيدا␠ٿيا␠آهن،␠جن␠جي␠قابلي… | \|۽\|۽\| | \|۽\| |
| i | text/word | 149211 | 149211 | 0.689961 | 0.636091 | 0.053870 | 8037.959725 | long_tail_ppl/code_ecosystem/stack_v2_php | …s␠file␠is␠part␠of␠the␠overtrue/wechat.⏎␠*⏎␠*␠(c)␠overtrue␠<i@overtrue.me>⏎␠*⏎␠*␠This␠source␠file␠is␠subject␠to␠the␠MIT… | \|i\| | \|i\| |
| 、 | text/non_ascii | 11880 | 35640 | 0.816448 | 0.592689 | 0.223759 | 7974.761163 | fineweb2_multilingual/cmn_Hani | …只要团结一心、苦干实干就能脱贫的思想观念。同时加大思想帮扶力度，进一步发挥自身教育优势，多渠道、多形式鼓励贫困户摆脱等、靠、要思想，鼓励村民勤奋努力，变“输血”为“造血”，通过自身努力过上幸福生活。帮扶结对工作的开展，使大垴村迅速“热闹… | \|、\| | \|、\| |
| 10 | text/number | 43746 | 87492 | 0.687581 | 0.597508 | 0.090073 | 7880.698392 | long_tail_ppl/code_ecosystem/stack_v2_assembly | …d⏎⏎DeclareParams_if9else:⏎⇥cmp⇥[tok],␠tk_closebracket␠;␠if10⏎⇥jz⇥DeclareParams_loopend⏎⏎⇥cmp⇥[tok],␠tk_comma␠␠␠;␠if11⏎… | \|10\| | \|1\|0\| |
| [ | text/punctuation | 162401 | 162401 | 0.429998 | 0.382923 | 0.047075 | 7645.040592 | fineweb2_multilingual/slv_Latn | …ema,␠rezkalniki,␠bagri␠in␠druga␠specialna␠oprema).⏎Postopki[uredi␠\|␠uredi␠kodo]⏎Tehnološke␠postopke␠pri␠gradnji␠cest␠s… | \|[\| | \|[\| |
| 0999 | text/number | 1715 | 6860 | 1.623870 | 0.536197 | 1.087673 | 7461.439737 | bio_chem/chembl/chembl_sdf | …556⏎␠␠␠␠␠RDKit␠␠␠␠␠␠␠␠␠␠2D⏎⏎␠16␠15␠␠0␠␠0␠␠1␠␠0␠␠0␠␠0␠␠0␠␠0999␠V2000⏎␠␠␠-2.4958␠␠␠-0.0125␠␠␠␠0.0000␠C␠␠␠0␠␠0␠␠0␠␠0␠␠0␠␠… | \|099\|9\| | \|0\|9\|9\|9\| |
| 。 | text/non_ascii | 12530 | 37590 | 0.728890 | 0.530683 | 0.198206 | 7450.565984 | long_tail_ppl/code_ecosystem/stack_v2_json | …␠␠␠␠還期限者，借用人得隨時返還，貸與人亦得定一個月以上之相當期限，催告返還\\n␠␠␠␠。民法第四百七十八條定有明文。次按遲延之債務，以支付金錢為標的者，債權\\n␠␠␠␠人得請求依法定利率計算之遲延利息，但約定利率較高者，仍從其約定利… | \|。\| | \|。\| |

## Top Literals: Model B Worse

Representative token boundaries come from the highest-gap occurrence for each literal. `|` marks token boundaries for each model; an ellipsis means the token continues outside the literal boundary in that example.

| name | bucket | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | example_dataset | example_doc_preview | model_a_token_boundaries | model_b_token_boundaries |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| � | text/non_ascii | 76993 | 230979 | 0.608161 | 0.789603 | -0.181442 | -41909.399200 | diagnostic_logs/ghalogs_issue_5093_holdout | …��AmG���t�[.���:v��Q�⇥�1N'���{'���k�⇥���9⇥���؛S`��Av�o�I�̩�⏎,�I���D&�$�?��D6�ZXn�ѡ�x7��<�⇥)��)4�t`N��P… | \|�\| | \|�\| |
| �� | text/non_ascii | 33163 | 198978 | 0.481154 | 0.659171 | -0.178017 | -35421.382600 | diagnostic_logs/ghalogs_issue_5093_holdout | …�H%VOnPK{�~X�ZϷQ����t&��Sx���rʟ��\\���X�ޜ\|�z�\|�ivap��5ީ��f�벟�N�7ݶn�m���r��o-�⇥���L�'��Jh�R�qɗ���n�藺�y�\\n��… | \|��\| | \|��\| |
| ⏎⏎⏎ | whitespace/multi_newline | 12917 | 38751 | 1.017682 | 1.404287 | -0.386605 | -14981.328614 | long_tail_ppl/code_ecosystem/stack_v2_python | …nt_flag␠=␠d['print_flag']⏎␠␠␠␠␠␠␠␠if␠'printer_id'␠in␠d:⏎␠␠␠␠␠␠␠␠␠␠␠␠o.printer_id␠=␠d['printer_id']⏎␠␠␠␠␠␠␠␠return␠o⏎⏎⏎ | \|⏎⏎⏎\| | \|⏎⏎⏎\| |
| {" | text/punctuation | 378269 | 756538 | 0.020592 | 0.035641 | -0.015049 | -11385.265211 | synthetic_numeric_format_ppl/format_transforms/format_preserving_transforms | …:id,x,y,w,h⏎R511,235.75,-100.61,80.58,16.86⏎json:⏎Assistant:⏎{"id":"R511","x":235.75,"y":-100.61,"w":80.58,"h":16.86}⏎ | \|{"\| | \|{"\| |
| ��� | text/non_ascii | 13522 | 121698 | 0.473668 | 0.552376 | -0.078708 | -9578.633002 | diagnostic_logs/ghalogs_issue_5093_holdout | …k�s{:Gv�v��OW���1Ì�亢T�Q)���kf!5��ڗ9�\|C���p�6�@#�Ӗi���y���t:�a15C�2�[K⏎��YA���r��څ%��⏎R�V���#���J���K�:�… | \|���\| | \|���\| |
| ␠⏎⏎⏎ | whitespace/mixed | 1776 | 7104 | 0.883072 | 2.161750 | -1.278678 | -9083.729943 | paloma/manosphere_meta_sep | …␠you␠unironically␠⇥⇥␠Click␠to␠expand...␠Approaching␠day␠4␠⏎⏎⏎itsogrecel:⏎␠Yes␠man,␠but␠if␠we␠were␠not␠so␠ugly,␠then␠it… | \|␠⏎⏎⏎\| | \|␠⏎⏎⏎\| |
| of | text/word | 124004 | 248008 | 0.288567 | 0.323865 | -0.035298 | -8754.271207 | fineweb2_multilingual/lit_Latn | …pagalvoti,␠kaip␠pasakyti␠ir␠nepadarysite␠vadinamųjų␠„slip␠of␠the␠tongue"␠(liet.␠„liežuvio␠nuslydimo"-␠netyčinių)␠klaid… | \|…of\| | \|…of\| |
| that | text/word | 35752 | 143008 | 0.435919 | 0.486923 | -0.051004 | -7293.990773 | paloma/falcon-refinedweb | …lthy␠Lifestyle⏎Outdoor␠Sports␠Equipment␠Peru␠IN␠Peru,␠IN␠that␠will␠answer␠all␠of␠your␠questions␠about␠Outdoor␠Sports␠E… | \|…that\| | \|…that\| |
| on | text/word | 33688 | 67376 | 0.809124 | 0.914880 | -0.105756 | -7125.432654 | fineweb2_multilingual/ron_Latn | …alizare␠macheta␠“Orasul␠de␠lapte”⏎Posted␠20␠octombrie␠2012on:⏎Astazi␠s-a␠reunit␠echipa␠participanta␠la␠concursul␠“Oras… | \|on\| | \|on\| |
| ATOM | text/word | 2165 | 8660 | 0.560161 | 1.339149 | -0.778988 | -6746.037879 | synthetic_numeric_format_ppl/dense_numeric_blobs/mmcif_coordinate_tables | …␠␠SER␠C␠␠␠32.302␠␠␠-3.430␠␠␠-5.001␠1.00␠21.50⏎Assistant:⏎ATOM␠␠␠␠␠5␠S␠␠S5␠␠␠SER␠C␠␠␠33.536␠␠␠-4.207␠␠␠-4.545␠1.00␠22.0… | \|ATOM\| | \|ATOM\| |
| f | text/word | 25420 | 25420 | 2.497469 | 2.729463 | -0.231994 | -5897.278591 | long_tail_ppl/code_ecosystem/stack_v2_assembly | …␠␠␠␠␠⇥li⇥a7,1⏎␠ecall⏎␠2ec:⇥00000073␠␠␠␠␠␠␠␠␠␠⇥ecall⏎␠ret⏎␠2f0:⇥8082␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠␠⇥ret⏎⏎00000000000002f2␠<exit>:⏎.glo… | \|f\| | \|f\| |
| nop | text/word | 2352 | 7056 | 0.165136 | 0.998310 | -0.833174 | -5878.876640 | long_tail_ppl/code_ecosystem/stack_v2_assembly | …⏎nop⏎nop⏎add␠$8895,␠%r13⏎lea␠addresses_WT_ht+0xf58f,␠%rsi⏎nop⏎nop⏎nop⏎nop⏎nop⏎cmp␠$49524,␠%r14⏎and␠$0xffffffffffffffc0… | \|nop\| | \|nop\| |
| ":{" | text/punctuation | 3396 | 13584 | 0.531431 | 0.940945 | -0.409514 | -5562.842967 | long_tail_ppl/code_ecosystem/stack_v2_json | …riant":"(MML)","Tonnage":25,"BattleValue":851,"Technology":{"Id":1,"Name":"Inner␠Sphere","Image":null,"SortOrder":0},"… | \|":{"\| | \|":{"\| |
| Gzip-Metadata | text/word | 255 | 3315 | 1.495675 | 3.070305 | -1.574630 | -5219.898560 | raw_web_markup/common_crawl/wat | …-00000.warc.gz","Compressed":true,"Offset":"836819","Gzip-Metadata":{"Deflate-Length":"440","Header-Length":"10","Foot… | \|G\|zip\|-M\|etadata\| | \|G\|zip\|-M\|etadata\| |
| to | text/word | 109355 | 218710 | 0.407438 | 0.430540 | -0.023102 | -5052.629714 | paloma/redpajama | …and␠the␠accessibility␠of␠alternative␠educational␠options.⏎to␠find␠out␠more␠about␠the␠specific␠factors␠influencing␠Calv… | \|to\| | \|to\| |
| it | text/word | 21134 | 42268 | 0.787235 | 0.900752 | -0.113517 | -4798.127545 | lm_eval/gsm8k_train | ….␠Wheel␠of␠Fortune␠is␠2*20=40␠minutes␠each.␠So␠he␠watched␠it␠for␠40*2=80␠minutes.␠So␠he␠watched␠40+80=120␠minutes␠of␠T… | \|…it\| | \|…it\| |
| an | text/word | 15684 | 31368 | 1.239682 | 1.387248 | -0.147566 | -4628.850409 | fineweb2_multilingual/fra_Latn | …␠millions␠de␠smartphones␠avec␠son␠Windows␠Phone␠8␠d'ici␠1␠an.⏎Steve␠Ballmer,␠CEO␠de␠Microsoft␠et␠Stephan␠Elop,␠CEO␠de␠… | \|…an\| | \|…an\| |
| you | text/word | 16946 | 50838 | 0.393915 | 0.477052 | -0.083136 | -4226.489113 | fineweb2_multilingual/urd_Arab | …وگی۔⏎COM␠+␠کیا␠ہے؟⏎dllhost.exe␠کیا␠کرتا␠ہے␠کو␠سمجھنے␠کے␠ل␠you␠،␠آپ␠کو␠سمجھنے␠کی␠ضرورت␠ہے␠کہ␠COM␠+␠سروس␠کیا␠ہے۔␠اجزاء␠آ… | \|…you\| | \|…you\| |
| this | text/word | 32204 | 128816 | 0.365644 | 0.397333 | -0.031689 | -4082.047807 | diagnostic_logs/logchunks_eval | …},{key:\\"onConnError\\",value:function(e){this.hasLogger()this.log(\\"transport\\",e),this.triggerChanError(),this.stateC… | \|this\| | \|this\| |
| CHEMBL | text/word | 3923 | 23538 | 0.569711 | 0.738314 | -0.168603 | -3968.577771 | bio_chem/chembl/chembl_sdf | …␠0⏎␠15␠16␠␠1␠␠0⏎M␠␠END⏎>␠<chembl_id>⏎CHEMBL441948⏎⏎$$$$⏎CHEMBL442894⏎␠␠␠␠␠RDKit␠␠␠␠␠␠␠␠␠␠2D⏎⏎␠20␠22␠␠0␠␠0␠␠0␠␠0␠␠0␠␠0␠… | \|CHE\|MB\|L\| | \|CHE\|MB\|L\| |
| will | text/word | 10939 | 43756 | 0.454897 | 0.545380 | -0.090483 | -3959.162633 | paloma/m2d2_s2orc_unsplit | …rips␠are␠parralel,␠the␠sharing␠of␠induced␠charge␠between␠will␠be␠constant,␠and␠will␠not␠depend␠on␠the␠position␠along␠t… | \|…will\| | \|…will\| |
| Content-Length | text/word | 927 | 12978 | 0.246973 | 0.530618 | -0.283644 | -3681.135245 | raw_web_markup/common_crawl/warc | …ID:␠<urn:uuid:5010ddbc-5cb0-4bef-9781-3ffbace45828>⏎Content-Length:␠73032⏎Content-Type:␠application/http;␠msgtype=resp… | \|Content\|-Length\| | \|Content\|-Length\| |
| svg | text/word | 3098 | 9294 | 1.312781 | 1.686229 | -0.373448 | -3470.825766 | long_tail_ppl/code_ecosystem/stack_v2_vue | …␠␠␠␠␠␠␠mounted:␠()␠=>␠{⏎␠␠␠␠␠␠␠␠␠␠␠␠function␠responsivefy(svg)␠{⏎␠␠␠␠␠␠␠␠␠␠␠␠␠␠var␠container␠=␠d3.select(svg.node().pa… | \|…svg\| | \|…svg\| |
| PUBCHEM_SMILES | text/word | 849 | 11886 | 0.327832 | 0.609829 | -0.281997 | -3351.815663 | bio_chem/pubchem/pubchem_sdf | …LA>⏎C2H5NO3⏎⏎>␠<PUBCHEM_MOLECULAR_WEIGHT>⏎91.07⏎⏎>␠<PUBCHEM_SMILES>⏎C(C(=O)O)ON⏎⏎>␠<PUBCHEM_CONNECTIVITY_SMILES>⏎C(C(=… | \|P\|UB\|CHE\|M\|_SM\|ILES\| | \|P\|UB\|CHE\|M\|_SM\|ILES\| |
| his | text/word | 9437 | 28311 | 0.530963 | 0.649337 | -0.118374 | -3351.279647 | paloma/dolma-v1_5 | …4␠exam␠real␠exam␠questions␠and␠answers␠file␠is␠awesome␠in␠his␠results.⏎The␠questions␠and␠answers␠I␠purchased␠for␠the␠A… | \|…his\| | \|…his\| |
| image_id | text/word | 786 | 6288 | 1.738909 | 2.256764 | -0.517856 | -3256.275405 | raw_web_markup/ocr_vqa/book_metadata_validation | …rry␠PhD␠␠RN␠␠PNP-BC␠␠FAAN",␠"genre":␠"Medical␠Books",␠"image_id":␠"032305353X",␠"image_url":␠"http://ecx.images-amazon… | \|image\|_id\| | \|image\|_id\| |
| php | text/word | 1525 | 4575 | 0.136589 | 0.831541 | -0.694952 | -3179.404884 | raw_web_markup/common_crawl/wat | …el":"noopener␠noreferrer"},{"path":"IMG@/src","url":"/img.php?img=news/15bbd6b01006c459ec3398588ff61a66.png"},{"path":… | \|…php\| | \|…php\| |
| WARC-Header-Length | text/word | 208 | 3744 | 0.492451 | 1.338129 | -0.845678 | -3166.218092 | raw_web_markup/common_crawl/wat | …RQNBH5IQY3WNFGJO67ZLEKXVAE"},"Format":"WARC/1.0","WARC-Header-Length":"445","WARC-Header-Metadata":{"WARC-Type":"reque… | \|WAR\|C\|-\|Header\|-Length\| | \|WAR\|C\|-\|Header\|-Length\| |
| ���� | text/non_ascii | 5409 | 64908 | 0.397996 | 0.446103 | -0.048108 | -3122.566944 | diagnostic_logs/ghalogs_issue_5093_holdout | …��RԞkj�:��$��{w2uIj�Fs/u'5������n..A��X/A�I�%�C�>�n�-Im����RԜ�NM/u'����_{�;⇥�$�vĘw3fIj��Q��RԂ�睜X�Zz��$X�:����d���… | \|����\| | \|����\| |
| şi | text/non_ascii_word | 951 | 2853 | 0.828680 | 1.913490 | -1.084810 | -3094.963422 | fineweb2_multilingual/ron_Latn | …ne␠afectează␠sănătatea␠aici:␠Viață␠sănătoasă␠partea␠1.␠Ah␠şi␠dacă␠vă␠interesează␠mâncarea␠de␠calitate,␠citiţi␠şi␠asta:… | \|…şi\| | \|…şi\| |
| } | text/punctuation | 393623 | 393623 | 0.147610 | 0.155458 | -0.007848 | -3089.218704 | long_tail_ppl/code_ecosystem/stack_v2_scala | …et(x,␠"warning",␠null)⏎␠␠␠␠⏎␠␠␠␠inline␠def␠setWarningUndefined:␠Self␠=␠StObject.set(x,␠"warning",␠js.undefined)⏎␠␠}⏎}⏎ | \|}…\| | \|}…\| |
| expected | text/word | 1339 | 10712 | 0.355903 | 0.644064 | -0.288161 | -3086.777846 | synthetic_machine_records_ppl/trace_errors/compiler_errors | …heduler.rs:30:44⏎␠␠␠\|⏎30␠\|␠␠␠␠␠return␠payload;⏎␠␠␠\|␠␠␠␠␠␠␠␠␠␠␠␠^^^^^␠expected␠`Result<Job,␠Error>`,␠found␠`Option<_>`⏎ | \|…expected\| | \|…expected\| |
| ### | text/punctuation | 4968 | 14904 | 0.594643 | 0.801453 | -0.206810 | -3082.299747 | long_tail_ppl/code_ecosystem/stack_v2_python | …ated␠by␠Alembic␠-␠please␠adjust!␠###⏎␠␠␠␠op.drop_column('event_dates',␠'end_time')⏎␠␠␠␠#␠###␠end␠Alembic␠commands␠###⏎ | \|…###…\| | \|…###…\| |
| there | text/word | 4786 | 23930 | 0.650345 | 0.778936 | -0.128591 | -3077.176457 | paloma/mc4 | …s␠seem␠to␠work␠against␠you␠actually.␠Observe␠simple␠fact␠there␠are␠individuals␠who␠will␠allow␠you␠to␠reconstruct␠your␠… | \|…there\| | \|…there\| |
| sex | text/word | 1426 | 4278 | 0.961545 | 1.676072 | -0.714527 | -3056.747757 | fineweb2_multilingual/nob_Latn | …ts␠oslo␠Free␠Cam␠Girls␠Eskorte␠Damer␠Oslo...␠bangali␠ekte␠sex␠live␠chat␠api␠gratis⏎Eskorte␠kristiansund␠escort␠service… | \|…sex\| | \|…sex\| |
| e | text/word | 44876 | 44876 | 1.919012 | 1.985774 | -0.066762 | -2996.027110 | gh_archive_structured_output/IssuesEvent | …798f7f353916f4ce849b43d43b3f892010521350904305ac3adca6cbc46e`\\n\\n</details>\\n\\n<details><summary>to_migrate/jellyfin/D… | \|e\| | \|e\| |
| "} | text/punctuation | 14376 | 28752 | 0.126880 | 0.230088 | -0.103208 | -2967.422930 | paloma/dolma_100_programing_languages | …مپیریل␠نظام"}⏎␠␠␠␠␠␠␠␠␠␠␠␠ussystem{"پیمائش␠کا␠برطانوی␠نظام"}⏎␠␠␠␠␠␠␠␠}⏎␠␠␠␠␠␠␠␠numbers{⏎␠␠␠␠␠␠␠␠␠␠␠␠arab{"عربی␠ہندی␠ہن… | \|"}…\| | \|"}…\| |
| one | text/word | 8103 | 24309 | 0.953003 | 1.071813 | -0.118810 | -2888.142272 | structured_text/totto | …nburg-Bayreuth⇥Wilhelmine␠of␠Prussia␠17␠April␠1709␠Berlin␠one␠child␠Sophie␠Caroline␠of␠Brunswick-Wolfenbüttel␠20␠Septe… | \|…one\| | \|…one\| |
| and | text/word | 106109 | 318327 | 0.578227 | 0.587104 | -0.008877 | -2825.937210 | paloma/redpajama | …␠entry␠was␠posted␠on␠Tuesday,␠July␠14th,␠2009␠at␠10:25␠pm⇥and␠is␠filed␠under␠Celebs␠with␠Macs.␠You␠can␠follow␠any␠resp… | \|…and\| | \|…and\| |
| all | text/word | 9851 | 29553 | 0.898436 | 0.993446 | -0.095010 | -2807.824189 | paloma/falcon-refinedweb | …to␠understand␠and␠follow␠through␠on␠is␠key␠to␠good␠health␠all␠through␠your␠life.␠We␠can␠help.␠Make␠the␠Osteopathic␠app… | \|…all\| | \|…all\| |
