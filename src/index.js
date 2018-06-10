import 'css/main'

import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'configs/routes'
import { getUser } from 'actions/user'
import { Provider } from 'react-redux'
import { getItem } from 'utils/localStorage'
import configureStore from 'configs/configureStore'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = configureStore()

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const main = () => {
  ReactDOM.render((
    <Provider store={store}>
      <Router>
        <div>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
      </Router>
    </Provider>
  ), document.getElementById('root'))
}

// stored accessToken may have expired...
const token = getItem('wideeyes-token')
if (token) {
  store.dispatch(getUser(token))
    .then(() => main())
    .catch(() => main())
} else {
  main()
}
