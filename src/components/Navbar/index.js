import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './index.scss'
import RecruitmentBanner from '../RecruitmentBanner'
import RegistrationBanner from '../RegistrationBanner'
import useWindowSize from '../../hooks/useWindowSize'
import HamburgerButton from '../HamburgerButton'


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
    setExpanded(!expanded)
  }

  const toggleSubpages = () => {
    setShowStudent(false)
    setShowCompany(false)
    setShowAbout(false)
  }

  const toggleStudent = () => {
    toggleSubpages()
    setShowStudent(!showStudent)
  }

  const toggleCompany = () => {
    toggleSubpages()
    setShowCompany(!showCompany)
  }

  const toggleAbout = () => {
    toggleSubpages()
    setShowAbout(!showAbout)
  }


  const links = menuPages.map((page, index) => (
    <Link
      activeClassName='active'
      onClick={toggleExpanded}
      to={page.slug}
      key={index}
    >
      {onMobile ? <span>{page.title}</span> : page.title}
    </Link>
  ))

  const studentMenu = (
    <div className={dropdownParent}>
      <span tabIndex="0" role="link"
        onClick={toggleStudent}
      >
        {showStudent ? <div className='pageTitleMobile'>For Students</div> : 'For Students'}
      </span>
      <div className={(!onMobile ? 'dropdown-content' : showStudent ? 'visible' : 'hidden')}>
        {studentSubpages.map((page, index) => (
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

  const companyMenu = (
    <div className={dropdownParent}>
      <span tabIndex="0" role="link">
        {showCompany ? <div className='pageTitleMobile'>For Companies</div> : 'For Companies'}
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


  const aboutMenu = (
    <div className={dropdownParent}>
      <span tabIndex="0" role="link" onClick={toggleAbout}>
        {showAbout ? <div className='pageTitleMobile'>About Armada</div> : 'About Armada'}
      </span>
      <div className={!onMobile ? 'dropdown-content' : showAbout ? 'visible' : 'hidden'}>
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
              {onMobile ? <span>Home</span> : 'Home'}
            </Link>
            {companyMenu}
            {studentMenu}
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
