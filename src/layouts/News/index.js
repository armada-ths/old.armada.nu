import React from "react"
import PropTypes from "prop-types"

import Page from "../Page"
import Newsfeed from "../../components/Newsfeed"

import './news.scss'

const News = (props) => {

  return (
    <div className="content">
      <div className="body">
        <div className ="newsarticle">
          <img src={props.head.cover_wide} />
          <div className="article-text">
            <h1>{props.head.title}</h1>
            <p className="ingress"> {props.head.ingress} </p>
              <Page {...props}/>
            </div>
        </div>  
        <Newsfeed displayed_article={props.head.title}/>
      </div>
  </div>
  )
}

News.propTypes = {
  head: PropTypes.object.isRequired,
}

export default News
