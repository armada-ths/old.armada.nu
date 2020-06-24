import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import './index.scss'
import RecruitmentBanner from '../RecruitmentBanner';
import useWindowSize from '../../hooks/useWindowSize';
import HamburgerButton from '../HamburgerButton';

const Navbar = (props) => {
  const windowSize = useWindowSize();

  const [expanded, setExpanded] = useState(false);
  const [onMobile, setOnMobile] = useState(windowSize.width < 850);
  const menuPages = props.pages.filter((page) => page.menuPage);
  
  menuPages.sort((a, b) => {
    return a.priority - b.priority;
  })

  useEffect(() => {
    setOnMobile(windowSize.width < 850)
  }, [windowSize])

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

  var links = menuPages.map((page, index) => (
    <Link
          activeClassName='active'
          onClick={toggleExpanded} 
          to={page.slug}
          key={index}>
      {page.title}
    </Link>
  ));

  return(<>
      <div id='navbar' style={onMobile ? ((expanded && onMobile) ? { position: 'relative' } : { position: 'absolute' }) : null}>
        { onMobile && <RecruitmentBanner location={props.location}/> }
        <nav className={'menu-wrapper ' + (expanded ? 'visible' : 'hidden')}>
          <div className={'menu-hamburger'}>
            <HamburgerButton isActive={expanded} onClick={toggleExpanded}/>
          </div>
          <div className={'menu ' + (expanded ? 'visible' : 'hidden')}>
            <Link onClick={toggleExpanded} activeClassName='active' to='/'>HOME</Link>
            {links}
          </div>
        </nav>
        { !onMobile && <RecruitmentBanner location={props.location}/> }
      </div>
  </>);

}

Navbar.propTypes = {
  pages: PropTypes.array,
  location: PropTypes.string,
}

export default Navbar
