import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const HamburgerButton = ({onClick, isActive, melon}) => {

    return (
        <div className='hamburger-button-container'>
            <div 
                role='presentation'
                onClick={onClick} 
                className={`hamburger-button ${isActive ? ' active' : ''} ${melon ? 'melon' : ''}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

HamburgerButton.propTypes = {
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
    melon: PropTypes.bool
}

export default HamburgerButton;
