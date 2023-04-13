import React, { useEffect, useState } from 'react'
import './index.scss'
import Countdown from '../Countdown'
import Video from '../../../static/assets/video/virtual_fair.mp4'
import Logo from '../../../static/assets/images/header-images/virtual_logo.png'
import prideLogo from '../../../static/assets/images/header-images/prideLogo.png'
import useWindowSize from '../../hooks/useWindowSize'
import todaysDate from '../../templates/todaysDate'

const Jumbotron = props => {
    const DATE_PRIDE_WEEK_START = new Date('June 1, 2023 00:00:01')
    const DATE_PRIDE_WEEK_END = new Date('June 30, 2023 00:00:01')
    const prideWeek =
        DATE_PRIDE_WEEK_START < todaysDate && DATE_PRIDE_WEEK_END > todaysDate

    const windowSize = useWindowSize()
    const [onMobile, setOnMobile] = useState(windowSize.width < 850)
    const [video, setVideo] = useState()

    useEffect(() => {
        setOnMobile(windowSize.width < 850)
    }, [windowSize])

    useEffect(() => {
        setVideo(
            props.location === '/' && !onMobile ? (
                <video autoPlay loop muted>
                    <source src={Video} type='video/mp4' />
                </video>
            ) : null
        )
    }, [props.location, onMobile])

    //TODO Request API endpoint from ais for fair date
    return (
        <div id='header'>
            <div className={`logo-container ${video ? 'fixed' : ''}`}>
                <a
                    href='/'
                    style={{
                        display: 'contents',
                        margin: 0,
                        padding: 0,
                        lineHeight: 0,
                    }}
                >
                    <img
                        alt=''
                        src={prideWeek ? prideLogo : Logo}
                        id='logo-container-img'
                    />
                </a>
                <p className='logo-date'>
                    THE FAIR <wbr /> 21&#8209;22 NOV 2023
                </p>
                {video ? <Countdown /> : <></>}
            </div>
            <div className={video ? 'header-home' : 'header-image'}>
                {video ?? <img alt='' src={props.image} />}
            </div>
        </div>
    )
}

export default Jumbotron
