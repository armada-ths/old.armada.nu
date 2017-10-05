import React, { PropTypes } from "react"

import Page from "../Page"
import Recruitment from "../../components/Recruitment"


const Recruitmentpage = (props) => {
  return (
      <div className="content">
        <div className="body">
          <Page { ...props } >
          </Page>
        </div>
        <Recruitment/>
      </div>
  )
}

Recruitmentpage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Recruitmentpage
