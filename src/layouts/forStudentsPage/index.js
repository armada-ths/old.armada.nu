import React from 'react'
import './index.scss'
import Page from '../../templates/page'

const forStudentsPage = props => {
    return (
        <div className='content'>
            <div className='forStudents-container'>
                <Page {...props} />
            </div>
        </div>
    )
}

export default forStudentsPage
