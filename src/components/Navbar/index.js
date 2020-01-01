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
      "mobile": false,
      "currentPage": "/home",
      pages
    };
  }

  componentDidMount() {
    if(window.innerWidth < 850) {
      this.setState({
        mobile: true
      });
    } else {
      this.setState({
        mobile: false
      });
    }
    //eslint-disable-next-line no-console
    console.log(this.state.currentPage);
  }

  toggleExpand = () => {
    this.setState({"expanded": !this.state.expanded});
    //this.setState({"currentPage": window.location.pathname}); // window.location doesn't work in production...
  }

  render() {
    var links = this.state.pages.map(page => (
        <Link className={page.__url.toLowerCase().includes(this.state.currentPage) && !this.state.currentPage.match("^/$")  ? "active-page" : null} onClick={this.toggleExpand} to={page.__url}>
          {page.title}
        </Link>
    ));
		let color = this.props.whiteHB ? "white" : "black";

    let navbar = (
        <header>
          <div id="navbar" style={this.state.mobile ? ((this.state.expanded && this.state.mobile) ? {position:"relative"} : {position:"absolute"}) : null}>
            <nav className={"menu-wrapper " + (this.state.expanded ? "visible" : "hidden")}>
              <div className={"menu-hamburger " + color }>
                {!this.state.expanded ? <div className="hamburger"><span onClick={this.toggleExpand}>☰</span></div> : (<div className="navbar-cross"><span onClick={this.toggleExpand}>˟</span></div>)}
              </div>
              <div className={"menu " + (this.state.expanded ? "visible" : "hidden")}>
                <Link className={this.state.currentPage.match("^/$") ? "active-page" : null} onClick={this.toggleExpand} to='/'>HOME</Link>
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
	whiteHB: PropTypes.func,
}

export default Navbar
