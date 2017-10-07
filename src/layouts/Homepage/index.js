import React, {PropTypes} from "react"

import Newsfeed from "../../components/Newsfeed"
import Page from "../Page"

const Homepage = (props) => {

  


  return (
    <div>
    <Page { ...props }>
      <div className="body">
          <Newsfeed />
      </div>
    </Page>
      </div>
  )
}

Homepage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Homepage
