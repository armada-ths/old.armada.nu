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
import Exhibitorinfo from "./layouts/Exhibitorinfo"

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
      Exhibitorinfo,
      Plainpage,
    }}
  />
);

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
