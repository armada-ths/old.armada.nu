import React, { PropTypes } from "react"
import {Link} from 'react-router'

import './preview.scss';

class PagePreview extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        open:false,
      };
  }

  toggle_open(){
      this.setState({open: !this.state.open});
  }

  isMobile() {
      if (global.window!=undefined) {
        return (window.innerWidth < 470) ? true : false
      } else {
        return false
      }
  }
  render = () => {

      const pageDate = this.props.date ? new Date(this.props.date) : null

      const ingressSection = this.props.featured ? (<p className="ingress"> {this.props.ingress} </p>) : <p className="description"> {this.props.description.substring(0,40) + "..."} </p>;

      const dateSection = (pageDate &&
            <small>
              { " " }
              <time key={ pageDate.toISOString() }>
                { pageDate.toDateString() }
              </time>
            </small>
          )

      return (
        <div className={"newsitem " +  (this.props.featured ? "featured" : "regular")}>
          <Link to={this.props.__url} className={!this.isMobile ? "regular-news-link" : null}>
            <img src={this.props.cover_wide ? this.props.cover_wide : this.props.cover_square} />
            <div className="preview-content">
            <h2>{ this.props.title }</h2>
            {this.isMobile && !this.props.featured ? (<br />) : null}
            {dateSection}
            {!this.isMobile || this.props.featured ? ingressSection : null} 
            </div>
          </Link>
        </div>
      )
    }
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  __filename: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  cover_wide: PropTypes.string,
  description: PropTypes.string,
  cover_square: PropTypes.string,
  featured: PropTypes.boolean,
  ingress: PropTypes.string,
}

export default PagePreview
