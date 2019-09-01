import React from "react"
import {Link} from "react-router"
import './recruitment-banner.scss';

const RecruitmentBanner = () => {
  const path = window.location.pathname;
  //console.log(path);
  
  let page = false;
  if(path.match("^/$")) { // If we're in Armada homepage
    page = true;
  }

  let content;
  if(page)
    content = <Link to={'/recruitment'}><div className="recruitmentBanner">Host recruitment open now! Apply here!</div></Link>
  else
    content = <span></span>

  return(<div>{content}</div>)
}

export default RecruitmentBanner
