import React from 'react'
import { Marker } from 'react-leaflet'
import L from 'leaflet'

const TooltipMarkers = ({ floor }) => {
    //Toop tip markers bundled

    var entrance = L.divIcon({
        className: 'label',
        html: '<div class="label"><b>Entrance</b></div>',
    })
    var nya_mat = L.divIcon({
        className: 'label',
        html: '<div class="label"><b>Nya Matsalen</b></div>',
    })
    var gamla_mat = L.divIcon({
        className: 'label',
        html: '<div class="label"><b>Gamla Matsalen</b></div>',
    })
    var susroom = L.divIcon({
        className: 'label',
        html: '<div class="label label-small"><b>Sustainability Room</b></div>',
    })
    var hyllan = L.divIcon({
        className: 'label',
        html: '<div class="label"><b>Hyllan</b></div>',
    })
    var gröten = L.divIcon({
        className: 'label',
        html: '<div class="label"><b>Gröten</b></div>',
    })
    var div_room = L.divIcon({
        className: 'label',
        html: '<div class="label label-small"><b>Diversity Room</b></div>',
    })
    var musik = L.divIcon({
        className: 'label',
        html: '<div class="label"><b>Musikrummet</b></div>',
    })
    var entrance = L.divIcon({
        className: 'label',
        html: '<div class="label"><b>Entrance/Exit</b></div>',
    })
    var ångdomen = L.divIcon({
        className: 'label',
        html: '<div class="label"><b>Entrance to Ångdomen</b></div>',
    })
    if (floor === 'Nymble - 2nd Floor') {
        return (
            <>
                <Marker position={[143, 168.5]} icon={entrance}></Marker>{' '}
                {/*Entrance*/}
                <Marker position={[293, 573]} icon={nya_mat}></Marker>{' '}
                {/*Nya matsalen*/}
                <Marker position={[344, 433]} icon={gamla_mat}></Marker>{' '}
                {/*Gamla matsalen*/}
                <Marker position={[254, 412]} icon={susroom}></Marker>{' '}
                {/*Sustainability room*/}
                <Marker position={[146, 581]} icon={hyllan}></Marker>{' '}
                {/*Hyllan*/}
                <Marker position={[162, 802]} icon={gröten}></Marker>{' '}
                {/*Gröten*/}
                <Marker position={[413, 618]} icon={div_room}></Marker>{' '}
                {/*Diversity Room*/}
            </>
        )
    } else if (floor === 'Nymble - 3rd Floor') {
        return (
            <>
                <Marker position={[251, 609]} icon={musik}></Marker>{' '}
                {/*Musikrummet*/}
            </>
        )
    } else if (floor === 'Nymble - 1st Floor') {
        return (
            <>
                <Marker position={[150, 107]} icon={entrance}></Marker>{' '}
                {/*Entrance 1*/}
                <Marker position={[281, 830.5]} icon={entrance}></Marker>{' '}
                {/*Entrance 1*/}
            </>
        )
    } else if (floor === 'Library Main') {
        return (
            <>
                <Marker position={[22, 249.5]} icon={entrance}></Marker>{' '}
                {/*Entrance*/}
                <Marker position={[456, 175]} icon={ångdomen}></Marker>{' '}
                {/*Ångdomen*/}
            </>
        )
    } else {
        return <></>
    }
}

export default TooltipMarkers
