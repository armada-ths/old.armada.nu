import React from "react"
import PropTypes from "prop-types";

import "./contactcard.scss";
import "../../styles/global.scss"


class ContactCard extends React.Component {
  constructor(props) {
    super(props); 
  }

  render () {
    if(this.props.imageUrl !== "") {
      return(
        <div className="card-container 1">
        <div className="card_image"> <img src={this.props.imageUrl} /> </div>
        <div className="card_title">
          <div id="card_text">
            <p id="card_name">{this.props.name}</p>
            <p className="title-white">{this.props.title}</p>
            <p className="title-white">{this.props.email}</p>
          </div>
        </div>
      </div>
      )
    }
    else {
      return(
        <div className="card-container 1">
        <div className="card_image"> <img src="/assets/ulrik.jpg" /> </div>
        <div className="card_title">
          <div id="card_text">
            <p id="card_name">{this.props.name}</p>
            <p className="title-white">{this.props.title}</p>
            <p className="title-white">{this.props.email}</p>
          </div>
        </div>
      </div>
      )
    }
  }
}

ContactCard.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  emoji: PropTypes.string
}

export default ContactCard;
