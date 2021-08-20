/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/icome/private/comlc-blog/public/2018/03/02/Ubuntu子系统安装Websphere8.5.5/index.html","d60f3335ce779b99e851dcd4c65eb45e"],["D:/icome/private/comlc-blog/public/2018/03/18/Windows下编译SQLCipher源码/index.html","debfe73a09cfd8b87d92557871e89364"],["D:/icome/private/comlc-blog/public/2018/03/19/SQLCipher-JDBC编译打包/index.html","9612da91316203ac7335579b042aeb81"],["D:/icome/private/comlc-blog/public/2018/03/24/AndroidStudio上传SVN项目/index.html","ce3e46f6e7b9b60fb7736921b0c2ced3"],["D:/icome/private/comlc-blog/public/2018/10/20/MyBatis简介/index.html","ac0edd7ef5c8db02a189fb141ba9c945"],["D:/icome/private/comlc-blog/public/2018/10/30/记一次重装系统/index.html","782f01d6377095b4352890eca992321e"],["D:/icome/private/comlc-blog/public/2018/11/20/VS2017开发跨平台C++项目/index.html","9addb3e31cc6a66ee0acf5c47781ec14"],["D:/icome/private/comlc-blog/public/2018/11/23/OpenCV4源码编译与使用/index.html","8057b2dd3f3a2535ea9978ab4e5ac3f8"],["D:/icome/private/comlc-blog/public/2018/11/24/Tesseract-OCR4源码编译与使用/index.html","888c41df5d24c61f3bca044c18f396fd"],["D:/icome/private/comlc-blog/public/2019/08/20/Docker使用/index.html","fdb4e90ce803100a76d5b0615560ed96"],["D:/icome/private/comlc-blog/public/2019/10/20/APM全链路监控/index.html","04b04417a215c2e1d26b57afab6ba5c6"],["D:/icome/private/comlc-blog/public/2020/11/20/Nacos编译与部署/index.html","69f232a19bce11acf827f3ded028a874"],["D:/icome/private/comlc-blog/public/2021/03/08/Win10+WSL2+Docker/index.html","05128521be40baa197559d6592cdd0df"],["D:/icome/private/comlc-blog/public/2021/04/20/Frp内网穿透/index.html","acdb126a90381cab847b967369b935a7"],["D:/icome/private/comlc-blog/public/404.html","b0a14e870a979201c79625da27f48bfa"],["D:/icome/private/comlc-blog/public/404/demo.html","c6c2d434493c5169001fc13563141b4c"],["D:/icome/private/comlc-blog/public/about/index.html","775fb399fb52721802b7c8aefd18c67d"],["D:/icome/private/comlc-blog/public/archives/2018/03/index.html","b9aed787e5090e7b7497201900dc4226"],["D:/icome/private/comlc-blog/public/archives/2018/10/index.html","cc3dcb7ae379141cb4b5f6f48a84e048"],["D:/icome/private/comlc-blog/public/archives/2018/11/index.html","c2f28a6ddd805123c8dda850a161683f"],["D:/icome/private/comlc-blog/public/archives/2018/index.html","9e9fd502287e3f0ded256e79d978bd3c"],["D:/icome/private/comlc-blog/public/archives/2019/08/index.html","4fcfc5de64689c3653136852344a2cc1"],["D:/icome/private/comlc-blog/public/archives/2019/10/index.html","24d649bd5e1f78ae7ecfaff3fc7a1583"],["D:/icome/private/comlc-blog/public/archives/2019/index.html","c4bde5c3b54992e07daa5df6fba379a3"],["D:/icome/private/comlc-blog/public/archives/2020/11/index.html","e4b066002ff6b7e9aa59a15acca948e8"],["D:/icome/private/comlc-blog/public/archives/2020/index.html","b56fdfa7067d987f7df2006dd6d4c0db"],["D:/icome/private/comlc-blog/public/archives/2021/03/index.html","bb31b3bb68e16e9244909867dc4a5237"],["D:/icome/private/comlc-blog/public/archives/2021/04/index.html","10ec42969fca89eecf94d289fc693629"],["D:/icome/private/comlc-blog/public/archives/2021/index.html","60a532f2d84f80673e7cc8b54c72b8e5"],["D:/icome/private/comlc-blog/public/archives/index.html","9bd8b83824aaeffa25c2a09ebaed270a"],["D:/icome/private/comlc-blog/public/archives/page/2/index.html","729bfb5f6892efdc3e87368aa4b007e5"],["D:/icome/private/comlc-blog/public/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["D:/icome/private/comlc-blog/public/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["D:/icome/private/comlc-blog/public/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["D:/icome/private/comlc-blog/public/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["D:/icome/private/comlc-blog/public/background/bg-1.jpg","8f2378aa178f826886f95e360929f8d8"],["D:/icome/private/comlc-blog/public/categories/Android/index.html","3c94d804c85eb6e8afa6ad653eb663e3"],["D:/icome/private/comlc-blog/public/categories/Android/其他相关/index.html","4195fe14348401805a8fc100febfca7a"],["D:/icome/private/comlc-blog/public/categories/JavaEE/MyBatis相关/index.html","1da98013545c25d6616a94b75c215c9c"],["D:/icome/private/comlc-blog/public/categories/JavaEE/MyBatis相关/功能篇/index.html","7a00e8250a5a31575e199b9934a94756"],["D:/icome/private/comlc-blog/public/categories/JavaEE/SQlite相关/index.html","750bfc31588549139d91fce762130d5d"],["D:/icome/private/comlc-blog/public/categories/JavaEE/index.html","cda947d807cacdc5f52ed559e435003e"],["D:/icome/private/comlc-blog/public/categories/index.html","bf34832144eec333d8abe92a6c7ff9f8"],["D:/icome/private/comlc-blog/public/categories/其他/index.html","dd847f497919ecea2ad1135f93ab2cf5"],["D:/icome/private/comlc-blog/public/categories/其他/开发环境/index.html","b5fd16e80565a021a64adfe515dcfe31"],["D:/icome/private/comlc-blog/public/categories/微服务/index.html","53c1dbe9b1ff9134b8e7e7c49f6c9a13"],["D:/icome/private/comlc-blog/public/categories/微服务/全链路监控/index.html","50fcae0d434e672d19f94aa2aeca994a"],["D:/icome/private/comlc-blog/public/categories/微服务/服务注册与发现/index.html","a9d517ae2271bacfa08b2981301a6bab"],["D:/icome/private/comlc-blog/public/categories/微服务/部署环境/index.html","5ff01b07d0ed68d955dc25895ee0b730"],["D:/icome/private/comlc-blog/public/css/index.css","3a8d059c88f502b4b5090db260c26fbe"],["D:/icome/private/comlc-blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/icome/private/comlc-blog/public/img/MyBatis/main.png","554b4d547056d57992a1f62211680d5d"],["D:/icome/private/comlc-blog/public/img/SQLCipher/MinGW.png","d12699a089058fec4d71aaec5a5a0bdb"],["D:/icome/private/comlc-blog/public/img/SQLCipher/SQLCipherTest-Menu.png","49df3216a90a308c114bdb10d181036d"],["D:/icome/private/comlc-blog/public/img/SQLCipher/setting1.png","4fa4165bf4abb339f0544280e82a790a"],["D:/icome/private/comlc-blog/public/img/SQLCipher/setting2.png","bcb2ff22ef361b78243fd077b6289249"],["D:/icome/private/comlc-blog/public/img/SQLCipher/setting3.png","00e4d48361a8b691fc62c5bb2ff066f1"],["D:/icome/private/comlc-blog/public/img/SQLCipherJdbc/img1.png","e95bb929d33d609d7eb97cea45b89230"],["D:/icome/private/comlc-blog/public/img/SQLCipherJdbc/img2.png","bc1579460d59edd995eb9a279f522d70"],["D:/icome/private/comlc-blog/public/img/SQLCipherJdbc/img3.png","398c3beec326164164997d49e261f4a5"],["D:/icome/private/comlc-blog/public/img/SQLCipherJdbc/img4.png","8331a26fc985707693b662525f757fcf"],["D:/icome/private/comlc-blog/public/img/SQLCipherJdbc/img5.png","a72f1a9ee9931e5e97a6900211b38dc7"],["D:/icome/private/comlc-blog/public/img/SQLCipherJdbc/img6.png","b58aec150ce7ffe0fb6c38375c0023e3"],["D:/icome/private/comlc-blog/public/img/WinUbuntu/img1.png","e50c646e22e7cdd8ee3eb06bd18aff30"],["D:/icome/private/comlc-blog/public/img/WinUbuntu/img10.png","943fbda9bda5ab204858214ded87ab59"],["D:/icome/private/comlc-blog/public/img/WinUbuntu/img11.png","2b03ca0f40476c365492c667714e8c63"],["D:/icome/private/comlc-blog/public/img/WinUbuntu/img12.png","382b8275e576b836c80e22b9aa998d4d"],["D:/icome/private/comlc-blog/public/img/WinUbuntu/img13.png","92f87b8028c65c2ed7adcbf3adc43569"],["D:/icome/private/comlc-blog/public/img/WinUbuntu/img2.png","2f3836dd4299f058d7ceacc9d350a5fd"],["D:/icome/private/comlc-blog/public/img/WinUbuntu/img3.png","99b092c98d7e78610e77aab48ac81a7b"],["D:/icome/private/comlc-blog/public/img/WinUbuntu/img4.png","c9b88d8048931af3643f4ba0259f9812"],["D:/icome/private/comlc-blog/public/img/WinUbuntu/img5.png","506ae1e5fe00dee1a2801272a137031a"],["D:/icome/private/comlc-blog/public/img/WinUbuntu/img6.png","4621eeba7ef9cfedb369a4644b2eefc8"],["D:/icome/private/comlc-blog/public/img/WinUbuntu/img7.png","fc615605edfb1a2810fd0c7aff2ecbde"],["D:/icome/private/comlc-blog/public/img/WinUbuntu/img8.png","0af2ffc5a6feafdfe086a31d7a20c29e"],["D:/icome/private/comlc-blog/public/img/WinUbuntu/img9.png","a765c14086adb9d681212865ff823a71"],["D:/icome/private/comlc-blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/icome/private/comlc-blog/public/img/avatar.png","62a4b9369e2b161497278f5f4ff18bc7"],["D:/icome/private/comlc-blog/public/img/cmake/buildLinux.png","26f90db98298150b8691e312757bedad"],["D:/icome/private/comlc-blog/public/img/cmake/cmakeCfg.png","1056fefc9da35397e09c998b2e734ce3"],["D:/icome/private/comlc-blog/public/img/cmake/makeLinux.png","2eb4449376aa3b01b9ad1a10594f4f7c"],["D:/icome/private/comlc-blog/public/img/cmake/makeTest.png","f7c12643755ec51a46cb51ce76aee6af"],["D:/icome/private/comlc-blog/public/img/cmake/newCMake.png","18a888077439966db9c3e13c8e34996c"],["D:/icome/private/comlc-blog/public/img/cmake/projectDir.png","58fef6393cd1b0e1821f962837038dfe"],["D:/icome/private/comlc-blog/public/img/docker/img1.png","804ffaf21768704507d72884e75aa2aa"],["D:/icome/private/comlc-blog/public/img/docker/img2.png","f57a2a42843c50aeb0f49a168428be97"],["D:/icome/private/comlc-blog/public/img/docker/img3.png","d8c4c84bf1ab8e76ca3f06b938ae8a01"],["D:/icome/private/comlc-blog/public/img/docker/img4.png","87d0498f62fcc72567b3e1cc31156a94"],["D:/icome/private/comlc-blog/public/img/nacos/nacos-module.png","fdc6e9558818ef89f2b491abc38a143b"],["D:/icome/private/comlc-blog/public/img/nacos/nacos1.png","beca24fd8bf1fe19902a5541c39153b5"],["D:/icome/private/comlc-blog/public/img/nacos/nacos2.png","e10e73fd99c469268990e0ed460edf2e"],["D:/icome/private/comlc-blog/public/img/nacos/nacos3.png","3dbcfe0d66deff817610ed31278a115b"],["D:/icome/private/comlc-blog/public/img/opencv/linux-cmake1.png","8b23b1f4d2e5cbbb8e87a6074d923024"],["D:/icome/private/comlc-blog/public/img/opencv/linux-make2.png","a069221778d9f4c543b785506c300c5e"],["D:/icome/private/comlc-blog/public/img/opencv/linux-make3.png","f0bc5ffa1b6e7197505334f1063cf79f"],["D:/icome/private/comlc-blog/public/img/opencv/win-cmake1.png","5f89ffbca4d9f20507550530cf83db50"],["D:/icome/private/comlc-blog/public/img/opencv/win-cmake2.png","8ae28e7b8177130e4f85b62b318c27e9"],["D:/icome/private/comlc-blog/public/img/opencv/win-vs.png","d5d8bde1e0456ae986178ab9be1255ed"],["D:/icome/private/comlc-blog/public/img/skywalking/img1.png","4c1a56ecd002f5a6294ba319b02afd11"],["D:/icome/private/comlc-blog/public/img/skywalking/img2.png","8168398de81a50fa77c537fddce63e89"],["D:/icome/private/comlc-blog/public/img/skywalking/img3.png","86c2bc4330725af146452afb6f11a226"],["D:/icome/private/comlc-blog/public/img/skywalking/img4.png","df526fe007fbad50f10b6f09f3863fff"],["D:/icome/private/comlc-blog/public/img/skywalking/img5.png","bb8a0db2acc024387f4cce5dd5338cc9"],["D:/icome/private/comlc-blog/public/img/skywalking/img6.png","be7205ca7e6216077f66814e8d8e50da"],["D:/icome/private/comlc-blog/public/img/tesseract/OpenMP-Support.png","ad11c332ac789ad49cd10ab1df50f731"],["D:/icome/private/comlc-blog/public/img/tesseract/check-leptonica.png","b505262c2617aed3940cf0fb687d641a"],["D:/icome/private/comlc-blog/public/img/tesseract/cppan.png","f02629eb8bd6fbfaf7a4164eed84d262"],["D:/icome/private/comlc-blog/public/img/tesseract/error.png","507654697ccbd635c8c5174d4891f79d"],["D:/icome/private/comlc-blog/public/img/tesseract/leptonica-autogen.png","41b92a75ff427cd9c84d27f398a29399"],["D:/icome/private/comlc-blog/public/img/tesseract/leptonica-configure.png","24c18f894bb4722912a639215dc5ef6b"],["D:/icome/private/comlc-blog/public/img/tesseract/leptonica-install.png","ea0e5c79f10527f30b94ffbbe9e8f772"],["D:/icome/private/comlc-blog/public/img/tesseract/leptonica-make.png","7ee7d0a6b57afdc3b3b6f3123710a5b6"],["D:/icome/private/comlc-blog/public/img/tesseract/tesseract-configure.png","bac52548361297d7cd665791ba355bb9"],["D:/icome/private/comlc-blog/public/img/wsl/wsl.png","4dc4e40f85499479cd53f1f26570e4a6"],["D:/icome/private/comlc-blog/public/index.html","503e982b28f664c9e0d9d2d84d6c9d84"],["D:/icome/private/comlc-blog/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["D:/icome/private/comlc-blog/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["D:/icome/private/comlc-blog/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["D:/icome/private/comlc-blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/icome/private/comlc-blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/icome/private/comlc-blog/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["D:/icome/private/comlc-blog/public/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["D:/icome/private/comlc-blog/public/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["D:/icome/private/comlc-blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/icome/private/comlc-blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/icome/private/comlc-blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/icome/private/comlc-blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/icome/private/comlc-blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/icome/private/comlc-blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/icome/private/comlc-blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/icome/private/comlc-blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/icome/private/comlc-blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/icome/private/comlc-blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/icome/private/comlc-blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/icome/private/comlc-blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/icome/private/comlc-blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/icome/private/comlc-blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/icome/private/comlc-blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/icome/private/comlc-blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/icome/private/comlc-blog/public/page/2/index.html","6fb22430d0c1b2dce532d4e4737c34b1"],["D:/icome/private/comlc-blog/public/tags/APM/index.html","1c6c25486321b0ddf43da1d1a61b31c8"],["D:/icome/private/comlc-blog/public/tags/AndroidStudio/index.html","caf60036eb16dcc42d97d7c022fd5721"],["D:/icome/private/comlc-blog/public/tags/CMake/index.html","2f1b86b3910ed80cd50a2b7a83448d7c"],["D:/icome/private/comlc-blog/public/tags/DLL编译/index.html","e8dea7232dc1a770cd30e270892d72a7"],["D:/icome/private/comlc-blog/public/tags/Docker/index.html","db4b492dbf43358a4ecdf9260446a6c6"],["D:/icome/private/comlc-blog/public/tags/Frp/index.html","fa5e6c035c334eeaff5d497c0c26a180"],["D:/icome/private/comlc-blog/public/tags/MSYS2/index.html","683a1e96c1b26c940b2eb532fd475401"],["D:/icome/private/comlc-blog/public/tags/MinGW/index.html","66d2ac8974bbc4abdadc13d08893b5db"],["D:/icome/private/comlc-blog/public/tags/MyBatis/index.html","72b2e4ec87781853921e3dfc23a8e593"],["D:/icome/private/comlc-blog/public/tags/Nacos/index.html","2237f36ab3efc8459be286cfe26c518d"],["D:/icome/private/comlc-blog/public/tags/OCR/index.html","78e452cdc58b1795d4d74bc7b7fccd48"],["D:/icome/private/comlc-blog/public/tags/OpenCV/index.html","e83b03973ec10130538f0ccdab017643"],["D:/icome/private/comlc-blog/public/tags/OpenSSL/index.html","6afda7d7f0c9589f1e7a16853db4f2e8"],["D:/icome/private/comlc-blog/public/tags/SQLCipher-JDBC/index.html","4adde7f8f26a02cf31103548091576d6"],["D:/icome/private/comlc-blog/public/tags/SQLCipher/index.html","9cd6902754c085eab3984433195e172b"],["D:/icome/private/comlc-blog/public/tags/SVN/index.html","cc95fd54aa50290709249c22c588d8ea"],["D:/icome/private/comlc-blog/public/tags/Tesseract/index.html","90bb4e93cfffa7899ea612a78d8614be"],["D:/icome/private/comlc-blog/public/tags/Ubuntu/index.html","8ca2d3b40d2e09fe2fa5bf3deafac75c"],["D:/icome/private/comlc-blog/public/tags/VS2017/index.html","7ed88265533fb755315d0105bf1f8022"],["D:/icome/private/comlc-blog/public/tags/Visual-Studio/index.html","b7e211b8594f12e0be9e41ee35d0b577"],["D:/icome/private/comlc-blog/public/tags/WSL2/index.html","f32759b0d00bfa5a968a3e80261d17e3"],["D:/icome/private/comlc-blog/public/tags/Websphere/index.html","79984a56c021b967904768b49d3efc7f"],["D:/icome/private/comlc-blog/public/tags/index.html","a869bce47268cb6c456ffc857917ee0c"],["D:/icome/private/comlc-blog/public/tags/windows安装/index.html","e490ed6fb617a1480a177f8995ac0e18"],["D:/icome/private/comlc-blog/public/tags/windows开发环境/index.html","f60831355288f32780b421b380b8ebc7"],["D:/icome/private/comlc-blog/public/tags/全链路监控/index.html","94883898dd0a6c1fcaaa742a399493fe"],["D:/icome/private/comlc-blog/public/tags/内网穿透/index.html","8ee6128e72e0f11d0413d521497c73e4"],["D:/icome/private/comlc-blog/public/tags/服务注册与发现/index.html","bbdf44944dd33effb8d317999e9c6001"],["D:/icome/private/comlc-blog/public/tags/服务配置中心/index.html","b9075536bf78de738cf4472ef533196d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







