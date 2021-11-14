import React from 'react'
import './index.scss'
import Page from '../../templates/page'
import VerticalTimeline from '../../components/VerticalTimeline'
import Conceptvisualization from '../../components/ConceptVisualization'
const VirtualFairSuccess = (props) => {

  return (<div className='VirtualFairContainer'>
      <Page {...props}/>
<VerticalTimeline/>
<Conceptvisualization/>
    </div>)

}

export default VirtualFairSuccess
