(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{161:function(t,e,n){var content=n(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("5c1fa1c4",content,!0,{sourceMap:!1})},162:function(t,e,n){var content=n(170);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("ea7dd5e8",content,!0,{sourceMap:!1})},163:function(t,e,n){"use strict";var o=n(6),r=n(164)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),o(o.P+o.F*c,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(80)("find")},164:function(t,e,n){var o=n(22),r=n(79),c=n(23),l=n(17),d=n(165);t.exports=function(t,e){var n=1==t,f=2==t,h=3==t,m=4==t,v=6==t,x=5==t||v,_=e||d;return function(e,d,w){for(var y,k,C=c(e),$=r(C),I=o(d,w,3),z=l($.length),M=0,H=n?_(e,z):f?_(e,0):void 0;z>M;M++)if((x||M in $)&&(k=I(y=$[M],M,C),t))if(n)H[M]=k;else if(k)switch(t){case 3:return!0;case 5:return y;case 6:return M;case 2:H.push(y)}else if(m)return!1;return v?-1:h||m?m:H}}},165:function(t,e,n){var o=n(166);t.exports=function(t,e){return new(o(t))(e)}},166:function(t,e,n){var o=n(10),r=n(108),c=n(2)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),o(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},167:function(t,e,n){"use strict";var o=n(161);n.n(o).a},168:function(t,e,n){(e=n(20)(!1)).push([t.i,"#spy{position:relative;right:-720px}@media screen and (max-width:1200px){#spy{display:none}}#spy ul{list-style:none;text-align:left;position:fixed;width:200px;font-weight:500}#spy ul .uk-active a{transition-duration:.5s;color:#000}#spy ul .h3{padding-left:15px}",""]),t.exports=e},169:function(t,e,n){"use strict";var o=n(162);n.n(o).a},170:function(t,e,n){(e=n(20)(!1)).push([t.i,'#document{-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-name:fadeInUp;animation-name:fadeInUp;padding-top:25px;color:rgba(0,0,0,.85)}#document .version{font-weight:600;margin-left:5px;font-size:14px;color:#ed5207}#document .version:before{content:"#";color:#ed5207;margin-right:5px}#document .header{text-align:center;margin-bottom:50px}#document .header h1{font-weight:500;font-size:2.1em}#document .header .index{margin-bottom:15px;color:#ed5207;font-weight:500;font-size:1.1em}#document .paragraph{margin:35px 0}#document .paragraph *{word-break:break-all}#document .paragraph h2{font-weight:400;margin-bottom:35px;font-size:1.5em}#document .paragraph h2:before{content:"#";color:#ed5207;font-weight:400;margin-right:10px}#document .paragraph h3{font-weight:500;margin-top:25px;margin-bottom:20px;font-size:1.2em}#document .paragraph h4{font-weight:500;margin-bottom:5px;font-size:1.1em}#document .paragraph p{margin:25px 0;line-height:1.9em}#document .paragraph ol{padding-left:20px}#document .paragraph ol li{line-height:1.9em;padding:10px 0}#document .paragraph ol li p{margin:8px 0}#document .paragraph b{color:#ed5207;font-weight:500}#document .paragraph a{text-decoration:underline}#document .paragraph pre{border-radius:5px;background:none;border:none}#document .paragraph pre>code{background-color:#f8f8f8;padding:15px}#document .paragraph blockquote{line-height:inherit;font-size:inherit;font-style:inherit}#document .paragraph .blockquote-type-1{border:1px solid rgba(0,0,0,.1);padding:15px}#document .paragraph .blockquote-type-1 p{margin:10px 0}#document .paragraph .blockquote-type-2{border:solid #acacac;border-width:0 0 0 2px;padding:1px 0 0 12px;color:#666;line-height:1.8em;text-align:left;font-size:.9em}#document .paragraph .blockquote-type-3{background-color:#f8f8f8;padding:15px;font-weight:300}#document .footer .arrows{overflow:hidden;margin-top:50px}#document .footer .arrows a{text-decoration:none!important}#document .footer .arrows .left{float:left}#document .footer .arrows .left i{margin-right:3px}#document .footer .arrows .right{float:right}#document .footer .arrows .right i{margin-left:3px}@media (min-width:1200px){#document{padding-bottom:75px}}@media (max-width:1200px){#document{padding-bottom:35px}}@-webkit-keyframes fadeInUp{0%{transform:translateY(30px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes fadeInUp{0%{transform:translateY(30px);opacity:0}to{transform:translateX(0);opacity:1}}',""]),t.exports=e},171:function(t,e,n){"use strict";n(163);var o={props:["context"],data:function(){return{spies:[]}},beforeMount:function(){var t=this;$(this.context).find("h2").get().forEach((function(h2){t.set(h2,"h2"),$(h2).nextUntil("h2","h3").get().forEach((function(h3){return t.set(h3,"h3")}))}))},mounted:function(){UIkit.scrollspyNav("#spy",{closest:"li",offset:0})},methods:{set:function(t,e){var n=$(t),o=encodeURIComponent(n.text());n.attr("id",o),this.spies.push({href:"#"+o,label:n.text(),cls:e})}}},r=(n(167),n(7)),c={props:["active"],beforeMount:function(){this.$store.commit("activeMenu",this.active),hljs.initHighlightingOnLoad()},components:{ScrollSpy:Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{attrs:{id:"spy"}},[n("ul",{staticClass:"uk-nav uk-nav-default"},t._l(t.spies,(function(e){return n("li",{class:e.cls},[n("a",{attrs:{href:e.href}},[t._v(t._s(e.label))])])})),0)])}),[],!1,null,null,null).exports}},l=(n(169),Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"document"}},[e("ScrollSpy",{attrs:{context:"#document"}}),this._t("header"),this._t("text"),this._t("footer")],2)}),[],!1,null,null,null));e.a=l.exports},176:function(t,e,n){"use strict";n.r(e);var o={components:{AppPage:n(171).a},data:function(){return{app:'doctype html\n\nhtml(lang="ko")\n  head\n    meta(charset="utf-8")\n    meta(name="viewport" content="width=device-width, initial-scale=1")\n\n    title [##_page_title_##]\n\n  body(id="[##_body_id_##]")\n    block TIDORY',index:"extends app\n\nblock TIDORY\n  s_t3\n    div#__tidory\n      include views/HelloWorld"}}},r=n(7),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",{attrs:{active:t.$store.state.menu.basic.template.page}},[n("header",{staticClass:"header",attrs:{slot:"header",role:"header"},slot:"header"},[n("div",{staticClass:"index"},[t._v(t._s(t.$store.state.menu.basic.template.page))]),n("h1",[t._v(t._s(t.$store.state.menu.basic.template.label))])]),n("main",{staticClass:"text",attrs:{slot:"text",role:"text"},slot:"text"},[n("article",{staticClass:"paragraph"},[n("h2",[t._v("문서 구조")]),n("p",[t._v("티도리 프레임워크에서 템플릿은 "),n("a",{attrs:{href:"https://pugjs.org/api/getting-started.html",target:"_blank"}},[t._v("퍼그(Pug)")]),t._v("를 사용합니다. "),n("b",[t._v("퍼그")]),t._v("는 HTML 파트별로 나누고 코드의 길이를 줄여주는 효과적인 템플릿 엔진입니다. "),n("b",[t._v("티도리 프로젝트 템플릿")]),t._v("에서는 크게 "),n("b",[t._v("app.pug, index.pug, views/*.pug")]),t._v(" 로 구성되어 있습니다. 각각이 어떻게 연결되어있는지 살펴보죠!")]),n("h3",[t._v("app.pug")]),n("p",[n("b",[t._v("app.pug")]),t._v(" 템플릿은 "),n("b",[t._v("HTML")]),t._v("의 기본구조가 정의되어있는 템플릿입니다. "),n("b",[t._v("head, body")]),t._v(" 태그와 같이 구조에 해당되는 태그들이 마크업되어 있습니다. "),n("b",[t._v("문서")]),t._v("의 최상위 템플릿이므로 스킨과는 직접적인 연관이 없는 마크업을 넣는 것이 좋습니다.")]),n("pre",[n("code",{staticClass:"pug"},[t._v(t._s(t.app))])]),n("h3",[t._v("index.pug")]),n("p",[n("b",[t._v("index.pug")]),t._v(" 템플릿은 티스토리 스킨의 헤더, 컨텐츠, 푸터, 사이드바와 같은 부가요소가 포함됩니다. "),n("b",[t._v("block TIDORY")]),t._v(" 아래에 "),n("b",[t._v("include")]),t._v(" 키워드를 사용하여 템플릿 파일을 포함시킵니다.")]),n("pre",[n("code",{staticClass:"pug"},[t._v(t._s(t.index))])])]),n("article",{staticClass:"paragraph"},[n("h2",[t._v("코드 분할")]),n("p",[t._v("우리가 템플릿을 분리해야하는 가장 중요한 이유는 "),n("b",[t._v("재활용")]),t._v("입니다. 템플릿 하나에는 "),n("b",[t._v("스타일, 마크업, 스크립트")]),t._v("가 통째로 들어가기 때문에 다른 스킨을 제작할 때 포함시키기만 하면 다시 작성하지 않아도 됩니다.")]),n("h3"),n("p",[t._v("자, 이제 우리가 다음과 같은 구조로 템플릿을 분리해 놓았다고 생각해봅시다. 이렇게 1차적으로 크게 분리된 것이 "),n("b",[t._v("부모 템플릿")]),t._v("입니다. 이제 각 영역에 속할 "),n("b",[t._v("자식 템플릿")]),t._v("을 만들어봐야 합니다.")]),n("p"),n("blockquote",{staticClass:"blockquote-type-3"},[n("pre",[t._v("├── views/\n│     ├── Header.pug\n│     ├── Content.pug\n│     ├── Sidebar.pug\n│     └── Footer.pug")])]),n("p"),n("p",[t._v("이렇게 나뉘어 있는 것을 "),n("b",[t._v("티스토리 스킨 가이드")]),t._v("를 참고하여 분리해보겠습니다. 자식 템플릿 의 위치는 절대적인 것은 아니나, 부모 템플릿의 이름과 똑같은 폴더 아래에 놓는 것을 원칙으로 합니다.")]),n("p"),n("blockquote",{staticClass:"blockquote-type-3"},[n("pre",[t._v("├── views/\n│     ├── Header.pug\n│     ├── Header\n│           ├── BlogTitle.pug\n│           └── BlogMenu.pug\n│     ├── Content.pug\n│     ├── Content\n│           └── Entry.pug\n│     ├── Sidebar.pug\n│     └── Footer.pug")])]),n("p")])]),n("footer",{staticClass:"footer",attrs:{slot:"footer",role:"footer"},slot:"footer"},[n("div",{staticClass:"arrows"},[n("div",{staticClass:"left"},[n("a",{attrs:{href:t.$store.state.menu.basic.directory.href}},[n("i",{staticClass:"fas fa-angle-left"}),t._v(" "+t._s(t.$store.state.menu.basic.directory.label))])]),n("div",{staticClass:"right"},[n("a",{attrs:{href:t.$store.state.menu.basic.example.href}},[t._v(t._s(t.$store.state.menu.basic.example.label)+" "),n("i",{staticClass:"fas fa-angle-right"})])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);