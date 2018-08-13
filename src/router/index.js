import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/auth/register',
      name: 'Register',
      component: () => import('@/views/auth/Register')
    }
  ],
  mode: 'history'
})
