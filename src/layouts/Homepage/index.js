import React from "react"
import PropTypes from "prop-types"
// import Partners from '../../components/Partners';
// import NewEvents from "../../components/NewEvents"
import {StickyContainer, Sticky} from 'react-sticky';
import Page from "../Page"
import PhotoGallery from "../../components/PhotoGallery";
import RecruitmentBanner from "../../components/RecruitmentBanner";


const Homepage = (props) => {




  return (
    <div>
    <Page { ...props }>
    
    <RecruitmentBanner />
      <div className="body">
          {/* <NewEvents />
          <Partners /> */}
          <h1>Armada in pictures</h1>
          <PhotoGallery photoCount={6} />
      </div>
    </Page>
      </div>
  )
}

Homepage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Homepage
