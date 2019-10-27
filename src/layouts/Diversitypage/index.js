import React from "react"
import PropTypes from "prop-types"

import Page from "../Page"

import "./index.scss"

const Diversitypage = (props) => {
  return (
      <div className="content">
        <div className="diversitypage-container">
          <Page { ...props } >
          </Page>
        </div>
      </div>
  )
}

Diversitypage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Diversitypage
