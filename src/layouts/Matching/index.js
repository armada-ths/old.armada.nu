import React from "react"
import PropTypes from "prop-types"

import Page from "../Page"
import MatchingSection from "../../components/MatchingSection"

import "./index.scss"

const Matching = (props) => {
  return (
      <div className="content">
        <div className="matching-container">
          <Page { ...props } >
          </Page>
          <MatchingSection/>
        </div>
      </div>
  )
}

Matching.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Matching
