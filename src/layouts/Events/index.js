import React, { PropTypes } from "react"

import Page from "../Page"
import EventList from "../../components/EventList"

import "./index.scss"

const Events= (props) => {
  return (
      <div className="content">
        <div className="Events-container">
          <Page { ...props } >
          </Page>
        <EventList {...props}/>
        </div>
      </div>
  )
}

Events.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Events
