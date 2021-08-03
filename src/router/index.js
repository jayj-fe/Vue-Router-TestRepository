// 0. NPM으로 설치했을 경우
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 1-1. 라우트 컴포넌트를 정의.
// 아래 내용들은 다른 파일로부터 가져올 수 있다.
// ex :
// import templateName from '파일 위치'
// const Foo = templateName

// 기존의 만들어진 컴포넌트를 가져와보자 !
import HelloWorld from '../components/HelloWorld'
// 2-1. 새로 test로 만든 컴포넌트를 가져온다.
import Test from '../components/Test'

// 1-2. 라우트를 정의.
// 각 라우트는 반드시 컴포넌트와 매핑되어야 한다.
// 실제 컴포넌트 생성자이거나 컴포넌트 옵션 객체이다.
const routes = [
    // 2-2. 라우트도 정의해준다.
    { path: '/', component: HelloWorld },
    { path: '/test', component: Test }
]

// 1-3. `routes` 옵션과 함께 router 인스턴스를 만들기.
const router = new VueRouter({
    // 3-1. mode를 수정한다.
    mode: 'history',
    routes // `routes: routes`의 줄임
})

// 1-4. 루트 인스턴스를 만들고 mount 하기.
// router와 router 옵션을 전체 앱에 주입한다.
//
// const app = new Vue({
//   router
// }).$mount('#app')
//
// 라고 공식문서에 나와있지만
// main.js 에 import 가져오기 때문에 export로 내보내줘야한다.
// const app 부분을 전체 삭제하고 아래 코드를 추가한다.
export default router