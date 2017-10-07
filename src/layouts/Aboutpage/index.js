import React, { PropTypes } from "react"

import Page from "../Page"
import Partners from "../../components/Partners"

import "./index.scss"

const Aboutpage = (props) => {
  return (
      <div className="content">
        <div className="aboutpage-container">
          <Page { ...props } >
          </Page>
        <Partners/>
        </div>
      </div>
  )
}

Aboutpage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Aboutpage
