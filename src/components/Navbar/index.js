import React from "react"
import {Link} from "react-router"

import "./index.scss"

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
    console.log(this.state.pages)
    var links = this.state.pages.map(page => (
        <Link onClick={this.toggleExpand} to={page.__url}>
          {page.title}
          </Link>
    ));

    links.splice(3, 0, <a target="_blank" rel="noreferrer nofollow" href="https://maps.armada.nu/">Maps</a>)

    let navbar = (
        <header>
          <div id="navbar">
            <nav className={"menu-wrapper " + (this.state.expanded ? "visible" : "hidden")}>
              <div className="menu-hamburger" onClick={this.toggleExpand}>
                {!this.state.expanded ? <div className="hamburger">☰</div> : (<div className="navbar-cross">˟</div>)}
              </div>
              <div className={"menu " + (this.state.expanded ? "visible" : "hidden")}>
                <Link onClick={this.toggleExpand} to='/'>HOME</Link>
                {links}
              </div>
            </nav>
          </div>

        </header>
    )

    return navbar;
  }
}

export default Navbar
