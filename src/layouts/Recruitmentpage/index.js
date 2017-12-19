import React from "react"
import PropTypes from "prop-types"
import Page from "../Page"
import Recruitment from "../../components/Recruitment"
import "./index.scss"

const Recruitmentpage = (props) => {
  return (
      <div className="Recruitment-container">

          <Page { ...props }/ >


        <Recruitment/>
      </div>
  )
}

Recruitmentpage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Recruitmentpage
