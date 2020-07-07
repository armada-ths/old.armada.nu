import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const HamburgerButton = ({onClick, isActive}) => {

    return (
        <div className='hamburger-button-container'>
            <div 
                role='presentation'
                onClick={onClick} 
                className={`hamburger-button ${isActive ? ' active' : ''}`}>
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
    isActive: PropTypes.bool
}

export default HamburgerButton;
