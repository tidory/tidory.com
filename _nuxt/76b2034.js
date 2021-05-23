(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{174:function(t,e,n){var content=n(177);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("5c1fa1c4",content,!0,{sourceMap:!1})},175:function(t,e,n){var content=n(179);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("ea7dd5e8",content,!0,{sourceMap:!1})},176:function(t,e,n){"use strict";n(174)},177:function(t,e,n){var r=n(29)(!1);r.push([t.i,"#spy{position:absolute;top:0;width:180px;list-style:none;text-align:left;font-weight:400;z-index:0;margin-left:730px!important}#spy ul{border-left:1px dashed rgba(0,0,0,.2);top:50px;width:180px}#spy ul,#spy ul li{box-sizing:border-box}#spy ul li{padding-left:20px;max-width:180px}#spy ul li a{font-size:.82rem}#spy ul li.uk-active a{transition-duration:.5s;color:rgba(0,0,0,.9);font-weight:500}#spy a[data-tag=h3]{padding-left:15px}@media screen and (max-width:1200px){#spy{display:none!important}}",""]),t.exports=r},178:function(t,e,n){"use strict";n(175)},179:function(t,e,n){var r=n(29)(!1);r.push([t.i,'#document{margin-top:25px;color:rgba(0,0,0,.85);position:relative}#document .version{font-weight:600;margin-left:5px;font-size:14px;color:#f0506e}#document .version:before{content:"#";color:#f0506e;margin-right:5px}#document .header{text-align:center;margin-bottom:50px}#document .header h1{font-weight:500;font-size:2.1em}#document .header .index{margin-bottom:15px;color:#f0506e;font-weight:500;font-size:1.1em}#document .paragraph{margin:35px 0}#document .paragraph *{word-break:break-all}#document .paragraph h2>a,#document .paragraph h3>a{text-decoration:none;color:#000}#document .paragraph h2{font-weight:400;margin-bottom:35px;font-size:1.5em}#document .paragraph h2:before{content:"#";color:#f0506e;font-weight:400;margin-right:10px}#document .paragraph h3{font-weight:500;margin-top:25px;margin-bottom:20px;font-size:1.2em}#document .paragraph h4{font-weight:500;margin-bottom:5px;font-size:1.1em}#document .paragraph p{margin:25px 0;line-height:1.9em}#document .paragraph ol{padding-left:20px}#document .paragraph ol li{line-height:1.9em;padding:10px 0}#document .paragraph ol li p{margin:8px 0}#document .paragraph b{color:#f0506e;font-weight:500}#document .paragraph a{text-decoration:underline}#document .paragraph pre{border-radius:5px;background:none;border:none}#document .paragraph pre>code{background-color:#f8f8f8;padding:15px}#document .paragraph blockquote{line-height:inherit;font-size:inherit;font-style:inherit}#document .paragraph .blockquote-type-1{border:1px solid rgba(0,0,0,.1);padding:15px}#document .paragraph .blockquote-type-1 p{margin:10px 0}#document .paragraph .blockquote-type-2{border:solid #acacac;border-width:0 0 0 2px;padding:1px 0 0 12px;color:#666;line-height:1.8em;text-align:left;font-size:.9em}#document .paragraph .blockquote-type-3{background-color:#f8f8f8;padding:15px;font-weight:400}#document .footer .arrows{overflow:hidden;margin-top:50px}#document .footer .arrows a{text-decoration:none!important}#document .footer .arrows .left{float:left}#document .footer .arrows .left i{margin-right:3px}#document .footer .arrows .right{float:right}#document .footer .arrows .right i{margin-left:3px}@media (min-width:1200px){#document{padding-bottom:75px}}@media (max-width:1200px){#document{padding-bottom:35px}}',""]),t.exports=r},180:function(t,e,n){"use strict";var r=n(64);var o=n(84);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(50);var c={data:function(){return{spies:[]}},mounted:function(){var t=this.$parent.$refs.document,e=this.$refs.spy.querySelector("ul");this.setAnchorHeadings(t,"h2, h3"),this.extractHeadings(t,"h2, h3").forEach((function(t){var n=document.createElement("a");n.textContent=t.label,n.setAttribute("href",t.href),n.setAttribute("data-tag",t.tag);var r=document.createElement("li");r.appendChild(n),e.appendChild(r)})),UIkit.sticky("#spy > #spy__shadow",{offset:35}),UIkit.scrollspyNav("#spy ul",{closest:"li",offset:35})},methods:{setAnchorHeadings:function(t,e){l(t.querySelectorAll(e)).forEach((function(t){var e=encodeURIComponent(t.textContent).replace(/[0-9-_.!~*'()\s]/g,"-"),n=document.createElement("a");n.setAttribute("href","#"+e),n.textContent=t.textContent,t.innerHTML=n.outerHTML,t.setAttribute("id",e)}))},extractHeadings:function(t,e){return l(t.querySelectorAll(e)).reduce((function(t,e){var n=e.querySelector("a");return t.push({href:n.getAttribute("href"),label:e.textContent,tag:e.tagName.toLowerCase()}),t}),[])}}},d=(n(176),n(8)),h={props:["active","title"],head:function(){return{title:"티스토리 스킨 프레임워크, 티도리(TIDORY) ― "+this.title}},mounted:function(){hljs.initHighlighting(),this.$store.commit("activeMenu",this.active)},components:{ScrollSpy:Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"spy"}},[n("div",{ref:"spy",attrs:{id:"spy__shadow"}},[n("ul",{staticClass:"uk-nav uk-nav-default"},t._l(t.spies,(function(e){return n("li",{class:e.cls},[n("a",{attrs:{href:e.href}},[t._v(t._s(e.label))])])})),0)])])}),[],!1,null,null,null).exports}},f=(n(178),Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page"}},[n("section",{ref:"document",attrs:{id:"document"}},[t._t("header"),t._t("text"),t._t("footer"),n("ScrollSpy")],2)])}),[],!1,null,null,null));e.a=f.exports},184:function(t,e,n){"use strict";n.r(e);var r={components:{AppPage:n(180).a},data:function(){return{index:"extends app\n\nblock TIDORY\n  s_t3\n    div#__tidory\n      include views/Header\n\n  style.\n    #__tidory {\n      height: 100vh;\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      text-align: center;\n    }",header:"header\n  include Header/Title\n  include Header/Navigation",blogTitle:"h1 [##_title_##]",blogMenu:"nav [##_blog_menu_##]",skin:'<div id="__tidory">\n  <header>\n    <h1>[##_title_##]</h1>\n    <nav>[##_blog_menu_##]</nav>\n  </header>\n</div>',style:"\n#__tidory {\n  height: 100vh;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center\n}"}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",{attrs:{active:t.$store.state.menu.basic.example.page,title:t.$store.state.menu.basic.example.label}},[n("header",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"index"},[t._v(t._s(t.$store.state.menu.basic.example.page))]),n("h1",[t._v(t._s(t.$store.state.menu.basic.example.label))])]),n("main",{staticClass:"text",attrs:{slot:"text"},slot:"text"},[n("article",{staticClass:"paragraph"},[n("h2",[t._v("템플릿 작성")]),n("p",[t._v("티스토리 예제로 템플릿 작성의 기초를 알아보겠습니다. 간단하게 "),n("b",[t._v("블로그의 제목과 메뉴")]),t._v("를 출력하는 것을 해보죠. 우리가 작성할 예제의 폴더구조는 다음과 같습니다.")]),n("p"),n("blockquote",{staticClass:"blockquote-type-3"},[n("pre",[t._v("├── views/\n│     ├── Header.pug\n│     ├── Header\n│           ├── Navigation.pug\n│           └── Title.pug\n└── index.pug")])]),n("p"),n("h3",[t._v("index.pug")]),n("p",[t._v("현재 "),n("b",[t._v("views/Header.pug")]),t._v(" 파일이 포함되어 있습니다. 해당 템플릿은 "),n("b",[t._v("부모 템플릿")]),t._v("이 됩니다. "),n("code",[t._v("style")]),t._v(" 태그는 빌드하면 "),n("b",[t._v("style.css")]),t._v(" 파일로, "),n("code",[t._v("script")]),t._v(" 태그를 사용하면 "),n("b",[t._v("images/script.js")]),t._v(" 파일로 분리됩니다.")]),n("pre",[n("code",{staticClass:"less"},[t._v(t._s(t.index))])]),n("h3",[t._v("views/Header.pug")]),n("p",[t._v("이번에는 "),n("b",[t._v("Header/Title.pug")]),t._v(" 과 "),n("b",[t._v("Header/Navigation.pug")]),t._v(" 를 포함하고 있습니다. 각각 "),n("b",[t._v("블로그 제목")]),t._v(" 과 "),n("b",[t._v("블로그 메뉴")]),t._v("입니다. 이 둘은 "),n("b",[t._v("자식 템플릿")]),t._v("입니다.")]),n("pre",[n("code",{staticClass:"less"},[t._v(t._s(t.header))])]),n("p",[t._v("만약 "),n("b",[t._v("스킨 옵션")]),t._v("을 구현해야 할 때처럼, 분리가 되면 안 되는 상황이라면 어떨까요? "),n("code",[t._v("style, script")]),t._v(" 태그에 "),n("code",[t._v("scoped")]),t._v(" 속성을 부여하면 해당 태그는 "),n("b",[t._v("style.css, images/script.js")]),t._v(" 로 분리되지 않습니다. 그 말은 즉, "),n("b",[t._v("skin.html")]),t._v(" 에 남는다는 이야기가 됩니다.")]),n("h3",[t._v("views/Header/Title.pug")]),n("pre",[n("code",{staticClass:"less"},[t._v(t._s(t.blogTitle))])]),n("h3",[t._v("views/Header/Navigation.pug")]),n("pre",[n("code",{staticClass:"less"},[t._v(t._s(t.blogMenu))])]),n("p",[t._v("마크업에 보이지 않는 "),n("code",[t._v("li, a")]),t._v(" 태그에 스타일을 준 이유는 무엇일까요? "),n("b",[t._v("티스토리 스킨 치환자")]),t._v("인 "),n("b",[t._v("메뉴 치환자")]),t._v("는 티스토리 스킨에 적용되면 "),n("code",[t._v("li, a")]),t._v(" 태그를 포함하기 때문입니다.")])]),n("article",{staticClass:"paragraph"},[n("h2",[t._v("프로덕션 코드")]),n("p",[t._v("우리가 만든 스킨을 이제 "),n("b",[t._v("사용자에게 배포")]),t._v("하거나 "),n("b",[t._v("자신의 블로그에 적용")]),t._v("하기 위해 "),n("a",{attrs:{href:t.$store.state.menu.basic.distribute.href}},[t._v("빌드 및 배포")]),t._v("를 하면 다음과 같은 코드로 나뉘어집니다.")]),n("h3",[t._v("skin.html")]),n("pre",[n("code",{staticClass:"html"},[t._v(t._s(t.skin))])]),n("h3",[t._v("style.css")]),n("pre",[n("code",{staticClass:"css"},[t._v(t._s(t.style))])])])]),n("footer",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[n("div",{staticClass:"arrows"},[n("div",{staticClass:"left"},[n("a",{attrs:{href:t.$store.state.menu.basic.template.href}},[n("i",{staticClass:"fas fa-angle-left"}),t._v(" "+t._s(t.$store.state.menu.basic.template.label))])]),n("div",{staticClass:"right"},[n("a",{attrs:{href:t.$store.state.menu.basic.configuration.href}},[t._v(t._s(t.$store.state.menu.basic.configuration.label)+" "),n("i",{staticClass:"fas fa-angle-right"})])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);