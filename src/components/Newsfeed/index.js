import React from "react"
import { graphql, StaticQuery } from "gatsby"

//import PagePreview from "../../components/PagePreview"

import "./newsfeed.scss"
import Carousel from "../Carousel"

import PagePreview from "../PagePreview"

const defaultNumberOfPosts = 3

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
      <div className="newsfeed">
        <div className="armada-news">
          <h1 id="newstitle">Armada News</h1>
        </div>
        {/* featuredPost */}
        { <Carousel items={data.allMarkdownRemark.edges.map(edge => <PagePreview key={edge.node.id} {...edge.node.frontmatter}/>)} />}
      </div>
    )}
  />
)

export default Newsfeed

/*
const Newsfeed = (props, { collection }) => {

  let latestPosts = enhanceCollection(collection, {
    filter: { layout: "News" },
    sort: "date",
    reverse: true,
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts)

  let displayedArticleIndex = latestPosts.findIndex( (element) => {
      return element.title === props.displayed_article;
  });

  if (displayedArticleIndex >= 0) {
      latestPosts.splice(displayedArticleIndex, 1);
  }


  
  const posts = latestPosts.length > 0 ? <PagesList pages={latestPosts} /> : null;

  let feed =(
    <div className="newsfeed">
      <div className="armada-news">
        <h1 id="newstitle">Armada News</h1>
      </div>
      { posts }
    </div>
  );

  return (
      <div>
          {feed}
      </div>
  )
}

Newsfeed.propTypes = {
  numberOfPosts: PropTypes.number,
  displayed_article: PropTypes.string,
}

Newsfeed.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Newsfeed
*/