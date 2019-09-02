import React from "react";
import {Link} from "react-router";
import PropTypes from "prop-types";
import './recruitment-banner.scss';

class RecruitmentBanner extends React.Component {
  
  render() {
    const path = window.location.pathname;
    //console.log(path);
    
    let page = false;
    if (path.match("^/$")) { // If we're in Armada homepage
      page = true;
    }

    let dp = this.props.displayType;
    let content;

    if (dp === "desktop") {
      content = <Link to={'/recruitment'}><div className="recruitmentBanner">Host recruitment open now! Apply here!</div></Link>
    } else if (dp === "mobile") {
      content = <Link to={'/recruitment'}><div className="recruitmentBannerMobile">Host recruitment open now! Apply here!</div></Link>
    }

    if (!page)
      content = <span></span>

    return(
      <div>{content}</div>
    );
  
  }
  
}

RecruitmentBanner.propTypes = {
  displayType: PropTypes.string
};

export default RecruitmentBanner;
