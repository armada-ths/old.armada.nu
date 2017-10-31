import React from "react"
import PropTypes from "prop-types"

import "./index.scss"

const Content = (props) => (
  <div className="content">
    { props.children }
  </div>
)

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
