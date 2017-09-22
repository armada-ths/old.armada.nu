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
      <div className="newspage">
        <div className ="newsarticle">
          <img src={props.head.cover_wide} />
          <h1> {props.head.title} </h1>
          <p className="ingress"> {props.head.ingress} </p>
            <Page
              { ...props }
              footer={
                <div className="signature">
                  THS ARMADA <br/>
                  {
                  pageDate &&
                  <small>
                  <time key={ pageDate.toISOString() }>
                    { pageDate.toDateString() }
                  </time>
                  </small>
                  }
                </div>
              }
            >
            </Page>
        </div>
      <Newsfeed  displayed_article={props.head.title}/>
      </div>
  </div>
  )
}

News.propTypes = {
  head: PropTypes.object.isRequired,
}

export default News
