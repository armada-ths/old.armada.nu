import React from 'react'
import './index.scss'
import Page from '../../templates/page'
import CompanySummary from '../../components/CompanySummary'

const IndividualMeetings = props => {
    return (
        <div className='meetings-container'>
            <h1 id='individual-meetings'>Individual Meetings (1on1)</h1>
            <div className='page-container'>
                <Page {...props} />
            </div>
            <CompanySummary />
        </div>
    )
}

export default IndividualMeetings
