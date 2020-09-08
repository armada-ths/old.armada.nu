import React from "react"
import Timeline from "../../components/Timeline"
import PropTypes from "prop-types"

import Page from "../../templates/Page"
// import Partners from "../../components/Partners"

import "./index.scss"

const Aboutpage = (props) => {
  return (
      <div className="content">
        <div className="aboutpage-container">
          <Page { ...props } >
          </Page>
          <Timeline>
          </Timeline>
        {/* <Partners/> */}
        </div>
      </div>
  )
}

Aboutpage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Aboutpage
