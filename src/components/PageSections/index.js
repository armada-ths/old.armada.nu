import React from "react"
import PropTypes from "prop-types"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PageSection from "../../components/PageSection"

import "./pagesections.scss"

const PageSections = (props, { collection }) => {

  let sections = enhanceCollection(collection, {
    filter: { layout: "PageSection" },
    sort: "priority",
  });
    

  sections = sections.map( (section, index) => (<PageSection {...section} right={index%2==0}/>) );

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
