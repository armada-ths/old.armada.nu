import React from "react"
import PropTypes from "prop-types";


import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import Content from "./components/Content"
import Footer from "./components/Footer"
import GoogleAnalyticsTracker from "./components/GoogleAnalyticsTracker"


const AppContainer = (props) => {
    let pathname = props.location.pathname.endsWith("/") ? props.location.pathname : props.location.pathname + "/";
    let displayedPage = props.children._owner._context.collection.find((element) => element.__url === pathname);

    return (
  <GoogleAnalyticsTracker params={props.params}>
  <Container>
    <DefaultHeadMeta />
    <Navbar whiteHB = {pathname === '/'}/>
		{pathname === '/' &&
    <Jumbotron video={require('../content/assets/video/film.mp4')}/>
		}
    <Content>
      { props.children }
    </Content>
    <Footer />
  </Container>
 </GoogleAnalyticsTracker>
)
}

AppContainer.propTypes = {
  children: PropTypes.node,
  params: PropTypes.object,
  location: PropTypes.object,
}

export default AppContainer
