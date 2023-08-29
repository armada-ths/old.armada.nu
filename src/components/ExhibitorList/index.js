import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import './index.scss'
import Modal from '../Modal'
import Loading from '../Loading'
import Cat from '../Cat'
import Select from 'react-select'
import { Link } from 'gatsby'
import Collapsible from 'react-collapsible';
/* armada.nu/exhibitors is no longer being used. To do is to patch all this and make it work with the API again //Nima


//Change all Select element according to https://react-select.com/upgrade#from-v3-to-v4
/*const urlPropsQueryConfig = {
    exhibitorName: {
        type: UrlQueryParamTypes.string,
        queryParam: 'exhibitorName',
    },
}*/

//base of server adress


const dropDownAttributes = {
    width: '100%',
    padding: '0.1em 0em 0.5em 0em',
    outline: 0,
    // border: 
    'background-color': '#00d790',
};

const ais = 'https://ais.armada.nu/'
const isMockup = true;
const showFilters = true;
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
            [40, 40],
            [80, 40],
            [80, 80],
            [40, 80],
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
        floor: 2,
        color: '#0000ff',
        positions: [
            [90, 90],
            [170, 90],
            [170, 170],
            [90, 170],
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
        floor: 3,
        color: '#00ffff',
        positions: [
            [0, 90],
            [70, 90],
            [70, 170],
            [0, 170],
        ],
    },
];

class ExhibitorList extends React.Component {
    constructor(props) {
        super(props) // adopts parent qualities
        this.state = {
            previousYear: new Date(
                new Date().setFullYear(new Date().getFullYear() - 1)
            )
            .getFullYear()
            .toString(), //get the previous year
            exhibitors: [], // json object
            exhibitorList: [], //displayed exhibitors
            showModal: false, //show individual company card
            exhibitorName: undefined,
            isLoading: true,
            search: '', //search query string
            jobfilters: {},
            sectorfilters: {},
            competencefilters: {},
            locationfilters: {},
            fairPlacementfilters: {},
            shine: '',
            diversityfilter: false,
            sustainabilityfilter: false,
            startupfilter: false,
            diversitysrc: '/assets/diversity/diversity_a.svg',
            sustainabilitysrc: '/assets/sustainability/sustainability.svg',
            location: 'All',
            sector: 'All',
            locations: [
                { value: 'Sweden', label: 'Sweden' },
                { value: 'Europe', label: 'Europe' },
                { value: 'Asia', label: 'Asia' },
                { value: 'Oceania', label: 'Oceania' },
                { value: 'North America', label: 'North America' },
                { value: 'South America', label: 'South America' },
                { value: 'Africa', label: 'Africa' },
            ],
            sectors: [
                { value: 'Retail', label: 'Retail' },
                { value: 'Recruitment', label: 'Recruitment' },
                { value: 'Architecture', label: 'Architecture' },
                { value: 'Automotive', label: 'Automotive' },
                {
                    value: 'Environmental Sector',
                    label: 'Environmental Sector',
                },
                { value: 'Pedagogy', label: 'Pedagogy' },
                { value: 'Web Development', label: 'Web Development' },
                { value: 'Solid Mechanics', label: 'Solid Mechanics' },
                {
                    value: 'Simulation Technology',
                    label: 'Simulation Technology',
                },
                { value: 'Pharmaceutical', label: 'Pharmaceutical' },
                { value: 'Biotechnology', label: 'Biotechnology' },
                { value: 'Acoustics', label: 'Acoustics' },
                { value: 'Nuclear Power', label: 'Nuclear Power' },
                { value: 'Fluid Mechanics', label: 'Fluid Mechanics' },
                {
                    value: 'Wood-Processing Industry',
                    label: 'Wood-Processing Industry',
                },
                { value: 'Steel Industry', label: 'Steel Industry' },
                { value: 'Medical Technology', label: 'Medical Technology' },
                { value: 'Media Technology', label: 'Media Technology' },
                { value: 'Marine Systems', label: 'Marine Systems' },
                {
                    value: 'Manufacturing Industry',
                    label: 'Manufacturing Industry',
                },
                {
                    value: 'Management Consulting',
                    label: 'Management Consulting',
                },
                { value: 'Insurance', label: 'Insurance' },
                { value: 'Finance', label: 'Finance' },
                { value: 'Construction', label: 'Construction' },
                { value: 'Aerospace', label: 'Aerospace' },
                {
                    value: 'Logistics & Supply Chain',
                    label: 'Logistics & Supply Chain',
                },
                { value: 'Telecommunication', label: 'Telecommunication' },
                { value: 'Mechatronics', label: 'Mechatronics' },
                { value: 'Electronics', label: 'Electronics' },
                {
                    value: 'Material Development',
                    label: 'Material Development',
                },
                { value: 'Energy Technology', label: 'Energy Technology' },
                { value: 'Nanotechnology', label: 'Nanotechnology' },
                { value: 'Research', label: 'Research' },
                {
                    value: 'Property & Infrastructure',
                    label: 'Property & Infrastructure',
                },
                { value: 'IT Infrastructure', label: 'IT Infrastructure' },
                {
                    value: 'Technical Consulting',
                    label: 'Technical Consulting',
                },
                { value: 'IT Consulting', label: 'IT Consulting' },
                {
                    value: 'Software Development',
                    label: 'Software Development',
                },
                { value: 'Railway', label: 'Railway' },
                { value: 'Product Development', label: 'Product Development' },
                { value: 'Interaction Design', label: 'Interaction Design' },
                { value: 'Industry Design', label: 'Industry Design' },
            ],
            jobs: [
                { value: 'Full time job', label: 'Full Time Job' },
                { value: 'Part time job', label: 'Part Time Job' },
                { value: 'Summer job', label: 'Summer Job' },
                { value: 'Internship', label: 'Internship' },
                { value: 'Trainee', label: 'Trainee' },
                { value: 'Master thesis', label: 'Master Thesis' },
                { value: 'Bachelor thesis', label: 'Bachelor Thesis' },
            ],
            competences: [
                {
                    value: 'Architecture',
                    label: 'Architecture',
                    id: 28,
                },
                {
                    value: 'Civil Engineering',
                    label: 'Civil Engineering',
                    id: 30,
                },
                {
                    value: 'Construction Engineering',
                    label: 'Construction Engineering',
                    id: 29,
                },
                {
                    value: 'Real Estate & Construction Management',
                    label: 'Real Estate & Construction Management',
                    id: 31,
                },
                {
                    value: 'Biotechnology',
                    label: 'Biotechnology',
                    id: 22,
                },
                {
                    value: 'Medical Engineering',
                    label: 'Medical Engineering',
                    id: 23,
                },
                {
                    value: 'Electrical Engineering',
                    label: 'Electrical Engineering',
                    id: 6,
                },
                {
                    value: 'Mechatronics',
                    label: 'Mechatronics',
                    id: 7,
                },
                {
                    value: 'Electric Power Engineering',
                    label: 'Electric Power Engineering',
                    id: 24,
                },
                {
                    value: 'Energy Engineering',
                    label: 'Energy Engineering',
                    id: 25,
                },
                {
                    value: 'Nuclear Energy Engineering',
                    label: 'Nuclear Energy Engineering',
                    id: 27,
                },
                {
                    value: 'Sustainable Technology',
                    label: 'Sustainable Technology',
                    id: 26,
                },
                {
                    value: 'Back End Development',
                    label: 'Back End Development',
                    id: 2,
                },
                {
                    value: 'Data Science & Machine Learning',
                    label: 'Data Science & Machine Learning',
                    id: 4,
                },
                {
                    value: 'Front End Development',
                    label: 'Front End Development',
                    id: 1,
                },
                {
                    value: 'User Experience Design',
                    label: 'User Experience Design',
                    id: 5,
                },
                {
                    value: 'Web Development',
                    label: 'Web Development',
                    id: 3,
                },
                {
                    value: 'Business Development',
                    label: 'Business Development',
                    id: 10,
                },
                {
                    value: 'Finance',
                    label: 'Finance',
                    id: 9,
                },
                {
                    value: 'Logistics & Supply Chain Management',
                    label: 'Logistics & Supply Chain Management',
                    id: 11,
                },
                {
                    value: 'Project Management',
                    label: 'Project Management',
                    id: 8,
                },
                {
                    value: 'Chemical Engineering',
                    label: 'Chemical Engineering',
                    id: 20,
                },
                {
                    value: 'Materials Engineering',
                    label: 'Materials Engineering',
                    id: 18,
                },
                {
                    value: 'Molecular Engineering',
                    label: 'Molecular Engineering',
                    id: 19,
                },
                {
                    value: 'Nanotechnology',
                    label: 'Nanotechnology',
                    id: 21,
                },
                {
                    value: 'Engineering Mechanics',
                    label: 'Engineering Mechanics',
                    id: 12,
                },
                {
                    value: 'Industrial Design',
                    label: 'Industrial Design',
                    id: 14,
                },
                {
                    value: 'Production Engineering',
                    label: 'Production Engineering',
                    id: 13,
                },
                {
                    value: 'Applied Mathematics',
                    label: 'Applied Mathematics',
                    id: 16,
                },
                {
                    value: 'Engineering Physics',
                    label: 'Engineering Physics',
                    id: 15,
                },
                {
                    value: 'Scientific Computing',
                    label: 'Scientific Computing',
                    id: 17,
                },
                {
                    value: 'Aerospace Engineering',
                    label: 'Aerospace Engineering',
                    id: 34,
                },
                {
                    value: 'Human Resources',
                    label: 'Human Resources',
                    id: 36,
                },
                {
                    value: 'Maritime Engineering',
                    label: 'Maritime Engineering',
                    id: 35,
                },
                {
                    value: 'Marketing',
                    label: 'Marketing',
                    id: 39,
                },
                {
                    value: 'Railway Engineering',
                    label: 'Railway Engineering',
                    id: 33,
                },
                {
                    value: 'Sales',
                    label: 'Sales',
                    id: 38,
                },
                {
                    value: 'Teaching',
                    label: 'Teaching',
                    id: 37,
                },
                {
                    value: 'Vehicle Engineering',
                    label: 'Vehicle Engineering',
                    id: 32,
                },
            ],
            fair_placements:[
                { value: 'Nymble - 1st Floor', label: 'Nymble - 1st Floor' },
                { value: 'Nymble - 2nd Floor', label: 'Nymble - 2nd Floor' },
                { value: 'Nymble - 3rd Floor', label: 'Nymble - 3rd Floor' },
                { value: 'Library - 1st Floor', label: 'Library - 1st Floor' },
                { value: 'Library - 2nd Floor', label: 'Library - 2nd Floor' },
            ],
            showamount: 20,
        }

        let sortedSectors = this.state.sectors.sort((a, b) =>
            a.label.localeCompare(b.label)
        )
        this.setState({ sectors: sortedSectors })
    }
    apiFetcher(props, update) {
        // if(this.state.isMockup){
        //     let exhibitorList = exhibitorsConst.map(exhibitor => (
        //         <ExhibitorItem
        //             key={exhibitor.id}
        //             name={exhibitor.name}
        //             exhibitor={exhibitor}
        //             showModal={this.showModal}
        //         />
        //     ));
        //     this.setState({ exhibitors: exhibitorsConst, exhibitorList: exhibitorList, isLoading: false }) // component saves its own data --- What does this mean?? //Nima
        // }
        // else{
            const yearParam = update ? '&year=' + props.year : ''
            axios
                .get(
                    ais +
                        `api/exhibitors?img alt=''_placeholder=true${
                            this.props.lastYear
                                ? '&year=' + this.state.previousYear
                                : yearParam
                        }`
                )
                .then(res => {
                    let exhibitors = res.data // create variable and store result within parameter data
                    exhibitors.sort((a, b) => a.name.localeCompare(b.name))
                    let exhibitorList = exhibitors.map(exhibitor => (
                        <ExhibitorxItem
                            key={exhibitor.id}
                            name={exhibitor.name}
                            exhibitor={exhibitor}
                            showModal={this.showModal}
                        />
                    ))
                    this.setState({ exhibitors: exhibitors, exhibitorList: exhibitorList, isLoading: false }) // component saves its own data --- What does this mean?? //Nima

                    // Get from url path the GET params ?id=number, to know what event to display
                    if (this.props.exhibitorName !== undefined) {
                        this.setState({
                            exhibitorName: props.exhibitorName,
                            showModal: true,
                        })
                    }
                })
        // }
    }
    componentDidUpdate(props) {
        if(!isMockup){
            this.apiFetcher(props, true)
        }
    }
    //currently only deals w/ getting data from api (unsure)
    componentDidMount(props) {
        // only called when exhibitor page is created or updated.
        const filterContainer = document.getElementById("filter-container");
        filterContainer.classList.toggle("hidden");
        if(!isMockup){
            this.apiFetcher(props, false)
        }
        else{
            let exhibitorList = exhibitorsConst.map(exhibitor => (
                    <ExhibitorItem
                        key={exhibitor.id}
                        name={exhibitor.name}
                        exhibitor={exhibitor}
                        showModal={this.showModal}
                    />
                ));
            this.setState({ exhibitors: exhibitorsConst, exhibitorList: exhibitorList, isLoading: false })
        }
    }

    //search
    updateSearch(event) {
        this.setdefault()
        this.setState({ search: event.target.value.substr(0, 100) })
    }

    //displays types of jobs offered by company in its Modal
    getJobContainer(exhibitor) {
        return (
            <div className='job-container'>
                <h3 className='modal-subheaders'>Job Opportunities</h3>
                <ul>
                    {exhibitor.employments.map((jobtype, index) => (
                        <li key={index} className='job-section'>
                            {jobtype.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    showModal = exhibitorName => {
        this.setState({ showModal: !this.state.showModal, exhibitorName })
    }

    displayExhibitor = exhibitor => {
        //TODO: add more data to modal. locations etc, change how it's displayed
        return (
            <Modal onClose={() => this.showModal(null)}>
                <div className='modal-container'>
                    <div className='modal-flex-1'>
                        <div className='modalimage-exhib'>
                            {exhibitor.logo_squared != null && (
                                <img
                                    src={exhibitor.logo_squared}
                                    alt={exhibitor.name + ' logo'}
                                />
                            )}
                        </div>
                        <h1 className='modal-title'>{exhibitor.name}</h1>
                        <div>
                            {exhibitor.vyer_position && !this.props.lastYear ? (
                                <h3 className='links'>
                                    <a
                                        href={exhibitor.vyer_position}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        Click for Map position
                                    </a>
                                </h3>
                            ) : null}
                            {exhibitor.fair_location && !this.props.lastYear ? (
                                <h3 id='fair-location'>
                                    {exhibitor.fair_location}
                                </h3>
                            ) : null}
                            {exhibitor.company_website ? (
                                <h3 className='links'>
                                    <a
                                        href={exhibitor.company_website}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {exhibitor.name + ' Website'}
                                    </a>
                                </h3>
                            ) : null}
                            {exhibitor.flyer ? (
                                <h3 className='links'>
                                    <a
                                        href={ais + exhibitor.flyer}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {exhibitor.name + ' Digital Flyer'}
                                    </a>
                                </h3>
                            ) : null}
                        </div>
                    </div>
                    <div className='modal-flex-2'>
                        <div className='modalinfo'>
                            <div className='modal-property'>
                                <div className='icon-group'>
                                    {exhibitor.diversity ? (
                                        <img
                                            alt=''
                                            className='special'
                                            src='/assets/diversity/diversity_a.svg'
                                        />
                                    ) : null}
                                    {exhibitor.sustainability ? (
                                        <img
                                            alt=''
                                            className='special'
                                            src='/assets/sustainability/sustainability.svg'
                                        />
                                    ) : null}
                                </div>
                            </div>

                            <div className='description-container'>
                                <p className='purpose-text'>
                                    <b>{exhibitor.purpose}</b>
                                </p>
                                <br />
                                <div className='description'>
                                    {exhibitor.about
                                        ? exhibitor.about
                                              .split('\n')
                                              .map((paragraph, index) => (
                                                  <p key={index}>
                                                      {' '}
                                                      {paragraph}{' '}
                                                  </p>
                                              ))
                                        : null}
                                </div>
                                <div className='climate-compensation'>
                                    {exhibitor.climate_compensation ? (
                                        <i style={{ fontSize: 'large' }}>
                                            <span role='img' aria-label='leaf'>
                                                &#127811;
                                            </span>{' '}
                                            This company has climate compensated
                                            for their participation in THS
                                            Armada{' '}
                                            <span role='img' aria-label='leaf'>
                                                &#127811;
                                            </span>
                                        </i>
                                    ) : null}
                                </div>
                            </div>

                            <div className='job-location-container'>
                                {exhibitor.employments&&exhibitor.employments.length > 0
                                    ? this.getJobContainer(exhibitor)
                                    : null}

                                {exhibitor.locations&&exhibitor.locations.length > 0 && (
                                    <div className='location-container'>
                                        <h3 className='modal-subheaders'>
                                            Locations
                                        </h3>
                                        <ul>
                                            {exhibitor.locations.map(
                                                (loc, index) => (
                                                    <li
                                                        key={index}
                                                        className='location-section'
                                                    >
                                                        {loc.name}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}
                                {exhibitor.competences&&exhibitor.competences.length > 0 && (
                                    <div className='competence-container'>
                                        <h3 className='modal-subheaders'>
                                            Competences
                                        </h3>
                                        <ul>
                                            {exhibitor.competences.map(
                                                (comp, index) => (
                                                    <li
                                                        key={index}
                                                        className='competence-section'
                                                    >
                                                        {comp.name}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}
                                {exhibitor.cities&&exhibitor.cities.length > 0 && (
                                    <div className='city-container'>
                                        <h3 className='modal-subheaders'>
                                            Cities
                                        </h3>
                                        <p className='city-string'>
                                            {exhibitor.cities}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }

    //TODO: combine an simplify those two functions
    //diversity and sustainability filters special effects {cssshine, cssShineOff}
    cssShine(value) {
        if (global.document !== undefined) {
            let shineItems = global.document.getElementsByClassName(value)
            for (let i = 0; i < shineItems.length; i++) {
                shineItems[i].className += ' shine-loop'
            }
        }
    }

    cssShineOff() {
        if (global.document !== undefined) {
            let shineItems =
                global.document.getElementsByClassName('shine-loop')
            while (shineItems.length > 0) {
                let className = shineItems[0].className
                shineItems[0].className = className.replace('shine-loop', '')
            }
        }
    }

    //filter functions to be called onChange
    jobFilter(value) {
        this.setdefault()
        let jobfilters = this.state.jobfilters
        jobfilters = value
        this.setState({ jobfilters })
    }

    //filter functions to be called onChange
    sectorFilter(value) {
        this.setdefault()
        let sectorfilters = this.state.sectorfilters
        sectorfilters = value
        this.setState({ sectorfilters })
    }

    competenceFilter(value) {
        this.setdefault()
        let competencefilters = this.state.competencefilters
        competencefilters = value
        this.setState({ competencefilters })
    }

    locationFilter(value) {
        this.setdefault()
        let locationfilters = this.state.locationfilters
        locationfilters = value
        this.setState({ locationfilters })
    }

    fairPlacementFilter(value){
        this.setdefault()
        let fairPlacementfilters = this.state.fairPlacementfilters
        fairPlacementfilters = value
        this.setState({ fairPlacementfilters })
    }

    showMore() {
        let showamount = this.state.showamount
        showamount = 183
        this.setState({ showamount })
    }

    setdefault() {
        let showamount = this.state.showamount
        showamount = 20
        this.setState({ showamount })
    }

    //TODO: startup, diversity, and sustainability to be combined
    startupFilter() {
        this.setdefault()
        let startupfilter = this.state.startupfilter
        if (!startupfilter) {
            startupfilter = true
        } else if (startupfilter) {
            startupfilter = false
        }
        this.setState({ startupfilter })
    }

    diversityFilter() {
        this.setdefault()
        let diversityfilter = this.state.diversityfilter
        let diversitysrc = this.state.diversitysrc
        if (diversityfilter === false) {
            diversityfilter = true
            diversitysrc = '/assets/diversity/diversity_selected.svg'
        } else if (diversityfilter === true) {
            diversityfilter = false
            diversitysrc = '/assets/diversity/diversity_a.svg'
        }
        this.setState({ diversityfilter })
        this.setState({ diversitysrc })
    }

    sustainabilityFilter() {
        this.setdefault()
        let sustainabilityfilter = this.state.sustainabilityfilter
        let sustainabilitysrc = this.state.sustainabilitysrc
        if (sustainabilityfilter === false) {
            sustainabilityfilter = true
            sustainabilitysrc =
                '/assets/sustainability/sustainability_selected.svg'
        } else if (sustainabilityfilter === true) {
            sustainabilityfilter = false
            sustainabilitysrc = '/assets/sustainability/sustainability.svg'
        }
        this.setState({ sustainabilityfilter })
        this.setState({ sustainabilitysrc })
    }

    //build options for dropdown filters
    buildOptions(array) {
        var listitems = []

        for (let i = 0; i < array.length; i++) {
            listitems.push(
                <option key={array[i]} value={array[i]}>
                    {array[i]}
                </option>
            )
        }
        return listitems
    }

    //TODO: divide and simplify into nested components
    render() {
        // Here you decide if list of exhibitors should be displayed or not
        let showExhibitors = true
        let thisYear = new Date().getFullYear().toString()
        if (this.year === thisYear) {
            showExhibitors = false
        }
        let exhibitorToDisplay = this.state.exhibitors.filter(
            exhibitor => exhibitor.name === this.state.exhibitorName
        )[0]
        console.log(exhibitorToDisplay)
        let filteredCompanies = this.state.exhibitorList.filter(
            exhibitorItem => {
                return exhibitorItem.props.name
                    .toLowerCase()
                    .startsWith(this.state.search.toLowerCase())
            }
        )
        if (filteredCompanies.length < 1) {
            filteredCompanies = this.state.exhibitorList.filter(
                exhibitorItem => {
                    return (
                        exhibitorItem.props.name
                            .toLowerCase()
                            .indexOf(this.state.search.toLowerCase()) !== -1
                    )
                }
            )
        }

        //Diversity filter
        if (this.state.diversityfilter) {
            filteredCompanies = filteredCompanies.filter(exhibitorItem => {
                return (
                    exhibitorItem.props.exhibitor.location_special ===
                    'Diversity Room'
                )
            })
        }

        //Sustainability filter
        if (this.state.sustainabilityfilter) {
            filteredCompanies = filteredCompanies.filter(exhibitorItem => {
                return (
                    exhibitorItem.props.exhibitor.location_special ===
                    'Green Room'
                )
            })
        }

        // Startup filter
        if (this.state.startupfilter) {
            filteredCompanies = filteredCompanies.filter(exhibitorItem => {
                return exhibitorItem.props.exhibitor.groups.name === 'startup'
            })
        }

        //Job type filter
        for (let filterkey in this.state.jobfilters) {
            if (this.state.jobfilters[filterkey]) {
                filteredCompanies = filteredCompanies.filter(exhibitorItem => {
                    for (let jobtypeindex in exhibitorItem.props.exhibitor
                        .employments) {
                        if (
                            exhibitorItem.props.exhibitor.employments[
                                jobtypeindex
                            ].name === this.state.jobfilters[filterkey].value
                        ) {
                            return true
                        }
                    }
                    return false
                })
            }
        }

        //Sector type filter
        for (let filterkey in this.state.sectorfilters) {
            if (this.state.sectorfilters[filterkey]) {
                filteredCompanies = filteredCompanies.filter(exhibitorItem => {
                    for (let sectorindex in exhibitorItem.props.exhibitor
                        .industries) {
                        if (
                            exhibitorItem.props.exhibitor.industries[
                                sectorindex
                            ].name === this.state.sectorfilters[filterkey].value
                        ) {
                            return true
                        }
                    }
                    return false
                })
            }
        }

        //Sector type filter
        for (let filterkey in this.state.competencefilters) {
            if (this.state.competencefilters[filterkey]) {
                filteredCompanies = filteredCompanies.filter(exhibitorItem => {
                    for (let competenceindex in exhibitorItem.props.exhibitor
                        .competences) {
                        if (
                            exhibitorItem.props.exhibitor.competences[
                                competenceindex
                            ].name ===
                            this.state.competencefilters[filterkey].value
                        ) {
                            return true
                        }
                    }
                    return false
                })
            }
        }

        //Location type filter
        for (let filterkey in this.state.locationfilters) {
            if (this.state.locationfilters[filterkey]) {
                filteredCompanies = filteredCompanies.filter(exhibitorItem => {
                    for (let locationindex in exhibitorItem.props.exhibitor
                        .locations) {
                        if (
                            exhibitorItem.props.exhibitor.locations[
                                locationindex
                            ].name ===
                            this.state.locationfilters[filterkey].value
                        ) {
                            return true
                        }
                    }
                    return false
                })
            }
        }

        let showall =
            filteredCompanies.length > this.state.showamount ? true : false
        function toggleFilterVisibility(){
            const filterContainer = document.getElementById("filter-container");
            filterContainer.classList.toggle("hidden");
        }
        if (showExhibitors) {
            return (
                <div className='exhibitors'>
                    {/* <h1>
                        {this.props.lastYear ? "Last Year's " : ''}Exhibitors
                    </h1>
                    <br />
                    <p
                        style={{
                            width: '90%',
                            margin:'0em 2em 0em 2em',
                            paddingBottom: this.props.lastYear ? '1em' : {},
                        }}
                    >
                        {this.props.lastYear ? (
                            `These are the exhibitors from the ${this.state.previousYear} fair.`
                        ) : (
                            <span>
                                <span className='bold'>
                                    Sustainability & Diversity
                                </span>{' '}
                                form the core values at the heart of our
                                organization. To highlight our core values, we
                                have chosen to dedicate focus areas of the fair
                                called Green Room and Diversity Room. If an
                                exhibitor is tagged with one of the images
                                below, they are in one of these rooms!
                            </span>
                        )}
                    </p> */}
                    {this.state.showModal
                        ? this.displayExhibitor(exhibitorToDisplay)
                        : null}
                    {this.props.showCV && (
                        <div
                            className={`filter-special ${
                                this.props.lastYear ? 'display-none' : ''
                            }`}
                        >
                            <input
                                id='diversity'
                                type='image'
                                alt='diversity filter'
                                src={this.state.diversitysrc}
                                onClick={() => this.diversityFilter()}
                            />
                            <input
                                id='sustainability'
                                type='image'
                                alt='sustainability filter'
                                src={this.state.sustainabilitysrc}
                                onClick={() => this.sustainabilityFilter()}
                            />
                        </div>
                    )}

                    <div className='search'>
                        <div className='search-container'>
                            <div className='search-line'>
                                <input
                                    type='text'
                                    placeholder='Search Exhibitors'
                                    aria-label='search'
                                    value={this.state.search}
                                    onChange={this.updateSearch.bind(this)}
                                />
                                {/* <button id='search-button'>Search</button> */}
                                <button id='filter-button' onClick={toggleFilterVisibility}>Filters</button>
                                {/* <Collapsible 
                                    trigger={"Filters"} 
                                    triggerStyle={dropDownAttributes}
                                > */}
                            </div>
                            <div id='filter-container'>
                            <Select
                                closeMenuOnSelect={false}
                                blurInputOnSelect={false}
                                isMulti
                                isSearchable
                                name='Job filter'
                                placeholder='All Jobs'
                                options={this.state.jobs}
                                onChange={event => this.jobFilter(event)}
                                className='basic-multi-select'
                                classNamePrefix='select'
                            />

                            <Select
                                closeMenuOnSelect={false}
                                blurInputOnSelect={false}
                                isMulti
                                isSearchable
                                name='Sector filter'
                                placeholder='All Industries'
                                options={this.state.sectors}
                                onChange={event => this.sectorFilter(event)}
                                className='basic-multi-select'
                                classNamePrefix='select'
                            />

                            <Select
                                closeMenuOnSelect={false}
                                blurInputOnSelect={false}
                                isMulti
                                isSearchable
                                name='Competence filter'
                                placeholder='All Competences'
                                options={this.state.competences}
                                onChange={event => this.competenceFilter(event)}
                                className='basic-multi-select'
                                classNamePrefix='select'
                            />

                            <Select
                                closeMenuOnSelect={false}
                                blurInputOnSelect={false}
                                isMulti
                                isSearchable
                                name='Location filter'
                                placeholder='All Locations'
                                options={this.state.locations}
                                onChange={event => this.locationFilter(event)}
                                className='basic-multi-select'
                                classNamePrefix='select'
                            />

                            <Select
                                closeMenuOnSelect={false}
                                blurInputOnSelect={false}
                                isMulti
                                isSearchable
                                name='Fair Placement filter'
                                placeholder='All Fair Placements'
                                options={this.state.fair_placements}
                                onChange={event => this.fairPlacementFilter(event)}
                                className='basic-multi-select'
                                classNamePrefix='select'
                            />
                            </div>
                        {/* </Collapsible> */}
                        </div>
                        {showFilters?(
                        <div
                            className={`filters ${
                                this.props.lastYear ? 'display-none' : ''
                            }`}
                        >
                          
                        </div>):null}
                    </div>

                    {/*<div className='supercontainer'>
                        <p className='matching_link'>
                            Pssst! Find your perfect company by using Armada's
                            new{' '}
                            <Link
                                className='matching_link_style'
                                to='/matching'
                            >
                                matching functionality!
                            </Link>
                        </p>
                        </div>*/}

                    {/* TODO: everything should be dynamic instead of hard-coded */}

                    <div className='loading'>
                        {this.state.isLoading ? <Loading /> : null}
                    </div>
                    <div className='exhibitor-feed'>
                        {filteredCompanies.length && !this.state.isLoading ? (
                            filteredCompanies.splice(0, this.state.showamount)
                        ) : (
                            <div className='Noresultsfound'>
                                {!this.state.isLoading ? (
                                    <div>
                                        <p className='noresultstext'>
                                            Sorry, we couldn&apos;t find any
                                            companies that match your search.
                                            Please look at our cat instead!
                                        </p>
                                        <Cat />
                                    </div>
                                ) : null}
                            </div>
                        )}
                    </div>
                    {showall ? (
                        <div className='showmore-container'>
                            <button
                                className='showmorebutton'
                                onClick={() => this.showMore()}
                            >
                                Show All
                            </button>
                        </div>
                    ) : null}
                </div>
            )
        } else {
            return <div>Exhibitors will be released after summer.</div>
        }
    }
}

//TODO: stop using proptypes
//TODO: reorg of this code into proper places

ExhibitorList.propTypes = {
    exhibitorName: PropTypes.string,
    onChangeExhibitorName: PropTypes.func,
    lastYear: PropTypes.bool,
    year: PropTypes.string,
    showCV: PropTypes.bool,
}

/*let toExport
if (global.window !== undefined) {
    toExport = addUrlProps({ urlPropsQueryConfig })(ExhibitorList)
} else {
    toExport = ExhibitorList
}
export default toExport
*/
export default ExhibitorList
const ExhibitorItem = props => {
    let classname = props.exhibitor.sustainability ? ' green' : ''
    classname += props.exhibitor.diversity ? ' purple' : ''

    return (
        <div
            id={props.exhibitor.id}
            role='presentation'
            className={'exhibitor-box ' + classname}
            onClick={() => {
                const exhibitorBoxes = document.getElementsByClassName('exhibitor-box');
                for(const box of exhibitorBoxes){
                    box.style.backgroundColor = '#fafafa';
                }
                document.getElementById(props.exhibitor.id).style.backgroundColor = '#00d790';
                props.showModal(props.exhibitor.name)
            }}
        >
            <div className='image-container'>
                {props.exhibitor.logo_squared != null && (
                    <img
                        alt={props.exhibitor.name}
                        src={props.exhibitor.logo_squared}
                    />
                )}
            </div>
            <p> {props.exhibitor.name} </p>
            {props.exhibitor.location_special === 'Diversity Room' ? (
                <div className='corner-special'>
                    <img
                        alt=''
                        src='/assets/diversity/diversity-black-nolabel.png'
                    />
                </div>
            ) : null}
            {props.exhibitor.location_special === 'Green Room' ? (
                <div className='corner-special'>
                    <img
                        alt=''
                        src='/assets/sustainability/sustainability-black-nolabel.png'
                    />
                </div>
            ) : null}
        </div>
    )
}

ExhibitorItem.propTypes = {
    name: PropTypes.string,
    exhibitor: PropTypes.object,
    showModal: PropTypes.func,
}
