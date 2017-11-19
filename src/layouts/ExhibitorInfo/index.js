import React from "react"
import PropTypes from "prop-types"
import PageSections from "../../components/PageSections"
import Contacts from "../../components/Contacts"
import Page from "../Page"


const ExhibitorInfo = (props) => {

  return (
    <div>
      <Page {...props}/>
      <PageSections/>
      <Contacts />
    </div>
  )
}

ExhibitorInfo.propTypes = {
    head: PropTypes.object.isRequired,
}

export default ExhibitorInfo
