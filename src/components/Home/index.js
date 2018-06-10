import React from 'react'
import PropTypes from 'prop-types'

const Home = (props, { user }) =>
  <h1>Hello, {user.company}</h1>

Home.contextTypes = {
  user: PropTypes.object.isRequired
}

module.exports = Home
