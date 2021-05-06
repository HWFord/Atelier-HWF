import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/basket',
        name: 'Basket',
        component: () => import(/* webpackChunkName: "basket" */ '../views/Basket.vue')
      },
      {
        path: '/account',
        name: 'Account',
        component: () => import(/* webpackChunkName: "basket" */ '../views/Account.vue')
      },
      {
        path: '/categories',
        name: 'Categories',
        component: () => import(/* webpackChunkName: "categories" */ '../views/Categories.vue')
      },
      {
        path: '/category/:categoryID/subcategories',
        name: 'Subcategories',
        component: () => import(/* webpackChunkName: "subcategories" */ '../views/Subcategories.vue')
      },
      {
        path: '/category/:categoryID/subcategory/:subcategoryID/products',
        name: 'Productlist',
        component: () => import(/* webpackChunkName: "productlist" */ '../views/Productlist.vue')
      },
      {
        path: '/category/:categoryID/subcategory/:subcategoryID/product/:productID',
        name: 'Product',
        component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
