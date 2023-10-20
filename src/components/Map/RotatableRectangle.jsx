import React, { useRef, useState } from 'react'
import { Rectangle, MapContainer, TileLayer } from 'react-leaflet'

export function RotatableRectangle() {
    const rectangleRef = useRef()
    const [isDrawing, setIsDrawing] = useState(false)
    const [startAngle, setStartAngle] = useState(0)
    const [position, setPosition] = useState([0, 0])
    const [angle, setAngle] = useState(0)

    const handleMapClick = e => {
        if (!isDrawing) {
            setPosition([e.latlng.lat, e.latlng.lng])
            setIsDrawing(true)
        } else {
            setIsDrawing(false)
        }
    }

    const handleMouseMove = e => {
        if (isDrawing) {
            const deltaX = e.latlng.lng - position[1]
            const deltaY = e.latlng.lat - position[0]
            const newAngle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI
            const newPosX = position[1] + deltaX / 2
            const newPosY = position[0] + deltaY / 2
            setPosition([newPosY, newPosX])
            setAngle(newAngle)
        }
    }

    const handleMouseUp = () => {
        setIsDrawing(false)
    }

    return (
        <div>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                style={{ height: '400px', width: '400px' }}
                onClick={handleMapClick}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {isDrawing && (
                    <Rectangle
                        ref={rectangleRef}
                        bounds={[
                            position,
                            [position[0] + 0.02, position[1] + 0.04], // Adjust these values for your desired rectangle size
                        ]}
                        color='blue'
                        rotationAngle={angle - startAngle}
                    />
                )}
            </MapContainer>
        </div>
    )
}
