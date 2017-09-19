import React from "react"
import { Link } from "react-router"

import "./index.scss"

const Navbar = () => (
  <header>
            <div id="navbar">
                <nav className="menu-wrapper">
                    <div className="menu">
                        <Link to='/'>HOME</Link>
                        <Link to='/about'>ABOUT</Link>
                        <Link to='/contact'>CONTACT</Link>
                    </div>
                </nav>
            </div>
      
      </header>
)

export default Navbar
