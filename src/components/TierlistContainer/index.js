import React from 'react'
import Tierlistcard from './TierlistCard'
import TierlistInfo from './TierlistCard/TierlistInfo'
function TierlistContainer({ tier = 'exhibitor' }) {
    return (
        <div className='tierlistContainer'>
            <TierlistInfo />
            <Tierlistcard />
            <Tierlistcard tier='silver' />
            <Tierlistcard tier='gold' />
        </div>
    )
}
export default TierlistContainer
