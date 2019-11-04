import React from "react"
import PropTypes from "prop-types"

import Page from "../Page"
import CoreValueList from "../../components/CoreValueList"

import "./index.scss"

const Sustainabilitypage = (props) => {
  return (
      <div className="content">
        <div className="sustainabilitypage-container">
          <Page { ...props } />
          <CoreValueList {...props}/>
        </div>
      </div>
  )
}

Sustainabilitypage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Sustainabilitypage
