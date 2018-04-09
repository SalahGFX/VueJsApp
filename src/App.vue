<template lang="html">
  <div id="app">
    <app-header/>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
   components: {
     AppHeader
   }
}
</script>

<style lang="css">
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,900');
  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    font-family: 'Roboto'
  }
  ::-webkit-scrollbar{
    background: transparent;
    width: 8px;
  }
  ::-webkit-scrollbar-thumb{
    background: #aaa;
    border-radius: 20px;
  }
  body {
    background: #f5f5f5;
  }
  #app{
    width: 90vw;
    height: 500px;
    margin: auto;
    position: absolute;
    left: calc(50% - 45vw);
    z-index: -2;
  }
  .slide-enter{
    transform: translateY(20px);
    opacity: 0;
  }
  .slide-enter-active{
    transition: .25s ease-in-out;
  }
  .slide-leave-active{
    transition: .25s ease-in-out;
    transform: translateY(20px);
    opacity: 0;
  }
  .box-container{
    width: 96%;
    margin: auto;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
