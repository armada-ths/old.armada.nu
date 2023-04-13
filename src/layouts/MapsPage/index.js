import React from 'react'
import Maps from '../../components/Maps'
import './index.scss'

const MapsPage = props => {
    return (
        <div className='Maps-container'>
            <Maps {...props} />
        </div>
    )
}

export default MapsPage
