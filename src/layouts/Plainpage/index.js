import React from "react"
import PropTypes from "prop-types"

import Page from "../Page"

import "./index.scss"

const Plainpage = (props) => {
  return (
        <div className="plainpage-container">
          <Page { ...props } >
          </Page>
        </div>
  )
}

Plainpage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Plainpage
