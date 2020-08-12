import React, { useEffect, useState } from 'react'
import './index.scss';
import Countdown from '../Countdown'
import Video from '../../../static/assets/video/film1.mp4'
import Logo from '../../../static/assets/images/header-images/logo.png'
import useWindowSize from '../../hooks/useWindowSize'

const Jumbotron = (props) => {

    const windowSize = useWindowSize();
    const [onMobile, setOnMobile] = useState(windowSize.width < 850);
    const [video, setVideo] = useState();

    useEffect(() => {
        setOnMobile(windowSize.width < 850)
    }, [windowSize])

    useEffect(() => {
        setVideo((props.location === '/' && !onMobile) ? (
            <video autoPlay loop muted>
                <source src={Video} type='video/mp4'/> 
            </video>) : null)
    }, [props.location, onMobile])

    //TODO Request API endpoint from ais for fair date
    return (<div id='header'>
        <div className={`logo-container ${video ? 'fixed' : ''}`}>
                <img alt='' src={Logo} />
                <p className='logo-date'>THE FAIR 17-18 NOV 2020</p>
                {video ? <Countdown/> : <></>}
        </div>
        <div className={video ? 'header-home' : 'header-image'}>
            {video ?? <img alt='' src={props.image}/>}
        </div>
    </div>);

}

export default Jumbotron;
