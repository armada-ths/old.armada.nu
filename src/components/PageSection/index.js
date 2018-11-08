import React from "react"
import PropTypes from "prop-types"
import axios from "axios"
//import { StickyContainer, Sticky } from 'react-sticky';

import './pagesection.scss';

class PageSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: "",
        };
    }
    componentDidMount() {
        axios.get(this.props.__dataUrl)
            .then((res) => {
                const data = res.data;
                this.setState({body: data.body});
            });
    }
    isMobile() {
        if (global.window != undefined) {
            return window.innerWidth < 470 ? true : false
        } else {
            return false
        }
    }

    render = () => {
        if (this.props.priority == 1) {
            return (
                <div className={"pagesection"}>
                    <div className="pagesection-body-container">
                      <div className="pagesection-body">
                          <h1 className="">{this.props.title}</h1><br/>
                          <div dangerouslySetInnerHTML={{__html: this.state.body}}/>
                      </div>
                    </div>
                </div>
            )
        }
        else {
            return (

                <div className={"pagesection with-row"}>
                    <div className="pagesection-body-container">
                      <div className="pagesection-body">
                          <h1 className="h1_small">{this.props.title}</h1>
                          <div dangerouslySetInnerHTML={{__html: this.state.body}}/>
                      </div>
                    </div>
                </div>
            )
        }
    }
}

PageSection.propTypes = {
  __url: PropTypes.string.isRequired,
  __dataUrl: PropTypes.string.isRequired,
  __filename: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  header: PropTypes.string,
  right: PropTypes.boolean,
  priority: PropTypes.int,
  dark: PropTypes.boolean,
}

export default PageSection
