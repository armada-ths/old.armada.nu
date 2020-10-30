import React from "react"
import "./index.scss"


const KnightecCard= ({name, workTitle, education, linkedInUrl, profileImageUrl, zoomUrl, description}) =>{

    return (<div className='contact-card'>
    <div className='card-image'>
      <img draggable='false' alt={name} src={profileImageUrl ?? '/assets/armadalogogreen.jpg'}/>
    </div>
    <div className='card-title'>
      <div className='card-text'>
        <p className='card-name'>{name}</p>
        <p className='title'>{workTitle} </p>
        <p className='title'>{education}</p>
        <a className='title' href={'mailto:' + email}>{email}</a>
        <a className='linkedin' href={linkedInUrl} target='-blank' rel='noreferrer'>
          <img className='linkedin-logo' alt='linkedin-logo' draggable='false' src='/assets/linkedin.png' />
        </a>
        <a className='linkedin' href={zoomUrl} target='-blank' rel='noreferrer'>
          <img className='linkedin-logo' alt='zoom-logo' draggable='false' src='/assets/linkedin.png' />
        </a>
        <p className='description'>{description}</p>
      </div>
    </div>
  </div>)
  
}

KnightecCard.propTypes = {
  name: PropTypes.string,
  workTitle: propTypes.string,
  education: PropTypes.string,
  linkedInUrl: PropTypes.string,
  profileImageUrl: PropTypes.string,
  zoomUrl: PropTypes.string,
  description: PropTypes.string,
}



export default KnightecCard