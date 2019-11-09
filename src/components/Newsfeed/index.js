import React from "react"
import PropTypes from "prop-types"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"
//import PagePreview from "../../components/PagePreview"

import "./newsfeed.scss"

const defaultNumberOfPosts = 3

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

  /*
  const featuredPostIndex = latestPosts.findIndex( (element) =>{
      return element.featured;
    });

    const featuredPost = featuredPostIndex >=0 ? <PagePreview {...latestPosts[featuredPostIndex]} /> : null;
    if (featuredPostIndex >= 0) {
        latestPosts.splice(featuredPostIndex, 1);
    }
  */
  
  const posts = latestPosts.length > 0 ? <PagesList pages={latestPosts} /> : null;

  let feed =(
    <div className="newsfeed">
      <div className="armada-news">
        <h1 id="newstitle">Armada News</h1>
      </div>
      {/* featuredPost */}
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
