<template lang="pug">
AppPage(:active="$store.state.menu.framework.page")
  header.header(role="header" slot="header")
    div.index {{ $store.state.menu.framework.page }}
    h1 {{ $store.state.menu.framework.label }}
  main.text(slot="text" role="text")
    article.paragraph
      h2(id="뷰 & 리액트") 뷰 & 리액트 프레임워크
      p 티도리 프레임워크에서는 모던 자바스크립트 프레임워크인 #[b 뷰(Vue.js)]와 #[b 리액트(React.js)]를 지원합니다. #[b 컴포넌트(Component)]를 만들고 포함시켜 템플릿에서 사용할 수 있습니다. 컴포넌트는 사용하고 싶을 때 사용하면 되지만 몇 가지 주의사항이 있으니 알아보도록 합시다.
      h3(id="언제 사용해야 할까?") 언제 사용해야 할까?
      p #[b 사용자에게 커스텀을 허용하지 않는 경우], 컴포넌트는 자바스크립트를 통해 렌더링되고 웹팩을 통해 번들링 되기 때문에 커스텀하기 정말 어렵습니다. 때문에 사용자가 직접 코드를 변경할 필요가 없고 위젯형태로 제공하는 경우라면 컴포넌트가 좋겠네요.
      p #[b 스킨 코드와 완전 무관한 경우], 컴포넌트를 사용하면 #[b DOM(Document Object Model)]이 자바스크립트로 구성되므로 #[b 티스토리가 치환자를 통해 해석하지 못합니다.] 따라서 컴포넌트 내부에 티스토리 치환자를 사용하면 안됩니다. 티스토리가 제공하는 기능이 아닌, 외부에서 제공하는 기능을 넣는 경우에 사용하면 좋습니다.
    article.paragraph
      h2(id="컴포넌트") 컴포넌트
      p 뷰 또는 리액트 #[b 컴포넌트(Component)]를 사용하면 티스토리 스킨을 #[b 어플리케이션(Application)]레벨까지 올릴 수 있습니다. #[b npm] 이 가진 방대한 레포지토리를 사용하여 라우팅과 데이터베이스 모듈을 사용할 수도 있습니다. 두 프레임워크 중 하나라도 사용하면 #[b SPA(Single Page Application)]을 만들기 위한 준비는 완료 된 것입니다.
      h3(id="vue") 뷰(Vue.js)
      p
        pre(data-label="HelloWorld.vue" data-dependencies="javascript")
          code.lang-html {{ vue }}
      p
        pre(data-label="HelloWorld.pug")
          code.lang-pug {{ vueTemplate }}
      p #[b webpack.entry.js] 는 #[b 웹팩(Webpack)]의 시작점이 되는 파일입니다. #[b 뷰 컴포넌트]를 템플릿에서 사용하려면 #[b webpack.entry.js] 에 컴포넌트를 등록해야 인식합니다. #[b Vue.component] 메서드를 이용하여 컴포넌트를 전역적으로 등록하시기 바랍니다.
      p
        pre(data-label="webpack.entry.js")
          code.lang-javascript {{ vueEntry }}
      h3(id="react") 리액트(React)
      p
        pre(data-label="HelloWorld.js")
          code.lang-javascript {{ react }}
      p
        pre(data-label="HelloWorld.pug")
          code.lang-pug {{ reactTemplate }}
      p #[b 리액트 컴포넌트]를 템플릿에서 사용하려면 #[b ReactDOM]을 사용하여 #[b webpack.entry.js] 에서 컴포넌트를 #[b #app]에 바인딩하세요.
      p
        pre(data-label="webpack.entry.js")
          code.lang-javascript {{ reactEntry }}
    article.paragraph
      h2(id="리소스") 리소스
      p #[b 컴포넌트]에서 에셋을 포함하려면 #[b 속성 바인딩] 기능을 사용하거나, 정적파일처럼 포함시키면 됩니다. 우리가 일반적으로 #[b skin.html] 에 #[b ./images/logo.png] 와 같은 형식으로 포함하면 티스토리는 자동으로 에셋의 경로를 #[b CDN(Content Delivery Network)]으로 변경합니다. 컴포넌트에서 정적파일 또는 에셋을 불러오는 경우 자바스크립트를 통한 포함이므로 #[b 스킨 내부에서 별도로 경로 변환을 하지 않습니다.] 따라서 따로 #[b PUBLIC PATH] 설정을 해줄 필요가 있습니다.
      p
        pre(data-label="HelloWorld.vue")
          code.lang-html {{ resource }}
      h3(id="PUBLIC PATH") PUBLIC PATH
      P #[b webpack.base.conf.js] 은 #[b 웹팩(Wepback)]의 베이스 설정을 위한 파일입니다. 여기에서 #[b publicPath] 부분을 설정하는 것으로 #[b 컴포넌트에 포함된 에셋도 티스토리 스킨에서 불러올 수 있습니다.] 해당 주소는 블로그 마다 다를 수 있으며, 개발자 도구 등을 통해 사용하고자 하는 블로그의 #[b PUBLIC PATH] 를 알아야 합니다. 사용자 배포용으로 개발하는 경우에는 곤란할 수도 있으므로 #[b CDN(Content Delivery Network)] 으로 에셋을 불러오시기 바랍니다.
      p
        pre(data-label="webpack.base.conf.js")
          code.lang-javascript {{ webpackBaseConfg }}
  footer.footer(slot="footer" role="footer")
    div.arrows
      div.left: a(:href="$store.state.menu.example.href") #[i.fas.fa-angle-left] {{ $store.state.menu.example.label }}
      div.right: a(:href="$store.state.menu.distribute.href") {{ $store.state.menu.distribute.label }} #[i.fas.fa-angle-right]
</template>

<script>
export default {
  data() {
    return {
      vue: `<template>
  <h1>Tistory skin framework, Tidory</h1>
</template>
\<script\>
  export default {
    /** empty */
  }
\<\/script\>`,
      vueTemplate: `div#app
  //- Using Vue Component
  hello-world`,
      vueEntry: `import Vue from 'vue'

Vue.component(
  'hello-world',
   require('~/assets/components/hello-world.vue').default
);

new Vue({
  el: '#app',
});`,
      react: `import React from 'react'

class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Tistory skin framework, Tidory</h1>
    )
  }
}

module.exports = HelloWorld;`,
      reactTemplate: `//- Rendering React Component
div#app`,
      reactEntry: `import React from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = require('~/assets/components/HelloWorld');

const rootElement = document.getElementById('app');
ReactDOM.render(<HelloWorld />, rootElement);`,
      resource: `<template>
  //- PUBLIC_PATH/favicon.png
  <img src="./images/favicon.png">
  //- PUBLIC_PATH/__WEBPACK_CHANGED__.png
  <img v-bind:src='require("~/assets/images/favicon.png")'>
</template>`,
      webpackBaseConfg: `{
  test: /.(png|jpe?g|gif|svg)(?.*)?$/,
  loader: 'file-loader',
  options: {
    publicPath: 'https://tistory2.daumcdn.net/tistory/2710108/skin/images/'
  }
},
{
  test: /.(mp4|webm|ogg|mp3|wav|flac|aac)(?.*)?$/,
  loader: 'file-loader',
  options: {
    publicPath: 'https://tistory2.daumcdn.net/tistory/2710108/skin/images/'
  }
},
{
  test: /.(woff2?|eot|ttf|otf)(?.*)?$/,
  loader: 'file-loader',
  options: {
    publicPath: 'https://tistory2.daumcdn.net/tistory/2710108/skin/images/'
  }
}`
    }
  }
}
</script>