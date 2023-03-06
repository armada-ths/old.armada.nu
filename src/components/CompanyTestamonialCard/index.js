import React from 'react'
import PropTypes from 'prop-types';
import './index.scss';

const CompanyTestamonialCard = ({personName, companyName, imageUrl, testamonial}) => {

  return (
  <div className='company-testamonial-card'>
    <div className='card-image'>
      <img draggable='false' alt={companyName} src={imageUrl ?? '/assets/armadalogogreen.jpg'}/>
    </div>
    <div className='card-text'>
      <span className='card-personName'>{personName}</span>
      <span className='card-companyName'>{companyName}</span>
      <span className='card-testamonial'>{testamonial}</span>
    </div>
  </div>)
}

CompanyTestamonialCard.propTypes = {
  personName: PropTypes.string,
  companyName: PropTypes.string,
  imageUrl: PropTypes.string,
  testamonial: PropTypes.string,
}

export default CompanyTestamonialCard;
