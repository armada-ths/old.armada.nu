import React from 'react'
import TopBarProgressIndicator from 'react-topbar-progress-indicator'

TopBarProgressIndicator.config({
    barColors: {
        0: '#fff',
        '1.0': '#fff',
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
