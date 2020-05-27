import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'main',
    component: () => import('@/views/index'),
    children:[
      {
        path:'/',
        name:'home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path:'/detail/:id',
        name:'detail',
        component: () => import('@/views/news_detail/index')
      },
      {
        path:'/tag/:tag',
        name:'tagview',
        component: () => import('@/views/tag/index')
      },
      {
        path:'/post',
        name:"post",
        component: () => import('@/views/post/index')
      },
      {
        path:'/my-post',
        name:"my-post",
        component: () => import('@/views/post/my-post')
      },
      {
        path:'/my-comment',
        name:"my-comment",
        component: () => import('@/views/post/my-comment')
      },      
      {
        path:'/search/:key',
        name:'search',
        component: () => import('@/views/search/index')
      },      
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/')
  },
  {
    path:"/redirect",
    component: () => import('@/views/redirect/index')
  },
  {
    path:'*',
    redirect:"/"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
