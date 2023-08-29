//https://codesandbox.io/s/react-leaflet-with-functional-components-and-imageoverlay-u225j?file=/src/Map.js
import React, { useState, useRef } from 'react'
import {
    ImageOverlay,
    MapContainer,
    LayersControl,
    LayerGroup,
    Polygon,
    useMap,
    useMapEvent,
} from 'react-leaflet'
import L from 'leaflet'
import { CRS } from 'leaflet'
import './index.scss'
import FloorSelector from './FloorSelector'
import ExhibitorList from '../ExhibitorList'

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

function ZoomToComp({ mapRef, coordinates }) {
    let max_x = 0
    let max_y = 0
    let min_x = 10000
    let min_y = 10000
    const test = [
        [140, 120],
        [145, 122],
        [147, 116],
        [142, 114],
    ]
    /*
    [
        [1000, 110],
        [20, 25],
        [30, 35],
        [14, 15],
        [12, 16],
    ]
    */
    for (let i = 0; i < test.length; i++) {
        if (test[i][1] > max_x) {
            max_x = test[i][1]
        }
        if (test[i][0] > max_y) {
            max_y = test[i][0]
        }
        if (test[i][1] < min_x) {
            min_x = test[i][1]
        }
        if (test[i][0] < min_y) {
            min_y = test[i][0]
        }
    }
    //check for biggest/smallest x and y coordinate

    let avg_x = min_x + (max_x - min_x) / 2
    let avg_y = min_y + (max_y - min_y) / 2
    mapRef.current.flyTo([avg_y, avg_x], 5)
}

/* Edited the center and position of the images so they align correctly with aspect ratio - Nima */
/* Added box to test the surfaces, Hampus&Nima */
export const MapUtil = () => {
    const mapRef = useRef(null)

    const firstFloorNymble = require('../../../static/assets/Map/karta Nymble_Floor 1 blank.png')
    const secondFloorNymble = require('../../../static/assets/Map/Nymble_floor2.png')
    const thirdFloorNymble = require('../../../static/assets/Map/karta Nymble_Floor 3 blank.png')

    const floorArray = [firstFloorNymble, secondFloorNymble, thirdFloorNymble]

    const [floorShowed, setFloorShowed] = useState(0)

    let exhibitorsConst = [
        {
            id: 1152,
            name: 'ASSA ABLOY Group',
            type: 'Company',
            company_website: 'http://www.assaabloy.com',
            about: 'Every day, we help billions of people move through a safer, more open world with ease. If you’ve ever walked through an automatic door, stayed in a hotel, or gone through passport control, you’ve probably used one of our products or services.  \r\nWe are specialists in access essentials: like mechanical and digital locks, cylinders, keys, tags, security doors and automated entrances. At the same time, we are creating and embracing new technology – like biometrics, mobile security, and trusted identities. We stay at the forefront, so whatever you need, you’re in safe hands.',
            purpose: null,
            logo_squared:
                'https://armada-ais-files.s3.amazonaws.com/exhibitors/catalogue_logo_squared/b6de85618f4841bf97f030fb2f4f95fb.tif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAYUFGGRQOFEB7UH62%2F20230808%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20230808T180138Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA9Sus8hNJcyAhzcUlIOvQrlxs2ihgtCwiJM%2B%2FPAYcrJYCIQDlaDTtmfcDv4v8c8i9T7OxB8ntH8HU4hDgdrvc8omJgyrxBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5MzA1NDA0MzE2NCIMIbJbgOZSH9XpSeUfKsUE2GM5xqkLWnq4s9St5s8hish1CF1E12PxlFLWb8VCl%2BjMzt4MwjOVT2wZgs4m%2FrTnC4cxLEwEQ0%2FreffqQtnYYRESp2eoiJWDQ3kCnEmwGkY%2BYKahskIwh0tCafvKqg%2BpBnveSp5xAoIX0YFI3lu8T7I3XJupKcG67XCklyCR%2FA3jxQpTHlsc4WB7HM4hg3MfWu%2BPyLPqAif2NxThKfJ1pyOQV1bUIu3xSM6ggeEQ9%2FNvPiA1HJfpcCmGht4tfBUDpLK9krslD1wuk7LPts9yJEtXlvv2idJZq%2Foy8cIzlA%2BuMc%2FwfXLdxyiuGi%2FXT4uOSg8qPkZ6AcaNSOID%2FZeZLxEbS%2BwQ1j2F3V8N%2BLVBsk12sQo64EeKFXWGbYqCF8EfEKj3MWqc%2Fxd266WW4eVcnI92bZa7LIjpkwFTxiosqGwD5T3PxZmE0JbSVukzQ7fTyYY0fOLRHehK%2FvddRZCo14FXNJbLlxEjSs5mDtkSVeK0JW2Q%2BFeLOvDqUtHy7U4T36aeZN%2BRYTtPj47uvZhOACpoo3xQot%2BiQHsBXw6T3MI%2FIjSeh%2ByGCr0wgHGV8Xy2ypzpBOzcqs3wxmL1SBaBuulnvKDT7bnGfK4BiS3LnHf5eykQZT8Shm9J5seCUMdD6UoPtzdn2qxUC5z2CkARMv7s%2Fd7hbomk%2BuhVFqe2OuHSzy6BG0bP99V8RJZlJlKoNLJMDfay%2F1O7qx2kCxs5NP2wIDYn3%2BOm6%2B9vDJfUtPIToNtigOXMM%2FQF4D%2FKXKZzxFdMtNQw0LDJpgY6pgEqZlHjoKEGPudqIZ6rBe70WXInTihM%2FF4fgJBCDjwLBPTfUqN3o80MJvpr3rEzY8JcLUbr0OgubvQ2Nm%2BKSmu6ShbdL%2Bb17nhWENkyithI3Be2oUaIziwWq6FBwSW1RDpAHSUzDwB%2B4hJTy9tY0m%2FZTTFTbhHiXPw%2FGYAiGDCxEDHFunZuoyR%2FhXZ9cBoBFx%2BuWjV1CXpI%2BEDw5t2rRkqi8LTibUc3&X-Amz-Signature=be5dac07c97664040b99edae5cdde35aaa14eb859dc38d098ee609199a8234a0',
            logo_freesize:
                'https://armada-ais-files.s3.amazonaws.com/exhibitors/catalogue_logo_freesize/322ec24778f14c9381b007d6c935b2d8.tif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAYUFGGRQOFEB7UH62%2F20230808%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20230808T180138Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA9Sus8hNJcyAhzcUlIOvQrlxs2ihgtCwiJM%2B%2FPAYcrJYCIQDlaDTtmfcDv4v8c8i9T7OxB8ntH8HU4hDgdrvc8omJgyrxBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5MzA1NDA0MzE2NCIMIbJbgOZSH9XpSeUfKsUE2GM5xqkLWnq4s9St5s8hish1CF1E12PxlFLWb8VCl%2BjMzt4MwjOVT2wZgs4m%2FrTnC4cxLEwEQ0%2FreffqQtnYYRESp2eoiJWDQ3kCnEmwGkY%2BYKahskIwh0tCafvKqg%2BpBnveSp5xAoIX0YFI3lu8T7I3XJupKcG67XCklyCR%2FA3jxQpTHlsc4WB7HM4hg3MfWu%2BPyLPqAif2NxThKfJ1pyOQV1bUIu3xSM6ggeEQ9%2FNvPiA1HJfpcCmGht4tfBUDpLK9krslD1wuk7LPts9yJEtXlvv2idJZq%2Foy8cIzlA%2BuMc%2FwfXLdxyiuGi%2FXT4uOSg8qPkZ6AcaNSOID%2FZeZLxEbS%2BwQ1j2F3V8N%2BLVBsk12sQo64EeKFXWGbYqCF8EfEKj3MWqc%2Fxd266WW4eVcnI92bZa7LIjpkwFTxiosqGwD5T3PxZmE0JbSVukzQ7fTyYY0fOLRHehK%2FvddRZCo14FXNJbLlxEjSs5mDtkSVeK0JW2Q%2BFeLOvDqUtHy7U4T36aeZN%2BRYTtPj47uvZhOACpoo3xQot%2BiQHsBXw6T3MI%2FIjSeh%2ByGCr0wgHGV8Xy2ypzpBOzcqs3wxmL1SBaBuulnvKDT7bnGfK4BiS3LnHf5eykQZT8Shm9J5seCUMdD6UoPtzdn2qxUC5z2CkARMv7s%2Fd7hbomk%2BuhVFqe2OuHSzy6BG0bP99V8RJZlJlKoNLJMDfay%2F1O7qx2kCxs5NP2wIDYn3%2BOm6%2B9vDJfUtPIToNtigOXMM%2FQF4D%2FKXKZzxFdMtNQw0LDJpgY6pgEqZlHjoKEGPudqIZ6rBe70WXInTihM%2FF4fgJBCDjwLBPTfUqN3o80MJvpr3rEzY8JcLUbr0OgubvQ2Nm%2BKSmu6ShbdL%2Bb17nhWENkyithI3Be2oUaIziwWq6FBwSW1RDpAHSUzDwB%2B4hJTy9tY0m%2FZTTFTbhHiXPw%2FGYAiGDCxEDHFunZuoyR%2FhXZ9cBoBFx%2BuWjV1CXpI%2BEDw5t2rRkqi8LTibUc3&X-Amz-Signature=dad7f510d6a8df9e2d5829e9a43f9de0afbc3dc6761e090a6529a183cfbbe8a3',
            contact_name: 'Naomi Korang',
            contact_email_address: 'naomi.korang@assaabloy.com',
            contact_phone_number: '+46739045323',
            location: 'Nymble',
            floor: 1,
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
                'https://armada-ais-files.s3.amazonaws.com/exhibitors/catalogue_logo_squared/8628590829164ffcbe3178defe889862.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAYUFGGRQOFEB7UH62%2F20230808%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20230808T180138Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA9Sus8hNJcyAhzcUlIOvQrlxs2ihgtCwiJM%2B%2FPAYcrJYCIQDlaDTtmfcDv4v8c8i9T7OxB8ntH8HU4hDgdrvc8omJgyrxBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5MzA1NDA0MzE2NCIMIbJbgOZSH9XpSeUfKsUE2GM5xqkLWnq4s9St5s8hish1CF1E12PxlFLWb8VCl%2BjMzt4MwjOVT2wZgs4m%2FrTnC4cxLEwEQ0%2FreffqQtnYYRESp2eoiJWDQ3kCnEmwGkY%2BYKahskIwh0tCafvKqg%2BpBnveSp5xAoIX0YFI3lu8T7I3XJupKcG67XCklyCR%2FA3jxQpTHlsc4WB7HM4hg3MfWu%2BPyLPqAif2NxThKfJ1pyOQV1bUIu3xSM6ggeEQ9%2FNvPiA1HJfpcCmGht4tfBUDpLK9krslD1wuk7LPts9yJEtXlvv2idJZq%2Foy8cIzlA%2BuMc%2FwfXLdxyiuGi%2FXT4uOSg8qPkZ6AcaNSOID%2FZeZLxEbS%2BwQ1j2F3V8N%2BLVBsk12sQo64EeKFXWGbYqCF8EfEKj3MWqc%2Fxd266WW4eVcnI92bZa7LIjpkwFTxiosqGwD5T3PxZmE0JbSVukzQ7fTyYY0fOLRHehK%2FvddRZCo14FXNJbLlxEjSs5mDtkSVeK0JW2Q%2BFeLOvDqUtHy7U4T36aeZN%2BRYTtPj47uvZhOACpoo3xQot%2BiQHsBXw6T3MI%2FIjSeh%2ByGCr0wgHGV8Xy2ypzpBOzcqs3wxmL1SBaBuulnvKDT7bnGfK4BiS3LnHf5eykQZT8Shm9J5seCUMdD6UoPtzdn2qxUC5z2CkARMv7s%2Fd7hbomk%2BuhVFqe2OuHSzy6BG0bP99V8RJZlJlKoNLJMDfay%2F1O7qx2kCxs5NP2wIDYn3%2BOm6%2B9vDJfUtPIToNtigOXMM%2FQF4D%2FKXKZzxFdMtNQw0LDJpgY6pgEqZlHjoKEGPudqIZ6rBe70WXInTihM%2FF4fgJBCDjwLBPTfUqN3o80MJvpr3rEzY8JcLUbr0OgubvQ2Nm%2BKSmu6ShbdL%2Bb17nhWENkyithI3Be2oUaIziwWq6FBwSW1RDpAHSUzDwB%2B4hJTy9tY0m%2FZTTFTbhHiXPw%2FGYAiGDCxEDHFunZuoyR%2FhXZ9cBoBFx%2BuWjV1CXpI%2BEDw5t2rRkqi8LTibUc3&X-Amz-Signature=7fa5039c80c1c68563f56b485c4c05b88e4b4ec786e3fd2446ef98acbd295f1d',
            logo_freesize:
                'https://armada-ais-files.s3.amazonaws.com/exhibitors/catalogue_logo_freesize/c63ecef9283f4e7c814339acd272a59a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAYUFGGRQOFEB7UH62%2F20230808%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20230808T180138Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA9Sus8hNJcyAhzcUlIOvQrlxs2ihgtCwiJM%2B%2FPAYcrJYCIQDlaDTtmfcDv4v8c8i9T7OxB8ntH8HU4hDgdrvc8omJgyrxBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5MzA1NDA0MzE2NCIMIbJbgOZSH9XpSeUfKsUE2GM5xqkLWnq4s9St5s8hish1CF1E12PxlFLWb8VCl%2BjMzt4MwjOVT2wZgs4m%2FrTnC4cxLEwEQ0%2FreffqQtnYYRESp2eoiJWDQ3kCnEmwGkY%2BYKahskIwh0tCafvKqg%2BpBnveSp5xAoIX0YFI3lu8T7I3XJupKcG67XCklyCR%2FA3jxQpTHlsc4WB7HM4hg3MfWu%2BPyLPqAif2NxThKfJ1pyOQV1bUIu3xSM6ggeEQ9%2FNvPiA1HJfpcCmGht4tfBUDpLK9krslD1wuk7LPts9yJEtXlvv2idJZq%2Foy8cIzlA%2BuMc%2FwfXLdxyiuGi%2FXT4uOSg8qPkZ6AcaNSOID%2FZeZLxEbS%2BwQ1j2F3V8N%2BLVBsk12sQo64EeKFXWGbYqCF8EfEKj3MWqc%2Fxd266WW4eVcnI92bZa7LIjpkwFTxiosqGwD5T3PxZmE0JbSVukzQ7fTyYY0fOLRHehK%2FvddRZCo14FXNJbLlxEjSs5mDtkSVeK0JW2Q%2BFeLOvDqUtHy7U4T36aeZN%2BRYTtPj47uvZhOACpoo3xQot%2BiQHsBXw6T3MI%2FIjSeh%2ByGCr0wgHGV8Xy2ypzpBOzcqs3wxmL1SBaBuulnvKDT7bnGfK4BiS3LnHf5eykQZT8Shm9J5seCUMdD6UoPtzdn2qxUC5z2CkARMv7s%2Fd7hbomk%2BuhVFqe2OuHSzy6BG0bP99V8RJZlJlKoNLJMDfay%2F1O7qx2kCxs5NP2wIDYn3%2BOm6%2B9vDJfUtPIToNtigOXMM%2FQF4D%2FKXKZzxFdMtNQw0LDJpgY6pgEqZlHjoKEGPudqIZ6rBe70WXInTihM%2FF4fgJBCDjwLBPTfUqN3o80MJvpr3rEzY8JcLUbr0OgubvQ2Nm%2BKSmu6ShbdL%2Bb17nhWENkyithI3Be2oUaIziwWq6FBwSW1RDpAHSUzDwB%2B4hJTy9tY0m%2FZTTFTbhHiXPw%2FGYAiGDCxEDHFunZuoyR%2FhXZ9cBoBFx%2BuWjV1CXpI%2BEDw5t2rRkqi8LTibUc3&X-Amz-Signature=cdcddf77eec23baf26c276a6fa91a47951dbb551f21f396e896acba840278756',
            contact_name: null,
            contact_email_address: null,
            contact_phone_number: null,
            location: 'Nymble',
            floor: 1,
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
                'https://armada-ais-files.s3.amazonaws.com/exhibitors/catalogue_logo_squared/be8d4c194f4b44a6a0b914ec833cd9a0.PNG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAYUFGGRQOFEB7UH62%2F20230808%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20230808T180138Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA9Sus8hNJcyAhzcUlIOvQrlxs2ihgtCwiJM%2B%2FPAYcrJYCIQDlaDTtmfcDv4v8c8i9T7OxB8ntH8HU4hDgdrvc8omJgyrxBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5MzA1NDA0MzE2NCIMIbJbgOZSH9XpSeUfKsUE2GM5xqkLWnq4s9St5s8hish1CF1E12PxlFLWb8VCl%2BjMzt4MwjOVT2wZgs4m%2FrTnC4cxLEwEQ0%2FreffqQtnYYRESp2eoiJWDQ3kCnEmwGkY%2BYKahskIwh0tCafvKqg%2BpBnveSp5xAoIX0YFI3lu8T7I3XJupKcG67XCklyCR%2FA3jxQpTHlsc4WB7HM4hg3MfWu%2BPyLPqAif2NxThKfJ1pyOQV1bUIu3xSM6ggeEQ9%2FNvPiA1HJfpcCmGht4tfBUDpLK9krslD1wuk7LPts9yJEtXlvv2idJZq%2Foy8cIzlA%2BuMc%2FwfXLdxyiuGi%2FXT4uOSg8qPkZ6AcaNSOID%2FZeZLxEbS%2BwQ1j2F3V8N%2BLVBsk12sQo64EeKFXWGbYqCF8EfEKj3MWqc%2Fxd266WW4eVcnI92bZa7LIjpkwFTxiosqGwD5T3PxZmE0JbSVukzQ7fTyYY0fOLRHehK%2FvddRZCo14FXNJbLlxEjSs5mDtkSVeK0JW2Q%2BFeLOvDqUtHy7U4T36aeZN%2BRYTtPj47uvZhOACpoo3xQot%2BiQHsBXw6T3MI%2FIjSeh%2ByGCr0wgHGV8Xy2ypzpBOzcqs3wxmL1SBaBuulnvKDT7bnGfK4BiS3LnHf5eykQZT8Shm9J5seCUMdD6UoPtzdn2qxUC5z2CkARMv7s%2Fd7hbomk%2BuhVFqe2OuHSzy6BG0bP99V8RJZlJlKoNLJMDfay%2F1O7qx2kCxs5NP2wIDYn3%2BOm6%2B9vDJfUtPIToNtigOXMM%2FQF4D%2FKXKZzxFdMtNQw0LDJpgY6pgEqZlHjoKEGPudqIZ6rBe70WXInTihM%2FF4fgJBCDjwLBPTfUqN3o80MJvpr3rEzY8JcLUbr0OgubvQ2Nm%2BKSmu6ShbdL%2Bb17nhWENkyithI3Be2oUaIziwWq6FBwSW1RDpAHSUzDwB%2B4hJTy9tY0m%2FZTTFTbhHiXPw%2FGYAiGDCxEDHFunZuoyR%2FhXZ9cBoBFx%2BuWjV1CXpI%2BEDw5t2rRkqi8LTibUc3&X-Amz-Signature=8ca19c8d4ffe24e6776d7e46fba5fb05771c1c803f30438b6b098f7fa07f6363',
            logo_freesize:
                'https://armada-ais-files.s3.amazonaws.com/exhibitors/catalogue_logo_freesize/c8a799962c704bbf8d49ffc543108e07.PNG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAYUFGGRQOFEB7UH62%2F20230808%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20230808T180138Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA9Sus8hNJcyAhzcUlIOvQrlxs2ihgtCwiJM%2B%2FPAYcrJYCIQDlaDTtmfcDv4v8c8i9T7OxB8ntH8HU4hDgdrvc8omJgyrxBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDU5MzA1NDA0MzE2NCIMIbJbgOZSH9XpSeUfKsUE2GM5xqkLWnq4s9St5s8hish1CF1E12PxlFLWb8VCl%2BjMzt4MwjOVT2wZgs4m%2FrTnC4cxLEwEQ0%2FreffqQtnYYRESp2eoiJWDQ3kCnEmwGkY%2BYKahskIwh0tCafvKqg%2BpBnveSp5xAoIX0YFI3lu8T7I3XJupKcG67XCklyCR%2FA3jxQpTHlsc4WB7HM4hg3MfWu%2BPyLPqAif2NxThKfJ1pyOQV1bUIu3xSM6ggeEQ9%2FNvPiA1HJfpcCmGht4tfBUDpLK9krslD1wuk7LPts9yJEtXlvv2idJZq%2Foy8cIzlA%2BuMc%2FwfXLdxyiuGi%2FXT4uOSg8qPkZ6AcaNSOID%2FZeZLxEbS%2BwQ1j2F3V8N%2BLVBsk12sQo64EeKFXWGbYqCF8EfEKj3MWqc%2Fxd266WW4eVcnI92bZa7LIjpkwFTxiosqGwD5T3PxZmE0JbSVukzQ7fTyYY0fOLRHehK%2FvddRZCo14FXNJbLlxEjSs5mDtkSVeK0JW2Q%2BFeLOvDqUtHy7U4T36aeZN%2BRYTtPj47uvZhOACpoo3xQot%2BiQHsBXw6T3MI%2FIjSeh%2ByGCr0wgHGV8Xy2ypzpBOzcqs3wxmL1SBaBuulnvKDT7bnGfK4BiS3LnHf5eykQZT8Shm9J5seCUMdD6UoPtzdn2qxUC5z2CkARMv7s%2Fd7hbomk%2BuhVFqe2OuHSzy6BG0bP99V8RJZlJlKoNLJMDfay%2F1O7qx2kCxs5NP2wIDYn3%2BOm6%2B9vDJfUtPIToNtigOXMM%2FQF4D%2FKXKZzxFdMtNQw0LDJpgY6pgEqZlHjoKEGPudqIZ6rBe70WXInTihM%2FF4fgJBCDjwLBPTfUqN3o80MJvpr3rEzY8JcLUbr0OgubvQ2Nm%2BKSmu6ShbdL%2Bb17nhWENkyithI3Be2oUaIziwWq6FBwSW1RDpAHSUzDwB%2B4hJTy9tY0m%2FZTTFTbhHiXPw%2FGYAiGDCxEDHFunZuoyR%2FhXZ9cBoBFx%2BuWjV1CXpI%2BEDw5t2rRkqi8LTibUc3&X-Amz-Signature=3c2bc97d8da9cc526bd42e275404ab66c888d0fe246aacc662d9eb46dfdbb939',
            contact_name: 'Oscar Blomquist',
            contact_email_address: 'oscar.blomquist@ap4.se',
            contact_phone_number: '+4687877507',
            location: 'Nymble',
            floor: 2,
            color: '#00ffff',
            positions: [
                [255, 105],
                [254, 102],
                [252, 98],
                [252, 110],
                [256, 110],
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
                {FloorSelector(setFloorShowed, floorShowed)}
                <div>
                    <MapContainer
                        zoom={zoomLevel}
                        //center={position}
                        doubleClickZoom
                        crs={CRS.Simple}
                        bounds={bounds}
                        className='bigMap'
                        ref={mapRef}
                    >
                        <Internal />
                        {/*                 <EventListener points={surfaces} setPoints={setSurfaces} />
                         */}
                        {exhibitorsConst.map(ex => {
                            let ifShowPolygon = false
                            switch (floorShowed) {
                                case 0:
                                    ifShowPolygon =
                                        ex.location === 'Nymble' &&
                                        ex.floor === 1
                                    break
                                case 1:
                                    ifShowPolygon =
                                        ex.location === 'Nymble' &&
                                        ex.floor === 2
                                    break
                                case 2:
                                    ifShowPolygon =
                                        ex.location === 'Nymble' &&
                                        ex.floor === 3
                                    break
                            }
                            return (
                                ifShowPolygon && (
                                    <Polygon
                                        key={ex.id}
                                        positions={ex.positions}
                                        color={ex.color}
                                        eventHandlers={{
                                            click: () => {
                                                const element =
                                                    document.getElementById(
                                                        ex.id
                                                    )

                                                if (element) {
                                                    // Get the position of the element relative to the viewport
                                                    const elementPosition =
                                                        element.getBoundingClientRect()
                                                            .top

                                                    // Calculate the current scroll position and add the element position
                                                    const offset =
                                                        window.scrollY +
                                                        elementPosition

                                                    // Scroll to the element with a smooth behavior
                                                    window.scrollTo({
                                                        top: offset,
                                                        behavior: 'smooth',
                                                    })

                                                    // element.style.backgroundColor = '#00d790';

                                                    element.style.animation =
                                                        'dancingEffect 2s ease infinite'
                                                    element.style.animation =
                                                        'dancingEffect 2s ease infinite'

                                                    // Remove the dancing effect class after animation duration
                                                    setTimeout(() => {
                                                        element.style.animation =
                                                            ''
                                                    }, 3000) // Adjust the duration as needed
                                                }
                                            },
                                        }}
                                    />
                                )
                            )
                        })}
                        {/*<LayersControl position='topright'>
                        <LayersControl.BaseLayer checked name='Floor 1'>
                        <LayerGroup> */}
                        <ImageOverlay
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url={floorArray[floorShowed].default}
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
            <ExhibitorList />
            <button
                onClick={() =>
                    ZoomToComp({
                        coordinates: [
                            [140, 120],
                            [145, 122],
                            [147, 116],
                            [142, 114],
                        ],
                        mapRef,
                    })
                }
            >
                Test
            </button>
        </div>
    )
}

export default MapUtil
