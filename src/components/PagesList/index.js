import React, { PropTypes } from "react"

import PagePreview from "../PagePreview"

import styles from "./index.css"

const PagesList = ({ pages }) => {
  return (
    <div>
      {
      pages.length
      ? (
        <ul className={ styles.list }>
          {
          pages.map((page) => (
            <div className="post"> <li key={ page.title }><PagePreview { ...page } /></li></div>
          ))
        }
        </ul>
      )
      : "No posts yet."
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
