import React, { PropTypes } from "react"

import Page from "../Page"
import Jumbotron from "../../components/Jumbotron"
import Partners from "../../components/Partners"


const Aboutpage = (props) => {
  return (
      <div className="content">
        <Jumbotron image={props.head.header} />  
        <div className="body">
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
