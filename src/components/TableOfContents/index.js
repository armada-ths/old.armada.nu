import React, { useState } from 'react'
import './index.scss'
import Arrow from '../../../static/assets/pil_melon.png'

const tableOfContents = [
    {
        title: 'Register here',
        anchor: 'register-here',
        sections: [
        ]
    },    
    {
        title: 'Virtual Career Fair',
        anchor: 'virtual-career-fair',
        sections: [
            { title: 'Things taken into consideration when choosing the platform', anchor: 'consideration' },
            { title: 'How the platform works', anchor: 'how-the-platform-works' },
            { title: 'How do students find exhibitors on the platform', anchor: 'students-find-exhibitors' },
            { title: 'How you find students on the platform', anchor: 'you-find-students' },
            { title: 'How we are going to attract students to the platform', anchor: 'attract-students' },
            { title: 'A talent pool created after the fair', anchor: 'talent-pool' },
            { title: 'Insights after the fair', anchor: 'insights' },
            { title: 'Creating your virtual booth', anchor: 'create-booth' },
        ]
    },  
    {
        title: 'FAQ',
        anchor: 'faq',
        sections: [
            { title: 'Schedule', anchor: 'faq-schedule' },
            { title: 'Registration', anchor: 'faq-registration' },
            { title: 'Cancellation', anchor: 'faq-cancellation' },
            { title: 'Virtual Platform (Graduateland) ', anchor: 'faq-virtual-platform' },
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