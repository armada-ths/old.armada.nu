import React from 'react'
import './index.scss'
import Page from '../../templates/page'
import KnightecSpeakers from '../../components/KnightecSpeakers'

const KnightecPage = props => {
    return (
        <div className='content'>
            <div className='knightecpage-container'>
                <Page {...props} />
            </div>
            <KnightecSpeakers />
        </div>
    )
}

export default KnightecPage
