import React, { PropTypes } from "react"

import Page from "../Page"
import Jumbotron from "../../components/Jumbotron"
import EventList from "../../components/EventList"

// import "./index.scss"

const Events= (props) => {
  return (
      <div className="content">
        <Jumbotron image={props.head.header} />
        <div className="Events-container">
          <Page { ...props } >
          </Page>
        <EventList/>
        </div>
      </div>
  )
}

Events.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Events
