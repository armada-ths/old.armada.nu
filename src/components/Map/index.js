//https://codesandbox.io/s/react-leaflet-with-functional-components-and-imageoverlay-u225j?file=/src/Map.js
import React, {
  useEffect,
  useState,
  useRef,
  createContext,
  useContext,
} from "react";
import {
  ImageOverlay,
  MapContainer,
  Marker,
  LayersControl,
  LayerGroup,
  Polygon,
  useMap,
  useMapEvent,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import { CRS } from "leaflet";
import "./index.scss";
import { ExhibitorList, getExhibitors } from "../ExhibitorList";
import customIconImage from "./customIcon.svg";
import { CoordinateEditor } from "./CoordinateEditor";
import axios from "axios";
import no_image from "../../../static/assets/armada_marker.png";
import FloorButtons from "./FloorButtons";
import { ImHome } from "react-icons/im";
import { BsInfoCircle, BsInfoCircleFill } from "react-icons/bs";
import BuildingSwitch from "./BuildingSwitch";
import { build } from "joi";
import { useLocation } from "@reach/router";
import TooltipMarkers from "./TooltipMarkers";
import { NewCoordinateEditor } from "./NewCoordinateEditor";
import { ExhibitorRendering } from "./ExhibitorRendering";
import { findPolygonCenter } from "@/components/Map/find_polygon_center";
import { PlaceGoldFirst } from "@/templates/placeGoldFirst";

export const ExtendedZoom = createContext(null);
//Be advised: After extensive trial and error testing we couldn't get the exhibitors to move FROM ExhibitorList TO Map, so we do other way around

function checkListOfCoordinates(arr, name, place) {
  if (arr !== null && typeof arr !== "undefined") {
    //console.log(arr)
    if (arr.length >= 1) {
      //console.log('come past')
      for (const subArray of arr) {
        if (subArray.length !== 2) {
          return false;
        } else {
          //console.log('come past again')
          /* if (
                        !(
                            typeof subArray[0] === 'number' &&
                            typeof subArray[1] === 'number'
                        )
                    ) {
                        console.log('not a number')
                        console.log(arr)
                        return false
                    } */
        }
      }
    } else {
      console.log("not enough coordinates");
      console.log(arr.length);
      console.log(arr);
      return false;
    }
    //console.log("returning true");
    return true;
  } else {
    return false;
  }
  return false;
} //Used to check if the format of the coordinates are correct - We don't want some silly OTs to crash the page :)

function MapAPIFetch(setExhibitorsMap) {
  const year = new Date().getFullYear().toString(); //get 2023. If not 2023 we sad and display 2023 anyway
  const ais = "https://ais.armada.nu/";
  const link =
    ais +
    `api/exhibitors/?img alt=''_placeholder=true${
      year !== "2023" ? "&year=2023/" : "/"
    }`;

  axios.get(link).then((res) => {
    console.log("Map has fetched company data");
    let exhibitors = res.data;
    exhibitors = exhibitors.filter(
      (exhibitor) =>
        checkListOfCoordinates(
          exhibitor.map_coordinates,
          exhibitor.name,
          exhibitor.fair_location
        ) && exhibitor.fair_location.length > 0
    );

    exhibitors.forEach((ex) => {
      ex.fair_placement = [ex.fair_location];
      /*if (ex.industries.length > 0) {
                //console.log(ex.name + ' test test')
                //console.log(ex.industries)
                //console.log(typeof ex.industries[0].name + ' testtesttsts')
            } else {
                ex.color = '#fa0000'
            }*/
    });
    setExhibitorsMap(exhibitors);
  });
}

function Internal() {
  const map = useMap();
  useMapEvent("resize", (event) => {
    //map.invalidateSize()
    //todo: change values to match screen change to mobile
    if (event.newSize.x < 1200) {
      map.setZoom(0); //zooms out when screen contracts
    } else {
      map.setZoom(0.5); //zooms in when screen expands
    }
  });
  return null;
}

function ZoomToComp({ mapRef, coordinates }) {
  mapRef.current?.flyTo(findPolygonCenter(coordinates), 2); //higher second argument -> more zoom
}

function findMiddle(coordinates) {
  let max_x = 0;
  let max_y = 0;
  let min_x = 10000;
  let min_y = 10000;
  for (let i = 0; i < coordinates.length; i++) {
    if (coordinates[i][1] > max_x) {
      max_x = coordinates[i][1];
    }
    if (coordinates[i][0] > max_y) {
      max_y = coordinates[i][0];
    }
    if (coordinates[i][1] < min_x) {
      min_x = coordinates[i][1];
    }
    if (coordinates[i][0] < min_y) {
      min_y = coordinates[i][0];
    }
  }
  //check for biggest/smallest x and y coordinate

  let avg_x = min_x + (max_x - min_x) / 2;
  let avg_y = min_y + (max_y - min_y) / 2;
  //console.log(avg_y, avg_x)
  return [avg_y, avg_x];
}

function PassedZoom({ coordinates, mapRef }) {
  ZoomToComp({ mapRef, coordinates });
}

/* Edited the center and position of the images so they align correctly with aspect ratio - Nima */
/* Added box to test the surfaces, Hampus&Nima */
export const MapUtil = () => {
  function handlePolygonSelect(ex) {
    const element = document.getElementById(ex.id);
    setFocusedExName(ex.name);
    if (element) {
      element.style.backgroundColor = "#00d790";
    }
  }

  /*let url = useLocation() //get the url for customization params for example regarding QR codes
    url.search = url.search.trim()
    let locationFromUrl = ''
    if (url.search === '') {
        //if no search params are given, we use the default values
        locationFromUrl = 'Nymble - 2nd Floor'
    } else {
        url.search = url.search.replace('?', '')
        if (url.search.includes('floor=')) {
            const searchParams = url.search.split('=')
            locationFromUrl = searchParams[1].replace('%20', ' ')
            locationFromUrl = searchParams[1].replace('%22', ' ')
        } else {
            locationFromUrl = 'Nymble - 2nd Floor'
        }
    }
        console.log(locationFromUrl)

    Fix the url stuff later
    */
  const [exhibitorsMap, setExhibitorsMap] = useState([]); //used to move companies to ExhibitorList from Map
  const [devMode, setDevMode] = useState(false); //used to toggle devmode
  const [rectangleMode, setRectangleMode] = useState(false); //used to toggle rectangle mode
  const mapRef = useRef(null);
  const showDevTool = false;
  const [editorCoordinates, setEditorCoordinates] = useState([]);
  const [labels, showLabels] = useState(true);
  const [buttonPressed, setButtonPressed] = useState(2);

  const firstFloorNymble = require("../../../static/assets/Map/floor1-ntg.png");
  const secondFloorNymble = require("../../../static/assets/Map/floor2-ntg.png");
  const thirdFloorNymble = require("../../../static/assets/Map/floor3-ntg.png");
  const libraryMain = require("../../../static/assets/Map/KTHB.png");
  const libraryAngdomen = require("../../../static/assets/Map/KTHBÅng.png");

  const floorObj = {
    "Nymble - 1st Floor": firstFloorNymble,
    "Nymble - 2nd Floor": secondFloorNymble,
    "Nymble - 3rd Floor": thirdFloorNymble,
    "Library Main": libraryMain,
    "Library Ångdomen": libraryAngdomen,
  };

  const [fairLocation, setFairLocation] = useState("Nymble - 2nd Floor"); //default location viewed
  const [building, setBuilding] = useState("Nymble");
  const [focusedExName, setFocusedExName] = useState(undefined);

  useEffect(() => {
    MapAPIFetch(setExhibitorsMap);
  }, []);

  const [focusCoordinate, setFocusCoordinate] = useState(null); //placeholder value
  useEffect(() => {
    if (focusCoordinate != null) {
      const floor = focusCoordinate.floor; //floor is an array (with one item for now, temporary)
      if (!floor.includes(fairLocation)) {
        if (floor[0].includes("Library") && building !== "Library") {
          setBuilding("Library");
        } else if (floor[0].includes("Nymble") && building !== "Nymble") {
          setBuilding("Nymble");
        }
        setFairLocation(floor[0]); //if the company in question is not on the same floor we already are looking at, go to ONE of it's other floors
        setTimeout(() => {
          ZoomToComp({ coordinates: focusCoordinate.coordinates, mapRef });
        }, 20);
      } else {
        ZoomToComp({ coordinates: focusCoordinate.coordinates, mapRef });
      }
      setFocusCoordinate(null);
    }
  }, [focusCoordinate]);
  useEffect(() => {
    if (building === "Nymble") {
      mapRef.current?.setView([255, 500], -0.5);
    } else if (building === "Library") {
      mapRef.current.setView([200, 300], -0.5);
    } else {
      //error hamdling bad building
    }
  }, [building, mapRef]);
  //const [lang, setLang] = useState(0)
  //const [lat, setLat] = useState(0)
  // test

  const detailLvl = building === "Nymble" ? 1000 : 500; //higher will lead to more resolution and require refactoring to remain full map in frame
  const lBound = building === "Nymble" ? 1 : 2;
  const zoomLevel = 13;
  const bounds = [
    [(2500 / 5000) * detailLvl * lBound, 0], //4962  ×  3509
    [0, detailLvl],
  ];

  /*const colors = {
    "Retail": possibleColors[10],
    "Recruitment": possibleColors[1],
    "Architecture": possibleColors[2],
    "Automotive": possibleColors[3],
    "Environmental Sector": possibleColors[4],
    "Pedagogy": possibleColors[12],
    "Web Development": possibleColors[5],
    "Solid Mechanics": possibleColors[7],
    "Simulation Technology": possibleColors[5],
    "Pharmaceutical": possibleColors[0],
    "Biotechnology": possibleColors[0],
    "Acoustics": possibleColors[2],
    "Nuclear Power": possibleColors[7],
    "Fluid Mechanics": possibleColors[7],
    "Wood-Processing Industry": possibleColors[8],
    "Steel Industry": possibleColors[8],
    "Medical Technology": possibleColors[0],
    "Media Technology": possibleColors[5],
    "Marine System": possibleColors[9],
    "Manufacturing Industry": possibleColors[8],
    "Management Consulting": possibleColors[10],
    "Insurance": possibleColors[10],
    "Finance": possibleColors[10],
    "Construction": possibleColors[8],
    "Aerospace": possibleColors[7],
    "Logistics & Supply Chain": possibleColors[10],
    "Telecommunication": possibleColors[5],
    "Mechatronics": possibleColors[5],
    "Electronics": possibleColors[5],
    "Material Development": possibleColors[8],
    "Energy Technology": possibleColors[4],
    "Nanotechnology": possibleColors[8],
    "Research": possibleColors[12],
    "Property & Infrastructure": possibleColors[11],
    "IT Infrastructure": possibleColors[5],
    "Software Development": possibleColors[5],
    "Railway": possibleColors[8],
    "Product Development": possibleColors[10],
    "Interaction Design": possibleColors[5],
    "Industry Design": possibleColors[10],
  };*/

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        overflowY: "hidden",
      }}
    >
      <div style={{ overflowY: "hidden" }}>
        <div className="mapBox">
          <div className="mapBoxFloatingContainer">
            <div /> {/* Filler div to take up the first slot in the grid */}
            <BuildingSwitch
              setFairLocation={setFairLocation}
              setBuilding={setBuilding}
              building={building}
              setButtonPressed={setButtonPressed}
            />
            <FloorButtons
              setFairLocation={setFairLocation}
              showDevTool={false}
              devMode={devMode}
              setDevMode={setDevMode}
              building={building}
              setEditorCoordinates={setEditorCoordinates}
              setRectangleMode={setRectangleMode}
              rectangleMode={rectangleMode}
              buttonPressed={buttonPressed}
              setButtonPressed={setButtonPressed}
            />
          </div>

          {/*           <a className="homeIcon" href="/" aria-label="Button to go to home">
            <ImHome id="icon" />
          </a> */}
          {/* <div
            className="homeIcon infoIcon"
            onClick={() => showLabels(!labels)}
            aria-label="Button to go to show labels"
          >
            {labels ? (
              <BsInfoCircleFill id="icon" />
            ) : (
              <BsInfoCircle id="icon" />
            )}
          </div> */}
          <div>
            <MapContainer
              zoom={zoomLevel}
              //center={position}
              zoomControl={false}
              doubleClickZoom
              crs={CRS.Simple}
              bounds={bounds}
              className="bigMap"
              ref={mapRef}
              maxZoom={5}
              minZoom={-1}
              scrollWheelZoom={true}
              tap={true}
            >
              <p className="disclaimerInfo">Armada Map - Alpha v.1.0.2</p>
              <Internal />
              {devMode &&
                (rectangleMode ? (
                  <NewCoordinateEditor
                    editorCoordinates={editorCoordinates}
                    setEditorCoordinates={setEditorCoordinates}
                    mapRef={mapRef}
                  />
                ) : (
                  <CoordinateEditor
                    editorCoordinates={editorCoordinates}
                    setEditorCoordinates={setEditorCoordinates}
                  />
                ))}
              {/*                 <EventListener points={surfaces} setPoints={setSurfaces} />
               */}
              {/* For more info about marker cluster options: https://akursat.gitbook.io/marker-cluster/api */}
              <MarkerClusterGroup
                chunkedLoading
                showCoverageOnHover
                spiderLegPolylineOptions={{
                  opacity: 0,
                }}
              >
                <ExhibitorRendering
                  fairLocation={fairLocation}
                  exhibitorMap={exhibitorsMap}
                  handlePolygonSelect={handlePolygonSelect}
                />
              </MarkerClusterGroup>
              {labels && <TooltipMarkers floor={fairLocation} />}
              <ImageOverlay
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
          <ExhibitorList
            fairInputLocation={fairLocation}
            fairInputExhibitors={exhibitorsMap}
            showCV={true}
            exhibitorName={focusedExName}
          />
        </ExtendedZoom.Provider>
      </div>
    </div>
  );
};

export default MapUtil;
