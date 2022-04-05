"use strict";
(self["webpackChunkreact_cli"] = self["webpackChunkreact_cli"] || []).push([[426],{

/***/ 9426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_News)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/pages/News/index.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const News = ({"newsWrap":"index_newsWrap_IJ3yuD","mainTitle":"index_mainTitle_MGI_UN","list":"index_list_Ck4_ZI","partWapper":"index_partWapper_vPQ54u","title":"index_title__Es6Vc","time":"index_time_yEZAup","desc":"index_desc_xQzftt"});
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(7509);
;// CONCATENATED MODULE: ./src/pages/News/index.tsx



function News_News() {
    (0,react.useEffect)(function () {
        setNews([
            {
                link: '',
                title: 'Advance Science 接收文章',
                desc: '热烈祝贺课题组刘业茹的文章“Functional Group-induced p-Doping of MoS2 by Titanium(IV) Bis(ammonium lactato) Dihydroxide Physisorption”被Chemistry – An Asian Journal接收。',
                time: '2020-12-29',
            },
            {
                link: '',
                title: 'ACS Applied Nano Materials 接收7文章',
                desc: '热烈祝贺课题组卢浩滋的文章“Highly Stable PtPdCu Alloy Nanowire Networks as Oxygen Reduction Electrocatalysts”被Electrocatalysis接收。',
                time: '2021-7-9',
            },
            {
                link: '',
                title: 'Chemistry of Materials 接收文6章',
                desc: '热烈祝贺课题组杨美清和邵功磊的文章“Irregularly Shaped Bimetallic Chalcogenide Ag8SnS6 Nanoparticles as Electrocatalysts for Hydrogen Evolution”被ACS Applied Nano Materials接收。',
                time: '2021-7-9',
            },
            {
                link: '',
                title: 'Chemistry – An Asian Journal接收5文章',
                desc: '热烈祝贺课题组龚慧敏和罗嵩的文章“New perspectives and designs into nature-inspired flexible electronics: status and applications”被Materials Technology接收。',
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
                desc: '热烈祝贺课题组杨美清和邵功磊的文章“Irregularly Shaped Bimetallic Chalcogenide Ag8SnS6 Nanoparticles as Electrocatalysts for Hydrogen Evolution”被ACS Applied Nano Materials接收。',
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
    return (react.createElement("div", { className: News.newsWrap },
        react.createElement("div", { className: News.mainTitle }, "\u65B0\u95FB\u52A8\u6001"),
        react.createElement("div", { className: News.list }, news.map(function (item) {
            return (react.createElement("div", { key: item.title, className: News.partWapper },
                react.createElement("div", { className: "news_dl" },
                    react.createElement("dt", null,
                        react.createElement("a", { href: item.link, target: "_blank", className: News.title, rel: "noreferrer" }, item.title),
                        react.createElement("span", { className: News.time },
                            "[",
                            item.time,
                            "]")),
                    react.createElement("div", { className: News.desc }, item.desc))));
        }))));
}
var mapStateToProps = function (_a) {
    var common = _a.common;
    return ({ common: common });
};
/* harmony default export */ const pages_News = ((0,es/* connect */.$j)(mapStateToProps)(News_News));


/***/ })

}]);