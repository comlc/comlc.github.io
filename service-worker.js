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

var precacheConfig = [["D:/workspace/project/comlc-blog/public/2018/03/02/Ubuntu子系统安装Websphere8.5.5/index.html","925b2dbfca5838c1b0cdcbd9c2b10dc8"],["D:/workspace/project/comlc-blog/public/2018/03/18/Windows下编译SQLCipher源码/index.html","d53a2e4fc1a37a5999394aa2883e93a2"],["D:/workspace/project/comlc-blog/public/2018/03/19/SQLCipher-JDBC编译打包/index.html","8c331ab964e20b64f01f3ee623900ff3"],["D:/workspace/project/comlc-blog/public/2018/03/24/AndroidStudio上传SVN项目/index.html","4736e777474e706963ec4434004f4577"],["D:/workspace/project/comlc-blog/public/2018/10/20/MyBatis简介/index.html","e17fefdd6b618ff14788f22a1a7d6443"],["D:/workspace/project/comlc-blog/public/2018/10/30/记一次重装系统/index.html","984ed91deb63ffaa5c0717c82e0a50d0"],["D:/workspace/project/comlc-blog/public/2018/11/20/VS2017开发跨平台C++项目/index.html","0c741a4ac550ede9b9041f551730eacb"],["D:/workspace/project/comlc-blog/public/2018/11/23/OpenCV4源码编译与使用/index.html","03df1061dea774e0ef5e3343cc876032"],["D:/workspace/project/comlc-blog/public/2018/11/24/Tesseract-OCR4源码编译与使用/index.html","731fa197fa5772fd656724177b0412d6"],["D:/workspace/project/comlc-blog/public/2019/08/20/Docker使用/index.html","4b5afc9cc27ede0c28293437ffc11783"],["D:/workspace/project/comlc-blog/public/2019/10/20/APM全链路监控/index.html","97e1e7807ef7a1c8082cdb1bc0bc22ff"],["D:/workspace/project/comlc-blog/public/2020/11/20/Nacos编译与部署/index.html","63af85f817df1a38d0381ea324e86ab8"],["D:/workspace/project/comlc-blog/public/2021/03/08/Win10+WSL2+Docker/index.html","63bb5c09355fd41aaa532eedfe515827"],["D:/workspace/project/comlc-blog/public/2021/04/20/Frp内网穿透/index.html","b40255dfa26a8a316d852827756e0f99"],["D:/workspace/project/comlc-blog/public/2022/06/20/Electron使用/index.html","8289f18d77fd0bacd7bd213e859a84ae"],["D:/workspace/project/comlc-blog/public/404.html","9184fd83570fb96ab366979af83be10a"],["D:/workspace/project/comlc-blog/public/404/demo.html","38a9039d605d2f79fcb65f56e29f0103"],["D:/workspace/project/comlc-blog/public/about/index.html","c87352b3d4cdb5d2371a8b5edfc3f6c1"],["D:/workspace/project/comlc-blog/public/archives/2018/03/index.html","c2106742d1b7baf72ed89ab82120ea9d"],["D:/workspace/project/comlc-blog/public/archives/2018/10/index.html","6fc1d2dad5e4854cb160fb0480330733"],["D:/workspace/project/comlc-blog/public/archives/2018/11/index.html","913cdd7a5ced5217549c7ff6852873f5"],["D:/workspace/project/comlc-blog/public/archives/2018/index.html","3642873be92e0f499fa8f6248bb048f3"],["D:/workspace/project/comlc-blog/public/archives/2019/08/index.html","5cd6881030e2cfac573475d4bb61791b"],["D:/workspace/project/comlc-blog/public/archives/2019/10/index.html","76701a49049a4bf3b886f7f32f72add3"],["D:/workspace/project/comlc-blog/public/archives/2019/index.html","56c487d6017cb6b29f0688bdda8df13a"],["D:/workspace/project/comlc-blog/public/archives/2020/11/index.html","63529415e16cf1c94eb5e69b2f656c85"],["D:/workspace/project/comlc-blog/public/archives/2020/index.html","c468217798d0b29399dc385526d7c30c"],["D:/workspace/project/comlc-blog/public/archives/2021/03/index.html","69e42880950278fa960ee2b1711f7ace"],["D:/workspace/project/comlc-blog/public/archives/2021/04/index.html","b0f1f08026f5ac56c39d23a96c1111c7"],["D:/workspace/project/comlc-blog/public/archives/2021/index.html","dab41addd9227ee98ddfd97c3bcb2098"],["D:/workspace/project/comlc-blog/public/archives/2022/06/index.html","3b383a79bd9a1d9f0411b76244dbc58e"],["D:/workspace/project/comlc-blog/public/archives/2022/index.html","41966c010d7ecffd3483626a5999187b"],["D:/workspace/project/comlc-blog/public/archives/index.html","e9da4cd2203f8ea9dac07d76fc48a632"],["D:/workspace/project/comlc-blog/public/archives/page/2/index.html","fcebe3885b7d6d4b320d32c71c62bd05"],["D:/workspace/project/comlc-blog/public/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["D:/workspace/project/comlc-blog/public/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["D:/workspace/project/comlc-blog/public/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["D:/workspace/project/comlc-blog/public/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["D:/workspace/project/comlc-blog/public/background/bg-1.jpg","8f2378aa178f826886f95e360929f8d8"],["D:/workspace/project/comlc-blog/public/categories/Android/index.html","a04935ad8dde649796bc11aae4e57fe3"],["D:/workspace/project/comlc-blog/public/categories/Android/其他相关/index.html","19292267846251f1d11beaaa79d3d04a"],["D:/workspace/project/comlc-blog/public/categories/JavaEE/MyBatis相关/index.html","c35b46b7723b4c985517d6498554cda8"],["D:/workspace/project/comlc-blog/public/categories/JavaEE/MyBatis相关/功能篇/index.html","94d6fd4a84195a50cbf528984df1df3e"],["D:/workspace/project/comlc-blog/public/categories/JavaEE/SQlite相关/index.html","ba9fb3e514f99dbda704f80aee32b1f7"],["D:/workspace/project/comlc-blog/public/categories/JavaEE/index.html","a3c8c3d3341e2d42454df299af16ea98"],["D:/workspace/project/comlc-blog/public/categories/index.html","bc7a65caf98e7aca1be54b61fdaa3ca3"],["D:/workspace/project/comlc-blog/public/categories/其他/index.html","d0736b9039fe884f6e2afa27c6373903"],["D:/workspace/project/comlc-blog/public/categories/其他/开发环境/index.html","42dc0f2702ad1b4c49b726f0d0a7c57e"],["D:/workspace/project/comlc-blog/public/categories/前端/Electron/index.html","fc4fc6b07ceacb65279a6e9939a63c4b"],["D:/workspace/project/comlc-blog/public/categories/前端/index.html","e17e4044c3fef4edce429b189bb638db"],["D:/workspace/project/comlc-blog/public/categories/微服务/index.html","a0c4a63caa9191d2809dc507a705bad9"],["D:/workspace/project/comlc-blog/public/categories/微服务/全链路监控/index.html","03c57a2dd7bdbff6d1d33ac791825b23"],["D:/workspace/project/comlc-blog/public/categories/微服务/服务注册与发现/index.html","42c927ec29e93672abbe00c4831b3b58"],["D:/workspace/project/comlc-blog/public/categories/微服务/部署环境/index.html","4488671742916baa6ff7b67039747b34"],["D:/workspace/project/comlc-blog/public/css/index.css","3a8d059c88f502b4b5090db260c26fbe"],["D:/workspace/project/comlc-blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/MyBatis/main.png","554b4d547056d57992a1f62211680d5d"],["D:/workspace/project/comlc-blog/public/img/SQLCipher/MinGW.png","d12699a089058fec4d71aaec5a5a0bdb"],["D:/workspace/project/comlc-blog/public/img/SQLCipher/SQLCipherTest-Menu.png","49df3216a90a308c114bdb10d181036d"],["D:/workspace/project/comlc-blog/public/img/SQLCipher/setting1.png","4fa4165bf4abb339f0544280e82a790a"],["D:/workspace/project/comlc-blog/public/img/SQLCipher/setting2.png","bcb2ff22ef361b78243fd077b6289249"],["D:/workspace/project/comlc-blog/public/img/SQLCipher/setting3.png","00e4d48361a8b691fc62c5bb2ff066f1"],["D:/workspace/project/comlc-blog/public/img/SQLCipherJdbc/img1.png","e95bb929d33d609d7eb97cea45b89230"],["D:/workspace/project/comlc-blog/public/img/SQLCipherJdbc/img2.png","bc1579460d59edd995eb9a279f522d70"],["D:/workspace/project/comlc-blog/public/img/SQLCipherJdbc/img3.png","398c3beec326164164997d49e261f4a5"],["D:/workspace/project/comlc-blog/public/img/SQLCipherJdbc/img4.png","8331a26fc985707693b662525f757fcf"],["D:/workspace/project/comlc-blog/public/img/SQLCipherJdbc/img5.png","a72f1a9ee9931e5e97a6900211b38dc7"],["D:/workspace/project/comlc-blog/public/img/SQLCipherJdbc/img6.png","b58aec150ce7ffe0fb6c38375c0023e3"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img1.png","e50c646e22e7cdd8ee3eb06bd18aff30"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img10.png","943fbda9bda5ab204858214ded87ab59"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img11.png","2b03ca0f40476c365492c667714e8c63"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img12.png","382b8275e576b836c80e22b9aa998d4d"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img13.png","92f87b8028c65c2ed7adcbf3adc43569"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img2.png","2f3836dd4299f058d7ceacc9d350a5fd"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img3.png","99b092c98d7e78610e77aab48ac81a7b"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img4.png","c9b88d8048931af3643f4ba0259f9812"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img5.png","506ae1e5fe00dee1a2801272a137031a"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img6.png","4621eeba7ef9cfedb369a4644b2eefc8"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img7.png","fc615605edfb1a2810fd0c7aff2ecbde"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img8.png","0af2ffc5a6feafdfe086a31d7a20c29e"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img9.png","a765c14086adb9d681212865ff823a71"],["D:/workspace/project/comlc-blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/workspace/project/comlc-blog/public/img/avatar.png","62a4b9369e2b161497278f5f4ff18bc7"],["D:/workspace/project/comlc-blog/public/img/cmake/buildLinux.png","26f90db98298150b8691e312757bedad"],["D:/workspace/project/comlc-blog/public/img/cmake/cmakeCfg.png","1056fefc9da35397e09c998b2e734ce3"],["D:/workspace/project/comlc-blog/public/img/cmake/makeLinux.png","2eb4449376aa3b01b9ad1a10594f4f7c"],["D:/workspace/project/comlc-blog/public/img/cmake/makeTest.png","f7c12643755ec51a46cb51ce76aee6af"],["D:/workspace/project/comlc-blog/public/img/cmake/newCMake.png","18a888077439966db9c3e13c8e34996c"],["D:/workspace/project/comlc-blog/public/img/cmake/projectDir.png","58fef6393cd1b0e1821f962837038dfe"],["D:/workspace/project/comlc-blog/public/img/docker/img1.png","804ffaf21768704507d72884e75aa2aa"],["D:/workspace/project/comlc-blog/public/img/docker/img2.png","f57a2a42843c50aeb0f49a168428be97"],["D:/workspace/project/comlc-blog/public/img/docker/img3.png","d8c4c84bf1ab8e76ca3f06b938ae8a01"],["D:/workspace/project/comlc-blog/public/img/docker/img4.png","87d0498f62fcc72567b3e1cc31156a94"],["D:/workspace/project/comlc-blog/public/img/nacos/nacos-module.png","fdc6e9558818ef89f2b491abc38a143b"],["D:/workspace/project/comlc-blog/public/img/nacos/nacos1.png","beca24fd8bf1fe19902a5541c39153b5"],["D:/workspace/project/comlc-blog/public/img/nacos/nacos2.png","e10e73fd99c469268990e0ed460edf2e"],["D:/workspace/project/comlc-blog/public/img/nacos/nacos3.png","3dbcfe0d66deff817610ed31278a115b"],["D:/workspace/project/comlc-blog/public/img/opencv/linux-cmake1.png","8b23b1f4d2e5cbbb8e87a6074d923024"],["D:/workspace/project/comlc-blog/public/img/opencv/linux-make2.png","a069221778d9f4c543b785506c300c5e"],["D:/workspace/project/comlc-blog/public/img/opencv/linux-make3.png","f0bc5ffa1b6e7197505334f1063cf79f"],["D:/workspace/project/comlc-blog/public/img/opencv/win-cmake1.png","5f89ffbca4d9f20507550530cf83db50"],["D:/workspace/project/comlc-blog/public/img/opencv/win-cmake2.png","8ae28e7b8177130e4f85b62b318c27e9"],["D:/workspace/project/comlc-blog/public/img/opencv/win-vs.png","d5d8bde1e0456ae986178ab9be1255ed"],["D:/workspace/project/comlc-blog/public/img/skywalking/img1.png","4c1a56ecd002f5a6294ba319b02afd11"],["D:/workspace/project/comlc-blog/public/img/skywalking/img2.png","8168398de81a50fa77c537fddce63e89"],["D:/workspace/project/comlc-blog/public/img/skywalking/img3.png","86c2bc4330725af146452afb6f11a226"],["D:/workspace/project/comlc-blog/public/img/skywalking/img4.png","df526fe007fbad50f10b6f09f3863fff"],["D:/workspace/project/comlc-blog/public/img/skywalking/img5.png","bb8a0db2acc024387f4cce5dd5338cc9"],["D:/workspace/project/comlc-blog/public/img/skywalking/img6.png","be7205ca7e6216077f66814e8d8e50da"],["D:/workspace/project/comlc-blog/public/img/tesseract/OpenMP-Support.png","ad11c332ac789ad49cd10ab1df50f731"],["D:/workspace/project/comlc-blog/public/img/tesseract/check-leptonica.png","b505262c2617aed3940cf0fb687d641a"],["D:/workspace/project/comlc-blog/public/img/tesseract/cppan.png","f02629eb8bd6fbfaf7a4164eed84d262"],["D:/workspace/project/comlc-blog/public/img/tesseract/error.png","507654697ccbd635c8c5174d4891f79d"],["D:/workspace/project/comlc-blog/public/img/tesseract/leptonica-autogen.png","41b92a75ff427cd9c84d27f398a29399"],["D:/workspace/project/comlc-blog/public/img/tesseract/leptonica-configure.png","24c18f894bb4722912a639215dc5ef6b"],["D:/workspace/project/comlc-blog/public/img/tesseract/leptonica-install.png","ea0e5c79f10527f30b94ffbbe9e8f772"],["D:/workspace/project/comlc-blog/public/img/tesseract/leptonica-make.png","7ee7d0a6b57afdc3b3b6f3123710a5b6"],["D:/workspace/project/comlc-blog/public/img/tesseract/tesseract-configure.png","bac52548361297d7cd665791ba355bb9"],["D:/workspace/project/comlc-blog/public/img/wsl/wsl.png","4dc4e40f85499479cd53f1f26570e4a6"],["D:/workspace/project/comlc-blog/public/index.html","9b1fa078bbaef28086da58dc0457a38f"],["D:/workspace/project/comlc-blog/public/js/copy.js","f4607057c0513bd07a69fcac08121979"],["D:/workspace/project/comlc-blog/public/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["D:/workspace/project/comlc-blog/public/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["D:/workspace/project/comlc-blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["D:/workspace/project/comlc-blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["D:/workspace/project/comlc-blog/public/js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["D:/workspace/project/comlc-blog/public/js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["D:/workspace/project/comlc-blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/workspace/project/comlc-blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/workspace/project/comlc-blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/workspace/project/comlc-blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/workspace/project/comlc-blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/workspace/project/comlc-blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/workspace/project/comlc-blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["D:/workspace/project/comlc-blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/workspace/project/comlc-blog/public/page/2/index.html","5ac0f8852951791b18e44bfe044419a9"],["D:/workspace/project/comlc-blog/public/tags/APM/index.html","71c707f9571e6b77276d10b7cdf250c6"],["D:/workspace/project/comlc-blog/public/tags/AndroidStudio/index.html","d3a2b9bba3fa94541990c55561e03100"],["D:/workspace/project/comlc-blog/public/tags/CMake/index.html","c58339f2b5283587517a2e9d1c581b28"],["D:/workspace/project/comlc-blog/public/tags/DLL编译/index.html","fdba6f56ba62a02d84b10f1378423c8e"],["D:/workspace/project/comlc-blog/public/tags/Docker/index.html","675dc31a5ffe2a573808472fb3730aa7"],["D:/workspace/project/comlc-blog/public/tags/Electron/index.html","78c7801d603ced15c3f097eee4470f5a"],["D:/workspace/project/comlc-blog/public/tags/Frp/index.html","06db50acb58ca620630714016b8d0f57"],["D:/workspace/project/comlc-blog/public/tags/MSYS2/index.html","5701fb77d614bf7d5db3a4beecdc9845"],["D:/workspace/project/comlc-blog/public/tags/MinGW/index.html","27a80bf0bbfabfdc23d4a8f9bdf95e1f"],["D:/workspace/project/comlc-blog/public/tags/MyBatis/index.html","7f9f948215dcb8d55dcbe8510ca6f058"],["D:/workspace/project/comlc-blog/public/tags/Nacos/index.html","f072cae555ed872bca9e5adddc6460b5"],["D:/workspace/project/comlc-blog/public/tags/Node/index.html","962b19fe84aad38d011af767a7a8efcc"],["D:/workspace/project/comlc-blog/public/tags/OCR/index.html","8eaea2353b30004d4fddc97084a8ad9a"],["D:/workspace/project/comlc-blog/public/tags/OpenCV/index.html","a610f8b1f0489793821b3521262a9163"],["D:/workspace/project/comlc-blog/public/tags/OpenSSL/index.html","dc47080dd40ff20776849e97db58ab28"],["D:/workspace/project/comlc-blog/public/tags/SQLCipher-JDBC/index.html","cbe317a4c6d7a82e20257e23835f90a2"],["D:/workspace/project/comlc-blog/public/tags/SQLCipher/index.html","aaf33e6fe2e786b50f6ae562e3eb9fd2"],["D:/workspace/project/comlc-blog/public/tags/SVN/index.html","a5deb98ce73ea858a4ccd742e62c3c2b"],["D:/workspace/project/comlc-blog/public/tags/Tesseract/index.html","49da08e7e1b6f6081ec5965b86eaa13f"],["D:/workspace/project/comlc-blog/public/tags/Ubuntu/index.html","e0912730092071942fcae8b7529fcac9"],["D:/workspace/project/comlc-blog/public/tags/VS2017/index.html","a158e5d9deb883294013a2f2ff7e7c2d"],["D:/workspace/project/comlc-blog/public/tags/Visual-Studio/index.html","72dacdbeca69c874e26e1e184b6e6b74"],["D:/workspace/project/comlc-blog/public/tags/WSL2/index.html","aad4146f574c68a74732961e44d96150"],["D:/workspace/project/comlc-blog/public/tags/Websphere/index.html","ca6f351a509e18277b048d9e90b92899"],["D:/workspace/project/comlc-blog/public/tags/index.html","f479b1e342b323c2e1595e0bb7317fc7"],["D:/workspace/project/comlc-blog/public/tags/npm/index.html","c400c39dffca90e648fca72149fd745d"],["D:/workspace/project/comlc-blog/public/tags/windows安装/index.html","76957506522bfb760154a4b854a90b25"],["D:/workspace/project/comlc-blog/public/tags/windows开发环境/index.html","83142549f31e972e6339633da3539cf2"],["D:/workspace/project/comlc-blog/public/tags/全链路监控/index.html","106624509d317e411e0b3d6264bd6020"],["D:/workspace/project/comlc-blog/public/tags/内网穿透/index.html","4bddf7e0877a186fcb28efe316ccbd7c"],["D:/workspace/project/comlc-blog/public/tags/服务注册与发现/index.html","a3bcd7f56cd3c02f38326da3b4115e2b"],["D:/workspace/project/comlc-blog/public/tags/服务配置中心/index.html","fd9c3e4698bba965d7117da1612b9ce8"]];
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







