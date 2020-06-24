/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import Navbar from '../Navbar'
import Jumbotron from '../Jumbotron'
import { isMobile } from 'react-device-detect'

import './index.scss'
import Footer from '../Footer'
const Layout = ({ header, location, children }) => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                slug
                date
                layout
                description
                menuPage
                priority
                header
              }
            }
          }
        }
      }
    `}
    render={data => (<>
      <div className='layout'>
        <Navbar location={location} pages={data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter)} />
        <Jumbotron video={location === '/' && !isMobile} image={header} />
        <div>
          {children}
        </div>
      </div>
      <Footer/>
    </>)}
  />
)

Layout.propTypes = {
  location: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.element
}

export default Layout