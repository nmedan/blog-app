import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Posts from './pages/Posts.vue'
import PostDetails from './pages/PostDetails.vue'
import AddPost from './pages/AddPost.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: Posts, name: 'posts' },
  { path: '/post/:id', component: PostDetails, name: 'post-details' },
  { path: '/add', component: AddPost},
  { path: '/edit/:id', component: AddPost, name:'edit-post'},
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')