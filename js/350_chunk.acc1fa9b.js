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
var carousel = __webpack_require__(7924);
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
/* harmony default export */ const Home = ({"homeWrap":"index_homeWrap_cAszzG","top":"index_top__XVZFB","left":"index_left_SpFm1t","images":"index_images__tED3P","right":"index_right_vtL9gx","title":"index_title_bgdkRs","more":"index_more_hSmwas","newWapper":"index_newWapper__Z__Hq","news":"index_news_WdYUhQ","loop":"index_loop_I9TwSA","clear":"index_clear_lnxNpJ","bottom":"index_bottom_Qy15ec","descWapper":"index_descWapper_kQRCqh"});
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(6003);
// EXTERNAL MODULE: ./node_modules/react-seamless-scroll/lib/index.js
var lib = __webpack_require__(1841);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./src/asset/home/0.jpg
var _0 = __webpack_require__(2042);
// EXTERNAL MODULE: ./src/asset/home/1.jpg
var _1 = __webpack_require__(6337);
// EXTERNAL MODULE: ./src/asset/home/2.jpg
var _2 = __webpack_require__(1684);
// EXTERNAL MODULE: ./src/asset/home/3.jpg
var _3 = __webpack_require__(1780);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 3 modules
var react_router_dom = __webpack_require__(8149);
;// CONCATENATED MODULE: ./src/pages/Home/index.tsx












function Home_Home() {
    (0,react.useEffect)(function () {
        setNews([
            {
                link: '',
                title: '硕士生张高德以第一作者在《外语教学与研究》发表论文',
                desc: '陈飞课题组的硕士生张高德同学（第一作者）在2023年第1期《外语教学与研究》发表学术论文《不同二语水平中国英语学习者情绪词汇的语义-韵律加工研究》。《外语教学与研究》由北京外国语大学主办，获评“中国国际影响力优秀学术期刊”，系我国外语类唯一A2期刊。',
                time: '2023-01-06',
            },
            {
                link: '',
                title: '课题组博士后获批中国博士后科学基金面上项目资助2项',
                desc: '6月22日，中国博士后科学基金会公示了第71批面上项目拟资助名单，陈飞课题组郭承禹博士申报的《汉藏濒危语言的词汇韵律数据库建设与研究》和阎锦婷博士申报的《汉语自闭症儿童言语韵律产出特征研究》获得第71批面上项目二等资助。',
                time: '2022-06-22',
            },
            {
                link: '',
                title: '陈飞课题组（Chen Lab）网页上线',
                desc: '陈飞课题组网页正式上线，分为首页、研究方向、学术论文、实验室成员、实验室照片、新闻动态等板块，欢迎访问。',
                time: '2022-04-09',
            },
            {
                link: '',
                title: '欢迎四位硕士研究生加入课题组',
                desc: '欢迎硕士研究生王瑾（外国语言学及应用语言学）、陈子龙（外国语言学及应用语言学）、杨宇（外国语言学及应用语言学）、艾雁（学科教学-英语）加入ChenLab，预祝四位新生在未来的学习和研究中取得进步。',
                time: '2022-04-01',
            },
            {
                link: '',
                title: '欢迎四位客座学生访问课题组',
                desc: '欢迎四位客座学生访问实验室：邓凯方（湖南师范大学外国语学院 博士生）、陈禹风（山东大学文学院 博士生）、张雪颖（爱丁堡大学 硕士生）、季玮程（湖南大学文学院 本科生）访问ChenLab，预祝学有所成。',
                time: '2022-03-26',
            },
            {
                link: 'https://www.bilibili.com/video/BV1PM4y157qM?spm_id_from=333.337.search-card.all.click',
                title: '走进通道侗族自治县，传承与保护侗族语言文化',
                desc: '2021年7月22日至28日，为助力乡村振兴，推进少数民族语言开发保护，Chen Lab带领湖南大学外国语学院旧“语”新知实践队来到湖南省怀化市通道侗族自治县，对当地侗语文化保护现状进行走访调查，包括陈飞、郭承禹、范浩坡三位指导教师、7位本科生、2位研究生。依托不同学院的丰富资源及专业知识对少数民族语言开发保护情况进行调研，深入了解现存问题，提出解决策略。 得到了中国青年网的报道。视频地址：https://www.bilibili.com/video/BV1PM4y157qM?spm_id_from=333.337.search-card.all.click',
                time: '2021-07-28',
            },
            {
                link: '',
                title: '陈飞课题组参加第十四届中国语音学学术会议',
                desc: '陈飞课题组郭承禹、张瑜、朱敏等成员于2021年7月18号-7月20号前往甘肃兰州参加第十四届中国语音学学术会议（PCC2021），报告了实验室的最新学术成果：Fei CHEN,  Yu ZHANG, Kexuan LI, Feng XU. (2021). "Suprasegmental similarities and differences between infant- and foreigner-directed speech". 第十四届中国语音学学术会议(PCC2021). July 18-20, 2021, Lanzhou, China.',
                time: '2021-07-20',
            },
        ]);
    }, []);
    var _a = (0,react.useState)([]), news = _a[0], setNews = _a[1];
    return (react.createElement("div", { className: Home.homeWrap },
        react.createElement("div", { className: Home.top },
            react.createElement("div", { className: Home.left },
                react.createElement(carousel/* default */.Z, { autoplay: true, className: Home.images },
                    react.createElement("img", { alt: "", src: _0 }),
                    react.createElement("img", { alt: "", src: _1 }),
                    react.createElement("img", { alt: "", src: _2 }),
                    react.createElement("img", { alt: "", src: _3 }))),
            react.createElement("div", { className: Home.right },
                react.createElement("div", { className: Home.title },
                    react.createElement("h2", null, "\u65B0\u95FB\u52A8\u6001"),
                    react.createElement("span", { className: Home.more },
                        react.createElement(react_router_dom/* Link */.rU, { to: "/xwdt" }, "MORE>>"))),
                react.createElement((lib_default()), { className: Home.newWapper },
                    react.createElement("div", { className: Home.news },
                        react.createElement("div", { className: Home.loop },
                            react.createElement("div", { className: "bd02" },
                                react.createElement("div", { className: "tempWrap" },
                                    react.createElement("ul", { className: "fhqdxx" }, news.map(function (item) {
                                        return (react.createElement("li", { key: item.title },
                                            react.createElement("span", null,
                                                react.createElement("h2", null, item.title),
                                                react.createElement("p", null, item.desc),
                                                react.createElement("span", null,
                                                    "\u53D1\u5E03\u65F6\u95F4\uFF1A",
                                                    item.time))));
                                    }))))))))),
        react.createElement("div", { className: Home.clear }),
        react.createElement("div", { className: Home.bottom },
            react.createElement("div", { className: Home.descWapper },
                react.createElement("h2", null, "\u9648\u98DE\u8BFE\u9898\u7EC4\u2014\u2014Chen Lab"),
                react.createElement("p", null, "\u9648\u98DE\u4E8E2020\u5E749\u6708\u52A0\u5165\u6E56\u5357\u5927\u5B66\u5916\u56FD\u8BED\u5B66\u9662\uFF0C\u73B0\u4EFB\u6E56\u5357\u5927\u5B66\u5916\u56FD\u8BED\u5B66\u9662\u82F1\u8BED\u7CFB\u6559\u6388\uFF0C\u535A\u58EB\u751F\u5BFC\u5E08\u3001\u535A\u58EB\u540E\u5408\u4F5C\u5BFC\u5E08\u3002\u9999\u6E2F\u7406\u5DE5\u5927\u5B66\u4E2D\u6587\u53CA\u53CC\u8BED\u5B66\u7CFB\u535A\u58EB\uFF1B\u7F8E\u56FD\u660E\u5C3C\u82CF\u8FBE\u5927\u5B66\u8A00\u8BED-\u8BED\u8A00-\u542C\u529B\u79D1\u5B66\u7CFB\u8BBF\u95EE\u5B66\u8005\u3002"),
                react.createElement("p", null, "\u4E3B\u8981\u7814\u7A76\u65B9\u5411\uFF1A\u5FC3\u7406\u8BED\u8A00\u5B66\u3001\u795E\u7ECF\u8BED\u8A00\u5B66\u3001\u75C5\u7406\u8BED\u8A00\u5B66\u3001\u4E00\u8BED\u53CA\u4E8C\u8BED\u4E60\u5F97\u3002\u5176\u9886\u57DF\u6D89\u53CA\u5FC3\u7406\u58F0\u5B66\u3001\u8BED\u8A00\u79D1\u5B66\u3001\u5927\u8111\u548C\u8BA4\u77E5\u79D1\u5B66\u3002\u6B22\u8FCE\u5BF9\u76F8\u5173\u9886\u57DF\u611F\u5174\u8DA3\u7684\u672C\u79D1\u751F\u3001\u7855\u58EB\u751F\u3001\u535A\u58EB\u751F\u548C\u535A\u58EB\u540E\u52A0\u5165Chen Lab\u3002"),
                react.createElement("span", null,
                    react.createElement(react_router_dom/* Link */.rU, { to: "/yjfx" }, "+ \u67E5\u770B\u66F4\u591A"))))));
}
var mapStateToProps = function (_a) {
    var common = _a.common;
    return ({ common: common });
};
/* harmony default export */ const pages_Home = ((0,es/* connect */.$j)(mapStateToProps)(Home_Home));


/***/ }),

/***/ 2042:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/0.a5381653..jpg";

/***/ }),

/***/ 6337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1.f2cd793a..jpg";

/***/ }),

/***/ 1684:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2.2a9faef2..jpg";

/***/ }),

/***/ 1780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3.40a9712a..jpg";

/***/ })

}]);