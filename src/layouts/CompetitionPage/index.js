import React from 'react'
import Page from '../../templates/page'

import './index.scss'

const CompetitionPage = props => {
    return (
        <div className='content'>
            <div className='competition-container'>
                <Page {...props} />
            </div>
        </div>
    )
}
export default CompetitionPage
