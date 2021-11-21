import React from 'react'
import './index.scss'
import Page from '../../templates/page'

const RegistrationPage = props => {
  return (
    <div className='registration-container'>
      <h1 id='information-for-exhibitors'>THS Armada 2021</h1>
      <div className='registration-page-container'>
       <Page {...props} />
      </div>
    </div>
  )
}

export default RegistrationPage
