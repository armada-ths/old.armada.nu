import React from 'react'
import TopBarProgressIndicator from 'react-topbar-progress-indicator'

TopBarProgressIndicator.config({
    barColors: {
        0: '#ccf7e8',
        '1.0': '#ccf7e8',
    },
    shadowBlur: 5,
})

const Loading = () => (
    <div>
        <TopBarProgressIndicator />
        <div>
            <div />
        </div>
    </div>
)

export default Loading
