import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router'

import PagePreview from "../PagePreview"

import "./index.scss"
import Carousel from "../Carousel"

const PagesList = (props) => {
  return (
    <div className='pages-list'>
      { props.pages.length > 0 ? 
            <Carousel items=
            {props.pages.map((page) => (
              <PagePreview key={page.title} { ...page } />
            ))}/>
        : "No posts yet."
      }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
  isNewsList: PropTypes.bool,
}

PagesList.defaultProps = {
  isNewsList: false
}

export default PagesList
