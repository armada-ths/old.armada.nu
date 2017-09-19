import React, { PropTypes } from "react"

import "./index.scss"

const Container = (props) => (
  <div className="container">
    { props.children }
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
