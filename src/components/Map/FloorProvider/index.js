import React, { useState } from 'react'

const FloorProvider = ({ children }) => {
    const [state, setState] = useState(initialState)

    return <div>{children(state, setState)}</div>
}

export default FloorProvider
