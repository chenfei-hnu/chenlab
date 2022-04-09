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
var es = __webpack_require__(6003);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 50 modules
var es_button = __webpack_require__(7847);
// EXTERNAL MODULE: ./node_modules/antd/es/button/style/css.js + 1 modules
var css = __webpack_require__(3266);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 11 modules
var empty = __webpack_require__(2294);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/style/css.js + 1 modules
var style_css = __webpack_require__(7319);
;// CONCATENATED MODULE: ./src/pages/LabPic/index.tsx







var total = [
    {
        name: '聚餐1',
        img: 'znhy/聚餐1',
        type: '组内合影',
    },
    {
        name: '聚餐2',
        img: 'znhy/聚餐2',
        type: '组内合影',
    },
    {
        name: '聚餐3',
        img: 'znhy/聚餐3',
        type: '组内合影',
    },
    {
        name: '爬山',
        img: 'znhy/爬山',
        type: '组内合影',
    },
    {
        name: 'Chronos盒子',
        img: 'syssb/Chronos盒子',
        type: '实验室设备',
    },
    {
        name: 'EGG培训',
        img: 'syssb/EGG培训',
        type: '实验室设备',
    },
    {
        name: 'Eprime3',
        img: 'syssb/Eprime3',
        type: '实验室设备',
    },
    {
        name: 'PTONI测试',
        img: 'syssb/PTONI测试',
        type: '实验室设备',
    },
    {
        name: 'tDCS',
        img: 'syssb/tDCS',
        type: '实验室设备',
    },
    {
        name: '数据采集电脑',
        img: 'syssb/数据采集电脑',
        type: '实验室设备',
    },
    {
        name: '听力计GSI18',
        img: 'syssb/听力计GSI18',
        type: '实验室设备',
    },
    {
        name: 'PCC2021',
        img: 'xshd/PCC2021',
        type: '学术活动',
    },
    {
        name: '博士创新论坛',
        img: 'xshd/博士创新论坛',
        type: '学术活动',
    },
    {
        name: '博士后开题',
        img: 'xshd/博士后开题',
        type: '学术活动',
    },
    {
        name: '成员学术报告1',
        img: 'xshd/成员学术报告1',
        type: '学术活动',
    },
    {
        name: '成员学术报告2',
        img: 'xshd/成员学术报告2',
        type: '学术活动',
    },
    {
        name: '成员学术报告3',
        img: 'xshd/成员学术报告3',
        type: '学术活动',
    },
    {
        name: '三下乡',
        img: 'xshd/三下乡',
        type: '学术活动',
    },
    {
        name: '翻译年会_陈飞',
        img: 'xshd/翻译年会_陈飞',
        type: '学术活动',
    },
    {
        name: '实验招募海报1',
        img: 'xshd/实验招募海报1',
        type: '学术活动',
    },
    {
        name: '实验招募海报2',
        img: 'xshd/实验招募海报2',
        type: '学术活动',
    },
    {
        name: '实验招募海报3',
        img: 'xshd/实验招募海报3',
        type: '学术活动',
    },
    {
        name: '主办会议-R workshop1',
        img: 'xshd/主办会议-R workshop1',
        type: '学术活动',
    },
    {
        name: '主办会议-R workshop2',
        img: 'xshd/主办会议-R workshop2',
        type: '学术活动',
    },
    {
        name: '主办会议-博士论坛',
        img: 'xshd/主办会议-博士论坛',
        type: '学术活动',
    },
    {
        name: '爬山1',
        img: 'syshd/爬山1',
        type: '实验室活动',
    },
    {
        name: '爬山2',
        img: 'syshd/爬山2',
        type: '实验室活动',
    },
    {
        name: '田野调查',
        img: 'syshd/田野调查',
        type: '实验室活动',
    },
    {
        name: '湘雅访问',
        img: 'syshd/湘雅访问',
        type: '实验室活动',
    },
    {
        name: '语音学课堂',
        img: 'syshd/语音学课堂',
        type: '实验室活动',
    },
    {
        name: '组会1',
        img: 'syshd/组会1',
        type: '实验室活动',
    },
];
var options = [
    {
        label: '组内合影',
        value: '组内合影',
    },
    {
        label: '实验室设备',
        value: '实验室设备',
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
	"./syshd/湘雅访问.jpg": 5613,
	"./syshd/爬山1.jpg": 9298,
	"./syshd/爬山2.jpg": 4567,
	"./syshd/田野调查.jpg": 4582,
	"./syshd/组会1.jpg": 7965,
	"./syshd/语音学课堂.jpg": 390,
	"./syssb/Chronos盒子.jpg": 9142,
	"./syssb/EGG培训.jpg": 3309,
	"./syssb/Eprime3.jpg": 2930,
	"./syssb/PTONI测试.jpg": 1026,
	"./syssb/tDCS.jpg": 4078,
	"./syssb/听力计GSI18.jpg": 3221,
	"./syssb/数据采集电脑.jpg": 0,
	"./xshd/PCC2021.jpg": 1421,
	"./xshd/三下乡.jpg": 7605,
	"./xshd/主办会议-R workshop1.jpg": 6180,
	"./xshd/主办会议-R workshop2.jpg": 2323,
	"./xshd/主办会议-博士论坛.jpg": 4961,
	"./xshd/博士创新论坛.jpg": 6858,
	"./xshd/博士后开题.jpg": 8410,
	"./xshd/实验招募海报1.jpg": 7265,
	"./xshd/实验招募海报2.jpg": 8154,
	"./xshd/实验招募海报3.jpg": 3268,
	"./xshd/成员学术报告1.jpg": 871,
	"./xshd/成员学术报告2.jpg": 5531,
	"./xshd/成员学术报告3.jpg": 873,
	"./xshd/翻译年会_陈飞.jpg": 2738,
	"./znhy/爬山.jpg": 5036,
	"./znhy/聚餐1.jpg": 8976,
	"./znhy/聚餐2.jpg": 4421,
	"./znhy/聚餐3.jpg": 466
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

/***/ 5613:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/湘雅访问.bb848c37..jpg";

/***/ }),

/***/ 9298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/爬山1.85d7c037..jpg";

/***/ }),

/***/ 4567:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/爬山2.50c6d034..jpg";

/***/ }),

/***/ 4582:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/田野调查.158f599a..jpg";

/***/ }),

/***/ 7965:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/组会1.bc761e1e..jpg";

/***/ }),

/***/ 390:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/语音学课堂.707eeb1d..jpg";

/***/ }),

/***/ 9142:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Chronos盒子.42a29507..jpg";

/***/ }),

/***/ 3309:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/EGG培训.7e548d68..jpg";

/***/ }),

/***/ 2930:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Eprime3.fa034a84..jpg";

/***/ }),

/***/ 1026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/PTONI测试.f7d1fe31..jpg";

/***/ }),

/***/ 4078:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/tDCS.4847bafd..jpg";

/***/ }),

/***/ 3221:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/听力计GSI18.fa73a971..jpg";

/***/ }),

/***/ 0:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/数据采集电脑.8cf6100a..jpg";

/***/ }),

/***/ 1421:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/PCC2021.3e3acd21..jpg";

/***/ }),

/***/ 7605:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/三下乡.1f145c66..jpg";

/***/ }),

/***/ 6180:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/主办会议-R workshop1.0f138bbf..jpg";

/***/ }),

/***/ 2323:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/主办会议-R workshop2.fd779fa1..jpg";

/***/ }),

/***/ 4961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/主办会议-博士论坛.326dfc6a..jpg";

/***/ }),

/***/ 6858:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/博士创新论坛.c61c1dd9..jpg";

/***/ }),

/***/ 8410:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/博士后开题.80e5b477..jpg";

/***/ }),

/***/ 7265:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/实验招募海报1.7f451c6a..jpg";

/***/ }),

/***/ 8154:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/实验招募海报2.bfb23554..jpg";

/***/ }),

/***/ 3268:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/实验招募海报3.7414aefa..jpg";

/***/ }),

/***/ 871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/成员学术报告1.d6600a68..jpg";

/***/ }),

/***/ 5531:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/成员学术报告2.a485f5b6..jpg";

/***/ }),

/***/ 873:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/成员学术报告3.7632093a..jpg";

/***/ }),

/***/ 2738:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/翻译年会_陈飞.b6e331fd..jpg";

/***/ }),

/***/ 5036:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/爬山.b10d843c..jpg";

/***/ }),

/***/ 8976:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/聚餐1.0b651150..jpg";

/***/ }),

/***/ 4421:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/聚餐2.2a6e04b2..jpg";

/***/ }),

/***/ 466:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/聚餐3.6986a52b..jpg";

/***/ })

}]);