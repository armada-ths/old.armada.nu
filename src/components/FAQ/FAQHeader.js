import React from 'react'
import ArmadaLogo from '../../../static/assets/virtual_logo_green.svg'

const FAQHeader = () => {
    return (
        <div style={{ marginTop: '-10%' }}>
            <header style={{ textAlign: 'center' }}>
                <img
                    alt=''
                    src={ArmadaLogo}
                    style={{ width: '90px', height: '90px' }}
                ></img>
                <h2 id='FAQ' style={{ marginBottom: '20px' }}>
                    How can we help you?
                </h2>
            </header>
        </div>
    )
}

export default FAQHeader
