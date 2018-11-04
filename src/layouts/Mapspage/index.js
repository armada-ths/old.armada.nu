import React from "react"
import PropTypes from "prop-types"
import Page from "../Page"
import Maps from "../../components/Maps"
import "./index.scss"

const Mapspage= (props) => {
  return (
    <div className="<Mapspage-container">
      <Page { ...props }/>
      <Maps {...props}/>
    </div>
  )
}

Mapspage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Mapspage
