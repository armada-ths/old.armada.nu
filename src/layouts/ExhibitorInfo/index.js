import React from 'react'
// import TableOfContents from '../../components/TableOfContents'
import './index.scss'
import Page from '../../templates/page'
import EmbeddedVideo from '../../components/EmbeddedVideo'

const ExhibitorInfo = props => {
    return (
        <div className='info-container'>
            <h1 id='information-for-exhibitors'>Information about the Fair</h1>
            {/* <TableOfContents /> */}
            <div className='page-container'>
                <Page {...props} />
            </div>
        </div>
    )
}

export default ExhibitorInfo
