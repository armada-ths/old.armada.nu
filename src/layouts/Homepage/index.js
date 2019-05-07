import React from "react"
import PropTypes from "prop-types"
import Partners from '../../components/Partners';
import NewEvents from "../../components/NewEvents"
import Page from "../Page"
import InstagramGallery from "../../components/InstagramGallery";

const Homepage = (props) => {




  return (
    <div>
    <Page { ...props }>
      <div className="body">
          <NewEvents />
					<Partners />
          <InstagramGallery />
      </div>
    </Page>
      </div>
  )
}

Homepage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Homepage
