import React, { PropTypes } from "react"
import Page from "../Page"

import styles from "./index.css"

const Post = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null

  return (
    <Page
      { ...props }
      header={
        <div>
          <header className={ styles.header }>
            {
              pageDate &&
              <time key={ pageDate.toLocaleDateString() }>
                { pageDate.toLocaleDateString() }
              </time>
            }
          </header>
        </div>
      }
    >
      
    </Page>
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
