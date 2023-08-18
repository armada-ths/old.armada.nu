import React from 'react'
import './index.scss'

const FloorSelector = (setFloorShowed, floorShowed) => {
    return (
        <div className='floorTabs'>
            <div
                className={floorShowed === 0 ? 'active tab' : 'tab'}
                onClick={() => setFloorShowed(0)}
            >
                Nymble - 1st floor
            </div>
            <div
                className={floorShowed === 1 ? 'active tab' : 'tab'}
                onClick={() => setFloorShowed(1)}
            >
                Nymble - 2nd floor
            </div>
            <div
                className={floorShowed === 2 ? 'active tab' : 'tab'}
                onClick={() => setFloorShowed(2)}
            >
                Nymble - 3rd floor
            </div>
        </div>
    )
}

export default FloorSelector
