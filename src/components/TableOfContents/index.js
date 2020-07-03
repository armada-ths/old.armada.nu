import React, { useState } from 'react'
import './index.scss'
import Arrow from '../../../static/assets/pil_melon.png'

const tableOfContents = [
    {
        title: 'General info',
        anchor: 'general-info',
        sections: [
            { title: 'What is a virtual career fair?', anchor: 'what-is-a-virtual-career-fair' }
        ]
    },    
    {
        title: 'Before the fair',
        anchor: 'before-the-fair',
        sections: [
            { title: 'How to create your booth', anchor: 'create-booth' },
            /*
            { title: 'Check-in', anchor: 'check-in' }
            */
            { title: 'Travel to the fair', anchor: 'travel-to-the-fair' }
            /*
            { title: 'Transport of goods to the fair', anchor: 'transport-of-goods-to-the-fair' }
            { title: 'Exhibition area', anchor: 'exhibition-area' }
            { title: 'General rules and guidelines', anchor: 'general-rules-and-guidelines' }
            { title: 'Electricity', anchor: 'electricity' }
            { title: 'Elevators', anchor: 'elevators' }
            */
        ]
    },  
    {
        title: 'During the fair',
        anchor: 'during-the-fair',
        sections: [
            /*
            { title: 'Service information', anchor: 'service-information' }
            { title: 'Focus Rooms', anchor: 'focus-rooms' }
            { title: 'Safety', anchor: 'safety' }
            { title: 'The grand banquet', anchor: 'the-grand-banquet' }
            { title: 'Website', anchor: 'website' }
            */
            { title: 'Social media', anchor: 'social-media' },
        ]
    },  
    {
        title: 'After the fair',
        anchor: 'after-the-fair',
        sections: [
            /*
            { title: 'Check-out', anchor: 'check-out' },
            { title: 'Deconstruction', anchor: 'deconstruction' },
            { title: 'Transport of goods after the fair', anchor: 'transport-of-goods-after-the-fair' },
            */
            { title: 'Invoice', anchor: 'invoice' },
        ]
    },
]

const ContentHeader = ({title, anchor, sections}) => {

    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = (e) => {
        if(e.target.nodeName !== 'H4') setExpanded(!expanded)
    }

    return (<div className='toc-header'>
        <div className='toc-parent' onClick={toggleExpanded} role='presentation'>
            <a href={`#${anchor}`}>
                <h4>{title}</h4>
            </a>
            { sections.length > 0 ? <img className={expanded ? 'expanded' : ''} src={Arrow} alt='' /> : <></> }
        </div>
        <div className={`toc-child ${expanded ? '' : 'hidden'}`}>
            { sections.map(section => 
                <a href={`#${section.anchor}`}>
                    <h5>{section.title}</h5>
                </a>
            )}
        </div>
    </div>)

}

const TableOfContents = () => {

    return (
        <div className='table-of-contents'>
            <h3>Table of Contents</h3>
            { tableOfContents.map(content =>
                <ContentHeader {...content} />
            )}
        </div>
    )
}

export default TableOfContents