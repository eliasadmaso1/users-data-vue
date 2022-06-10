import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/auth/LoginForm.vue';
import Register from './components/auth//RegisterForm.vue';
import UserPage from './components/layout/UserDetails.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'LoginPage',
      component: Login
    },
    {
      path: '/register',
      name: 'RegisterPage',
   
      component: Register
    },
    {
        path: '/userPage',
        name: 'UserPage',
     
        component: UserPage
      }
  ]
})