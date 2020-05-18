import React from 'react'
import PropTypes from 'prop-types'
import Page from '../Page'
import ExhibitorList from '../../components/ExhibitorList'
import './index.scss'

const Previous = (props) => {

  return (
    <div className='Exhibitors-container'>
      <Page { ...props } />
      <ExhibitorList {...props} lastYear />
    </div>
  )
}

Previous.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Previous
