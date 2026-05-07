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
| fineweb2_multilingual/ell_Grek | 256 | 1429507 | 0.726443 | 0.525514 | 0.200929 | 287229.459275 |
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
| fineweb2_multilingual/ces_Latn | 256 | 766984 | 1.194045 | 1.002076 | 0.191970 | 147237.675575 |
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
| fineweb2_multilingual/por_Latn | 256 | 707637 | 0.901293 | 0.807346 | 0.093947 | 66480.126861 |
| long_tail_ppl_runnable/web_markup_image_text/svg_stack_test | 256 | 593175 | 0.875796 | 0.770387 | 0.105410 | 62526.515198 |
| raw_web_markup/svg_stack/svg_xml_test | 256 | 593175 | 0.875796 | 0.770387 | 0.105410 | 62526.515198 |
| fineweb2_multilingual/gom_Deva | 56 | 437688 | 0.908832 | 0.781717 | 0.127115 | 55636.635326 |
| paloma/c4_en | 256 | 523373 | 0.664946 | 0.769540 | -0.104594 | -54741.834180 |
| long_tail_ppl_runnable/web_markup_image_text/svg_stack_val | 256 | 530695 | 0.843309 | 0.744951 | 0.098358 | 52198.311219 |
| raw_web_markup/svg_stack/svg_xml_val | 256 | 530695 | 0.843309 | 0.744951 | 0.098358 | 52198.311219 |
| uncheatable_eval/wikipedia_english | 256 | 635606 | 0.604842 | 0.682241 | -0.077399 | -49195.211169 |
| lm_eval/gsm8k_train | 256 | 612259 | 0.234144 | 0.155065 | 0.079079 | 48416.597641 |
| bio_chem/moleculenet/moleculenet_clintox_smiles | 96 | 410728 | 0.604674 | 0.490532 | 0.114142 | 46881.148331 |
| uncheatable_eval/github_python | 256 | 1006410 | 0.322999 | 0.278618 | 0.044380 | 44664.764972 |
| uncheatable_eval/github_cpp | 256 | 876685 | 0.309825 | 0.259151 | 0.050674 | 44425.338364 |
| gh_archive_structured_output/IssuesEvent | 256 | 1078449 | 0.341149 | 0.301115 | 0.040033 | 43174.066638 |
| bio_chem/pubchem/pubchem_cid_smiles | 66 | 269899 | 0.983154 | 0.828126 | 0.155027 | 41841.706587 |
| gh_archive_structured_output/IssueCommentEvent | 256 | 2681436 | 0.312819 | 0.298661 | 0.014157 | 37962.228116 |
| fineweb2_multilingual/sat_Olck | 21 | 138147 | 1.244198 | 0.993130 | 0.251068 | 34684.301113 |
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
| diagnostic_logs/loghub_eval | 16 | 524288 | 0.304153 | 0.328166 | -0.024013 | -12589.545018 |
| raw_web_markup/ocr_vqa/ocr_info_json_validation | 256 | 624497 | 0.474290 | 0.455617 | 0.018673 | 11661.077762 |
| game_music/irishman_abc | 256 | 72959 | 1.550430 | 1.698809 | -0.148379 | -10825.567651 |
| raw_web_markup/ocr_vqa/book_metadata_validation | 256 | 65840 | 0.975842 | 1.129675 | -0.153833 | -10128.344280 |
| raw_web_markup/textocr/ocr_strings | 256 | 53066 | 1.638403 | 1.822791 | -0.184387 | -9784.697550 |
| fineweb2_multilingual/mni_Beng | 27 | 318380 | 0.958258 | 0.930500 | 0.027759 | 8837.810103 |
| formal_methods/coqgym | 256 | 908699 | 0.446431 | 0.437690 | 0.008741 | 7943.145916 |
| paloma/gab | 256 | 37599 | 1.236561 | 1.431234 | -0.194673 | -7319.510699 |
| paloma/dolma_100_programing_languages | 256 | 898445 | 0.394032 | 0.386089 | 0.007943 | 7136.169918 |
| raw_web_markup/ocr_vqa/ocr_tokens_validation | 256 | 33378 | 2.380641 | 2.555775 | -0.175134 | -5845.607821 |
| raw_web_markup/ocr_vqa/question_context_validation | 256 | 86943 | 0.713525 | 0.780517 | -0.066991 | -5824.441799 |
| asr_ocr_noisy_ppl/hypr_librispeech_without_lm_test_clean/clean | 256 | 31537 | 1.106237 | 1.287005 | -0.180767 | -5700.857843 |
| fineweb2_multilingual/mag_Deva | 3 | 37283 | 0.895191 | 0.744806 | 0.150385 | 5606.796958 |
| asr_ocr_noisy_ppl/hypr_librispeech_without_lm_test_clean/noisy | 256 | 31506 | 1.160552 | 1.337944 | -0.177393 | -5588.928345 |
| fineweb2_multilingual/bpy_Beng | 18 | 64273 | 0.979572 | 0.894206 | 0.085366 | 5486.748377 |
| bio_chem/moleculenet/moleculenet_esol_smiles | 9 | 34415 | 1.505976 | 1.348712 | 0.157263 | 5412.215588 |
| fineweb2_multilingual/tcy_Knda | 4 | 56618 | 1.015110 | 0.930622 | 0.084488 | 4783.524787 |
| formal_methods/dimacs_cnf | 13 | 425984 | 0.239466 | 0.228659 | 0.010807 | 4603.715067 |
| fineweb2_multilingual/snd_Deva | 6 | 42729 | 0.931635 | 0.829264 | 0.102371 | 4374.202967 |
| paloma/twitterAAE_HELM_fixed | 256 | 9649 | 2.233505 | 2.659092 | -0.425587 | -4106.489021 |
| hardware_rtl/verilog_eval | 256 | 464820 | 0.686978 | 0.695445 | -0.008467 | -3935.807786 |
| fineweb2_multilingual/skr_Arab | 2 | 11653 | 1.519046 | 1.193100 | 0.325946 | 3798.248820 |
| bio_chem/rnacentral/rnacentral_active_fasta | 256 | 2545459 | 1.649496 | 1.650945 | -0.001448 | -3686.992943 |
| fineweb2_multilingual/rav_Deva | 3 | 28660 | 0.969207 | 0.848487 | 0.120720 | 3459.845305 |
| paloma/ptb | 1 | 32768 | 0.713748 | 0.819122 | -0.105374 | -3452.880943 |
| fineweb2_multilingual/suz_Deva | 4 | 34828 | 0.931690 | 0.837599 | 0.094092 | 3277.026045 |
| fineweb2_multilingual/thl_Deva | 2 | 41972 | 1.086709 | 1.009768 | 0.076940 | 3229.340508 |
| raw_web_markup/textocr/annotations_json | 256 | 1127491 | 1.061190 | 1.063709 | -0.002519 | -2840.550790 |
| long_tail_ppl_runnable/formal_hardware/verilogeval_prompt | 156 | 14070 | 0.950770 | 0.779703 | 0.171067 | 2406.906016 |
| asr_ocr_noisy_ppl/rtm_sgt_ocr_v1_train/clean | 256 | 38288 | 0.988037 | 1.049982 | -0.061945 | -2371.750090 |
| asr_ocr_noisy_ppl/rtm_sgt_ocr_v1_train/noisy | 256 | 35909 | 1.427266 | 1.491647 | -0.064380 | -2311.838760 |
| long_tail_ppl_runnable/formal_hardware/verilogeval_canonical_solution | 156 | 35043 | 0.703083 | 0.641029 | 0.062054 | 2174.557936 |
| fineweb2_multilingual/kle_Deva | 1 | 32767 | 0.998517 | 0.934734 | 0.063783 | 2089.964809 |
| structured_text/web_data_commons_sample1k | 256 | 208388 | 0.786046 | 0.795729 | -0.009683 | -2017.867915 |
| package_metadata/npm_registry_metadata | 20 | 50370 | 1.058405 | 1.020670 | 0.037735 | 1900.709308 |
| fineweb2_multilingual/taj_Deva | 3 | 41558 | 0.860497 | 0.815357 | 0.045140 | 1875.923289 |
| fineweb2_multilingual/doi_Deva | 10 | 18298 | 1.167289 | 1.075654 | 0.091635 | 1676.737685 |
| fineweb2_multilingual/lif_Deva | 1 | 22920 | 0.824854 | 0.761292 | 0.063561 | 1456.826096 |
| fineweb2_multilingual/grt_Beng | 2 | 17981 | 0.946948 | 0.869037 | 0.077911 | 1400.917958 |
| fineweb2_multilingual/nob_Latn | 256 | 683953 | 1.124413 | 1.125935 | -0.001522 | -1040.792968 |
| fineweb2_multilingual/xsr_Deva | 2 | 13413 | 0.871106 | 0.794075 | 0.077031 | 1033.214553 |
| fineweb2_multilingual/mup_Deva | 2 | 11054 | 0.990588 | 0.919824 | 0.070764 | 782.220209 |
| fineweb2_multilingual/mni_Mtei | 2 | 4462 | 1.194957 | 1.314084 | -0.119127 | -531.544774 |
| formal_methods/smt_lib | 12 | 55068 | 0.288918 | 0.279408 | 0.009510 | 523.699218 |
| fineweb2_multilingual/kas_Arab | 4 | 10820 | 1.612273 | 1.587837 | 0.024436 | 264.398206 |
| structured_text/web_data_commons_sample10 | 12 | 145111 | 0.384266 | 0.385038 | -0.000772 | -112.046445 |
| fineweb2_multilingual/kas_Deva | 1 | 1737 | 1.173543 | 1.128250 | 0.045292 | 78.672849 |
| fineweb2_multilingual/sck_Deva | 1 | 1603 | 0.916714 | 0.867922 | 0.048793 | 78.214902 |
| game_music/lichess_pgn_2013_01 | 256 | 188042 | 0.859080 | 0.859320 | -0.000240 | -45.050905 |

## Dataset Groups

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| fineweb2_multilingual | 16387 | 77634652 | 0.883913 | 0.700281 | 0.183632 | 14256177.632198 |
| fineweb2_multilingual/language | 16387 | 77634652 | 0.883913 | 0.700281 | 0.183632 | 14256177.632198 |
| fineweb2_multilingual/script | 16387 | 77634652 | 0.883913 | 0.700281 | 0.183632 | 14256177.632198 |
| fineweb2_multilingual/top_50_by_rows | 12800 | 55024224 | 0.907187 | 0.716068 | 0.191119 | 10516169.114850 |
| fineweb2_multilingual/indic | 5379 | 34494975 | 0.744869 | 0.588612 | 0.156256 | 5390050.007779 |
| fineweb2_multilingual/script/Latn | 7168 | 23033963 | 1.142562 | 0.944765 | 0.197796 | 4556029.236012 |
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
| epic:5005 | 2848 | 13929327 | 0.369033 | 0.344298 | 0.024735 | 344538.997667 |
| fineweb2_multilingual/language/hun | 256 | 1007373 | 1.294781 | 0.955621 | 0.339160 | 341660.723941 |
| fineweb2_multilingual/language/sin | 256 | 1993722 | 0.852659 | 0.682062 | 0.170598 | 340124.121750 |
| fineweb2_multilingual/script/Sinh | 256 | 1993722 | 0.852659 | 0.682062 | 0.170598 | 340124.121750 |
| fineweb2_multilingual/language/lvs | 256 | 733076 | 1.436577 | 0.975059 | 0.461518 | 338328.057067 |
| fineweb2_multilingual/language/hrv | 256 | 1395834 | 1.263019 | 1.022096 | 0.240923 | 336288.529910 |
| bio_chem/pubchem | 322 | 4946475 | 0.500647 | 0.435559 | 0.065088 | 321958.208256 |
| fineweb2_multilingual/language/arb | 256 | 1286134 | 0.856587 | 0.607364 | 0.249223 | 320534.180011 |
| fineweb2_multilingual/language/tel | 256 | 1880846 | 0.611514 | 0.454532 | 0.156981 | 295257.587489 |
| fineweb2_multilingual/script/Telu | 256 | 1880846 | 0.611514 | 0.454532 | 0.156981 | 295257.587489 |
| fineweb2_multilingual/language/ell | 256 | 1429507 | 0.726443 | 0.525514 | 0.200929 | 287229.459275 |
| fineweb2_multilingual/script/Grek | 256 | 1429507 | 0.726443 | 0.525514 | 0.200929 | 287229.459275 |
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
| fineweb2_multilingual/language/bos | 256 | 746428 | 1.276610 | 1.035160 | 0.241450 | 180224.715063 |
| fineweb2_multilingual/language/slk | 256 | 669166 | 1.239395 | 0.970234 | 0.269161 | 180113.507037 |
| fineweb2_multilingual/language/pan | 256 | 1513842 | 0.618509 | 0.503127 | 0.115382 | 174670.726458 |
| fineweb2_multilingual/script/Guru | 256 | 1513842 | 0.618509 | 0.503127 | 0.115382 | 174670.726458 |
| fineweb2_multilingual/language/ory | 256 | 1132886 | 0.619812 | 0.479209 | 0.140604 | 159288.082679 |
| fineweb2_multilingual/script/Orya | 256 | 1132886 | 0.619812 | 0.479209 | 0.140604 | 159288.082679 |
| fineweb2_multilingual/language/bho | 199 | 991636 | 0.859856 | 0.706632 | 0.153224 | 151942.646250 |
| fineweb2_multilingual/language/ces | 256 | 766984 | 1.194045 | 1.002076 | 0.191970 | 147237.675575 |
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
| long_tail_ppl_runnable/web_markup_image_text | 512 | 1123870 | 0.860456 | 0.758376 | 0.102080 | 114724.826417 |
| raw_web_markup/svg_stack | 512 | 1123870 | 0.860456 | 0.758376 | 0.102080 | 114724.826417 |
| source:svg_stack | 512 | 1123870 | 0.860456 | 0.758376 | 0.102080 | 114724.826417 |
| surface:svg_xml | 512 | 1123870 | 0.860456 | 0.758376 | 0.102080 | 114724.826417 |
| web_markup_image_text | 512 | 1123870 | 0.860456 | 0.758376 | 0.102080 | 114724.826417 |
| long_tail_ppl | 1336 | 1433984 | 0.892421 | 0.816802 | 0.075618 | 108435.671814 |
| split:val | 512 | 1061390 | 0.843309 | 0.744951 | 0.098358 | 104396.622438 |
| fineweb2_multilingual/language/glg | 256 | 636799 | 1.083537 | 0.926483 | 0.157053 | 100011.497643 |
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
| fineweb2_multilingual/language/por | 256 | 707637 | 0.901293 | 0.807346 | 0.093947 | 66480.126861 |
| fineweb2_multilingual/language/gom | 56 | 437688 | 0.908832 | 0.781717 | 0.127115 | 55636.635326 |
| bio_chem/moleculenet | 105 | 445143 | 0.674355 | 0.556880 | 0.117475 | 52293.363919 |
| issue:5053 | 256 | 612259 | 0.234144 | 0.155065 | 0.079079 | 48416.597641 |
| lm_eval | 256 | 612259 | 0.234144 | 0.155065 | 0.079079 | 48416.597641 |
| lm_eval_bridge | 256 | 612259 | 0.234144 | 0.155065 | 0.079079 | 48416.597641 |
| event_type:IssuesEvent | 256 | 1078449 | 0.341149 | 0.301115 | 0.040033 | 43174.066638 |
| formal_methods | 537 | 2984831 | 0.273359 | 0.259251 | 0.014108 | 42108.635784 |
| issue:5060 | 793 | 3449651 | 0.329091 | 0.318026 | 0.011066 | 38172.827999 |
| event_type:IssueCommentEvent | 256 | 2681436 | 0.312819 | 0.298661 | 0.014157 | 37962.228116 |
| fineweb2_multilingual/language/sat | 21 | 138147 | 1.244198 | 0.993130 | 0.251068 | 34684.301113 |
| fineweb2_multilingual/script/Olck | 21 | 138147 | 1.244198 | 0.993130 | 0.251068 | 34684.301113 |
| fineweb2_multilingual/language/deu | 256 | 681226 | 0.853170 | 0.808931 | 0.044239 | 30137.026508 |
| fineweb2_multilingual/language/dan | 256 | 665640 | 1.050900 | 1.007955 | 0.042945 | 28586.231765 |
| fineweb2_multilingual/language/nld | 256 | 600203 | 0.958173 | 0.912385 | 0.045788 | 27482.020884 |
| fineweb2_multilingual/language/anp | 60 | 307339 | 0.458620 | 0.379214 | 0.079406 | 24404.489901 |
| binary_network_security | 256 | 127072 | 1.900269 | 1.716878 | 0.183391 | 23303.920923 |
| issue:5057 | 256 | 127072 | 1.900269 | 1.716878 | 0.183391 | 23303.920923 |
| fineweb2_multilingual/language/swe | 256 | 557706 | 1.035646 | 0.994432 | 0.041214 | 22985.392239 |
| event_type:PushEvent | 256 | 238527 | 0.706446 | 0.617041 | 0.089404 | 21325.382389 |
| fineweb2_multilingual/language/awa | 23 | 133480 | 0.904609 | 0.748948 | 0.155661 | 20777.674479 |
| surface:wat | 256 | 1416856 | 0.633899 | 0.621124 | 0.012774 | 18099.381656 |
| fineweb2_multilingual/language/brx | 38 | 138432 | 1.091018 | 0.961927 | 0.129090 | 17870.241429 |
| fineweb2_multilingual/language/fra | 256 | 826860 | 0.742411 | 0.721969 | 0.020442 | 16902.921300 |
| fineweb2_multilingual/language/fin | 256 | 874277 | 1.091812 | 1.110586 | -0.018774 | -16413.673558 |
| source:logchunks | 256 | 422514 | 0.380277 | 0.341894 | 0.038383 | 16217.458726 |
| asr_ocr_noisy_ppl | 1024 | 137240 | 1.169728 | 1.286118 | -0.116390 | -15973.375037 |
| raw_web_markup/textocr | 512 | 1180557 | 1.087135 | 1.097830 | -0.010694 | -12625.248341 |
| source:textocr | 512 | 1180557 | 1.087135 | 1.097830 | -0.010694 | -12625.248341 |
| split:TextOCR | 512 | 1180557 | 1.087135 | 1.097830 | -0.010694 | -12625.248341 |
| source:loghub | 16 | 524288 | 0.304153 | 0.328166 | -0.024013 | -12589.545018 |
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
| fineweb2_multilingual/language/mni | 29 | 322842 | 0.961530 | 0.935801 | 0.025729 | 8306.265329 |
| variant:clean | 512 | 69825 | 1.041423 | 1.157035 | -0.115612 | -8072.607932 |
| variant:noisy | 512 | 67415 | 1.302619 | 1.419815 | -0.117196 | -7900.767105 |
| surface:ocr_tokens | 256 | 33378 | 2.380641 | 2.555775 | -0.175134 | -5845.607821 |
| surface:question_context | 256 | 86943 | 0.713525 | 0.780517 | -0.066991 | -5824.441799 |
| fineweb2_multilingual/language/mag | 3 | 37283 | 0.895191 | 0.744806 | 0.150385 | 5606.796958 |
| fineweb2_multilingual/language/bpy | 18 | 64273 | 0.979572 | 0.894206 | 0.085366 | 5486.748377 |
| fineweb2_multilingual/language/tcy | 4 | 56618 | 1.015110 | 0.930622 | 0.084488 | 4783.524787 |
| asr_ocr_noisy_ppl/rtm_sgt_ocr_v1_train | 512 | 74197 | 1.200610 | 1.263734 | -0.063124 | -4683.588849 |
| family:ocr | 512 | 74197 | 1.200610 | 1.263734 | -0.063124 | -4683.588849 |
| source:rtm_sgt_ocr_v1_train | 512 | 74197 | 1.200610 | 1.263734 | -0.063124 | -4683.588849 |
| formal_hardware | 312 | 49113 | 0.774041 | 0.680757 | 0.093284 | 4581.463952 |
| long_tail_ppl_runnable/formal_hardware | 312 | 49113 | 0.774041 | 0.680757 | 0.093284 | 4581.463952 |
| hardware_rtl | 256 | 464820 | 0.686978 | 0.695445 | -0.008467 | -3935.807786 |
| fineweb2_multilingual/language/skr | 2 | 11653 | 1.519046 | 1.193100 | 0.325946 | 3798.248820 |
| bio_chem/rnacentral | 256 | 2545459 | 1.649496 | 1.650945 | -0.001448 | -3686.992943 |
| split:eval_only | 272 | 946802 | 0.338124 | 0.334292 | 0.003832 | 3627.913708 |
| fineweb2_multilingual/language/rav | 3 | 28660 | 0.969207 | 0.848487 | 0.120720 | 3459.845305 |
| fineweb2_multilingual/language/suz | 4 | 34828 | 0.931690 | 0.837599 | 0.094092 | 3277.026045 |
| fineweb2_multilingual/language/thl | 2 | 41972 | 1.086709 | 1.009768 | 0.076940 | 3229.340508 |
| surface:annotations_json | 256 | 1127491 | 1.061190 | 1.063709 | -0.002519 | -2840.550790 |
| issue:5059 | 268 | 353499 | 0.621115 | 0.627141 | -0.006025 | -2129.914360 |
| structured_text | 268 | 353499 | 0.621115 | 0.627141 | -0.006025 | -2129.914360 |
| fineweb2_multilingual/language/kle | 1 | 32767 | 0.998517 | 0.934734 | 0.063783 | 2089.964809 |
| web_data_commons_sample1k | 256 | 208388 | 0.786046 | 0.795729 | -0.009683 | -2017.867915 |
| issue:5061 | 20 | 50370 | 1.058405 | 1.020670 | 0.037735 | 1900.709308 |
| package_metadata | 20 | 50370 | 1.058405 | 1.020670 | 0.037735 | 1900.709308 |
| fineweb2_multilingual/language/taj | 3 | 41558 | 0.860497 | 0.815357 | 0.045140 | 1875.923289 |
| fineweb2_multilingual/language/doi | 10 | 18298 | 1.167289 | 1.075654 | 0.091635 | 1676.737685 |
| fineweb2_multilingual/language/lif | 1 | 22920 | 0.824854 | 0.761292 | 0.063561 | 1456.826096 |
| fineweb2_multilingual/language/grt | 2 | 17981 | 0.946948 | 0.869037 | 0.077911 | 1400.917958 |
| fineweb2_multilingual/language/nob | 256 | 683953 | 1.124413 | 1.125935 | -0.001522 | -1040.792968 |
| fineweb2_multilingual/language/xsr | 2 | 13413 | 0.871106 | 0.794075 | 0.077031 | 1033.214553 |
| fineweb2_multilingual/language/mup | 2 | 11054 | 0.990588 | 0.919824 | 0.070764 | 782.220209 |
| fineweb2_multilingual/script/Mtei | 2 | 4462 | 1.194957 | 1.314084 | -0.119127 | -531.544774 |
| fineweb2_multilingual/language/kas | 5 | 12557 | 1.551584 | 1.524263 | 0.027321 | 343.071055 |
| web_data_commons_sample10 | 12 | 145111 | 0.384266 | 0.385038 | -0.000772 | -112.046445 |
| fineweb2_multilingual/language/sck | 1 | 1603 | 0.916714 | 0.867922 | 0.048793 | 78.214902 |
| source:lichess | 256 | 188042 | 0.859080 | 0.859320 | -0.000240 | -45.050905 |
| surface:pgn | 256 | 188042 | 0.859080 | 0.859320 | -0.000240 | -45.050905 |

## Pattern Buckets

| name | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits |
| --- | --- | --- | --- | --- | --- | --- |
| text/non_ascii_word | 4442764 | 56542033 | 0.785907 | 0.603754 | 0.182153 | 10299301.659802 |
| text/word | 8789113 | 48725109 | 0.956270 | 0.923432 | 0.032838 | 1600024.244585 |
| whitespace/single_space | 11994578 | 11994578 | 0.943777 | 0.843215 | 0.100561 | 1206189.326029 |
| text/number | 3443254 | 9192762 | 1.124744 | 1.019847 | 0.104896 | 964284.974594 |
| text/punctuation | 4098222 | 5514436 | 0.842356 | 0.775529 | 0.066827 | 368513.536008 |
| text/url | 24942 | 8440374 | 0.233490 | 0.205840 | 0.027650 | 233374.621904 |
| text/non_ascii | 579134 | 3419828 | 1.372568 | 1.402052 | -0.029483 | -100828.388762 |
| whitespace/multi_space | 1675770 | 4221900 | 0.072347 | 0.055106 | 0.017241 | 72789.338593 |
| whitespace/newline | 647343 | 647343 | 1.097083 | 0.990278 | 0.106805 | 69139.458738 |
| whitespace/mixed | 348017 | 1544450 | 0.271502 | 0.258253 | 0.013248 | 20461.512683 |
| whitespace/tab_or_cr | 83209 | 332562 | 0.761081 | 0.729475 | 0.031606 | 10511.062977 |
| whitespace/multi_newline | 71517 | 152866 | 0.535880 | 0.585292 | -0.049412 | -7553.421920 |

## Top Documents: Model A Worse

| dataset | shard | row_index | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fineweb2_multilingual/lit_Latn | 0000_parquet | 191 | 32768 | 1.971101 | 1.265112 | 0.705990 | 23133.866318 | text/non_ascii_word | Pašnibždomis | 3.426028 | …augelis␠kitų.␠Buvo␠darbininkų,␠ūkininkų,␠valdininkų.␠Pašnibždomis␠pasakė,␠kad␠laikyčiausi␠atsargiai,␠nes␠kartu␠yra␠įle… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 28 | 32767 | 1.571179 | 0.921850 | 0.649329 | 21276.563310 | text/non_ascii_word | کانپوءِ | 2.409375 | …يو␠آهي.“[5]⏎عسفان␠۾[سنواريو]⏎پنهنجي␠قبيلي␠کان␠مطمئن␠ٿيڻ␠کانپوءِ␠ابوذر␠رضي␠الله␠عنه␠ٻين␠آسپاس␠جي␠بستين␠ڏانهن␠متوجهه␠ٿيو… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 107 | 32768 | 1.596946 | 0.953343 | 0.643603 | 21089.581357 | text/non_ascii_word | ڀڃڪڙي | 3.305525 | …ل␠هيا،␠عرب␠سپاهين␠ڏٺيون␠ته␠ديوانا␠ٿي␠پيا.␠انهن␠معاهدي␠جي␠ڀڃڪڙي␠ڪئي.␠مندر␠جي␠خزاني␠کي␠لٽيو␠۽␠اڻويهه␠عورتن␠جي␠جسم␠تي␠جيڪ… |
| fineweb2_multilingual/lit_Latn | 0000_parquet | 87 | 32768 | 1.642659 | 1.023276 | 0.619384 | 20295.961897 | text/word | vestibiulio | 3.785981 | …alus.␠„Ekskursija“␠po␠namus␠prasidėjo␠nuo␠šešiakampio␠vestibiulio␠su␠sietynu␠ir␠juodomis␠grindų␠plytelėmis␠bei␠erdvios… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 42 | 32768 | 1.316284 | 0.704966 | 0.611318 | 20031.653426 | text/non_ascii_word | جيتوڻيڪ | 2.357972 | …ته:␠وحدانيت␠جي␠گواهي␠جي␠تاويل␠۽␠باطني␠حقيقت،␠اخلاص␠آهي.⏎جيتوڻيڪ␠عام␠اصطلاح␠۾␠اخلاص␠مان␠”عمل␠جو␠خالص␠هجڻ“␠مراد␠ورتي␠وين… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 39 | 32768 | 1.655513 | 1.055393 | 0.600119 | 19664.707091 | text/non_ascii_word | ميرپوربٺورو | 1.642544 | …ر⏎ڪمپوزنگ:␠نعمان␠علي␠جوڻيجو⏎ڇپائيندڙ:␠سنڌي␠ادبي␠سنگت-␠ميرپوربٺورو⏎ڇپيندڙ:␠ساحل␠پرنٽر␠اينڊ␠پبليشر␠حيدرآباد␠03332634650⏎… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 94 | 29220 | 1.582095 | 0.910231 | 0.671864 | 19631.863370 | text/non_ascii_word | کانسواءِ | 2.325343 | …نيتي␠آهي␠ته␠ڍلن␠وڌائڻ␠بدران␠پاڻ␠گهٽائڻ␠ضروري␠آهن،␠انهي␠کانسواءِ␠ڪانگريس␠جو␠رايو␠آهي␠ته␠تمام␠ننڍا␠کاتيدار␠جن␠کي␠پوک␠مان… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 43 | 32768 | 1.670826 | 1.083791 | 0.587035 | 19235.961751 | text/non_ascii_word | کانسواءِ | 2.211545 | …تي␠جوڙڻ␠۽␠پنهنجي␠علمي،␠ادبي␠۽␠تهذيبي␠ورثي␠کي␠جيئرو␠رکڻ␠کانسواءِ␠اسان␠عام␠ماڻهوءَ␠جي␠جذبن␠جي␠اپٽار␠۽␠عڪاسي␠نٿا␠ڪري␠سگھو… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 159 | 30954 | 1.489357 | 0.890149 | 0.599208 | 18547.894663 | text/non_ascii_word | مينيجمينٽ | 2.101733 | …␠مارڪيٽنگ␠،␠خريداري␠،␠گودام␠،␠پيداوار␠ڪنٽرول␠،␠پراجيڪٽ␠مينيجمينٽ␠،␠ريسورس␠پلاننگ␠،␠سروس␠ايريا␠،␠۽␠وسيلن␠جي␠صلاحيتن␠سان… |
| fineweb2_multilingual/lvs_Latn | 0000_parquet | 234 | 32768 | 1.337886 | 0.773540 | 0.564346 | 18492.499960 | text/non_ascii_word | Itālija-KrievijaLabot | 2.320926 | …jās␠divas␠to␠atbalstīs,␠bet␠paliks␠neitrālas.[9]⏎Itālija-KrievijaLabot⏎1909.␠gada␠24.␠oktobrī␠Krievija␠un␠Itālija␠para… |
| fineweb2_multilingual/lit_Latn | 0000_parquet | 175 | 32768 | 1.562170 | 1.023402 | 0.538768 | 17654.353608 | text/non_ascii_word | šaligatviuose | 2.605644 | …apčiomis␠filmavo␠eiseną.␠Miestelyje␠prie␠sankryžų␠ir␠šaligatviuose␠stovėjo␠milicininkai␠ir␠įdėmiai␠stebėjo␠praeinančiu… |
| fineweb2_multilingual/lit_Latn | 0000_parquet | 249 | 32768 | 1.415676 | 0.883768 | 0.531908 | 17429.575604 | text/non_ascii_word | rankšluostį | 2.941193 | …␠plastikinę␠skrybėlę␠ir␠ant␠viršaus␠užsiriškite␠šiltą␠rankšluostį.␠Po␠45–60␠minučių␠kruopščiai␠nuplaukite␠šiltu␠vanden… |
| fineweb2_multilingual/kaz_Cyrl | 0000_parquet | 255 | 32768 | 1.251261 | 0.743623 | 0.507638 | 16634.285289 | text/non_ascii_word | отансүйгіштікке | 1.849297 | …тары␠бар,␠оқырманын␠ойлантып,␠толғантатын,␠жастарды␠отансүйгіштікке,␠адалдыққа,␠шынайы␠махаббат␠пен␠достыққа␠шақыратын… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 211 | 32767 | 1.397468 | 0.895179 | 0.502290 | 16458.529330 | text/non_ascii_word | اڪائونٽنٽ | 2.387632 | …دبئي␠شهر␠۾␠واڌارو␠آهي.␠بس␠هن␠قسم␠جا␠ڪيريئر␠حاصل␠ڪرڻ␠لاء␠توهان␠جونيئر␠اڪائونٽنٽ␠طور␠تي␠شروع␠ڪري␠سگهو␠ٿا.␠حقيقت␠جي␠طور␠ت |
| fineweb2_multilingual/ekk_Latn | 0000_parquet | 125 | 32768 | 1.411789 | 0.912448 | 0.499340 | 16362.382059 | text/word | diferentseerumisega | 3.109192 | …astaase.␠Pahaloomulised␠kasvajad␠koosnevad␠madala␠diferentseerumisega␠rakkudest,␠kipuvad␠kasvama␠ümbritsevatesse␠kuded… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 35 | 27936 | 1.704718 | 1.122569 | 0.582149 | 16262.916108 | text/non_ascii_word | چنيءَ | 3.117563 | …ڪيو.␠زمين␠ڦاٽي␠پيئي␠۽␠سسئي␠اندر␠گهڙي␠ويئي.␠فقط␠سسئيءَ␠جي␠چنيءَ␠جو␠پلاند␠ٻاهر␠رهجي␠ويو.␠ريڍار␠موٽي␠اچي،␠ته␠ٻيو␠ڪجهه␠به␠… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 41 | 24704 | 1.439736 | 0.835666 | 0.604069 | 14922.929333 | text/non_ascii_word | وڪيپيڊيا | 2.757850 | …ڇڏيندس.⏎وڪيپيڊيا␠تي␠ٽيڪسٽ␠کي␠لنڪ␠ڪيئن␠ڪجي␠۽␠پڻ␠اهو␠لنڪ␠وڪيپيڊيا␠تائين␠محدود␠آهي␠يا␠ڪنهن␠به␠سائِيٽ␠جو␠رکي␠سگھجي␠ٿو؟[سنو… |
| fineweb2_multilingual/snd_Arab | 0000_parquet | 220 | 23032 | 1.375507 | 0.734954 | 0.640554 | 14753.229651 | text/non_ascii_word | آپٽمائزيشن | 1.896024 | …␠گهمڻ␠وارن␠جي␠تعداد␠۾␠مسلسل␠واڌارو␠ڪرڻ␠لاءِ.␠سرچ␠انجن␠آپٽمائزيشن␠(ايس␠اي␠او)␠،␠سادي␠اصطلاحن␠۾␠،␠اندروني␠۽␠بيروني␠اصلاح… |
| fineweb2_multilingual/ekk_Latn | 0000_parquet | 96 | 32767 | 1.576569 | 1.129156 | 0.447413 | 14660.393033 | text/word | magamaminekut | 4.244431 | …␠1␠tund,␠tühjendada,␠pigistada.␠Võtke␠50-60␠gr.␠Enne␠magamaminekut.␠Kahjutu␠rahvapärane␠ravim␠unetuse␠vastu␠tagab␠hea␠… |
| fineweb2_multilingual/hun_Latn | 0000_parquet | 184 | 32164 | 1.659141 | 1.204735 | 0.454406 | 14615.525586 | text/non_ascii_word | álldogáló | 3.205488 | …elen␠megakadsz␠a␠kilincs␠kezelésében,␠akkor␠a␠közelben␠álldogáló␠Evan␠Dodds␠–␠Exchange2007␠Shell␠program␠menedzser␠–␠p… |
| fineweb2_multilingual/kaz_Cyrl | 0000_parquet | 63 | 32767 | 1.194378 | 0.753496 | 0.440882 | 14446.392466 | text/non_ascii_word | Мұңайтпасовты | 1.502566 | …асау␠үшін␠шет␠елге␠оқуға␠(Бірімжановты,␠Битілеуовті,␠Мұңайтпасовты)␠жіберген␠–␠деген␠айып␠тағып,␠«Алашорда»␠қайраткерл… |
| fineweb2_multilingual/kaz_Cyrl | 0000_parquet | 58 | 32768 | 1.009941 | 0.575093 | 0.434847 | 14249.073601 | text/non_ascii_word | күмәнданбайды | 1.772860 | …оқ␠еді.⏎Қазіргі␠уақытта␠ешкім␠атомдардың␠бар␠екеніне␠күмәнданбайды.␠оқу␠құралы␠атом␠анықтамасын␠ұсынады␠«атомы␠-.␠оның… |
| fineweb2_multilingual/azj_Latn | 0000_parquet | 45 | 32768 | 1.668065 | 1.237559 | 0.430506 | 14106.822213 | text/non_ascii_word | siyasi-fəlsəfi | 2.936833 | …rən␠amillərdən␠ən␠başlıjası␠sənətkarın␠dünyagörüşü,␠siyasi-fəlsəfi,␠etik-estetik,␠mənəvi-əxlaqi␠kredosudur.␠Əslində␠el… |
| fineweb2_multilingual/kaz_Cyrl | 0000_parquet | 167 | 32767 | 1.223259 | 0.795816 | 0.427443 | 14006.015430 | text/non_ascii_word | Лиро-эпостық | 2.071292 | …тарихы.␠I-том.␠Алм.␠1990.⏎«Қозы␠Көрпеш-Баян␠сұлу»⏎1.␠Лиро-эпостық␠жырлар.⏎2.␠Жырдың␠варианттары,␠зерттелуі.⏎3.␠Жанақ␠ж… |
| fineweb2_multilingual/kaz_Cyrl | 0000_parquet | 132 | 32768 | 1.433726 | 1.017698 | 0.416029 | 13632.431616 | text/non_ascii_word | Дерттібектің | 2.467656 | …␠қайбір␠жетіскен␠ғалым␠шығады␠дейсің␠деді.␠Осы␠тұста␠Дерттібектің␠жүрегі␠дүрсілдей␠бастады.⏎Тұрағалды␠хатшы␠қызға␠қара… |

## Top Documents: Model B Worse

| dataset | shard | row_index | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | worst_bucket | worst_text | worst_gap_bpb | preview |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fineweb2_multilingual/nob_Latn | 0000_parquet | 116 | 27306 | 1.268940 | 1.884262 | -0.615322 | -16801.991961 | text/word | rannveigheitmannblogg | -2.353139 | …o␠hvordan␠barbere␠seg␠nedentil␠menn␠gangbang␠ski␠rannveigheitmannblogg␠lek.⏎vedio␠real␠massage␠xxx␠victoriamilan␠no␠tr… |
| paloma/m2d2_s2orc_unsplit | cs_CY_jsonl_gz | 0 | 32768 | 0.242476 | 0.635993 | -0.393518 | -12894.787490 | text/word | Reinnasance | -2.557481 | …,␠the␠Safevids,␠and␠the␠Mughals.␠We␠continue␠with␠the␠Reinnasance␠period,␠the␠Protestant␠Reformation,␠and␠colonization… |
| paloma/falcon-refinedweb | 0_jsonl_gz | 99 | 22544 | 0.136271 | 0.651204 | -0.514933 | -11608.645132 | text/word | personal | -2.702497 | …␠Accident␠Lawyers␠Farragut,␠Remember␠that␠you␠ought␠to␠personal␠injury␠lawyer␠nyc␠only␠pick␠lawyers␠who␠agree␠to␠go␠to… |
| paloma/m2d2_s2orc_unsplit | physics_hist-ph_jsonl_gz | 0 | 32768 | 0.317734 | 0.667358 | -0.349624 | -11456.474070 | text/word | Hermansphan | -2.877085 | …ion␠must␠be␠multiples␠of␠,␠too.␠Only␠in␠recent␠years,␠Hermansphan␠et␠al.␠(2000)␠have␠shown␠that␠the␠Larmor␠precession␠… |
| paloma/m2d2_s2orc_unsplit | physics_l1_jsonl_gz | 0 | 32768 | 0.317734 | 0.667358 | -0.349624 | -11456.474070 | text/word | Hermansphan | -2.877085 | …ion␠must␠be␠multiples␠of␠,␠too.␠Only␠in␠recent␠years,␠Hermansphan␠et␠al.␠(2000)␠have␠shown␠that␠the␠Larmor␠precession␠… |
| fineweb2_multilingual/fin_Latn | 0000_parquet | 101 | 18304 | 1.098249 | 1.637889 | -0.539639 | -9877.555622 | text/word | orkasmin | -5.018648 | …es␠etsii␠naista␠transvestiitti␠seuraa␠miten␠nainen␠saa␠orkasmin␠free␠webcam␠xxx␠erotic␠massage␠the␠hairy␠pussy␠ilmaise… |
| fineweb2_multilingual/nob_Latn | 0000_parquet | 99 | 13197 | 0.971538 | 1.706080 | -0.734543 | -9693.760418 | text/non_ascii_word | kjønnsleppen | -2.691212 | …inger␠sex␠lillehammer␠sms␠sextreff␠knullefilm␠kul␠på␠kjønnsleppen.␠Erotisk␠sex␠gratis␠date␠sider␠utendørs␠sex␠gratis␠n… |
| paloma/m2d2_s2orc_unsplit | astro-ph_EP_jsonl_gz | 0 | 32767 | 0.360212 | 0.653146 | -0.292935 | -9598.586297 | text/word | materials | -2.486607 | …nets␠(Zhou␠et␠al.␠2005)␠.␠Mandell␠et␠al.␠(2007)␠showed␠materials␠that␠have␠been␠shepherded␠interior␠to␠the␠migrating␠g… |
| fineweb2_multilingual/swe_Latn | 0000_parquet | 238 | 17991 | 0.871014 | 1.380438 | -0.509425 | -9165.057718 | text/word | sprutsugen | -3.220849 | …ting␠för␠gifta␠gratis␠dejtingsajt⏎Sexleksaker␠för␠män␠sprutsugen⏎Sexig␠klänningar␠sextips␠till␠tjejer␠Sex␠shop␠sverige… |
| fineweb2_multilingual/dan_Latn | 0000_parquet | 225 | 17872 | 1.038346 | 1.537137 | -0.498791 | -8914.392092 | text/word | cassiopeiastars | -1.809823 | …ntim␠massage␠midtjylland␠Homoseksuel␠dansk␠pige␠sex␠cassiopeiastars␠dk⏎Homo␠massage␠sex␠vejle␠porn␠katja␠k⏎homoseksuel… |
| fineweb2_multilingual/dan_Latn | 0000_parquet | 230 | 14820 | 1.244885 | 1.816136 | -0.571251 | -8465.938589 | text/word | saltvandsbryster | -2.296897 | …␠ømme␠bryster␠op␠til␠menstruation,⏎,␠katja␠k␠video␠saltvandsbryster,␠Seksueltforhold␠dk␠stripper␠nordjylland⏎Nakkeost␠… |
| paloma/m2d2_s2orc_unsplit | cs_ET_jsonl_gz | 0 | 32768 | 0.502607 | 0.753275 | -0.250669 | -8213.911788 | text/word | single-inverter-delay | -1.153831 | …es,␠which␠extend␠the␠precision␠to␠the␠order␠of␠a␠single-inverter-delay,␠can␠be␠used␠for␠more␠precise␠measurements␠[22]… |
| fineweb2_multilingual/dan_Latn | 0000_parquet | 226 | 18079 | 1.287089 | 1.733486 | -0.446397 | -8070.411070 | text/word | sugardaters | -3.037244 | …␠mænd␠Apex␠Pizza␠Hvidovre␠Fisse␠Billeder␠kneppe␠fisse␠sugardaters␠anmeldelse␠Escort␠vejleder␠store␠buttet␠bryster␠Esco… |
| paloma/m2d2_s2orc_unsplit | physics_ins-det_jsonl_gz | 0 | 32768 | 0.447944 | 0.670367 | -0.222424 | -7288.374629 | text/word | PREMUX | -3.504730 | …t␠gap␠was␠kept␠as␠3mm.⏎Two␠detectors␠were␠equipped␠with␠PREMUX␠hybrid␠with␠512␠channels␠each.␠Detailed␠description␠of␠… |
| fineweb2_multilingual/nob_Latn | 0000_parquet | 119 | 15211 | 0.994729 | 1.461930 | -0.467200 | -7106.580933 | text/word | Ubeskyttet | -3.402975 | …e␠Bøsse␠Gutter␠Knulle␠hardt␠imlive␠homoseksuell⏎Bøsse␠Ubeskyttet␠Samleie␠Escorte␠Oppland⏎find␠a␠fuck␠date␠group␠chat␠h… |
| fineweb2_multilingual/fin_Latn | 0000_parquet | 102 | 12935 | 1.111047 | 1.646587 | -0.535540 | -6927.211892 | text/non_ascii_word | pettämissivusto | -2.089946 | …näläinen␠porno␠suomalainen␠mies␠Parhaat␠pornovideot␠pettämissivusto␠victoria␠milan,⏎Kotitekoinen␠pillu␠pornoon␠seksivi… |
| paloma/mc4 | 0_jsonl_gz | 160 | 32768 | 0.563582 | 0.770600 | -0.207018 | -6783.568401 | text/word | MADEBYYOU | -5.492675 | …ping␠on␠qualified␠orders␠over␠$␠25␠shipped␠by␠Amazon␠20MADEBYYOU␠11␠colors␠…␠Introducing␠Coloris,␠DMC␠manufactured!␠To… |
| paloma/m2d2_wikipedia_unsplit | Mathematics_and_logic_jsonl_gz | 0 | 32768 | 0.412529 | 0.612294 | -0.199765 | -6545.887887 | text/number | 190.58 | -3.754638 | …ollapse␠of␠the␠junk␠bond␠market␠causing␠the␠Dow␠to␠fall␠190.58␠points,␠or␠6.91␠percent.⏎Similarly,␠there␠was␠a␠panic␠i… |
| paloma/m2d2_wikipedia_unsplit | Mathematics_and_logic__Mathematics_jsonl_gz | 0 | 32768 | 0.412529 | 0.612294 | -0.199765 | -6545.887887 | text/number | 190.58 | -3.754638 | …ollapse␠of␠the␠junk␠bond␠market␠causing␠the␠Dow␠to␠fall␠190.58␠points,␠or␠6.91␠percent.⏎Similarly,␠there␠was␠a␠panic␠i… |
| paloma/m2d2_s2orc_unsplit | cond-mat_soft_jsonl_gz | 0 | 32768 | 0.511989 | 0.706949 | -0.194960 | -6388.451658 | text/word | Kronberg | -3.472698 | …eity,␠causing␠a␠decrease␠in␠the␠entropy␠of␠the␠system␠(Kronberg␠et␠al.,␠1995)␠.␠An␠entropic␠force␠acts␠to␠gather␠toget… |
| fineweb2_multilingual/fin_Latn | 0000_parquet | 98 | 13339 | 1.184300 | 1.661844 | -0.477544 | -6369.955889 | text/word | pakkotoisto | -3.390283 | …isään␠helsinki...␠Tutvumiskeskus␠anaboliset␠steroidit␠pakkotoisto␠Vaimo␠Luvalla␠Vieraissa␠Eroottiset␠Vaatteet␠Salkkari… |
| paloma/m2d2_wikipedia_unsplit | Culture_and_the_arts__The_arts_and_Entertainment_jsonl_gz | 0 | 32768 | 0.574165 | 0.766882 | -0.192717 | -6314.963143 | text/word | Sukiyanen | -3.334135 | …forward␠without␠looking␠back.␠Their␠late␠2005␠single,␠"Sukiyanen,␠Osaka/Oh!␠Enka/Mugendai"␠had␠shown␠signs␠of␠the␠grou… |
| paloma/m2d2_s2orc_unsplit | physics_comp-ph_jsonl_gz | 0 | 32768 | 0.453065 | 0.644526 | -0.191460 | -6273.772792 | text/word | min-WREE | -5.033767 | …␠is␠MSER␠(mean␠squared␠error␠rule)␠24␠and␠the␠other␠is␠min-WREE␠(minimization␠of␠weighted␠relative␠error␠of␠the␠error)… |
| paloma/m2d2_s2orc_unsplit | astro-ph_SR_jsonl_gz | 0 | 32766 | 0.501253 | 0.689681 | -0.188429 | -6174.059184 | text/word | ARFHD | -4.659615 | …bined␠gravitocentrifugal␠force␠in␠the␠same␠manner␠as␠the␠ARFHD␠formulation␠(Section␠2.5),␠i.e.␠with␠rigid-body␠rotatio… |
| paloma/wikitext_103 | val_jsonl_gz | 21 | 27913 | 0.500524 | 0.716078 | -0.215554 | -6016.757883 | text/punctuation | @,@ | -11.628804 | ….␠(␠The␠chronicles␠say␠that␠the␠Burmese␠army␠numbered␠400␠@,@␠000␠men␠while␠the␠Mongol␠army␠numbered␠20␠million␠men␠an… |

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
| ␠ | whitespace/single_space | 11994578 | 11994578 | 0.943777 | 0.843215 | 0.100561 | 1206189.326029 | fineweb2_multilingual/heb_Hebr | …להמשך␠היום␠ברחובות␠הקפואים.␠היה␠טעים␠מאוד␠אך␠יקר.⏎אני␠חייבת␠3␠תודות:⏎1.␠פריז␠דרך␠הפה–␠אתר␠מעולה␠ששימש␠אותי␠במהלך␠שיטוט… | \|␠\| | \|␠\| |
| . | text/punctuation | 633226 | 633226 | 1.419075 | 1.189263 | 0.229812 | 145522.635775 | fineweb2_multilingual/heb_Hebr | …␠מהבחינה␠הזאת␠נראה␠לי␠שזבל␠זה␠אפילו␠גרוע␠יותר...␠זה␠בטוח␠לא.␠אני␠מניחה␠שאפשר␠להתקשר␠למוקד␠העירוני␠ולברר,␠אבל␠הייתי␠מעד… | \|.\| | \|.\| |
| । | text/non_ascii | 58121 | 174363 | 0.681954 | 0.254379 | 0.427576 | 74553.354038 | fineweb2_multilingual/ory_Orya | …ତ␠ଧୈର୍ଯ୍ୟ␠ଧରିବାକୁ␠କହିଛନ୍ତି।⏎ପଢନ୍ତୁ␠ଓଡ଼ିଶା␠ରିପୋର୍ଟର␠ଖବର␠ଏବେ␠ଟେଲିଗ୍ରାମ୍␠ରେ।␠ସମସ୍ତ␠ବଡ␠ଖବର␠ପାଇବା␠ପାଇଁ␠ଏଠାରେ␠କ୍ଲିକ୍␠କରନ୍ତୁ। | \|।\| | \|।\| |
| ⏎ | whitespace/newline | 647343 | 647343 | 1.097083 | 0.990278 | 0.106805 | 69139.458738 | fineweb2_multilingual/heb_Hebr | …המון␠המון␠תודה,␠האמת␠שהווטרינר␠הציע␠להביא␠אליו␠את␠צארלי␠כדי⏎שינתח␠אבל␠לא␠הייתי␠מסוגלת␠להישאר␠בבית␠כל␠הלילה␠עם␠ארנבונת␠… | \|⏎\| | \|⏎\| |
| 1 | text/number | 250775 | 250775 | 0.921017 | 0.812265 | 0.108752 | 27272.335231 | paloma/m2d2_wikipedia_unsplit | …ajor␠League␠Baseball␠(MLB)␠for␠the␠Philadelphia␠Phillies,␠Philadelphia␠Athletics␠(twice),␠and␠Cleveland␠Naps␠between␠1 | \|1\| | \|1\| |
| ␠␠␠ | whitespace/multi_space | 194012 | 582036 | 0.169633 | 0.123006 | 0.046627 | 27138.825879 | bio_chem/uniprot/uniprot_sprot_dat | …,␠McPherson␠D.,␠Merkulov␠G.,␠Milshina␠N.V.,␠Mobarry␠C.,⏎RA␠␠␠Morris␠J.,␠Moshrefi␠A.,␠Mount␠S.M.,␠Moy␠M.,␠Murphy␠B.,␠Mu… | \|␠␠\|␠…\| | \|␠␠\|␠…\| |
| ( | text/punctuation | 246406 | 246406 | 0.999408 | 0.895350 | 0.104058 | 25640.499746 | bio_chem/chembl/chembl_chemreps | …2)62-54-116)186(306)242-129(45-25-32-79-208)175(295)246-138(69-72-153(213)276)182(302)241-136(52-39-86-229-204(223)224… | \|(\| | \|(\| |
| C | text/word | 194129 | 194129 | 0.855878 | 0.726432 | 0.129446 | 25129.258751 | bio_chem/rcsb/rcsb_mmcif | …transf_vector[3]␠␠␠␠␠␠0.00000␠⏎#␠⏎loop_⏎_atom_type.symbol␠⏎C␠⏎N␠⏎O␠⏎#␠⏎loop_⏎_atom_site.group_PDB␠⏎_atom_site.id␠⏎_ato… | \|C\| | \|C\| |
| , | text/punctuation | 733554 | 733554 | 1.455426 | 1.422724 | 0.032702 | 23988.938898 | fineweb2_multilingual/heb_Hebr | …,␠מכונית,␠אקס␠בוקס,␠טיולים␠ברחבי␠העולם,␠כניסה␠לתוכניות␠ארוח,␠חייט␠פרטי,␠ציורים,␠תכשיטים,␠תיקים,␠צעיפים␠של␠הרמס␠ועוד.␠ע… | \|,\| | \|,\| |
| 2 | text/number | 119659 | 119659 | 1.632294 | 1.443651 | 0.188642 | 22572.743130 | fineweb2_multilingual/zsm_Latn | …ana␠oleh␠bakteria␠tanah.⏎-␠Kekurangan␠oksigen.␠Kekurangan␠o2␠perlu␠dikeluarkan␠dengan␠bantuan␠alat␠khas␠dengan␠fungsi␠… | \|2\| | \|2\| |
| के | text/non_ascii_word | 18964 | 113784 | 0.509899 | 0.327271 | 0.182628 | 20780.189776 | fineweb2_multilingual/hne_Deva | …े␠अऊ␠घर␠के␠समान␠ला␠टोरे␠लाग␠जाथे.”␠इहाँ␠ये␠सोचे␠के␠बात␠आय␠के,␠काय␠बिहार␠मं␠शराबबंदी␠नई␠ये?␠एनएफएचएस-4␠के␠मुताबिक␠शराबब… | \|…क\|े…\| | \|…क\|े\| |
| : | text/punctuation | 148571 | 148571 | 1.112134 | 0.984893 | 0.127241 | 18904.344167 | raw_web_markup/common_crawl/warc | …p--preset--color--purple:␠#884898;--wp--preset--color--deep:␠#55295b;--wp--preset--color--indigo:␠#1e50a2;--wp--preset… | \|:\| | \|:\| |
| 3 | text/number | 76740 | 76740 | 1.923783 | 1.705885 | 0.217898 | 16721.465363 | bio_chem/pubchem/pubchem_sdf | …␠0␠␠0␠␠0␠␠0␠␠0␠␠0⏎␠␠␠11.1972␠␠␠-2.4320␠␠␠␠0.0000␠C␠␠␠0␠␠0␠␠3␠␠0␠␠0␠␠0␠␠0␠␠0␠␠0␠␠0␠␠0␠␠0⏎␠␠␠␠7.7331␠␠␠-5.4320␠␠␠␠0.0000… | \|3\| | \|3\| |
| ; | text/punctuation | 107427 | 107427 | 0.867277 | 0.718039 | 0.149238 | 16032.241604 | bio_chem/chembl/chembl_chemreps | …,21,23,25-26H,3-6,11-15,18-20H2,1-2H3;1-2H,(H,5,6)(H,7,8)/b;2-1+/t21-,23-,25-,26+;/m0./s1⇥SCJCAKLZCWCCCO-HTCZGZADSA-N⏎… | \|;\| | \|;\| |
| ) | text/punctuation | 210018 | 210018 | 0.522933 | 0.451269 | 0.071664 | 15050.767286 | fineweb2_multilingual/azj_Latn | …təqdim␠edilməsi␠sözsüz␠ki,␠istifadəçilərin␠yararınadır.⏎-␠Ç)␠İdman␠oyunu␠təxirə␠salındıqda,␠həmin␠vaxt␠qalibin␠müəyyən… | \|)\| | \|)\| |
| ， | text/non_ascii | 11439 | 34317 | 0.897113 | 0.514752 | 0.382361 | 13121.473738 | fineweb2_multilingual/cmn_Hani | …持续发展科技专项，加强南海岛礁生态修复、环境保护、清洁能源利用、海水淡化等先进技术研发和转化。⏎六、打造区域传新增长极，引领带动区域协调发展⏎1、加快北京上海科技创新中心建设⏎围绕重大科技创新基地建设、重大项目联合攻关、创新政策先行先试… | \|，\| | \|，\| |
| 6 | text/number | 40100 | 40100 | 3.079991 | 2.753033 | 0.326958 | 13111.025821 | bio_chem/rcsb/rcsb_mmcif | …␠?␠WATSON-CRICK␠␠␠␠␠␠␠␠␠␠␠␠?␠⏎?␠?␠⏎hydrog14␠hydrog␠?␠␠␠␠?␠A␠U␠␠␠6␠␠N3␠␠␠␠?␠?␠?␠1_555␠A␠A␠␠␠67␠N1␠?␠?␠A␠U␠␠␠6␠␠␠A␠A␠␠␠6 | \|6\| | \|6\| |
| O | text/word | 84612 | 84612 | 1.110908 | 0.970638 | 0.140270 | 11868.540173 | bio_chem/pubchem/pubchem_sdf | …R_WEIGHT>⏎179.00⏎⏎>␠<PUBCHEM_SMILES>⏎C1=C(C(=CC(=C1Cl)O)Cl)O⏎⏎>␠<PUBCHEM_CONNECTIVITY_SMILES>⏎C1=C(C(=CC(=C1Cl)O)Cl)O⏎… | \|O\| | \|O\| |
| 5 | text/number | 44630 | 44630 | 2.595718 | 2.332859 | 0.262860 | 11731.427605 | fineweb2_multilingual/tel_Telu | …ో⏎-␠ధర␠అంచనా:␠రూ.␠50␠లక్షల␠నుండి␠రూ.␠60␠లక్షల␠మధ్య⏎ఆడి␠క్యూ5⏎2016లో␠జరిగిన␠ప్యారిస్␠మోటార్␠షో␠లో␠ఆడి␠నెక్ట్స్␠జనరేషన్␠… | \|5\| | \|5\| |
| PUBCHEM_IUPAC_OPENEYE_NAME | text/word | 846 | 21996 | 1.119854 | 0.594704 | 0.525149 | 11551.186159 | bio_chem/pubchem/pubchem_sdf | …zACH6+CKJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==⏎⏎>␠<PUBCHEM_IUPAC_OPENEYE_NAME>⏎7-[2-[3-[[4-[[[5-(6-aminopurin-9-yl)-4-hydro… | \|P\|UB\|CHE\|M\|_I\|UP\|AC\|_OPEN\|E\|YE\|_NAME\| | \|P\|UB\|CHE\|M\|_I\|UP\|AC\|_OPEN\|E\|YE\|_NAME\| |
| ? | text/punctuation | 39979 | 39979 | 1.321375 | 1.062634 | 0.258741 | 10344.223555 | fineweb2_multilingual/sin_Sinh | …්වෙන්න␠පුළුවන්.␠මෙහෙම␠වෙලාවක␠අගමැති␠තනතුරට␠පත්කරන්න␠ඕන␠කවුද?␠ඒ␠වෙනුවෙන්␠එච්චර␠ජනප්රිය␠කෙනෙක්␠පත්කරන්න␠ඕන␠කියලා␠මම␠හිතන… | \|?\| | \|?\| |
| جي | text/non_ascii_word | 6111 | 24444 | 0.784158 | 0.373813 | 0.410345 | 10030.469630 | fineweb2_multilingual/snd_Arab | اسان␠تيزي␠سان␠فرانس␠جي␠ڏوهن␠جي␠سيريز␠۾␠جڳهن␠تي␠عادي␠ٿي␠رهيا␠آهيون:␠'قتل␠۾'!⏎هر␠قسط␠هڪ␠نئين␠'تصوير'␠۽␠گهٽ␠سڃاتل␠هنڌ␠جي␠… | \|…جي\| | \|…ج\|ي\| |
| 7 | text/number | 27973 | 27973 | 3.415496 | 3.062507 | 0.352989 | 9874.149171 | formal_methods/dimacs_cnf | …␠0⏎-516␠733␠0⏎-516␠734␠0⏎776␠-516␠0⏎776␠-517␠0⏎776␠-510␠0⏎776␠-511␠0⏎776␠-512␠0⏎516␠517␠510␠511␠512␠-776␠0⏎702␠366␠0⏎7 | \|7\| | \|7\| |
| 0 | text/number | 1322368 | 1322368 | 0.086900 | 0.079603 | 0.007296 | 9648.345740 | paloma/4chan | …mous␠08/23/18(Thu)07:33:42␠no.183205890:⏎>>183205713⏎helo␠bulgaro␠bue␠fagg␠long␠time␠no␠see⏎⏎⏎Anonymous␠08/23/18(Thu)0 | \|0\| | \|0\| |
| N | text/word | 38614 | 38614 | 2.069270 | 1.825512 | 0.243759 | 9412.502858 | bio_chem/uniprot/uniprot_sprot_dat | …3-Ywhaz␠complex.⏎DR␠␠␠CORUM;␠P63101;␠-.⏎DR␠␠␠DIP;␠DIP-31894N;␠-.⏎DR␠␠␠FunCoup;␠P63101;␠3425.⏎DR␠␠␠IntAct;␠P63101;␠192.… | \|N\| | \|N\| |
| آهي | text/non_ascii_word | 2564 | 15384 | 0.805208 | 0.235005 | 0.570204 | 8772.015017 | fineweb2_multilingual/snd_Arab | …ي␠وڃي␠يا␠بلڪل␠ئي␠ختم␠ٿي␠وڃي؟␠هرگز␠ائين␠نه␠آهي.␠اهو␠ئي␠سبب␠آهي␠جو␠سائڻ␠زهرا␠(س)␠توحيد␠جي␠حقيقت␠کي␠اخلاص␠ڄاڻائن␠ٿيون␠۽␠ا… | \|…آ\|ه\|ي\| | \|…آ\|هي\| |
| ته | text/non_ascii_word | 1847 | 7388 | 1.481885 | 0.304811 | 1.177073 | 8696.217982 | fineweb2_multilingual/snd_Arab | …␠کان␠پوءِ␠شهر␠پهچي،␠منهنجا␠وائيسر␠ڦري␠ويا.␠شاهن␠نه␠هجي␠ها␠ته␠وڃائجي␠وڃان␠ها.␠ماڻهن␠جا␠هشام،␠ڪارين␠جا␠ڪٽڪ،␠هيڏانهن␠کان␠… | \|…ته\| | \|…ت\|ه\| |
| = | text/punctuation | 101594 | 101594 | 0.605059 | 0.521293 | 0.083767 | 8510.175171 | bio_chem/pubchem/pubchem_sdf | …HT>⏎231.20⏎⏎>␠<PUBCHEM_SMILES>⏎C(CC(C(=O)O)NC(=O)CCC(=O)O)C=O⏎⏎>␠<PUBCHEM_CONNECTIVITY_SMILES>⏎C(CC(C(=O)O)NC(=O)CCC(=… | \|=\| | \|=\| |
| ۽ | text/non_ascii | 3218 | 6436 | 1.809011 | 0.548127 | 1.260884 | 8115.047090 | fineweb2_multilingual/snd_Arab | رضوان␠گل⏎محقق،␠صحافي␠۽␠تاريخدان⏎پير␠حسام␠الدين␠راشدي⏎سنڌ␠جي␠زرخير␠مٽيءَ␠مان␠اهڙا␠آدرشي␠انسان␠پيدا␠ٿيا␠آهن،␠جن␠جي␠قابلي… | \|۽\|۽\| | \|۽\| |
| ⇥ | whitespace/tab_or_cr | 19436 | 19436 | 3.754180 | 3.361121 | 0.393060 | 7639.510811 | paloma/mc4 | …ilms␠Arabic␠أفلام␠عربية,␠Films␠Egyptiens␠Egypt␠أفلام␠مصرية.⇥You␠can␠follow␠any␠responses␠to␠this␠entry␠through␠the␠RSS… | \|⇥\| | \|⇥\| |
| 0999 | text/number | 1715 | 6860 | 1.623870 | 0.536197 | 1.087673 | 7461.439737 | bio_chem/chembl/chembl_sdf | …556⏎␠␠␠␠␠RDKit␠␠␠␠␠␠␠␠␠␠2D⏎⏎␠16␠15␠␠0␠␠0␠␠1␠␠0␠␠0␠␠0␠␠0␠␠0999␠V2000⏎␠␠␠-2.4958␠␠␠-0.0125␠␠␠␠0.0000␠C␠␠␠0␠␠0␠␠0␠␠0␠␠0␠␠… | \|099\|9\| | \|0\|9\|9\|9\| |
| 4 | text/number | 51691 | 51691 | 2.347392 | 2.203365 | 0.144027 | 7444.900199 | fineweb2_multilingual/heb_Hebr | …לה␠בהחלט␠לזרז␠את␠התהליך␠ולהוביל␠לתוצאות␠מהירות␠וטובות␠בהרבה4.␠ניתן␠לכנות␠גישה␠זו␠"השאיפה␠לחרדה".␠משמעותה␠פשוטה␠אך␠לא␠א… | \|4\| | \|4\| |
| Branch | text/word | 11823 | 70938 | 0.348090 | 0.244164 | 0.103926 | 7372.294439 | bio_chem/moleculenet/moleculenet_clintox_smiles | …)(=O)[N-]c2ncccn2)cc1,[N][C][=C][C][=C][Branch1][P][S][=Branch1][C][=O][=Branch1][C][=O][N-1][C][=N][C][=C][C][=N][Rin… | \|Branch\| | \|Branch\| |
| ␠␠ | whitespace/multi_space | 1323995 | 2647990 | 0.036922 | 0.034162 | 0.002760 | 7307.831378 | lm_eval/gsm8k_train | …er␠is␠8.⏎⏎Q:␠Mr.␠Sanchez␠found␠out␠that␠40%␠of␠his␠Grade␠5␠␠students␠got␠a␠final␠grade␠below␠B.␠How␠many␠of␠his␠studen… | \|␠\|␠…\| | \|␠\|␠…\| |
| PUBCHEM_EXACT_MASS | text/word | 849 | 15282 | 0.734854 | 0.261885 | 0.472969 | 7227.911684 | bio_chem/pubchem/pubchem_sdf | …UDSN-UHFFFAOYSA-N⏎⏎>␠<PUBCHEM_XLOGP3_AA>⏎-3.5⏎⏎>␠<PUBCHEM_EXACT_MASS>⏎132.089877630⏎⏎>␠<PUBCHEM_MOLECULAR_FORMULA>⏎C5H… | \|P\|UB\|CHE\|M\|_EX\|ACT\|_M\|ASS\| | \|P\|UB\|CHE\|M\|_EX\|ACT\|_M\|ASS\| |
| - | text/punctuation | 249079 | 249079 | 0.637922 | 0.609577 | 0.028344 | 7060.004903 | fineweb2_multilingual/heb_Hebr | …",␠אמר␠בהצהרה␠לכתבים.␠הוא␠נשאל␠האם␠ירצה␠להשביע␠גם␠את␠הממשלה␠ה-36␠והגיב␠בציניות:␠"␠לא␠יותר␠מה-37".⏎(עדכון␠ראשון:␠12:56) | \|-\| | \|-\| |
| به | text/non_ascii_word | 5668 | 22672 | 0.936019 | 0.629645 | 0.306374 | 6946.122376 | fineweb2_multilingual/snd_Arab | …ولي␠ڏيڻ␠۾␠مدد␠ڪندو.␠توهان␠کي␠امريڪي␠پارٽنر␠سان␠ڳنڊڻ␠جو␠ڪم␠به␠ڪندو،␠جيڪي␠به␠مصنوعات،␠شيون␠۽␠خدمتون␠اوهان␠کي␠گھرجن␠سي␠هن… | \|…به\| | \|…به\| |
| – | text/non_ascii | 18658 | 55974 | 1.231090 | 1.107042 | 0.124047 | 6943.429143 | fineweb2_multilingual/npi_Deva | …वै␠सर्वप्रथम␠भारतबाट␠जानकारीमा␠आएका␠हुन्␠।␠यो␠उही␠सार्स–कोभ–२␠भाइरस␠हो,␠तर␠यसमा␠केही␠आनुवंशिक␠(जेनेटिक)␠परिवर्तन␠भएका␠… | \|–\| | \|–\| |
| [ | text/punctuation | 72143 | 72143 | 0.778063 | 0.682621 | 0.095442 | 6885.482478 | fineweb2_multilingual/slv_Latn | …ema,␠rezkalniki,␠bagri␠in␠druga␠specialna␠oprema).⏎Postopki[uredi␠\|␠uredi␠kodo]⏎Tehnološke␠postopke␠pri␠gradnji␠cest␠s… | \|[\| | \|[\| |
| PUBCHEM_ATOM_UDEF_STEREO_COUNT | text/word | 848 | 25440 | 0.288711 | 0.022228 | 0.266483 | 6779.318264 | bio_chem/pubchem/pubchem_sdf | …19⏎⏎>␠<PUBCHEM_ATOM_DEF_STEREO_COUNT>⏎0⏎⏎>␠<PUBCHEM_ATOM_UDEF_STEREO_COUNT>⏎1⏎⏎>␠<PUBCHEM_BOND_DEF_STEREO_COUNT>⏎0⏎⏎>␠… | \|P\|UB\|CHE\|M\|_ATOM\|_U\|DEF\|_ST\|ER\|EO\|_COUNT\| | \|P\|UB\|CHE\|M\|_ATOM\|_U\|DEF\|_ST\|ER\|EO\|_COUNT\| |

## Top Literals: Model B Worse

Representative token boundaries come from the highest-gap occurrence for each literal. `|` marks token boundaries for each model; an ellipsis means the token continues outside the literal boundary in that example.

| name | bucket | documents | bytes | model_a_bpb | model_b_bpb | gap_bpb | delta_bits | example_dataset | example_doc_preview | model_a_token_boundaries | model_b_token_boundaries |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| � | text/non_ascii | 76984 | 230952 | 0.608053 | 0.789583 | -0.181530 | -41924.707777 | diagnostic_logs/ghalogs_issue_5093_holdout | …��AmG���t�[.���:v��Q�⇥�1N'���{'���k�⇥���9⇥���؛S`��Av�o�I�̩�⏎,�I���D&�$�?��D6�ZXn�ѡ�x7��<�⇥)��)4�t`N��P… | \|�\| | \|�\| |
| �� | text/non_ascii | 33163 | 198978 | 0.481154 | 0.659171 | -0.178017 | -35421.382600 | diagnostic_logs/ghalogs_issue_5093_holdout | …�H%VOnPK{�~X�ZϷQ����t&��Sx���rʟ��\\���X�ޜ\|�z�\|�ivap��5ީ��f�벟�N�7ݶn�m���r��o-�⇥���L�'��Jh�R�qɗ���n�藺�y�\\n��… | \|��\| | \|��\| |
| ⏎⏎⏎ | whitespace/multi_newline | 9426 | 28278 | 1.168727 | 1.570892 | -0.402165 | -11372.413320 | fineweb2_multilingual/kor_Hang | …알려␠준다면␠상담␠시␠많은␠도움이␠됩니다.⏎바쏘␠감사␠컬리␠아이스텀블러␠450ml⏎◀␠업종별␠추천상품␠▶⏎⏎⏎안녕하세요.␠영업␠9팀␠막내가␠소개할␠우리팀␠이번주␠추천판촉물은␠환경호르몬이␠나오지␠않는␠친환경␠제품으… | \|⏎⏎⏎\| | \|⏎⏎⏎\| |
| ��� | text/non_ascii | 13522 | 121698 | 0.473668 | 0.552376 | -0.078708 | -9578.633002 | diagnostic_logs/ghalogs_issue_5093_holdout | …k�s{:Gv�v��OW���1Ì�亢T�Q)���kf!5��ڗ9�\|C���p�6�@#�Ӗi���y���t:�a15C�2�[K⏎��YA���r��څ%��⏎R�V���#���J���K�:�… | \|���\| | \|���\| |
| ␠⏎⏎⏎ | whitespace/mixed | 1682 | 6728 | 0.875576 | 2.166174 | -1.290598 | -8683.144107 | paloma/manosphere_meta_sep | …␠you␠unironically␠⇥⇥␠Click␠to␠expand...␠Approaching␠day␠4␠⏎⏎⏎itsogrecel:⏎␠Yes␠man,␠but␠if␠we␠were␠not␠so␠ugly,␠then␠it… | \|␠⏎⏎⏎\| | \|␠⏎⏎⏎\| |
| of | text/word | 109787 | 219574 | 0.288496 | 0.325629 | -0.037134 | -8153.570754 | lm_eval/gsm8k_train | …clocked␠4,␠Mitchell␠had␠read␠20␠pages␠of␠the␠11th␠chapter␠of␠the␠book␠she␠was␠studying␠from.␠After␠4␠o'clock,␠she␠didn… | \|…of\| | \|…of\| |
| on | text/word | 30403 | 60806 | 0.810780 | 0.922781 | -0.112001 | -6810.314023 | fineweb2_multilingual/ron_Latn | …alizare␠macheta␠“Orasul␠de␠lapte”⏎Posted␠20␠octombrie␠2012on:⏎Astazi␠s-a␠reunit␠echipa␠participanta␠la␠concursul␠“Oras… | \|on\| | \|on\| |
| that | text/word | 32088 | 128352 | 0.436780 | 0.484174 | -0.047394 | -6083.057424 | paloma/falcon-refinedweb | …lthy␠Lifestyle⏎Outdoor␠Sports␠Equipment␠Peru␠IN␠Peru,␠IN␠that␠will␠answer␠all␠of␠your␠questions␠about␠Outdoor␠Sports␠E… | \|…that\| | \|…that\| |
| ":{" | text/punctuation | 3286 | 13144 | 0.543357 | 0.960675 | -0.417318 | -5485.226575 | raw_web_markup/common_crawl/wat | …sgtype=request","HTTP-Request-Metadata":{"Request-Message":{"Method":"GET","Path":"/servlet/htmlbanner?sid=2300941&pid… | \|":{"\| | \|":{"\| |
| Gzip-Metadata | text/word | 255 | 3315 | 1.495675 | 3.070305 | -1.574630 | -5219.898560 | raw_web_markup/common_crawl/wat | …-00000.warc.gz","Compressed":true,"Offset":"836819","Gzip-Metadata":{"Deflate-Length":"440","Header-Length":"10","Foot… | \|G\|zip\|-M\|etadata\| | \|G\|zip\|-M\|etadata\| |
| to | text/word | 91212 | 182424 | 0.432111 | 0.459472 | -0.027360 | -4991.183401 | paloma/redpajama | …and␠the␠accessibility␠of␠alternative␠educational␠options.⏎to␠find␠out␠more␠about␠the␠specific␠factors␠influencing␠Calv… | \|to\| | \|to\| |
| this | text/word | 19518 | 78072 | 0.464326 | 0.523632 | -0.059306 | -4630.116125 | lm_eval/gsm8k_train | …lip␠gloss,␠each␠of␠which␠holds␠2␠tubes␠of␠lip␠gloss,␠and␠this␠will␠be␠the␠exact␠amount␠she␠needs␠for␠everyone's␠makeup… | \|…this\| | \|…this\| |
| it | text/word | 17766 | 35532 | 0.806473 | 0.926263 | -0.119790 | -4256.374107 | gh_archive_structured_output/IssueCommentEvent | …␠not␠a␠safetensors␠file\\r\\n>␠\\r\\n>␠\\r\\n>␠Total␠progress:␠0it␠[00:00,␠?it/s]loading␠Lora␠/content/stable-diffusion-webu… | \|it\| | \|it\| |
| will | text/word | 9946 | 39784 | 0.468724 | 0.575346 | -0.106622 | -4241.866338 | paloma/m2d2_s2orc_unsplit | …rips␠are␠parralel,␠the␠sharing␠of␠induced␠charge␠between␠will␠be␠constant,␠and␠will␠not␠depend␠on␠the␠position␠along␠t… | \|…will\| | \|…will\| |
| an | text/word | 13331 | 26662 | 1.286056 | 1.439730 | -0.153674 | -4097.268286 | fineweb2_multilingual/fra_Latn | …␠millions␠de␠smartphones␠avec␠son␠Windows␠Phone␠8␠d'ici␠1␠an.⏎Steve␠Ballmer,␠CEO␠de␠Microsoft␠et␠Stephan␠Elop,␠CEO␠de␠… | \|…an\| | \|…an\| |
| you | text/word | 15153 | 45459 | 0.392701 | 0.480510 | -0.087809 | -3991.706605 | fineweb2_multilingual/urd_Arab | …وگی۔⏎COM␠+␠کیا␠ہے؟⏎dllhost.exe␠کیا␠کرتا␠ہے␠کو␠سمجھنے␠کے␠ل␠you␠،␠آپ␠کو␠سمجھنے␠کی␠ضرورت␠ہے␠کہ␠COM␠+␠سروس␠کیا␠ہے۔␠اجزاء␠آ… | \|…you\| | \|…you\| |
| CHEMBL | text/word | 3923 | 23538 | 0.569711 | 0.738314 | -0.168603 | -3968.577771 | bio_chem/chembl/chembl_sdf | …␠0⏎␠15␠16␠␠1␠␠0⏎M␠␠END⏎>␠<chembl_id>⏎CHEMBL441948⏎⏎$$$$⏎CHEMBL442894⏎␠␠␠␠␠RDKit␠␠␠␠␠␠␠␠␠␠2D⏎⏎␠20␠22␠␠0␠␠0␠␠0␠␠0␠␠0␠␠0␠… | \|CHE\|MB\|L\| | \|CHE\|MB\|L\| |
| Content-Length | text/word | 899 | 12586 | 0.250502 | 0.542301 | -0.291799 | -3672.586694 | raw_web_markup/common_crawl/warc | …ID:␠<urn:uuid:5010ddbc-5cb0-4bef-9781-3ffbace45828>⏎Content-Length:␠73032⏎Content-Type:␠application/http;␠msgtype=resp… | \|Content\|-Length\| | \|Content\|-Length\| |
| there | text/word | 5286 | 26430 | 0.564628 | 0.702873 | -0.138246 | -3653.831596 | paloma/mc4 | …s␠seem␠to␠work␠against␠you␠actually.␠Observe␠simple␠fact␠there␠are␠individuals␠who␠will␠allow␠you␠to␠reconstruct␠your␠… | \|…there\| | \|…there\| |
| sex | text/word | 1827 | 5481 | 0.885241 | 1.528369 | -0.643128 | -3524.983270 | fineweb2_multilingual/nob_Latn | …ts␠oslo␠Free␠Cam␠Girls␠Eskorte␠Damer␠Oslo...␠bangali␠ekte␠sex␠live␠chat␠api␠gratis⏎Eskorte␠kristiansund␠escort␠service… | \|…sex\| | \|…sex\| |
| svg | text/word | 2445 | 7335 | 1.614912 | 2.082034 | -0.467121 | -3426.335336 | long_tail_ppl_runnable/web_markup_image_text/svg_stack_test | …75,88.45833333333333L75.0234375,92.625"␠id="edge0"␠class="relation"␠marker-start="url(#dependencyStart)"></path></svg> | \|svg\| | \|svg\| |
| PUBCHEM_SMILES | text/word | 849 | 11886 | 0.327832 | 0.609829 | -0.281997 | -3351.815663 | bio_chem/pubchem/pubchem_sdf | …LA>⏎C2H5NO3⏎⏎>␠<PUBCHEM_MOLECULAR_WEIGHT>⏎91.07⏎⏎>␠<PUBCHEM_SMILES>⏎C(C(=O)O)ON⏎⏎>␠<PUBCHEM_CONNECTIVITY_SMILES>⏎C(C(=… | \|P\|UB\|CHE\|M\|_SM\|ILES\| | \|P\|UB\|CHE\|M\|_SM\|ILES\| |
| image_id | text/word | 775 | 6200 | 1.762071 | 2.287478 | -0.525407 | -3257.522195 | raw_web_markup/ocr_vqa/book_metadata_validation | …rry␠PhD␠␠RN␠␠PNP-BC␠␠FAAN",␠"genre":␠"Medical␠Books",␠"image_id":␠"032305353X",␠"image_url":␠"http://ecx.images-amazon… | \|image\|_id\| | \|image\|_id\| |
| his | text/word | 9669 | 29007 | 0.498124 | 0.609093 | -0.110968 | -3218.859054 | lm_eval/gsm8k_train | …iam␠were␠invited␠to␠a␠party.␠David␠broke␠2␠glasses,␠while␠his␠friend␠William␠broke␠4␠times␠the␠number␠of␠glasses␠David… | \|…his\| | \|…his\| |
| were | text/word | 7433 | 29732 | 0.397938 | 0.506196 | -0.108258 | -3218.720586 | lm_eval/gsm8k_train | …lant␠today?⏎A:␠There␠are␠15␠trees␠originally.␠Then␠there␠were␠21␠trees␠after␠some␠more␠were␠planted.␠So␠there␠must␠hav… | \|…were\| | \|…were\| |
| WARC-Header-Length | text/word | 208 | 3744 | 0.492451 | 1.338129 | -0.845678 | -3166.218092 | raw_web_markup/common_crawl/wat | …RQNBH5IQY3WNFGJO67ZLEKXVAE"},"Format":"WARC/1.0","WARC-Header-Length":"445","WARC-Header-Metadata":{"WARC-Type":"reque… | \|WAR\|C\|-\|Header\|-Length\| | \|WAR\|C\|-\|Header\|-Length\| |
| ���� | text/non_ascii | 5409 | 64908 | 0.397996 | 0.446103 | -0.048108 | -3122.566944 | diagnostic_logs/ghalogs_issue_5093_holdout | …��RԞkj�:��$��{w2uIj�Fs/u'5������n..A��X/A�I�%�C�>�n�-Im����RԜ�NM/u'����_{�;⇥�$�vĘw3fIj��Q��RԂ�睜X�Zz��$X�:����d���… | \|����\| | \|����\| |
| şi | text/non_ascii_word | 951 | 2853 | 0.828680 | 1.913490 | -1.084810 | -3094.963422 | fineweb2_multilingual/ron_Latn | …ne␠afectează␠sănătatea␠aici:␠Viață␠sănătoasă␠partea␠1.␠Ah␠şi␠dacă␠vă␠interesează␠mâncarea␠de␠calitate,␠citiţi␠şi␠asta:… | \|…şi\| | \|…şi\| |
| ### | text/punctuation | 4369 | 13107 | 0.600461 | 0.829340 | -0.228878 | -2999.909257 | gh_archive_structured_output/IssuesEvent | …h␠achieves␠state-of-the-art␠performance␠on␠this␠dataset.\\n###␠LF␠Tracy:␠A␠Unified␠Single-Pipeline␠Approach␠for␠Salient… | \|###\| | \|###\| |
| and | text/word | 94793 | 284379 | 0.567046 | 0.577233 | -0.010187 | -2896.995307 | paloma/redpajama | …␠entry␠was␠posted␠on␠Tuesday,␠July␠14th,␠2009␠at␠10:25␠pm⇥and␠is␠filed␠under␠Celebs␠with␠Macs.␠You␠can␠follow␠any␠resp… | \|…and\| | \|…and\| |
| b | text/word | 16433 | 16433 | 2.853316 | 3.019405 | -0.166088 | -2729.327420 | gh_archive_structured_output/PullRequestEvent | …2ac2cf</a>)</li>\\n</ul>\\n␠␠␠␠␠␠</li>\\n␠␠␠␠␠␠<li>\\n␠␠␠␠␠␠␠␠<b>4.2.10</b>␠-␠<a␠href=\\"https://snyk.io/redirect/github/ma… | \|b\| | \|b\| |
| WARC-Refers-To | text/word | 255 | 3570 | 0.296365 | 1.055160 | -0.758795 | -2708.897495 | raw_web_markup/common_crawl/wat | …ID:␠<urn:uuid:2b8d06f1-789f-4fe8-8286-671f53aafc63>⏎WARC-Refers-To:␠<urn:uuid:59d42c30-ec86-4abc-bac5-e412705592ca>⏎Co… | \|WAR\|C\|-\|Ref\|ers\|-To\| | \|WAR\|C\|-\|Ref\|ers\|-To\| |
| one | text/word | 7018 | 21054 | 0.962760 | 1.090557 | -0.127797 | -2690.647693 | paloma/m2d2_s2orc_unsplit | …d␠for␠the␠measurments␠with␠all␠strips␠grounded␠around␠the␠one␠which␠capacitance␠was␠measured.␠Experimental␠results␠are… | \|…one\| | \|…one\| |
| all | text/word | 7927 | 23781 | 0.939847 | 1.052603 | -0.112756 | -2681.450990 | paloma/falcon-refinedweb | …to␠understand␠and␠follow␠through␠on␠is␠key␠to␠good␠health␠all␠through␠your␠life.␠We␠can␠help.␠Make␠the␠Osteopathic␠app… | \|…all\| | \|…all\| |
| PUBCHEM_COMPOUND_CANONICALIZED | text/word | 849 | 25470 | 0.349189 | 0.454302 | -0.105112 | -2677.213296 | bio_chem/pubchem/pubchem_sdf | …␠␠0⏎M␠␠END⏎>␠<PUBCHEM_COMPOUND_CID>⏎374⏎⏎>␠<PUBCHEM_COMPOUND_CANONICALIZED>⏎1⏎⏎>␠<PUBCHEM_CACTVS_COMPLEXITY>⏎325⏎⏎>␠<P… | \|P\|UB\|CHE\|M\|_COM\|PO\|UND\|_CAN\|ON\|ICAL\|IZED\| | \|P\|UB\|CHE\|M\|_COM\|PO\|UND\|_CAN\|ON\|ICAL\|IZED\| |
| WARC | text/word | 722 | 2888 | 1.247644 | 2.171046 | -0.923402 | -2666.784992 | raw_web_markup/common_crawl/wat | …gest":"sha1:NJ54OIUY2CGGB3GCR54TBHCTDFWYBEEJ"},"Format":"WARC/1.0","WARC-Header-Length":"663","WARC-Header-Metadata":{… | \|WAR\|C\| | \|WAR\|C\| |
| your | text/word | 6857 | 27428 | 0.449087 | 0.545592 | -0.096505 | -2646.939941 | fineweb2_multilingual/isl_Latn | …␠manna␠gera␠hið␠sama!⏎Personal␠tools⏎For␠the␠public:⏎Ask␠your␠question⏎Press␠room⏎The␠EEA␠Web␠CMS␠works␠best␠with␠foll… | \|…your\| | \|…your\| |
| ����� | text/non_ascii | 2275 | 34125 | 0.432196 | 0.505805 | -0.073609 | -2511.899919 | diagnostic_logs/ghalogs_issue_5093_holdout | …Ta(/��ݕ�ǻ���ma����9%n���w'��d0U��wGb0�9�����73��s⏎�����ni<�8o����eW�;��k)���HO����Xi������r3�L[��Ϛ�j��s��… | \|����\|�\| | \|����\|�\| |
| its | text/word | 4699 | 14097 | 0.852298 | 1.026547 | -0.174249 | -2456.385843 | paloma/redpajama | …responders␠were␠created␠for␠marketers.␠Their␠thinking␠has␠its␠limits␠and␠I␠send␠emails␠although␠I’ve␠nothing␠against␠m… | \|…its\| | \|…its\| |
| which | text/word | 9358 | 46790 | 0.535671 | 0.587235 | -0.051564 | -2412.681027 | paloma/falcon-refinedweb | …nd␠and␠you'll␠acquire␠separate␠recommendation␠about␠what␠which␠suggests␠along␠with␠a␠separate␠funding␠settlement.␠Ther… | \|…which\| | \|…which\| |
