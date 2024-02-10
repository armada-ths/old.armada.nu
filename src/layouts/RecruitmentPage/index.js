import React from 'react'
import './index.scss'
import Page from '../../templates/page'
import Recruitment from '../../components/Recruitment'
import EmbeddedVideo from '../../components/EmbeddedVideo'
import HostRecruitment from '../../components/HostRecruitment'
import HostCountdown from '../../components/HostRecruitment/HostCountdown'
const RecruitmentPage = props => {
    const date = new Date()
    const month = date.getMonth() //note, between july and november the host recruitment tab is shown
    return (
        <>
            <HostCountdown />
            {month > 7 && month < 10 && <HostRecruitment />}
            <div className='recruitment-container'>
                <Page {...props} />
            </div>
        </>
    )
}

export default RecruitmentPage
