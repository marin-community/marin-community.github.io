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
| fineweb2_multilingual/por_Latn | 256 | 707637 | 0.901293 | 0.807346 | 0.093947 | 66480.126861 |
| long_tail_ppl_runnable/web_markup_image_text/svg_stack_test | 256 | 593175 | 0.875796 | 0.770387 | 0.105410 | 62526.515198 |
| raw_web_markup/svg_stack/svg_xml_test | 256 | 593175 | 0.875796 | 0.770387 | 0.105410 | 62526.515198 |
| fineweb2_multilingual/gom_Deva | 56 | 437688 | 0.908832 | 0.781717 | 0.127115 | 55636.635326 |
| paloma/c4_en | 256 | 523373 | 0.664946 | 0.769540 | -0.104594 | -54741.834180 |
| long_tail_ppl_runnable/web_markup_image_text/svg_stack_val | 256 | 530695 | 0.843309 | 0.744951 | 0.098358 | 52198.311219 |
| raw_web_markup/svg_stack/svg_xml_val | 256 | 530695 | 0.843309 | 0.744951 | 0.098358 | 52198.311219 |
| uncheatable_eval/wikipedia_english | 256 | 635606 | 0.604842 | 0.682241 | -0.077399 | -49195.211169 |
| bio_chem/moleculenet/moleculenet_clintox_smiles | 96 | 410728 | 0.604674 | 0.490532 | 0.114142 | 46881.148331 |
| uncheatable_eval/github_python | 256 | 1006410 | 0.322999 | 0.278618 | 0.044380 | 44664.764972 |
| uncheatable_eval/github_cpp | 256 | 876685 | 0.309825 | 0.259151 | 0.050674 | 44425.338364 |
| gh_archive_structured_output/IssuesEvent | 256 | 1078449 | 0.341149 | 0.301115 | 0.040033 | 43174.066638 |
| bio_chem/pubchem/pubchem_cid_smiles | 66 | 269899 | 0.983154 | 0.828126 | 0.155027 | 41841.706587 |
| structured_text/wikitablequestions | 256 | 471371 | 0.657023 | 0.740892 | -0.083869 | -39533.470168 |
| gh_archive_structured_output/IssueCommentEvent | 256 | 2681436 | 0.312819 | 0.298661 | 0.014157 | 37962.228116 |
| fineweb2_multilingual/sat_Olck | 21 | 138147 | 1.244198 | 0.993130 | 0.251068 | 34684.301113 |
| synthetic_reasoning_ppl/stepmath/algebra_linear_equation_3shot_icl | 256 | 339183 | 0.022540 | 0.119187 | -0.096647 | -32781.111261 |
| fineweb2_multilingual/deu_Latn | 256 | 681226 | 0.853170 | 0.808931 | 0.044239 | 30137.026508 |
| formal_methods/tptp | 256 | 1595080 | 0.183276 | 0.165071 | 0.018205 | 29038.075584 |
| fineweb2_multilingual/dan_Latn | 256 | 665640 | 1.050900 | 1.007955 | 0.042945 | 28586.231765 |
| fineweb2_multilingual/nld_Latn | 256 | 600203 | 0.958173 | 0.912385 | 0.045788 | 27482.020884 |
| uncheatable_eval/arxiv_physics | 256 | 1282105 | 0.562328 | 0.581889 | -0.019562 | -25080.035321 |
| fineweb2_multilingual/anp_Deva | 60 | 307339 | 0.458620 | 0.379214 | 0.079406 | 24404.489901 |
| paloma/dolma_100_subreddits | 256 | 204005 | 0.831155 | 0.950763 | -0.119609 | -24400.756391 |
| binary_network_security/uwf_zeek | 256 | 127072 | 1.900269 | 1.716878 | 0.183391 | 23303.920923 |
| fineweb2_multilingual/swe_Latn | 256 | 557706 | 1.035646 | 0.994432 | 0.041214 | 22985.392239 |
| gh_archive_structured_output/PushEvent | 256 | 238527 | 0.706446 | 0.617041 | 0.089404 | 21325.382389 |
| fineweb2_multilingual/awa_Deva | 23 | 133480 | 0.904609 | 0.748948 | 0.155661 | 20777.674479 |
| uncheatable_eval/arxiv_computer_science | 256 | 1237838 | 0.566623 | 0.583055 | -0.016431 | -20339.227808 |
| raw_web_markup/common_crawl/wat | 256 | 1416856 | 0.633899 | 0.621124 | 0.012774 | 18099.381656 |
| fineweb2_multilingual/brx_Deva | 38 | 138432 | 1.091018 | 0.961927 | 0.129090 | 17870.241429 |
| fineweb2_multilingual/fra_Latn | 256 | 826860 | 0.742411 | 0.721969 | 0.020442 | 16902.921300 |
| fineweb2_multilingual/fin_Latn | 256 | 874277 | 1.091812 | 1.110586 | -0.018774 | -16413.673558 |
| diagnostic_logs/logchunks_eval | 256 | 422514 | 0.380277 | 0.341894 | 0.038383 | 16217.458726 |
| structured_text/gittables | 256 | 1028512 | 0.849867 | 0.836459 | 0.013408 | 13790.348112 |
| lm_eval/gsm8k_train | 256 | 68195 | 0.112389 | 0.313033 | -0.200643 | -13682.880429 |
| diagnostic_logs/loghub_eval | 16 | 524288 | 0.304153 | 0.328166 | -0.024013 | -12589.545018 |
| synthetic_reasoning_ppl/native/bfs_shortest_path | 256 | 123980 | 0.364780 | 0.466001 | -0.101222 | -12549.450554 |
| synthetic_science_markup_ppl/scientific_records/genbank_feature_record | 256 | 50432 | 0.880034 | 0.636425 | 0.243609 | 12285.711578 |
| raw_web_markup/ocr_vqa/ocr_info_json_validation | 256 | 624497 | 0.474290 | 0.455617 | 0.018673 | 11661.077762 |
| synthetic_reasoning_ppl/native/insertion_sort | 256 | 282100 | 0.088837 | 0.127689 | -0.038852 | -10960.231877 |
| game_music/irishman_abc | 256 | 72959 | 1.550430 | 1.698809 | -0.148379 | -10825.567651 |
| synthetic_reasoning_ppl/native/lcs_dp_1shot_icl | 256 | 682628 | 0.069223 | 0.084871 | -0.015648 | -10681.753959 |
| synthetic_reasoning_ppl/native/prim_mst | 256 | 249959 | 0.220429 | 0.261604 | -0.041174 | -10291.860542 |
| raw_web_markup/ocr_vqa/book_metadata_validation | 256 | 65840 | 0.975842 | 1.129675 | -0.153833 | -10128.344280 |
| synthetic_reasoning_ppl/native/binary_search_5shot_icl | 256 | 101354 | 0.058813 | 0.158441 | -0.099627 | -10097.610792 |
| synthetic_reasoning_ppl/native/lis_dp | 256 | 237792 | 0.188664 | 0.229993 | -0.041329 | -9827.708884 |
| raw_web_markup/textocr/ocr_strings | 256 | 53066 | 1.638403 | 1.822791 | -0.184387 | -9784.697550 |
| synthetic_reasoning_ppl/native/euclid_gcd | 256 | 83916 | 0.298033 | 0.411774 | -0.113741 | -9544.648347 |
| synthetic_reasoning_ppl/native/dijkstra_shortest_path | 256 | 155250 | 0.373790 | 0.435106 | -0.061316 | -9519.237574 |
| synthetic_reasoning_ppl/native/propositional_entailment | 256 | 174992 | 0.214710 | 0.268454 | -0.053744 | -9404.794838 |
| synthetic_reasoning_ppl/clrs_style/clrs_bfs | 256 | 121381 | 0.040675 | 0.117349 | -0.076674 | -9306.766158 |
| synthetic_reasoning_ppl/native/union_find_connectivity_1shot_icl | 256 | 340280 | 0.030876 | 0.057981 | -0.027106 | -9223.529070 |
| synthetic_reasoning_ppl/stepmath/algebra_linear_equation | 256 | 339183 | 0.238311 | 0.265070 | -0.026758 | -9076.028056 |
| synthetic_reasoning_ppl/stepmath/arithmetic | 256 | 66660 | 0.325773 | 0.461437 | -0.135664 | -9043.331035 |
| synthetic_reasoning_ppl/native/interval_scheduling | 256 | 290062 | 0.172936 | 0.203934 | -0.030998 | -8991.227927 |
| synthetic_reasoning_ppl/clrs_style/clrs_topological_sort | 256 | 220006 | 0.022851 | 0.063662 | -0.040811 | -8978.741567 |
| synthetic_numeric_format_ppl/format_transforms/format_preserving_transforms | 256 | 13227 | 0.096187 | 0.765778 | -0.669590 | -8856.671768 |
| fineweb2_multilingual/mni_Beng | 27 | 318380 | 0.958258 | 0.930500 | 0.027759 | 8837.810103 |
| synthetic_reasoning_ppl/clrs_style/clrs_mst_prim | 256 | 238508 | 0.057468 | 0.094378 | -0.036910 | -8803.289577 |
| synthetic_reasoning_ppl/native/euclid_gcd_5shot_icl | 256 | 83916 | 0.055355 | 0.159572 | -0.104218 | -8745.530784 |
| synthetic_reasoning_ppl/stepmath/arithmetic_5shot_icl | 256 | 66660 | 0.114157 | 0.242975 | -0.128818 | -8587.022976 |
| synthetic_reasoning_ppl/native/parentheses_balance_5shot_icl | 256 | 289955 | 0.019443 | 0.048227 | -0.028784 | -8346.194138 |
| synthetic_reasoning_ppl/native/binary_search | 256 | 101354 | 0.448538 | 0.529512 | -0.080974 | -8207.000393 |
| synthetic_reasoning_ppl/clrs_style/clrs_dijkstra | 256 | 151630 | 0.065342 | 0.117747 | -0.052406 | -7946.256428 |
| formal_methods/coqgym | 256 | 908699 | 0.446431 | 0.437690 | 0.008741 | 7943.145916 |
| synthetic_reasoning_ppl/clrs_style/clrs_lis | 256 | 235036 | 0.029822 | 0.063387 | -0.033566 | -7889.121459 |
| synthetic_reasoning_ppl/clrs_style/clrs_binary_search | 256 | 100381 | 0.053347 | 0.129103 | -0.075756 | -7604.470075 |
| synthetic_reasoning_ppl/native/topological_sort | 256 | 226966 | 0.204178 | 0.237383 | -0.033205 | -7536.346870 |
| synthetic_numeric_format_ppl/structured_records/tabular_tsv_csv | 256 | 6861 | 0.718774 | 1.808139 | -1.089365 | -7474.130159 |
| synthetic_reasoning_ppl/native/interval_scheduling_1shot_icl | 256 | 290062 | 0.040933 | 0.066267 | -0.025334 | -7348.320317 |
| paloma/gab | 256 | 37599 | 1.236561 | 1.431234 | -0.194673 | -7319.510699 |
| synthetic_reasoning_ppl/clrs_style/clrs_insertion_sort | 256 | 283377 | 0.086965 | 0.112151 | -0.025186 | -7137.242006 |
| paloma/dolma_100_programing_languages | 256 | 898445 | 0.394032 | 0.386089 | 0.007943 | 7136.169918 |
| synthetic_machine_records_ppl/config_manifests/dockerfile | 256 | 23040 | 0.821938 | 0.521851 | 0.300087 | 6914.001192 |
| synthetic_reasoning_ppl/native/coin_change_dp | 256 | 946456 | 0.044812 | 0.051548 | -0.006736 | -6375.018869 |
| synthetic_numeric_format_ppl/numeric_transduction/numeric_compare_sort | 256 | 8466 | 0.267850 | 0.993703 | -0.725853 | -6145.075283 |
| synthetic_reasoning_ppl/native/edit_distance_dp_1shot_icl | 256 | 689998 | 0.022882 | 0.031699 | -0.008817 | -6083.708496 |
| synthetic_numeric_format_ppl/chunk_boundary/chunk_boundary_stress | 256 | 7252 | 0.237136 | 1.064811 | -0.827675 | -6002.300874 |
| raw_web_markup/ocr_vqa/ocr_tokens_validation | 256 | 33378 | 2.380641 | 2.555775 | -0.175134 | -5845.607821 |
| raw_web_markup/ocr_vqa/question_context_validation | 256 | 86943 | 0.713525 | 0.780517 | -0.066991 | -5824.441799 |
| synthetic_reasoning_ppl/native/knapsack_01_dp_1shot_icl | 256 | 2036704 | 0.054478 | 0.057334 | -0.002856 | -5816.501348 |
| synthetic_numeric_format_ppl/dense_numeric_blobs/mmcif_coordinate_tables | 256 | 16128 | 0.121351 | 0.481023 | -0.359672 | -5800.790472 |
| asr_ocr_noisy_ppl/hypr_librispeech_without_lm_test_clean/clean | 256 | 31537 | 1.106237 | 1.287005 | -0.180767 | -5700.857843 |
| synthetic_numeric_format_ppl/dense_numeric_blobs/svg_path_numeric_blobs | 256 | 21225 | 1.979478 | 2.247697 | -0.268220 | -5692.960512 |
| synthetic_numeric_format_ppl/numeric_transduction/numeric_copy_increment | 256 | 1597 | 1.185625 | 4.716539 | -3.530914 | -5638.869125 |
| fineweb2_multilingual/mag_Deva | 3 | 37283 | 0.895191 | 0.744806 | 0.150385 | 5606.796958 |
| asr_ocr_noisy_ppl/hypr_librispeech_without_lm_test_clean/noisy | 256 | 31506 | 1.160552 | 1.337944 | -0.177393 | -5588.928345 |
| fineweb2_multilingual/bpy_Beng | 18 | 64273 | 0.979572 | 0.894206 | 0.085366 | 5486.748377 |
| bio_chem/moleculenet/moleculenet_esol_smiles | 9 | 34415 | 1.505976 | 1.348712 | 0.157263 | 5412.215588 |
| synthetic_numeric_format_ppl/numeric_transduction/numeric_range_checksum_base | 256 | 2120 | 1.926899 | 4.409950 | -2.483052 | -5264.069419 |
| synthetic_numeric_format_ppl/structured_records/network_ip_port_rows | 256 | 19917 | 0.576703 | 0.839249 | -0.262547 | -5229.144292 |
| synthetic_numeric_format_ppl/dense_numeric_blobs/json_numeric_arrays | 256 | 5892 | 0.488779 | 1.362305 | -0.873527 | -5146.819439 |
| fineweb2_multilingual/tcy_Knda | 4 | 56618 | 1.015110 | 0.930622 | 0.084488 | 4783.524787 |
| formal_methods/dimacs_cnf | 13 | 425984 | 0.239466 | 0.228659 | 0.010807 | 4603.715067 |
| synthetic_science_markup_ppl/scientific_records/sdf_record_closure | 256 | 8596 | 2.209033 | 1.675090 | 0.533942 | 4589.769551 |
| synthetic_reasoning_ppl/native/union_find_connectivity | 256 | 340280 | 0.114262 | 0.127509 | -0.013247 | -4507.810630 |
| fineweb2_multilingual/snd_Deva | 6 | 42729 | 0.931635 | 0.829264 | 0.102371 | 4374.202967 |
| synthetic_patch_diff_ppl/file_path_line_refs | 256 | 26624 | 0.757375 | 0.912085 | -0.154710 | -4119.008025 |
| paloma/twitterAAE_HELM_fixed | 256 | 9649 | 2.233505 | 2.659092 | -0.425587 | -4106.489021 |
| synthetic_machine_records_ppl/config_manifests/pyproject_toml | 256 | 30354 | 0.737995 | 0.605814 | 0.132182 | 4012.248108 |
| synthetic_machine_records_ppl/trace_errors/compiler_errors | 256 | 26005 | 0.786342 | 0.940212 | -0.153870 | -4001.391247 |
| hardware_rtl/verilog_eval | 256 | 464820 | 0.686978 | 0.695445 | -0.008467 | -3935.807786 |
| synthetic_reasoning_ppl/native/parentheses_balance | 256 | 289955 | 0.132122 | 0.145312 | -0.013190 | -3824.581761 |
| fineweb2_multilingual/skr_Arab | 2 | 11653 | 1.519046 | 1.193100 | 0.325946 | 3798.248820 |
| synthetic_reasoning_ppl/clrs_style/clrs_lcs_length | 256 | 673311 | 0.057384 | 0.063018 | -0.005634 | -3793.667225 |
| bio_chem/rnacentral/rnacentral_active_fasta | 256 | 2545459 | 1.649496 | 1.650945 | -0.001448 | -3686.992943 |
| synthetic_identifier_encoding_ppl/encoded_text/data_image_base64_prefixes | 256 | 13056 | 6.119761 | 6.387375 | -0.267614 | -3493.970822 |
| fineweb2_multilingual/rav_Deva | 3 | 28660 | 0.969207 | 0.848487 | 0.120720 | 3459.845305 |
| paloma/ptb | 1 | 32768 | 0.713748 | 0.819122 | -0.105374 | -3452.880943 |
| synthetic_patch_diff_ppl/failing_test_trace_to_patch | 256 | 32000 | 0.109335 | 0.217197 | -0.107862 | -3451.596515 |
| synthetic_reasoning_ppl/native/edit_distance_dp | 256 | 689998 | 0.081075 | 0.086062 | -0.004987 | -3440.852420 |
| synthetic_machine_records_ppl/service_logs/nginx_access_error | 256 | 12258 | 0.879782 | 0.607794 | 0.271987 | 3334.020602 |
| fineweb2_multilingual/suz_Deva | 4 | 34828 | 0.931690 | 0.837599 | 0.094092 | 3277.026045 |
| synthetic_reasoning_ppl/native/floyd_warshall_apsp | 256 | 201771 | 0.358550 | 0.342423 | 0.016126 | 3253.857273 |
| fineweb2_multilingual/thl_Deva | 2 | 41972 | 1.086709 | 1.009768 | 0.076940 | 3229.340508 |
| synthetic_science_markup_ppl/scientific_records/pdb_atom_records | 256 | 42496 | 0.721318 | 0.646238 | 0.075080 | 3190.594715 |
| synthetic_patch_diff_ppl/commit_message_metadata | 256 | 35840 | 1.479298 | 1.567640 | -0.088341 | -3166.151776 |
| synthetic_machine_records_ppl/config_manifests/github_actions_yaml | 256 | 31232 | 0.745587 | 0.644472 | 0.101116 | 3158.043764 |
| synthetic_science_markup_ppl/tree_closure/xml_tag_closure | 256 | 18426 | 1.503378 | 1.668137 | -0.164759 | -3035.850125 |
| synthetic_identifier_encoding_ppl/identifier_grammars/package_names_versions | 256 | 16750 | 2.355384 | 2.535952 | -0.180568 | -3024.513451 |
| synthetic_identifier_encoding_ppl/escaped_text/json_unicode_byte_escapes | 256 | 7632 | 2.297754 | 2.686916 | -0.389161 | -2970.080516 |
| synthetic_patch_diff_ppl/unified_diff_hunks | 256 | 48384 | 0.538903 | 0.599333 | -0.060430 | -2923.866822 |
| raw_web_markup/textocr/annotations_json | 256 | 1127491 | 1.061190 | 1.063709 | -0.002519 | -2840.550790 |
| synthetic_science_markup_ppl/tree_closure/entity_escaping | 256 | 9992 | 0.396331 | 0.119116 | 0.277215 | 2769.929552 |
| synthetic_machine_records_ppl/ci_logs/github_actions_jobs | 256 | 8398 | 1.180995 | 0.881136 | 0.299860 | 2518.222114 |
| long_tail_ppl_runnable/formal_hardware/verilogeval_prompt | 156 | 14070 | 0.950770 | 0.779703 | 0.171067 | 2406.906016 |
| asr_ocr_noisy_ppl/rtm_sgt_ocr_v1_train/clean | 256 | 38288 | 0.988037 | 1.049982 | -0.061945 | -2371.750090 |
| asr_ocr_noisy_ppl/rtm_sgt_ocr_v1_train/noisy | 256 | 35909 | 1.427266 | 1.491647 | -0.064380 | -2311.838760 |
| long_tail_ppl_runnable/formal_hardware/verilogeval_canonical_solution | 156 | 35043 | 0.703083 | 0.641029 | 0.062054 | 2174.557936 |
| fineweb2_multilingual/kle_Deva | 1 | 32767 | 0.998517 | 0.934734 | 0.063783 | 2089.964809 |
| synthetic_machine_records_ppl/config_manifests/package_json | 256 | 29842 | 0.862976 | 0.794842 | 0.068134 | 2033.245940 |
| structured_text/web_data_commons_sample1k | 256 | 208388 | 0.786046 | 0.795729 | -0.009683 | -2017.867915 |
| package_metadata/npm_registry_metadata | 20 | 50370 | 1.058405 | 1.020670 | 0.037735 | 1900.709308 |
| fineweb2_multilingual/taj_Deva | 3 | 41558 | 0.860497 | 0.815357 | 0.045140 | 1875.923289 |
| synthetic_identifier_encoding_ppl/escaped_text/url_query_escaping | 256 | 5071 | 1.947203 | 2.312217 | -0.365014 | -1850.987044 |
| synthetic_science_markup_ppl/tree_closure/mathml_nested_tree | 256 | 18688 | 0.359581 | 0.261538 | 0.098043 | 1832.234027 |
| synthetic_science_markup_ppl/scientific_records/mmcif_loop_completion | 256 | 19712 | 1.739828 | 1.647326 | 0.092502 | 1823.390421 |
| fineweb2_multilingual/doi_Deva | 10 | 18298 | 1.167289 | 1.075654 | 0.091635 | 1676.737685 |
| synthetic_reasoning_ppl/clrs_style/clrs_floyd_warshall | 256 | 235874 | 0.236443 | 0.229397 | 0.007046 | 1661.860683 |
| synthetic_patch_diff_ppl/review_comment_threads | 256 | 32000 | 0.895519 | 0.947167 | -0.051648 | -1652.749990 |
| synthetic_reasoning_ppl/native/n_queens_backtracking_1shot_icl | 256 | 991050 | 0.050669 | 0.052335 | -0.001666 | -1650.617004 |
| synthetic_science_markup_ppl/markup_bibliography/bibtex_entry_completion | 256 | 26449 | 1.079278 | 1.017582 | 0.061696 | 1631.795118 |
| synthetic_identifier_encoding_ppl/identifier_grammars/commit_hashes | 256 | 7680 | 3.754986 | 3.965475 | -0.210488 | -1616.550270 |
| synthetic_identifier_encoding_ppl/identifier_grammars/mixed_case_symbolic_identifiers | 256 | 6810 | 5.855090 | 6.073533 | -0.218443 | -1487.596208 |
| fineweb2_multilingual/lif_Deva | 1 | 22920 | 0.824854 | 0.761292 | 0.063561 | 1456.826096 |
| synthetic_science_markup_ppl/markup_bibliography/latex_table_rows | 256 | 13312 | 1.263129 | 1.155869 | 0.107260 | 1427.840528 |
| fineweb2_multilingual/grt_Beng | 2 | 17981 | 0.946948 | 0.869037 | 0.077911 | 1400.917958 |
| synthetic_identifier_encoding_ppl/identifier_grammars/uuid_build_ids | 256 | 6285 | 3.392748 | 3.604723 | -0.211975 | -1332.260850 |
| synthetic_identifier_encoding_ppl/encoded_text/base64_continuation | 256 | 10752 | 5.932019 | 6.053210 | -0.121191 | -1303.043037 |
| synthetic_machine_records_ppl/structured_logs/json_application_logs | 256 | 32321 | 1.331771 | 1.371634 | -0.039863 | -1288.402333 |
| synthetic_science_markup_ppl/scientific_records/smiles_formula_completion | 256 | 10686 | 0.641737 | 0.759725 | -0.117988 | -1260.821256 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/chunk_boundary/chunk_boundary_stress | 256 | 7169 | 0.218993 | 0.389315 | -0.170322 | -1221.041695 |
| synthetic_reasoning_ppl/native/connected_components | 256 | 31979 | 0.447561 | 0.484889 | -0.037328 | -1193.703920 |
| synthetic_reasoning_ppl/clrs_style/clrs_connected_components | 256 | 31985 | 0.453023 | 0.490009 | -0.036986 | -1183.001217 |
| synthetic_reasoning_ppl/native/kmp_string_search_1shot_icl | 256 | 428889 | 0.056566 | 0.059324 | -0.002758 | -1182.703038 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/chunk_boundary/chunk_boundary_stress | 256 | 7169 | 0.160094 | 0.319277 | -0.159183 | -1141.182706 |
| synthetic_delimiter_format_ppl/whitespace_control/python_indentation_or_makefile_tabs | 256 | 6325 | 1.449015 | 1.623541 | -0.174526 | -1103.874809 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/chunk_boundary/chunk_boundary_stress | 256 | 7169 | 0.170390 | 0.324282 | -0.153892 | -1103.254881 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/numeric_transduction/numeric_compare_sort | 256 | 7805 | 0.319769 | 0.458861 | -0.139093 | -1085.618941 |
| fineweb2_multilingual/nob_Latn | 256 | 683953 | 1.124413 | 1.125935 | -0.001522 | -1040.792968 |
| fineweb2_multilingual/xsr_Deva | 2 | 13413 | 0.871106 | 0.794075 | 0.077031 | 1033.214553 |
| synthetic_machine_records_ppl/service_logs/k8s_system_events | 256 | 12288 | 1.894143 | 1.973581 | -0.079437 | -976.123655 |
| synthetic_machine_records_ppl/trace_errors/python_tracebacks | 256 | 8052 | 0.488024 | 0.604079 | -0.116055 | -934.475144 |
| synthetic_reasoning_ppl/native/lcs_dp | 256 | 682628 | 0.082353 | 0.081030 | 0.001323 | 903.164458 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/dense_numeric_blobs/mmcif_coordinate_tables | 256 | 16128 | 0.105294 | 0.049921 | 0.055373 | 893.057713 |
| synthetic_machine_records_ppl/service_logs/systemd_journal | 256 | 8312 | 0.880633 | 0.780773 | 0.099860 | 830.036608 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/dense_numeric_blobs/json_numeric_arrays | 256 | 6227 | 0.632075 | 0.500893 | 0.131182 | 816.869402 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/dense_numeric_blobs/json_numeric_arrays | 256 | 6227 | 0.613211 | 0.485853 | 0.127358 | 793.060171 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/dense_numeric_blobs/mmcif_coordinate_tables | 256 | 16128 | 0.109798 | 0.061223 | 0.048575 | 783.419948 |
| fineweb2_multilingual/mup_Deva | 2 | 11054 | 0.990588 | 0.919824 | 0.070764 | 782.220209 |
| synthetic_machine_records_ppl/service_logs/zeek_conn_http_dns | 256 | 4608 | 1.664316 | 1.501061 | 0.163255 | 752.278658 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/dense_numeric_blobs/json_numeric_arrays | 256 | 6227 | 0.691377 | 0.572842 | 0.118535 | 738.116969 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/numeric_transduction/numeric_range_checksum_base | 256 | 2046 | 1.949781 | 1.603544 | 0.346237 | 708.400931 |
| synthetic_science_markup_ppl/markup_bibliography/latex_reference_closure | 256 | 18434 | 1.184904 | 1.147609 | 0.037295 | 687.489245 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/dense_numeric_blobs/svg_path_numeric_blobs | 256 | 20073 | 1.952733 | 1.986778 | -0.034045 | -683.382312 |
| synthetic_machine_records_ppl/config_manifests/terraform_hcl | 256 | 21248 | 0.804643 | 0.777233 | 0.027410 | 582.400531 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/dense_numeric_blobs/mmcif_coordinate_tables | 256 | 16128 | 0.101627 | 0.066582 | 0.035045 | 565.211892 |
| synthetic_reasoning_ppl/native/n_queens_backtracking | 256 | 991050 | 0.089625 | 0.089061 | 0.000563 | 558.318120 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/dense_numeric_blobs/svg_path_numeric_blobs | 256 | 20073 | 1.950073 | 1.976778 | -0.026705 | -536.041446 |
| fineweb2_multilingual/mni_Mtei | 2 | 4462 | 1.194957 | 1.314084 | -0.119127 | -531.544774 |
| formal_methods/smt_lib | 12 | 55068 | 0.288918 | 0.279408 | 0.009510 | 523.699218 |
| synthetic_identifier_encoding_ppl/identifier_grammars/bio_accessions | 256 | 2493 | 4.286202 | 4.494572 | -0.208370 | -519.467462 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/dense_numeric_blobs/svg_path_numeric_blobs | 256 | 20073 | 1.950057 | 1.975693 | -0.025636 | -514.581491 |
| synthetic_science_markup_ppl/tree_closure/svg_group_path_closure | 256 | 18688 | 0.820877 | 0.847165 | -0.026288 | -491.265646 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/structured_records/network_ip_port_rows | 256 | 19856 | 0.557408 | 0.580409 | -0.023001 | -456.703599 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/structured_records/network_ip_port_rows | 256 | 19856 | 0.554714 | 0.577342 | -0.022628 | -449.301912 |
| synthetic_patch_diff_ppl/gh_pr_event_patch | 256 | 42496 | 0.501424 | 0.491186 | 0.010238 | 435.091926 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/structured_records/tabular_tsv_csv | 256 | 6866 | 0.669596 | 0.732547 | -0.062951 | -432.219813 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/numeric_transduction/numeric_compare_sort | 256 | 7805 | 0.273572 | 0.326563 | -0.052991 | -413.591198 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/structured_records/tabular_tsv_csv | 256 | 6866 | 0.596366 | 0.652918 | -0.056552 | -388.289321 |
| synthetic_science_markup_ppl/tree_closure/nested_attribute_tree | 256 | 10370 | 1.013910 | 0.976901 | 0.037009 | 383.787577 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/numeric_transduction/numeric_copy_increment | 256 | 1586 | 1.055276 | 0.820218 | 0.235058 | 372.802355 |
| synthetic_reasoning_ppl/native/knapsack_01_dp | 256 | 2036704 | 0.051376 | 0.051540 | -0.000164 | -334.042489 |
| synthetic_science_markup_ppl/scientific_records/fasta_sequence_record | 256 | 6656 | 4.959284 | 5.004803 | -0.045519 | -302.971469 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/numeric_transduction/numeric_range_checksum_base | 256 | 2046 | 1.793994 | 1.663224 | 0.130770 | 267.555466 |
| fineweb2_multilingual/kas_Arab | 4 | 10820 | 1.612273 | 1.587837 | 0.024436 | 264.398206 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/numeric_transduction/numeric_compare_sort | 256 | 7805 | 0.264460 | 0.295354 | -0.030895 | -241.134134 |
| synthetic_identifier_encoding_ppl/encoded_text/hex_dump_continuation | 256 | 11264 | 1.606976 | 1.627488 | -0.020513 | -231.054341 |
| synthetic_reasoning_ppl/native/kmp_string_search | 256 | 428889 | 0.198897 | 0.198401 | 0.000496 | 212.542170 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/numeric_transduction/numeric_range_checksum_base | 256 | 2046 | 1.753522 | 1.657161 | 0.096361 | 197.154227 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/structured_records/network_ip_port_rows | 256 | 19856 | 0.556781 | 0.566449 | -0.009668 | -191.971412 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/format_transforms/format_preserving_transforms | 256 | 13531 | 0.101185 | 0.089578 | 0.011607 | 157.055844 |
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
| fineweb2_multilingual/language/snd | 262 | 1233468 | 1.514391 | 0.881955 | 0.632436 | 780089.587042 |
| fineweb2_multilingual/language/kaz | 256 | 1638274 | 1.096549 | 0.640917 | 0.455632 | 746449.812737 |
| bio_chem/uniprot | 512 | 5231051 | 1.295143 | 1.161417 | 0.133726 | 699529.538515 |
| fineweb2_multilingual/language/kat | 256 | 1743619 | 0.797539 | 0.479801 | 0.317737 | 554013.113593 |
| fineweb2_multilingual/script/Geor | 256 | 1743619 | 0.797539 | 0.479801 | 0.317737 | 554013.113593 |
| fineweb2_multilingual/script/Beng | 559 | 3792853 | 0.652561 | 0.522805 | 0.129757 | 492147.912617 |
| fineweb2_multilingual/language/lit | 256 | 1024151 | 1.487528 | 1.019648 | 0.467880 | 479180.174752 |
| fineweb2_multilingual/language/srp | 256 | 1454893 | 0.964076 | 0.637255 | 0.326821 | 475490.169604 |
| bio_chem/chembl | 512 | 5834886 | 0.577996 | 0.506955 | 0.071041 | 414518.332778 |
| fineweb2_multilingual/language/azj | 256 | 895617 | 1.356138 | 0.937885 | 0.418253 | 374594.879536 |
| examples:1000 | 35072 | 18891123 | 0.157776 | 0.176610 | -0.018834 | -355795.861651 |
| fineweb2_multilingual/language/hun | 256 | 1007373 | 1.294781 | 0.955621 | 0.339160 | 341660.723941 |
| fineweb2_multilingual/language/sin | 256 | 1993722 | 0.852659 | 0.682062 | 0.170598 | 340124.121750 |
| fineweb2_multilingual/script/Sinh | 256 | 1993722 | 0.852659 | 0.682062 | 0.170598 | 340124.121750 |
| fineweb2_multilingual/language/lvs | 256 | 733076 | 1.436577 | 0.975059 | 0.461518 | 338328.057067 |
| fineweb2_multilingual/language/hrv | 256 | 1395834 | 1.263019 | 1.022096 | 0.240923 | 336288.529910 |
| bio_chem/pubchem | 322 | 4946475 | 0.500647 | 0.435559 | 0.065088 | 321958.208256 |
| fineweb2_multilingual/language/arb | 256 | 1286134 | 0.856587 | 0.607364 | 0.249223 | 320534.180011 |
| issue:4148 | 11264 | 17604092 | 0.091706 | 0.108817 | -0.017111 | -301225.293178 |
| issue:5052 | 11264 | 17604092 | 0.091706 | 0.108817 | -0.017111 | -301225.293178 |
| seed:1073741824 | 11264 | 17604092 | 0.091706 | 0.108817 | -0.017111 | -301225.293178 |
| synthetic_reasoning_ppl | 11264 | 17604092 | 0.091706 | 0.108817 | -0.017111 | -301225.293178 |
| source_commit:c4a59c3e1 | 10752 | 17540128 | 0.090398 | 0.107436 | -0.017038 | -298848.588041 |
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
| fineweb2_multilingual/language/bul | 256 | 1256872 | 0.693235 | 0.545266 | 0.147970 | 185978.877353 |
| uncheatable_eval | 1792 | 7102937 | 0.544724 | 0.570756 | -0.026032 | -184906.007631 |
| issue:5056 | 2560 | 6633071 | 0.724859 | 0.697119 | 0.027740 | 184003.499573 |
| raw_web_markup | 2560 | 6633071 | 0.724859 | 0.697119 | 0.027740 | 184003.499573 |
| fineweb2_multilingual/language/isl | 256 | 706172 | 1.570200 | 1.312529 | 0.257671 | 181959.731832 |
| family:native | 7680 | 14500917 | 0.090829 | 0.103294 | -0.012465 | -180757.104820 |
| synthetic_reasoning_ppl/native | 7680 | 14500917 | 0.090829 | 0.103294 | -0.012465 | -180757.104820 |
| fineweb2_multilingual/language/bos | 256 | 746428 | 1.276610 | 1.035160 | 0.241450 | 180224.715063 |
| fineweb2_multilingual/language/slk | 256 | 669166 | 1.239395 | 0.970234 | 0.269161 | 180113.507037 |
| fineweb2_multilingual/language/pan | 256 | 1513842 | 0.618509 | 0.503127 | 0.115382 | 174670.726458 |
| fineweb2_multilingual/script/Guru | 256 | 1513842 | 0.618509 | 0.503127 | 0.115382 | 174670.726458 |
| epic:5005 | 38944 | 34358650 | 0.277155 | 0.282125 | -0.004971 | -170785.318941 |
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
| fineweb2_multilingual/language/hne | 143 | 847488 | 0.922062 | 0.764167 | 0.157895 | 133813.915523 |
| fineweb2_multilingual/language/ind | 256 | 1015559 | 0.890739 | 0.758978 | 0.131761 | 133810.964176 |
| fineweb2_multilingual/language/heb | 256 | 1310615 | 0.929213 | 0.827664 | 0.101550 | 133092.390646 |
| fineweb2_multilingual/script/Hebr | 256 | 1310615 | 0.929213 | 0.827664 | 0.101550 | 133092.390646 |
| fineweb2_multilingual/language/hin | 256 | 1557780 | 0.494857 | 0.411384 | 0.083473 | 130032.798606 |
| split:test | 824 | 1235463 | 0.871751 | 0.766824 | 0.104928 | 129634.494349 |
| fineweb2_multilingual/language/pol | 256 | 842265 | 1.012215 | 0.860180 | 0.152034 | 128053.274038 |
| bio_chem/refseq | 256 | 3400185 | 1.900994 | 1.937883 | -0.036889 | -125428.024008 |
| long_tail_ppl_runnable | 824 | 1172983 | 0.856838 | 0.755126 | 0.101712 | 119306.290370 |
| loss:target_only | 26624 | 3610499 | 0.432064 | 0.464399 | -0.032335 | -116744.967423 |
| long_tail_ppl_runnable/web_markup_image_text | 512 | 1123870 | 0.860456 | 0.758376 | 0.102080 | 114724.826417 |
| raw_web_markup/svg_stack | 512 | 1123870 | 0.860456 | 0.758376 | 0.102080 | 114724.826417 |
| source:svg_stack | 512 | 1123870 | 0.860456 | 0.758376 | 0.102080 | 114724.826417 |
| surface:svg_xml | 512 | 1123870 | 0.860456 | 0.758376 | 0.102080 | 114724.826417 |
| web_markup_image_text | 512 | 1123870 | 0.860456 | 0.758376 | 0.102080 | 114724.826417 |
| long_tail_ppl | 1336 | 1433984 | 0.892421 | 0.816802 | 0.075618 | 108435.671814 |
| split:val | 512 | 1061390 | 0.843309 | 0.744951 | 0.098358 | 104396.622438 |
| fineweb2_multilingual/language/glg | 256 | 636799 | 1.083537 | 0.926483 | 0.157053 | 100011.497643 |
| issue:5059 | 1036 | 2435507 | 0.721317 | 0.762169 | -0.040852 | -99495.615452 |
| structured_text | 1036 | 2435507 | 0.721317 | 0.762169 | -0.040852 | -99495.615452 |
| icl_shots:5 | 3840 | 2865353 | 0.075960 | 0.110144 | -0.034185 | -97950.757640 |
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
| family:clrs_style | 2560 | 2291489 | 0.078327 | 0.104939 | -0.026612 | -60980.695030 |
| synthetic_reasoning_ppl/clrs_style | 2560 | 2291489 | 0.078327 | 0.104939 | -0.026612 | -60980.695030 |
| family:stepmath | 1024 | 811686 | 0.145132 | 0.218421 | -0.073289 | -59487.493328 |
| synthetic_reasoning_ppl/stepmath | 1024 | 811686 | 0.145132 | 0.218421 | -0.073289 | -59487.493328 |
| fineweb2_multilingual/language/gom | 56 | 437688 | 0.908832 | 0.781717 | 0.127115 | 55636.635326 |
| bio_chem/moleculenet | 105 | 445143 | 0.674355 | 0.556880 | 0.117475 | 52293.363919 |
| event_type:IssuesEvent | 256 | 1078449 | 0.341149 | 0.301115 | 0.040033 | 43174.066638 |
| formal_methods | 537 | 2984831 | 0.273359 | 0.259251 | 0.014108 | 42108.635784 |
| icl_shots:1 | 1792 | 5459611 | 0.049610 | 0.057301 | -0.007690 | -41987.133232 |
| wikitablequestions | 256 | 471371 | 0.657023 | 0.740892 | -0.083869 | -39533.470168 |
| issue:5060 | 793 | 3449651 | 0.329091 | 0.318026 | 0.011066 | 38172.827999 |
| event_type:IssueCommentEvent | 256 | 2681436 | 0.312819 | 0.298661 | 0.014157 | 37962.228116 |
| fineweb2_multilingual/language/sat | 21 | 138147 | 1.244198 | 0.993130 | 0.251068 | 34684.301113 |
| fineweb2_multilingual/script/Olck | 21 | 138147 | 1.244198 | 0.993130 | 0.251068 | 34684.301113 |
| icl_shots:3 | 256 | 339183 | 0.022540 | 0.119187 | -0.096647 | -32781.111261 |
| task:algebra_linear_equation_3shot_icl | 256 | 339183 | 0.022540 | 0.119187 | -0.096647 | -32781.111261 |
| fineweb2_multilingual/language/deu | 256 | 681226 | 0.853170 | 0.808931 | 0.044239 | 30137.026508 |
| fineweb2_multilingual/language/dan | 256 | 665640 | 1.050900 | 1.007955 | 0.042945 | 28586.231765 |
| fineweb2_multilingual/language/nld | 256 | 600203 | 0.958173 | 0.912385 | 0.045788 | 27482.020884 |
| hf_revision:ff4f38e047c8950725566a22488cbe567e275d2c | 3840 | 289321 | 1.117020 | 1.028412 | 0.088608 | 25636.066769 |
| source:generated_science_markup_tree_ppl_v1 | 3840 | 289321 | 1.117020 | 1.028412 | 0.088608 | 25636.066769 |
| synthetic_science_markup_ppl | 3840 | 289321 | 1.117020 | 1.028412 | 0.088608 | 25636.066769 |
| fineweb2_multilingual/language/anp | 60 | 307339 | 0.458620 | 0.379214 | 0.079406 | 24404.489901 |
| binary_network_security | 256 | 127072 | 1.900269 | 1.716878 | 0.183391 | 23303.920923 |
| issue:5057 | 256 | 127072 | 1.900269 | 1.716878 | 0.183391 | 23303.920923 |
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
| task:bfs_shortest_path | 256 | 123980 | 0.364780 | 0.466001 | -0.101222 | -12549.450554 |
| task:genbank_feature_record | 256 | 50432 | 0.880034 | 0.636425 | 0.243609 | 12285.711578 |
| surface:ocr_info_json | 256 | 624497 | 0.474290 | 0.455617 | 0.018673 | 11661.077762 |
| asr_ocr_noisy_ppl/hypr_librispeech_without_lm_test_clean | 512 | 63043 | 1.133381 | 1.312462 | -0.179081 | -11289.786188 |
| family:asr | 512 | 63043 | 1.133381 | 1.312462 | -0.179081 | -11289.786188 |
| source:hypr_librispeech_without_lm_test_clean | 512 | 63043 | 1.133381 | 1.312462 | -0.179081 | -11289.786188 |
| task:insertion_sort | 256 | 282100 | 0.088837 | 0.127689 | -0.038852 | -10960.231877 |
| game_music | 512 | 261001 | 1.052337 | 1.093987 | -0.041650 | -10870.618556 |
| issue:5062 | 512 | 261001 | 1.052337 | 1.093987 | -0.041650 | -10870.618556 |
| source:irishman | 256 | 72959 | 1.550430 | 1.698809 | -0.148379 | -10825.567651 |
| surface:abc_notation | 256 | 72959 | 1.550430 | 1.698809 | -0.148379 | -10825.567651 |
| task:lcs_dp_1shot_icl | 256 | 682628 | 0.069223 | 0.084871 | -0.015648 | -10681.753959 |
| task:prim_mst | 256 | 249959 | 0.220429 | 0.261604 | -0.041174 | -10291.860542 |
| raw_web_markup/ocr_vqa | 1024 | 810658 | 0.619175 | 0.631680 | -0.012505 | -10137.316138 |
| source:ocr_vqa | 1024 | 810658 | 0.619175 | 0.631680 | -0.012505 | -10137.316138 |
| split:validation | 1024 | 810658 | 0.619175 | 0.631680 | -0.012505 | -10137.316138 |
| surface:book_metadata | 256 | 65840 | 0.975842 | 1.129675 | -0.153833 | -10128.344280 |
| task:binary_search_5shot_icl | 256 | 101354 | 0.058813 | 0.158441 | -0.099627 | -10097.610792 |
| task:lis_dp | 256 | 237792 | 0.188664 | 0.229993 | -0.041329 | -9827.708884 |
| surface:ocr_strings | 256 | 53066 | 1.638403 | 1.822791 | -0.184387 | -9784.697550 |
| task:euclid_gcd | 256 | 83916 | 0.298033 | 0.411774 | -0.113741 | -9544.648347 |
| task:dijkstra_shortest_path | 256 | 155250 | 0.373790 | 0.435106 | -0.061316 | -9519.237574 |
| family:chunk_boundary | 1024 | 28759 | 0.196770 | 0.525981 | -0.329211 | -9467.780156 |
| task:chunk_boundary_stress | 1024 | 28759 | 0.196770 | 0.525981 | -0.329211 | -9467.780156 |
| task:propositional_entailment | 256 | 174992 | 0.214710 | 0.268454 | -0.053744 | -9404.794838 |
| task:clrs_bfs | 256 | 121381 | 0.040675 | 0.117349 | -0.076674 | -9306.766158 |
| task:union_find_connectivity_1shot_icl | 256 | 340280 | 0.030876 | 0.057981 | -0.027106 | -9223.529070 |
| issue:5618 | 13568 | 880485 | 1.226182 | 1.215760 | 0.010422 | 9176.719016 |
| task:algebra_linear_equation | 256 | 339183 | 0.238311 | 0.265070 | -0.026758 | -9076.028056 |
| task:arithmetic | 256 | 66660 | 0.325773 | 0.461437 | -0.135664 | -9043.331035 |
| task:interval_scheduling | 256 | 290062 | 0.172936 | 0.203934 | -0.030998 | -8991.227927 |
| task:clrs_topological_sort | 256 | 220006 | 0.022851 | 0.063662 | -0.040811 | -8978.741567 |
| synthetic_numeric_format_ppl/format_transforms | 256 | 13227 | 0.096187 | 0.765778 | -0.669590 | -8856.671768 |
| task:clrs_mst_prim | 256 | 238508 | 0.057468 | 0.094378 | -0.036910 | -8803.289577 |
| family:format_transforms | 1024 | 53820 | 0.092457 | 0.255604 | -0.163147 | -8780.560326 |
| task:format_preserving_transforms | 1024 | 53820 | 0.092457 | 0.255604 | -0.163147 | -8780.560326 |
| task:euclid_gcd_5shot_icl | 256 | 83916 | 0.055355 | 0.159572 | -0.104218 | -8745.530784 |
| task:arithmetic_5shot_icl | 256 | 66660 | 0.114157 | 0.242975 | -0.128818 | -8587.022976 |
| task:tabular_tsv_csv | 1024 | 27459 | 0.664641 | 0.968867 | -0.304226 | -8353.745509 |
| task:parentheses_balance_5shot_icl | 256 | 289955 | 0.019443 | 0.048227 | -0.028784 | -8346.194138 |
| fineweb2_multilingual/language/mni | 29 | 322842 | 0.961530 | 0.935801 | 0.025729 | 8306.265329 |
| task:binary_search | 256 | 101354 | 0.448538 | 0.529512 | -0.080974 | -8207.000393 |
| variant:clean | 512 | 69825 | 1.041423 | 1.157035 | -0.115612 | -8072.607932 |
| family:identifier_grammars | 1280 | 40018 | 3.502751 | 3.702170 | -0.199420 | -7980.388242 |
| synthetic_identifier_encoding_ppl/identifier_grammars | 1280 | 40018 | 3.502751 | 3.702170 | -0.199420 | -7980.388242 |
| task:clrs_dijkstra | 256 | 151630 | 0.065342 | 0.117747 | -0.052406 | -7946.256428 |
| variant:noisy | 512 | 67415 | 1.302619 | 1.419815 | -0.117196 | -7900.767105 |
| task:clrs_lis | 256 | 235036 | 0.029822 | 0.063387 | -0.033566 | -7889.121459 |
| task:numeric_compare_sort | 1024 | 31881 | 0.281131 | 0.528471 | -0.247339 | -7885.419556 |
| seed:5615 | 6400 | 377114 | 1.730359 | 1.709658 | 0.020701 | 7806.542768 |
| task:clrs_binary_search | 256 | 100381 | 0.053347 | 0.129103 | -0.075756 | -7604.470075 |
| task:topological_sort | 256 | 226966 | 0.204178 | 0.237383 | -0.033205 | -7536.346870 |
| task:svg_path_numeric_blobs | 1024 | 81444 | 1.958388 | 2.049579 | -0.091191 | -7426.965761 |
| task:interval_scheduling_1shot_icl | 256 | 290062 | 0.040933 | 0.066267 | -0.025334 | -7348.320317 |
| task:clrs_insertion_sort | 256 | 283377 | 0.086965 | 0.112151 | -0.025186 | -7137.242006 |
| subset:dockerfile | 256 | 23040 | 0.821938 | 0.521851 | 0.300087 | 6914.001192 |
| task:dockerfile | 256 | 23040 | 0.821938 | 0.521851 | 0.300087 | 6914.001192 |
| task:coin_change_dp | 256 | 946456 | 0.044812 | 0.051548 | -0.006736 | -6375.018869 |
| task:network_ip_port_rows | 1024 | 79485 | 0.561413 | 0.641015 | -0.079601 | -6327.121216 |
| task:edit_distance_dp_1shot_icl | 256 | 689998 | 0.022882 | 0.031699 | -0.008817 | -6083.708496 |
| synthetic_numeric_format_ppl/chunk_boundary | 256 | 7252 | 0.237136 | 1.064811 | -0.827675 | -6002.300874 |
| surface:ocr_tokens | 256 | 33378 | 2.380641 | 2.555775 | -0.175134 | -5845.607821 |
| surface:question_context | 256 | 86943 | 0.713525 | 0.780517 | -0.066991 | -5824.441799 |
| task:knapsack_01_dp_1shot_icl | 256 | 2036704 | 0.054478 | 0.057334 | -0.002856 | -5816.501348 |
| fineweb2_multilingual/language/mag | 3 | 37283 | 0.895191 | 0.744806 | 0.150385 | 5606.796958 |
| fineweb2_multilingual/language/bpy | 18 | 64273 | 0.979572 | 0.894206 | 0.085366 | 5486.748377 |
| task:numeric_copy_increment | 1024 | 6355 | 1.137161 | 1.932891 | -0.795730 | -5056.862358 |
| family:encoded_text | 768 | 35072 | 4.612844 | 4.756208 | -0.143364 | -5028.068200 |
| synthetic_identifier_encoding_ppl/encoded_text | 768 | 35072 | 4.612844 | 4.756208 | -0.143364 | -5028.068200 |
| family:trace_errors | 512 | 34057 | 0.715811 | 0.860741 | -0.144930 | -4935.866391 |
| synthetic_machine_records_ppl/trace_errors | 512 | 34057 | 0.715811 | 0.860741 | -0.144930 | -4935.866391 |
| family:escaped_text | 512 | 12703 | 2.157815 | 2.537337 | -0.379522 | -4821.067559 |
| synthetic_identifier_encoding_ppl/escaped_text | 512 | 12703 | 2.157815 | 2.537337 | -0.379522 | -4821.067559 |
| fineweb2_multilingual/language/tcy | 4 | 56618 | 1.015110 | 0.930622 | 0.084488 | 4783.524787 |
| asr_ocr_noisy_ppl/rtm_sgt_ocr_v1_train | 512 | 74197 | 1.200610 | 1.263734 | -0.063124 | -4683.588849 |
| family:ocr | 512 | 74197 | 1.200610 | 1.263734 | -0.063124 | -4683.588849 |
| source:rtm_sgt_ocr_v1_train | 512 | 74197 | 1.200610 | 1.263734 | -0.063124 | -4683.588849 |
| task:sdf_record_closure | 256 | 8596 | 2.209033 | 1.675090 | 0.533942 | 4589.769551 |
| formal_hardware | 312 | 49113 | 0.774041 | 0.680757 | 0.093284 | 4581.463952 |
| long_tail_ppl_runnable/formal_hardware | 312 | 49113 | 0.774041 | 0.680757 | 0.093284 | 4581.463952 |
| task:union_find_connectivity | 256 | 340280 | 0.114262 | 0.127509 | -0.013247 | -4507.810630 |
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
| task:parentheses_balance | 256 | 289955 | 0.132122 | 0.145312 | -0.013190 | -3824.581761 |
| fineweb2_multilingual/language/skr | 2 | 11653 | 1.519046 | 1.193100 | 0.325946 | 3798.248820 |
| task:clrs_lcs_length | 256 | 673311 | 0.057384 | 0.063018 | -0.005634 | -3793.667225 |
| family:markup_bibliography | 768 | 58195 | 1.154792 | 1.090403 | 0.064389 | 3747.124891 |
| synthetic_science_markup_ppl/markup_bibliography | 768 | 58195 | 1.154792 | 1.090403 | 0.064389 | 3747.124891 |
| bio_chem/rnacentral | 256 | 2545459 | 1.649496 | 1.650945 | -0.001448 | -3686.992943 |
| split:eval_only | 272 | 946802 | 0.338124 | 0.334292 | 0.003832 | 3627.913708 |
| task:mmcif_coordinate_tables | 1024 | 64512 | 0.109518 | 0.164687 | -0.055170 | -3559.100918 |
| task:data_image_base64_prefixes | 256 | 13056 | 6.119761 | 6.387375 | -0.267614 | -3493.970822 |
| fineweb2_multilingual/language/rav | 3 | 28660 | 0.969207 | 0.848487 | 0.120720 | 3459.845305 |
| subset:failing_test_trace_to_patch | 256 | 32000 | 0.109335 | 0.217197 | -0.107862 | -3451.596515 |
| task:failing_test_trace_to_patch | 256 | 32000 | 0.109335 | 0.217197 | -0.107862 | -3451.596515 |
| task:edit_distance_dp | 256 | 689998 | 0.081075 | 0.086062 | -0.004987 | -3440.852420 |
| subset:nginx | 256 | 12258 | 0.879782 | 0.607794 | 0.271987 | 3334.020602 |
| task:nginx_access_error | 256 | 12258 | 0.879782 | 0.607794 | 0.271987 | 3334.020602 |
| fineweb2_multilingual/language/suz | 4 | 34828 | 0.931690 | 0.837599 | 0.094092 | 3277.026045 |
| task:floyd_warshall_apsp | 256 | 201771 | 0.358550 | 0.342423 | 0.016126 | 3253.857273 |
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
| surface:annotations_json | 256 | 1127491 | 1.061190 | 1.063709 | -0.002519 | -2840.550790 |
| task:json_numeric_arrays | 1024 | 24573 | 0.607963 | 0.721860 | -0.113896 | -2798.772897 |
| task:entity_escaping | 256 | 9992 | 0.396331 | 0.119116 | 0.277215 | 2769.929552 |
| family:ci_logs | 256 | 8398 | 1.180995 | 0.881136 | 0.299860 | 2518.222114 |
| subset:github_actions | 256 | 8398 | 1.180995 | 0.881136 | 0.299860 | 2518.222114 |
| synthetic_machine_records_ppl/ci_logs | 256 | 8398 | 1.180995 | 0.881136 | 0.299860 | 2518.222114 |
| task:github_actions_jobs | 256 | 8398 | 1.180995 | 0.881136 | 0.299860 | 2518.222114 |
| hf_revision:bca4b9413bc72ae66614da99dafcc87ab7bc074f | 7680 | 303861 | 0.697778 | 0.705994 | -0.008216 | -2496.456147 |
| seed:60935010 | 7680 | 303861 | 0.697778 | 0.705994 | -0.008216 | -2496.456147 |
| source:generated_numeric_format_prompt_ablation_ppl_v1 | 7680 | 303861 | 0.697778 | 0.705994 | -0.008216 | -2496.456147 |
| synthetic_numeric_format_prompt_ablation_ppl | 7680 | 303861 | 0.697778 | 0.705994 | -0.008216 | -2496.456147 |
| difficulty:harder | 512 | 63964 | 0.450292 | 0.487449 | -0.037157 | -2376.705137 |
| source:generated_connected_components_icl_v2 | 512 | 63964 | 0.450292 | 0.487449 | -0.037157 | -2376.705137 |
| fineweb2_multilingual/language/kle | 1 | 32767 | 0.998517 | 0.934734 | 0.063783 | 2089.964809 |
| subset:package_json | 256 | 29842 | 0.862976 | 0.794842 | 0.068134 | 2033.245940 |
| task:package_json | 256 | 29842 | 0.862976 | 0.794842 | 0.068134 | 2033.245940 |
| web_data_commons_sample1k | 256 | 208388 | 0.786046 | 0.795729 | -0.009683 | -2017.867915 |
| issue:5061 | 20 | 50370 | 1.058405 | 1.020670 | 0.037735 | 1900.709308 |
| package_metadata | 20 | 50370 | 1.058405 | 1.020670 | 0.037735 | 1900.709308 |
| fineweb2_multilingual/language/taj | 3 | 41558 | 0.860497 | 0.815357 | 0.045140 | 1875.923289 |
| task:url_query_escaping | 256 | 5071 | 1.947203 | 2.312217 | -0.365014 | -1850.987044 |
| task:mathml_nested_tree | 256 | 18688 | 0.359581 | 0.261538 | 0.098043 | 1832.234027 |
| task:mmcif_loop_completion | 256 | 19712 | 1.739828 | 1.647326 | 0.092502 | 1823.390421 |
| fineweb2_multilingual/language/doi | 10 | 18298 | 1.167289 | 1.075654 | 0.091635 | 1676.737685 |
| task:clrs_floyd_warshall | 256 | 235874 | 0.236443 | 0.229397 | 0.007046 | 1661.860683 |
| subset:review_comment_threads | 256 | 32000 | 0.895519 | 0.947167 | -0.051648 | -1652.749990 |
| task:review_comment_threads | 256 | 32000 | 0.895519 | 0.947167 | -0.051648 | -1652.749990 |
| task:n_queens_backtracking_1shot_icl | 256 | 991050 | 0.050669 | 0.052335 | -0.001666 | -1650.617004 |
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
| task:uuid_build_ids | 256 | 6285 | 3.392748 | 3.604723 | -0.211975 | -1332.260850 |
| task:base64_continuation | 256 | 10752 | 5.932019 | 6.053210 | -0.121191 | -1303.043037 |
| family:structured_logs | 256 | 32321 | 1.331771 | 1.371634 | -0.039863 | -1288.402333 |
| subset:json_logs | 256 | 32321 | 1.331771 | 1.371634 | -0.039863 | -1288.402333 |
| synthetic_machine_records_ppl/structured_logs | 256 | 32321 | 1.331771 | 1.371634 | -0.039863 | -1288.402333 |
| task:json_application_logs | 256 | 32321 | 1.331771 | 1.371634 | -0.039863 | -1288.402333 |
| task:smiles_formula_completion | 256 | 10686 | 0.641737 | 0.759725 | -0.117988 | -1260.821256 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/chunk_boundary | 256 | 7169 | 0.218993 | 0.389315 | -0.170322 | -1221.041695 |
| task:connected_components | 256 | 31979 | 0.447561 | 0.484889 | -0.037328 | -1193.703920 |
| task:clrs_connected_components | 256 | 31985 | 0.453023 | 0.490009 | -0.036986 | -1183.001217 |
| task:kmp_string_search_1shot_icl | 256 | 428889 | 0.056566 | 0.059324 | -0.002758 | -1182.703038 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/chunk_boundary | 256 | 7169 | 0.160094 | 0.319277 | -0.159183 | -1141.182706 |
| task:python_indentation_or_makefile_tabs | 256 | 6325 | 1.449015 | 1.623541 | -0.174526 | -1103.874809 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/chunk_boundary | 256 | 7169 | 0.170390 | 0.324282 | -0.153892 | -1103.254881 |
| family:whitespace_control | 512 | 10677 | 1.203721 | 1.302999 | -0.099278 | -1059.990465 |
| synthetic_delimiter_format_ppl/whitespace_control | 512 | 10677 | 1.203721 | 1.302999 | -0.099278 | -1059.990465 |
| fineweb2_multilingual/language/nob | 256 | 683953 | 1.124413 | 1.125935 | -0.001522 | -1040.792968 |
| fineweb2_multilingual/language/xsr | 2 | 13413 | 0.871106 | 0.794075 | 0.077031 | 1033.214553 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/dense_numeric_blobs | 768 | 42428 | 1.065795 | 1.042061 | 0.023733 | 1006.955427 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/dense_numeric_blobs | 768 | 42428 | 1.053876 | 1.030242 | 0.023634 | 1002.735573 |
| subset:k8s | 256 | 12288 | 1.894143 | 1.973581 | -0.079437 | -976.123655 |
| task:k8s_system_events | 256 | 12288 | 1.894143 | 1.973581 | -0.079437 | -976.123655 |
| subset:python_traceback | 256 | 8052 | 0.488024 | 0.604079 | -0.116055 | -934.475144 |
| task:python_tracebacks | 256 | 8052 | 0.488024 | 0.604079 | -0.116055 | -934.475144 |
| task:lcs_dp | 256 | 682628 | 0.082353 | 0.081030 | 0.001323 | 903.164458 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/dense_numeric_blobs | 768 | 42428 | 1.053992 | 1.034052 | 0.019941 | 846.039848 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/structured_records | 512 | 26722 | 0.565416 | 0.596761 | -0.031345 | -837.591233 |
| subset:system | 256 | 8312 | 0.880633 | 0.780773 | 0.099860 | 830.036608 |
| task:systemd_journal | 256 | 8312 | 0.880633 | 0.780773 | 0.099860 | 830.036608 |
| fineweb2_multilingual/language/mup | 2 | 11054 | 0.990588 | 0.919824 | 0.070764 | 782.220209 |
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
| task:n_queens_backtracking | 256 | 991050 | 0.089625 | 0.089061 | 0.000563 | 558.318120 |
| fineweb2_multilingual/script/Mtei | 2 | 4462 | 1.194957 | 1.314084 | -0.119127 | -531.544774 |
| prompt_variant:arrow | 2560 | 101287 | 0.692616 | 0.697829 | -0.005213 | -528.005536 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow | 2560 | 101287 | 0.692616 | 0.697829 | -0.005213 | -528.005536 |
| task:bio_accessions | 256 | 2493 | 4.286202 | 4.494572 | -0.208370 | -519.467462 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/structured_records | 512 | 26722 | 0.587331 | 0.606633 | -0.019303 | -515.809815 |
| task:svg_group_path_closure | 256 | 18688 | 0.820877 | 0.847165 | -0.026288 | -491.265646 |
| prompt_variant:equals | 2560 | 101287 | 0.702696 | 0.707462 | -0.004765 | -482.667892 |
| synthetic_numeric_format_prompt_ablation_ppl/equals | 2560 | 101287 | 0.702696 | 0.707462 | -0.004765 | -482.667892 |
| subset:gh_pr_event_patch | 256 | 42496 | 0.501424 | 0.491186 | 0.010238 | 435.091926 |
| task:gh_pr_event_patch | 256 | 42496 | 0.501424 | 0.491186 | 0.010238 | 435.091926 |
| task:nested_attribute_tree | 256 | 10370 | 1.013910 | 0.976901 | 0.037009 | 383.787577 |
| fineweb2_multilingual/language/kas | 5 | 12557 | 1.551584 | 1.524263 | 0.027321 | 343.071055 |
| task:knapsack_01_dp | 256 | 2036704 | 0.051376 | 0.051540 | -0.000164 | -334.042489 |
| synthetic_numeric_format_prompt_ablation_ppl/arrow/numeric_transduction | 768 | 11437 | 0.640507 | 0.611756 | 0.028751 | 328.822448 |
| task:fasta_sequence_record | 256 | 6656 | 4.959284 | 5.004803 | -0.045519 | -302.971469 |
| synthetic_numeric_format_prompt_ablation_ppl/newline/numeric_transduction | 768 | 11437 | 0.724069 | 0.749114 | -0.025045 | -286.434862 |
| task:hex_dump_continuation | 256 | 11264 | 1.606976 | 1.627488 | -0.020513 | -231.054341 |
| task:kmp_string_search | 256 | 428889 | 0.198897 | 0.198401 | 0.000496 | 212.542170 |
| family:delimited_fields | 768 | 4864 | 2.901218 | 2.864719 | 0.036499 | 177.533401 |
| synthetic_delimiter_format_ppl/delimited_fields | 768 | 4864 | 2.901218 | 2.864719 | 0.036499 | 177.533401 |
| synthetic_numeric_format_prompt_ablation_ppl/equals/format_transforms | 256 | 13531 | 0.101185 | 0.089578 | 0.011607 | 157.055844 |
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

## Pattern Buckets

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| text/non_ascii_word | 4282009 | 54940176 | 0.787145 | 0.606027 | 0.181118 | 9950648.920498 |
| text/word | 10370737 | 55248238 | 0.869521 | 0.847478 | 0.022043 | 1217851.270220 |
| whitespace/single_space | 14801857 | 14801857 | 0.759193 | 0.682480 | 0.076713 | 1135494.664781 |
| text/number | 5133679 | 12234839 | 0.972044 | 0.893015 | 0.079029 | 966906.999318 |
| text/punctuation | 8691126 | 12288272 | 0.408615 | 0.388523 | 0.020092 | 246890.659945 |
| text/url | 25793 | 8501554 | 0.247023 | 0.220197 | 0.026826 | 228060.388289 |
| text/non_ascii | 585493 | 3439582 | 1.363483 | 1.392921 | -0.029438 | -101254.596366 |
| whitespace/multi_space | 1690876 | 4284315 | 0.072915 | 0.055963 | 0.016951 | 72624.636141 |
| whitespace/newline | 956396 | 956396 | 0.823377 | 0.773079 | 0.050298 | 48104.679591 |
| whitespace/mixed | 355936 | 1587815 | 0.271578 | 0.256169 | 0.015409 | 24466.309607 |
| whitespace/multi_newline | 71397 | 152557 | 0.566156 | 0.619192 | -0.053036 | -8091.020751 |
| whitespace/tab_or_cr | 266387 | 525472 | 0.674542 | 0.665572 | 0.008970 | 4713.562495 |

## Top Documents: Model A Worse

| dataset | shard | row_index | bytes | score_byte_start | score_byte_end | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fineweb2_multilingual/lit_Latn | 0000_parquet | 191 | 32768 | 0 | 32768 | 1.971101 | 1.265112 | 0.705990 | 23133.866318 | text/non_ascii_word | Pašnibždomis | 3.426028 | …augelis␠kitų.␠Buvo␠darbininkų,␠ūkininkų,␠valdininkų.␠Pašnibždomis␠pasakė,␠kad␠laikyčiausi␠atsargiai,␠nes␠kartu␠yra␠įle… |
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
| fineweb2_multilingual/snd_Arab | 0000_parquet | 41 | 24704 | 0 | 24704 | 1.439736 | 0.835666 | 0.604069 | 14922.929333 | text/non_ascii_word | وڪيپيڊيا | 2.757850 | …ڇڏيندس.⏎وڪيپيڊيا␠تي␠ٽيڪسٽ␠کي␠لنڪ␠ڪيئن␠ڪجي␠۽␠پڻ␠اهو␠لنڪ␠وڪيپيڊيا␠تائين␠محدود␠آهي␠يا␠ڪنهن␠به␠سائِيٽ␠جو␠رکي␠سگھجي␠ٿو؟[سنو… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 220 | 23032 | 0 | 23032 | 1.375507 | 0.734954 | 0.640554 | 14753.229651 | text/non_ascii_word | آپٽمائزيشن | 1.896024 | …␠گهمڻ␠وارن␠جي␠تعداد␠۾␠مسلسل␠واڌارو␠ڪرڻ␠لاءِ.␠سرچ␠انجن␠آپٽمائزيشن␠(ايس␠اي␠او)␠،␠سادي␠اصطلاحن␠۾␠،␠اندروني␠۽␠بيروني␠اصلاح… |
| fineweb2_multilingual/ekk_Latn | 0000_parquet | 96 | 32767 | 0 | 32767 | 1.576569 | 1.129156 | 0.447413 | 14660.393033 | text/word | magamaminekut | 4.244431 | …␠1␠tund,␠tühjendada,␠pigistada.␠Võtke␠50-60␠gr.␠Enne␠magamaminekut.␠Kahjutu␠rahvapärane␠ravim␠unetuse␠vastu␠tagab␠hea␠… |
| fineweb2_multilingual/hun_Latn | 0000_parquet | 184 | 32164 | 0 | 32164 | 1.659141 | 1.204735 | 0.454406 | 14615.525586 | text/non_ascii_word | álldogáló | 3.205488 | …elen␠megakadsz␠a␠kilincs␠kezelésében,␠akkor␠a␠közelben␠álldogáló␠Evan␠Dodds␠–␠Exchange2007␠Shell␠program␠menedzser␠–␠p… |
| fineweb2_multilingual/kaz_Cyrl | 0000_parquet | 63 | 32767 | 0 | 32767 | 1.194378 | 0.753496 | 0.440882 | 14446.392466 | text/non_ascii_word | Мұңайтпасовты | 1.502566 | …асау␠үшін␠шет␠елге␠оқуға␠(Бірімжановты,␠Битілеуовті,␠Мұңайтпасовты)␠жіберген␠–␠деген␠айып␠тағып,␠«Алашорда»␠қайраткерл… |
| fineweb2_multilingual/kaz_Cyrl | 0000_parquet | 58 | 32768 | 0 | 32768 | 1.009941 | 0.575093 | 0.434847 | 14249.073601 | text/non_ascii_word | күмәнданбайды | 1.772860 | …оқ␠еді.⏎Қазіргі␠уақытта␠ешкім␠атомдардың␠бар␠екеніне␠күмәнданбайды.␠оқу␠құралы␠атом␠анықтамасын␠ұсынады␠«атомы␠-.␠оның… |
| fineweb2_multilingual/azj_Latn | 0000_parquet | 45 | 32768 | 0 | 32768 | 1.668065 | 1.237559 | 0.430506 | 14106.822213 | text/non_ascii_word | siyasi-fəlsəfi | 2.936833 | …rən␠amillərdən␠ən␠başlıjası␠sənətkarın␠dünyagörüşü,␠siyasi-fəlsəfi,␠etik-estetik,␠mənəvi-əxlaqi␠kredosudur.␠Əslində␠el… |
| fineweb2_multilingual/kaz_Cyrl | 0000_parquet | 167 | 32767 | 0 | 32767 | 1.223259 | 0.795816 | 0.427443 | 14006.015430 | text/non_ascii_word | Лиро-эпостық | 2.071292 | …тарихы.␠I-том.␠Алм.␠1990.⏎«Қозы␠Көрпеш-Баян␠сұлу»⏎1.␠Лиро-эпостық␠жырлар.⏎2.␠Жырдың␠варианттары,␠зерттелуі.⏎3.␠Жанақ␠ж… |
| fineweb2_multilingual/kaz_Cyrl | 0000_parquet | 132 | 32768 | 0 | 32768 | 1.433726 | 1.017698 | 0.416029 | 13632.431616 | text/non_ascii_word | Дерттібектің | 2.467656 | …␠қайбір␠жетіскен␠ғалым␠шығады␠дейсің␠деді.␠Осы␠тұста␠Дерттібектің␠жүрегі␠дүрсілдей␠бастады.⏎Тұрағалды␠хатшы␠қызға␠қара… |

## Top Documents: Model B Worse

| dataset | shard | row_index | bytes | score_byte_start | score_byte_end | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fineweb2_multilingual/nob_Latn | 0000_parquet | 116 | 27306 | 0 | 27306 | 1.268940 | 1.884262 | -0.615322 | -16801.991961 | text/word | rannveigheitmannblogg | -2.353139 | …o␠hvordan␠barbere␠seg␠nedentil␠menn␠gangbang␠ski␠rannveigheitmannblogg␠lek.⏎vedio␠real␠massage␠xxx␠victoriamilan␠no␠tr… |
| paloma/m2d2_s2orc_unsplit | cs_CY_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.242476 | 0.635993 | -0.393518 | -12894.787490 | text/word | Reinnasance | -2.557481 | …,␠the␠Safevids,␠and␠the␠Mughals.␠We␠continue␠with␠the␠Reinnasance␠period,␠the␠Protestant␠Reformation,␠and␠colonization… |
| paloma/falcon-refinedweb | 0_jsonl_gz | 99 | 22544 | 0 | 22544 | 0.136271 | 0.651204 | -0.514933 | -11608.645132 | text/word | personal | -2.702497 | …␠Accident␠Lawyers␠Farragut,␠Remember␠that␠you␠ought␠to␠personal␠injury␠lawyer␠nyc␠only␠pick␠lawyers␠who␠agree␠to␠go␠to… |
| paloma/m2d2_s2orc_unsplit | physics_hist-ph_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.317734 | 0.667358 | -0.349624 | -11456.474070 | text/word | Hermansphan | -2.877085 | …ion␠must␠be␠multiples␠of␠,␠too.␠Only␠in␠recent␠years,␠Hermansphan␠et␠al.␠(2000)␠have␠shown␠that␠the␠Larmor␠precession␠… |
| paloma/m2d2_s2orc_unsplit | physics_l1_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.317734 | 0.667358 | -0.349624 | -11456.474070 | text/word | Hermansphan | -2.877085 | …ion␠must␠be␠multiples␠of␠,␠too.␠Only␠in␠recent␠years,␠Hermansphan␠et␠al.␠(2000)␠have␠shown␠that␠the␠Larmor␠precession␠… |
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
| paloma/m2d2_wikipedia_unsplit | Mathematics_and_logic_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.412529 | 0.612294 | -0.199765 | -6545.887887 | text/number | 190.58 | -3.754638 | …ollapse␠of␠the␠junk␠bond␠market␠causing␠the␠Dow␠to␠fall␠190.58␠points,␠or␠6.91␠percent.⏎Similarly,␠there␠was␠a␠panic␠i… |
| paloma/m2d2_wikipedia_unsplit | Mathematics_and_logic__Mathematics_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.412529 | 0.612294 | -0.199765 | -6545.887887 | text/number | 190.58 | -3.754638 | …ollapse␠of␠the␠junk␠bond␠market␠causing␠the␠Dow␠to␠fall␠190.58␠points,␠or␠6.91␠percent.⏎Similarly,␠there␠was␠a␠panic␠i… |
| paloma/m2d2_s2orc_unsplit | cond-mat_soft_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.511989 | 0.706949 | -0.194960 | -6388.451658 | text/word | Kronberg | -3.472698 | …eity,␠causing␠a␠decrease␠in␠the␠entropy␠of␠the␠system␠(Kronberg␠et␠al.,␠1995)␠.␠An␠entropic␠force␠acts␠to␠gather␠toget… |
| fineweb2_multilingual/fin_Latn | 0000_parquet | 98 | 13339 | 0 | 13339 | 1.184300 | 1.661844 | -0.477544 | -6369.955889 | text/word | pakkotoisto | -3.390283 | …isään␠helsinki...␠Tutvumiskeskus␠anaboliset␠steroidit␠pakkotoisto␠Vaimo␠Luvalla␠Vieraissa␠Eroottiset␠Vaatteet␠Salkkari… |
| paloma/m2d2_wikipedia_unsplit | Culture_and_the_arts__The_arts_and_Entertainment_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.574165 | 0.766882 | -0.192717 | -6314.963143 | text/word | Sukiyanen | -3.334135 | …forward␠without␠looking␠back.␠Their␠late␠2005␠single,␠"Sukiyanen,␠Osaka/Oh!␠Enka/Mugendai"␠had␠shown␠signs␠of␠the␠grou… |
| paloma/m2d2_s2orc_unsplit | physics_comp-ph_jsonl_gz | 0 | 32768 | 0 | 32768 | 0.453065 | 0.644526 | -0.191460 | -6273.772792 | text/word | min-WREE | -5.033767 | …␠is␠MSER␠(mean␠squared␠error␠rule)␠24␠and␠the␠other␠is␠min-WREE␠(minimization␠of␠weighted␠relative␠error␠of␠the␠error)… |
| paloma/m2d2_s2orc_unsplit | astro-ph_SR_jsonl_gz | 0 | 32766 | 0 | 32766 | 0.501253 | 0.689681 | -0.188429 | -6174.059184 | text/word | ARFHD | -4.659615 | …bined␠gravitocentrifugal␠force␠in␠the␠same␠manner␠as␠the␠ARFHD␠formulation␠(Section␠2.5),␠i.e.␠with␠rigid-body␠rotatio… |
| paloma/wikitext_103 | val_jsonl_gz | 21 | 27913 | 0 | 27913 | 0.500524 | 0.716078 | -0.215554 | -6016.757883 | text/punctuation | @,@ | -11.628804 | ….␠(␠The␠chronicles␠say␠that␠the␠Burmese␠army␠numbered␠400␠@,@␠000␠men␠while␠the␠Mongol␠army␠numbered␠20␠million␠men␠an… |

## Top Segments: Model A Worse

| dataset | bucket | bytes | delta_bits | gap_bpb | text | doc_preview |
| --- | --- | --- | --- | --- | --- | --- |
| raw_web_markup/common_crawl/wat | text/url | 10279 | 772.038489 | 0.075108 | http://webapi.weidaoliu.com/msg… | …tle":"瀹�寰界���虫���搴��ㄤ��藉伐瑕���","rel":"nofollow","text":"瀹�寰界���虫���搴��ㄤ��藉伐瑕���"},{"path":"A@/href","url":"/news115759… |
| raw_web_markup/common_crawl/wat | text/url | 21785 | 710.500355 | 0.032614 | https://soicaubet88.com/vn","ta… | …:"https://kqxoso2023.com/vn"},{"path":"A@/href","url":"https://kqxs-online.com/vn","target":"_blank","text":"https://k… |
| raw_web_markup/common_crawl/wat | text/url | 3980 | 613.304782 | 0.154097 | http://anooblog.com/wp-content/… | …ttp://anooblog.com/2024/12/02/%e3%80%90%e6%9c%97%e5%a0%b1%e3%80%91%e3%83%80%e3%82%a4%e3%82%a8%e3%83%83%e3%83%88%e3%80%… |
| raw_web_markup/common_crawl/wat | text/url | 6881 | 597.519953 | 0.086836 | http://0553njl.com/","text":"河北… | …ry/","text":"综合荣誉"},{"path":"A@/href","url":"/qyry/dqry/","text":"党群荣誉"},{"path":"A@/href","url":"/qyry/zlry/","text":… |
| raw_web_markup/common_crawl/wat | text/url | 6048 | 575.020232 | 0.095076 | http://0553njl.com/","text":"河北… | …ext":"信息公开"},{"path":"A@/href","url":"/xxgk/qyjbqk.html","text":"企业基本情况"},{"path":"A@/href","url":"/xxgk/zztx/","text"… |
| raw_web_markup/common_crawl/wat | text/url | 3212 | 560.602993 | 0.174534 | https://www.google-analytics.co… | …:"STYLE/#text","href":"#wp-duotone-grayscale"},{"path":"STYLE/#text","href":"#wp-duotone-purple-yellow"},{"path":"STYL… |
| gh_archive_structured_output/PullRequestEvent | text/url | 16291 | 512.444469 | 0.031456 | https://avatars.githubuserconte… | …ub.com/repos/mehrdad-ordobadi/melo-3.0/assignees{/user}","blobs_url":"https://api.github.com/repos/mehrdad-ordobadi/me… |
| raw_web_markup/common_crawl/warc | text/url | 220 | 500.689275 | 2.275860 | https://blogger.googleuserconte… | …l/AVvXsEiAHgKUhvkrvNB7krJX1Kp7EB70RIOgPtc2guSzmSAsgIZS16zil5R9YH3xMY1iG5OdnG-yXZeJxBzzLCeKsaC539_BIyzdKMDXBmwZX8bOBdPI… |
| gh_archive_structured_output/PullRequestEvent | text/url | 17311 | 497.833738 | 0.028758 | https://avatars.githubuserconte… | …mits_url":"https://api.github.com/repos/mehrdad-ordobadi/melo-3.0/commits{/sha}","compare_url":"https://api.github.com… |
| gh_archive_structured_output/PullRequestEvent | text/url | 17027 | 450.506799 | 0.026458 | https://avatars.githubuserconte… | …,"comments_url":"https://api.github.com/repos/subi9807/javaSpringMvcSample/comments{/number}","commits_url":"https://a… |
| raw_web_markup/common_crawl/wat | text/url | 12723 | 450.405495 | 0.035401 | https://lf6-cdn-tos.bytecdntp.c… | …target":"_blank","title":"未列入名册","text":"HD6.6"},{"path":"IMG@/src","url":"/template/zi/static/images/loading.gif","al… |
| gh_archive_structured_output/PullRequestEvent | text/url | 17599 | 445.265339 | 0.025301 | https://avatars.githubuserconte… | …ithub.com/users/Chaos0103/orgs","received_events_url":"https://api.github.com/users/Chaos0103/received_events","repos_… |
| fineweb2_multilingual/tha_Thai | text/non_ascii_word | 4170 | 427.915309 | 0.102618 | บาทในกรณีแบบนี้จะเห็นได้อย่างชั… | …ของการร่วมสนุกกับโปรโมชั่นพวกนั้นว่ามีขอบเขตอยู่ที่ขณะใดถ้าเกิดเราเลือกรับโปรโมชั่นตัวนั้นไปแล้วและโปรโมชั่นก็ยังไม่หม… |
| gh_archive_structured_output/PullRequestEvent | text/url | 16809 | 420.269434 | 0.025003 | https://avatars.githubuserconte… | …or_providers_tf","repo":{"allow_forking":true,"archive_url":"https://api.github.com/repos/trevorpatch73/cisco-aci-terr… |
| gh_archive_structured_output/PullRequestEvent | text/url | 15962 | 417.868983 | 0.026179 | https://avatars.githubuserconte… | …ubscriptions","type":"Organization","url":"https://api.github.com/users/usdot-jpo-ode"}},"body":null,"changed_files":1… |
| raw_web_markup/common_crawl/wat | text/url | 277 | 413.978679 | 1.494508 | http://abaragambi.com/index.php… | …m/","WARC-Protocol":"http/1.1","WARC-Payload-Digest":"sha1:EQ4ZJZCI62D2F2V6UWLRJZQEUZIRFSOV","WARC-Block-Digest":"sha1… |
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
| gh_archive_structured_output/PullRequestEvent | text/url | 14924 | 352.679595 | 0.023632 | https://avatars.githubuserconte… | …aemilia-pdx"}},"body":null,"changed_files":1,"closed_at":null,"comments":0,"comments_url":"https://api.github.com/repo… |
| gh_archive_structured_output/PullRequestEvent | text/url | 5448 | 350.839982 | 0.064398 | https://api.github.com/repos/Co… | …m/users/CodeEditorLand/received_events","repos_url":"https://api.github.com/users/CodeEditorLand/repos","site_admin":f… |
| gh_archive_structured_output/PullRequestEvent | text/url | 14922 | 346.384193 | 0.023213 | https://avatars.githubuserconte… | …-aemilia-pdx"}},"body":null,"changed_files":1,"closed_at":null,"comments":0,"comments_url":"https://api.github.com/rep… |
| raw_web_markup/common_crawl/wat | text/url | 1644 | 344.662707 | 0.209649 | http://anelpo.blogspot.com/sear… | …/search/label/%CE%99%CE%B1%CF%84%CF%81%CE%B9%CE%BA%CE%AC","text":"Ιατρικά"},{"path":"A@/href","url":"http://anelpo.blo… |
| bio_chem/rcsb/rcsb_mmcif | text/word | 80 | 339.857215 | 4.248215 | QIQLVQSGPELKKPGETVKISCKASGYTFTN… | …PASSTKVDKKIEPRG⏎;⏎;QIQLVQSGPELKKPGETVKISCKASGYTFTNYGMNWVKQAPGKGLEWMGWINTNTGEPTYGEEFKGRFAFSLETSASTAN⏎LQINNLKNEDKATFFCAR… |
| gh_archive_structured_output/PullRequestEvent | text/url | 4724 | 338.517654 | 0.071659 | https://api.github.com/repos/lo… | …api.github.com/users/lowfnm/repos","site_admin":false,"starred_url":"https://api.github.com/users/lowfnm/starred{/owne… |
| gh_archive_structured_output/PullRequestEvent | text/url | 15219 | 337.649794 | 0.022186 | https://avatars.githubuserconte… | …rue,"archive_url":"https://api.github.com/repos/Leosly7663/portfolio/{archive_format}{/ref}","archived":false,"assigne… |
| gh_archive_structured_output/PullRequestEvent | text/url | 15500 | 335.342749 | 0.021635 | https://avatars.githubuserconte… | …allow_forking":true,"archive_url":"https://api.github.com/repos/jgreen124/Micromouse-PCB/{archive_format}{/ref}","arch… |
| raw_web_markup/common_crawl/warc | text/url | 111 | 332.125732 | 2.992124 | https://aptekajakmarzenie.pl/wl… | …href="https://aptekajakmarzenie.pl/wlosy-lupiez-tlusty-c-21_28_365.html?osCsid=eshlo6o415mq6nvblpbi53n834">�upie�␠t�us… |
| gh_archive_structured_output/PullRequestEvent | text/url | 4461 | 329.454820 | 0.073852 | https://api.github.com/licenses… | …/api.github.com/repos/mkajitansnyk/gravitee-gateway/tags","teams_url":"https://api.github.com/repos/mkajitansnyk/gravi… |
| gh_archive_structured_output/PullRequestEvent | text/url | 3512 | 327.271296 | 0.093187 | https://api.github.com/licenses… | …//api.github.com/repos/NDLANO/h5p-topic-map/statuses/{sha}","subscribers_url":"https://api.github.com/repos/NDLANO/h5p… |
| gh_archive_structured_output/PullRequestEvent | text/url | 4618 | 324.205438 | 0.070205 | https://api.github.com/repos/sw… | …ger-api","node_id":"<ID>","organizations_url":"https://api.github.com/users/swagger-api/orgs","received_events_url":"h… |
| gh_archive_structured_output/PullRequestEvent | text/url | 3512 | 319.806499 | 0.091061 | https://api.github.com/licenses… | …//api.github.com/repos/NDLANO/h5p-topic-map/statuses/{sha}","subscribers_url":"https://api.github.com/repos/NDLANO/h5p… |

## Top Segments: Model B Worse

| dataset | bucket | bytes | delta_bits | gap_bpb | text | doc_preview |
| --- | --- | --- | --- | --- | --- | --- |
| raw_web_markup/common_crawl/wat | text/url | 300 | -500.984147 | -1.669947 | http://afrique-infos.com/2026/0… | …etting-sites/","WARC-Protocol":"http/1.1","WARC-Payload-Digest":"sha1:TIE7CSY7QZMWIK2DUIUTXO2Q5LBJRMVD","WARC-Block-Di… |
| raw_web_markup/common_crawl/wat | text/url | 255 | -492.874593 | -1.932842 | http://07921.cn/article/cid/12/… | …rotocol":"http/1.1","WARC-Payload-Digest":"sha1:YZYR4GUWFU4ZEIH7PK2AR3CFN2PTD6J7","WARC-Block-Digest":"sha1:YHSRWUXYUV… |
| raw_web_markup/common_crawl/wat | text/url | 298 | -488.655318 | -1.639783 | http://48.dou.spb.ru/roditelyam… | …","WARC-Protocol":"http/1.1","WARC-Payload-Digest":"sha1:QAEEZ55CUAEFSZGIRVNQVXVR65NIHFVO","WARC-Block-Digest":"sha1:7… |
| raw_web_markup/common_crawl/wat | text/url | 481 | -460.728147 | -0.957855 | https://blogger.googleuserconte… | …lyymu37ncGoTJNEkP0X9/s1600/anaphria3.jpg"},{"path":"IMG@/src","url":"https://blogger.googleusercontent.com/img/b/R29vZ… |
| raw_web_markup/common_crawl/wat | text/url | 274 | -451.257141 | -1.646924 | http://amgns54.blogspot.com/201… | …","WARC-Protocol":"http/1.1","WARC-Payload-Digest":"sha1:CAKDYO7FUTN7SR52RGQV5VLC6LTGQ6VL","WARC-Block-Digest":"sha1:E… |
| raw_web_markup/common_crawl/wat | text/url | 236 | -417.827734 | -1.770456 | http://3iio8u.xyyanglao.com/","… | …ARC-Payload-Digest":"sha1:VSOW7I4UXV4Z4GMHOLNCEMVQ7JW5ZTS7","WARC-Block-Digest":"sha1:AMLPR2S4NHF25PRAH62ZQW4XIIWQIJJ5… |
| raw_web_markup/common_crawl/wat | text/url | 4060 | -408.731013 | -0.100673 | http://anooblog.com/wp-content/… | …ts/fontawesome/css/font-awesome.min.css?ver=6.1.9&fver=20230112012741","rel":"stylesheet"},{"path":"LINK@/href","url":… |
| raw_web_markup/common_crawl/wat | text/url | 229 | -396.844249 | -1.732944 | http://168ps.com/kvpt/117579.ht… | …p/1.1","WARC-Payload-Digest":"sha1:YEIP2M244775TBI4FOHNRBTS65GUMEVP","WARC-Block-Digest":"sha1:YVCXR5H7QQ3JWSNKI2PJSB7… |
| raw_web_markup/common_crawl/wat | text/url | 230 | -393.330653 | -1.710133 | http://562snm.autos/post/1255.h… | …p/1.1","WARC-Payload-Digest":"sha1:B2BGR5TTICXACNVZHMAT7E7DNX4UFFBS","WARC-Block-Digest":"sha1:IT32EYL56LXHUQVFQXXKYKO… |
| bio_chem/rcsb/rcsb_mmcif | text/word | 80 | -351.308317 | -4.391354 | QERSAWVRAKTACEVAEISYKKFRQLIQVNP… | …SYLNQGDFIGELGLFEEG⏎QERSAWVRAKTACEVAEISYKKFRQLIQVNPDILMRLSAQMARRLQVTSEKVGNLAFLDVTGRIAQTLLNLAKQPDAMTH⏎PDGMQIKITRQEIGQIVG… |
| bio_chem/rcsb/rcsb_mmcif | text/word | 80 | -339.037197 | -4.237965 | LDFQHSNLKQMSEFSVFLSLRNLIYLDISHT… | …NGVITMSSNFLGLEQLEH⏎LDFQHSNLKQMSEFSVFLSLRNLIYLDISHTHTRVAFNGIFNGLSSLEVLKMAGNSFQENFLPDIFTELRNLTFLDLSQC⏎QLEQLSPTAFNSLSSLQV… |
| raw_web_markup/common_crawl/wat | text/url | 12442 | -330.164669 | -0.026536 | https://okhealthcareers.com/","… | …tus.com"},{"path":"A@/href","url":"https://bradfordshops.com/","text":"bradfordshops.com"},{"path":"A@/href","url":"ht… |
| bio_chem/pubchem/pubchem_sdf | text/word | 154 | -325.311582 | -2.112413 | AAADccBwMAAAAAAAAAAAAAAAAAAAAAA… | …AAAAAAAAAAAAAAAAAwAAAAAAAAAAABAAAAGgAACAAADASAmAAwDoAAAgCIAiDSCAACAAAgIAAIiAEGCIgIJjKCFRKAcAAkwBEImAeIyKCOIAAAAAAAAABA… |
| bio_chem/rcsb/rcsb_mmcif | text/word | 80 | -323.209686 | -4.040121 | QLEQLSPTAFNSLSSLQVLNMSHNNFFSLDT… | …PDIFTELRNLTFLDLSQC⏎QLEQLSPTAFNSLSSLQVLNMSHNNFFSLDTFPYKCLNSLQVLDYSLNHIMTSKKQELQHFPSSLAFLNLTQNDFACTCE⏎HQSFLQWIKDQRQLLVEV… |
| raw_web_markup/common_crawl/wat | text/url | 541 | -323.143314 | -0.597307 | http://www.dogrudesign.com/","t… | …ng-Slop-Length":"4","Block-Digest":"sha1:RECDYUIMVXC5WXBG6DUP54NT2AX66G7G"},"Format":"WARC/1.0","WARC-Header-Length":"… |
| bio_chem/pubchem/pubchem_sdf | text/word | 154 | -321.242904 | -2.085993 | AAADcYBgPAIAAAAAAAAAAAAAAAAAAAA… | …AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgAACCAACBSggAIACAAAAxAIQICQCIIAAAAAAAAAAAFAAAABEBQAAAAAQAAFIAABAABCAAAAAAAAAAAAAAAA… |
| bio_chem/rcsb/rcsb_mmcif | text/word | 80 | -317.179766 | -3.964747 | XDEDETTALVCDNGSGLVKAGFAGDDAPRAV… | …TKQEYDEAGPSIVHR⏎;⏎;XDEDETTALVCDNGSGLVKAGFAGDDAPRAVFPSIVGRPRHQGVMVGMGQKDSYVGDEAQSKRGILTLKYPIEHGIITNW⏎DDMEKIWHHTFYNELRVA… |
| fineweb2_multilingual/hun_Latn | text/url | 280 | -313.976095 | -1.121343 | https://img4.hvg.hu/image.aspx?… | …e3a-e632-4abc-b367-3d9b3bb5573b","index":0,"item":"a94c8514-6336-4358-bd11-dfbe002e7a4b","keywords":null,"link":"/vila… |
| bio_chem/pubchem/pubchem_sdf | text/word | 154 | -300.896642 | -1.953874 | AAADccBwOAAAAAAAAAAAAAAAAAAAAAA… | …AAAAAAAAAAAAAAAAAwAAAAAAAAAAABAAAAGgAACAAADASAmAAwDoAAAgCIAqDSCAICAAAgIAAIiAFGCMgIJiKCERKAcAAkwBEImYeAwCAOAAAAAAAIAAAA… |
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
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -267.781648 | -4.463027 | KQQPEEEALILFTSGSEGHPKGVVHSHKSIL… | …LEDLKADVTTADKVWIFAHLLMPRLAQV⏎KQQPEEEALILFTSGSEGHPKGVVHSHKSILANVEQIKTIADFTTNDRFMSALPLFHSFG⏎LTVGLFTPLLTGAEVFLYPSPLHYRIVP… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -267.390758 | -4.456513 | WIMGHMVNEIYQIDEFVDLGANSIETDITFD… | …mazonica␠OX=571517␠PE=2␠SV=1⏎WIMGHMVNEIYQIDEFVDLGANSIETDITFDDDAMAEYSYHGVPCGCMRWCHKWEYVNDF⏎LEGLRRATTPGDSKYRKQLILVVFDLKT… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -266.922614 | -4.448710 | VTLQSLAKWSAAKIVIYVGCGERGNEMTDEL… | …GTRVLDTIFPIAKGGTAAIPGPFGSGKT⏎VTLQSLAKWSAAKIVIYVGCGERGNEMTDELRQFPSLKDPWTGRPLLERTILVANTSNMP⏎VAAREASIYVGITMAEYFRDQGYDTLLV… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -266.577413 | -4.442957 | MKQSHFFAHLSRMKLINRWPLMRNVRTENVS… | …␠OX=423368␠GN=yfbR␠PE=3␠SV=1⏎MKQSHFFAHLSRMKLINRWPLMRNVRTENVSEHSLQVAMVAHALAAIKNRKFGGQLNAER⏎IALLAMYHDASEVLTGDLPTPVKYFNSQ… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -265.981698 | -4.433028 | MQAPPSFYEGDTLEVAKKLLGQKLVHIVDGI… | …8681␠GN=BCE33L0774␠PE=3␠SV=1⏎MQAPPSFYEGDTLEVAKKLLGQKLVHIVDGIKRSGIIVEVEAYKGPDDKAAHSYGGRRTD⏎RTEVMFGAPGHAYVYLIYGMYHCFNVIT… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -265.808623 | -4.430144 | MDFVNNDTRQIAKNLLGVKVIYQDTTQTYTG… | …␠GN=USA300HOU_2325␠PE=3␠SV=1⏎MDFVNNDTRQIAKNLLGVKVIYQDTTQTYTGYIVETEAYLGLNDRAAHGYGGKITPKVTS⏎LYKRGGTIYAHVMHTHLLINFVTKSEGI… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -265.536862 | -4.425614 | IHEARGHTDAIIINPGAFTHTSVAIRDALIG… | …DNAKALAAAKGVKLESFHSNHEGRIIDR⏎IHEARGHTDAIIINPGAFTHTSVAIRDALIGVSVPFIEVHITNVHAREEFRHHSYLSDKA⏎AACIIGLGTYGYEAAIEYAAREIISAKE… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -265.459572 | -4.424326 | VWQSDGITNCLLRGLDRVRKAVANRDSSNGY… | …DKVGYDFSGNDDIGDVANAYKKAGVTGH⏎VWQSDGITNCLLRGLDRVRKAVANRDSSNGYINKVYYWTVDKRQSTRDALDAGVDGIMTN⏎YPDVIADVLNESAYKAKFRIASYDDNPW… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -264.563014 | -4.409384 | RETPVTIYSWVAAATRYQLLKRGVISNTKIN… | …FFDTPVETAQDVHKQLKRLRRVIAWTGE⏎RETPVTIYSWVAAATRYQLLKRGVISNTKINATEEEILQGEPEVKVESAERHHAMVNFWR⏎TTLSCILGTLFWLWTGWTSGSGAMVMIA… |
| bio_chem/uniprot/uniprot_sprot_fasta | text/word | 60 | -264.285550 | -4.404759 | DSLLVAQYQLMQLCIKHGDSEEVDNAWGDLV… | …IVIGIGCAILADLLFSPRSIKQEVDREL⏎DSLLVAQYQLMQLCIKHGDSEEVDNAWGDLVRRTAALEGMRSNLNMESSRWVRANRRLKA⏎LNTLSLTLITQSCETYLIQNTRPELITD… |
| raw_web_markup/common_crawl/wat | text/url | 2409 | -262.852033 | -0.109113 | https://www.07921.cn/article/10… | …ef","url":"http://07921.cn/help/id/23.html","text":"法律声明"},{"path":"A@/href","url":"http://07921.cn/help/id/22.html","… |

## Top Literals: Model A Worse

Representative token boundaries come from the highest-gap occurrence for each literal. `|` marks token boundaries for each model; an ellipsis means the token continues outside the literal boundary in that example.

| name | bucket | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | example_dataset | example_doc_preview | model_a_token_boundaries | model_b_token_boundaries |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ␠ | whitespace/single_space | 14801857 | 14801857 | 0.759193 | 0.682480 | 0.076713 | 1135494.664781 | fineweb2_multilingual/heb_Hebr | …להמשך␠היום␠ברחובות␠הקפואים.␠היה␠טעים␠מאוד␠אך␠יקר.⏎אני␠חייבת␠3␠תודות:⏎1.␠פריז␠דרך␠הפה–␠אתר␠מעולה␠ששימש␠אותי␠במהלך␠שיטוט… | \|␠\| | \|␠\| |
| . | text/punctuation | 879945 | 879945 | 0.989313 | 0.846834 | 0.142479 | 125373.304142 | fineweb2_multilingual/heb_Hebr | …␠מהבחינה␠הזאת␠נראה␠לי␠שזבל␠זה␠אפילו␠גרוע␠יותר...␠זה␠בטוח␠לא.␠אני␠מניחה␠שאפשר␠להתקשר␠למוקד␠העירוני␠ולברר,␠אבל␠הייתי␠מעד… | \|.\| | \|.\| |
| । | text/non_ascii | 58121 | 174363 | 0.681954 | 0.254379 | 0.427576 | 74553.354038 | fineweb2_multilingual/ory_Orya | …ତ␠ଧୈର୍ଯ୍ୟ␠ଧରିବାକୁ␠କହିଛନ୍ତି।⏎ପଢନ୍ତୁ␠ଓଡ଼ିଶା␠ରିପୋର୍ଟର␠ଖବର␠ଏବେ␠ଟେଲିଗ୍ରାମ୍␠ରେ।␠ସମସ୍ତ␠ବଡ␠ଖବର␠ପାଇବା␠ପାଇଁ␠ଏଠାରେ␠କ୍ଲିକ୍␠କରନ୍ତୁ। | \|।\| | \|।\| |
| ⏎ | whitespace/newline | 956396 | 956396 | 0.823377 | 0.773079 | 0.050298 | 48104.679591 | fineweb2_multilingual/heb_Hebr | …המון␠המון␠תודה,␠האמת␠שהווטרינר␠הציע␠להביא␠אליו␠את␠צארלי␠כדי⏎שינתח␠אבל␠לא␠הייתי␠מסוגלת␠להישאר␠בבית␠כל␠הלילה␠עם␠ארנבונת␠… | \|⏎\| | \|⏎\| |
| 2 | text/number | 243472 | 243472 | 1.006011 | 0.872041 | 0.133970 | 32618.047091 | fineweb2_multilingual/zsm_Latn | …ana␠oleh␠bakteria␠tanah.⏎-␠Kekurangan␠oksigen.␠Kekurangan␠o2␠perlu␠dikeluarkan␠dengan␠bantuan␠alat␠khas␠dengan␠fungsi␠… | \|2\| | \|2\| |
| ␠␠␠ | whitespace/multi_space | 198225 | 594675 | 0.167879 | 0.121741 | 0.046138 | 27437.174306 | bio_chem/uniprot/uniprot_sprot_dat | …,␠McPherson␠D.,␠Merkulov␠G.,␠Milshina␠N.V.,␠Mobarry␠C.,⏎RA␠␠␠Morris␠J.,␠Moshrefi␠A.,␠Mount␠S.M.,␠Moy␠M.,␠Murphy␠B.,␠Mu… | \|␠␠\|␠…\| | \|␠␠\|␠…\| |
| ( | text/punctuation | 261293 | 261293 | 0.977533 | 0.878085 | 0.099447 | 25984.884122 | bio_chem/chembl/chembl_chemreps | …2)62-54-116)186(306)242-129(45-25-32-79-208)175(295)246-138(69-72-153(213)276)182(302)241-136(52-39-86-229-204(223)224… | \|(\| | \|(\| |
| 3 | text/number | 192320 | 192320 | 0.983230 | 0.856247 | 0.126984 | 24421.534406 | bio_chem/pubchem/pubchem_sdf | …␠0␠␠0␠␠0␠␠0␠␠0␠␠0⏎␠␠␠11.1972␠␠␠-2.4320␠␠␠␠0.0000␠C␠␠␠0␠␠0␠␠3␠␠0␠␠0␠␠0␠␠0␠␠0␠␠0␠␠0␠␠0␠␠0⏎␠␠␠␠7.7331␠␠␠-5.4320␠␠␠␠0.0000… | \|3\| | \|3\| |
| , | text/punctuation | 1383535 | 1383535 | 0.765236 | 0.747814 | 0.017421 | 24103.136488 | fineweb2_multilingual/heb_Hebr | …,␠מכונית,␠אקס␠בוקס,␠טיולים␠ברחבי␠העולם,␠כניסה␠לתוכניות␠ארוח,␠חייט␠פרטי,␠ציורים,␠תכשיטים,␠תיקים,␠צעיפים␠של␠הרמס␠ועוד.␠ע… | \|,\| | \|,\| |
| C | text/word | 198233 | 198233 | 0.854620 | 0.737122 | 0.117498 | 23291.962424 | synthetic_numeric_format_ppl/dense_numeric_blobs/svg_path_numeric_blobs | ….28⏎⏎User:␠complete_svg_path␠d="M␠386.50␠494.27⏎Assistant:⏎C␠462.69␠457.89,␠440.30␠481.33,␠454.36␠458.81␠L␠483.12␠412.… | \|C\| | \|C\| |
| के | text/non_ascii_word | 18964 | 113784 | 0.509899 | 0.327271 | 0.182628 | 20780.189776 | fineweb2_multilingual/hne_Deva | …े␠अऊ␠घर␠के␠समान␠ला␠टोरे␠लाग␠जाथे.”␠इहाँ␠ये␠सोचे␠के␠बात␠आय␠के,␠काय␠बिहार␠मं␠शराबबंदी␠नई␠ये?␠एनएफएचएस-4␠के␠मुताबिक␠शराबब… | \|…क\|े…\| | \|…क\|े\| |
| 4 | text/number | 161030 | 161030 | 1.006808 | 0.882804 | 0.124004 | 19968.324606 | fineweb2_multilingual/heb_Hebr | …לה␠בהחלט␠לזרז␠את␠התהליך␠ולהוביל␠לתוצאות␠מהירות␠וטובות␠בהרבה4.␠ניתן␠לכנות␠גישה␠זו␠"השאיפה␠לחרדה".␠משמעותה␠פשוטה␠אך␠לא␠א… | \|4\| | \|4\| |
| 5 | text/number | 140159 | 140159 | 1.052209 | 0.921119 | 0.131090 | 18373.383822 | fineweb2_multilingual/tel_Telu | …ో⏎-␠ధర␠అంచనా:␠రూ.␠50␠లక్షల␠నుండి␠రూ.␠60␠లక్షల␠మధ్య⏎ఆడి␠క్యూ5⏎2016లో␠జరిగిన␠ప్యారిస్␠మోటార్␠షో␠లో␠ఆడి␠నెక్ట్స్␠జనరేషన్␠… | \|5\| | \|5\| |
| ; | text/punctuation | 109201 | 109201 | 0.858844 | 0.713288 | 0.145556 | 15894.900454 | bio_chem/chembl/chembl_chemreps | …,21,23,25-26H,3-6,11-15,18-20H2,1-2H3;1-2H,(H,5,6)(H,7,8)/b;2-1+/t21-,23-,25-,26+;/m0./s1⇥SCJCAKLZCWCCCO-HTCZGZADSA-N⏎… | \|;\| | \|;\| |
| 6 | text/number | 110808 | 110808 | 1.318214 | 1.176564 | 0.141650 | 15695.903456 | bio_chem/rcsb/rcsb_mmcif | …␠?␠WATSON-CRICK␠␠␠␠␠␠␠␠␠␠␠␠?␠⏎?␠?␠⏎hydrog14␠hydrog␠?␠␠␠␠?␠A␠U␠␠␠6␠␠N3␠␠␠␠?␠?␠?␠1_555␠A␠A␠␠␠67␠N1␠?␠?␠A␠U␠␠␠6␠␠␠A␠A␠␠␠6 | \|6\| | \|6\| |
| ) | text/punctuation | 232833 | 232833 | 0.486123 | 0.428984 | 0.057140 | 13303.997981 | fineweb2_multilingual/azj_Latn | …təqdim␠edilməsi␠sözsüz␠ki,␠istifadəçilərin␠yararınadır.⏎-␠Ç)␠İdman␠oyunu␠təxirə␠salındıqda,␠həmin␠vaxt␠qalibin␠müəyyən… | \|)\| | \|)\| |
| ， | text/non_ascii | 11499 | 34497 | 0.895831 | 0.514607 | 0.381223 | 13151.057522 | fineweb2_multilingual/cmn_Hani | …持续发展科技专项，加强南海岛礁生态修复、环境保护、清洁能源利用、海水淡化等先进技术研发和转化。⏎六、打造区域传新增长极，引领带动区域协调发展⏎1、加快北京上海科技创新中心建设⏎围绕重大科技创新基地建设、重大项目联合攻关、创新政策先行先试… | \|，\| | \|，\| |
| 7 | text/number | 82204 | 82204 | 1.377357 | 1.219694 | 0.157663 | 12960.495028 | formal_methods/dimacs_cnf | …␠0⏎-516␠733␠0⏎-516␠734␠0⏎776␠-516␠0⏎776␠-517␠0⏎776␠-510␠0⏎776␠-511␠0⏎776␠-512␠0⏎516␠517␠510␠511␠512␠-776␠0⏎702␠366␠0⏎7 | \|7\| | \|7\| |
| O | text/word | 85347 | 85347 | 1.101985 | 0.962268 | 0.139717 | 11924.453359 | bio_chem/pubchem/pubchem_sdf | …R_WEIGHT>⏎179.00⏎⏎>␠<PUBCHEM_SMILES>⏎C1=C(C(=CC(=C1Cl)O)Cl)O⏎⏎>␠<PUBCHEM_CONNECTIVITY_SMILES>⏎C1=C(C(=CC(=C1Cl)O)Cl)O⏎… | \|O\| | \|O\| |
| PUBCHEM_IUPAC_OPENEYE_NAME | text/word | 846 | 21996 | 1.119854 | 0.594704 | 0.525149 | 11551.186159 | bio_chem/pubchem/pubchem_sdf | …zACH6+CKJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==⏎⏎>␠<PUBCHEM_IUPAC_OPENEYE_NAME>⏎7-[2-[3-[[4-[[[5-(6-aminopurin-9-yl)-4-hydro… | \|P\|UB\|CHE\|M\|_I\|UP\|AC\|_OPEN\|E\|YE\|_NAME\| | \|P\|UB\|CHE\|M\|_I\|UP\|AC\|_OPEN\|E\|YE\|_NAME\| |
| ? | text/punctuation | 37785 | 37785 | 1.395809 | 1.118928 | 0.276882 | 10461.969338 | fineweb2_multilingual/sin_Sinh | …්වෙන්න␠පුළුවන්.␠මෙහෙම␠වෙලාවක␠අගමැති␠තනතුරට␠පත්කරන්න␠ඕන␠කවුද?␠ඒ␠වෙනුවෙන්␠එච්චර␠ජනප්රිය␠කෙනෙක්␠පත්කරන්න␠ඕන␠කියලා␠මම␠හිතන… | \|?\| | \|?\| |
| N | text/word | 41507 | 41507 | 1.972749 | 1.721851 | 0.250898 | 10414.025401 | bio_chem/uniprot/uniprot_sprot_dat | …3-Ywhaz␠complex.⏎DR␠␠␠CORUM;␠P63101;␠-.⏎DR␠␠␠DIP;␠DIP-31894N;␠-.⏎DR␠␠␠FunCoup;␠P63101;␠3425.⏎DR␠␠␠IntAct;␠P63101;␠192.… | \|N\| | \|N\| |
| i | text/word | 202415 | 202415 | 0.534350 | 0.484358 | 0.049992 | 10119.042318 | synthetic_reasoning_ppl/clrs_style/clrs_insertion_sort | …␠4}⏎5.␠{"array":␠[-26,␠13,␠31,␠42,␠49,␠-14,␠45,␠25,␠-51],␠"i":␠5}␠->␠{"array":␠[-26,␠-14,␠13,␠31,␠42,␠49,␠45,␠25,␠-51]… | \|i\| | \|i\| |
| جي | text/non_ascii_word | 6111 | 24444 | 0.784158 | 0.373813 | 0.410345 | 10030.469630 | fineweb2_multilingual/snd_Arab | اسان␠تيزي␠سان␠فرانس␠جي␠ڏوهن␠جي␠سيريز␠۾␠جڳهن␠تي␠عادي␠ٿي␠رهيا␠آهيون:␠'قتل␠۾'!⏎هر␠قسط␠هڪ␠نئين␠'تصوير'␠۽␠گهٽ␠سڃاتل␠هنڌ␠جي␠… | \|…جي\| | \|…ج\|ي\| |
| 0 | text/number | 1539150 | 1539150 | 0.107493 | 0.101017 | 0.006476 | 9967.117532 | paloma/4chan | …mous␠08/23/18(Thu)07:33:42␠no.183205890:⏎>>183205713⏎helo␠bulgaro␠bue␠fagg␠long␠time␠no␠see⏎⏎⏎Anonymous␠08/23/18(Thu)0 | \|0\| | \|0\| |
| آهي | text/non_ascii_word | 2564 | 15384 | 0.805208 | 0.235005 | 0.570204 | 8772.015017 | fineweb2_multilingual/snd_Arab | …ي␠وڃي␠يا␠بلڪل␠ئي␠ختم␠ٿي␠وڃي؟␠هرگز␠ائين␠نه␠آهي.␠اهو␠ئي␠سبب␠آهي␠جو␠سائڻ␠زهرا␠(س)␠توحيد␠جي␠حقيقت␠کي␠اخلاص␠ڄاڻائن␠ٿيون␠۽␠ا… | \|…آ\|ه\|ي\| | \|…آ\|هي\| |
| ته | text/non_ascii_word | 1847 | 7388 | 1.481885 | 0.304811 | 1.177073 | 8696.217982 | fineweb2_multilingual/snd_Arab | …␠کان␠پوءِ␠شهر␠پهچي،␠منهنجا␠وائيسر␠ڦري␠ويا.␠شاهن␠نه␠هجي␠ها␠ته␠وڃائجي␠وڃان␠ها.␠ماڻهن␠جا␠هشام،␠ڪارين␠جا␠ڪٽڪ،␠هيڏانهن␠کان␠… | \|…ته\| | \|…ت\|ه\| |
| = | text/punctuation | 130456 | 130456 | 0.478561 | 0.412689 | 0.065872 | 8593.359582 | bio_chem/pubchem/pubchem_sdf | …HT>⏎231.20⏎⏎>␠<PUBCHEM_SMILES>⏎C(CC(C(=O)O)NC(=O)CCC(=O)O)C=O⏎⏎>␠<PUBCHEM_CONNECTIVITY_SMILES>⏎C(CC(C(=O)O)NC(=O)CCC(=… | \|=\| | \|=\| |
| 8 | text/number | 74096 | 74096 | 1.475396 | 1.360225 | 0.115171 | 8533.726788 | paloma/manosphere_meta_sep | …e␠girl␠as␠we␠used␠to␠live␠in␠the␠same␠residence.␠She's␠a␠HB8␠with␠quite␠some␠experience␠already.␠All␠the␠guys␠are␠fall… | \|8\| | \|8\| |
| ۽ | text/non_ascii | 3218 | 6436 | 1.809011 | 0.548127 | 1.260884 | 8115.047090 | fineweb2_multilingual/snd_Arab | رضوان␠گل⏎محقق،␠صحافي␠۽␠تاريخدان⏎پير␠حسام␠الدين␠راشدي⏎سنڌ␠جي␠زرخير␠مٽيءَ␠مان␠اهڙا␠آدرشي␠انسان␠پيدا␠ٿيا␠آهن،␠جن␠جي␠قابلي… | \|۽\|۽\| | \|۽\| |
| 9 | text/number | 60144 | 60144 | 1.717734 | 1.583214 | 0.134519 | 8090.534665 | synthetic_reasoning_ppl/native/dijkstra_shortest_path | …new_dist":␠5,␠"to":␠8,␠"weight":␠4},␠{"new_dist":␠2,␠"to":␠9,␠"weight":␠1}]}⏎4.␠{"distance":␠2,␠"node":␠2}␠->␠{"relaxa… | \|9\| | \|9\| |
| 0999 | text/number | 1715 | 6860 | 1.623870 | 0.536197 | 1.087673 | 7461.439737 | bio_chem/chembl/chembl_sdf | …556⏎␠␠␠␠␠RDKit␠␠␠␠␠␠␠␠␠␠2D⏎⏎␠16␠15␠␠0␠␠0␠␠1␠␠0␠␠0␠␠0␠␠0␠␠0999␠V2000⏎␠␠␠-2.4958␠␠␠-0.0125␠␠␠␠0.0000␠C␠␠␠0␠␠0␠␠0␠␠0␠␠0␠␠… | \|099\|9\| | \|0\|9\|9\|9\| |
| Branch | text/word | 11824 | 70944 | 0.348107 | 0.244213 | 0.103893 | 7370.594356 | bio_chem/moleculenet/moleculenet_clintox_smiles | …)(=O)[N-]c2ncccn2)cc1,[N][C][=C][C][=C][Branch1][P][S][=Branch1][C][=O][=Branch1][C][=O][N-1][C][=N][C][=C][C][=N][Rin… | \|Branch\| | \|Branch\| |
| [ | text/punctuation | 124393 | 124393 | 0.482413 | 0.424062 | 0.058351 | 7258.477419 | fineweb2_multilingual/slv_Latn | …ema,␠rezkalniki,␠bagri␠in␠druga␠specialna␠oprema).⏎Postopki[uredi␠\|␠uredi␠kodo]⏎Tehnološke␠postopke␠pri␠gradnji␠cest␠s… | \|[\| | \|[\| |
| PUBCHEM_EXACT_MASS | text/word | 849 | 15282 | 0.734854 | 0.261885 | 0.472969 | 7227.911684 | bio_chem/pubchem/pubchem_sdf | …UDSN-UHFFFAOYSA-N⏎⏎>␠<PUBCHEM_XLOGP3_AA>⏎-3.5⏎⏎>␠<PUBCHEM_EXACT_MASS>⏎132.089877630⏎⏎>␠<PUBCHEM_MOLECULAR_FORMULA>⏎C5H… | \|P\|UB\|CHE\|M\|_EX\|ACT\|_M\|ASS\| | \|P\|UB\|CHE\|M\|_EX\|ACT\|_M\|ASS\| |
| ␠␠ | whitespace/multi_space | 1328912 | 2657824 | 0.037151 | 0.034449 | 0.002702 | 7180.745499 | raw_web_markup/common_crawl/warc | …/font></b><br><b><font␠size="5"><font␠face="helvetica␠neue␠␠">055��:<span␠style="background-color:#f6653c␠"><span␠styl… | \|␠\|␠…\| | \|␠\|␠…\| |
| 10 | text/number | 41487 | 82974 | 0.612587 | 0.527703 | 0.084885 | 7043.232867 | synthetic_reasoning_ppl/clrs_style/clrs_insertion_sort | …␠8}⏎9.␠{"array":␠[-37,␠-35,␠-17,␠-14,␠12,␠19,␠19,␠32,␠50,␠10,␠-55],␠"i":␠9}␠->␠{"array":␠[-37,␠-35,␠-17,␠-14,␠10,␠12,␠… | \|10\| | \|1\|0\| |
| به | text/non_ascii_word | 5668 | 22672 | 0.936019 | 0.629645 | 0.306374 | 6946.122376 | fineweb2_multilingual/snd_Arab | …ولي␠ڏيڻ␠۾␠مدد␠ڪندو.␠توهان␠کي␠امريڪي␠پارٽنر␠سان␠ڳنڊڻ␠جو␠ڪم␠به␠ڪندو،␠جيڪي␠به␠مصنوعات،␠شيون␠۽␠خدمتون␠اوهان␠کي␠گھرجن␠سي␠هن… | \|…به\| | \|…به\| |
| 、 | text/non_ascii | 9887 | 29661 | 0.849489 | 0.616361 | 0.233128 | 6914.813268 | fineweb2_multilingual/cmn_Hani | …只要团结一心、苦干实干就能脱贫的思想观念。同时加大思想帮扶力度，进一步发挥自身教育优势，多渠道、多形式鼓励贫困户摆脱等、靠、要思想，鼓励村民勤奋努力，变“输血”为“造血”，通过自身努力过上幸福生活。帮扶结对工作的开展，使大垴村迅速“热闹… | \|、\| | \|、\| |
| > | text/punctuation | 104149 | 104149 | 0.542634 | 0.476525 | 0.066108 | 6885.090391 | gh_archive_structured_output/IssueCommentEvent | …odels.py\\",␠line␠230,␠in␠read_metadata_from_safetensors\\r\\n>␠␠␠␠␠assert␠metadata_len␠>␠2␠and␠json_start␠in␠(b'{\\"',␠b\\… | \|>\| | \|>\| |

## Top Literals: Model B Worse

Representative token boundaries come from the highest-gap occurrence for each literal. `|` marks token boundaries for each model; an ellipsis means the token continues outside the literal boundary in that example.

| name | bucket | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | example_dataset | example_doc_preview | model_a_token_boundaries | model_b_token_boundaries |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Step-by-step | text/word | 10753 | 129036 | 0.549908 | 2.556731 | -2.006823 | -258952.442264 | synthetic_reasoning_ppl/native/euclid_gcd_5shot_icl | …'s␠algorithm␠to␠compute␠gcd(1549,␠1260).⏎⏎Assistant:⏎Step-by-step␠solution:⏎1.␠{"x":␠1549,␠"y":␠1260}␠->␠{"x":␠1260,␠"… | \|Step\|-by\|-step\| | \|Step\|-by\|-step\| |
| � | text/non_ascii | 76984 | 230952 | 0.608053 | 0.789583 | -0.181530 | -41924.707777 | diagnostic_logs/ghalogs_issue_5093_holdout | …��AmG���t�[.���:v��Q�⇥�1N'���{'���k�⇥���9⇥���؛S`��Av�o�I�̩�⏎,�I���D&�$�?��D6�ZXn�ѡ�x7��<�⇥)��)4�t`N��P… | \|�\| | \|�\| |
| {" | text/punctuation | 509316 | 1018632 | 0.086764 | 0.124004 | -0.037241 | -37934.524191 | synthetic_numeric_format_ppl/format_transforms/format_preserving_transforms | …:id,x,y,w,h⏎R511,235.75,-100.61,80.58,16.86⏎json:⏎Assistant:⏎{"id":"R511","x":235.75,"y":-100.61,"w":80.58,"h":16.86}⏎ | \|{"\| | \|{"\| |
| �� | text/non_ascii | 33163 | 198978 | 0.481154 | 0.659171 | -0.178017 | -35421.382600 | diagnostic_logs/ghalogs_issue_5093_holdout | …�H%VOnPK{�~X�ZϷQ����t&��Sx���rʟ��\\���X�ޜ\|�z�\|�ivap��5ީ��f�벟�N�7ݶn�m���r��o-�⇥���L�'��Jh�R�qɗ���n�藺�y�\\n��… | \|��\| | \|��\| |
| 1 | text/number | 425516 | 425516 | 0.699780 | 0.759375 | -0.059596 | -25358.870302 | paloma/m2d2_wikipedia_unsplit | …ajor␠League␠Baseball␠(MLB)␠for␠the␠Philadelphia␠Phillies,␠Philadelphia␠Athletics␠(twice),␠and␠Cleveland␠Naps␠between␠1 | \|1\| | \|1\| |
| } | text/punctuation | 468525 | 468525 | 0.130329 | 0.175941 | -0.045612 | -21370.466123 | synthetic_reasoning_ppl/clrs_style/clrs_floyd_warshall | …p-by-step␠solution:⏎1.␠{"i":␠2,␠"j":␠3,␠"k":␠0,␠"old":␠null}␠->␠{"new":␠23}⏎2.␠{"i":␠3,␠"j":␠1,␠"k":␠0,␠"old":␠null}␠-… | \|}\| | \|}\| |
| solution | text/word | 11743 | 93944 | 0.124172 | 0.316062 | -0.191890 | -18026.941595 | synthetic_reasoning_ppl/native/propositional_entailment | …ls␠conclusion␠((r␠->␠q)␠->␠r).⏎Assistant:⏎Step-by-step␠solution:⏎1.␠{"assignment":␠{"p":␠false,␠"q":␠false,␠"r":␠false… | \|…solution\| | \|…solution\| |
| ⏎⏎⏎ | whitespace/multi_newline | 9357 | 28071 | 1.163255 | 1.568108 | -0.404853 | -11364.628839 | fineweb2_multilingual/kor_Hang | …알려␠준다면␠상담␠시␠많은␠도움이␠됩니다.⏎바쏘␠감사␠컬리␠아이스텀블러␠450ml⏎◀␠업종별␠추천상품␠▶⏎⏎⏎안녕하세요.␠영업␠9팀␠막내가␠소개할␠우리팀␠이번주␠추천판촉물은␠환경호르몬이␠나오지␠않는␠친환경␠제품으… | \|⏎⏎⏎\| | \|⏎⏎⏎\| |
| ��� | text/non_ascii | 13522 | 121698 | 0.473668 | 0.552376 | -0.078708 | -9578.633002 | diagnostic_logs/ghalogs_issue_5093_holdout | …k�s{:Gv�v��OW���1Ì�亢T�Q)���kf!5��ڗ9�\|C���p�6�@#�Ӗi���y���t:�a15C�2�[K⏎��YA���r��څ%��⏎R�V���#���J���K�:�… | \|���\| | \|���\| |
| ␠⏎⏎⏎ | whitespace/mixed | 1682 | 6728 | 0.875576 | 2.166174 | -1.290598 | -8683.144107 | paloma/manosphere_meta_sep | …␠you␠unironically␠⇥⇥␠Click␠to␠expand...␠Approaching␠day␠4␠⏎⏎⏎itsogrecel:⏎␠Yes␠man,␠but␠if␠we␠were␠not␠so␠ugly,␠then␠it… | \|␠⏎⏎⏎\| | \|␠⏎⏎⏎\| |
| of | text/word | 111227 | 222454 | 0.288636 | 0.325855 | -0.037219 | -8279.587587 | fineweb2_multilingual/lit_Latn | …pagalvoti,␠kaip␠pasakyti␠ir␠nepadarysite␠vadinamųjų␠„slip␠of␠the␠tongue"␠(liet.␠„liežuvio␠nuslydimo"-␠netyčinių)␠klaid… | \|…of\| | \|…of\| |
| ]} | text/punctuation | 13873 | 27746 | 0.323746 | 0.580780 | -0.257034 | -7131.665732 | synthetic_reasoning_ppl/clrs_style/clrs_mst_prim | …_weight":␠33}⏎7.␠{"num_in_mst":␠7,␠"picked_edge":␠[2,␠3,␠7]}␠->␠{"num_in_mst":␠8,␠"pushed_edges":␠1,␠"total_weight":␠4… | \|]}\| | \|]}\| |
| that | text/word | 31913 | 127652 | 0.432736 | 0.488293 | -0.055557 | -7091.954547 | paloma/falcon-refinedweb | …lthy␠Lifestyle⏎Outdoor␠Sports␠Equipment␠Peru␠IN␠Peru,␠IN␠that␠will␠answer␠all␠of␠your␠questions␠about␠Outdoor␠Sports␠E… | \|…that\| | \|…that\| |
| on | text/word | 30359 | 60718 | 0.817792 | 0.930503 | -0.112711 | -6843.616051 | fineweb2_multilingual/ron_Latn | …alizare␠macheta␠“Orasul␠de␠lapte”⏎Posted␠20␠octombrie␠2012on:⏎Astazi␠s-a␠reunit␠echipa␠participanta␠la␠concursul␠“Oras… | \|on\| | \|on\| |
| ATOM | text/word | 2163 | 8652 | 0.559955 | 1.340162 | -0.780207 | -6750.349516 | synthetic_numeric_format_ppl/dense_numeric_blobs/mmcif_coordinate_tables | …␠␠SER␠C␠␠␠32.302␠␠␠-3.430␠␠␠-5.001␠1.00␠21.50⏎Assistant:⏎ATOM␠␠␠␠␠5␠S␠␠S5␠␠␠SER␠C␠␠␠33.536␠␠␠-4.207␠␠␠-4.545␠1.00␠22.0… | \|ATOM\| | \|ATOM\| |
| ":{" | text/punctuation | 3286 | 13144 | 0.543357 | 0.960675 | -0.417318 | -5485.226575 | raw_web_markup/common_crawl/wat | …sgtype=request","HTTP-Request-Metadata":{"Request-Message":{"Method":"GET","Path":"/servlet/htmlbanner?sid=2300941&pid… | \|":{"\| | \|":{"\| |
| Gzip-Metadata | text/word | 255 | 3315 | 1.495675 | 3.070305 | -1.574630 | -5219.898560 | raw_web_markup/common_crawl/wat | …-00000.warc.gz","Compressed":true,"Offset":"836819","Gzip-Metadata":{"Deflate-Length":"440","Header-Length":"10","Foot… | \|G\|zip\|-M\|etadata\| | \|G\|zip\|-M\|etadata\| |
| to | text/word | 94066 | 188132 | 0.418509 | 0.445713 | -0.027204 | -5117.962058 | paloma/redpajama | …and␠the␠accessibility␠of␠alternative␠educational␠options.⏎to␠find␠out␠more␠about␠the␠specific␠factors␠influencing␠Calv… | \|to\| | \|to\| |
| this | text/word | 19596 | 78384 | 0.465078 | 0.524252 | -0.059175 | -4638.336039 | diagnostic_logs/logchunks_eval | …},{key:\\"onConnError\\",value:function(e){this.hasLogger()this.log(\\"transport\\",e),this.triggerChanError(),this.stateC… | \|this\| | \|this\| |
| it | text/word | 18068 | 36136 | 0.814416 | 0.940344 | -0.125928 | -4550.520669 | lm_eval/gsm8k_train | ….␠Wheel␠of␠Fortune␠is␠2*20=40␠minutes␠each.␠So␠he␠watched␠it␠for␠40*2=80␠minutes.␠So␠he␠watched␠40+80=120␠minutes␠of␠T… | \|…it\| | \|…it\| |
| Canonical | text/word | 652 | 5868 | 1.244621 | 2.008846 | -0.764225 | -4484.472970 | synthetic_reasoning_ppl/stepmath/algebra_linear_equation_3shot_icl | …=␠7⏎25.␠x␠=␠28/4␠->␠x␠=␠(7␠*␠4)␠/␠(1␠*␠4)⏎26.␠x␠=␠(7␠*␠4)␠/␠(1␠*␠4)␠->␠x␠=␠7⏎Final␠answer:␠x␠=␠7⏎Canonical␠answer:␠{7} | \|Canonical\| | \|Canonical\| |
| an | text/word | 13401 | 26802 | 1.288149 | 1.442499 | -0.154350 | -4136.882430 | fineweb2_multilingual/fra_Latn | …␠millions␠de␠smartphones␠avec␠son␠Windows␠Phone␠8␠d'ici␠1␠an.⏎Steve␠Ballmer,␠CEO␠de␠Microsoft␠et␠Stephan␠Elop,␠CEO␠de␠… | \|…an\| | \|…an\| |
| -> | text/punctuation | 262517 | 525034 | 0.047028 | 0.054843 | -0.007815 | -4103.275902 | synthetic_reasoning_ppl/stepmath/algebra_linear_equation_3shot_icl | …9.␠x␠=␠-5/5␠->␠x␠=␠(-1␠*␠5)␠/␠(1␠*␠5)⏎30.␠x␠=␠(-1␠*␠5)␠/␠(1␠*␠5)␠->␠x␠=␠-1⏎Final␠answer:␠x␠=␠-1⏎Canonical␠answer:␠{-1} | \|…->\| | \|…->\| |
| you | text/word | 15203 | 45609 | 0.392699 | 0.480497 | -0.087798 | -4004.396498 | fineweb2_multilingual/urd_Arab | …وگی۔⏎COM␠+␠کیا␠ہے؟⏎dllhost.exe␠کیا␠کرتا␠ہے␠کو␠سمجھنے␠کے␠ل␠you␠،␠آپ␠کو␠سمجھنے␠کی␠ضرورت␠ہے␠کہ␠COM␠+␠سروس␠کیا␠ہے۔␠اجزاء␠آ… | \|…you\| | \|…you\| |
| CHEMBL | text/word | 3923 | 23538 | 0.569711 | 0.738314 | -0.168603 | -3968.577771 | bio_chem/chembl/chembl_sdf | …␠0⏎␠15␠16␠␠1␠␠0⏎M␠␠END⏎>␠<chembl_id>⏎CHEMBL441948⏎⏎$$$$⏎CHEMBL442894⏎␠␠␠␠␠RDKit␠␠␠␠␠␠␠␠␠␠2D⏎⏎␠20␠22␠␠0␠␠0␠␠0␠␠0␠␠0␠␠0␠… | \|CHE\|MB\|L\| | \|CHE\|MB\|L\| |
| will | text/word | 9225 | 36900 | 0.457710 | 0.559812 | -0.102103 | -3767.590835 | paloma/m2d2_s2orc_unsplit | …rips␠are␠parralel,␠the␠sharing␠of␠induced␠charge␠between␠will␠be␠constant,␠and␠will␠not␠depend␠on␠the␠position␠along␠t… | \|…will\| | \|…will\| |
| result | text/word | 7691 | 46146 | 0.259075 | 0.339285 | -0.080211 | -3701.405084 | synthetic_reasoning_ppl/native/binary_search | …hi":␠11,␠"lo":␠0,␠"mid":␠5}␠->␠{"hi":␠11,␠"new_lo":␠6,␠"result":␠"search_right"}⏎2.␠{"arr[mid]":␠44,␠"hi":␠11,␠"lo":␠6… | \|result\| | \|result\| |
| Content-Length | text/word | 899 | 12586 | 0.250502 | 0.542301 | -0.291799 | -3672.586694 | raw_web_markup/common_crawl/warc | …ID:␠<urn:uuid:5010ddbc-5cb0-4bef-9781-3ffbace45828>⏎Content-Length:␠73032⏎Content-Type:␠application/http;␠msgtype=resp… | \|Content\|-Length\| | \|Content\|-Length\| |
| svg | text/word | 2859 | 8577 | 1.381373 | 1.781564 | -0.400191 | -3432.435799 | long_tail_ppl_runnable/web_markup_image_text/svg_stack_test | …75,88.45833333333333L75.0234375,92.625"␠id="edge0"␠class="relation"␠marker-start="url(#dependencyStart)"></path></svg> | \|svg\| | \|svg\| |
| }]} | text/punctuation | 2019 | 6057 | 0.629257 | 1.183428 | -0.554171 | -3356.611914 | synthetic_reasoning_ppl/native/dijkstra_shortest_path | …␠->␠{"relaxations":␠[{"new_dist":␠12,␠"to":␠3,␠"weight":␠8}]}⏎4.␠{"distance":␠5,␠"node":␠1}␠->␠{"relaxations":␠[{"new_… | \|}\|]}…\| | \|}\|]}…\| |
| PUBCHEM_SMILES | text/word | 849 | 11886 | 0.327832 | 0.609829 | -0.281997 | -3351.815663 | bio_chem/pubchem/pubchem_sdf | …LA>⏎C2H5NO3⏎⏎>␠<PUBCHEM_MOLECULAR_WEIGHT>⏎91.07⏎⏎>␠<PUBCHEM_SMILES>⏎C(C(=O)O)ON⏎⏎>␠<PUBCHEM_CONNECTIVITY_SMILES>⏎C(C(=… | \|P\|UB\|CHE\|M\|_SM\|ILES\| | \|P\|UB\|CHE\|M\|_SM\|ILES\| |
| "} | text/punctuation | 14173 | 28346 | 0.144855 | 0.260899 | -0.116044 | -3289.382047 | paloma/dolma_100_programing_languages | …مپیریل␠نظام"}⏎␠␠␠␠␠␠␠␠␠␠␠␠ussystem{"پیمائش␠کا␠برطانوی␠نظام"}⏎␠␠␠␠␠␠␠␠}⏎␠␠␠␠␠␠␠␠numbers{⏎␠␠␠␠␠␠␠␠␠␠␠␠arab{"عربی␠ہندی␠ہن… | \|"}…\| | \|"}…\| |
| image_id | text/word | 775 | 6200 | 1.762071 | 2.287478 | -0.525407 | -3257.522195 | raw_web_markup/ocr_vqa/book_metadata_validation | …rry␠PhD␠␠RN␠␠PNP-BC␠␠FAAN",␠"genre":␠"Medical␠Books",␠"image_id":␠"032305353X",␠"image_url":␠"http://ecx.images-amazon… | \|image\|_id\| | \|image\|_id\| |
| his | text/word | 9165 | 27495 | 0.529640 | 0.646568 | -0.116928 | -3214.933370 | paloma/dolma-v1_5 | …4␠exam␠real␠exam␠questions␠and␠answers␠file␠is␠awesome␠in␠his␠results.⏎The␠questions␠and␠answers␠I␠purchased␠for␠the␠A… | \|…his\| | \|…his\| |
| WARC-Header-Length | text/word | 208 | 3744 | 0.492451 | 1.338129 | -0.845678 | -3166.218092 | raw_web_markup/common_crawl/wat | …RQNBH5IQY3WNFGJO67ZLEKXVAE"},"Format":"WARC/1.0","WARC-Header-Length":"445","WARC-Header-Metadata":{"WARC-Type":"reque… | \|WAR\|C\|-\|Header\|-Length\| | \|WAR\|C\|-\|Header\|-Length\| |
| ���� | text/non_ascii | 5409 | 64908 | 0.397996 | 0.446103 | -0.048108 | -3122.566944 | diagnostic_logs/ghalogs_issue_5093_holdout | …��RԞkj�:��$��{w2uIj�Fs/u'5������n..A��X/A�I�%�C�>�n�-Im����RԜ�NM/u'����_{�;⇥�$�vĘw3fIj��Q��RԂ�睜X�Zz��$X�:����d���… | \|����\| | \|����\| |
| expected | text/word | 980 | 7840 | 0.412070 | 0.808399 | -0.396329 | -3107.219160 | synthetic_machine_records_ppl/trace_errors/compiler_errors | …heduler.rs:30:44⏎␠␠␠\|⏎30␠\|␠␠␠␠␠return␠payload;⏎␠␠␠\|␠␠␠␠␠␠␠␠␠␠␠␠^^^^^␠expected␠`Result<Job,␠Error>`,␠found␠`Option<_>`⏎ | \|…expected\| | \|…expected\| |
| şi | text/non_ascii_word | 951 | 2853 | 0.828680 | 1.913490 | -1.084810 | -3094.963422 | fineweb2_multilingual/ron_Latn | …ne␠afectează␠sănătatea␠aici:␠Viață␠sănătoasă␠partea␠1.␠Ah␠şi␠dacă␠vă␠interesează␠mâncarea␠de␠calitate,␠citiţi␠şi␠asta:… | \|…şi\| | \|…şi\| |
| sex | text/word | 1411 | 4233 | 0.966070 | 1.689061 | -0.722991 | -3060.419894 | fineweb2_multilingual/nob_Latn | …ts␠oslo␠Free␠Cam␠Girls␠Eskorte␠Damer␠Oslo...␠bangali␠ekte␠sex␠live␠chat␠api␠gratis⏎Eskorte␠kristiansund␠escort␠service… | \|…sex\| | \|…sex\| |
| ], | text/punctuation | 65787 | 131574 | 0.115658 | 0.138476 | -0.022818 | -3002.206583 | synthetic_reasoning_ppl/clrs_style/clrs_insertion_sort | …9,␠-3,␠19,␠-38],␠"i":␠5}␠->␠{"array":␠[-39,␠-38,␠-29,␠-19,␠-3,␠19],␠"i":␠5}⏎Final␠answer:␠[-39,␠-38,␠-29,␠-19,␠-3,␠19] | \|],\| | \|],\| |
