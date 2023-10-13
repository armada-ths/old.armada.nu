import React, { useState } from 'react'
import './index.scss'
const FloorButtons = ({
    setFairLocation,
    showDevTool,
    setDevMode,
    devMode,
    building,
    setEditorCoordinates,
}) => {
    const [buttonPressed, setButtonPressed] = useState(2)
    return (
        <div className='floorButtons'>
            {building === 'Nymble' && (
                <div
                    className={
                        'floorButton' +
                        (buttonPressed === 1 ? ' activeFloorButton' : '')
                    }
                    onClick={() => {
                        setButtonPressed(1)
                        setFairLocation('Nymble - 1st Floor')
                    }}
                >
                    1
                </div>
            )}
            <div
                className={
                    'floorButton' +
                    (buttonPressed === 2 ? ' activeFloorButton' : '')
                }
                onClick={() => {
                    let fairLocation
                    fairLocation =
                        building === 'Nymble'
                            ? 'Nymble - 2nd Floor'
                            : 'Library Main'
                    setButtonPressed(2)
                    setFairLocation(fairLocation)
                }}
            >
                {building === 'Nymble' ? '2' : '1'}
            </div>
            <div
                className={
                    'floorButton' +
                    (buttonPressed === 3 ? ' activeFloorButton' : '')
                }
                onClick={() => {
                    let fairLocation
                    fairLocation =
                        building === 'Nymble'
                            ? 'Nymble - 3rd Floor'
                            : 'Library Ångdomen'
                    setButtonPressed(3)
                    setFairLocation(fairLocation)
                }}
            >
                {building === 'Nymble' ? '3' : 'Å'}
            </div>
            {showDevTool && (
                <div
                    className='floorButton'
                    onClick={() => setDevMode(!devMode)}
                >
                    {devMode ? 'Dev' : 'Prod'}
                </div>
            )}
            {showDevTool && (
                <div
                    className='floorButton'
                    onClick={() => setEditorCoordinates([])}
                >
                    Null
                </div>
            )}
        </div>
    )
}
export default FloorButtons
