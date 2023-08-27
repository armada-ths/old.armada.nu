import React from 'react'
import './index.scss'
import Page from '../../templates/page'
import Recruitment from '../../components/Recruitment'
import EmbeddedVideo from '../../components/EmbeddedVideo'
import HostRecruitment from '../../components/HostRecruitment'
const RecruitmentPage = props => {
    return (
        <>
            <HostRecruitment />
            <div className='recruitment-container'>
                <Page {...props} />
            </div>
        </>
    )
}

export default RecruitmentPage
