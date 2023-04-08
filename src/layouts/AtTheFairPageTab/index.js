import React from 'react'
import Page from '../../templates/page'
import './index.scss'
import AtTheFairTab from '../../components/AtTheFairTab'
import ScrollUpButton from '../../components/ScrollUpButton'

const AtTheFairPageTab = props => {
    return (
        <>
            <ScrollUpButton />
            <div className='exhibitor-catalogue-container'>
                <h1 id='information-for-exhibitors'>At The Fair</h1>
                <div className='page-container'>
                    <Page {...props} />
                </div>
                <AtTheFairTab />
            </div>
        </>
    )
}
export default AtTheFairPageTab
