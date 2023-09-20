import React from 'react'
import PartnerLogos from '../../components/PartnerLogosLocal'
import './index.scss'
import Page from '../../templates/page'
import Loading from '../../components/Loading'
import Loadable from 'react-loadable'
import Newsfeed from '../../components/Newsfeed'
import { Zoom } from 'react-awesome-reveal'
import GifHoverButtons from '../../components/GifButtons'
import EventList from '../../components/EventList'
/* Started edit by Nima Sep to redesign homepage.
Using https://codesandbox.io/s/react-spring-useinview-example-3f20nz?from-embed=&file=/src/App.js:334-337 inspiration (react-springs)

Removed the Page component as of Sep 2023.
*/

const HomepageInfo = () => {
    return (
        <div className='homepageInfoBox'>
            <p id='title'>THS ARMADA 2023</p>
            <p id='subheader'>
                The largest career fair in Scandinavia is back for 2023
            </p>
            <p id='text'>
                Hello and welcome to THS Armada 2023! This year, the THS Armada
                fair is back and bringing exhibitors and students closer
                together. Come by to see our all-new exhibitions, booths and
                presentations. We are bringing back the fair in style, with a
                new colourful array of exhibitors in Nymble over two days. Make
                sure not to miss anything! See you in November!
            </p>
            <div id='buttons'>
                <a href='/about'>
                    <button id='b1'>Read More</button>
                </a>
                <a href='/exhibitors'>
                    <button id='b2'>Explore the Exhibitors</button>
                </a>
                <a href='/for-companies'>
                    <button id='b3'>Partner with us</button>
                </a>
            </div>
        </div>
    )
}

const Homepage = props => {
    const PhotoGallery = Loadable({
        loader: () => import('../../components/PhotoGallery'),
        loading() {
            return <Loading />
        },
    })

    return (
        <>
            <HomepageInfo />
            <div className='Events-container'>
                <EventList />
            </div>
            <GifHoverButtons />
            <div className='homepage'>
                <Zoom cascade triggerOnce damping='0.3'>
                    <Newsfeed />
                    <PhotoGallery photoCount={6} />
                    <PartnerLogos />
                </Zoom>
            </div>
        </>
    )
}

export default Homepage
