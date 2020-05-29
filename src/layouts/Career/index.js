import React, { useState } from 'react'
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
        <CareerCard company='Spotify' jobTitle='Data Scientist, Premium Products Discovery' external='https://spotify.com'/>
        <CareerCard company='Epidemic Sound' jobTitle='Full Stack Software Engineer' external='https://epidemic-sound.teamtailor.com/jobs/155155-full-stack-software-engineer'/>
        <CareerCard company='ASSA ABLOY' jobTitle='Fullstack Developer' external='https://jobs.academicwork.se/annons/fullstack-developer-to-assa-abloy/15041280'/>
      </div>
    </div>
  )
}

Career.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Career
