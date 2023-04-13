import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../Banner'

const RegistrationBanner = ({ location }) => {
    const registrationStart = new Date('2021-08-23')
    const registrationEnd = new Date('2021-09-17 23:59:59')

    return registrationStart < new Date() && new Date() < registrationEnd ? (
        <Banner location={location} link={'/exhibitor_info'}>
            Exhibitor registration is now open! Register here!
        </Banner>
    ) : (
        <></>
    )
}

RegistrationBanner.propTypes = {
    location: PropTypes.string,
}

export default RegistrationBanner
