import topComponent from '../components/top.vue'
import counterComponent from '../components/counter.vue'
import todoComponent from '../components/todo.vue'

const routes = [
  {
    path: '/',
    component: topComponent
  },
  {
    path: '/counter',
    component: counterComponent
  },
  {
    path: '/todo',
    component: todoComponent
  },
  {
    path: '**',
    redirect: '/'
  }
]

export default routes
