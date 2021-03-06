import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Main/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: () =>
        import(
          /* webpackChunkName: "favourite" */ './views/Main/Favourite/index.vue'
        )
    },
    {
      path: '/setting',
      name: 'setting',
      component: () =>
        import(
          /* webpackChunkName: "setting" */ './views/Main/Setting/index.vue'
        )
    }
  ]
})
