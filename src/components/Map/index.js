//https://codesandbox.io/s/react-leaflet-with-functional-components-and-imageoverlay-u225j?file=/src/Map.js
import React from 'react'
import { ImageOverlay, MapContainer } from 'react-leaflet'
import { CRS } from 'leaflet'

export const MapUtil = () => {
    const position = [10, 10]
    const zoomLevel = 0
    const bounds = [
        [100, 0],
        [0, 100],
    ]
    const image = require('../../../static/assets/Map/Nymble_floor2.png')

    return (
        <div>
            <MapContainer
                zoom={zoomLevel}
                center={position}
                doubleClickZoom={false}
                crs={CRS.Simple}
                bounds={bounds}
            >
                <ImageOverlay
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={image.default}
                    bounds={bounds}
                />
            </MapContainer>
        </div>
    )
}

export default MapUtil
