import React from "react"
import PropTypes from "prop-types";


import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Footer from "./components/Footer"

const AppContainer = (props) => (
  <Container>
    <DefaultHeadMeta />
    <Navbar />
    <Content>
      { props.children }
    </Content>
    <Footer />
  </Container>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
