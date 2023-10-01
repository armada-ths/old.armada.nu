import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

//import Fade from 'react-reveal/Fade'
import Fade from 'react-awesome-reveal'
/*Need to change to props.right ? const dir = "right": const dir = "left"; ...
<Fade direction=dir>
*/

const DiversitySection = props => {
    if (props.right) {
        var dir = 'right'
    } else if (props.left) {
        var dir = 'left'
    }
    return (
        <div className={`diversity-section ${props.right ? 'right' : ''}`}>
            <div>{props.children}</div>
        </div>
    )
}

DiversitySection.propTypes = {
    right: PropTypes.bool,
    left: PropTypes.bool,
}

export default DiversitySection
