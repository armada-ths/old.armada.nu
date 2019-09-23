import React from "react"
import armadaLogo from '../../../content/assets/armada_round_logo_green.png'
import PropTypes from "prop-types";

const FAQHeader = (props) => {
    return(
        <div style={{marginTop: '-10%'}}>
            <header style={{textAlign: 'center'}}>
                <img src={armadaLogo} style={{ width: '50px', height: '50px', marginBottom: '30px'}}></img>
                <h2 style={{marginBottom: '20px'}}>How can we help you?</h2>
                <input placeholder="Question..." onChange={props.onQuestionUpdate} />
            </header>
        </div>
        
    )
}

FAQHeader.propTypes = {
    onQuestionUpdate: PropTypes.func
}

export default FAQHeader
