import React from 'react'
import ExhibitorList from '../../components/ExhibitorList'

const Previous = (props) => {

  return (
    <div className='exhibitors-container'>
      <ExhibitorList {...props} lastYear />
    </div>
  )
}

export default Previous
