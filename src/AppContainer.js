import React from "react"
import PropTypes from "prop-types";


import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import Content from "./components/Content"
import Footer from "./components/Footer"


const AppContainer = (props) => {
    let pathname = props.location.pathname.endsWith("/") ? props.location.pathname : props.location.pathname + "/";
    let displayedPage = props.children._owner._context.collection.find((element) => element.__url === pathname);
    let header = displayedPage ? displayedPage.header : null;
    let vid = null;
    let loadVideo = (global.window!=undefined);
    if (loadVideo) {
        vid = window.innerWidth >= 750 ? require('../content/assets/video/film.mp4') : null;
    }
    vid = pathname === "/" ? vid : null;
    return (
  <Container>
    <DefaultHeadMeta />
    <Navbar />
    <Jumbotron image={header} video={vid}/>
    <Content>
      { props.children }
    </Content>
    <Footer />
  </Container>
)
}

AppContainer.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
}

export default AppContainer
