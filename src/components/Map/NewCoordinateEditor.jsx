import React, { useRef, useState } from 'react'
import { Rectangle, Polyline, useMapEvent, Tooltip } from 'react-leaflet'

export function NewCoordinateEditor({
    editorCoordinates,
    setEditorCoordinates,
}) {
    const polyRef = useRef()
    const [rectangleStart, setRectangleStart] = useState(null)
    const [lineCoordinates, setLineCoordinates] = useState(null)

    useMapEvent('click', event => {
        // Exit if the click was on Polygon
        if (
            polyRef.current &&
            polyRef.current._containsPoint(event.containerPoint)
        ) {
            return
        }

        if (!rectangleStart) {
            setRectangleStart([event.latlng.lat, event.latlng.lng])
        } else {
            // Create a rectangle using the starting point and the second click as the opposite corner
            const newCoordinates = [
                ...editorCoordinates,
                [
                    [event.latlng.lat, event.latlng.lng],
                    [rectangleStart[0], rectangleStart[1]], // Opposite corner
                ],
            ]

            setEditorCoordinates(newCoordinates)

            // Clear the starting point and the line
            setRectangleStart(null)
            setLineCoordinates(null)
        }
    })

    if (editorCoordinates.length === 0) return null

    return (
        <>
            {lineCoordinates && (
                <Polyline positions={lineCoordinates} color='blue' />
            )}
            {editorCoordinates.map((coords, index) => (
                <Rectangle
                    ref={polyRef}
                    key={index}
                    bounds={coords}
                    color='#00d790'
                    eventHandlers={{
                        click: () => {
                            // Copy to clipboard the coordinates
                            navigator.clipboard.writeText(
                                JSON.stringify(editorCoordinates)
                            )
                        },
                    }}
                >
                    <Tooltip direction='top'>Copy</Tooltip>
                </Rectangle>
            ))}
        </>
    )
}
