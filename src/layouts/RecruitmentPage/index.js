import React from 'react'
import './index.scss'
import Page from '../../templates/page'
import Recruitment from '../../components/Recruitment'
import EmbeddedVideo from '../../components/EmbeddedVideo'
import HostRecruitment from '../../components/HostRecruitment'
import HostCountdown from '../../components/HostRecruitment/HostCountdown'
const RecruitmentPage = props => {
    return (
        <>
            <h3 style={{ marginTop: '20px' }}>
                (Update!!: We have extended the recruitment period. Apply now!)
            </h3>
            <HostCountdown />
            <HostRecruitment />
            <div className='recruitment-container'>
                <Page {...props} />
            </div>
        </>
    )
}

export default RecruitmentPage
