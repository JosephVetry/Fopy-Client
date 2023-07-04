import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import NotFound from '../views/NotFound.vue'
import AddDriverPage from '../views/AddDriverPage.vue'
import ListDriverPage from '../views/ListDriverPage.vue'
import AddServicePage from '../views/AddServicePage.vue'
import ListServicePage from '../views/ListServicePage.vue'
import PendingTransactionsPage from '../views/PendingTransactionsPage.vue'
import AllTransactionsPage from '../views/AllTransactionsPage.vue'
import InboxPage from '../views/InboxPage.vue'
import EditServicePage from '../views/EditServicePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: InboxPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage
    },
    {
      path: '/drivers/add',
      name: 'add-driver',
      component: AddDriverPage
    },
    {
      path: '/drivers/list',
      name: 'list-driver',
      component: ListDriverPage
    },
    {
      path: '/services/add',
      name: 'add-service',
      component: AddServicePage
    },
    {
      path: '/services/list',
      name: 'list-service',
      component: ListServicePage
    },
    {
      path: '/transactions/pending',
      name: 'pending-transactions',
      component: PendingTransactionsPage
    },
    {
      path: '/transactions/all',
      name: 'all-transactions',
      component: AllTransactionsPage
    },
    {
      path: '/edit/services/:id',
      name: 'edit services',
      component: EditServicePage,
      props: true

    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !localStorage.access_token) {
    next({ name: 'login' })
  } else if (to.name === 'login' && localStorage.access_token) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
