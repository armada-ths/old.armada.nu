import React from "react"
import PropTypes from "prop-types"
import Page from "../Page"
import EventList from "../../components/EventList"
import "./index.scss"

const Events= (props) => {
  return (
    <div className="Events-container">
      <Page { ...props }/>
      <EventList {...props}/>
    </div>
  )
}

Events.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Events
