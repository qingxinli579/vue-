// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App2 from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'amfe-flexible'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(store)
/* eslint-disable no-new */
new Vue({
  el: '#app2',
  router,
  components: { App2 },
  template: '<App2/>'
})
