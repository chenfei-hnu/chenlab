(self["webpackChunkreact_cli"] = self["webpackChunkreact_cli"] || []).push([[307],{

/***/ 6307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_LabPic)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/pages/LabPic/index.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const LabPic = ({"labPicWrap":"index_labPicWrap_MriVQv","options":"index_options_E2xf84","option":"index_option__ewYdc","selected":"index_selected_n0HiLQ","split":"index_split_nbfim7","list":"index_list_g6rVNa","item":"index_item_i7sRq_","pic":"index_pic__j8a9d","info":"index_info_ODM1F_"});
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(7509);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 50 modules
var es_button = __webpack_require__(4619);
// EXTERNAL MODULE: ./node_modules/antd/es/button/style/css.js + 1 modules
var css = __webpack_require__(3266);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 11 modules
var empty = __webpack_require__(2294);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/style/css.js + 1 modules
var style_css = __webpack_require__(7319);
;// CONCATENATED MODULE: ./src/pages/LabPic/index.tsx







var total = [
    {
        name: '四周年合影',
        img: '四周年合影',
        type: '组内合影',
    },
    {
        name: '两周年聚餐',
        img: '两周年聚餐',
        type: '组内合影',
    },
    {
        name: '2018年教师节',
        img: '2018年教师节',
        type: '组内合影',
    },
    {
        name: '组内合影',
        img: '组内合影1',
        type: '组内合影',
    },
    {
        name: '组内合影',
        img: '组内合影2',
        type: '组内合影',
    },
    {
        name: '组内合影',
        img: '组内合影3',
        type: '组内合影',
    },
    {
        name: '组内合影',
        img: '组内合影4',
        type: '组内合影',
    },
    {
        name: '组内合影',
        img: '组内合影5',
        type: '组内合影',
    },
    {
        name: '等离子体清洗仪',
        img: '等离子体清洗仪',
        type: '实验室仪器',
    },
    {
        name: '高分辨显微镜',
        img: '高分辨显微镜',
        type: '实验室仪器',
    },
    {
        name: 'CVD房',
        img: 'CVD房',
        type: '实验室环境',
    },
    {
        name: '实验室',
        img: '实验室',
        type: '实验室环境',
    },
    {
        name: '露台',
        img: '露台',
        type: '实验室环境',
    },
    {
        name: '楼梯间',
        img: '楼梯间',
        type: '实验室环境',
    },
    {
        name: 'NT 18',
        img: 'NT 18',
        type: '学术活动',
    },
    {
        name: '访问澳门大学',
        img: '访问澳门大学',
        type: '学术活动',
    },
    {
        name: '四周年活动',
        img: '四周年活动',
        type: '实验室活动',
    },
    {
        name: '户外烧烤',
        img: '户外烧烤',
        type: '实验室活动',
    },
    {
        name: '实验室一周年纪念',
        img: '实验室一周年纪念',
        type: '实验室活动',
    },
];
var options = [
    {
        label: '组内合影',
        value: '组内合影',
    },
    {
        label: '实验室仪器',
        value: '实验室仪器',
    },
    {
        label: '实验室环境',
        value: '实验室环境',
    },
    {
        label: '学术活动',
        value: '学术活动',
    },
    {
        label: '实验室活动',
        value: '实验室活动',
    },
];
function LabPic_LabPic() {
    var _a = (0,react.useState)([]), list = _a[0], setList = _a[1];
    var _b = (0,react.useState)('组内合影'), curOpt = _b[0], setCurOpt = _b[1];
    (0,react.useEffect)(function () {
        setList(total.filter(function (item) {
            return curOpt === item.type;
        }));
    }, [curOpt]);
    return (react.createElement("div", { className: LabPic.labPicWrap },
        react.createElement("div", { className: LabPic.options }, options.map(function (option, index) {
            var getOptionClass = function () {
                return LabPic.option + " " + (curOpt === option.value ? LabPic.selected : null);
            };
            return (react.createElement("span", { key: option.value, className: getOptionClass() },
                !!index ? react.createElement("span", { className: LabPic.split }) : null,
                react.createElement(es_button/* default */.Z, { type: "link", onClick: function () {
                        setCurOpt(option.value);
                    } }, option.label)));
        })),
        react.createElement("div", { className: LabPic.list },
            list.length === 0 ? react.createElement(empty/* default */.Z, { description: "\u6682\u65E0\u6570\u636E" }) : null,
            list.map(function (item) {
                return (react.createElement("div", { className: LabPic.item, key: item.img },
                    react.createElement("div", { className: LabPic.pic },
                        react.createElement("img", { src: __webpack_require__(1552)("./" + item.img + ".jpg"), width: "230", height: "170", alt: item.name })),
                    react.createElement("div", { className: LabPic.info },
                        react.createElement("div", { className: LabPic.name }, item.name))));
            }))));
}
var mapStateToProps = function (_a) {
    var common = _a.common;
    return ({ common: common });
};
/* harmony default export */ const pages_LabPic = ((0,es/* connect */.$j)(mapStateToProps)(LabPic_LabPic));


/***/ }),

/***/ 1552:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./2018年教师节.jpg": 3206,
	"./CVD房.jpg": 2575,
	"./NT 18.jpg": 2838,
	"./两周年聚餐.jpg": 3793,
	"./四周年合影.jpg": 3387,
	"./四周年活动.jpg": 4026,
	"./实验室.jpg": 658,
	"./实验室一周年纪念.jpg": 6101,
	"./户外烧烤.jpg": 6608,
	"./楼梯间.jpg": 8693,
	"./等离子体清洗仪.jpg": 1646,
	"./组内合影1.jpg": 9373,
	"./组内合影2.jpg": 1441,
	"./组内合影3.jpg": 2309,
	"./组内合影4.jpg": 2593,
	"./组内合影5.jpg": 4120,
	"./访问澳门大学.jpg": 9806,
	"./露台.jpg": 6876,
	"./高分辨显微镜.jpg": 6873
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1552;

/***/ }),

/***/ 3206:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/2018年教师节.87af872d..jpg";

/***/ }),

/***/ 2575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/CVD房.a789c2fe..jpg";

/***/ }),

/***/ 2838:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/NT 18.fee45a47..jpg";

/***/ }),

/***/ 3793:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/两周年聚餐.cb5f0115..jpg";

/***/ }),

/***/ 3387:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/四周年合影.5c20986b..jpg";

/***/ }),

/***/ 4026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/四周年活动.05e65cf9..jpg";

/***/ }),

/***/ 658:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/实验室.e76ca0ae..jpg";

/***/ }),

/***/ 6101:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/实验室一周年纪念.4c14f6b9..jpg";

/***/ }),

/***/ 6608:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/户外烧烤.7599f502..jpg";

/***/ }),

/***/ 8693:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/楼梯间.03f753ee..jpg";

/***/ }),

/***/ 1646:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/等离子体清洗仪.ab67338c..jpg";

/***/ }),

/***/ 9373:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/组内合影1.adb1dcb6..jpg";

/***/ }),

/***/ 1441:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/组内合影2.96e0efe8..jpg";

/***/ }),

/***/ 2309:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/组内合影3.034e979b..jpg";

/***/ }),

/***/ 2593:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/组内合影4.b70ca457..jpg";

/***/ }),

/***/ 4120:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/组内合影5.4abc9ba4..jpg";

/***/ }),

/***/ 9806:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/访问澳门大学.823ca7ac..jpg";

/***/ }),

/***/ 6876:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/露台.0a47978f..jpg";

/***/ }),

/***/ 6873:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/高分辨显微镜.55400fce..jpg";

/***/ })

}]);