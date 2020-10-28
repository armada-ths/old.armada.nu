import React from 'react'
import PropTypes from 'prop-types'
import ArmadaLogo from '../../../static/assets/virtual_logo_green.svg'

const FAQHeader = (props) => {
    return(<div style={{marginTop: '-10%'}}>
            <header style={{textAlign: 'center'}}>
                <img alt='' src={ArmadaLogo} style={{ width: '90px', height: '90px'}}></img>
                <h2 style={{marginBottom: '20px'}}>How can we help you?</h2>
                <input aria-label='question' placeholder='Question...' onChange={props.onQuestionUpdate} />
            </header>
    </div>)
}

FAQHeader.propTypes = {
    onQuestionUpdate: PropTypes.func
}

export default FAQHeader
