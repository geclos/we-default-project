import { isUserAuthenticated } from 'configs/auth'
import About from '../components/About'
import AppContainer from '../containers/App'
import Home from '../components/Home'
import Login from '../components/Login'

export default [
  {
    path: '/',
    component: isUserAuthenticated(AppContainer),
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/about',
        component: About
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]
