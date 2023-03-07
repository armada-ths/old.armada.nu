import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './index.scss'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/assets/armada_marker_s.png',
    iconUrl: '/assets/armada_marker_s.png',
    shadowUrl: null,
    iconSize: new L.Point(25.5, 37.5),
})

const ContactMap = () => {
    return (
        <div>
            <div id='map-container'>
                <div id='map-info'>
                    <p id='map-text'>
                        Find us at
                        <br />
                        THS Kårhus, Nymble
                        <br />
                        Drottning Kristinas väg 15-19
                        <br />
                        114 28 Stockholm
                    </p>
                </div>
                <MapContainer
                    center={[59.34715, 18.067456]}
                    zoom={16}
                    zoomControl={false}
                >
                    <TileLayer
                        url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[59.347266, 18.070567]} />
                </MapContainer>
            </div>
        </div>
    )
}

export default ContactMap
