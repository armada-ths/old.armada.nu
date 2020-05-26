import React from "react"
import PropTypes from "prop-types"
import Page from "../Page"

import "./index.scss"
import Sustainability from '../../components/Sustainability'

const Sustainabilitypage = (props) => {
  return (
      <div className="content">
        <div className="sustainabilitypage-container">
          <Page { ...props } >
          </Page>
          <Sustainability/>
        </div>
      </div>
  )
}

Sustainabilitypage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Sustainabilitypage
