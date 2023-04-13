import React from 'react'
import Page from '../../templates/page'

import './index.scss'

const CompetitionPage = props => {
    return (
        <div className='competition-container'>
            <h1 id='information-for-exhibitors'>Armada Competition 2022</h1>
            <div class='competition-logo'>
                <img
                    alt=''
                    id='logo'
                    src='/assets/Armada_competition_filled.png'
                />
            </div>
            <div className='competition-page-container'>
                <Page {...props} />
            </div>
        </div>
    )
}
export default CompetitionPage
