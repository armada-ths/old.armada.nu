import React from "react"
import PropTypes from "prop-types"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"
//import PagePreview from "../../components/PagePreview"

import "./newsfeed.scss"

const defaultNumberOfPosts = -1

const Newsfeed = (props, { collection }) => {

  let latestPosts = enhanceCollection(collection, {
    filter: { layout: "News" },
    sort: "date",
    reverse: true,
  })

  let displayedArticleIndex = latestPosts.findIndex( (element) => {
      return element.title === props.displayed_article;
  });

  if (displayedArticleIndex >= 0) {
      latestPosts.splice(displayedArticleIndex, 1);
  }

  //latestPosts = latestPosts.slice(0, props.numberOfPosts || defaultNumberOfPosts)
  
  const posts = latestPosts.length > 0 ? <PagesList isNewsList={props.isNewsList} pages={latestPosts} /> : null;

  

  return ( 
        <div className="newsfeed">
          <div className="armada-news">
            <h1 id="newstitle">Armada News</h1>
          </div>
          {posts}
      </div>
  )
}

Newsfeed.propTypes = {
  numberOfPosts: PropTypes.number,
  displayed_article: PropTypes.string,
  isNewsList: PropTypes.bool
}

Newsfeed.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Newsfeed
