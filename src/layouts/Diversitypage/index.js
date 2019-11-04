import React from "react"
import PropTypes from "prop-types"

import Page from "../Page"
import CoreValueList from "../../components/CoreValueList"

import "./index.scss"

const Diversitypage = (props) => {

  return (
      <div className="content">
        <div className="diversitypage-container">
          <Page { ...props } />
          <CoreValueList {...props}/>
        </div>
      </div>
  )
}

Diversitypage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Diversitypage
