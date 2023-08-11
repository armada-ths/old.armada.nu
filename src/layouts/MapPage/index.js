import React from 'react'
import { useEffect } from 'react'
import MapUtil from '../../components/Map/index.js'
import Loadable from '@loadable/component'

const LoadableReputation = Loadable(() =>
    import('../../components/Map/index.js')
)

const MapPage = props => {
    return <LoadableReputation />
}
export default MapPage
