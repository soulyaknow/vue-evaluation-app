import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import IndexView from '../views/IndexView.vue'
import EvaluateInstructor from '../views/EvaluateInstructor.vue'
import Profile from '../views/ProfileView.vue'
import Ranking from '../views/RankingView.vue'
import ForgotPassword from '../views/ResetPasswordView.vue'

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
    path: '/evaluateInstructor',
    name: 'evaluate',
    component: EvaluateInstructor
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
  {
    path: '/fpassword',
    name: 'forgotpassword',
    component: ForgotPassword
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
