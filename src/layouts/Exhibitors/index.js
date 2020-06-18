import React from 'react'
import ExhibitorList from '../../components/ExhibitorList'
import './index.scss'

const Exhibitors = (props) => {
  return (
    <div className='exhibitors-container'>
      <ExhibitorList {...props}/>
    </div>
  )
}
export default Exhibitors
