import React from "react"
import {Link} from "react-router"
import "./index.css"

const RecruitmentBanner = () => {
  return(
  <Link to={'/recruitment'}><div className="recruitmentBanner">Host recruitment open now! Apply here!</div></Link>
  )
}

export default RecruitmentBanner
