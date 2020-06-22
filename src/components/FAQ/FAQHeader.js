import React from 'react'
import PropTypes from 'prop-types'
import ArmadaLogo from '../../../static/assets/armada_round_logo_green.png'

const FAQHeader = (props) => {
    return(<div style={{marginTop: '-10%'}}>
            <header style={{textAlign: 'center'}}>
                <img alt='' src={ArmadaLogo} style={{ width: '50px', height: '50px', marginBottom: '30px'}}></img>
                <h2 style={{marginBottom: '20px'}}>How can we help you?</h2>
                <input aria-label='question' placeholder='Question...' onChange={props.onQuestionUpdate} />
            </header>
    </div>)
}

FAQHeader.propTypes = {
    onQuestionUpdate: PropTypes.func
}

export default FAQHeader
