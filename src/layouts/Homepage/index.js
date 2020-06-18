import React from "react"
import Partners from '../../components/Partners';
// import NewEvents from "../../components/NewEvents
// import RecruitmentBanner from "../../components/RecruitmentBanner";
import "./homepage.scss"
import Page from "../../templates/page";
import Loading from "../../components/Loading";
import Loadable from "react-loadable"
import Newsfeed from "../../components/Newsfeed";

const Homepage = (props) => {


  const PhotoGallery = Loadable({ loader: () => import('../../components/PhotoGallery'), loading() { return <Loading/> }});


  return (
    <div>
    <Page { ...props }>
      {/* <RecruitmentBanner displayType={"mobile"}/> */}
      <div className="body">
        <Newsfeed/>
          <PhotoGallery photoCount={6}/>
          {<Partners/>}
      </div>
    </Page>
      </div>
  )
}

export default Homepage
