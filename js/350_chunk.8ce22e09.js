"use strict";
(self["webpackChunkreact_cli"] = self["webpackChunkreact_cli"] || []).push([[350],{

/***/ 3350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Home)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/antd/es/carousel/index.js + 24 modules
var carousel = __webpack_require__(8548);
// EXTERNAL MODULE: ./node_modules/antd/es/carousel/style/css.js + 1 modules
var css = __webpack_require__(2230);
// EXTERNAL MODULE: ./node_modules/mockjs/dist/mock.js
var mock = __webpack_require__(8108);
var mock_default = /*#__PURE__*/__webpack_require__.n(mock);
;// CONCATENATED MODULE: ./mock/homeApi.ts

var getHomeData = {
    data: "mockData"
};
/* harmony default export */ const homeApi = (mock_default().mock('/api/get_homeData', 'get', getHomeData));

;// CONCATENATED MODULE: ./src/pages/Home/index.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const Home = ({"homeWrap":"index_homeWrap_cAszzG","top":"index_top__XVZFB","left":"index_left_SpFm1t","images":"index_images__tED3P","image0":"index_image0_vePGZQ","image1":"index_image1_fFveEO","image2":"index_image2_eXVKye","image3":"index_image3_x1Hz4A","image4":"index_image4_WSQdIZ","right":"index_right_vtL9gx","title":"index_title_bgdkRs","more":"index_more_hSmwas","newWapper":"index_newWapper__Z__Hq","news":"index_news_WdYUhQ","loop":"index_loop_I9TwSA","clear":"index_clear_lnxNpJ","bottom":"index_bottom_Qy15ec","descWapper":"index_descWapper_kQRCqh"});
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(7509);
// EXTERNAL MODULE: ./node_modules/react-seamless-scroll/lib/index.js
var lib = __webpack_require__(1841);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/pages/Home/index.tsx







function Home_Home() {
    (0,react.useEffect)(function () {
        setNews([
            {
                link: '',
                title: 'Advance Science 接收文章',
                desc: '热烈祝贺课题组邵功磊的文章“Seamlessly Splicing Metallic SnxMo1...',
                time: '2020-12-29',
            },
            {
                link: '',
                title: 'ACS Applied Nano Materials 接收7文章',
                desc: '热烈祝贺课题组杨美清和邵功磊的文章“Irregularly Shaped Bimetallic ...',
                time: '2021-7-9',
            },
            {
                link: '',
                title: 'Chemistry of Materials 接收文6章',
                desc: '热烈祝贺课题组邵功磊的文章“Modulated Anisotropic Growth of 2D SnS...',
                time: '2021-7-9',
            },
            {
                link: '',
                title: 'Chemistry – An Asian Journal接收5文章',
                desc: '热烈祝贺课题组刘业茹的文章“Functional Group-induced p-Doping of M...',
                time: '2021-7-9',
            },
            {
                link: '',
                title: 'Electrocatalysis 接收文4章',
                desc: '热烈祝贺课题组卢浩滋的文章“Highly Stable PtPdCu Alloy Nanowire Ne...',
                time: '2021-7-9',
            },
            {
                link: '',
                title: 'Materials Technology 接收文章3',
                desc: '热烈祝贺课题组龚慧敏和罗嵩的文章“New perspectives and designs int...',
                time: '2021-7-9',
            },
            {
                link: '',
                title: 'Chemistry of Materials 接收文2...',
                desc: '热烈祝贺课题组靳媛媛的文章“Na2SO4-Regulated High-Quality Growth of ...',
                time: '2021-7-9',
            },
            {
                link: '',
                title: 'Chemistry of Materials 接收文1...',
                desc: '热烈祝贺课题组邵功磊的文章“Twist Angle-Dependent Optical Response...',
                time: '2021-7-9',
            },
        ]);
    }, []);
    var _a = (0,react.useState)([]), news = _a[0], setNews = _a[1];
    return (react.createElement("div", { className: Home.homeWrap },
        react.createElement("div", { className: Home.top },
            react.createElement("div", { className: Home.left },
                react.createElement(carousel/* default */.Z, { autoplay: true, className: Home.images },
                    react.createElement("div", { className: Home.image0 }),
                    react.createElement("div", { className: Home.image1 }),
                    react.createElement("div", { className: Home.image2 }),
                    react.createElement("div", { className: Home.image3 }),
                    react.createElement("div", { className: Home.image4 }))),
            react.createElement("div", { className: Home.right },
                react.createElement("div", { className: Home.title },
                    react.createElement("h2", null, "\u65B0\u95FB\u52A8\u6001"),
                    react.createElement("span", { className: Home.more },
                        react.createElement("a", { href: "news.asp" }, "MORE>>"))),
                react.createElement((lib_default()), { className: Home.newWapper },
                    react.createElement("div", { className: Home.news },
                        react.createElement("div", { className: Home.loop },
                            react.createElement("div", { className: "bd02" },
                                react.createElement("div", { className: "tempWrap" },
                                    react.createElement("ul", { className: "fhqdxx" }, news.map(function (item) {
                                        return (react.createElement("li", { key: item.title },
                                            react.createElement("a", { href: item.link, target: "_blank", title: item.title, rel: "noreferrer" },
                                                react.createElement("h2", null, item.title),
                                                react.createElement("p", null, item.desc),
                                                react.createElement("span", null,
                                                    "\u53D1\u5E03\u65F6\u95F4\uFF1A",
                                                    item.time))));
                                    }))))))))),
        react.createElement("div", { className: Home.clear }),
        react.createElement("div", { className: Home.bottom },
            react.createElement("div", { className: Home.descWapper },
                react.createElement("h2", null, "\u9648\u98DE\u8BFE\u9898\u7EC4 \u2014 \u5B9E\u9A8C\u5BA4"),
                react.createElement("p", null, "\u5218\u677E\u6559\u6388\u4E8E2006\u5E74\u5728\u5357\u5F00\u5927\u5B66\u5316\u5B66\u5B66\u9662\u6750\u6599\u5316\u5B66\u7CFB\u83B7\u5B66\u58EB\u5B66\u4F4D\uFF0C2011\u5E74\u5728\u5317\u4EAC\u5927\u5B66\u5316\u5B66\u4E0E\u5206\u5B50\u5DE5\u7A0B\u5B66\u9662\u83B7\u5F97\u7269\u7406\u5316\u5B66\u535A\u58EB\u5B66\u4F4D\uFF0C\u4E4B\u540E\u5230\u7F8E\u56FD\u51EF\u65AF\u897F\u50A8\u5927\u5B66\u548C\u65B0\u52A0\u5761\u56FD\u7ACB\u5927\u5B66\u4ECE\u4E8B\u535A\u58EB\u540E\u7814\u7A76\u3002"),
                react.createElement("p", null, "2016\u5E7410\u6708\u52A0\u5165\u6E56\u5357\u5927\u5B66\u5316\u5B66\u751F\u7269\u5B66\u4E0E\u7EB3\u7C73\u533B\u5B66\u7814\u7A76\u6240\uFF0C\u5316\u5B66\u751F\u7269\u4F20\u611F\u4E0E\u8BA1\u91CF\u56FD\u5BB6\u91CD\u70B9\u5B9E\u9A8C\u5BA4\uFF0C\u4EFB\u6E56\u5357\u5927\u5B66\u5316\u5B66\u5316\u5DE5\u5B66\u9662\u6559\u6388\uFF0C\u540C\u5E74\u5165\u9009\u6E56\u5357\u7701\u9752\u5E74\u767E\u4EBA\u8BA1\u5212\u3002"),
                react.createElement("span", null,
                    react.createElement("a", { href: "yjfx.asp" }, "+ \u67E5\u770B\u66F4\u591A"))))));
}
var mapStateToProps = function (_a) {
    var common = _a.common;
    return ({ common: common });
};
/* harmony default export */ const pages_Home = ((0,es/* connect */.$j)(mapStateToProps)(Home_Home));


/***/ })

}]);