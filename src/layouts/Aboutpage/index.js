import React from 'react'
import './index.scss'
import Page from '../../templates/page'

const Aboutpage = (props) => {
  return (
      <div className='content'>
        <div className='aboutpage-container'>
          <Page { ...props } />
        </div>
      </div>
  )
}

export default Aboutpage
