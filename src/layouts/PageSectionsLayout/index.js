import React from "react"
import PropTypes from "prop-types"

import PageSections from "../../components/PageSections"
import Page from "../Page"

import "./pagesections.scss"

const PageSectionsLayout = (props) => {

  return (
    <div>
    <Page { ...props }>
      {//<div className="body pagesectionsbody">
    }
          <PageSections />
      {//</div>
        }
    </Page>
      </div>
  )
}

PageSectionsLayout.propTypes = {
    head: PropTypes.object.isRequired,
}

export default PageSectionsLayout
