import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"
import Post from "./layouts/Post"
import Aboutpage from "./layouts/Aboutpage"
import Plainpage from "./layouts/Plainpage"
import Contactpage from "./layouts/Contactpage"
import News from "./layouts/News"
import Events from "./layouts/Events"
import PageSectionsLayout from "./layouts/PageSectionsLayout"
import ExhibitorInfo from "./layouts/ExhibitorInfo"
import PageSection from "./components/PageSection"
//PageSection is added as layout to avoid warnings from phenomic for having the
//PageSections compoment that is used in ExhibitorInfo layout.
//Phenomic complains about not finding PageSection otherwise as it 
//checks all documents in content if it has a corresponding layout

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      Post,
      Aboutpage,
      Contactpage,
      News,
      Events,
      PageSectionsLayout,
      ExhibitorInfo,
      Plainpage,
      PageSection,
    }}
  />
);

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
