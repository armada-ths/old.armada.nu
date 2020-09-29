import React from 'react'
import './index.scss'
import Page from '../../templates/page'

const SustainabilityPage = props => {

  return (
      <div className='content'>
        <div className='sustainability-container'>
          <Page {...props} />
        </div>
      </div>
  )

}

export default SustainabilityPage
