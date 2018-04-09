import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.directive('quantity', {
  bind(el, binding, vnode){
    if(binding.value === "show") {
      el.classList.add("show")
    }
  }
});
import { routes } from './routes.js'
import { store } from './store/store.js'

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
