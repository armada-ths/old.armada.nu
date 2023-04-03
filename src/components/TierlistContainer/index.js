import React, { useState } from 'react'
import Tierlistcard from './TierlistCard'
import TierlistInfo from './TierlistCard/TierlistInfo'
function TierlistContainer({ tier = 'exhibitor' }) {
    const [hovered, setHovered] = useState(null) //We use this to track which list item is hovered over all the components
    return (
        <div className='tierlistContainer'>
            <TierlistInfo handleHover={setHovered} itemHovered={hovered} />
            <Tierlistcard handleHover={setHovered} itemHovered={hovered} />
            <Tierlistcard
                tier='silver'
                handleHover={setHovered}
                itemHovered={hovered}
            />
            <Tierlistcard
                tier='gold'
                handleHover={setHovered}
                itemHovered={hovered}
            />
        </div>
    )
}
export default TierlistContainer
