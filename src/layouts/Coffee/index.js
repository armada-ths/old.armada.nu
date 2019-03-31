import React from "react"
import PropTypes from "prop-types"
import Page from "../Page"
import CoffeeForm from "../../components/CoffeeForm"
import "./index.scss"


const Coffee = (props) => {

  return (
    <div className="coffee-background">
      <div className="coffee-container">
      <CoffeeForm/>
      <Page {...props}/>
    </div>
    </div>
  )
}

Coffee.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Coffee
