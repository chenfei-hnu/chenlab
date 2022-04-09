"use strict";
(self["webpackChunkreact_cli"] = self["webpackChunkreact_cli"] || []).push([[238],{

/***/ 4238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Contact)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/pages/Contact/index.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const Contact = ({"contactWrap":"index_contactWrap_Dq6b8x","mainTitle":"index_mainTitle_pZGycG","desc":"index_desc__cmRF_","bold":"index_bold_EbaHSU","position":"index_position_pASU9D","imgs":"index_imgs_gzEbtt"});
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(6003);
// EXTERNAL MODULE: ./src/asset/contact1.jpg
var contact1 = __webpack_require__(4362);
// EXTERNAL MODULE: ./src/asset/contact2.jpg
var contact2 = __webpack_require__(4718);
// EXTERNAL MODULE: ./src/asset/position.png
var position = __webpack_require__(374);
;// CONCATENATED MODULE: ./src/pages/Contact/index.tsx






function Contact_Contact() {
    return (react.createElement("div", { className: Contact.contactWrap },
        react.createElement("div", { className: Contact.mainTitle }, "\u8054\u7CFB\u6211\u4EEC"),
        react.createElement("div", { className: Contact.desc },
            react.createElement("span", { className: Contact.bold }, "\u9648\u98DE"),
            react.createElement("span", null, "\u6E56\u5357\u5927\u5B66\u5916\u56FD\u8BED\u5B66\u9662"),
            react.createElement("span", null, "\u6E56\u5357\u7701\u957F\u6C99\u5E02\u5CB3\u9E93\u533A\u9E93\u5C71\u5357\u8DEF2\u53F7\u6E56\u5357\u5927\u5B66\uFF0C410082"),
            react.createElement("span", null, "\u7535\u8BDD\uFF1A+86-17788926788"),
            react.createElement("span", null, "E-mail\uFF1Achenfeianthony@gmail.com")),
        react.createElement("div", { className: Contact.position },
            react.createElement("img", { alt: "", src: position })),
        react.createElement("div", { className: Contact.imgs },
            react.createElement("img", { alt: "", src: contact1 }),
            react.createElement("img", { alt: "", src: contact2 }))));
}
var mapStateToProps = function (_a) {
    var common = _a.common;
    return ({ common: common });
};
/* harmony default export */ const pages_Contact = ((0,es/* connect */.$j)(mapStateToProps)(Contact_Contact));


/***/ }),

/***/ 4362:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/contact1.aaea5794..jpg";

/***/ }),

/***/ 4718:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/contact2.5d6f4623..jpg";

/***/ }),

/***/ 374:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/position.22908b67..png";

/***/ })

}]);