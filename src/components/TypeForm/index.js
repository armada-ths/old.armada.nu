import React from 'react'
import './index.scss'
import { ReactTypeformEmbed } from 'react-typeform-embed'

class TypeForm extends React.Component {
    constructor(props) {
        super(props)
        this.openForm = this.openForm.bind(this)
    }

    openForm() {
        this.typeformEmbed.typeform.open()
    }

    render() {
        return (
            <div className='typeform'>
                <ReactTypeformEmbed
                    popup
                    autoOpen={false}
                    url={this.props.url}
                    hideHeaders
                    hideFooter
                    buttonText='Go!'
                    style={{ top: 100, zIndex: -1 }}
                    ref={tf => {
                        this.typeformEmbed = tf
                    }}
                />
                <button
                    onClick={this.openForm}
                    style={{ cursor: 'pointer' }}
                >
                    {this.props.children}
                </button>
            </div>
        )
    }
}

export default TypeForm
