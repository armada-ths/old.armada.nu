import React from "react";
import {Link} from "gatsby";
import axios from "axios";
import './recruitment-banner.scss';

class RecruitmentBanner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        showbanner: false
    };
}

  componentDidMount() {
    axios.get('https://ais.armada.nu/api/recruitment')
        .then( (res)  => {
            if (res.data.length > 0) {this.setState({ showbanner: true});}
        });
}
  
  render() {
    var path = "/"
    if (typeof window !== 'undefined') {
      path = window.location.pathname;
    }
    //console.log(path);
    
    let page = false;
    if (path.match("^/$")) { // If we're in Armada homepage
      page = true;
    }

    let dp = this.props.displayType;
    let content;

    if (dp === "desktop" && this.state.showbanner) {
      content = <Link to={'/recruitment'}><div className="recruitmentBanner">Recruitment open now! Apply here!</div></Link>
    } else if (dp === "mobile" && this.state.showbanner) {
      content = <Link to={'/recruitment'}><div className="recruitmentBannerMobile">Recruitment open now! Apply here!</div></Link>
    }

    if (!page)
      content = <span></span>

    return(
      <div>{content}</div>
    );
  
  }
  
}

export default RecruitmentBanner;
