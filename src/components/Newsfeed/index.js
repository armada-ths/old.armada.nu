import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import './index.scss'
import Carousel from '../Carousel'
import PagePreview from '../PagePreview'

const Newsfeed = ({ current }) => (
  <StaticQuery
    query={graphql`
    query NewsQuery {
      allMdx(filter: {children: {elemMatch: {}}, frontmatter: {layout: {eq: "News"}, archived: {ne: true}}}, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            id
            body
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
        <Carousel 
          items={data.allMdx.edges.filter(edge => edge.node.frontmatter.slug !== current).map(edge => 
            <PagePreview key={edge.node.id} {...edge.node.frontmatter}/>
          )} />
      </div>
    )}
  />
)

Newsfeed.propTypes = {
	current: PropTypes.string,
}

export default Newsfeed