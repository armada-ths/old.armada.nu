import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"
import Post from "./layouts/Post"
import Aboutpage from "./layouts/Aboutpage"
import Contactpage from "./layouts/Contactpage"
import News from "./layouts/News"
import Events from "./layouts/Events"
import PageSectionsLayout from "./layouts/PageSectionsLayout"
import ExhibitorInfo from "./layouts/ExhibitorInfo"


const ReactGA = require('react-ga');
ReactGA.initialize('UA-107526633-1');

const _route_change_handler = (location) => {
  ReactGA.set({page: location.pathname});
  ReactGA.pageview(location.pathname);
};

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
    }}
  />
);

export default (
  <Route component={ AppContainer }
    onChange={(prevState, nextState) => {
      _route_change_handler(nextState.location);
      return true;
    }}
    onEnter={(nextState) => {
      _route_change_handler(nextState.location);
      return true;
    }}
    >
    <Route path="*" component={ PageContainer } />
  </Route>
)
