(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{161:function(e,t,n){var content=n(168);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("5c1fa1c4",content,!0,{sourceMap:!1})},162:function(e,t,n){var content=n(170);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("ea7dd5e8",content,!0,{sourceMap:!1})},163:function(e,t,n){"use strict";var o=n(6),r=n(164)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),o(o.P+o.F*l,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(80)("find")},164:function(e,t,n){var o=n(22),r=n(79),l=n(23),c=n(17),d=n(165);e.exports=function(e,t){var n=1==e,m=2==e,v=3==e,f=4==e,h=6==e,_=5==e||h,x=t||d;return function(t,d,y){for(var w,k,C=l(t),M=r(C),$=o(d,y,3),H=c(M.length),z=0,T=n?x(t,H):m?x(t,0):void 0;H>z;z++)if((_||z in M)&&(k=$(w=M[z],z,C),e))if(n)T[z]=k;else if(k)switch(e){case 3:return!0;case 5:return w;case 6:return z;case 2:T.push(w)}else if(f)return!1;return h?-1:v||f?f:T}}},165:function(e,t,n){var o=n(166);e.exports=function(e,t){return new(o(e))(t)}},166:function(e,t,n){var o=n(10),r=n(108),l=n(2)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),o(t)&&null===(t=t[l])&&(t=void 0)),void 0===t?Array:t}},167:function(e,t,n){"use strict";var o=n(161);n.n(o).a},168:function(e,t,n){(t=n(20)(!1)).push([e.i,"#spy{position:relative;right:-720px}@media screen and (max-width:1200px){#spy{display:none}}#spy ul{list-style:none;text-align:left;position:fixed;width:200px;font-weight:500}#spy ul .uk-active a{transition-duration:.5s;color:#000}#spy ul .h3{padding-left:15px}",""]),e.exports=t},169:function(e,t,n){"use strict";var o=n(162);n.n(o).a},170:function(e,t,n){(t=n(20)(!1)).push([e.i,'#document{-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-name:fadeInUp;animation-name:fadeInUp;padding-top:25px;color:rgba(0,0,0,.85)}#document .version{font-weight:600;margin-left:5px;font-size:14px;color:#ed5207}#document .version:before{content:"#";color:#ed5207;margin-right:5px}#document .header{text-align:center;margin-bottom:50px}#document .header h1{font-weight:500;font-size:2.1em}#document .header .index{margin-bottom:15px;color:#ed5207;font-weight:500;font-size:1.1em}#document .paragraph{margin:35px 0}#document .paragraph *{word-break:break-all}#document .paragraph h2{font-weight:400;margin-bottom:35px;font-size:1.5em}#document .paragraph h2:before{content:"#";color:#ed5207;font-weight:400;margin-right:10px}#document .paragraph h3{font-weight:500;margin-top:25px;margin-bottom:20px;font-size:1.2em}#document .paragraph h4{font-weight:500;margin-bottom:5px;font-size:1.1em}#document .paragraph p{margin:25px 0;line-height:1.9em}#document .paragraph ol{padding-left:20px}#document .paragraph ol li{line-height:1.9em;padding:10px 0}#document .paragraph ol li p{margin:8px 0}#document .paragraph b{color:#ed5207;font-weight:500}#document .paragraph a{text-decoration:underline}#document .paragraph pre{border-radius:5px;background:none;border:none}#document .paragraph pre>code{background-color:#f8f8f8;padding:15px}#document .paragraph blockquote{line-height:inherit;font-size:inherit;font-style:inherit}#document .paragraph .blockquote-type-1{border:1px solid rgba(0,0,0,.1);padding:15px}#document .paragraph .blockquote-type-1 p{margin:10px 0}#document .paragraph .blockquote-type-2{border:solid #acacac;border-width:0 0 0 2px;padding:1px 0 0 12px;color:#666;line-height:1.8em;text-align:left;font-size:.9em}#document .paragraph .blockquote-type-3{background-color:#f8f8f8;padding:15px;font-weight:300}#document .footer .arrows{overflow:hidden;margin-top:50px}#document .footer .arrows a{text-decoration:none!important}#document .footer .arrows .left{float:left}#document .footer .arrows .left i{margin-right:3px}#document .footer .arrows .right{float:right}#document .footer .arrows .right i{margin-left:3px}@media (min-width:1200px){#document{padding-bottom:75px}}@media (max-width:1200px){#document{padding-bottom:35px}}@-webkit-keyframes fadeInUp{0%{transform:translateY(30px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes fadeInUp{0%{transform:translateY(30px);opacity:0}to{transform:translateX(0);opacity:1}}',""]),e.exports=t},171:function(e,t,n){"use strict";n(163);var o={props:["context"],data:function(){return{spies:[]}},beforeMount:function(){var e=this;$(this.context).find("h2").get().forEach((function(h2){e.set(h2,"h2"),$(h2).nextUntil("h2","h3").get().forEach((function(h3){return e.set(h3,"h3")}))}))},mounted:function(){UIkit.scrollspyNav("#spy",{closest:"li",offset:0})},methods:{set:function(e,t){var n=$(e),o=encodeURIComponent(n.text());n.attr("id",o),this.spies.push({href:"#"+o,label:n.text(),cls:t})}}},r=(n(167),n(7)),l={props:["active"],beforeMount:function(){this.$store.commit("activeMenu",this.active),hljs.initHighlightingOnLoad()},components:{ScrollSpy:Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{attrs:{id:"spy"}},[n("ul",{staticClass:"uk-nav uk-nav-default"},e._l(e.spies,(function(t){return n("li",{class:t.cls},[n("a",{attrs:{href:t.href}},[e._v(e._s(t.label))])])})),0)])}),[],!1,null,null,null).exports}},c=(n(169),Object(r.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{attrs:{id:"document"}},[t("ScrollSpy",{attrs:{context:"#document"}}),this._t("header"),this._t("text"),this._t("footer")],2)}),[],!1,null,null,null));t.a=c.exports},177:function(e,t,n){"use strict";n.r(t);var o={components:{AppPage:n(171).a},data:function(){return{pkg:"include @tidory/example",index:"extends app\n\nblock TIDORY\n  s_t3\n    div#__tidory\n      include views/Header",header:"#example\n  include Header/BlogTitle\n  include Header/BlogMenu\n\nstyle.\n  #example {\n    display: inline-block;\n    text-align: center;\n  }\n  #example a {\n    text-decoration: none;\n    color: black;\n    transition-duration: 0.3s;\n    pointer-events: initial !important;\n  }\n  #example a:hover {\n    color: #ed5207 !important;\n  }",blogTitle:'h1#blogTitle\n  a(href="[##_blog_link_##]")\n    | [##_title_##]\n\nstyle.\n  #example #blogTitle {\n    color: #525252;\n    font-size: 2.8em;\n    font-weight: 200;\n    margin: 0px;\n  }',blogMenu:'nav#blogMenu(role="navigation")\n  | [##_blog_menu_##]\n\nstyle.\n  #example #blogMenu {\n    margin-top: 35px;\n  }\n  #example #blogMenu ul {\n    padding: 0px;\n    margin: 0px;\n  }\n  #example #blogMenu ul li {\n    margin: 0 15px;\n    display: inline-block;\n  }\n  #example #blogMenu ul li a {\n    font-size: 1.05em;\n    font-weight: 300;\n  }\n  header > nav ul li a:hover {\n    color: #ed5207;\n  }',skin:'<div id="example">\n  <h1 id="blogTitle"><a href="[##_blog_link_##]">[##_title_##]</a></h1>\n  <nav id="blogMenu" role="navigation">[##_blog_menu_##]</nav>\n</div>',style:"#example #blogTitle {\n  color: #525252;\n  font-size: 2.8em;\n  font-weight: 200;\n  margin: 0\n}\n#example #blogMenu {\n  margin-top: 35px\n}\n#example #blogMenu ul {\n  padding: 0;\n  margin: 0\n}\n#example #blogMenu ul li {\n  margin: 0 15px;\n  display: inline-block\n}\n#example #blogMenu ul li a {\n  font-size: 1.05em;\n  font-weight: 300\n}\nheader > nav ul li a:hover {\n  color: #ed5207\n}\n#example {\n  display: inline-block;\n  text-align: center\n}\n#example a {\n  text-decoration: none;\n  color: #000;\n  transition-duration: .3s;\n  pointer-events: initial!important\n}\n#example a:hover {\n  color: #ed5207!important\n}"}}},r=n(7),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page",{attrs:{active:e.$store.state.menu.basic.example.page}},[n("header",{staticClass:"header",attrs:{slot:"header",role:"header"},slot:"header"},[n("div",{staticClass:"index"},[e._v(e._s(e.$store.state.menu.basic.example.page))]),n("h1",[e._v(e._s(e.$store.state.menu.basic.example.label))])]),n("main",{staticClass:"text",attrs:{slot:"text",role:"text"},slot:"text"},[n("article",{staticClass:"paragraph"},[n("h2",[e._v("템플릿 작성")]),n("p",[e._v("티스토리 예제로 템플릿 작성의 기초를 알아보겠습니다. 간단하게 "),n("b",[e._v("블로그의 제목과 메뉴")]),e._v("를 출력하는 것을 해보죠. 우리가 작성할 예제의 폴더구조는 다음과 같습니다.")]),n("p"),n("blockquote",{staticClass:"blockquote-type-3"},[n("pre",[e._v("├── views/\n│     ├── Header.pug\n│     ├── Header\n│           ├── BlogTitle.pug\n│           └── BlogMenu.pug\n└── index.pug")])]),n("p"),n("h3",[e._v("index.pug")]),n("p",[e._v("현재 "),n("b",[e._v("views/Header")]),e._v(" 파일이 포함되어 있습니다. 해당 템플릿은 "),n("b",[e._v("부모 템플릿")]),e._v("이 됩니다.")]),n("pre",[n("code",{staticClass:"pug"},[e._v(e._s(e.index))])]),n("h3",[e._v("views/Header.pug")]),n("p",[e._v("이번에는 "),n("b",[e._v("Header/BlogTitle")]),e._v(" 과 "),n("b",[e._v("Header/BlogMenu")]),e._v(" 를 포함하고 있습니다. 각각 "),n("b",[e._v("블로그 제목")]),e._v(" 과 "),n("b",[e._v("블로그 메뉴")]),e._v("입니다. 이 둘은 "),n("b",[e._v("자식 템플릿")]),e._v("입니다. "),n("b",[e._v("style")]),e._v(" 태그는 빌드하면 "),n("b",[e._v("style.css")]),e._v(" 파일로, "),n("b",[e._v("script")]),e._v(" 태그를 사용하면 "),n("b",[e._v("images/script.js")]),e._v(" 파일로 분리됩니다!")]),n("pre",[n("code",{staticClass:"pug"},[e._v(e._s(e.header))])]),n("p",[e._v("만약 "),n("b",[e._v("스킨 옵션")]),e._v("을 구현해야 할 때처럼, 분리가 되면 안 되는 상황이라면 어떨까요? "),n("b",[e._v("style, script")]),e._v(" 태그에 "),n("b",[e._v("scoped")]),e._v(" 속성을 부여하면 해당 태그는 "),n("b",[e._v("style.css, images/script.js")]),e._v(" 로 분리되지 않습니다. 그 말은 즉, "),n("b",[e._v("skin.html")]),e._v(" 에 남는다는 이야기가 됩니다.")]),n("h3",[e._v("views/Header/BlogTitle.pug")]),n("pre",[n("code",{staticClass:"pug"},[e._v(e._s(e.blogTitle))])]),n("h3",[e._v("views/Header/BlogMenu.pug")]),n("pre",[n("code",{staticClass:"pug"},[e._v(e._s(e.blogMenu))])]),n("p",[e._v("마크업에 보이지 않는 "),n("b",[e._v("li, a")]),e._v(" 태그에 스타일을 준 이유는 무엇일까요? "),n("b",[e._v("티스토리 스킨 치환자")]),e._v("인 "),n("b",[e._v("메뉴 치환자")]),e._v("는 티스토리 스킨에 적용되면 "),n("b",[e._v("li, a")]),e._v(" 태그를 포함하기 때문입니다.")])]),n("article",{staticClass:"paragraph"},[n("h2",[e._v("프로덕션 코드")]),n("p",[e._v("우리가 만든 스킨을 이제 "),n("b",[e._v("사용자에게 배포")]),e._v("하거나 "),n("b",[e._v("자신의 블로그에 적용")]),e._v("하기 위해 "),n("a",{attrs:{href:e.$store.state.menu.basic.distribute.href}},[e._v("빌드 및 배포")]),e._v("를 하면 다음과 같은 코드로 나뉘어집니다.")]),n("h3",[e._v("skin.html")]),n("pre",[n("code",{staticClass:"html"},[e._v(e._s(e.skin))])]),n("h3",[e._v("style.css")]),n("pre",[n("code",{staticClass:"css"},[e._v(e._s(e.style))])])]),n("article",{staticClass:"paragraph"},[n("h2",[e._v("티스토리 예제 패키지")]),n("p",[e._v("티도리로 작성한 코드를 별도로 분리해서 "),n("b",[e._v("패키지")]),e._v(" 형태로 제공할 수도 있습니다. "),n("a",{attrs:{href:"/docs/package"}},[e._v("패키지")]),e._v("에서 그 내용을 확인 하실 수도 있습니다. 하지만, 미리 사용해보죠! 지금 작성한 예제는 패키지로 별도로 작성해두었습니다.")]),n("pre",[n("code",{staticClass:"bash"},[e._v("# https://github.com/tidory/example\nnpm install tidory/example")])]),n("p",[e._v("이제 "),n("b",[e._v("views/Header")]),e._v(" 대신에 "),n("b",[e._v("index.pug")]),e._v(" 에 다음과 같이 포함만 시키면 된답니다.")]),n("pre",[n("code",{staticClass:"pug"},[e._v(e._s(e.pkg))])])])]),n("footer",{staticClass:"footer",attrs:{slot:"footer",role:"footer"},slot:"footer"},[n("div",{staticClass:"arrows"},[n("div",{staticClass:"left"},[n("a",{attrs:{href:e.$store.state.menu.basic.template.href}},[n("i",{staticClass:"fas fa-angle-left"}),e._v(" "+e._s(e.$store.state.menu.basic.template.label))])]),n("div",{staticClass:"right"},[n("a",{attrs:{href:e.$store.state.menu.basic.configuration.href}},[e._v(e._s(e.$store.state.menu.basic.configuration.label)+" "),n("i",{staticClass:"fas fa-angle-right"})])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);