import React from "react"
import PropTypes from "prop-types"
// import PageSections from "../../components/PageSections"
import ContactCard from "../../components/ContactCard"
import Page from "../Page"
import "./index.scss"


const ExhibitorInfo = (props) => {

  return (
    <div>
      <div className="info-container">
      <Page {...props}/>
      {/* <PageSections/> */}
      <div className="contact-list">
      <ContactCard name="Ulrik Sköldkvist" title="Project Manager" emoji="👨‍✈️" email="a@armada.nu" imageUrl=""/>
      </div>
    </div>
    </div>
  )
}

ExhibitorInfo.propTypes = {
    head: PropTypes.object.isRequired,
}

export default ExhibitorInfo
