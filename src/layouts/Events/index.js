import React from 'react'
import PropTypes from 'prop-types'
import EventList from '../../components/EventList'
import './index.scss'
import Page from '../../templates/page'

const Events= (props) => {
  return (
    <div className='Events-container'>
      <Page { ...props }/>
      <EventList {...props}/>
    </div>
  )
}

Events.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Events
