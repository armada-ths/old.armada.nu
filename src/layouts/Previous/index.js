import React from 'react'
import ExhibitorList from '../../components/ExhibitorList'
import './index.scss'

const Previous = (props) => {

  return (
    <div className='Exhibitors-container'>
      <ExhibitorList {...props} lastYear />
    </div>
  )
}

export default Previous
