import React from "react"

import Page from "../../templates/page";

import './news.scss'

const News = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.frontmatter.date ? new Date(props.frontmatter.date) : null

  return (
    <div className="content">
      <div className="body">
        <div className ="newsarticle">
          <img alt="" src={props.frontmatter.cover_wide} />
          <div className="article-text">
            <h1> {props.frontmatter.title} </h1>
            <p className="ingress"> {props.frontmatter.ingress} </p>
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
        </div>
      </div>
  </div>
  )
}

export default News
