import React from "react"
import PropTypes from "prop-types"
import Page from "../Page"
import ExhibitorList from "../../components/ExhibitorList"
import "./index.scss"

const Exhibitors = (props) => {

  return (
    <div className= "Exhibitors-container">
      <Page { ...props } />
      <ExhibitorList {...props}/>
    </div>
  )
}

Exhibitors.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Exhibitors
