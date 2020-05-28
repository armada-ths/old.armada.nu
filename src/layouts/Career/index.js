import React from 'react'
import PropTypes from 'prop-types'
import Page from '../Page'
import './index.scss'
import CareerCard from '../../components/CareerCard/career-card'


const Career = (props) => {

  return (
    <div className='career'>
      <Page {...props}/>
      <div className='content'>
        <h1>Career</h1>
        <input placeholder='Search jobs...'/>
        <CareerCard/>
        <CareerCard/>
        <CareerCard/>
      </div>
    </div>
  )
}

Career.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Career
