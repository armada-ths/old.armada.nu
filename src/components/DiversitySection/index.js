import React from 'react'
import PropTypes from 'prop-types';
import './index.scss';

import Fade from 'react-reveal/Fade'

const DiversitySection = props => {
    return (
        <div className={`diversity-section ${props.right ? 'right' : ''}`}>
            <Fade left={!props.right} right={props.right}>
                <div>{props.children}</div>
            </Fade>
        </div>
    )
}

DiversitySection.propTypes = {
    right: PropTypes.bool
}

export default DiversitySection
