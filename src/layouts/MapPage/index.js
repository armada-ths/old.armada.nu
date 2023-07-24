import React from 'react'
import { useEffect } from 'react'
import MapUtil from '../../components/Map/index.js'
import Loadable from '@loadable/component'

const LoadableReputation = Loadable(() =>
    import('../../components/Map/index.js')
)

const MapPage = props => {
    return (
        <div style={{ width: 1000 }}>
            <LoadableReputation />
        </div>
    )
}
export default MapPage
