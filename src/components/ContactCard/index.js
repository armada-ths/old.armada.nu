import React, { useEffect, useState, Suspense } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import no_image from '../../../static/assets/armadalogogreen.jpg'
const ContactCard = ({
    name,
    linkedInUrl,
    imageUrl,
    localImage,
    title,
    email,
    emoji = '',
}) => {
    return (
        <div className='contact-card'>
            <div className='card-image'>
                <img
                    draggable='false'
                    alt={name}
                    src={imageUrl}
                    onError={e => {
                        e.target.onerror = null
                        e.target.src = no_image
                    }}
                />
            </div>
            <div className='card-title'>
                <div className='card-text'>
                    <p className='card-name'>{name}</p>
                    <p className='title-melon'>
                        {title} {emoji}
                    </p>
                    <a className='title-melon' href={'mailto:' + email}>
                        {email}
                    </a>
                    <a
                        className='linkedin'
                        href={linkedInUrl}
                        target='-blank'
                        rel='noreferrer'
                    >
                        <img
                            className='linkedin-logo'
                            alt='linkedin-logo'
                            draggable='false'
                            src='/assets/linkedin.png'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

ContactCard.propTypes = {
    name: PropTypes.string,
    linkedInUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string,
    emoji: PropTypes.string,
}

export default ContactCard
