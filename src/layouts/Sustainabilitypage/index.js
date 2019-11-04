import React from "react"
import PropTypes from "prop-types"

import Page from "../Page"
import DiversityList from "../../components/DiversityList"

import "./index.scss"

const Sustainabilitypage = (props) => {
  return (
      <div className="content">
        <div className="sustainabilitypage-container">
          <Page { ...props } />
          <DiversityList {...props}/>
        </div>
      </div>
  )
}

Sustainabilitypage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Sustainabilitypage
