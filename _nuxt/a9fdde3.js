(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{191:function(t,e,r){var content=r(194);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("5c1fa1c4",content,!0,{sourceMap:!1})},192:function(t,e,r){var content=r(196);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("ea7dd5e8",content,!0,{sourceMap:!1})},193:function(t,e,r){"use strict";r(191)},194:function(t,e,r){var o=r(23)(!1);o.push([t.i,"#spy{position:absolute;width:180px;list-style:none;text-align:left;font-weight:400;z-index:0;margin-left:730px}#spy ul{position:sticky;border-left:1px dashed rgba(0,0,0,.2);top:50px}#spy ul,#spy ul li{box-sizing:border-box}#spy ul li{padding-left:20px;max-width:180px}#spy ul li a{font-size:.82rem}#spy .uk-active a{transition-duration:.5s;color:rgba(0,0,0,.9);font-weight:500}#spy a[data-tag=h3]{padding-left:15px}@media screen and (max-width:1200px){#spy{display:none!important}}",""]),t.exports=o},195:function(t,e,r){"use strict";r(192)},196:function(t,e,r){var o=r(23)(!1);o.push([t.i,'#document{padding-top:25px;color:rgba(0,0,0,.85)}#document .version{font-weight:600;margin-left:5px;font-size:14px;color:#ed5207}#document .version:before{content:"#";color:#ed5207;margin-right:5px}#document .header{text-align:center;margin-bottom:50px}#document .header h1{font-weight:500;font-size:2.1em}#document .header .index{margin-bottom:15px;color:#ed5207;font-weight:500;font-size:1.1em}#document .paragraph{margin:35px 0}#document .paragraph *{word-break:break-all}#document .paragraph h2>a,#document .paragraph h3>a{text-decoration:none}#document .paragraph h2{font-weight:400;margin-bottom:35px;font-size:1.5em}#document .paragraph h2:before{content:"#";color:#ed5207;font-weight:400;margin-right:10px}#document .paragraph h3{font-weight:500;margin-top:25px;margin-bottom:20px;font-size:1.2em}#document .paragraph h4{font-weight:500;margin-bottom:5px;font-size:1.1em}#document .paragraph p{margin:25px 0;line-height:1.9em}#document .paragraph ol{padding-left:20px}#document .paragraph ol li{line-height:1.9em;padding:10px 0}#document .paragraph ol li p{margin:8px 0}#document .paragraph b{color:#ed5207;font-weight:500}#document .paragraph a{text-decoration:underline}#document .paragraph pre{border-radius:5px;background:none;border:none}#document .paragraph pre>code{background-color:#f8f8f8;padding:15px}#document .paragraph blockquote{line-height:inherit;font-size:inherit;font-style:inherit}#document .paragraph .blockquote-type-1{border:1px solid rgba(0,0,0,.1);padding:15px}#document .paragraph .blockquote-type-1 p{margin:10px 0}#document .paragraph .blockquote-type-2{border:solid #acacac;border-width:0 0 0 2px;padding:1px 0 0 12px;color:#666;line-height:1.8em;text-align:left;font-size:.9em}#document .paragraph .blockquote-type-3{background-color:#f8f8f8;padding:15px;font-weight:300}#document .footer .arrows{overflow:hidden;margin-top:50px}#document .footer .arrows a{text-decoration:none!important}#document .footer .arrows .left{float:left}#document .footer .arrows .left i{margin-right:3px}#document .footer .arrows .right{float:right}#document .footer .arrows .right i{margin-left:3px}@media (min-width:1200px){#document{padding-bottom:75px}}@media (max-width:1200px){#document{padding-bottom:35px}}',""]),t.exports=o},197:function(t,e,r){"use strict";var o=r(67);var n=r(87);function l(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(n.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r(66);var c={data:function(){return{spies:[]}},mounted:function(){var t=this.$parent.$refs.document,e=this.$refs.spy.querySelector("ul");this.setAnchorHeadings(t,"h2, h3"),this.extractHeadings(t,"h2, h3").forEach((function(t){var r=document.createElement("a");r.textContent=t.label,r.setAttribute("href",t.href),r.setAttribute("data-tag",t.tag);var o=document.createElement("li");o.appendChild(r),e.appendChild(o)})),this.$refs.spy.style.top=t.offsetTop+t.querySelector("header").offsetHeight+"px",this.$refs.spy.style.height=t.offsetHeight-75-25+"px",UIkit.scrollspyNav("#spy",{closest:"li",offset:0})},methods:{setAnchorHeadings:function(t,e){l(t.querySelectorAll(e)).forEach((function(t){var e=encodeURIComponent(t.textContent).replace(/[0-9-_.!~*'()\s]/g,"-"),r=document.createElement("a");r.setAttribute("href","#"+e),r.textContent=t.textContent,t.innerHTML=r.outerHTML,t.setAttribute("id",e)}))},extractHeadings:function(t,e){return l(t.querySelectorAll(e)).reduce((function(t,e){var r=e.querySelector("a");return t.push({href:r.getAttribute("href"),label:e.textContent,tag:e.tagName.toLowerCase()}),t}),[])}}},d=(r(193),r(8)),f={props:["active","title"],head:function(){return{title:"티스토리 스킨 프레임워크, 티도리(TIDORY) ― "+this.title}},mounted:function(){this.$store.commit("activeMenu",this.active)},components:{ScrollSpy:Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{ref:"spy",attrs:{id:"spy"}},[r("ul",{staticClass:"uk-nav uk-nav-default"},t._l(t.spies,(function(e){return r("li",{class:e.cls},[r("NuxtLink",{attrs:{to:e.href}},[t._v(t._s(e.label))])],1)})),0)])}),[],!1,null,null,null).exports}},h=(r(195),Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page"}},[r("section",{ref:"document",attrs:{id:"document"}},[t._t("header"),t._t("text"),t._t("footer")],2),r("ScrollSpy")],1)}),[],!1,null,null,null));e.a=h.exports},199:function(t,e,r){"use strict";r.r(e);var o={components:{AppPage:r(197).a}},n=r(8),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("app-page",{attrs:{active:t.$store.state.menu.basic.directory.page,title:t.$store.state.menu.basic.directory.label}},[r("header",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[r("div",{staticClass:"index"},[t._v(t._s(t.$store.state.menu.basic.directory.page))]),r("h1",[t._v(t._s(t.$store.state.menu.basic.directory.label))])]),r("main",{staticClass:"text",attrs:{slot:"text",role:"text"},slot:"text"},[r("article",{staticClass:"paragraph"},[r("p"),r("div",{staticClass:"blockquote-type-3"},[r("pre",[t._v("├── assets/\n│     └── app.js\n├── docs/\n│     ├── index.xml\n│     ├── preview256.jpg\n│     ├── preview560.jpg\n│     └── preview1600.jpg\n├── images/\n├── views/\n├── .env\n├── app.pug\n├── index.pug\n└── tidory.config.js")])]),r("p"),r("h2",[t._v("tidory/tidory")]),r("p",[r("b",[t._v("티도리 프로젝트 템플릿")]),t._v("인 "),r("a",{attrs:{href:"https://github.com/tidory/tidory"}},[t._v("tidory/tidory")]),t._v(" 의 레포지토리에 대한 내용입니다. 티도리 프레임워크는 정해진 디렉토리 구조가 있으므로 이를 따를 필요가 있습니다.")]),r("h3",[t._v("assets/*")]),r("p",[t._v("해당 디렉토리에는 "),r("b",[t._v("app.js")]),t._v(" 에 포함될 파일 뿐만 아니라, 다른 소스에서 포함되는 "),r("b",[t._v("styl, less")]),t._v(" 와 같은 확장 템플릿 파일 및 퍼그 템플릿에 인라인으로 포함되는 파일, 자바스크립트 플러그인, "),r("b",[t._v("컴포넌트(Components)")]),t._v("도 여기에 위치합니다.")]),r("h3",[t._v("docs/*")]),r("p",[t._v("티스토리 스킨 업로드에 필요한 파일이 위치하고 있습니다. "),r("b",[t._v("index.xml, preview256.jpg, preview560.jpg, preview1600.jpg")]),t._v(", 빌드하면 "),r("b",[t._v("dist")]),t._v(" 폴더로 이동합니다.")]),r("h3",[t._v("images/*")]),r("p",[t._v("보통 프레임워크에서 정적파일의 폴더이름은 "),r("b",[t._v("static")]),t._v(" 으로 처리 될 수 있습니다만, 티스토리에서는 "),r("b",[t._v("images")]),t._v(" 폴더로 모든 "),r("b",[t._v("정적파일")]),t._v("을 관리합니다.")]),r("h3",[t._v("views/*.pug")]),r("p",[r("b",[t._v("pug 템플릿 파일")]),t._v("이 위치할 폴더입니다. 보통 "),r("b",[t._v("index.pug")]),t._v(" 파일의 "),r("b",[t._v("block TIDORY")]),t._v(" 부분에서 템플릿파일을 포함시킵니다. 소스구조는 분활해서 구성하는 것이 원칙입니다. "),r("NuxtLink",{attrs:{to:t.$store.state.menu.basic.template.href+"#문서 구조"}},[t._v("문서 구조")]),t._v(" 부분을 참고하세요.")],1)])]),r("footer",{staticClass:"footer",attrs:{slot:"footer",role:"footer"},slot:"footer"},[r("div",{staticClass:"arrows"},[r("div",{staticClass:"left"},[r("NuxtLink",{attrs:{to:t.$store.state.menu.basic.getStarted.href}},[r("i",{staticClass:"fas fa-angle-left"}),t._v(" "+t._s(t.$store.state.menu.basic.getStarted.label))])],1),r("div",{staticClass:"right"},[r("NuxtLink",{attrs:{to:t.$store.state.menu.basic.template.href}},[t._v(t._s(t.$store.state.menu.basic.template.label)+" "),r("i",{staticClass:"fas fa-angle-right"})])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);