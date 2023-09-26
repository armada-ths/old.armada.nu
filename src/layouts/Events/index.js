import React from 'react'
import PropTypes from 'prop-types'
import EventList from '../../components/EventList'
import './index.scss'
import Page from '../../templates/page'

const Events = props => {
    return (
        <div>
            <div className='Events-text'>
                <Page {...props} />
            </div>
            <div className='Events-container'>
                <EventList {...props} />
            </div>
        </div>
    )
}

Events.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Events
