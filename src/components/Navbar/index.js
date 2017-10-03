import React from "react"
import { Link } from "react-router"

import "./index.scss"

const Navbar = () => (
  <header>
            <div id="navbar">
                <nav className="menu-wrapper">
                    <div className="menu">
                        <Link to='/#newstitle'>NEWS</Link>
                        <Link to='/about'>ABOUT</Link>
                        <Link to='/contact'>CONTACT</Link>
                        <Link to='/events'>EVENTS</Link>
                        <Link to='/fair_info'>EXHIBITOR INFO</Link>
                    </div>
                </nav>
            </div>

      </header>
)

export default Navbar
