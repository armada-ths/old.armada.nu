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
        <div className="card_image"> <img draggable="false" src={this.props.imageUrl} /> </div>
        <div className="card_title">
          <div id="card_text">
            <p id="card_name">{this.props.name}</p>
            <p className="title-white">{this.props.title} {this.props.emoji}</p>
            <a className="title-white" href={"mailto:" + this.props.email}>{this.props.email}</a>
          </div>
        </div>
      </div>
      )
    }
    else {
      return(
        <div className="card-container 1">
        <div className="card_image"> <img draggable="false" src="/assets/armadalogogreen.jpg" /> </div>
        <div className="card_title">
          <div id="card_text">
            <p id="card_name">{this.props.name}</p>
            <p className="title-white">{this.props.title} {this.props.emoji}</p>
            <a className="title-white" href={"mailto:" + this.props.email}>{this.props.email}</a>
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
