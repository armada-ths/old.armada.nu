import React from 'react'
import PropTypes from 'prop-types'
import Page from '../Page'
import './index.scss'
import CareerContent from '../../components/CareerContent'


const Career = (props) => {

  return (<div>
      <div className='career'>
        <CareerContent/>
      </div>
      <Page {...props}/>
    </div>
  )
}

Career.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Career
