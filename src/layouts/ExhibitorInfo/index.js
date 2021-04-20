import React from 'react'
import TableOfContents from '../../components/TableOfContents'
import './index.scss'
import Page from '../../templates/page'
import FAQExhibitors from '../../components/FAQExhibitors'

const ExhibitorInfo = props => {
  return (
    <div>
      <div className='info-container'>
        <h1 id='information-for-exhibitors'>Information for Exhibitors</h1>
        <TableOfContents />
        <div className='page-container'>
          <Page {...props} />
        </div>
        <FAQExhibitors />
      </div>
    </div>
  )
}

export default ExhibitorInfo
