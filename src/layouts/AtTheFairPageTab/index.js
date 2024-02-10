import React from 'react'
import Page from '../../templates/page'
import './index.scss'
import AtTheFairTab from '../../components/AtTheFairTab'
import ScrollUpButton from '../../components/ScrollUpButton'
import mapicon from '../../../static/assets/mapicon.png'

const AtTheFairPageTab = props => {
    return (
        <>
            <ScrollUpButton />
            <h1>
                Check out last years exhibitors <a href='/map'>here</a>
            </h1>
            <a
                href='/map'
                style={{
                    justifyContent: 'center',
                    display: 'flex',
                    marginTop: '20px',
                }}
            >
                <img src={mapicon} style={{ width: '20%' }}></img>
            </a>
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
