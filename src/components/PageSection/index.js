import React, { PropTypes } from "react"
import axios from "axios"

import './pagesection.scss';

class PageSection extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        body: "",
      };
  }

  componentDidMount(){
    axios.get(this.props.__dataUrl)
          .then( (res)  => {
            const data = res.data;
            this.setState({ body: data.body});
          });
  }

  isMobile() {
      if (global.window!=undefined) {
        return window.innerWidth < 470 ? true : false
      } else {
        return false
      }
  }

  render = () => {
     return (
        <div className={"pagesection " +  (this.props.right ? "right" : "left")}>
            <div className="image">
                <img src={this.props.header} />
            </div>
            <div className="pagesection-body-container">
                <div className="pagesection-body">
                    <h1 className="title">{ this.props.title }</h1>
                    <div dangerouslySetInnerHTML={{__html: this.state.body}}/>
                </div>
            </div>
        </div>
      )
    }
}

PageSection.propTypes = {
  __url: PropTypes.string.isRequired,
  __dataUrl: PropTypes.string.isRequired,
  __filename: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  header: PropTypes.string,
  right: PropTypes.boolean,
}

export default PageSection
