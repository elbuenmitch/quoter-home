import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Welcome from './views/Welcome.vue'
import Quotes from './views/Quotes.vue'
import NewQuote from './views/NewQuote.vue'
import DetailQuote from './views/DetailQuote.vue'
import Books from './views/Books.vue'
import NewBook from './views/NewBook.vue'
import DetailBook from './views/DetailBook.vue'
import Capture from './views/Capture.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'quotes',
      component: Quotes
    },
    {
      path: '/quotes',
      name: 'Quotes',
      component: Quotes
    },
    {
      path: '/new-quote',
      name: 'new-quote',
      component: NewQuote
    },
    {
      path: '/detail-quote',
      name: 'detail-quote',
      component: DetailQuote
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/new-book',
      name: 'new-book',
      component: NewBook
    },
    {
      path: '/detail-book',
      name: 'detail-book',
      component: DetailBook
    },
    {
      path: '/capture',
      name: 'capture',
      component: Capture
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
