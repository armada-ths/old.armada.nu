import React from "react"
import PropTypes from "prop-types"
import Partners from '../../components/Partners';
import Newsfeed from "../../components/Newsfeed"
import Page from "../Page"

const Homepage = (props) => {




  return (
    <div>
    <Page { ...props }>
      <div className="body">
          <Newsfeed />
					<Partners />
      </div>
    </Page>
      </div>
  )
}

Homepage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Homepage
