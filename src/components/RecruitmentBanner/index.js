import React from "react"
import {Link} from "react-router"
import './recruitment-banner.scss';


const RecruitmentBanner = () => {
  return(
  <Link to={'/recruitment'}>
    <div className="recruitmentBanner">
        Host recruitment open now! Apply here!
    </div>
  </Link>
  )
}

export default RecruitmentBanner
