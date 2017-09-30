import React from "react"
import PropTypes from "prop-types"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PageSection from "../../components/PageSection"

import "./pagesections.scss"

const PageSections = (props, { collection }) => {

  let sections = enhanceCollection(collection, {
    filter: { layout: "Fair_info" },
    sort: "priority",
  });
    

  sections = sections.map( (section) => (<PageSection {...section}/>) );

    return (
        <div>
            {sections}
        </div>
    )
}


PageSections.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default PageSections
