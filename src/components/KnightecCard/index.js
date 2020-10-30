import React from "react"
import "./index.scss"


const KnightecCard= ({name, linkedInUrl, profileImageUrl, chapterUrl, zoomUrl, workTitle, description}) =>{

    return (<div className='contact-card'>
    <div className='card-image'>
      <img draggable='false' alt={name} src={imageUrl ?? '/assets/armadalogogreen.jpg'}/>
    </div>
    <div className='card-title'>
      <div className='card-text'>
        <p className='card-name'>{name}</p>
        <p className='title-melon'>{title} </p>
        <a className='title-melon' href={'mailto:' + email}>{email}</a>
        <a className='linkedin' href={linkedInUrl} target='-blank' rel='noreferrer'>
          <img className='linkedin-logo' alt='linkedin-logo' draggable='false' src='/assets/linkedin.png' />
        </a>
      </div>
    </div>
  </div>)
  
}

KnightecCard.propTypes = {
  name: PropTypes.string,
  linkedInUrl: PropTypes.string,
  profileImageUrl: PropTypes.string,
  chapterUrl: PropTypes.string,
  zoomUrl: PropTypes.string,
  workTitle: PropTypes.string,
  description: PropTypes.string,
}



export default KnightecCard