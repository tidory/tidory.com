(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{191:function(t,e,o){var content=o(194);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("5c1fa1c4",content,!0,{sourceMap:!1})},192:function(t,e,o){var content=o(196);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("ea7dd5e8",content,!0,{sourceMap:!1})},193:function(t,e,o){"use strict";o(191)},194:function(t,e,o){var r=o(23)(!1);r.push([t.i,"#spy{position:absolute;width:180px;list-style:none;text-align:left;font-weight:400;z-index:0;margin-left:730px}#spy ul{position:sticky;border-left:1px dashed rgba(0,0,0,.2);top:50px}#spy ul,#spy ul li{box-sizing:border-box}#spy ul li{padding-left:20px;max-width:180px}#spy ul li a{font-size:.82rem}#spy .uk-active a{transition-duration:.5s;color:rgba(0,0,0,.9);font-weight:500}#spy a[data-tag=h3]{padding-left:15px}@media screen and (max-width:1200px){#spy{display:none!important}}",""]),t.exports=r},195:function(t,e,o){"use strict";o(192)},196:function(t,e,o){var r=o(23)(!1);r.push([t.i,'#document{padding-top:25px;color:rgba(0,0,0,.85)}#document .version{font-weight:600;margin-left:5px;font-size:14px;color:#ed5207}#document .version:before{content:"#";color:#ed5207;margin-right:5px}#document .header{text-align:center;margin-bottom:50px}#document .header h1{font-weight:500;font-size:2.1em}#document .header .index{margin-bottom:15px;color:#ed5207;font-weight:500;font-size:1.1em}#document .paragraph{margin:35px 0}#document .paragraph *{word-break:break-all}#document .paragraph h2>a,#document .paragraph h3>a{text-decoration:none}#document .paragraph h2{font-weight:400;margin-bottom:35px;font-size:1.5em}#document .paragraph h2:before{content:"#";color:#ed5207;font-weight:400;margin-right:10px}#document .paragraph h3{font-weight:500;margin-top:25px;margin-bottom:20px;font-size:1.2em}#document .paragraph h4{font-weight:500;margin-bottom:5px;font-size:1.1em}#document .paragraph p{margin:25px 0;line-height:1.9em}#document .paragraph ol{padding-left:20px}#document .paragraph ol li{line-height:1.9em;padding:10px 0}#document .paragraph ol li p{margin:8px 0}#document .paragraph b{color:#ed5207;font-weight:500}#document .paragraph a{text-decoration:underline}#document .paragraph pre{border-radius:5px;background:none;border:none}#document .paragraph pre>code{background-color:#f8f8f8;padding:15px}#document .paragraph blockquote{line-height:inherit;font-size:inherit;font-style:inherit}#document .paragraph .blockquote-type-1{border:1px solid rgba(0,0,0,.1);padding:15px}#document .paragraph .blockquote-type-1 p{margin:10px 0}#document .paragraph .blockquote-type-2{border:solid #acacac;border-width:0 0 0 2px;padding:1px 0 0 12px;color:#666;line-height:1.8em;text-align:left;font-size:.9em}#document .paragraph .blockquote-type-3{background-color:#f8f8f8;padding:15px;font-weight:300}#document .footer .arrows{overflow:hidden;margin-top:50px}#document .footer .arrows a{text-decoration:none!important}#document .footer .arrows .left{float:left}#document .footer .arrows .left i{margin-right:3px}#document .footer .arrows .right{float:right}#document .footer .arrows .right i{margin-left:3px}@media (min-width:1200px){#document{padding-bottom:75px}}@media (max-width:1200px){#document{padding-bottom:35px}}',""]),t.exports=r},197:function(t,e,o){"use strict";var r=o(67);var n=o(87);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(n.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}o(66);var d={data:function(){return{spies:[]}},mounted:function(){var t=this.$parent.$refs.document,e=this.$refs.spy.querySelector("ul");this.setAnchorHeadings(t,"h2, h3"),this.extractHeadings(t,"h2, h3").forEach((function(t){var o=document.createElement("a");o.textContent=t.label,o.setAttribute("href",t.href),o.setAttribute("data-tag",t.tag);var r=document.createElement("li");r.appendChild(o),e.appendChild(r)})),this.$refs.spy.style.top=t.offsetTop+t.querySelector("header").offsetHeight+"px",this.$refs.spy.style.height=t.offsetHeight-75-25+"px",UIkit.scrollspyNav("#spy",{closest:"li",offset:0})},methods:{setAnchorHeadings:function(t,e){l(t.querySelectorAll(e)).forEach((function(t){var e=encodeURIComponent(t.textContent).replace(/[0-9-_.!~*'()\s]/g,"-"),o=document.createElement("a");o.setAttribute("href","#"+e),o.textContent=t.textContent,t.innerHTML=o.outerHTML,t.setAttribute("id",e)}))},extractHeadings:function(t,e){return l(t.querySelectorAll(e)).reduce((function(t,e){var o=e.querySelector("a");return t.push({href:o.getAttribute("href"),label:e.textContent,tag:e.tagName.toLowerCase()}),t}),[])}}},c=(o(193),o(8)),h={props:["active","title"],head:function(){return{title:"티스토리 스킨 프레임워크, 티도리(TIDORY) ― "+this.title}},mounted:function(){this.$store.commit("activeMenu",this.active)},components:{ScrollSpy:Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",{ref:"spy",attrs:{id:"spy"}},[o("ul",{staticClass:"uk-nav uk-nav-default"},t._l(t.spies,(function(e){return o("li",{class:e.cls},[o("NuxtLink",{attrs:{to:e.href}},[t._v(t._s(e.label))])],1)})),0)])}),[],!1,null,null,null).exports}},m=(o(195),Object(c.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"page"}},[o("section",{ref:"document",attrs:{id:"document"}},[t._t("header"),t._t("text"),t._t("footer")],2),o("ScrollSpy")],1)}),[],!1,null,null,null));e.a=m.exports},204:function(t,e,o){"use strict";o.r(e);var r={components:{AppPage:o(197).a},data:function(){return{pkg:'{\n  "name": "@tidory/example",\n  "version": "1.0.0",\n  "main": "assets/app.js",\n  "files": [\n    "assets",\n    "index.pug"\n  ]\n}',pkg2:'"dependencies": {\n  "@tidory/example": "github:tidory/example"\n}',template:"//- node_modules/@tidory/example/index\ninclude @tidory/example\n//- node_modules/@tidory/example/HelloWorld\ninclude @tidory/example/HelloWorld\n"}}},n=o(8),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("app-page",{attrs:{active:t.$store.state.menu.advanced.package.page,title:t.$store.state.menu.advanced.package.label}},[o("header",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"index"},[t._v(t._s(t.$store.state.menu.advanced.package.page))]),o("h1",[t._v(t._s(t.$store.state.menu.advanced.package.label))])]),o("main",{staticClass:"text",attrs:{slot:"text",role:"text"},slot:"text"},[o("article",{staticClass:"paragraph"},[o("h2",[t._v("티도리 패키지")]),o("p",[t._v("프레임워크의 또 하나의 특징은, "),o("b",[t._v("다른 사람이 작성한 코드")]),t._v("를 프로젝트에 포함 시킬 수 있다는 점입니다. 티도리 프레임워크 또한 패키지를 작성하는 것으로 "),o("b",[t._v("다른 사람에게 자신의 코드를 제공")]),t._v("할 수 있습니다. "),o("a",{attrs:{href:"https://github.com/tidory/example"}},[t._v("tidory/example")]),t._v(" 패키지를 참고하면 도움이 될 수 있습니다.")]),o("p",[t._v("티도리 패키지의 "),o("b",[t._v("기본 폴더구조는 티도리 프로젝트 템플릿")]),t._v("과 동일합니다. 하지만 "),o("b",[t._v("취급")]),t._v("을 "),o("b",[t._v("NPM 패키지")]),t._v("로 취급하기 때문에 "),o("b",[t._v("package.json")]),t._v(" 의 내용이 조금은 다릅니다.")]),o("h3",[t._v("package.json")]),o("p",[t._v("본질적으로 티도리 패키지는 "),o("b",[t._v("NPM 패키지")]),t._v("라고 보기에는 무리가 있습니다. 따라서 패키지에는 이름에 제약을 걸어둡니다. 티도리 패키지는 "),o("b",[t._v("@tidory")]),t._v(" 스코프 아래에 두는 것을 원칙으로 합니다. 또한 NPM 공식 레지스트리에 "),o("b",[t._v("공표(Publish)")]),t._v(" 하는 일이 없도록 하십시오.")]),o("highlight-code",{attrs:{lang:"json"}},[t._v(t._s(t.pkg))]),o("p",[o("b",[t._v("티도리 프로젝트 템플릿")]),t._v("에는 "),o("b",[t._v("env, tidory.config.js")]),t._v(" 등 개발을 위한 파일이 포함되어 있는데, 실질적으로 어플리케이션에서 포함할 때는 의미가 없으므로 "),o("b",[t._v("files")]),t._v(" 배열에 포함시킬 필요가 없습니다. 위의 설정이 필수적인 것은 아니며, 필요에 따라 변경할 수 있습니다. 예를 들면 리액트, 뷰 컴포넌트가 있는 경우 해당 폴더를 포함시킬 수도 있겠죠.")])],1),o("article",{staticClass:"paragraph"},[o("h2",[t._v("패키지 사용하기")]),o("p",[t._v("만들어진 패키지를 사용하려면 어떻게 하면 좋을까요? 예를 들면 패키지의 이름이 "),o("b",[t._v("example")]),t._v(" 이고, 패키지를 코드 저장소에 올렸다면, 프로젝트에서는 다음과 같이 포함될 수 있습니다.")]),o("highlight-code",{attrs:{lang:"json"}},[t._v(t._s(t.pkg2))]),o("p",[t._v("위와 같이 수동으로 추가하지 않고, "),o("b",[t._v("npm install")]),t._v(" 명령으로 추가하고 싶다면, 아래와 같은 명령을 작성하면 프로젝트의 "),o("b",[t._v("package.json")]),t._v(" 에 자동으로 추가됩니다. 아래의 명령은 깃허브의 "),o("a",{attrs:{href:"https://github.com/tidory/example"}},[t._v("https://github.com/tidory/example")]),t._v(" 레포지토리를 다운로드 하라는 의미입니다.")]),o("highlight-code",{attrs:{lang:"bash"}},[t._v("npm install tidory/example")]),o("h3",[t._v("자식 패키지")]),o("p",[t._v("자바스크립트 프레임워크 컴포넌트를 포함한 각종 "),o("b",[t._v("자식 패키지")]),t._v("가 포함된 티도리 패키지를 사용하고 싶다면, 일반 NPM 패키지처럼 "),o("b",[t._v("app.js")]),t._v(" 에서 포함할 수 있습니다.")]),o("highlight-code",{attrs:{lang:"javascript"}},[t._v('require("@tidory/example")')]),o("p"),o("blockquote",{staticClass:"blockquote-type-2"},[o("b",[t._v("자식 패키지")]),t._v("는 티도리 패키지를 포함하여 사용될 수 있는 범용 NPM 패키지를 지칭하는 것입니다.")]),o("p"),o("h3",[t._v("템플릿에 포함하기")]),o("p",[t._v("티도리 패키지에 포함된 "),o("b",[t._v("템플릿")]),t._v("을 포함하려면, 퍼그에서 제공하는 "),o("b",[t._v("include")]),t._v(" 키워드를 통해 포함시킬 수 있습니다. "),o("b",[t._v("템플릿 별칭")]),t._v("을 지정하지 않았다면, 경로를 전부 입력해야 합니다. 하지만, "),o("b",[t._v("@tidory")]),t._v(" 별칭은 티도리 프레임워크 내부에 미리 등록되어 있습니다.")]),o("highlight-code",{attrs:{lang:"less"}},[t._v("include node_modules/@tidory/example/index")]),o("p"),o("blockquote",{staticClass:"blockquote-type-2"},[t._v("템플릿 별칭은 "),o("NuxtLink",{attrs:{to:t.$store.state.menu.basic.configuration.href}},[t._v("환경설정")]),t._v("에서 알아볼 수 있습니다.")],1),o("p"),o("h3",[t._v("@tidory")]),o("p",[o("b",[t._v("@tidory")]),t._v(" 별칭은 미리 정의된 템플릿 별칭입니다. "),o("b",[t._v("@tidory/package")]),t._v(" 형식으로 사용하면 "),o("b",[t._v("node_modules/@tidory/package/index.pug")]),t._v(" 를 포함하며 만약 같은 패키지에 속한 다른 템플릿을 포함시키고 싶다면 "),o("b",[t._v("@tidory/package/HelloWorld")]),t._v(" 와 같은 방식으로 포함시킬 수 있습니다.")]),o("highlight-code",{attrs:{lang:"less"}},[t._v(t._s(t.template))]),o("p"),o("blockquote",{staticClass:"blockquote-type-2"},[o("b",[t._v("다른 티도리 패키지")]),t._v("를 사용하는 패키지 개발 시 "),o("b",[t._v("@tidory")]),t._v(" 별칭을 사용하여 포함시킬 수 있습니다.")]),o("p")],1)]),o("footer",{staticClass:"footer",attrs:{slot:"footer",role:"footer"},slot:"footer"},[o("div",{staticClass:"arrows"},[o("div",{staticClass:"left"},[o("NuxtLink",{attrs:{to:t.$store.state.menu.advanced.framework.href}},[o("i",{staticClass:"fas fa-angle-left"}),t._v(" "+t._s(t.$store.state.menu.advanced.framework.label))])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);