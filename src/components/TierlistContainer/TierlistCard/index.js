import React from 'react'
import './index.scss'
import { StaticImage } from 'gatsby-plugin-image'
import exh_img from '../../../../static/assets/TierlistCard/armada_round_logo_green.png'
import silver_img from '../../../../static/assets/TierlistCard/armada_logo_text_silver.png'
import gold_img from '../../../../static/assets/TierlistCard/armada_logo_text_gold.png'

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
    armada_run: true,
}

function Tierlistcard({ tier = 'exhibitor', handleHover, itemHovered }) {
    var usedExlusive
    var figure
    if (tier === 'exhibitor') {
        usedExlusive = exhibitor
        figure = exh_img
    } else if (tier === 'silver') {
        usedExlusive = silver
        figure = silver_img
    } else {
        usedExlusive = gold
        figure = gold_img
    }

    return (
        <div class='card'>
            <p class='cardTitle' id={tier}>
                {tier.toUpperCase()}
            </p>
            <img class='tierImage' src={figure} />
            <ul>
                {Object.values(usedExlusive).map((item, index) => {
                    if (typeof item === 'boolean') {
                        if (item) {
                            return (
                                <li
                                    id='listBox'
                                    key={index}
                                    onMouseOver={() => handleHover(index)}
                                    style={{
                                        backgroundColor:
                                            itemHovered === index
                                                ? '#828080'
                                                : '#302c2c',
                                    }}
                                    onMouseOut={() => handleHover(null)}
                                >
                                    ✅
                                </li>
                            )
                        } else {
                            return (
                                <li
                                    id='listBox'
                                    key={index}
                                    onMouseOver={() => handleHover(index)}
                                    style={{
                                        backgroundColor:
                                            itemHovered === index
                                                ? '#828080'
                                                : '#302c2c',
                                    }}
                                    onMouseOut={() => handleHover(null)}
                                >
                                    ❌
                                </li>
                            )
                        }
                    } else if (typeof item === 'string') {
                        return (
                            <li
                                id='listString'
                                key={index}
                                onMouseOver={() => handleHover(index)}
                                style={{
                                    backgroundColor:
                                        itemHovered === index
                                            ? '#828080'
                                            : '#302c2c',
                                }}
                                onMouseOut={() => handleHover(null)}
                            >
                                {item}
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}

export default Tierlistcard
