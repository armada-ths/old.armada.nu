import React from "react"
import PropTypes from "prop-types"
// import PageSections from "../../components/PageSections"
import Page from "../Page"
import TableOfContents from "../../components/TableOfContents"
import "./index.scss"


const ExhibitorInfo = (props) => {

  return (
    <div>
      <div className="info-container">
        <h1 id="information-for-exhibitors">Information for Exhibitors</h1>
        <TableOfContents />
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
