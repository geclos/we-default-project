import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

export const isUserAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => !state.user, // how to get the user state
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})
