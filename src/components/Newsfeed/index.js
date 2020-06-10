import React from 'react'
import PropTypes from 'prop-types'
import enhanceCollection from 'phenomic/lib/enhance-collection'
import PagesList from '../../components/PagesList'
import './newsfeed.scss'

const Newsfeed = (props, {collection}) => {

  let latestPosts = enhanceCollection(collection, {
    filter: { layout: 'News' },
    sort: 'date',
    reverse: true,
  })

  let displayedArticleIndex = latestPosts.findIndex((element) => {
      return element.title === props.displayed_article;
  });

  if (displayedArticleIndex >= 0) {
      latestPosts.splice(displayedArticleIndex, 1);
  }

  return (<div className='newsfeed'>
          <div className='armada-news'>
            <h1 id='newstitle'>Armada News</h1>
          </div>
          {latestPosts.length > 0 ? <PagesList pages={latestPosts} /> : null}
      </div>)
}

Newsfeed.propTypes = {
  numberOfPosts: PropTypes.number,
  displayed_article: PropTypes.string,
}

Newsfeed.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Newsfeed
