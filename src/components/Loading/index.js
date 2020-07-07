import React from 'react'
import TopBarProgressIndicator from 'react-topbar-progress-indicator'
import Spinner from '../Spinner'

TopBarProgressIndicator.config({
  barColors: {
    '0': '#fff',
    '1.0': '#fff',
  },
  shadowBlur: 5,
})

const Loading = () => (
  <>
    <TopBarProgressIndicator/>
    <div style={{display: 'flex', justifyContent: 'center', padding: '1em'}} >
      <Spinner/>
    </div>
  </>
)

export default Loading
