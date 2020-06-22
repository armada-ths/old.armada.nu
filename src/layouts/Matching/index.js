import React from 'react'
import MatchingSection from '../../components/MatchingSection'
import './index.scss'
import Page from '../../templates/page'

const Matching = (props) => {
  return (
      <div className='content'>
        <div className='matching-container'>
          <Page { ...props } />
          <MatchingSection/>
        </div>
      </div>
  )
}

export default Matching
