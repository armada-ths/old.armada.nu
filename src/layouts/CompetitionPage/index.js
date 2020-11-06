import React from 'react'
import PropTypes from 'prop-types'

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

CompetitionPage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default CompetitionPage
