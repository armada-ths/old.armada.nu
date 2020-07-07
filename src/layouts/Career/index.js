import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import CareerContent from '../../components/CareerContent'
import Page from '../../templates/page'

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
