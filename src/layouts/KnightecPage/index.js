import React from 'react'
import './index.scss'
import Page from '../../templates/page'
import KnightecCard from '../../components/KnightecCard'

const KnightecPage = props => {

    return (
        <div className='content'>
            <div className='knightecpage-container'>
                <Page {...props} />
                <KnightecCard/>
            </div>
        </div>
    )
}

export default KnightecPage