import React from 'react'
import PropTypes from "prop-types";
import MatchingLogo from "../../../content/assets/MatchingLogo.png"

const MatchingWelcomeScreen = (props) => {
    return(
        <div className="matching-question">
            <img src={MatchingLogo} />
            <h1> ARMADA MATHCHING</h1>
            <p>LOREM BLA BLA</p>
            <button onClick={props.handleClick}>Let's get started!</button>
        </div>
    )
}

MatchingWelcomeScreen.propTypes = {
    handleClick: PropTypes.func,
}
  
  export default MatchingWelcomeScreen;