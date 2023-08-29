import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Banner from '../Banner'
import './index.scss'
const RecruitmentBanner = ({ location }) => {
    const [showBanner, setShowBanner] = useState(false)

    useEffect(() => {
        axios.get('https://ais.armada.nu/api/recruitment').then(res => {
            setShowBanner(res.data.length > 0)
        })
    }, [])

    return showBanner ? (
        <Banner location={location} link={'/recruitment'} className='banner'>
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
