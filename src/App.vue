<template>
  <div id="app">
    <!-- 1-1. 라우터 view를 호출한다. -->
    <router-link to="/"> main 컴포넌트로 이동</router-link>
    <router-link to="/test"> test 컴포넌트로 이동 </router-link>
    <hr>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 4-1. transition 컴포넌트 추가 -->
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App'
  // components: {
    // HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 4-2. transition 스타일을 추가한다 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
