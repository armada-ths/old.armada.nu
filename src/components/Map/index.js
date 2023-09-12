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
import ExhibitorList from '../ExhibitorList'
import FloorProvider from './FloorProvider'
import customIconImage from './customIcon.svg'

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
    console.log(avg_y, avg_x)
    return [avg_y, avg_x]
}

function ZoomToComp({ mapRef, coordinates }) {
    mapRef.current?.flyTo(findMiddle(coordinates), 5)
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

    console.log('this is icon')
    console.log(iconImage)
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

    const firstFloorNymble = require('../../../static/assets/Map/karta Nymble_Floor 1 blank.png')
    const secondFloorNymble = require('../../../static/assets/Map/Nymble_floor2.png')
    const thirdFloorNymble = require('../../../static/assets/Map/karta Nymble_Floor 3 blank.png')

    const floorObj = {
        'Nymble - 1st Floor': firstFloorNymble,
        'Nymble - 2nd Floor': secondFloorNymble,
        'Nymble - 3rd Floor': thirdFloorNymble,
    }

    const [fairLocation, setFairLocation] = useState('Nymble - 2nd Floor')

    const [focusCoordinate, setFocusCoordinate] = useState([[50, 50]]) //placeholder values
    useEffect(() => {
        ZoomToComp({ coordinates: focusCoordinate, mapRef })
        //console.log(focusCoordinate)
    }, [focusCoordinate])
    //const [lang, setLang] = useState(0)
    //const [lat, setLat] = useState(0)

    let exhibitorsConst = [
        {
            id: 1152,
            name: 'ASSA ABLOY Group',
            type: 'Company',
            company_website: 'http://www.assaabloy.com',
            about: 'Every day, we help billions of people move through a safer, more open world with ease. If you’ve ever walked through an automatic door, stayed in a hotel, or gone through passport control, you’ve probably used one of our products or services.  \r\nWe are specialists in access essentials: like mechanical and digital locks, cylinders, keys, tags, security doors and automated entrances. At the same time, we are creating and embracing new technology – like biometrics, mobile security, and trusted identities. We stay at the forefront, so whatever you need, you’re in safe hands.',
            purpose: null,
            logo_squared:
                'https://play-lh.googleusercontent.com/y0h7lgmJn73vEyYJg8vXXzXzr0Ls13gHfIFa-yTVJuje8B9rPNygJo5Gsc4Ve8dRcQ',
            logo_freesize:
                'https://armada-ais-files.s3.amazonaws.com/exhibitors/catalogue_logo_freesize/322ec24778f14c9381b007d6c935b2d8.tif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAYUFGGRQOFEB7UH62%2F20230808%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20230808T180138Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA9Sus8hNJcyAhzcUlIOvQrlxs2ihgtCwiJM%2B%2FPAYcrJYCIQDlaDTtmfcDv4v8c8i9T7OxB8ntH8HU4hDgdrvc8omJgyrxBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5MzA1NDA0MzE2NCIMIbJbgOZSH9XpSeUfKsUE2GM5xqkLWnq4s9St5s8hish1CF1E12PxlFLWb8VCl%2BjMzt4MwjOVT2wZgs4m%2FrTnC4cxLEwEQ0%2FreffqQtnYYRESp2eoiJWDQ3kCnEmwGkY%2BYKahskIwh0tCafvKqg%2BpBnveSp5xAoIX0YFI3lu8T7I3XJupKcG67XCklyCR%2FA3jxQpTHlsc4WB7HM4hg3MfWu%2BPyLPqAif2NxThKfJ1pyOQV1bUIu3xSM6ggeEQ9%2FNvPiA1HJfpcCmGht4tfBUDpLK9krslD1wuk7LPts9yJEtXlvv2idJZq%2Foy8cIzlA%2BuMc%2FwfXLdxyiuGi%2FXT4uOSg8qPkZ6AcaNSOID%2FZeZLxEbS%2BwQ1j2F3V8N%2BLVBsk12sQo64EeKFXWGbYqCF8EfEKj3MWqc%2Fxd266WW4eVcnI92bZa7LIjpkwFTxiosqGwD5T3PxZmE0JbSVukzQ7fTyYY0fOLRHehK%2FvddRZCo14FXNJbLlxEjSs5mDtkSVeK0JW2Q%2BFeLOvDqUtHy7U4T36aeZN%2BRYTtPj47uvZhOACpoo3xQot%2BiQHsBXw6T3MI%2FIjSeh%2ByGCr0wgHGV8Xy2ypzpBOzcqs3wxmL1SBaBuulnvKDT7bnGfK4BiS3LnHf5eykQZT8Shm9J5seCUMdD6UoPtzdn2qxUC5z2CkARMv7s%2Fd7hbomk%2BuhVFqe2OuHSzy6BG0bP99V8RJZlJlKoNLJMDfay%2F1O7qx2kCxs5NP2wIDYn3%2BOm6%2B9vDJfUtPIToNtigOXMM%2FQF4D%2FKXKZzxFdMtNQw0LDJpgY6pgEqZlHjoKEGPudqIZ6rBe70WXInTihM%2FF4fgJBCDjwLBPTfUqN3o80MJvpr3rEzY8JcLUbr0OgubvQ2Nm%2BKSmu6ShbdL%2Bb17nhWENkyithI3Be2oUaIziwWq6FBwSW1RDpAHSUzDwB%2B4hJTy9tY0m%2FZTTFTbhHiXPw%2FGYAiGDCxEDHFunZuoyR%2FhXZ9cBoBFx%2BuWjV1CXpI%2BEDw5t2rRkqi8LTibUc3&X-Amz-Signature=dad7f510d6a8df9e2d5829e9a43f9de0afbc3dc6761e090a6529a183cfbbe8a3',
            contact_name: 'Naomi Korang',
            contact_email_address: 'naomi.korang@assaabloy.com',
            contact_phone_number: '+46739045323',
            fair_placement: ['Nymble - 1st Floor'],
            color: '#fafa00',
            positions: [
                [140, 120],
                [145, 122],
                [147, 116],
                [142, 114],
            ],
        },
        {
            id: 1153,
            name: 'Academic Work',
            type: 'Company',
            company_website: 'http://www.academicwork.se',
            about: 'Academic Work är ett av de största bemannings- och rekryteringsföretagen på tjänstemannasidan i Sverige. Vi hjälper akademiker - young professionals som fortfarande studerar eller som är i början av karriären att hitta sitt drömjobb. Academic Work startades av tre studenter som levde sin egen affärsidé. Nu är vi en internationell verksamhet där young professionals påbörjar sina karriärer, varje dag.',
            purpose: null,
            logo_squared:
                'https://public.flourish.studio/uploads/8fd16ce8-efe5-45cb-b668-8ad4ca5e8af4.png',
            logo_freesize:
                'https://armada-ais-files.s3.amazonaws.com/exhibitors/catalogue_logo_freesize/c63ecef9283f4e7c814339acd272a59a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAYUFGGRQOFEB7UH62%2F20230808%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20230808T180138Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA9Sus8hNJcyAhzcUlIOvQrlxs2ihgtCwiJM%2B%2FPAYcrJYCIQDlaDTtmfcDv4v8c8i9T7OxB8ntH8HU4hDgdrvc8omJgyrxBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5MzA1NDA0MzE2NCIMIbJbgOZSH9XpSeUfKsUE2GM5xqkLWnq4s9St5s8hish1CF1E12PxlFLWb8VCl%2BjMzt4MwjOVT2wZgs4m%2FrTnC4cxLEwEQ0%2FreffqQtnYYRESp2eoiJWDQ3kCnEmwGkY%2BYKahskIwh0tCafvKqg%2BpBnveSp5xAoIX0YFI3lu8T7I3XJupKcG67XCklyCR%2FA3jxQpTHlsc4WB7HM4hg3MfWu%2BPyLPqAif2NxThKfJ1pyOQV1bUIu3xSM6ggeEQ9%2FNvPiA1HJfpcCmGht4tfBUDpLK9krslD1wuk7LPts9yJEtXlvv2idJZq%2Foy8cIzlA%2BuMc%2FwfXLdxyiuGi%2FXT4uOSg8qPkZ6AcaNSOID%2FZeZLxEbS%2BwQ1j2F3V8N%2BLVBsk12sQo64EeKFXWGbYqCF8EfEKj3MWqc%2Fxd266WW4eVcnI92bZa7LIjpkwFTxiosqGwD5T3PxZmE0JbSVukzQ7fTyYY0fOLRHehK%2FvddRZCo14FXNJbLlxEjSs5mDtkSVeK0JW2Q%2BFeLOvDqUtHy7U4T36aeZN%2BRYTtPj47uvZhOACpoo3xQot%2BiQHsBXw6T3MI%2FIjSeh%2ByGCr0wgHGV8Xy2ypzpBOzcqs3wxmL1SBaBuulnvKDT7bnGfK4BiS3LnHf5eykQZT8Shm9J5seCUMdD6UoPtzdn2qxUC5z2CkARMv7s%2Fd7hbomk%2BuhVFqe2OuHSzy6BG0bP99V8RJZlJlKoNLJMDfay%2F1O7qx2kCxs5NP2wIDYn3%2BOm6%2B9vDJfUtPIToNtigOXMM%2FQF4D%2FKXKZzxFdMtNQw0LDJpgY6pgEqZlHjoKEGPudqIZ6rBe70WXInTihM%2FF4fgJBCDjwLBPTfUqN3o80MJvpr3rEzY8JcLUbr0OgubvQ2Nm%2BKSmu6ShbdL%2Bb17nhWENkyithI3Be2oUaIziwWq6FBwSW1RDpAHSUzDwB%2B4hJTy9tY0m%2FZTTFTbhHiXPw%2FGYAiGDCxEDHFunZuoyR%2FhXZ9cBoBFx%2BuWjV1CXpI%2BEDw5t2rRkqi8LTibUc3&X-Amz-Signature=cdcddf77eec23baf26c276a6fa91a47951dbb551f21f396e896acba840278756',
            contact_name: null,
            contact_email_address: null,
            contact_phone_number: null,
            fair_placement: ['Nymble - 1st Floor'],
            color: '#0000ff',
            positions: [
                [142, 114],
                [140, 120],
                [135, 118],
                [137, 112],
            ],
        },
        {
            id: 1151,
            name: 'AP-fonderna',
            type: 'Government agency',
            company_website: 'http://www.apfonderna.se/',
            about: 'The Swedish National Pension Funds are knowledge driven organizations offering both management and employees a stimulating working environment. In close collaboration with external parties, as well as coworkers, you have the opportunity for personal development and building your specialist knowledge.\r\n\r\nFundamental and quantitative analysis of risk and sustainability is well integrated within the investment process, contributing to long term first class returns.\r\n\r\nThe funds are between themselves 330 employees with total AUM of roughly 2’700 billion SEK.',
            purpose: null,
            logo_squared:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQjIrKL60C2QjbkBuHhzsRovPBhhRwLQG8AgJDvnHtMdwke-3Fo4ZlE0hlJQjNgtqDFs&usqp=CAU',
            logo_freesize:
                'https://armada-ais-files.s3.amazonaws.com/exhibitors/catalogue_logo_freesize/c8a799962c704bbf8d49ffc543108e07.PNG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAYUFGGRQOFEB7UH62%2F20230808%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20230808T180138Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA9Sus8hNJcyAhzcUlIOvQrlxs2ihgtCwiJM%2B%2FPAYcrJYCIQDlaDTtmfcDv4v8c8i9T7OxB8ntH8HU4hDgdrvc8omJgyrxBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5MzA1NDA0MzE2NCIMIbJbgOZSH9XpSeUfKsUE2GM5xqkLWnq4s9St5s8hish1CF1E12PxlFLWb8VCl%2BjMzt4MwjOVT2wZgs4m%2FrTnC4cxLEwEQ0%2FreffqQtnYYRESp2eoiJWDQ3kCnEmwGkY%2BYKahskIwh0tCafvKqg%2BpBnveSp5xAoIX0YFI3lu8T7I3XJupKcG67XCklyCR%2FA3jxQpTHlsc4WB7HM4hg3MfWu%2BPyLPqAif2NxThKfJ1pyOQV1bUIu3xSM6ggeEQ9%2FNvPiA1HJfpcCmGht4tfBUDpLK9krslD1wuk7LPts9yJEtXlvv2idJZq%2Foy8cIzlA%2BuMc%2FwfXLdxyiuGi%2FXT4uOSg8qPkZ6AcaNSOID%2FZeZLxEbS%2BwQ1j2F3V8N%2BLVBsk12sQo64EeKFXWGbYqCF8EfEKj3MWqc%2Fxd266WW4eVcnI92bZa7LIjpkwFTxiosqGwD5T3PxZmE0JbSVukzQ7fTyYY0fOLRHehK%2FvddRZCo14FXNJbLlxEjSs5mDtkSVeK0JW2Q%2BFeLOvDqUtHy7U4T36aeZN%2BRYTtPj47uvZhOACpoo3xQot%2BiQHsBXw6T3MI%2FIjSeh%2ByGCr0wgHGV8Xy2ypzpBOzcqs3wxmL1SBaBuulnvKDT7bnGfK4BiS3LnHf5eykQZT8Shm9J5seCUMdD6UoPtzdn2qxUC5z2CkARMv7s%2Fd7hbomk%2BuhVFqe2OuHSzy6BG0bP99V8RJZlJlKoNLJMDfay%2F1O7qx2kCxs5NP2wIDYn3%2BOm6%2B9vDJfUtPIToNtigOXMM%2FQF4D%2FKXKZzxFdMtNQw0LDJpgY6pgEqZlHjoKEGPudqIZ6rBe70WXInTihM%2FF4fgJBCDjwLBPTfUqN3o80MJvpr3rEzY8JcLUbr0OgubvQ2Nm%2BKSmu6ShbdL%2Bb17nhWENkyithI3Be2oUaIziwWq6FBwSW1RDpAHSUzDwB%2B4hJTy9tY0m%2FZTTFTbhHiXPw%2FGYAiGDCxEDHFunZuoyR%2FhXZ9cBoBFx%2BuWjV1CXpI%2BEDw5t2rRkqi8LTibUc3&X-Amz-Signature=3c2bc97d8da9cc526bd42e275404ab66c888d0fe246aacc662d9eb46dfdbb939',
            contact_name: 'Oscar Blomquist',
            contact_email_address: 'oscar.blomquist@ap4.se',
            contact_phone_number: '+4687877507',
            fair_placement: ['Nymble - 2nd Floor'],
            color: '#00ffff',
            positions: [
                [255, 105],
                [254, 102],
                [252, 98],
                [252, 110],
                [256, 110],
            ],
        },
        {
            id: 1148,
            name: 'ABB',
            type: 'Company',
            company_website: 'http://www.abb.se',
            about: 'ABB is a leading global technology company that energizes the transformation of society and industry to achieve a more productive, sustainable future. By connecting software to its electrification, robotics, automation and motion portfolio, ABB pushes the boundaries of technology to drive performance to new levels. With a history of excellence stretching back more than 130 years, ABB’s success is driven by about 105,000 talented employees in over 100 countries',
            purpose: null,
            logo_squared:
                'https://www.momentkth.se/wp-content/uploads/2023/01/Untitled_Artwork-2.jpg',
            logo_freesize:
                'https://armada-ais-files.s3.amazonaws.com/exhibitors/catalogue_logo_freesize/4d9a36497e1b4178a67d4e26e4173d23.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAYUFGGRQOFEB7UH62%2F20230808%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20230808T180138Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA9Sus8hNJcyAhzcUlIOvQrlxs2ihgtCwiJM%2B%2FPAYcrJYCIQDlaDTtmfcDv4v8c8i9T7OxB8ntH8HU4hDgdrvc8omJgyrxBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5MzA1NDA0MzE2NCIMIbJbgOZSH9XpSeUfKsUE2GM5xqkLWnq4s9St5s8hish1CF1E12PxlFLWb8VCl%2BjMzt4MwjOVT2wZgs4m%2FrTnC4cxLEwEQ0%2FreffqQtnYYRESp2eoiJWDQ3kCnEmwGkY%2BYKahskIwh0tCafvKqg%2BpBnveSp5xAoIX0YFI3lu8T7I3XJupKcG67XCklyCR%2FA3jxQpTHlsc4WB7HM4hg3MfWu%2BPyLPqAif2NxThKfJ1pyOQV1bUIu3xSM6ggeEQ9%2FNvPiA1HJfpcCmGht4tfBUDpLK9krslD1wuk7LPts9yJEtXlvv2idJZq%2Foy8cIzlA%2BuMc%2FwfXLdxyiuGi%2FXT4uOSg8qPkZ6AcaNSOID%2FZeZLxEbS%2BwQ1j2F3V8N%2BLVBsk12sQo64EeKFXWGbYqCF8EfEKj3MWqc%2Fxd266WW4eVcnI92bZa7LIjpkwFTxiosqGwD5T3PxZmE0JbSVukzQ7fTyYY0fOLRHehK%2FvddRZCo14FXNJbLlxEjSs5mDtkSVeK0JW2Q%2BFeLOvDqUtHy7U4T36aeZN%2BRYTtPj47uvZhOACpoo3xQot%2BiQHsBXw6T3MI%2FIjSeh%2ByGCr0wgHGV8Xy2ypzpBOzcqs3wxmL1SBaBuulnvKDT7bnGfK4BiS3LnHf5eykQZT8Shm9J5seCUMdD6UoPtzdn2qxUC5z2CkARMv7s%2Fd7hbomk%2BuhVFqe2OuHSzy6BG0bP99V8RJZlJlKoNLJMDfay%2F1O7qx2kCxs5NP2wIDYn3%2BOm6%2B9vDJfUtPIToNtigOXMM%2FQF4D%2FKXKZzxFdMtNQw0LDJpgY6pgEqZlHjoKEGPudqIZ6rBe70WXInTihM%2FF4fgJBCDjwLBPTfUqN3o80MJvpr3rEzY8JcLUbr0OgubvQ2Nm%2BKSmu6ShbdL%2Bb17nhWENkyithI3Be2oUaIziwWq6FBwSW1RDpAHSUzDwB%2B4hJTy9tY0m%2FZTTFTbhHiXPw%2FGYAiGDCxEDHFunZuoyR%2FhXZ9cBoBFx%2BuWjV1CXpI%2BEDw5t2rRkqi8LTibUc3&X-Amz-Signature=b5cdc78320188baecab9759ef8ee60fe79239e60997bdac9b226f7ff27498a80',
            contact_name: 'careers.abb',
            contact_email_address: null,
            contact_phone_number: null,
            location: 'Nymble',
            fair_placement: ['Nymble - 1st Floor'],
            color: '#FF0000',
            positions: [
                [230, 114],
                [228, 120],
                [223, 118],
                [225, 112],
            ],
        },
        {
            id: 1231,
            name: 'AFRY (previously ÅF)',
            type: 'Company',
            company_website: 'https://afry.com/en',
            about: 'AFRY is a European leader in engineering, design, and advisory services, with a global reach. We accelerate the transition towards a sustainable society.\r\n\r\nWe are 16,000 devoted experts in infrastructure, industry, energy and digitalisation, creating sustainable solutions for generations to come.\r\n\r\nDespite our long history as a company, we believe that it is our focus on the future that attracts junior talents. At AFRY, you contribute to a higher purpose by developing sustainable technology and design solutions. Sustainability is a central part of our vision and business strategy.',
            purpose: null,
            logo_squared:
                'https://media.licdn.com/dms/image/C4E0BAQEAgsyITXhuBw/company-logo_200_200/0/1620674709599?e=2147483647&v=beta&t=ydeH7RqhWICwEETBnAHzEI7Z0X0WMAC2L3z_n_7Frl4',
            logo_freesize:
                'https://armada-ais-files.s3.amazonaws.com/exhibitors/catalogue_logo_freesize/5a24f69432b0432ba6aa38607a69e745.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAYUFGGRQOFEB7UH62%2F20230808%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20230808T180138Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA9Sus8hNJcyAhzcUlIOvQrlxs2ihgtCwiJM%2B%2FPAYcrJYCIQDlaDTtmfcDv4v8c8i9T7OxB8ntH8HU4hDgdrvc8omJgyrxBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5MzA1NDA0MzE2NCIMIbJbgOZSH9XpSeUfKsUE2GM5xqkLWnq4s9St5s8hish1CF1E12PxlFLWb8VCl%2BjMzt4MwjOVT2wZgs4m%2FrTnC4cxLEwEQ0%2FreffqQtnYYRESp2eoiJWDQ3kCnEmwGkY%2BYKahskIwh0tCafvKqg%2BpBnveSp5xAoIX0YFI3lu8T7I3XJupKcG67XCklyCR%2FA3jxQpTHlsc4WB7HM4hg3MfWu%2BPyLPqAif2NxThKfJ1pyOQV1bUIu3xSM6ggeEQ9%2FNvPiA1HJfpcCmGht4tfBUDpLK9krslD1wuk7LPts9yJEtXlvv2idJZq%2Foy8cIzlA%2BuMc%2FwfXLdxyiuGi%2FXT4uOSg8qPkZ6AcaNSOID%2FZeZLxEbS%2BwQ1j2F3V8N%2BLVBsk12sQo64EeKFXWGbYqCF8EfEKj3MWqc%2Fxd266WW4eVcnI92bZa7LIjpkwFTxiosqGwD5T3PxZmE0JbSVukzQ7fTyYY0fOLRHehK%2FvddRZCo14FXNJbLlxEjSs5mDtkSVeK0JW2Q%2BFeLOvDqUtHy7U4T36aeZN%2BRYTtPj47uvZhOACpoo3xQot%2BiQHsBXw6T3MI%2FIjSeh%2ByGCr0wgHGV8Xy2ypzpBOzcqs3wxmL1SBaBuulnvKDT7bnGfK4BiS3LnHf5eykQZT8Shm9J5seCUMdD6UoPtzdn2qxUC5z2CkARMv7s%2Fd7hbomk%2BuhVFqe2OuHSzy6BG0bP99V8RJZlJlKoNLJMDfay%2F1O7qx2kCxs5NP2wIDYn3%2BOm6%2B9vDJfUtPIToNtigOXMM%2FQF4D%2FKXKZzxFdMtNQw0LDJpgY6pgEqZlHjoKEGPudqIZ6rBe70WXInTihM%2FF4fgJBCDjwLBPTfUqN3o80MJvpr3rEzY8JcLUbr0OgubvQ2Nm%2BKSmu6ShbdL%2Bb17nhWENkyithI3Be2oUaIziwWq6FBwSW1RDpAHSUzDwB%2B4hJTy9tY0m%2FZTTFTbhHiXPw%2FGYAiGDCxEDHFunZuoyR%2FhXZ9cBoBFx%2BuWjV1CXpI%2BEDw5t2rRkqi8LTibUc3&X-Amz-Signature=6ed69eca010416c848715526356f60cc7d802f6baeb8dab2f75d02de958a78ab',
            contact_name: null,
            contact_email_address: 'student@afry,com',
            contact_phone_number: null,
            location: 'Nymble',
            fair_placement: ['Nymble - 1st Floor'],
            color: '#008000',
            positions: [
                [237, 114],
                [235, 120],
                [230, 118],
                [232, 112],
            ],
        },
        {
            id: 1242,
            name: 'Accenture',
            type: 'Company',
            company_website: 'http://www.accenture.se',
            about: 'Accenture is a global professional services company with leading capabilities in digital, cloud and security. Combining unmatched experience and specialized skills across more than 40 industries, we offer Strategy and Consulting, Technology and Operations services and Accenture Song — all powered by the world’s largest network of Advanced Technology and Intelligent Operations centers. Our 710,000 people deliver on the promise of technology and human ingenuity every day, serving clients in more than 120 countries.',
            purpose: null,
            logo_squared:
                'https://banner2.cleanpng.com/20180427/tdw/kisspng-accenture-symbol-logo-management-consulting-high-intelligence-5ae346bf53e324.0577692915248442233436.jpg',
            logo_freesize:
                'https://armada-ais-files.s3.amazonaws.com/exhibitors/catalogue_logo_freesize/60e17b57f8f84fdabac18268d12ec5b8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAYUFGGRQOFEB7UH62%2F20230808%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20230808T180138Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA9Sus8hNJcyAhzcUlIOvQrlxs2ihgtCwiJM%2B%2FPAYcrJYCIQDlaDTtmfcDv4v8c8i9T7OxB8ntH8HU4hDgdrvc8omJgyrxBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5MzA1NDA0MzE2NCIMIbJbgOZSH9XpSeUfKsUE2GM5xqkLWnq4s9St5s8hish1CF1E12PxlFLWb8VCl%2BjMzt4MwjOVT2wZgs4m%2FrTnC4cxLEwEQ0%2FreffqQtnYYRESp2eoiJWDQ3kCnEmwGkY%2BYKahskIwh0tCafvKqg%2BpBnveSp5xAoIX0YFI3lu8T7I3XJupKcG67XCklyCR%2FA3jxQpTHlsc4WB7HM4hg3MfWu%2BPyLPqAif2NxThKfJ1pyOQV1bUIu3xSM6ggeEQ9%2FNvPiA1HJfpcCmGht4tfBUDpLK9krslD1wuk7LPts9yJEtXlvv2idJZq%2Foy8cIzlA%2BuMc%2FwfXLdxyiuGi%2FXT4uOSg8qPkZ6AcaNSOID%2FZeZLxEbS%2BwQ1j2F3V8N%2BLVBsk12sQo64EeKFXWGbYqCF8EfEKj3MWqc%2Fxd266WW4eVcnI92bZa7LIjpkwFTxiosqGwD5T3PxZmE0JbSVukzQ7fTyYY0fOLRHehK%2FvddRZCo14FXNJbLlxEjSs5mDtkSVeK0JW2Q%2BFeLOvDqUtHy7U4T36aeZN%2BRYTtPj47uvZhOACpoo3xQot%2BiQHsBXw6T3MI%2FIjSeh%2ByGCr0wgHGV8Xy2ypzpBOzcqs3wxmL1SBaBuulnvKDT7bnGfK4BiS3LnHf5eykQZT8Shm9J5seCUMdD6UoPtzdn2qxUC5z2CkARMv7s%2Fd7hbomk%2BuhVFqe2OuHSzy6BG0bP99V8RJZlJlKoNLJMDfay%2F1O7qx2kCxs5NP2wIDYn3%2BOm6%2B9vDJfUtPIToNtigOXMM%2FQF4D%2FKXKZzxFdMtNQw0LDJpgY6pgEqZlHjoKEGPudqIZ6rBe70WXInTihM%2FF4fgJBCDjwLBPTfUqN3o80MJvpr3rEzY8JcLUbr0OgubvQ2Nm%2BKSmu6ShbdL%2Bb17nhWENkyithI3Be2oUaIziwWq6FBwSW1RDpAHSUzDwB%2B4hJTy9tY0m%2FZTTFTbhHiXPw%2FGYAiGDCxEDHFunZuoyR%2FhXZ9cBoBFx%2BuWjV1CXpI%2BEDw5t2rRkqi8LTibUc3&X-Amz-Signature=c8a53e980bd40989adf98e4f375d89122f40074c36e210ff4f54e08a89498d4f',
            contact_name: null,
            contact_email_address: null,
            contact_phone_number: null,
            location: 'Nymble',
            fair_placement: ['Nymble - 1st Floor'],
            color: '#0000FF',
            positions: [
                [242, 114],
                [240, 120],
                [235, 118],
                [237, 112],
            ],
        },
    ]

    //const height =
    const detailLvl = 600 //higher will lead to more resolution and require refactoring to remain full map in frame
    const zoomLevel = 2
    const bounds = [
        [(3509 / 4962) * detailLvl, 0], //4962  ×  3509
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
                        maxZoom={20}
                        minZoom={0}
                    >
                        <Internal />
                        {/*                 <EventListener points={surfaces} setPoints={setSurfaces} />
                         */}
                        <MarkerClusterGroup chunkedLoading>
                            {exhibitorsConst.map(ex => {
                                let ifShowPolygon = false
                                switch (fairLocation) {
                                    case 'Nymble - 1st Floor':
                                        ifShowPolygon =
                                            ex.fair_placement.includes(
                                                fairLocation
                                            )
                                        break
                                    case 'Nymble - 2nd Floor':
                                        ifShowPolygon =
                                            ex.fair_placement.includes(
                                                fairLocation
                                            )
                                        break
                                    case 'Nymble - 3rd Floor':
                                        ifShowPolygon =
                                            ex.fair_placement.includes(
                                                fairLocation
                                            )
                                        break
                                }
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
