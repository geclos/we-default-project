import React from 'react'
import PropTypes from 'prop-types'

const About = (props, {user}) =>
  <h1>About {user.company}</h1>

About.contextTypes = {
  user: PropTypes.object.isRequired
}

module.exports = About
