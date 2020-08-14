import React from 'react'
import './index.scss'
import CareerContent from '../../components/CareerContent'
import Page from '../../templates/page'

const Career = props => {
    return (
        <div>
            <div className='career'>
                <CareerContent>
                    <Page {...props} />
                </CareerContent>
            </div>
        </div>
    )
}

export default Career
