import React, { useState } from 'react'
import './index.scss'
import Arrow from '../../../static/assets/pil_melon.png'

const tableOfContents = [
    {
        title: 'THS ARMADA',
        anchor: 'register-here',
        sections: [
            { title: 'What is THS Armada?', anchor: 'armada2021' },
            { title: 'Why THS Armada?', anchor: 'why-armada' },
            { title: 'Armadas Core Values', anchor: 'core-values' },
            { title: 'Registration', anchor: 'registration' },
        ]
    },
    {
        title: 'Important Dates',
        anchor: 'important-dates',
        sections: [
        ]
    },   
    {
        title: 'Events',
        anchor: 'events',
        sections: [
            { title: 'Banquet', anchor: 'banquet' },
        ]
    }, 
    {
        title: 'Marketing',
        anchor: 'marketing',
        sections: [
            { title: 'Custommade Lounge', anchor: 'custommade-lounge' },
            { title: 'Armada Competition', anchor: 'armada-competition' },
        ]
    }, 
    {
        title: 'FAQ',
        anchor: 'faq',
        sections: [
            { title: 'General', anchor: 'faq-general' },
            { title: 'Virtual Fair', anchor: 'faq-virtualfair' },
            { title: 'Marketing', anchor: 'faq-marketing' },
            { title: 'Events', anchor: 'faq-events' },
        ]
    }
]

const ContentHeader = ({title, anchor, sections}) => {

    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = (e, anchor) => {
        if(e.target.nodeName !== 'H4' && sections.length > 0) {
            setExpanded(!expanded)
        } else if (sections.length === 0) {
            document.getElementById(anchor).scrollIntoView();
        }
    }

    return (<div className='toc-header'>
        <div className='toc-parent' onClick={(e) => toggleExpanded(e, anchor)} role='presentation'>
            <a href={`#${anchor}`}>
                <h4>{title}</h4>
            </a>
            { sections.length > 0 ? <img className={expanded ? 'expanded' : ''} src={Arrow} alt='' /> : <></> }
        </div>
        <div className={`toc-child ${expanded ? '' : 'hidden'}`}>
            { sections.map(section => 
                <a key={section.anchor} href={`#${section.anchor}`}>
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
                <ContentHeader key={content.anchor} {...content} />
            )}
        </div>
    )
}

export default TableOfContents