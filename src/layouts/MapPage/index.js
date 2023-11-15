import React from 'react'
import { useEffect, useState } from 'react'
import MapUtil from '../../components/Map/index.js'
import Loadable from '@loadable/component'
import './index.scss'
import { ChaoticOrbit } from '@uiball/loaders'
import Loading from '@/components/Loading/index.js'

const LoadableReputation = Loadable(() =>
    import('../../components/Map/index.js')
)

const MapPage = props => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        LoadableReputation.load().then(() => {
            setIsLoading(false)
        })
    }, [])
    return (
        <>
            <div className='loading'>{isLoading ? <Loading /> : null}</div>
            <div
                className='loadingAnim'
                aria-live='polite'
                aria-busy={isLoading}
            >
                {isLoading && (
                    <h3 style={{ marginRight: '20px' }}>Loading Map...</h3>
                )}
                {
                    isLoading && <ChaoticOrbit /> //used for loading animations before map loads
                }
            </div>
            <LoadableReputation className='loadable' />
        </>
    )
}
export default MapPage
