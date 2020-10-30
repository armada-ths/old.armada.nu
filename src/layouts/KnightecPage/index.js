import React from 'react'
import './index.scss'
import Page from '../../templates/page'
import KnightecCard from '../../components/KnightecCard'
import KnightecSpeakers from '../../components/KnightecSpeakers'

const KnightecPage = props => {

    return (
        <div className='content'>
            <div className='knightecpage-container'>
                <Page {...props} />
                <KnightecSpeakers/>
            </div>
        </div>
    )
}

export default KnightecPage