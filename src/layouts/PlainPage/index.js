import React from 'react'
import './index.scss'
import Page from '../../templates/page'

const PlainPage = (props) => {

  return (
      <div className='content'>
        <div className='plainpage-container'>
          <Page { ...props } />
        </div>
      </div>
  )
  
}

export default PlainPage
