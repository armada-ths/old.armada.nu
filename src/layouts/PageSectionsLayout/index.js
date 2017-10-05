import React, {PropTypes} from "react"

import PageSections from "../../components/PageSections"
import Page from "../Page"

import "./pagesections.scss"

const PageSectionsLayout = (props) => {

  return (
    <div>
    <Page { ...props }>
      <div className="body pagesectionsbody">
          <PageSections />
      </div>
    </Page>
      </div>
  )
}

PageSectionsLayout.propTypes = {
    head: PropTypes.object.isRequired,
}

export default PageSectionsLayout

