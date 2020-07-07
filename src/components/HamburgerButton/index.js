import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classNames'
import './index.scss'

const HamburgerButton = ({onClick, isActive, melon}) => {

    return (
        <div className='hamburger-button-container'>
            <div 
                role='presentation'
                onClick={onClick} 
                className={classNames({
                    'hamburger-button': true,
                    'active': isActive,
                    'melon': melon
                    })
                }>
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
