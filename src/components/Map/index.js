//https://codesandbox.io/s/react-leaflet-with-functional-components-and-imageoverlay-u225j?file=/src/Map.js
import React from 'react'
import {
    ImageOverlay,
    MapContainer,
    LayersControl,
    LayerGroup,
} from 'react-leaflet'
import { CRS } from 'leaflet'

export const MapUtil = () => {
    const position = [10, 10]
    const zoomLevel = 0
    const bounds = [
        [100, 0],
        [0, 100],
    ]
    const firstFloor = require('../../../static/assets/Map/karta Nymble_Floor 1 blank.png')
    const secondFloor = require('../../../static/assets/Map/Nymble_floor2.png')
    const thirdFloor = require('../../../static/assets/Map/karta Nymble_Floor 3 blank.png')

    return (
        <div>
            <MapContainer
                zoom={zoomLevel}
                center={position}
                doubleClickZoom={false}
                crs={CRS.Simple}
                bounds={bounds}
            >
                <LayersControl position='topright'>
                    <LayersControl.BaseLayer checked name='Floor 1'>
                        <LayerGroup>
                            <ImageOverlay
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url={firstFloor.default}
                                bounds={bounds}
                            />
                        </LayerGroup>
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer checked name='Floor 2'>
                        <LayerGroup>
                            <ImageOverlay
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url={secondFloor.default}
                                bounds={bounds}
                            />
                        </LayerGroup>
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer checked name='Floor 3'>
                        <LayerGroup>
                            <ImageOverlay
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url={thirdFloor.default}
                                bounds={bounds}
                            />
                        </LayerGroup>
                    </LayersControl.BaseLayer>
                </LayersControl>
            </MapContainer>
        </div>
    )
}

export default MapUtil
