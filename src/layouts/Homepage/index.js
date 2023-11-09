import React from 'react'
import PartnerLogos from '../../components/PartnerLogosLocal'
import './index.scss'
import Page from '../../templates/page'
import Loading from '../../components/Loading'
import Loadable from 'react-loadable'
import Newsfeed from '../../components/Newsfeed'
import { Zoom } from 'react-awesome-reveal'
//import GifHoverButtons from '../../components/GifButtons'
import EventList from '../../components/EventList'
import { useInView, animated } from 'react-spring'
/* Started edit by Nima Sep to redesign homepage.
Using https://codesandbox.io/s/react-spring-useinview-example-3f20nz?from-embed=&file=/src/App.js:334-337 inspiration (react-springs)

Removed the Page component as of Sep 2023.
*/

const HomepageInfo = () => {
    return (
        <div>
            <div
                style={{
                    border: '4px dashed #00d790',
                    marginTop: '10px',
                    padding: '10px',
                }}
                className='homepageInfoBox'
            >
                <p id='title'>IT'S FINALLY HERE</p>
                <p id='subheader'>
                    The exhibitor map with all the booth placements and
                    exhibitor catalogue is now live!
                </p>
                <p id='text'>
                    Check out all the exhibitors and the companies you match
                    best with in the brand new Armada Map
                </p>
                <a href='/map'>
                    <button>Check It Out</button>
                </a>
            </div>
            <div className='homepageInfoBox'>
                <p id='title'>THS ARMADA 2023</p>
                <p id='subheader'>
                    The largest career fair in Scandinavia is back for 2023
                </p>
                <p id='text'>
                    Hello and welcome to THS Armada 2023! This year, the THS
                    Armada fair is back and bringing exhibitors and students
                    closer together. Come by to see our all-new exhibitions,
                    booths and presentations. We are bringing back the fair in
                    style, with a new colourful array of exhibitors in Nymble
                    over two days. Make sure not to miss anything! See you in
                    November!
                </p>
                <div id='buttons'>
                    <a id='a1' href='/at-the-fair'>
                        <button id='b1'>At the Fair</button>
                    </a>
                    <a id='a1' href='/about'>
                        <button id='b1'>Read More</button>
                    </a>
                    <a id='a2' href='/map'>
                        <button id='b2'>Explore the Exhibitors</button>
                    </a>
                    <a id='a3' href='/for-companies'>
                        <button id='b3'>Partner with us</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

const Homepage = props => {
    const [ref, inView] = useInView(
        () => ({
            from: {
                opacity: 0,
                y: 100,
            },
            to: {
                opacity: 1,
                y: 0,
            },
            config: {
                velocity: 100,
                friction: 50,
            },
        }),
        {
            rootMargin: '20% 0% 0% 0%',
        }
    )
    const [ref2, inView2] = useInView(
        () => ({
            from: {
                opacity: 0,
                y: 100,
            },
            to: {
                opacity: 1,
                y: 0,
            },
            config: {
                velocity: 100,
                friction: 50,
            },
        }),
        {
            rootMargin: '20% 0% 0% 0%',
        }
    )

    const PhotoGallery = Loadable({
        loader: () => import('../../components/PhotoGallery'),
        loading() {
            return <Loading />
        },
    })

    return (
        <>
            <animated.div ref={ref} style={inView}>
                <HomepageInfo />
            </animated.div>
            <animated.div ref={ref2} style={inView2}>
                <div className='Events-container'>
                    <EventList />
                </div>
            </animated.div>
            {/*<GifHoverButtons />*/}
            <div className='homepage'>
                <Newsfeed />
                <PartnerLogos />
                {/*<PhotoGallery photoCount={6} /> Armada pictures are removed for now since the slideshow is bugged. Will readd in Okt-Nov*/}
            </div>
        </>
    )
}

export default Homepage
