import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld2 from '../page/HelloWorld2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld2',
      component: HelloWorld2
    }
  ]
})
