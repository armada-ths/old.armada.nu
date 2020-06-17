import React from 'react'

import './index.scss'
import Page from '../../templates/page'

const DiversityPage = (props) => {
  return (
      <div className='content'>
        <div className='diversitypage-container'>
          <Page { ...props } />
        </div>
      </div>
  )
}

export default DiversityPage
