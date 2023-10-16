import React from 'react'
import { Marker } from 'react-leaflet'
import L from 'leaflet'
import './index.scss'

const markerData = {
    entrance: {
        className: 'label',
        html: '<div class="label"><b>Entrance</b></div>',
    },
    nya_mat: {
        className: 'label',
        html: '<div class="label"><b>Nya Matsalen</b></div>',
    },
    gamla_mat: {
        className: 'label',
        html: '<div class="label"><b>Gamla Matsalen</b></div>',
    },
    susroom: {
        className: 'label',
        html: '<div class="label label-small"><b>Sustainability Room</b></div>',
    },
    hyllan: {
        className: 'label',
        html: '<div class="label"><b>Hyllan</b></div>',
    },
    gröten: {
        className: 'label',
        html: '<div class="label"><b>Gröten</b></div>',
    },
    div_room: {
        className: 'label',
        html: '<div class="label label-small"><b>Diversity Room</b></div>',
    },
    musik: {
        className: 'label',
        html: '<div class="label"><b>Musikrummet</b></div>',
    },
    ångdomen: {
        className: 'label',
        html: '<div class="label"><b>Entrance to Ångdomen</b></div>',
    },
}

const markersByFloor = {
    'Nymble - 2nd Floor': [
        { position: [143, 168.5], icon: markerData.entrance },
        { position: [293, 573], icon: markerData.nya_mat },
        { position: [344, 433], icon: markerData.gamla_mat },
        { position: [254, 412], icon: markerData.susroom },
        { position: [146, 581], icon: markerData.hyllan },
        { position: [162, 802], icon: markerData.gröten },
        { position: [413, 618], icon: markerData.div_room },
    ],
    'Nymble - 3rd Floor': [{ position: [251, 609], icon: markerData.musik }],
    'Nymble - 1st Floor': [
        { position: [150, 107], icon: markerData.entrance },
        { position: [281, 830.5], icon: markerData.entrance },
    ],
    'Library Main': [
        { position: [22, 249.5], icon: markerData.entrance },
        { position: [456, 175], icon: markerData.ångdomen },
    ],
}

const TooltipMarkers = ({ floor }) => {
    const floorMarkers = markersByFloor[floor] || []

    return (
        <>
            {floorMarkers.map((marker, index) => (
                <Marker
                    key={index}
                    position={marker.position}
                    icon={L.divIcon(marker.icon)}
                />
            ))}
        </>
    )
}

export default TooltipMarkers
