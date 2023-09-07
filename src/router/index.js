import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import IndexView from '../views/IndexView.vue'
import Evaluate from '../views/EvaluateView.vue'
import Profile from '../views/ProfileView.vue'
import Ranking from '../views/RankingView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/landing',
    name: 'landing',
    component: IndexView
  },
  {
    path: '/evaluate',
    name: 'evaluate',
    component: Evaluate
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
