import React from 'react'
// import TableOfContents from '../../components/TableOfContents'
import './index.scss'
import Page from '../../templates/page'

const ExhibitorInfo = props => {
  return (
    <div>
      <div className='info-container'>
        <h1 id='information-for-exhibitors'>Information about the Fair</h1>
        {/* <TableOfContents /> */}
        <div className='page-container'>
          <Page {...props} />
        </div>
      </div>
    </div>
  )
}

export default ExhibitorInfo
