(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{191:function(t,e,o){var content=o(194);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("5c1fa1c4",content,!0,{sourceMap:!1})},192:function(t,e,o){var content=o(196);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("ea7dd5e8",content,!0,{sourceMap:!1})},193:function(t,e,o){"use strict";o(191)},194:function(t,e,o){var n=o(23)(!1);n.push([t.i,"#spy{position:absolute;width:180px;list-style:none;text-align:left;font-weight:400;z-index:0;margin-left:730px}#spy ul{position:sticky;border-left:1px dashed rgba(0,0,0,.2);top:50px}#spy ul,#spy ul li{box-sizing:border-box}#spy ul li{padding-left:20px;max-width:180px}#spy ul li a{font-size:.82rem}#spy .uk-active a{transition-duration:.5s;color:rgba(0,0,0,.9);font-weight:500}#spy a[data-tag=h3]{padding-left:15px}@media screen and (max-width:1200px){#spy{display:none!important}}",""]),t.exports=n},195:function(t,e,o){"use strict";o(192)},196:function(t,e,o){var n=o(23)(!1);n.push([t.i,'#document{padding-top:25px;color:rgba(0,0,0,.85)}#document .version{font-weight:600;margin-left:5px;font-size:14px;color:#ed5207}#document .version:before{content:"#";color:#ed5207;margin-right:5px}#document .header{text-align:center;margin-bottom:50px}#document .header h1{font-weight:500;font-size:2.1em}#document .header .index{margin-bottom:15px;color:#ed5207;font-weight:500;font-size:1.1em}#document .paragraph{margin:35px 0}#document .paragraph *{word-break:break-all}#document .paragraph h2>a,#document .paragraph h3>a{text-decoration:none}#document .paragraph h2{font-weight:400;margin-bottom:35px;font-size:1.5em}#document .paragraph h2:before{content:"#";color:#ed5207;font-weight:400;margin-right:10px}#document .paragraph h3{font-weight:500;margin-top:25px;margin-bottom:20px;font-size:1.2em}#document .paragraph h4{font-weight:500;margin-bottom:5px;font-size:1.1em}#document .paragraph p{margin:25px 0;line-height:1.9em}#document .paragraph ol{padding-left:20px}#document .paragraph ol li{line-height:1.9em;padding:10px 0}#document .paragraph ol li p{margin:8px 0}#document .paragraph b{color:#ed5207;font-weight:500}#document .paragraph a{text-decoration:underline}#document .paragraph pre{border-radius:5px;background:none;border:none}#document .paragraph pre>code{background-color:#f8f8f8;padding:15px}#document .paragraph blockquote{line-height:inherit;font-size:inherit;font-style:inherit}#document .paragraph .blockquote-type-1{border:1px solid rgba(0,0,0,.1);padding:15px}#document .paragraph .blockquote-type-1 p{margin:10px 0}#document .paragraph .blockquote-type-2{border:solid #acacac;border-width:0 0 0 2px;padding:1px 0 0 12px;color:#666;line-height:1.8em;text-align:left;font-size:.9em}#document .paragraph .blockquote-type-3{background-color:#f8f8f8;padding:15px;font-weight:300}#document .footer .arrows{overflow:hidden;margin-top:50px}#document .footer .arrows a{text-decoration:none!important}#document .footer .arrows .left{float:left}#document .footer .arrows .left i{margin-right:3px}#document .footer .arrows .right{float:right}#document .footer .arrows .right i{margin-left:3px}@media (min-width:1200px){#document{padding-bottom:75px}}@media (max-width:1200px){#document{padding-bottom:35px}}',""]),t.exports=n},197:function(t,e,o){"use strict";var n=o(67);var r=o(87);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}o(66);var c={data:function(){return{spies:[]}},mounted:function(){var t=this.$parent.$refs.document,e=this.$refs.spy.querySelector("ul");this.setAnchorHeadings(t,"h2, h3"),this.extractHeadings(t,"h2, h3").forEach((function(t){var o=document.createElement("a");o.textContent=t.label,o.setAttribute("href",t.href),o.setAttribute("data-tag",t.tag);var n=document.createElement("li");n.appendChild(o),e.appendChild(n)})),this.$refs.spy.style.top=t.offsetTop+t.querySelector("header").offsetHeight+"px",this.$refs.spy.style.height=t.offsetHeight-75-25+"px",UIkit.scrollspyNav("#spy",{closest:"li",offset:0})},methods:{setAnchorHeadings:function(t,e){l(t.querySelectorAll(e)).forEach((function(t){var e=encodeURIComponent(t.textContent).replace(/[0-9-_.!~*'()\s]/g,"-"),o=document.createElement("a");o.setAttribute("href","#"+e),o.textContent=t.textContent,t.innerHTML=o.outerHTML,t.setAttribute("id",e)}))},extractHeadings:function(t,e){return l(t.querySelectorAll(e)).reduce((function(t,e){var o=e.querySelector("a");return t.push({href:o.getAttribute("href"),label:e.textContent,tag:e.tagName.toLowerCase()}),t}),[])}}},d=(o(193),o(8)),h={props:["active","title"],head:function(){return{title:"티스토리 스킨 프레임워크, 티도리(TIDORY) ― "+this.title}},mounted:function(){this.$store.commit("activeMenu",this.active)},components:{ScrollSpy:Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",{ref:"spy",attrs:{id:"spy"}},[o("ul",{staticClass:"uk-nav uk-nav-default"},t._l(t.spies,(function(e){return o("li",{class:e.cls},[o("NuxtLink",{attrs:{to:e.href}},[t._v(t._s(e.label))])],1)})),0)])}),[],!1,null,null,null).exports}},f=(o(195),Object(d.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"page"}},[o("section",{ref:"document",attrs:{id:"document"}},[t._t("header"),t._t("text"),t._t("footer")],2),o("ScrollSpy")],1)}),[],!1,null,null,null));e.a=f.exports},205:function(t,e,o){"use strict";o.r(e);var n={components:{AppPage:o(197).a},data:function(){return{app:'doctype html\n\nhtml(lang="ko")\n  head\n    meta(charset="utf-8")\n    meta(name="viewport" content="width=device-width, initial-scale=1")\n\n    title [##_page_title_##]\n\n  body(id="[##_body_id_##]")\n    block TIDORY',index:"extends app\n\nblock TIDORY\n  s_t3\n    div#__tidory\n      include views/HelloWorld"}}},r=o(8),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("app-page",{attrs:{active:t.$store.state.menu.basic.template.page,title:t.$store.state.menu.basic.template.label}},[o("header",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"index"},[t._v(t._s(t.$store.state.menu.basic.template.page))]),o("h1",[t._v(t._s(t.$store.state.menu.basic.template.label))])]),o("main",{staticClass:"text",attrs:{slot:"text",role:"text"},slot:"text"},[o("article",{staticClass:"paragraph"},[o("h2",[t._v("문서 구조")]),o("p",[t._v("티도리 프레임워크에서 템플릿은 "),o("a",{attrs:{href:"https://pugjs.org/api/getting-started.html",target:"_blank"}},[t._v("퍼그(Pug)")]),t._v("를 사용합니다. "),o("b",[t._v("퍼그")]),t._v("는 HTML 파트별로 나누고 코드의 길이를 줄여주는 효과적인 템플릿 엔진입니다. "),o("b",[t._v("티도리 프로젝트 템플릿")]),t._v("에서는 크게 "),o("b",[t._v("app.pug, index.pug, views/*.pug")]),t._v(" 로 구성되어 있습니다. 각각이 어떻게 연결되어있는지 살펴보죠!")]),o("h3",[t._v("app.pug")]),o("p",[o("b",[t._v("app.pug")]),t._v(" 템플릿은 "),o("b",[t._v("HTML")]),t._v("의 기본구조가 정의되어있는 템플릿입니다. "),o("b",[t._v("head, body")]),t._v(" 태그와 같이 구조에 해당되는 태그들이 마크업되어 있습니다. "),o("b",[t._v("문서")]),t._v("의 최상위 템플릿이므로 스킨과는 직접적인 연관이 없는 마크업을 넣는 것이 좋습니다.")]),o("highlight-code",{attrs:{lang:"less"}},[t._v(t._s(t.app))]),o("h3",[t._v("index.pug")]),o("p",[o("b",[t._v("index.pug")]),t._v(" 템플릿은 티스토리 스킨의 헤더, 컨텐츠, 푸터, 사이드바와 같은 부가요소가 포함됩니다. "),o("b",[t._v("block TIDORY")]),t._v(" 아래에 "),o("b",[t._v("include")]),t._v(" 키워드를 사용하여 템플릿 파일을 포함시킵니다.")]),o("highlight-code",{attrs:{lang:"less"}},[t._v(t._s(t.index))])],1),o("article",{staticClass:"paragraph"},[o("h2",[t._v("코드 분할")]),o("p",[t._v("우리가 템플릿을 분리해야하는 가장 중요한 이유는 "),o("b",[t._v("재활용")]),t._v("입니다. 템플릿 하나에는 "),o("b",[t._v("스타일, 마크업, 스크립트")]),t._v("가 통째로 들어가기 때문에 다른 스킨을 제작할 때 포함시키기만 하면 다시 작성하지 않아도 됩니다.")]),o("h3"),o("p",[t._v("자, 이제 우리가 다음과 같은 구조로 템플릿을 분리해 놓았다고 생각해봅시다. 이렇게 1차적으로 크게 분리된 것이 "),o("b",[t._v("부모 템플릿")]),t._v("입니다. 이제 각 영역에 속할 "),o("b",[t._v("자식 템플릿")]),t._v("을 만들어봐야 합니다.")]),o("p"),o("blockquote",{staticClass:"blockquote-type-3"},[o("pre",[t._v("├── views/\n│     ├── Header.pug\n│     ├── Content.pug\n│     ├── Sidebar.pug\n│     └── Footer.pug")])]),o("p"),o("p",[t._v("이렇게 나뉘어 있는 것을 "),o("b",[t._v("티스토리 스킨 가이드")]),t._v("를 참고하여 분리해보겠습니다. 자식 템플릿 의 위치는 절대적인 것은 아니나, 부모 템플릿의 이름과 똑같은 폴더 아래에 놓는 것을 원칙으로 합니다.")]),o("p"),o("blockquote",{staticClass:"blockquote-type-3"},[o("pre",[t._v("├── views/\n│     ├── Header.pug\n│     ├── Header\n│           ├── BlogTitle.pug\n│           └── BlogMenu.pug\n│     ├── Content.pug\n│     ├── Content\n│           └── Entry.pug\n│     ├── Sidebar.pug\n│     └── Footer.pug")])]),o("p")])]),o("footer",{staticClass:"footer",attrs:{slot:"footer",role:"footer"},slot:"footer"},[o("div",{staticClass:"arrows"},[o("div",{staticClass:"left"},[o("NuxtLink",{attrs:{to:t.$store.state.menu.basic.directory.href}},[o("i",{staticClass:"fas fa-angle-left"}),t._v(" "+t._s(t.$store.state.menu.basic.directory.label))])],1),o("div",{staticClass:"right"},[o("NuxtLink",{attrs:{to:t.$store.state.menu.basic.example.href}},[t._v(t._s(t.$store.state.menu.basic.example.label)+" "),o("i",{staticClass:"fas fa-angle-right"})])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);