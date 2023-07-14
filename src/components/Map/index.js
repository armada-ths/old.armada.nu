//https://codesandbox.io/s/react-leaflet-with-functional-components-and-imageoverlay-u225j?file=/src/Map.js
import React, { useRef, useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { CRS } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
const MapUtil = () => {
    var map = L.map('map', {
        crs: L.CRS.Simple,
    })
    var bounds = [
        [0, 0],
        [1000, 1000],
    ]
    var image = L.imageOverlay(
        './static/assets/Map/Nymble_floor2.png',
        bounds
    ).addTo(map)
    return (
        <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    )
}

export default MapUtil
