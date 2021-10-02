import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './index.scss'
import RecruitmentBanner from '../RecruitmentBanner'
import RegistrationBanner from '../RegistrationBanner'
import useWindowSize from '../../hooks/useWindowSize'
import HamburgerButton from '../HamburgerButton'

// ✅ TODO: stylea <Link> tag, ska ej ha | till höger på dropdown children
// ✅ TODO: content i dropdown ska vara till vänster
// ✅ TODO: map method direkt i studentmenu
// ✅ TODO: place menu content to the right
// ✅ TODO: use something else than <link> for dropdown menu parents since it requires prop 'to'
// TODO: add logo to the left
// TODO: style span - capital letters for menu links student, about, company
// TODO: make right border not covered by the dropdown meny
// TODO: make text fit on 1 line in dropdown menu
// ✅TODO: Add STUDENT dropdown
// ✅TODO: Add COMPANY dropdown
// ✅TODO: Add ABOUT dropdown
// TODO: implement navbar solution for mobile - Remove/add classes with Js

const Navbar = props => {
  const windowSize = useWindowSize()
  const [expanded, setExpanded] = useState(false)
  const [showStudent, setShowStudent] = useState(false)
  const [showCompany, setShowCompany] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [onMobile, setOnMobile] = useState(windowSize.width < 850)
  const menuPages = props.pages.filter(page => page.menuPage)
  const studentSubpages = props.pages.filter(page => page.studentSubpage)
  const companySubpages = props.pages.filter(page => page.companySubpage)
  const aboutSubpages = props.pages.filter(page => page.aboutSubpage)
  const dropdownParent = !onMobile ? ['dropdownParent', 'dropdown', 'hoverWeb'].join(" ") 
    : ['dropdownParent', 'dropdown'].join(" ")

  menuPages.sort((a, b) => {
    return a.priority - b.priority
  })

  studentSubpages.sort((a, b) => {
    return a.priority - b.priority
  })

  companySubpages.sort((a, b) => {
    return a.priority - b.priority
  })

  aboutSubpages.sort((a, b) => {
    return a.priority - b.priority
  })

  useEffect(() => {
    setOnMobile(windowSize.width < 850)
  }, [windowSize])

  const toggleExpanded = () => {
    console.log("toggleExpanded")
    setExpanded(!expanded)
  }

  const toggleSubpages = () => {
    console.log("toggleSubpages")
    setShowStudent(false)
    setShowCompany(false)
    setShowAbout(false)
  }

  var links = menuPages.map((page, index) => (
    <Link
      activeClassName='active'
      onClick={toggleExpanded}
      to={page.slug}
      key={index}
    >
      {onMobile ? <span>{page.title}</span> : page.title}
    </Link>
  ))

  var studentMenu = (
    // <Link to={"/"} className={'dropdown'} >
    <div className={dropdownParent}>
      <span 
        onClick={() => (toggleSubpages(), setShowStudent(!showStudent))}
        >
          {showStudent ? <div className='pageTitleMobile'>STUDENT</div> : 'STUDENT'}
      </span>
    <div className={(!onMobile ? 'dropdown-content' : showStudent ? 'visible' : 'hidden')}>
        {studentSubpages.map((page, index) => (
          <Link style={{ border: 'none'}}
            activeClassName='active'
            onClick={toggleExpanded}
            to={page.slug}
            key={index}
          >
            { page.title}
          </Link >
        ))}
      </div>
    </div>)

  var companyMenu = (
    <div className={dropdownParent}>
      {/* <Link to={"/"} className={'dropdown'} > */}
      <span onClick={() => (toggleSubpages(), setShowCompany(!showCompany))}>
        {showCompany ? <div className='pageTitleMobile'>COMPANY</div> : 'COMPANY'}
      </span>
      <div className={(!onMobile ? 'dropdown-content' : showCompany ? 'visible' : 'hidden')}>
        {companySubpages.map((page, index) => (
          <Link style={{ border: 'none' }}
            activeClassName='active'
            onClick={toggleExpanded}
            to={page.slug}
            key={index}
          >
            { page.title}
          </Link >
        ))}
      </div>
    </div>)


  var aboutMenu = (
    // <Link to={"/"} className={'dropdown'} >
    <div className={dropdownParent}>
      <span onClick={() => (toggleSubpages(), setShowAbout(!showAbout))}>
        {showAbout ? <div className='pageTitleMobile'>ABOUT</div> : 'ABOUT'}
      </span>
      <div className={!onMobile ? 'dropdown-content' : showAbout ? 'visible': 'hidden'}>
        {aboutSubpages.map((page, index) => (
          <Link style={{ border: 'none' }}
            activeClassName='active'
            onClick={toggleExpanded}
            to={page.slug}
            key={index}
          >
            { page.title}
          </Link >
        ))}
      </div>
    </div>)

  return (
    <>
      <div id='navbar'>
        {onMobile && (
          <>
            <div className='topNav'></div>
            <RegistrationBanner location={props.location} />
            <RecruitmentBanner location={props.location} />
          </>
        )}
        <nav className={'menu-wrapper ' + (expanded ? 'visible' : 'hidden')}>
          <div className={'menu-hamburger'}>
            <HamburgerButton
              melon={!props.jumbotron}
              isActive={expanded}
              onClick={toggleExpanded}
            />
          </div>
          <div className={'menu ' + (expanded ? 'visible' : 'hidden')}>
            <Link onClick={toggleExpanded} activeClassName='active' to='/' >
              {onMobile ? <span>HOME</span> : 'HOME'}
            </Link>
            {studentMenu}
            {companyMenu}
            {links}
            {aboutMenu}
          </div>
        </nav>
        {!onMobile && (
          <>
            <RegistrationBanner location={props.location} />
            <RecruitmentBanner location={props.location} />
          </>
        )}
      </div>
    </>
  )
}

Navbar.propTypes = {
  pages: PropTypes.array,
  location: PropTypes.string,
  jumbotron: PropTypes.bool,
}

export default Navbar
