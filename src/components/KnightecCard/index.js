import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const KnightecCard = ({
    name,
    workTitle,
    education,
    videoUrl,
    linkedInUrl,
    profileImageUrl,
    zoomUrl,
    description,
}) => {
    return (
        <div>
            <div className='speaker-card'>
                <div className='flip-card-inner'>
                    <div className='card-front'>
                        <div className='card-image'>
                            <img
                                draggable='false'
                                alt=''
                                src={profileImageUrl}
                            />
                        </div>
                        <div className='card-title'>
                            <div className='card-text'>
                                <p className='card-name'>{name}</p>
                                <p className='edu-title'>{education}</p>
                                <p className='title'>{workTitle} </p>
                            </div>
                        </div>
                    </div>
                    <div className='card-back'>
                        <p className='card-back-name'>{name}</p>
                        <p className='description'>{description}</p>
                        <form
                            id='submitForm'
                            method='get'
                            action={videoUrl}
                            target='_blank'
                        >
                            <button type='submit'>Watch {name}'s talk</button>
                        </form>
                        {/* <a className='linkedin' href={linkedInUrl} target='-blank' rel='noreferrer'>
          <img className='linkedin-logo' alt='linkedin-logo' draggable='false' src='/assets/linkedin.png' />
        </a>
        <a className='linkedin' href={linkedInUrl} target='-blank' rel='noreferrer'>
          <img className='linkedin-logo' alt='zoom-logo' draggable='false' src='/assets/zoom.png' />
        </a> */}
                    </div>
                </div>
            </div>
            <div className='mobile-description'>
                <p className='m-description'>{description}</p>
                <form
                    id='submitForm'
                    method='get'
                    action={videoUrl}
                    target='_blank'
                >
                    <button type='submit'>Watch {name}'s talk</button>
                </form>

                {/* <a className='linkedin' href={zoomUrl} target='-blank' rel='noreferrer'>
          <img className='linkedin-logo' alt='linkedin-logo' draggable='false' src='/assets/linkedin.png' />
        </a>
        <a className='linkedin' href={zoomUrl} target='-blank' rel='noreferrer'>
          <img className='linkedin-logo' alt='zoom-logo' draggable='false' src='/assets/linkedin.png' />
        </a> */}
            </div>
        </div>
    )
}

KnightecCard.propTypes = {
    name: PropTypes.string,
    workTitle: PropTypes.string,
    education: PropTypes.string,
    linkedInUrl: PropTypes.string,
    profileImageUrl: PropTypes.string,
    zoomUrl: PropTypes.string,
    description: PropTypes.string,
}

export default KnightecCard
