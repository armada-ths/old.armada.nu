import React, { useRef } from 'react'
import { Polygon, useMapEvent } from 'react-leaflet'
import { Marker, Tooltip } from 'react-leaflet'

export function CoordinateEditor({ editorCoordinates, setEditorCoordinates }) {
    const polyRef = useRef()
    useMapEvent('click', event => {
        // Exit if the click was on Polygon
        if (
            polyRef.current &&
            polyRef.current._containsPoint(event.containerPoint)
        )
            return

        const newCoordinates = [
            ...editorCoordinates,
            [event.latlng.lat, event.latlng.lng],
        ]
        setEditorCoordinates(newCoordinates)
        console.log(JSON.stringify(newCoordinates))
    })
    if (editorCoordinates.length === 0) return null
    if (editorCoordinates.length === 1)
        return <Marker position={editorCoordinates[0]} />

    return (
        <Polygon
            ref={polyRef}
            eventHandlers={{
                click: () => {
                    // Copy to clipboard the coordinates
                    navigator.clipboard.writeText(
                        JSON.stringify(editorCoordinates)
                    )
                },
            }}
            positions={[...editorCoordinates, editorCoordinates[0]]}
            color='#00d790'
        >
            <Tooltip direction='top'>Hello</Tooltip>
        </Polygon>
    )
}
