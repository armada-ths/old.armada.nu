import React from "react"
import PropTypes from "prop-types"
// import PageSections from "../../components/PageSections"
import Page from "../Page"
import "./index.scss"


const ExhibitorInfo = (props) => {

  return (
    <div>
      <div className="info-container">
      <Page {...props}/>
      {/* <PageSections/> */}
    </div>
    </div>
  )
}

ExhibitorInfo.propTypes = {
    head: PropTypes.object.isRequired,
}

export default ExhibitorInfo
