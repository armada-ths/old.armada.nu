import React from 'react'
import PropTypes from 'prop-types'
import Page from '../Page'
import './index.scss'
import CareerCard from '../../components/CareerCard/career-card'


const Career = (props) => {

  return (
    <div>
      <Page {...props}/>
      <CareerCard/>
      
      <CareerCard/>
    </div>
  )
}

Career.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Career
