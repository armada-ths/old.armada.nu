import React, { PropTypes } from "react"

import Page from "../Page"
import Jumbotron from "../../components/Jumbotron"
import Newsfeed from "../../components/Newsfeed"

import './news.scss'

const News = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null

  return (
    <div className="content">
      <Jumbotron />
   <div className="body">
           <div className ="newsarticle">
          <img src={props.head.cover_wide} />
        <Page
          { ...props }
          header={
            <header>
              {
              pageDate &&
              <time key={ pageDate.toISOString() }>
                { pageDate.toDateString() }
              </time>
              }
            </header>
          }
        >
        </Page>
      </div>
        <Newsfeed {...props} />
      </div>
  </div>
  )
}

News.propTypes = {
  head: PropTypes.object.isRequired,
}

export default News
