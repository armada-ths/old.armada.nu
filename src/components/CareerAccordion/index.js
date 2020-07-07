import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import Arrow from '../../../static/assets/pil_melon.png'
import ExternalLinkIcon from '../../../static/assets/external-link-outline.svg'

const CareerAccordion = (props) => {

    const handleAccordionClick = (e) => {
        if(!e.target.className.includes('external')) {
            props.setAccordion(props.id)
        }
    }
    
    return(<nav className='career-accordion' id={props.id}>
        <section role='presentation' className={`accordion-parent ${props.accordions[props.id] ? 'open' : ''}`} onClick={handleAccordionClick}>
            <div className='accordion-header'>
                <div className='company-logo'>
                    <img src={'https://ais.armada.nu' + props.logo} alt={props.company} className={` no-select ${props.accordions[props.id] ? 'open' : ''}`} draggable='false'/> 
                </div>
                <div className='job-header'>
                    <h4>
                        <span>{props.jobTitle}</span>
                        { props.external ? 
                            <a href={props.external} target='_blank' rel='noreferrer'>
                                <img className='external no-select' alt='' src={ExternalLinkIcon}/>
                            </a> : null
                        }
                    </h4>
                    <h5>
                        {props.company}
                        {props.location ? ',' : ''}
                        <span className='location'> {props.location}</span>
                    </h5> 
                </div>
            </div>
            <img src={Arrow} alt='' className={`arrow no-select ${props.accordions[props.id] ? 'open' : ''}`} draggable='false'/> 
        </section> 
        <div className='accordion-children' style={{marginTop: 0, maxHeight: props.accordions[props.id] ? '8000px' : 0}} >
            <div className='job-cont'>
                <div className='chips'> 
                    {
                        props.tags.map(chip=> 
                            <div key={chip} role='presentation' className={`chip ${props.chips[chip] ? 'selected' : ''}`} onClick={() => props.setChip(chip)}>
                                {chip}
                            </div>
                        )
                    }
                </div>
                <div className='job-info'>
                    <h3>The job</h3>
                    {props.aboutJob}
                </div>
                <div className='job-info'>
                    <h3>Who we&apos;re looking for</h3>
                    {props.lookingFor}
                </div>
                <div className='job-info'>
                    <h3>About {props.company}</h3>
                    {props.aboutCompany}
                </div>
            </div>
            
            <div className='apply'>
                <a href={props.external} target='_blank' rel='noreferrer'>
                    <h2>Apply now</h2>
                </a>
            </div>
        </div>
    </nav>)
}

CareerAccordion.propTypes = {
    accordions: PropTypes.object,
    id: PropTypes.string,
    setAccordion: PropTypes.func,
    company: PropTypes.string,
    jobTitle: PropTypes.string,
    external: PropTypes.string,
    aboutJob: PropTypes.string,
    lookingFor: PropTypes.string,
    aboutCompany: PropTypes.string,
    tags: PropTypes.array,
    chips: PropTypes.object,
    setChip: PropTypes.func,
    location: PropTypes.string,
    logo: PropTypes.string
}

export default CareerAccordion
