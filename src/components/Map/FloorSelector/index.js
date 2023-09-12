import React from 'react'
import './index.scss'

const FloorSelector = (setFairLocation, fairLocation) => {
    return (
        <div className='floorTabs'>
            <div
                className={
                    fairLocation === 'Nymble - 1st Floor' ? 'active tab' : 'tab'
                }
                onClick={() => setFairLocation('Nymble - 1st Floor')}
            >
                Nymble - 1st floor
            </div>
            <div
                className={
                    fairLocation === 'Nymble - 2nd Floor' ? 'active tab' : 'tab'
                }
                onClick={() => setFairLocation('Nymble - 2nd Floor')}
            >
                Nymble - 2nd floor
            </div>
            <div
                className={
                    fairLocation === 'Nymble - 3rd Floor' ? 'active tab' : 'tab'
                }
                onClick={() => setFairLocation('Nymble - 3rd Floor')}
            >
                Nymble - 3rd floor
            </div>
        </div>
    )
}

export default FloorSelector
