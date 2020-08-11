import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../Banner'

const RegistrationBanner = ({ location }) => {
  return (
    <Banner location={location} link={'/exhibitor_info'}>
      Exhibitor registration is now open! Register here!
    </Banner>
  )
}

RegistrationBanner.propTypes = {
  location: PropTypes.string,
}

export default RegistrationBanner
