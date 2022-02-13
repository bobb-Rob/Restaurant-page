/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\nhtml, body{\r\n    --red: #9E1D3B;\r\n    --yellow: #ECC75B;\r\n    --green: #4C6744;\r\n    --white: #fff;\r\n    height: 100%;\r\n    position: relative;\r\n    margin: 0px;   \r\n}\r\n\r\n#root, #hero-container{\r\n    height: 100%;\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":";AACA;IACI,cAAc;IACd,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB","sourcesContent":["\r\nhtml, body{\r\n    --red: #9E1D3B;\r\n    --yellow: #ECC75B;\r\n    --green: #4C6744;\r\n    --white: #fff;\r\n    height: 100%;\r\n    position: relative;\r\n    margin: 0px;   \r\n}\r\n\r\n#root, #hero-container{\r\n    height: 100%;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/home.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/home.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\r\n:root{\r\n    --backGround: rgb(20, 3, 5);\r\n}\r\n\r\n\r\n#home, #menu, #contact{  \r\n    padding-top: 80px;\r\n    height: 100%; \r\n    display: none;  \r\n    background-color: var(--white);\r\n}\r\n\r\n#home{\r\n    background-color: var(--white);\r\n    width: 100%;\r\n    justify-content: center;\r\n}\r\n\r\n/* #menu{\r\n    \r\n}\r\n#contact{\r\n    background-color: rgb(148, 32, 32);\r\n} */\r\n\r\n.now-displayed{\r\n    display: flex !important;\r\n}\r\n\r\n.home-caption{\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.home-background{  \r\n    height: 100%;\r\n    width: 95%;\r\n    /* border: 2px solid green; */\r\n    /* display: flex;*/\r\n    margin-top: 30px;\r\n   \r\n}\r\n\r\n.btn{\r\n    width: 100px;\r\n    height: 30px;\r\n    border-radius: 20px;\r\n    background-color: var(--red);\r\n    color: var(--white);\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.order-btn{\r\n    margin: 30px 0px 20px 0px;\r\n}\r\n\r\n.btn-holder{  \r\n    position: relative;\r\n}\r\n\r\n.slideshow-container {  \r\n  width: 100%;\r\n  height: 80%;\r\n  position: relative;\r\n  margin: auto;\r\n  /* border: 2px solid blue; */\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.mySlides {\r\n  display: none;\r\n  /* background-color: blueviolet; */\r\n  height: 100%;\r\n}\r\n\r\n.prev, .next {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: auto;\r\n    margin-top: -22px ;\r\n    padding: 16px;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    transition: 0.6s ease;\r\n    border-radius: 0 3px 3px 0;\r\n    user-select: none;\r\n}\r\n\r\n.next {\r\n    right: 0;\r\n    border-radius: 3px 0 0 3px;\r\n  }\r\n\r\n  .prev:hover, .next:hover {\r\n    background-color: var(--red);\r\n  }\r\n\r\n  .text{\r\n    color: rgb(255, 251, 251);\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    padding: 8px 12px;\r\n    position: absolute;\r\n    bottom: 8px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.dot {\r\n    cursor: pointer;\r\n    height: 14px;\r\n    width: 14px;\r\n    margin: 10px 2px;\r\n    /* border: 1px solid green; */\r\n    background-color: rgb(133, 130, 130);\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    transition: background-color 0.6s ease;\r\n   }\r\n\r\n   .dot-container{\r\n       position: absolute;\r\n       bottom: 40px;\r\n       right: 0;\r\n       left: 0;       \r\n   }\r\n\r\n.active, .dot:hover {\r\n    background-color: #494949;\r\n  }\r\n\r\n  .fade {\r\n    -webkit-animation-name: fade;\r\n    -webkit-animation-duration: 1.5s;\r\n    animation-name: fade;\r\n    animation-duration: 1.5s;\r\n  }\r\n\r\n  @-webkit-keyframes fade {\r\n    from {opacity: .4}\r\n    to {opacity: 1}\r\n  }\r\n  \r\n  @keyframes fade {\r\n    from {opacity: .4}\r\n    to {opacity: 1}\r\n  }", "",{"version":3,"sources":["webpack://./src/components/home.css"],"names":[],"mappings":";;AAEA;IACI,2BAA2B;AAC/B;;;AAGA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;IAC9B,WAAW;IACX,uBAAuB;AAC3B;;AAEA;;;;;GAKG;;AAEH;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,6BAA6B;IAC7B,kBAAkB;IAClB,gBAAgB;;AAEpB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,4BAA4B;IAC5B,mBAAmB;IACnB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,4BAA4B;EAC5B,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,YAAY;AACd;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,iBAAiB;IACjB,eAAe;IACf,qBAAqB;IACrB,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,QAAQ;IACR,0BAA0B;EAC5B;;EAEA;IACE,4BAA4B;EAC9B;;EAEA;IACE,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,6BAA6B;IAC7B,oCAAoC;IACpC,kBAAkB;IAClB,qBAAqB;IACrB,sCAAsC;GACvC;;GAEA;OACI,kBAAkB;OAClB,YAAY;OACZ,QAAQ;OACR,OAAO;GACX;;AAEH;IACI,yBAAyB;EAC3B;;EAEA;IACE,4BAA4B;IAC5B,gCAAgC;IAChC,oBAAoB;IACpB,wBAAwB;EAC1B;;EAEA;IACE,MAAM,WAAW;IACjB,IAAI,UAAU;EAChB;;EAEA;IACE,MAAM,WAAW;IACjB,IAAI,UAAU;EAChB","sourcesContent":["\r\n\r\n:root{\r\n    --backGround: rgb(20, 3, 5);\r\n}\r\n\r\n\r\n#home, #menu, #contact{  \r\n    padding-top: 80px;\r\n    height: 100%; \r\n    display: none;  \r\n    background-color: var(--white);\r\n}\r\n\r\n#home{\r\n    background-color: var(--white);\r\n    width: 100%;\r\n    justify-content: center;\r\n}\r\n\r\n/* #menu{\r\n    \r\n}\r\n#contact{\r\n    background-color: rgb(148, 32, 32);\r\n} */\r\n\r\n.now-displayed{\r\n    display: flex !important;\r\n}\r\n\r\n.home-caption{\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.home-background{  \r\n    height: 100%;\r\n    width: 95%;\r\n    /* border: 2px solid green; */\r\n    /* display: flex;*/\r\n    margin-top: 30px;\r\n   \r\n}\r\n\r\n.btn{\r\n    width: 100px;\r\n    height: 30px;\r\n    border-radius: 20px;\r\n    background-color: var(--red);\r\n    color: var(--white);\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.order-btn{\r\n    margin: 30px 0px 20px 0px;\r\n}\r\n\r\n.btn-holder{  \r\n    position: relative;\r\n}\r\n\r\n.slideshow-container {  \r\n  width: 100%;\r\n  height: 80%;\r\n  position: relative;\r\n  margin: auto;\r\n  /* border: 2px solid blue; */\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.mySlides {\r\n  display: none;\r\n  /* background-color: blueviolet; */\r\n  height: 100%;\r\n}\r\n\r\n.prev, .next {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: auto;\r\n    margin-top: -22px ;\r\n    padding: 16px;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    transition: 0.6s ease;\r\n    border-radius: 0 3px 3px 0;\r\n    user-select: none;\r\n}\r\n\r\n.next {\r\n    right: 0;\r\n    border-radius: 3px 0 0 3px;\r\n  }\r\n\r\n  .prev:hover, .next:hover {\r\n    background-color: var(--red);\r\n  }\r\n\r\n  .text{\r\n    color: rgb(255, 251, 251);\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    padding: 8px 12px;\r\n    position: absolute;\r\n    bottom: 8px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.dot {\r\n    cursor: pointer;\r\n    height: 14px;\r\n    width: 14px;\r\n    margin: 10px 2px;\r\n    /* border: 1px solid green; */\r\n    background-color: rgb(133, 130, 130);\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    transition: background-color 0.6s ease;\r\n   }\r\n\r\n   .dot-container{\r\n       position: absolute;\r\n       bottom: 40px;\r\n       right: 0;\r\n       left: 0;       \r\n   }\r\n\r\n.active, .dot:hover {\r\n    background-color: #494949;\r\n  }\r\n\r\n  .fade {\r\n    -webkit-animation-name: fade;\r\n    -webkit-animation-duration: 1.5s;\r\n    animation-name: fade;\r\n    animation-duration: 1.5s;\r\n  }\r\n\r\n  @-webkit-keyframes fade {\r\n    from {opacity: .4}\r\n    to {opacity: 1}\r\n  }\r\n  \r\n  @keyframes fade {\r\n    from {opacity: .4}\r\n    to {opacity: 1}\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/navBar.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/navBar.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    box-sizing: border-box;\r\n    margin: 0px;\r\n}\r\n\r\n.nav-container{\r\n    min-height: 10px;\r\n    width: 100%;   \r\n    display: flex;\r\n    justify-content: space-between; \r\n    position: fixed;\r\n    top: 0px;\r\n    background-color: var(--red);\r\n   z-index: 1000;\r\n}\r\n\r\n.logo-wrapper{\r\n    width: 180px;\r\n    margin: 5px;    \r\n    margin-left: 50px; \r\n    /* border: 2px solid green;    */\r\n}\r\n\r\n.logo-wrapper img{  \r\n    width: 80%;\r\n}\r\n\r\n.tab-wrapper{\r\n   width: 60%;  \r\n   /* border: 2px solid blue; */\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: space-around; \r\n \r\n}\r\n\r\n.link-wrapper{\r\n    height: 100%;\r\n     min-width: 120px;  \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    /* border: 2px solid green; */\r\n}\r\n\r\n.link-wrapper:hover{\r\n    background-color: rgb(0, 0, 0);\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n.tab-wrapper a{\r\n    /* min-width: 150px;   */\r\n    color: var(--white);      \r\n    transition: 0.3s; \r\n    font-weight: bold;\r\n    font-size: 19px;\r\n    text-decoration: none;      \r\n    text-align: center;\r\n    /* margin: 0px 50px 0px 50px; */\r\n}\r\n\r\n\r\n.activeSection{\r\n    /* background-color: rgb(255, 255, 255) !important;     */\r\n    color: var(--yellow) !important;\r\n  }\r\n\r\n  @media screen and (max-width: 375px){\r\n         \r\n    .logo-wrapper{\r\n        width: 180px;\r\n        /* margin-bottom: 20px; */\r\n    }\r\n         \r\n       \r\n    .tab-wrapper button{\r\n       min-width: 50px; \r\n       padding: 5px 8px;     \r\n    }\r\n    \r\n    .tab-wrapper button:hover {\r\n        background-color: #ddd;\r\n      }\r\n\r\n\r\n  }\r\n\r\n\r\n  @media screen and (max-width: 600px){\r\n    .tab-wrapper button{\r\n        min-width: 120px;\r\n    }\r\n\r\n\r\n  }", "",{"version":3,"sources":["webpack://./src/components/navBar.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,QAAQ;IACR,4BAA4B;GAC7B,aAAa;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,gCAAgC;AACpC;;AAEA;IACI,UAAU;AACd;;AAEA;GACG,UAAU;GACV,4BAA4B;GAC5B,aAAa;GACb,mBAAmB;GACnB,6BAA6B;;AAEhC;;AAEA;IACI,YAAY;KACX,gBAAgB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,8BAA8B;IAC9B,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,qBAAqB;IACrB,kBAAkB;IAClB,+BAA+B;AACnC;;;AAGA;IACI,yDAAyD;IACzD,+BAA+B;EACjC;;EAEA;;IAEE;QACI,YAAY;QACZ,yBAAyB;IAC7B;;;IAGA;OACG,eAAe;OACf,gBAAgB;IACnB;;IAEA;QACI,sBAAsB;MACxB;;;EAGJ;;;EAGA;IACE;QACI,gBAAgB;IACpB;;;EAGF","sourcesContent":["*{\r\n    box-sizing: border-box;\r\n    margin: 0px;\r\n}\r\n\r\n.nav-container{\r\n    min-height: 10px;\r\n    width: 100%;   \r\n    display: flex;\r\n    justify-content: space-between; \r\n    position: fixed;\r\n    top: 0px;\r\n    background-color: var(--red);\r\n   z-index: 1000;\r\n}\r\n\r\n.logo-wrapper{\r\n    width: 180px;\r\n    margin: 5px;    \r\n    margin-left: 50px; \r\n    /* border: 2px solid green;    */\r\n}\r\n\r\n.logo-wrapper img{  \r\n    width: 80%;\r\n}\r\n\r\n.tab-wrapper{\r\n   width: 60%;  \r\n   /* border: 2px solid blue; */\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: space-around; \r\n \r\n}\r\n\r\n.link-wrapper{\r\n    height: 100%;\r\n     min-width: 120px;  \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    /* border: 2px solid green; */\r\n}\r\n\r\n.link-wrapper:hover{\r\n    background-color: rgb(0, 0, 0);\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n.tab-wrapper a{\r\n    /* min-width: 150px;   */\r\n    color: var(--white);      \r\n    transition: 0.3s; \r\n    font-weight: bold;\r\n    font-size: 19px;\r\n    text-decoration: none;      \r\n    text-align: center;\r\n    /* margin: 0px 50px 0px 50px; */\r\n}\r\n\r\n\r\n.activeSection{\r\n    /* background-color: rgb(255, 255, 255) !important;     */\r\n    color: var(--yellow) !important;\r\n  }\r\n\r\n  @media screen and (max-width: 375px){\r\n         \r\n    .logo-wrapper{\r\n        width: 180px;\r\n        /* margin-bottom: 20px; */\r\n    }\r\n         \r\n       \r\n    .tab-wrapper button{\r\n       min-width: 50px; \r\n       padding: 5px 8px;     \r\n    }\r\n    \r\n    .tab-wrapper button:hover {\r\n        background-color: #ddd;\r\n      }\r\n\r\n\r\n  }\r\n\r\n\r\n  @media screen and (max-width: 600px){\r\n    .tab-wrapper button{\r\n        min-width: 120px;\r\n    }\r\n\r\n\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/App.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/home.css":
/*!*********************************!*\
  !*** ./src/components/home.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/navBar.css":
/*!***********************************!*\
  !*** ./src/components/navBar.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./navBar.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/navBar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const contact = (() => {

    
    const contactChildren = () => {
        const contact = document.createElement('div');
        contact.innerHTML = `
        <h1 class='contact' ></h1>       
        
        `;

        return contact;
    }

    return { contactChildren }

})();

console.log(contact)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.css */ "./src/components/home.css");
/* harmony import */ var _texture_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../texture-background.jpg */ "./src/texture-background.jpg");




const Home = (() => {

   const couroselImg = [
        {
        image: 'https://onlinelibrary.wiley.com/pb-assets/20487177/Bioactive%20compounds-1615400802.jpg',       
        id: 1,
        },
        {
        image: 'https://www.verywellfamily.com/thmb/-JHHjDC28rgzSLSRngNUJYPoSFk=/2181x1375/filters:no_upscale():max_bytes(150000):strip_icc()/grilled-salmon-steak-garnished-with-green-asparagus--lemon-and-tomatoes-1143931756-d61befab58de4bc780d293b957a2ea5b.jpg',       
        id: 2,
        },
        {
        image: 'https://assets.unenvironment.org/2021-08/louis-hansel-RNmibnLCJAA-unsplash.jpeg',       
        id: 3,
        },
        {
        image: 'https://thedreamafrica.com/wp-content/uploads/2019/07/Ugali-dish.jpg',       
        id: 4,
        },
        {
        image: 'http://cdn.one.org/africa/wp-content/uploads/2014/11/Screen-Shot-2014-11-25-at-15.05.41.png',       
        id: 5,
        },
        {
        image: 'https://www.michaelmorones.org/wp-content/uploads/nigerian-suya-recipe-main-photo.jpg',       
        id: 6,
        },
    ]

   function images(){
     const image = couroselImg.map(img => {        
        return `<div class="mySlides fade" id='image${img.id}'>               
                <img src=${img.image} style="width:100%">                
                </div>
                `
        })
         
        console.log(image.join(' '))
    return image.join(' ');    
    }

    const homeChildren =  () => {       
        const home = document.createElement('div');
        home.classList.add('home-background');
        home.innerHTML = `    
        <div class="slideshow-container">  
        ${images()}      
            
            <a class="prev" >&#10094;</a>
            <a class="next" >&#10095;</a>            
        </div>
        <div class="btn-holder">
            <button class='btn order-btn'>Order now</button>
            <div class='dot-container' style="text-align:center">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
                <span class="dot" onclick="currentSlide(4)"></span>
            </div>
        </div>   
    `;
     return home;
   }

//    Display image on page load
   document.addEventListener('DOMContentLoaded', () => {    
    const images = document.getElementsByClassName('mySlides');   
    console.log(images);   

    const displayImage = (index) => {
        console.log('image' + (index + 1) + ':', index)       
        for(let i = 0; i < images.length; i++){
            images[i].style.display = 'none';
            if( i === images[index].id.match(/\d/g).toString()*1){               
                images[index].style.display = 'block';
                console.log(images[index].id);
            }    
        }
    }

    let n = [];    
    displayImage(n.length)
    setInterval(() => {         
        if(n.length < images.length){
            displayImage(n.length);
            n.push(1);
            return;
        }else{
            n = [];
            console.log('n empty again, because, its length is more than five');
        }
        console.log(n);        
        console.log(n.length, ' end of code')
    }, 5000);
   })
   
   return { homeChildren }

})();



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

class Menu{


}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigationBar": () => (/* binding */ navigationBar)
/* harmony export */ });
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logo.png */ "./src/logo.png");
/* harmony import */ var _navBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar.css */ "./src/components/navBar.css");



const navigationBar = (() => {   
    
    const createNavBar = () => {       
        const navContainer = document.createElement('div')
        navContainer.classList.add('nav-container');       
        navContainer.innerHTML = `                
            <div class="logo-wrapper">
                <img src="${_logo_png__WEBPACK_IMPORTED_MODULE_0__}" alt="JR Kitchen Logo">
            </div>
            <nav class="tab-wrapper"> 
                <div class='link-wrapper'>              
                    <a href='#' class="nav-tab home activeSection" id="home-btn">
                    Home                    
                    </a>
                </div>
                <div class='link-wrapper'>
                    <a href='#' class="nav-tab menu" id="menu-btn">
                    Menu
                    </a>
                </div>
                <div class='link-wrapper'>
                    <a href='#' class="nav-tab contact" id="contact-btn">
                    Contact
                    </a>  
                </div>                
            </nav>              
        `;   
        return navContainer;
    }    

    return { createNavBar}

})()



/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92fab106fda8be68a144.png";

/***/ }),

/***/ "./src/texture-background.jpg":
/*!************************************!*\
  !*** ./src/texture-background.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d83052b4ec8426286ee.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Menu */ "./src/components/Menu.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Contact */ "./src/components/Contact.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");







const appUI = (() => {
    const pageConatainer = document.getElementById('root');
   
    //Insert NavBar    
    const navBar = _components_NavBar__WEBPACK_IMPORTED_MODULE_0__.navigationBar.createNavBar('Home', 'Menu', 'Contact');
    pageConatainer.appendChild(navBar);

    //Create hero section page container
    const heroContainer = document.createElement('div');
    heroContainer.id = 'hero-container';
    pageConatainer.appendChild(heroContainer);

    //Create Sections
    function createSection(id){
        const el = document.createElement('section');
        el.id = `${id}`;
        el.className = `${id}-wrapper section`;
        return el;
    }      

    //Home section
    const homeSection = createSection('home');
        // Select home as default display section
        homeSection.classList.add('now-displayed');
        homeSection.appendChild(_components_Home__WEBPACK_IMPORTED_MODULE_1__["default"].homeChildren());
       

    //Menu section
    const menuSection = createSection('menu');


    //Contact Section
    const contactSection = createSection('contact');
    contactSection.appendChild(_components_Contact__WEBPACK_IMPORTED_MODULE_3__["default"].contactChildren());



    heroContainer.appendChild(homeSection);
    heroContainer.appendChild(menuSection);
    heroContainer.appendChild(contactSection);

   // Display Section Event
    function toggleActiveSection(element, nodeList, className){
        nodeList.forEach(el => {          
            el.classList.remove(className);
            if(el.id === element.id){
                el.classList.add(className);
            }
        });   
    }

    document.querySelector('.home').addEventListener('click', (e) => {
        toggleActiveSection(document.getElementById('home'), 
        document.querySelectorAll('.section'),
        'now-displayed'
        );
        toggleActiveSection(document.getElementById('home-btn'), 
        document.querySelectorAll('.nav-tab'),
        'activeSection');  
    });

    document.querySelector('.menu').addEventListener('click', (e) => {
        toggleActiveSection(document.getElementById('menu'),
        document.querySelectorAll('.section'),
        'now-displayed'
        ); 
        toggleActiveSection(document.getElementById('menu-btn'), 
        document.querySelectorAll('.nav-tab'),
        'activeSection');  
    });
    
    document.querySelector('.contact').addEventListener('click', (e) => {
        toggleActiveSection(document.getElementById('contact'),
        document.querySelectorAll('.section'),
        'now-displayed'
        );
        toggleActiveSection(document.getElementById('contact-btn'), 
        document.querySelectorAll('.nav-tab'),
        'activeSection');  
    });


    return {  }

})()




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appUI);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EseURBQXlELHVCQUF1QiwwQkFBMEIseUJBQXlCLHNCQUFzQixxQkFBcUIsMkJBQTJCLHVCQUF1QixLQUFLLCtCQUErQixxQkFBcUIsS0FBSyxtQkFBbUIsMEVBQTBFLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSx5Q0FBeUMsdUJBQXVCLDBCQUEwQix5QkFBeUIsc0JBQXNCLHFCQUFxQiwyQkFBMkIsdUJBQXVCLEtBQUssK0JBQStCLHFCQUFxQixLQUFLLCtCQUErQjtBQUNqeEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esd0RBQXdELG9DQUFvQyxLQUFLLHFDQUFxQywwQkFBMEIsc0JBQXNCLHdCQUF3Qix1Q0FBdUMsS0FBSyxjQUFjLHVDQUF1QyxvQkFBb0IsZ0NBQWdDLEtBQUssaUJBQWlCLGFBQWEsYUFBYSwyQ0FBMkMsTUFBTSx5QkFBeUIsaUNBQWlDLEtBQUssc0JBQXNCLDJCQUEyQixxQkFBcUIsS0FBSywyQkFBMkIscUJBQXFCLG1CQUFtQixvQ0FBb0MsMkJBQTJCLDJCQUEyQixZQUFZLGFBQWEscUJBQXFCLHFCQUFxQiw0QkFBNEIscUNBQXFDLDRCQUE0QixxQkFBcUIsd0JBQXdCLEtBQUssbUJBQW1CLGtDQUFrQyxLQUFLLHNCQUFzQiwyQkFBMkIsS0FBSyxnQ0FBZ0Msa0JBQWtCLGtCQUFrQix5QkFBeUIsbUJBQW1CLGlDQUFpQyx5QkFBeUIsb0JBQW9CLEtBQUssbUJBQW1CLG9CQUFvQix1Q0FBdUMscUJBQXFCLEtBQUssc0JBQXNCLHdCQUF3QiwyQkFBMkIsaUJBQWlCLG9CQUFvQiwyQkFBMkIsc0JBQXNCLDBCQUEwQix3QkFBd0IsOEJBQThCLG1DQUFtQywwQkFBMEIsS0FBSyxlQUFlLGlCQUFpQixtQ0FBbUMsT0FBTyxvQ0FBb0MscUNBQXFDLE9BQU8sZ0JBQWdCLGtDQUFrQywwQkFBMEIsd0JBQXdCLDBCQUEwQiwyQkFBMkIsb0JBQW9CLG9CQUFvQiwyQkFBMkIsS0FBSyxjQUFjLHdCQUF3QixxQkFBcUIsb0JBQW9CLHlCQUF5QixvQ0FBb0MsK0NBQStDLDJCQUEyQiw4QkFBOEIsK0NBQStDLFFBQVEsMEJBQTBCLDhCQUE4Qix3QkFBd0Isb0JBQW9CLDBCQUEwQixRQUFRLDZCQUE2QixrQ0FBa0MsT0FBTyxpQkFBaUIscUNBQXFDLHlDQUF5Qyw2QkFBNkIsaUNBQWlDLE9BQU8sbUNBQW1DLGNBQWMsWUFBWSxZQUFZLFdBQVcsT0FBTyw2QkFBNkIsY0FBYyxZQUFZLFlBQVksV0FBVyxPQUFPLE9BQU8sdUZBQXVGLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxTQUFTLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxlQUFlLGdCQUFnQixPQUFPLEtBQUssZUFBZSxnQkFBZ0Isd0NBQXdDLG9DQUFvQyxLQUFLLHFDQUFxQywwQkFBMEIsc0JBQXNCLHdCQUF3Qix1Q0FBdUMsS0FBSyxjQUFjLHVDQUF1QyxvQkFBb0IsZ0NBQWdDLEtBQUssaUJBQWlCLGFBQWEsYUFBYSwyQ0FBMkMsTUFBTSx5QkFBeUIsaUNBQWlDLEtBQUssc0JBQXNCLDJCQUEyQixxQkFBcUIsS0FBSywyQkFBMkIscUJBQXFCLG1CQUFtQixvQ0FBb0MsMkJBQTJCLDJCQUEyQixZQUFZLGFBQWEscUJBQXFCLHFCQUFxQiw0QkFBNEIscUNBQXFDLDRCQUE0QixxQkFBcUIsd0JBQXdCLEtBQUssbUJBQW1CLGtDQUFrQyxLQUFLLHNCQUFzQiwyQkFBMkIsS0FBSyxnQ0FBZ0Msa0JBQWtCLGtCQUFrQix5QkFBeUIsbUJBQW1CLGlDQUFpQyx5QkFBeUIsb0JBQW9CLEtBQUssbUJBQW1CLG9CQUFvQix1Q0FBdUMscUJBQXFCLEtBQUssc0JBQXNCLHdCQUF3QiwyQkFBMkIsaUJBQWlCLG9CQUFvQiwyQkFBMkIsc0JBQXNCLDBCQUEwQix3QkFBd0IsOEJBQThCLG1DQUFtQywwQkFBMEIsS0FBSyxlQUFlLGlCQUFpQixtQ0FBbUMsT0FBTyxvQ0FBb0MscUNBQXFDLE9BQU8sZ0JBQWdCLGtDQUFrQywwQkFBMEIsd0JBQXdCLDBCQUEwQiwyQkFBMkIsb0JBQW9CLG9CQUFvQiwyQkFBMkIsS0FBSyxjQUFjLHdCQUF3QixxQkFBcUIsb0JBQW9CLHlCQUF5QixvQ0FBb0MsK0NBQStDLDJCQUEyQiw4QkFBOEIsK0NBQStDLFFBQVEsMEJBQTBCLDhCQUE4Qix3QkFBd0Isb0JBQW9CLDBCQUEwQixRQUFRLDZCQUE2QixrQ0FBa0MsT0FBTyxpQkFBaUIscUNBQXFDLHlDQUF5Qyw2QkFBNkIsaUNBQWlDLE9BQU8sbUNBQW1DLGNBQWMsWUFBWSxZQUFZLFdBQVcsT0FBTyw2QkFBNkIsY0FBYyxZQUFZLFlBQVksV0FBVyxPQUFPLG1CQUFtQjtBQUNwNk47QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNENBQTRDLCtCQUErQixvQkFBb0IsS0FBSyx1QkFBdUIseUJBQXlCLHVCQUF1QixzQkFBc0Isd0NBQXdDLHdCQUF3QixpQkFBaUIscUNBQXFDLHFCQUFxQixLQUFLLHNCQUFzQixxQkFBcUIsd0JBQXdCLDJCQUEyQix1Q0FBdUMsT0FBTyw0QkFBNEIsbUJBQW1CLEtBQUsscUJBQXFCLG9CQUFvQixrQ0FBa0MsdUJBQXVCLDJCQUEyQixzQ0FBc0MsVUFBVSxzQkFBc0IscUJBQXFCLDRCQUE0QixzQkFBc0IsZ0NBQWdDLDRCQUE0QixvQ0FBb0MsT0FBTyw0QkFBNEIsdUNBQXVDLHFCQUFxQix3QkFBd0IsS0FBSyx1QkFBdUIsK0JBQStCLG9DQUFvQywwQkFBMEIsMEJBQTBCLHdCQUF3QixvQ0FBb0MsMkJBQTJCLHNDQUFzQyxPQUFPLDJCQUEyQixnRUFBZ0UsMENBQTBDLE9BQU8sK0NBQStDLG1DQUFtQyx5QkFBeUIsb0NBQW9DLFdBQVcsb0RBQW9ELDRCQUE0QixpQ0FBaUMsU0FBUywyQ0FBMkMsbUNBQW1DLFdBQVcsZUFBZSxtREFBbUQsNEJBQTRCLDZCQUE2QixTQUFTLGVBQWUsT0FBTyw0RkFBNEYsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLE9BQU8sS0FBSyxLQUFLLFlBQVksUUFBUSwyQkFBMkIsK0JBQStCLG9CQUFvQixLQUFLLHVCQUF1Qix5QkFBeUIsdUJBQXVCLHNCQUFzQix3Q0FBd0Msd0JBQXdCLGlCQUFpQixxQ0FBcUMscUJBQXFCLEtBQUssc0JBQXNCLHFCQUFxQix3QkFBd0IsMkJBQTJCLHVDQUF1QyxPQUFPLDRCQUE0QixtQkFBbUIsS0FBSyxxQkFBcUIsb0JBQW9CLGtDQUFrQyx1QkFBdUIsMkJBQTJCLHNDQUFzQyxVQUFVLHNCQUFzQixxQkFBcUIsNEJBQTRCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLG9DQUFvQyxPQUFPLDRCQUE0Qix1Q0FBdUMscUJBQXFCLHdCQUF3QixLQUFLLHVCQUF1QiwrQkFBK0Isb0NBQW9DLDBCQUEwQiwwQkFBMEIsd0JBQXdCLG9DQUFvQywyQkFBMkIsc0NBQXNDLE9BQU8sMkJBQTJCLGdFQUFnRSwwQ0FBMEMsT0FBTywrQ0FBK0MsbUNBQW1DLHlCQUF5QixvQ0FBb0MsV0FBVyxvREFBb0QsNEJBQTRCLGlDQUFpQyxTQUFTLDJDQUEyQyxtQ0FBbUMsV0FBVyxlQUFlLG1EQUFtRCw0QkFBNEIsNkJBQTZCLFNBQVMsZUFBZSxtQkFBbUI7QUFDcmtKO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBaUc7QUFDakc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxvRkFBTzs7OztBQUkyQztBQUNuRSxPQUFPLGlFQUFlLG9GQUFPLElBQUksMkZBQWMsR0FBRywyRkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFxRztBQUNyRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSStDO0FBQ3ZFLE9BQU8saUVBQWUscUZBQU8sSUFBSSw0RkFBYyxHQUFHLDRGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJ0QjtBQUNtQjtBQUMrQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELE9BQU87QUFDN0QsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQSxZQUFZO0FBQ1o7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUMxR25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BhO0FBQ1g7QUFDckI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzQ0FBTSxDQUFDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmb0Q7QUFDZjtBQUNBO0FBQ007QUFDekI7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBFQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixHQUFHO0FBQ3RCLDBCQUEwQixHQUFHO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFFQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDJFQUF1QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxLQUFLLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcC8uL3NyYy9BcHAuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwLy4vc3JjL2NvbXBvbmVudHMvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvLi9zcmMvY29tcG9uZW50cy9uYXZCYXIuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwLy4vc3JjL0FwcC5jc3M/ZDljZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcC8uL3NyYy9jb21wb25lbnRzL2hvbWUuY3NzP2M4NGIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvLi9zcmMvY29tcG9uZW50cy9uYXZCYXIuY3NzPzI4NmIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcC8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwLy4vc3JjL2NvbXBvbmVudHMvTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcC8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG5odG1sLCBib2R5e1xcclxcbiAgICAtLXJlZDogIzlFMUQzQjtcXHJcXG4gICAgLS15ZWxsb3c6ICNFQ0M3NUI7XFxyXFxuICAgIC0tZ3JlZW46ICM0QzY3NDQ7XFxyXFxuICAgIC0td2hpdGU6ICNmZmY7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IDBweDsgICBcXHJcXG59XFxyXFxuXFxyXFxuI3Jvb3QsICNoZXJvLWNvbnRhaW5lcntcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvQXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbmh0bWwsIGJvZHl7XFxyXFxuICAgIC0tcmVkOiAjOUUxRDNCO1xcclxcbiAgICAtLXllbGxvdzogI0VDQzc1QjtcXHJcXG4gICAgLS1ncmVlbjogIzRDNjc0NDtcXHJcXG4gICAgLS13aGl0ZTogI2ZmZjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogMHB4OyAgIFxcclxcbn1cXHJcXG5cXHJcXG4jcm9vdCwgI2hlcm8tY29udGFpbmVye1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLWJhY2tHcm91bmQ6IHJnYigyMCwgMywgNSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNob21lLCAjbWVudSwgI2NvbnRhY3R7ICBcXHJcXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTsgXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7ICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qICNtZW51e1xcclxcbiAgICBcXHJcXG59XFxyXFxuI2NvbnRhY3R7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDMyLCAzMik7XFxyXFxufSAqL1xcclxcblxcclxcbi5ub3ctZGlzcGxheWVke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWNhcHRpb257XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1iYWNrZ3JvdW5keyAgXFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW47ICovXFxyXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7Ki9cXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bntcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRue1xcclxcbiAgICBtYXJnaW46IDMwcHggMHB4IDIwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWhvbGRlcnsgIFxcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXNob3ctY29udGFpbmVyIHsgIFxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7ICovXFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm15U2xpZGVzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0OyAqL1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldiwgLm5leHQge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMjJweCA7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV4dCB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcmV2OmhvdmVyLCAubmV4dDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGV4dHtcXHJcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1MSwgMjUxKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiA4cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kb3Qge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTRweDtcXHJcXG4gICAgd2lkdGg6IDE0cHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAycHg7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCAxMzAsIDEzMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgLmRvdC1jb250YWluZXJ7XFxyXFxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgYm90dG9tOiA0MHB4O1xcclxcbiAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgbGVmdDogMDsgICAgICAgXFxyXFxuICAgfVxcclxcblxcclxcbi5hY3RpdmUsIC5kb3Q6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhZGUge1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcXHJcXG4gICAgZnJvbSB7b3BhY2l0eTogLjR9XFxyXFxuICAgIHRvIHtvcGFjaXR5OiAxfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIGZhZGUge1xcclxcbiAgICBmcm9tIHtvcGFjaXR5OiAuNH1cXHJcXG4gICAgdG8ge29wYWNpdHk6IDF9XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTs7Ozs7R0FLRzs7QUFFSDtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDViw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHNDQUFzQztHQUN2Qzs7R0FFQTtPQUNJLGtCQUFrQjtPQUNsQixZQUFZO09BQ1osUUFBUTtPQUNSLE9BQU87R0FDWDs7QUFFSDtJQUNJLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLE1BQU0sV0FBVztJQUNqQixJQUFJLFVBQVU7RUFDaEI7O0VBRUE7SUFDRSxNQUFNLFdBQVc7SUFDakIsSUFBSSxVQUFVO0VBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLWJhY2tHcm91bmQ6IHJnYigyMCwgMywgNSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNob21lLCAjbWVudSwgI2NvbnRhY3R7ICBcXHJcXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTsgXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7ICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qICNtZW51e1xcclxcbiAgICBcXHJcXG59XFxyXFxuI2NvbnRhY3R7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDMyLCAzMik7XFxyXFxufSAqL1xcclxcblxcclxcbi5ub3ctZGlzcGxheWVke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWNhcHRpb257XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1iYWNrZ3JvdW5keyAgXFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW47ICovXFxyXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7Ki9cXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bntcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRue1xcclxcbiAgICBtYXJnaW46IDMwcHggMHB4IDIwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWhvbGRlcnsgIFxcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXNob3ctY29udGFpbmVyIHsgIFxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7ICovXFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm15U2xpZGVzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0OyAqL1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldiwgLm5leHQge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMjJweCA7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV4dCB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcmV2OmhvdmVyLCAubmV4dDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGV4dHtcXHJcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1MSwgMjUxKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiA4cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kb3Qge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTRweDtcXHJcXG4gICAgd2lkdGg6IDE0cHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAycHg7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCAxMzAsIDEzMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgLmRvdC1jb250YWluZXJ7XFxyXFxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgYm90dG9tOiA0MHB4O1xcclxcbiAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgbGVmdDogMDsgICAgICAgXFxyXFxuICAgfVxcclxcblxcclxcbi5hY3RpdmUsIC5kb3Q6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhZGUge1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcXHJcXG4gICAgZnJvbSB7b3BhY2l0eTogLjR9XFxyXFxuICAgIHRvIHtvcGFjaXR5OiAxfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIGZhZGUge1xcclxcbiAgICBmcm9tIHtvcGFjaXR5OiAuNH1cXHJcXG4gICAgdG8ge29wYWNpdHk6IDF9XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29udGFpbmVye1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTsgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG4gICB6LWluZGV4OiAxMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby13cmFwcGVye1xcclxcbiAgICB3aWR0aDogMTgwcHg7XFxyXFxuICAgIG1hcmdpbjogNXB4OyAgICBcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7IFxcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmVlbjsgICAgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28td3JhcHBlciBpbWd7ICBcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi13cmFwcGVye1xcclxcbiAgIHdpZHRoOiA2MCU7ICBcXHJcXG4gICAvKiBib3JkZXI6IDJweCBzb2xpZCBibHVlOyAqL1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgXFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4ubGluay13cmFwcGVye1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICBtaW4td2lkdGg6IDEyMHB4OyAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmVlbjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstd3JhcHBlcjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi13cmFwcGVyIGF7XFxyXFxuICAgIC8qIG1pbi13aWR0aDogMTUwcHg7ICAgKi9cXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTsgICAgICBcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zczsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDE5cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgICAgICBcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAvKiBtYXJnaW46IDBweCA1MHB4IDBweCA1MHB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYWN0aXZlU2VjdGlvbntcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7ICAgICAqL1xcclxcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KSAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpe1xcclxcbiAgICAgICAgIFxcclxcbiAgICAubG9nby13cmFwcGVye1xcclxcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICAgICAgLyogbWFyZ2luLWJvdHRvbTogMjBweDsgKi9cXHJcXG4gICAgfVxcclxcbiAgICAgICAgIFxcclxcbiAgICAgICBcXHJcXG4gICAgLnRhYi13cmFwcGVyIGJ1dHRvbntcXHJcXG4gICAgICAgbWluLXdpZHRoOiA1MHB4OyBcXHJcXG4gICAgICAgcGFkZGluZzogNXB4IDhweDsgICAgIFxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAudGFiLXdyYXBwZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxyXFxuICAgICAgfVxcclxcblxcclxcblxcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xcclxcbiAgICAudGFiLXdyYXBwZXIgYnV0dG9ue1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL25hdkJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixRQUFRO0lBQ1IsNEJBQTRCO0dBQzdCLGFBQWE7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7R0FDRyxVQUFVO0dBQ1YsNEJBQTRCO0dBQzVCLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsNkJBQTZCOztBQUVoQzs7QUFFQTtJQUNJLFlBQVk7S0FDWCxnQkFBZ0I7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQzs7O0FBR0E7SUFDSSx5REFBeUQ7SUFDekQsK0JBQStCO0VBQ2pDOztFQUVBOztJQUVFO1FBQ0ksWUFBWTtRQUNaLHlCQUF5QjtJQUM3Qjs7O0lBR0E7T0FDRyxlQUFlO09BQ2YsZ0JBQWdCO0lBQ25COztJQUVBO1FBQ0ksc0JBQXNCO01BQ3hCOzs7RUFHSjs7O0VBR0E7SUFDRTtRQUNJLGdCQUFnQjtJQUNwQjs7O0VBR0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29udGFpbmVye1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTsgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG4gICB6LWluZGV4OiAxMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby13cmFwcGVye1xcclxcbiAgICB3aWR0aDogMTgwcHg7XFxyXFxuICAgIG1hcmdpbjogNXB4OyAgICBcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7IFxcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmVlbjsgICAgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28td3JhcHBlciBpbWd7ICBcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi13cmFwcGVye1xcclxcbiAgIHdpZHRoOiA2MCU7ICBcXHJcXG4gICAvKiBib3JkZXI6IDJweCBzb2xpZCBibHVlOyAqL1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgXFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4ubGluay13cmFwcGVye1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICBtaW4td2lkdGg6IDEyMHB4OyAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmVlbjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstd3JhcHBlcjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi13cmFwcGVyIGF7XFxyXFxuICAgIC8qIG1pbi13aWR0aDogMTUwcHg7ICAgKi9cXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTsgICAgICBcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zczsgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDE5cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgICAgICBcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAvKiBtYXJnaW46IDBweCA1MHB4IDBweCA1MHB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYWN0aXZlU2VjdGlvbntcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7ICAgICAqL1xcclxcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KSAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpe1xcclxcbiAgICAgICAgIFxcclxcbiAgICAubG9nby13cmFwcGVye1xcclxcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICAgICAgLyogbWFyZ2luLWJvdHRvbTogMjBweDsgKi9cXHJcXG4gICAgfVxcclxcbiAgICAgICAgIFxcclxcbiAgICAgICBcXHJcXG4gICAgLnRhYi13cmFwcGVyIGJ1dHRvbntcXHJcXG4gICAgICAgbWluLXdpZHRoOiA1MHB4OyBcXHJcXG4gICAgICAgcGFkZGluZzogNXB4IDhweDsgICAgIFxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAudGFiLXdyYXBwZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxyXFxuICAgICAgfVxcclxcblxcclxcblxcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xcclxcbiAgICAudGFiLXdyYXBwZXIgYnV0dG9ue1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2QmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2QmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcclxuXHJcbmNvbnN0IGNvbnRhY3QgPSAoKCkgPT4ge1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgY29udGFjdENoaWxkcmVuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250YWN0LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDEgY2xhc3M9J2NvbnRhY3QnID48L2gxPiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGFjdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBjb250YWN0Q2hpbGRyZW4gfVxyXG5cclxufSkoKTtcclxuXHJcbmNvbnNvbGUubG9nKGNvbnRhY3QpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0OyIsIlxyXG5pbXBvcnQgJy4vaG9tZS5jc3MnXHJcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJy4uL3RleHR1cmUtYmFja2dyb3VuZC5qcGcnXHJcblxyXG5jb25zdCBIb21lID0gKCgpID0+IHtcclxuXHJcbiAgIGNvbnN0IGNvdXJvc2VsSW1nID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vb25saW5lbGlicmFyeS53aWxleS5jb20vcGItYXNzZXRzLzIwNDg3MTc3L0Jpb2FjdGl2ZSUyMGNvbXBvdW5kcy0xNjE1NDAwODAyLmpwZycsICAgICAgIFxyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly93d3cudmVyeXdlbGxmYW1pbHkuY29tL3RobWIvLUpISGpEQzI4cmd6U0xTUm5nTlVKWVBvU0ZrPS8yMTgxeDEzNzUvZmlsdGVyczpub191cHNjYWxlKCk6bWF4X2J5dGVzKDE1MDAwMCk6c3RyaXBfaWNjKCkvZ3JpbGxlZC1zYWxtb24tc3RlYWstZ2FybmlzaGVkLXdpdGgtZ3JlZW4tYXNwYXJhZ3VzLS1sZW1vbi1hbmQtdG9tYXRvZXMtMTE0MzkzMTc1Ni1kNjFiZWZhYjU4ZGU0YmM3ODBkMjkzYjk1N2EyZWE1Yi5qcGcnLCAgICAgICBcclxuICAgICAgICBpZDogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vYXNzZXRzLnVuZW52aXJvbm1lbnQub3JnLzIwMjEtMDgvbG91aXMtaGFuc2VsLVJObWlibkxDSkFBLXVuc3BsYXNoLmpwZWcnLCAgICAgICBcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vdGhlZHJlYW1hZnJpY2EuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3L1VnYWxpLWRpc2guanBnJywgICAgICAgXHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgaW1hZ2U6ICdodHRwOi8vY2RuLm9uZS5vcmcvYWZyaWNhL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzExL1NjcmVlbi1TaG90LTIwMTQtMTEtMjUtYXQtMTUuMDUuNDEucG5nJywgICAgICAgXHJcbiAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3d3dy5taWNoYWVsbW9yb25lcy5vcmcvd3AtY29udGVudC91cGxvYWRzL25pZ2VyaWFuLXN1eWEtcmVjaXBlLW1haW4tcGhvdG8uanBnJywgICAgICAgXHJcbiAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxuXHJcbiAgIGZ1bmN0aW9uIGltYWdlcygpe1xyXG4gICAgIGNvbnN0IGltYWdlID0gY291cm9zZWxJbWcubWFwKGltZyA9PiB7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJteVNsaWRlcyBmYWRlXCIgaWQ9J2ltYWdlJHtpbWcuaWR9Jz4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7aW1nLmltYWdlfSBzdHlsZT1cIndpZHRoOjEwMCVcIj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICB9KVxyXG4gICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZS5qb2luKCcgJykpXHJcbiAgICByZXR1cm4gaW1hZ2Uuam9pbignICcpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBob21lQ2hpbGRyZW4gPSAgKCkgPT4geyAgICAgICBcclxuICAgICAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lLWJhY2tncm91bmQnKTtcclxuICAgICAgICBob21lLmlubmVySFRNTCA9IGAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlc2hvdy1jb250YWluZXJcIj4gIFxyXG4gICAgICAgICR7aW1hZ2VzKCl9ICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cInByZXZcIiA+JiMxMDA5NDs8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmV4dFwiID4mIzEwMDk1OzwvYT4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWhvbGRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidG4gb3JkZXItYnRuJz5PcmRlciBub3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZG90LWNvbnRhaW5lcicgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RcIiBvbmNsaWNrPVwiY3VycmVudFNsaWRlKDEpXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RcIiBvbmNsaWNrPVwiY3VycmVudFNsaWRlKDIpXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RcIiBvbmNsaWNrPVwiY3VycmVudFNsaWRlKDMpXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3RcIiBvbmNsaWNrPVwiY3VycmVudFNsaWRlKDQpXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gICBcclxuICAgIGA7XHJcbiAgICAgcmV0dXJuIGhvbWU7XHJcbiAgIH1cclxuXHJcbi8vICAgIERpc3BsYXkgaW1hZ2Ugb24gcGFnZSBsb2FkXHJcbiAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7ICAgIFxyXG4gICAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXlTbGlkZXMnKTsgICBcclxuICAgIGNvbnNvbGUubG9nKGltYWdlcyk7ICAgXHJcblxyXG4gICAgY29uc3QgZGlzcGxheUltYWdlID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlJyArIChpbmRleCArIDEpICsgJzonLCBpbmRleCkgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGltYWdlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBpZiggaSA9PT0gaW1hZ2VzW2luZGV4XS5pZC5tYXRjaCgvXFxkL2cpLnRvU3RyaW5nKCkqMSl7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbWFnZXNbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1hZ2VzW2luZGV4XS5pZCk7XHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBuID0gW107ICAgIFxyXG4gICAgZGlzcGxheUltYWdlKG4ubGVuZ3RoKVxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4geyAgICAgICAgIFxyXG4gICAgICAgIGlmKG4ubGVuZ3RoIDwgaW1hZ2VzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGRpc3BsYXlJbWFnZShuLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIG4ucHVzaCgxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuID0gW107XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCduIGVtcHR5IGFnYWluLCBiZWNhdXNlLCBpdHMgbGVuZ3RoIGlzIG1vcmUgdGhhbiBmaXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG4pOyAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2cobi5sZW5ndGgsICcgZW5kIG9mIGNvZGUnKVxyXG4gICAgfSwgNTAwMCk7XHJcbiAgIH0pXHJcbiAgIFxyXG4gICByZXR1cm4geyBob21lQ2hpbGRyZW4gfVxyXG5cclxufSkoKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJcclxuY2xhc3MgTWVudXtcclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJpbXBvcnQgSlJsb2dvIGZyb20gJy4uL2xvZ28ucG5nJ1xyXG5pbXBvcnQgJy4vbmF2QmFyLmNzcydcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uQmFyID0gKCgpID0+IHsgICBcclxuICAgIFxyXG4gICAgY29uc3QgY3JlYXRlTmF2QmFyID0gKCkgPT4geyAgICAgICBcclxuICAgICAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXYtY29udGFpbmVyJyk7ICAgICAgIFxyXG4gICAgICAgIG5hdkNvbnRhaW5lci5pbm5lckhUTUwgPSBgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nby13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7SlJsb2dvfVwiIGFsdD1cIkpSIEtpdGNoZW4gTG9nb1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cInRhYi13cmFwcGVyXCI+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbGluay13cmFwcGVyJz4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzPVwibmF2LXRhYiBob21lIGFjdGl2ZVNlY3Rpb25cIiBpZD1cImhvbWUtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSG9tZSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdsaW5rLXdyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzPVwibmF2LXRhYiBtZW51XCIgaWQ9XCJtZW51LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE1lbnVcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2xpbmstd3JhcHBlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIycgY2xhc3M9XCJuYXYtdGFiIGNvbnRhY3RcIiBpZD1cImNvbnRhY3QtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT4gIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L25hdj4gICAgICAgICAgICAgIFxyXG4gICAgICAgIGA7ICAgXHJcbiAgICAgICAgcmV0dXJuIG5hdkNvbnRhaW5lcjtcclxuICAgIH0gICAgXHJcblxyXG4gICAgcmV0dXJuIHsgY3JlYXRlTmF2QmFyfVxyXG5cclxufSkoKVxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBuYXZpZ2F0aW9uQmFyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vY29tcG9uZW50cy9Ib21lXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL2NvbXBvbmVudHMvTWVudVwiO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRhY3RcIjtcclxuaW1wb3J0ICcuL0FwcC5jc3MnXHJcblxyXG5cclxuY29uc3QgYXBwVUkgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgcGFnZUNvbmF0YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG4gICBcclxuICAgIC8vSW5zZXJ0IE5hdkJhciAgICBcclxuICAgIGNvbnN0IG5hdkJhciA9IG5hdmlnYXRpb25CYXIuY3JlYXRlTmF2QmFyKCdIb21lJywgJ01lbnUnLCAnQ29udGFjdCcpO1xyXG4gICAgcGFnZUNvbmF0YWluZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcclxuXHJcbiAgICAvL0NyZWF0ZSBoZXJvIHNlY3Rpb24gcGFnZSBjb250YWluZXJcclxuICAgIGNvbnN0IGhlcm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlcm9Db250YWluZXIuaWQgPSAnaGVyby1jb250YWluZXInO1xyXG4gICAgcGFnZUNvbmF0YWluZXIuYXBwZW5kQ2hpbGQoaGVyb0NvbnRhaW5lcik7XHJcblxyXG4gICAgLy9DcmVhdGUgU2VjdGlvbnNcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24oaWQpe1xyXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGVsLmlkID0gYCR7aWR9YDtcclxuICAgICAgICBlbC5jbGFzc05hbWUgPSBgJHtpZH0td3JhcHBlciBzZWN0aW9uYDtcclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9ICAgICAgXHJcblxyXG4gICAgLy9Ib21lIHNlY3Rpb25cclxuICAgIGNvbnN0IGhvbWVTZWN0aW9uID0gY3JlYXRlU2VjdGlvbignaG9tZScpO1xyXG4gICAgICAgIC8vIFNlbGVjdCBob21lIGFzIGRlZmF1bHQgZGlzcGxheSBzZWN0aW9uXHJcbiAgICAgICAgaG9tZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbm93LWRpc3BsYXllZCcpO1xyXG4gICAgICAgIGhvbWVTZWN0aW9uLmFwcGVuZENoaWxkKEhvbWUuaG9tZUNoaWxkcmVuKCkpO1xyXG4gICAgICAgXHJcblxyXG4gICAgLy9NZW51IHNlY3Rpb25cclxuICAgIGNvbnN0IG1lbnVTZWN0aW9uID0gY3JlYXRlU2VjdGlvbignbWVudScpO1xyXG5cclxuXHJcbiAgICAvL0NvbnRhY3QgU2VjdGlvblxyXG4gICAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBjcmVhdGVTZWN0aW9uKCdjb250YWN0Jyk7XHJcbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0LmNvbnRhY3RDaGlsZHJlbigpKTtcclxuXHJcblxyXG5cclxuICAgIGhlcm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVNlY3Rpb24pO1xyXG4gICAgaGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XHJcbiAgICBoZXJvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RTZWN0aW9uKTtcclxuXHJcbiAgIC8vIERpc3BsYXkgU2VjdGlvbiBFdmVudFxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlQWN0aXZlU2VjdGlvbihlbGVtZW50LCBub2RlTGlzdCwgY2xhc3NOYW1lKXtcclxuICAgICAgICBub2RlTGlzdC5mb3JFYWNoKGVsID0+IHsgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgaWYoZWwuaWQgPT09IGVsZW1lbnQuaWQpe1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlQWN0aXZlU2VjdGlvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpLCBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbicpLFxyXG4gICAgICAgICdub3ctZGlzcGxheWVkJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdG9nZ2xlQWN0aXZlU2VjdGlvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1idG4nKSwgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi10YWInKSxcclxuICAgICAgICAnYWN0aXZlU2VjdGlvbicpOyAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICB0b2dnbGVBY3RpdmVTZWN0aW9uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JyksXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKSxcclxuICAgICAgICAnbm93LWRpc3BsYXllZCdcclxuICAgICAgICApOyBcclxuICAgICAgICB0b2dnbGVBY3RpdmVTZWN0aW9uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpLCBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LXRhYicpLFxyXG4gICAgICAgICdhY3RpdmVTZWN0aW9uJyk7ICBcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICB0b2dnbGVBY3RpdmVTZWN0aW9uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0JyksXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKSxcclxuICAgICAgICAnbm93LWRpc3BsYXllZCdcclxuICAgICAgICApO1xyXG4gICAgICAgIHRvZ2dsZUFjdGl2ZVNlY3Rpb24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtYnRuJyksIFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtdGFiJyksXHJcbiAgICAgICAgJ2FjdGl2ZVNlY3Rpb24nKTsgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7ICB9XHJcblxyXG59KSgpXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBVSTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=