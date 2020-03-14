import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './components/main.component'
import Activitees from './components/section-sport-en-entreprise/activitees/activitees'
import Bienfaits from './components/section-sport-en-entreprise/bienfaits/bienfaits'
import Formules from './components/section-sport-en-entreprise/formules/formules'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '/activitees', component: Activitees, name: 'activitees' },
      { path: '/bienfaits', component: Bienfaits, name: 'bienfaits' },
      { path: '/formules', component: Formules, name: 'formules' },
    ]
   },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
