//https://codesandbox.io/s/react-leaflet-with-functional-components-and-imageoverlay-u225j?file=/src/Map.js
import React from 'react'
import {
    ImageOverlay,
    MapContainer,
    LayersControl,
    LayerGroup,
    Polygon,
} from 'react-leaflet'
import { CRS } from 'leaflet'
import { useState } from 'react'
import './index.scss'

/* Edited the center and position of the images so they align correctly with aspect ratio - Nima */
/* Added box to test the surfaces, Hampus&Nima */
export const MapUtil = () => {
    const position = [70, 100]
    const zoomLevel = 1
    const bounds = [
        [141.43, 0], //4962  ×  3509
        [0, 200],
    ]

    const surfaces = [
        {
            companyId: 'ica ab',
            positions: [
                [40, 40],
                [80, 40],
                [80, 80],
                [40, 80],
            ],
        },
    ]

    const firstFloor = require('../../../static/assets/Map/karta Nymble_Floor 1 blank.png')
    const secondFloor = require('../../../static/assets/Map/Nymble_floor2.png')
    const thirdFloor = require('../../../static/assets/Map/karta Nymble_Floor 3 blank.png')

    return (
        <div className='mapBox'>
            <MapContainer
                zoom={zoomLevel}
                center={position}
                doubleClickZoom={false}
                crs={CRS.Simple}
                bounds={bounds}
            >
                {/*                 <EventListener points={surfaces} setPoints={setSurfaces} />
                 */}{' '}
                {surfaces.map(surface => (
                    <Polygon
                        key={surface.companyId}
                        positions={surface.positions}
                        eventHandlers={{
                            click: () => {
                                console.log(surface.companyId)
                            },
                        }}
                    />
                ))}
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
