import React from "react"
import { Link } from "react-router"

import "./index.scss"

class Navbar extends React.Component {

    constructor(props){
        super(props)

        this.state = {"expanded": false};
    }


     toggleExpand = () => {
        this.setState({"expanded": !this.state.expanded});
    }
      render(){

        let navbar = (
          <header>
                <div id="navbar">
                    <nav className={"menu-wrapper " + (this.state.expanded ? "visible" :"hidden")} >
                        <div className="menu-hamburger" onClick={this.toggleExpand}>
                            { !this.state.expanded ? <div className="hamburger">☰</div>: (<div className="cross">˟</div>) }
                        </div>
                        <div className={"menu " + (this.state.expanded ? "visible" :"hidden")} >
                            <Link onClick={this.toggleExpand} to='/'>HOME</Link>
                            <Link onClick={this.toggleExpand} to='/the-fair'>THE FAIR</Link>
                            <Link onClick={this.toggleExpand} to='/events'>EVENTS</Link>
                            <Link onClick={this.toggleExpand} to='/exhibitors'>EXHIBITORS</Link>
                            <Link onClick={this.toggleExpand} to='/about'>ABOUT</Link>
                            <Link onClick={this.toggleExpand} to='/exhibitor_info'>EXHIBITOR INFO</Link>
                        </div>
                    </nav>
                </div>

          </header>
        )

        return navbar;
    }
}

export default Navbar
