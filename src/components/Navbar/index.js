import React from "react"
import {Link} from "react-router"

import "./index.scss"
import PropTypes from "prop-types";
import RecruitmentBanner from "../RecruitmentBanner";

class Navbar extends React.Component {

  constructor(props) {
    super(props)

    let pages = [];
    if (global.window != undefined) {
      pages = global.window.__COLLECTION__.filter((page) => page.menuPage);
      pages.sort((a, b) => {
        return a.priority - b.priority;
      });
    }
    this.state = {
      "expanded": false,
      pages
    };
  }


  toggleExpand = () => {
    this.setState({"expanded": !this.state.expanded});
  }

  render() {
    var links = this.state.pages.map(page => (
        <Link onClick={this.toggleExpand} to={page.__url}>
          {page.title}
          </Link>
    ));
		let color = this.props.whiteHB ? "white" : "black";

    let navbar = (
        <header>
          <div id="navbar">
            <nav className={"menu-wrapper " + (this.state.expanded ? "visible" : "hidden")}>
              <div className={"menu-hamburger " + color } onClick={this.toggleExpand}>
                {!this.state.expanded ? <div className="hamburger">☰</div> : (<div className="navbar-cross">˟</div>)}
              </div>
              <div className={"menu " + (this.state.expanded ? "visible" : "hidden")}>
                <Link onClick={this.toggleExpand} to='/'>HOME</Link>
                {links}
              </div>
            </nav>
            <RecruitmentBanner displayType={"desktop"}/>
          </div>
        </header>
    )

    return navbar;
  }
}

Navbar.propTypes = {
	whiteHB: PropTypes.boolean,
}

export default Navbar
