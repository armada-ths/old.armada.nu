import React from 'react'
import './index.scss'
const FloorButtons = ({
    setFairLocation,
    showDevTool,
    setDevMode,
    devMode,
}) => {
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
            {showDevTool && (
                <div
                    className='floorButton'
                    onClick={() => setDevMode(!devMode)}
                >
                    {devMode ? 'Dev' : 'Prod'}
                </div>
            )}
        </div>
    )
}
export default FloorButtons
