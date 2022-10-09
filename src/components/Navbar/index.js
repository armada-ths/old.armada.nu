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

  const [studentStyle, setStudentStyle] = useState('dropdown-content')
  const [companyStyle, setCompanyStyle] = useState('dropdown-content')
  const [aboutStyle, setAboutStyle] = useState('dropdown-content')
  const [hasStudentTag, setHasStudentTag] = useState(false)
  const [hasCompanytag, setHasCompanyTag] = useState(false)
  const [hasAboutTag, setHasAboutTag] = useState(false)

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


  useEffect(() => {
    setHasStudentTag(document.getElementById("student") != null);
    setHasCompanyTag(document.getElementById("company") != null);
    setHasAboutTag(document.getElementById("about") != null);
  }, [])

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

  const handleMouseIn = (itemToBeChanged) => {
    const styles = ['dropdown-content', 'dropdown-content-on-keyboard-nav'].join(" ")
    if (itemToBeChanged === 'student') {
      setStudentStyle(styles)
    }
    if (itemToBeChanged === 'company') {
      setCompanyStyle(styles)
    }
    if (itemToBeChanged === 'about') {
      setAboutStyle(styles)
    }
  }

  const handleMouseOut = (itemToBeChanged) => {
    const style = 'dropdown-content'

    if (itemToBeChanged === 'student') {
      setStudentStyle(style)
    }
    if (itemToBeChanged === 'company') {
      setCompanyStyle(style)
    }
    if (itemToBeChanged === 'about') {
      setAboutStyle(style)
    }
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

  // TODO: dropdowncontent should closed if pressing ESC while having the 

  if (hasStudentTag) {
    const studentParent = document.getElementById("student")
    studentParent && studentParent.addEventListener('keydown', function (event) {
      if (event.key === "Escape") {
        handleMouseOut('student')
      }
    });
  }

  if (hasCompanytag) {
    const companyParent = document.getElementById("company")
    companyParent && companyParent.addEventListener('keydown', function (event) {
      if (event.key === "Escape") {
        handleMouseOut('company')
      }
    });
  }

  if (hasAboutTag) {
    const aboutParent = document.getElementById("about")
    aboutParent && aboutParent.addEventListener('keydown', function (event) {
      if (event.key === "Escape") {
        handleMouseOut('about')
      }
    });
  }

  const studentMenu = (
    <div className={dropdownParent}>
      <span tabIndex="0" role="link" id="student"
        onClick={toggleStudent} onKeyPress={() => handleMouseIn('student')}
      >
        {showStudent ? <div className='pageTitleMobile'>For Students</div> : 'For Students'}
      </span>
      <div className={(!onMobile ? studentStyle : showStudent ? 'visible' : 'hidden')}>
        {studentSubpages.map((page, index) => (
          <Link style={{ border: 'none' }}
            activeClassName='active'
            onClick={toggleExpanded}
            to={page.slug}
            key={index}
          >
            {page.title}
          </Link >
        ))}
      </div>
    </div >)

  const companyMenu = (
    <div className={dropdownParent} >
      <span onClick={toggleCompany} tabIndex="0" role="link" id="company" onKeyPress={() => handleMouseIn('company')} >
        {showCompany ? <div className='pageTitleMobile'>For Companies</div> : 'For Companies'}
      </span>
      <div className={(!onMobile ? companyStyle : showCompany ? 'visible' : 'hidden')}>
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
      <span tabIndex="0" role="link" id="about" onClick={toggleAbout} onKeyPress={() => handleMouseIn('about')}>
        {showAbout ? <div className='pageTitleMobile'>About Armada</div> : 'About Armada'}
      </span>
      <div className={!onMobile ? aboutStyle : showAbout ? 'visible' : 'hidden'}>
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
        <div className='banner-container'>
        <nav className={'menu-wrapper ' + (expanded ? 'visible' : 'hidden')}>
                    

          <div className={'menu-hamburger'}>
            <HamburgerButton
              melon={!props.jumbotron}
              isActive={expanded}
              onClick={toggleExpanded}
            />
          </div>
          <div className={'menu ' + (expanded ? 'visible' : 'hidden')}>
            <span>
            <img alt='' className={'menu ' + (expanded ? 'visible' : 'hidden')} style={{textAlign:'left', maxWidth: "12.5rem", maxHeight:"9.375rem", marginTop:"-2.1rem", marginBottom:"-1.5rem", fill:'white'}} src='/assets/ArmadaLogo.svg' />
            {/* <a className='left' alt="Virtual Fair 2021" href="https://event.armada.nu/">Virtual Fair</a> */}
            </span>
            <div>
              
              <Link onClick={toggleExpanded} activeClassName='active' to='/' >
                {onMobile ? <span>Home</span> : 'Home'}
              </Link>
              {companyMenu}
              {studentMenu}
              {links}
              {aboutMenu}
            </div>
          </div>
        </nav>
          <>
            <RegistrationBanner location={props.location} />
            <RecruitmentBanner location={props.location}/>
          </>
        </div>
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
