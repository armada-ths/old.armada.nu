import React from "react"
import PropTypes from "prop-types"

import ExhibitorList from "../../components/ExhibitorList"
import "./index.scss"


const Exhibitors = (props) => {

  return (

   <div className="content">
    <div className= "Exhibitors-container">
    <ExhibitorList {...props}/>
     </div>
   </div>
  )
}

Exhibitors.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Exhibitors
