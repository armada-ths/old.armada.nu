import React, { useEffect, useState, useMemo } from 'react'
import './index.scss'
import Countdown from '../Countdown'
import Video from '../../../static/assets/video/virtual_fair.mp4'
import Logo from '../../../static/assets/images/header-images/virtual_logo.png'
import prideLogo from '../../../static/assets/images/header-images/prideLogo.png'
import useWindowSize from '../../hooks/useWindowSize'
import todaysDate from '../../templates/todaysDate'
import axios from 'axios'
import SquareButton from '@/layouts/Homepage/SquareButton'
import Newsfeed from '../Newsfeed'
import News from '@/layouts/News'
import mapicon from '../../../static/assets/mapicon.png'
const Jumbotron = props => {
    const DATE_PRIDE_WEEK_START = new Date('June 1, 2023 00:00:01')
    const DATE_PRIDE_WEEK_END = new Date('June 30, 2023 00:00:01')
    const prideWeek =
        DATE_PRIDE_WEEK_START < todaysDate && DATE_PRIDE_WEEK_END > todaysDate

    const windowSize = useWindowSize()
    const [onMobile, setOnMobile] = useState(windowSize.width < 850)
    const [video, setVideo] = useState()
    const [videoLoaded, setVideoLoaded] = useState(false) //track if video is loaded (only for desktop)
    const [fairDate, setFairDate] = useState('')

    useEffect(() => {
        setOnMobile(windowSize.width < 850)
    }, [windowSize])

    useEffect(() => {
        setVideo(
            props.location === '/' && !onMobile ? (
                <video
                    autoPlay
                    loop
                    muted
                    onLoadedData={() => setVideoLoaded(true)}
                >
                    <source src={Video} type='video/mp4' />
                </video>
            ) : null
        )
    }, [props.location, onMobile])
    useEffect(() => {
        axios
            .get('https://ais.armada.nu/api/dates/')
            .then(res => {
                var months = [
                    'JAN',
                    'FEB',
                    'March',
                    'APR',
                    'MAY',
                    'JUN',
                    'JUL',
                    'AUG',
                    'SEP',
                    'OCT',
                    'NOV',
                    'DEC',
                ]
                let days = res.data.fair.days //example of days: ["2023-11-21", "2023-11-22"]
                let fairStartArray = days[0].split('-')
                let fairEndArray = days[1].split('-')
                let localFairDate =
                    'THE FAIR: ' +
                    fairStartArray[2] +
                    '-' +
                    fairEndArray[2] +
                    ' ' +
                    months[parseInt(fairEndArray[1]) - 1] +
                    ' ' +
                    fairEndArray[0]
                console.log('Successfully captured fair date')
                setFairDate(localFairDate)
            })
            .catch(() => {
                setFairDate('THE FAIR: 21-22 NOV 2023')
            })
    }, [])
    const memoizedFairDate = useMemo(() => fairDate, [fairDate])
    const memoizedVideo = useMemo(() => video, [video])

    //TODO Request API endpoint from ais for fair date
    // classname = fixed means homepage /Nima boi
    return (
        <div id='header'>
            <div className={`logo-container ${memoizedVideo ? 'fixed' : ''}`}>
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
                <p className='logo-date'>{memoizedFairDate}</p>
                {memoizedVideo ? (
                    <div className='buttonsJumbotron'>
                        <SquareButton
                            idNr={'1'}
                            hrefVal={'/map'}
                            textVal={'Explore the Exhibitors'}
                        />
                        <SquareButton
                            idNr={'3'}
                            hrefVal={'/for-companies'}
                            textVal={'For Companies'}
                        />
                    </div>
                ) : (
                    <></>
                )}
                {memoizedVideo && videoLoaded ? <Countdown /> : <></>}
                {!(memoizedVideo && videoLoaded) ? (
                    <a className='jumbotronMapButton' href='/map'>
                        <img src={mapicon} alt='Click here for the map' />
                    </a>
                ) : (
                    <></>
                )}
            </div>
            <div className={memoizedVideo ? 'header-home' : 'header-image'}>
                {memoizedVideo ?? <img alt='' src={props.image} />}
            </div>
        </div>
    )
}

export default Jumbotron
