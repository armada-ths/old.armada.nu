import React from 'react'
import './index.scss'
const FloorButtons = ({ setFairLocation }) => {
    return (
        <div className='floorButtons'>
            <div
                className='floorButton'
                onClick={() => setFairLocation('Nymble - 1st Floor')}
            >
                1
            </div>
            <div
                className='floorButton'
                onClick={() => setFairLocation('Nymble - 2nd Floor')}
            >
                2
            </div>
            <div
                className='floorButton'
                onClick={() => setFairLocation('Nymble - 3rd Floor')}
            >
                3
            </div>
        </div>
    )
}
export default FloorButtons
