import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Banner from '../Banner'
import './index.scss'
const RecruitmentBanner = ({ location }) => {
    const [showBanner, setShowBanner] = useState(false)

    useEffect(() => {
        if (location === '/map') {
            setShowBanner(false)
        } else {
            axios.get('https://ais.armada.nu/api/recruitment').then(res => {
                setShowBanner(res.data.length > 0)
            })
        }
    }, [location])
    useEffect(() => {
        console.log('hey' + showBanner)
    }, [showBanner])
    return showBanner ? (
        <Banner
            location={location}
            link={'/recruitment'}
            className='banner'
            style={{ display: location === '/map' ? 'block' : 'none' }}
        >
            Recruitment open now! Apply here!
        </Banner>
    ) : (
        <></>
    )
}

RecruitmentBanner.propTypes = {
    location: PropTypes.string,
}

export default RecruitmentBanner
