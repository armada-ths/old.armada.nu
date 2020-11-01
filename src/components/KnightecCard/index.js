import React from "react"
import PropTypes from 'prop-types';
import "./index.scss"


const KnightecCard= ({name, workTitle, education, linkedInUrl, profileImageUrl, zoomUrl, description}) =>{

    return (
    <div className='speaker-card'>
    <div className='flip-card-inner'>
    <div className='card-front'>
    <div className='card-image'>
      <img draggable='false' alt={name} src={profileImageUrl ?? '/assets/armadalogogreen.jpg'}/>
    </div>
    <div className='card-title'>
      <div className='card-text'>
        <p className='card-name'>{name}</p>
        <p className='title'>{workTitle} </p>
        <p className='title'>{education}</p>
        
        
        
      </div>
    </div>
    </div>
    <div className='card-back'>
    <p className='card-back-name'>{name}</p>
    <p className='description'>{description}</p>
    <a className='linkedin' href={linkedInUrl} target='-blank' rel='noreferrer'>
          <img className='linkedin-logo' alt='linkedin-logo' draggable='false' src='/assets/linkedin.png' />
        </a>
        <a className='linkedin' href={zoomUrl} target='-blank' rel='noreferrer'>
          <img className='linkedin-logo' alt='zoom-logo' draggable='false' src='/assets/linkedin.png' />
        </a>
    </div>
    </div>
  </div>)
  
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