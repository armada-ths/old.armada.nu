import React from 'react'
import './index.scss'
/* Cards for different tier lists displayed on website.
To do: Fix everything up. Get logos for each tier */

/*The exclusives goes as follows: Booth size; Transport, Wifi, Electricity; Lunch Tickets; Showcase in Exhibitor catalogue; Host aid;
Banquet Tickets; Armada Run; Field visit or Panel discussion, Marketed as on social media & website: ; Armada competition
*/

const exhibitor = {
    booth_size: '2x3',
    t_w_e: true,
    lunch_tickets: true,
    showcase: true,
    host_aid: true,
    banquet_tickets: false,
    armada_run: false,
    field_visit_or_panel_discussion: 'neither',
    marketed_as: 'exhibitor',
    armada_competition: false,
}

const silver = {
    ...exhibitor,
    booth_size: '2x4',
    banquet_tickets: true,
    armada_run: false,
    field_visit_or_panel_discussion: 'either',
    marketed_as: 'silver',
    armada_competition: false,
}

const gold = {
    ...silver,
    booth_size: '2x5',
    field_visit_or_panel_discussion: 'both',
    marketed_as: 'gold',
    armada_competition: true,
}

function Tierlistcard({ tier = 'exhibitor' }) {
    const items = new Array(10).fill(null) //Create sample empty array of 10 exclusives
    const itemList = []
    var usedExlusive
    if (tier === 'exhibitor') {
        usedExlusive = exhibitor
    } else if (tier === 'silver') {
        usedExlusive = silver
    } else {
        usedExlusive = gold
    }
    for (let i = 0; i < 10; i++) {
        itemList.append()
    }
    return (
        <div class='card'>
            <p class='title' id={tier}>
                {tier.toUpperCase()}
            </p>
            <ul>
                {Object.values(usedExlusive).map((item, index) => {
                    if (typeof item === 'boolean') {
                        if (item) {
                            return <li key={index}>✅</li>
                        } else {
                            return <li key={index}>❌</li>
                        }
                    } else if (typeof item === 'string') {
                        return <li key={index}>{item}</li>
                    }
                })}
            </ul>
        </div>
    )
}

export default Tierlistcard
