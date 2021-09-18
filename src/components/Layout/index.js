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

import './index.scss'
import Footer from '../Footer'
const Layout = ({ header, location, children, jumbotron }) => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allMdx {
          edges {
            node {
              frontmatter {
                title
                slug
                date
                layout
                description
                menuPage
                studentSubpage
                companySubpage
                aboutSubpage
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
        <Navbar jumbotron={jumbotron} location={location} pages={data.allMdx.edges.map(edge => edge.node.frontmatter)} />
        {jumbotron ? <Jumbotron location={location} image={header} /> : <></>}
        <div>
          {children}
        </div>
      </div>
      <Footer />
    </>)}
  />
)

Layout.propTypes = {
  location: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.element,
  jumbotron: PropTypes.bool
}

export default Layout