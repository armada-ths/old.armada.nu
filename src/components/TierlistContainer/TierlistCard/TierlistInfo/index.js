import React from 'react'

const TierlistInfo = ({ handleHover, itemHovered }) => {
    const text = [
        'Booth Size:',
        'Transport & Wifi:',
        'Lunch tickets:',
        'Showcase in exhibitor catalogue:',
        'Assigned hosts:',
        'Tickets to the Banquet:',
        'Field visit or Panel discussion:',
        'Marketed as (on social media & website):',
    ]
    return (
        <div className='tierlistInfo'>
            <p>Exclusives</p>
            <ul>
                {text.map((item, index) => (
                    <li
                        key={index}
                        onMouseOver={() => handleHover(index)}
                        style={{
                            backgroundColor:
                                itemHovered === index ? '#575e56' : '#302c2c',
                            borderTopStyle:
                                itemHovered === index ? 'solid' : 'dashed',
                            borderBottomStyle:
                                itemHovered === index ? 'solid' : 'dashed',
                        }}
                        onMouseOut={() => handleHover(null)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TierlistInfo
