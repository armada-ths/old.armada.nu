import React from "react"
import PropTypes from "prop-types"
import Partners from '../../components/Partners';
// import NewEvents from "../../components/NewEvents"
import Newsfeed from '../../components/Newsfeed';
import Page from "../Page"
import PhotoGallery from "../../components/PhotoGallery";
// import RecruitmentBanner from "../../components/RecruitmentBanner";
import Testimonials from "../../components/Testimonials";
import "./homepage.scss"

const Homepage = (props) => {




  return (
    <div>
    <Page { ...props }>
      {/* <RecruitmentBanner displayType={"mobile"}/> */}
      <div className="body">
          {/* <NewEvents />
          <Partners /> */}
          <Newsfeed />
          <h1 id="gallerytitle">Armada in pictures</h1>
          <PhotoGallery photoCount={6} />
          <Testimonials/>
          <Partners/>
      </div>
    </Page>
      </div>
  )
}

Homepage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Homepage
