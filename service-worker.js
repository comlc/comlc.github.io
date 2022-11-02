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

var precacheConfig = [["D:/workspace/project/comlc-blog/public/2018/03/02/Ubuntu子系统安装Websphere8.5.5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/2018/03/18/Windows下编译SQLCipher源码/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/2018/03/19/SQLCipher-JDBC编译打包/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/2018/03/24/AndroidStudio上传SVN项目/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/2018/10/20/MyBatis简介/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/2018/10/30/记一次重装系统/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/2018/11/20/VS2017开发跨平台C++项目/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/2018/11/23/OpenCV4源码编译与使用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/2018/11/24/Tesseract-OCR4源码编译与使用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/2019/08/20/Docker使用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/2019/10/20/APM全链路监控/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/2020/11/20/Nacos编译与部署/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/2021/03/08/Win10+WSL2+Docker/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/2021/04/20/Frp内网穿透/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/2022/06/20/Electron使用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/404.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/404/demo.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/2018/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/2018/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/2018/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/2018/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/2019/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/2019/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/2019/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/2020/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/2020/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/2021/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/2021/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/2021/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/2022/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/2022/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/archives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/assets/algolia/algoliasearch.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/assets/algolia/algoliasearch.min.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/assets/algolia/algoliasearchLite.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/assets/algolia/algoliasearchLite.min.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/background/bg-1.jpg","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/categories/Android/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/categories/Android/其他相关/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/categories/JavaEE/MyBatis相关/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/categories/JavaEE/MyBatis相关/功能篇/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/categories/JavaEE/SQlite相关/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/categories/JavaEE/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/categories/其他/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/categories/其他/开发环境/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/categories/前端/Electron/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/categories/前端/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/categories/微服务/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/categories/微服务/全链路监控/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/categories/微服务/服务注册与发现/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/categories/微服务/部署环境/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/css/index.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/MyBatis/main.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/SQLCipher/MinGW.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/SQLCipher/SQLCipherTest-Menu.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/SQLCipher/setting1.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/SQLCipher/setting2.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/SQLCipher/setting3.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/SQLCipherJdbc/img1.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/SQLCipherJdbc/img2.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/SQLCipherJdbc/img3.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/SQLCipherJdbc/img4.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/SQLCipherJdbc/img5.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/SQLCipherJdbc/img6.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img1.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img10.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img11.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img12.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img13.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img2.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img3.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img4.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img5.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img6.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img7.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img8.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/WinUbuntu/img9.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/algolia.svg","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/avatar.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/cmake/buildLinux.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/cmake/cmakeCfg.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/cmake/makeLinux.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/cmake/makeTest.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/cmake/newCMake.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/cmake/projectDir.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/docker/img1.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/docker/img2.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/docker/img3.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/docker/img4.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/nacos/nacos-module.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/nacos/nacos1.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/nacos/nacos2.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/nacos/nacos3.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/opencv/linux-cmake1.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/opencv/linux-make2.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/opencv/linux-make3.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/opencv/win-cmake1.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/opencv/win-cmake2.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/opencv/win-vs.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/skywalking/img1.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/skywalking/img2.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/skywalking/img3.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/skywalking/img4.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/skywalking/img5.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/skywalking/img6.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/tesseract/OpenMP-Support.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/tesseract/check-leptonica.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/tesseract/cppan.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/tesseract/error.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/tesseract/leptonica-autogen.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/tesseract/leptonica-configure.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/tesseract/leptonica-install.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/tesseract/leptonica-make.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/tesseract/tesseract-configure.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/img/wsl/wsl.png","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/copy.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/fancybox.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/head.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/scroll.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/search/algolia.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/search/local-search.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/sidebar.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/third-party/anime.min.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/third-party/jquery.fancybox.min.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/third-party/jquery.min.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/head.min.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/highlight.min.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/markdown.min.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/marked.min.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/math.min.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/notes.min.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/reveal.min.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/third-party/reveal/zoom.min.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/third-party/velocity.min.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/third-party/velocity.ui.min.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/transition.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/js/utils.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/APM/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/AndroidStudio/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/CMake/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/DLL编译/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/Docker/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/Electron/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/Frp/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/MSYS2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/MinGW/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/MyBatis/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/Nacos/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/Node/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/OCR/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/OpenCV/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/OpenSSL/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/SQLCipher-JDBC/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/SQLCipher/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/SVN/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/Tesseract/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/Ubuntu/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/VS2017/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/Visual-Studio/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/WSL2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/Websphere/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/npm/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/windows安装/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/windows开发环境/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/全链路监控/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/内网穿透/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/服务注册与发现/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspace/project/comlc-blog/public/tags/服务配置中心/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







