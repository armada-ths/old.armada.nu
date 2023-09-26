//https://codesandbox.io/s/react-leaflet-with-functional-components-and-imageoverlay-u225j?file=/src/Map.js
import React, { useEffect, useState, useRef, createContext } from 'react'
import {
    ImageOverlay,
    MapContainer,
    Marker,
    LayersControl,
    LayerGroup,
    Polygon,
    useMap,
    useMapEvent,
} from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import L from 'leaflet'
import { CRS } from 'leaflet'
import './index.scss'
import FloorSelector from './FloorSelector'
import { ExhibitorList, getExhibitors } from '../ExhibitorList'
//import ExhibitorList from '../ExhibitorList'
import FloorProvider from './FloorProvider'
import customIconImage from './customIcon.svg'
import { CoordinateEditor } from './CoordinateEditor'

export const ExtendedZoom = createContext(null)

function Internal() {
    const map = useMap()
    useMapEvent('resize', event => {
        //map.invalidateSize()
        //todo: change values to match screen change to mobile
        if (event.newSize.x < 1200) {
            map.setZoom(0.1) //zooms out when screen contracts
        } else {
            map.setZoom(0.5) //zooms in when screen expands
        }
    })
    return null
}

function handlePolygonSelect(ex) {
    const element = document.getElementById(ex.id)

    if (element) {
        // Get the position of the element relative to the viewport
        const elementPosition = element.getBoundingClientRect().top

        // Calculate the current scroll position and add the element position
        const offset = window.scrollY + elementPosition

        // Scroll to the element with a smooth behavior
        window.scrollTo({
            top: offset,
            behavior: 'smooth',
        })

        // element.style.backgroundColor = '#00d790';

        element.style.animation = 'dancingEffect 2s ease infinite'
        element.style.animation = 'dancingEffect 2s ease infinite'

        // Remove the dancing effect class after animation duration
        setTimeout(() => {
            element.style.animation = ''
        }, 3000) // Adjust the duration as needed
    }
}

function findMiddle(coordinates) {
    console.log('in find mid')
    console.log(coordinates)
    let max_x = 0
    let max_y = 0
    let min_x = 10000
    let min_y = 10000
    for (let i = 0; i < coordinates.length; i++) {
        if (coordinates[i][1] > max_x) {
            max_x = coordinates[i][1]
        }
        if (coordinates[i][0] > max_y) {
            max_y = coordinates[i][0]
        }
        if (coordinates[i][1] < min_x) {
            min_x = coordinates[i][1]
        }
        if (coordinates[i][0] < min_y) {
            min_y = coordinates[i][0]
        }
    }
    //check for biggest/smallest x and y coordinate

    let avg_x = min_x + (max_x - min_x) / 2
    let avg_y = min_y + (max_y - min_y) / 2
    //console.log(avg_y, avg_x)
    return [avg_y, avg_x]
}

function ZoomToComp({ mapRef, coordinates }) {
    mapRef.current?.flyTo(findMiddle(coordinates), 3) //higher second argument -> more zoom
}

function PassedZoom({ coordinates, mapRef }) {
    ZoomToComp({ mapRef, coordinates })
}

function customIcon(exhibitor) {
    let xIcon = 80
    let yIcon = 80
    let iconImage = exhibitor.logo_squared
    if (!iconImage) {
        iconImage = exhibitor.color
    }

    //console.log('this is icon')
    //console.log(iconImage)
    return L.icon({
        iconUrl: iconImage,

        iconSize: [xIcon, yIcon], // size of the icon
        //shadowSize: [50, 64], // size of the shadow
        iconAnchor: [xIcon / 2, yIcon], // point of the icon which will correspond to marker's location
        //shadowAnchor: [4, 62], // the same for the shadow
        //popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    })
}

/* Edited the center and position of the images so they align correctly with aspect ratio - Nima */
/* Added box to test the surfaces, Hampus&Nima */
export const MapUtil = () => {
    const mapRef = useRef(null)

    const [editorCoordinates, setEditorCoordinates] = useState([])

    const firstFloorNymble = require('../../../static/assets/Map/floor1-ntg.png')
    const secondFloorNymble = require('../../../static/assets/Map/floor2-ntg.png')
    const thirdFloorNymble = require('../../../static/assets/Map/floor3-ntg.png')

    const floorObj = {
        'Nymble - 1st Floor': firstFloorNymble,
        'Nymble - 2nd Floor': secondFloorNymble,
        'Nymble - 3rd Floor': thirdFloorNymble,
    }

    const [fairLocation, setFairLocation] = useState('Nymble - 2nd Floor')

    const [focusCoordinate, setFocusCoordinate] = useState(null) //placeholder value
    useEffect(() => {
        if (focusCoordinate != null) {
            ZoomToComp({ coordinates: focusCoordinate.coordinates, mapRef })
            const floor = focusCoordinate.floor //floor is an array
            if (!floor.includes(fairLocation)) {
                setFairLocation(floor[0]) //if the company in question is not on the same floor we already are looking at, go to ONE of it's other floors
            }
            setFocusCoordinate(null)
        }
    }, [focusCoordinate])
    //const [lang, setLang] = useState(0)
    //const [lat, setLat] = useState(0)

    //get exhibitors
    const [ExhibitorsForMap, setExhibitorsForMap] = useState([])

    useEffect(() => {
        getExhibitors(setExhibitorsForMap)
    }, [])
    let exhibitorsConst = ExhibitorsForMap

    //const height =
    const detailLvl = 600 //higher will lead to more resolution and require refactoring to remain full map in frame
    const zoomLevel = 2
    const bounds = [
        [(2500 / 5000) * detailLvl, 0], //4962  ×  3509
        [0, detailLvl],
    ]
    //Renders the list of exhibitors under the map.
    // //TODO: Make a component out of this if we decide to continue with this implementation
    // function exhibitorListRender(exhibitor) {
    //     return (
    //         <table>
    //             <tbody>
    //                 <tr id={exhibitor.id}>
    //                     <td>
    //                         <p>{exhibitor.name}</p>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //     )
    // }

    return (
        <div>
            <div className='mapBox'>
                {FloorSelector(setFairLocation, fairLocation)}
                <div>
                    <MapContainer
                        zoom={zoomLevel}
                        //center={position}
                        doubleClickZoom
                        crs={CRS.Simple}
                        bounds={bounds}
                        className='bigMap'
                        ref={mapRef}
                        maxZoom={5}
                        minZoom={0}
                    >
                        <Internal />
                        <CoordinateEditor
                            editorCoordinates={editorCoordinates}
                            setEditorCoordinates={setEditorCoordinates}
                        />
                        {/*                 <EventListener points={surfaces} setPoints={setSurfaces} />
                         */}
                        <MarkerClusterGroup chunkedLoading>
                            {exhibitorsConst.map(ex => {
                                let ifShowPolygon = false
                                ifShowPolygon =
                                    ex.fair_placement.includes(fairLocation) // if one is the exhibitors floors is matching with fairLocation then show that polygon

                                return (
                                    ifShowPolygon && (
                                        <Polygon
                                            key={ex.id}
                                            positions={ex.positions}
                                            color={ex.color}
                                            eventHandlers={{
                                                click: () =>
                                                    handlePolygonSelect(ex),
                                            }}
                                        >
                                            <Marker
                                                eventHandlers={{
                                                    click: () =>
                                                        handlePolygonSelect(ex),
                                                }}
                                                key={0}
                                                position={findMiddle(
                                                    ex.positions
                                                )}
                                                title={'ipsum'}
                                                icon={customIcon(ex)}
                                            ></Marker>
                                        </Polygon>
                                    )
                                )
                            })}
                        </MarkerClusterGroup>
                        {/*<LayersControl position='topright'>
                        <LayersControl.BaseLayer checked name='Floor 1'>
                        <LayerGroup> */}
                        <ImageOverlay
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url={floorObj[fairLocation].default}
                            bounds={bounds}
                        />
                        {/*</LayerGroup>
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
                    </LayersControl> */}
                    </MapContainer>
                </div>
            </div>
            {/* <div className='exhibitorList'>
                {<tbody>{exhibitorlist.map(exhibitorListRender)}</tbody>}
            </div> */}

            <ExtendedZoom.Provider value={setFocusCoordinate}>
                <ExhibitorList fairInputLocation={fairLocation} />
            </ExtendedZoom.Provider>
        </div>
    )
}

export default MapUtil
