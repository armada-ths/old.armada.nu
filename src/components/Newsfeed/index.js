import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import './newsfeed.scss'
import Carousel from '../Carousel'
import PagePreview from '../PagePreview'

const Newsfeed = ({ video, header, children }) => (
  <StaticQuery
    query={graphql`
    query NewsQuery {
      allMarkdownRemark(filter: {children: {elemMatch: {}}, frontmatter: {layout: {eq: "News"}, archived: {ne: true}}}, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              slug
              layout
              description
              menuPage
              priority
              header
              date
              category
              cover_wide
              cover_square
              ingress
              archived
              display_date
            }
          }
        }
      }
    }        
    `}
    render={data => (
      <div className='newsfeed'>
        <div className='armada-news'>
          <h1 id='newstitle'>Armada News</h1>
        </div>
        { <Carousel items={data.allMarkdownRemark.edges.map(edge => <PagePreview key={edge.node.id} {...edge.node.frontmatter}/>)} />}
      </div>
    )}
  />
)

export default Newsfeed