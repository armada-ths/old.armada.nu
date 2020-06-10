import React from "react"
import PropTypes from "prop-types"
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
        return window.innerWidth < 470 ? true : false
      } else {
        return false
      }
  }

  render = () => {

      const pageDate = this.props.date ? new Date(this.props.date) : null

      const ingressSection = <p className="description"> {this.props.description} </p>;

      const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      const dateSection = (pageDate &&
            <small>
              { " " }
              <time key={ pageDate.toISOString() }>
                {pageDate.getDate()}<br />
                { months[pageDate.getMonth()] }
              </time>
            </small>
          )

      return (
        <div className={"newsitem " +  /*(this.props.featured ? "featured" : "regular")*/ "regular"}>
          <div className="image-container" style={{ backgroundImage: "url(" + (this.props.cover_wide ? this.props.cover_wide : this.props.cover_square) + ")" }}>
            <div className="newsitem-datesection">{dateSection}</div>
            {this.props.category && <div className='newsitem-category'>{this.props.category}</div>}
          </div>
          <div className="preview-content">

            
            <h2><Link to={this.props.__url}>{this.props.title}</Link></h2>
            {ingressSection}

          </div>
          
          <Link to={this.props.__url} className={!this.isMobile() ? "regular-news-link" : null}>
              Read more
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
  category: PropTypes.string,
  cover_wide: PropTypes.string,
  description: PropTypes.string,
  cover_square: PropTypes.string,
  featured: PropTypes.boolean,
  ingress: PropTypes.string,
}

export default PagePreview
