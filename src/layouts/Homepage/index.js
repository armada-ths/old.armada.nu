import React from "react"
import PropTypes from "prop-types"
import Partners from '../../components/Partners';
// import NewEvents from "../../components/NewEvents"
import Newsfeed from '../../components/Newsfeed';
import Page from "../Page"
import PhotoGallery from "../../components/PhotoGallery";
// import RecruitmentBanner from "../../components/RecruitmentBanner";
import "./homepage.scss"

const Homepage = (props) => {




  return (
    <div>
    <Page { ...props }>
      {/* <RecruitmentBanner displayType={"mobile"}/> */}
      <div className="body">
          <Newsfeed />
          <PhotoGallery photoCount={6}/>
          {<Partners/>}
      </div>
    </Page>
      </div>
  )
}

Homepage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Homepage
