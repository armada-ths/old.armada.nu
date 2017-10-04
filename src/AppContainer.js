import React from "react"
import PropTypes from "prop-types";


import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Footer from "./components/Footer"
import GoogleAnalyticsTracker from "./components/GoogleAnalyticsTracker" 

const AppContainer = (props) => (
 <GoogleAnalyticsTracker params={props.params}> 
  <Container>
    <DefaultHeadMeta />
    <Navbar />
    <Content>
      { props.children }
    </Content>
    <Footer />
  </Container>
 </GoogleAnalyticsTracker>
)

AppContainer.propTypes = {
  children: PropTypes.node,
  params: PropTypes.object,
}

export default AppContainer
