//https://codesandbox.io/s/react-leaflet-with-functional-components-and-imageoverlay-u225j?file=/src/Map.js
/*import React, { useRef, useEffect } from 'react'
import { Map } from 'react-leaflet'
import { CRS } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
export default () => {
    const mapRef = useRef(null)

    useEffect(() => {
        const map = mapRef.current.leafletElement
        const bounds = [
            [-26.5, -25],
            [1021.5, 1023],
        ]
        const image = L.imageOverlay(
            'https://i.imgur.com/Ion6X7C.jpg',
            bounds
        ).addTo(map)

        map.fitBounds(image.getBounds())
    }, [])

    return (
        <>
            <Map
                ref={mapRef}
                minZoom={0}
                crs={CRS.Simple}
                maxBoundsViscosity={1.0}
                boundsOptions={{ padding: [50, 50] }}
                style={{ height: '100vh' }}
            />
        </>
    )
}*/
