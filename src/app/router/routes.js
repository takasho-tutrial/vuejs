import topComponent from '../components/top.vue'
import counterComponent from '../components/counter.vue'

const routes = [
  {
    path: '/',
    component: topComponent
  },
  {
    path: '/counter',
    name: 'counter',
    component: counterComponent
  },
  {
    path: '**',
    redirect: '/'
  }
]

export default routes
