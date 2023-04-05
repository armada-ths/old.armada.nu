import React from 'react'
import './index.scss'
//import Countdown, { zeroPad } from 'react-countdown-now'
import Countdown, { zeroPad } from 'react-countdown'

const CountdownComponent = () => {
    const DATE_OF_CAREER_FAIR = new Date('November 21, 2023 10:00:00') //Update the career fair date - N
    var DATE_NOW = new Date()
    const isHappening = DATE_OF_CAREER_FAIR < DATE_NOW

    const countDownRenderer = ({ days, hours, minutes, seconds }) => {
        return (
            <div className='countdown-row'>
                <div className='countdown-column'>
                    <p className='countdown-numbers'>{zeroPad(days, 2)}</p>
                    <p className='time-unit'>DAYS</p>
                </div>
                <div className='countdown-column'>
                    <p className='countdown-numbers'>{zeroPad(hours, 2)}</p>
                    <p className='time-unit'>HOURS</p>
                </div>
                <div className='countdown-column'>
                    <p className='countdown-numbers'>{zeroPad(minutes, 2)}</p>
                    <p className='time-unit'>MINUTES</p>
                </div>
                <div className='countdown-column'>
                    <p className='countdown-numbers'>{zeroPad(seconds, 2)}</p>
                    <p className='time-unit'>SECONDS</p>
                </div>
            </div>
        )
    }

    return (
        <div className='countdown-container'>
            {isHappening ? (
                <h3 className='happening'>The Armada Fair is open!</h3>
            ) : (
                <div className='countdown-width-container'>
                    <Countdown
                        date={DATE_OF_CAREER_FAIR}
                        renderer={countDownRenderer}
                    />
                </div>
            )}
        </div>
    )
}

export default CountdownComponent
