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
            <HostCountdown />
            <HostRecruitment />
            <div className='recruitment-container'>
                <Page {...props} />
            </div>
        </>
    )
}

export default RecruitmentPage
