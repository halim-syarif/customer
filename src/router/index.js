import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import FoodList from '../views/FoodList.vue'
import Detail from '../views/Detail.vue'
import Bookmarks from '../views/Bookmark.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (to.name == 'Home') next({ name: 'FoodList' })
      else next()
    },
    children: [
      {
        path: 'foods',
        name: 'FoodList',
        component: FoodList
      },
      {
        path: 'foods/:foodId',
        name: 'Detail',
        component: Detail
      },
      {
        path: 'bookmarks',
        name: 'Bookmarks',
        component: Bookmarks,
        beforeEnter: (to, from, next) => {
          if (to.name == 'Bookmarks' && !localStorage.getItem('access_token')) {
            next({ name: 'Login' })
          } else {
            next()
          }
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if(to.name == 'Login' && localStorage.getItem('access_token')){
        next({name: 'Home'})
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if(to.name == 'Register' && localStorage.getItem('access_token')){
        next({name: 'Home'})
      } else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})


export default router
