import React from "react"
import PropTypes from "prop-types"
import Partners from '../../components/Partners';
import NewEvents from "../../components/NewEvents"
import Page from "../Page"
import PhotoGallery from "../../components/PhotoGallery";

const Homepage = (props) => {




  return (
    <div>
    <Page { ...props }>
      <div className="body">
          <NewEvents />
					<Partners />
          <PhotoGallery maxPhotoCount={12} />
      </div>
    </Page>
      </div>
  )
}

Homepage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Homepage
