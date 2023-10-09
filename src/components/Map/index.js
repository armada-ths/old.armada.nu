//https://codesandbox.io/s/react-leaflet-with-functional-components-and-imageoverlay-u225j?file=/src/Map.js
import React, {
    useEffect,
    useState,
    useRef,
    createContext,
    useContext,
} from 'react'
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
import customIconImage from './customIcon.svg'
import { CoordinateEditor } from './CoordinateEditor'
import axios from 'axios'
import no_image from '../../../static/assets/armadalogogreen.jpg'

export const ExtendedZoom = createContext(null)
//Be advised: After extensive trial and error testing we couldn't get the exhibitors to move FROM ExhibitorList TO Map, so we do other way around

function checkListOfCoordinates(arr) {
    //console.log(typeof arr)
    if (arr !== null && typeof arr !== 'undefined') {
        if (arr.length > 2) {
            for (const subArray of arr) {
                if (subArray.length !== 2) {
                    return false
                } else {
                    if (
                        !(
                            typeof subArray[0] === 'number' &&
                            typeof subArray[1] === 'number'
                        )
                    ) {
                        return false
                    }
                }
            }
        } else {
            return false
        }
        return true
    } else {
        return false
    }
    return false
} //Used to check if the format of the coordinates are correct - We don't want some silly OTs to crash the page :)

function MapAPIFetch(setExhibitorsMap, colors) {
    const year = new Date().getFullYear().toString() //get 2023. If not 2023 we sad and display 2023 anyway
    const ais = 'https://ais.armada.nu/'
    const link =
        ais +
        `api/exhibitors?img alt=''_placeholder=true${
            year !== '2023' ? '&year=2023' : ''
        }`
    let exhibitors = ''

    axios.get(link).then(res => {
        console.log('Map has fetched company data')
        exhibitors = res.data
        exhibitors = exhibitors.filter(
            exhibitor =>
                checkListOfCoordinates(exhibitor.map_coordinates) &&
                exhibitor.fair_location.length > 0
        )
        exhibitors.forEach(ex => {
            ex.fair_placement = [ex.fair_location]
            if (ex.industries.length > 0) {
                ex.color = colors[ex.industries[0].name]
            } else {
                ex.color = '#fa0000'
            }
        })
        console.log('testytest')
        console.log(exhibitors)
        setExhibitorsMap(exhibitors)
    })
}

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
        iconImage = no_image
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
    const [exhibitorsMap, setExhibitorsMap] = useState([]) //used to move companies to ExhibitorList from Map

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

    const [fairLocation, setFairLocation] = useState('Nymble - 2nd Floor') //default location viewed

    useEffect(() => {
        MapAPIFetch(setExhibitorsMap, possibleColors, colors)
    }, [])

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

    //const height =
    const detailLvl = 600 //higher will lead to more resolution and require refactoring to remain full map in frame
    const zoomLevel = 2
    const bounds = [
        [(2500 / 5000) * detailLvl, 0], //4962  ×  3509
        [0, detailLvl],
    ]

    const possibleColors = [
        '#fafa00',
        '#00fafa',
        '#fa00fa',
        '#fafafa',
        '#00fa00',
        '#0000fa',
        '#fa0000',
        '##D84B20',
        '#F4A900',
        '#497E76',
        '#E55137',
        '#8673A1',
        '#1C542D',
    ]

    const colors = {
        Retail: possibleColors[10],
        Recruitment: possibleColors[1],
        Architecture: possibleColors[2],
        Automotive: possibleColors[3],
        'Environmental Sector': possibleColors[4],
        Pedagogy: possibleColors[12],
        'Web Development': possibleColors[5],
        'Solid Mechanics': possibleColors[7],
        'Simulation Technology': possibleColors[5],
        Pharmaceutical: possibleColors[0],
        Biotechnology: possibleColors[0],
        Acoustics: possibleColors[2],
        'Nuclear Power': possibleColors[7],
        'Fluid Mechanics': possibleColors[7],
        'Wood-Processing Industry': possibleColors[8],
        'Steel Industry': possibleColors[8],
        'Medical Technology': possibleColors[0],
        'Media Technology': possibleColors[5],
        'Marine System': possibleColors[9],
        'Manufacturing Industry': possibleColors[8],
        'Management Consulting': possibleColors[10],
        Insurance: possibleColors[10],
        Finance: possibleColors[10],
        Construction: possibleColors[8],
        Aerospace: possibleColors[7],
        'Logistics & Supply Chain': possibleColors[10],
        Telecommunication: possibleColors[5],
        Mechatronics: possibleColors[5],
        Electronics: possibleColors[5],
        'Material Development': possibleColors[8],
        'Energy Technology': possibleColors[4],
        Nanotechnology: possibleColors[8],
        Research: possibleColors[12],
        'Property & Infrastructure': possibleColors[11],
        'IT Infrastructure': possibleColors[5],
        'Software Development': possibleColors[5],
        Railway: possibleColors[8],
        'Product Development': possibleColors[10],
        'Interaction Design': possibleColors[5],
        'Industry Design': possibleColors[10],
    }

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

    //TODO, move to css
    const boxStyle = { width: '30px', height: '3    0px', textAlign: 'center' }

    return (
        <div>
            <div className='mapBox'>
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
                            {exhibitorsMap.map(ex => {
                                let ifShowPolygon = false
                                ifShowPolygon =
                                    ex.fair_placement.includes(fairLocation) // if one is the exhibitors floors is matching with fairLocation then show that polygon

                                return (
                                    ifShowPolygon && (
                                        <Polygon
                                            key={ex.id}
                                            positions={ex.map_coordinates}
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
                                                    ex.map_coordinates
                                                )}
                                                title={ex.name}
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
            <div
                style={{
                    background: 'red',
                    zIndex: '1',
                    position: 'absolute',
                    left: '40vw',
                }}
            >
                <div
                    style={boxStyle}
                    onClick={() => setFairLocation('Nymble - 1st Floor')}
                >
                    1
                </div>
                <div
                    style={boxStyle}
                    onClick={() => setFairLocation('Nymble - 2nd Floor')}
                >
                    2
                </div>
                <div
                    style={boxStyle}
                    onClick={() => setFairLocation('Nymble - 3rd Floor')}
                >
                    3
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
