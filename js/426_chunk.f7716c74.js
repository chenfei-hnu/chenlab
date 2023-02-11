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
var es = __webpack_require__(6003);
;// CONCATENATED MODULE: ./src/pages/News/index.tsx



function News_News() {
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
    return (react.createElement("div", { className: News.newsWrap },
        react.createElement("div", { className: News.mainTitle }, "\u65B0\u95FB\u52A8\u6001"),
        react.createElement("div", { className: News.list }, news.map(function (item) {
            return (react.createElement("div", { key: item.title, className: News.partWapper },
                react.createElement("div", { className: "news_dl" },
                    react.createElement("dt", null,
                        react.createElement("span", { className: News.title }, item.title),
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