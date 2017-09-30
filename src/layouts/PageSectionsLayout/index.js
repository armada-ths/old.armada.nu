import React, {PropTypes} from "react"

import PageSections from "../../components/PageSections"
import Jumbotron from "../../components/Jumbotron"
import Page from "../Page"

const PageSectionsLayout = (props) => {

  var vid = null;
  if (global.window!=undefined) {
      vid = window.innerWidth >= 750 ? require('../../../content/assets/video/film.mp4') : null;
  }


  return (
    <div>
    <Jumbotron video={vid} image={props.head.header} header_class="header-home"/>
    <Page { ...props }>
      <div className="body">
          <PageSections />
      </div>
    </Page>
      </div>
  )
}

PageSectionsLayout.propTypes = {
    head: PropTypes.object.isRequired,
}

export default PageSectionsLayout

