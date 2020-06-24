import React from 'react'
import './index.scss';
import Countdown from '../Countdown'
import Video from '../../../static/assets/video/film1.mp4'
import Logo from '../../../static/assets/images/header-images/logo.png'

const Jumbotron = (props) => {

    let image = props.image ? <img alt='' src={props.image}/> : null;
    let video = props.video ? (
        <video autoPlay loop muted>
            <source src={Video} type='video/mp4'/> 
        </video>) : null;

    //TODO Request API endpoint from ais for fair date
    return (<div id='header'>
        <div className={`logo-container ${video ? 'fixed' : ''}`}>
                <img alt='' src={Logo} />
                <p className='logo-date'>THE FAIR 17-18 NOV 2020</p>
                {video ? <Countdown/> : <></>}
        </div>
        <div className={video ? 'header-home' : 'header-image'}>
            {video ?? image}
        </div>
    </div>);

}

export default Jumbotron;
