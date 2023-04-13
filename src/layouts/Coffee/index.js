import React from 'react'
import CoffeeForm from '../../components/CoffeeForm'
import './index.scss'
import Page from '../../templates/page'

const Coffee = props => {
    return (
        <div className='coffee-background'>
            <div className='coffee-container'>
                <CoffeeForm />
                <Page {...props} />
            </div>
        </div>
    )
}

export default Coffee
