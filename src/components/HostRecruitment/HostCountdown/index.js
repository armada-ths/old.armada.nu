/* Since the other countdown component in the jumbotron was hardcoded I'm remaking one here for the host countdown
You can change the date below //Nima */

import React from 'react'
import Countdown from 'react-countdown'
import './index.scss'

const HostCountdown = () => {
    const targetDate = new Date('2023-09-17T23:59:00')

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render when the countdown is completed
            return <span>Application is now closed!</span>
        } else {
            return (
                <div className='countdown'>
                    <div className='countdown-item'>
                        <span className='countdown-number'>{days}</span>
                        <span className='countdown-label'>Days</span>
                    </div>
                    <div className='countdown-item'>
                        <span className='countdown-number'>{hours}</span>
                        <span className='countdown-label'>Hours</span>
                    </div>
                    <div className='countdown-item'>
                        <span className='countdown-number'>{minutes}</span>
                        <span className='countdown-label'>Minutes</span>
                    </div>
                    <div className='countdown-item'>
                        <span className='countdown-number'>{seconds}</span>
                        <span className='countdown-label'>Seconds</span>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className='countdown-container'>
            <h2>Host Application Closes in:</h2>
            <Countdown date={targetDate} renderer={renderer} />
        </div>
    )
}

export default HostCountdown
