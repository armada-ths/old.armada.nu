import React from 'react'
import './index.scss'
import Page from '../../templates/page'
import Recruitment from '../../components/Recruitment'

const RecruitmentPage = (props) => {

  return (<div className='recruitment-container'>
      <Page {...props}/>
      <Recruitment/>
    </div>)

}

export default RecruitmentPage
