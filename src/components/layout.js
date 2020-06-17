/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Navbar from "./navbar/navbar"
import Jumbotron from "./jumbotron/jumbotron"
import { Helmet } from "react-helmet"

import './layout.scss'
import '../styles/global.scss'
import Footer from "./footer/footer"
const Layout = ({ video, header, children }) => (
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
    render={data => (
      <React.Fragment>
        <div className='layout'>
          <Navbar pages={data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter)} />
          <Jumbotron video={video} image={header} />
          <div>
            {children}
          </div>
        </div>
        <Footer/>
      </React.Fragment>
    )}
  />
)

export default Layout