import React from 'react'
import PropTypes from "prop-types";
import MatchingLogo from "../../../content/assets/MatchingLogo.png"

const MatchingWelcomeScreen = (props) => {
    return(
        <div className="matching-question">
            <img src={MatchingLogo} />
            <h1> ARMADA MATCHING</h1>
            <p>Try out Armada's brand new <span className="bold">matching functionality</span> that matches </p>
                    <p>students with companies through their shared values!</p>
            <button id="start-btn" style={{marginTop: "2%"}} onClick={props.handleClick}>Let's get started!</button>
        </div>
    )
}

MatchingWelcomeScreen.propTypes = {
    handleClick: PropTypes.func,
}
  
  export default MatchingWelcomeScreen;