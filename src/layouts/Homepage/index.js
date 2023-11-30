import React from 'react'
import PartnerLogos from '../../components/PartnerLogosLocal'
import './index.scss'
import Page from '../../templates/page'
import Loading from '../../components/Loading'
import Loadable from 'react-loadable'
import Newsfeed from '../../components/Newsfeed'
//import GifHoverButtons from '../../components/GifButtons'
import EventList from '../../components/EventList'
import { useInView, animated } from 'react-spring'
import SquareButton from './SquareButton'
/* Started edit by Nima Sep to redesign homepage.
Using https://codesandbox.io/s/react-spring-useinview-example-3f20nz?from-embed=&file=/src/App.js:334-337 inspiration (react-springs)

Removed the Page component as of Sep 2023.
*/

const HomepageInfo = () => {
    return (
        <div>
            <div className='homepageInfoBox'>
                <p id='title'>THS ARMADA 2023</p>
                <div
                    class='info-border-box text'
                    style={{ textAlign: 'center' }}
                >
                    <h3 style={{ textAlign: 'center' }}>
                        Opening hours for 2023 fair
                    </h3>
                    <br />
                    <b>Tuesday 21st November:</b> 10:00 - 16:00
                    <br />
                    <b>Wednesday 22nd November:</b> 10:00 - 15:00
                </div>
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
                    <SquareButton
                        idNr={'1'}
                        hrefVal={'/at-the-fair'}
                        textVal={'At the Fair'}
                    />
                    <SquareButton
                        idNr={'1'}
                        hrefVal={'/about'}
                        textVal={'Read More'}
                    />
                    <SquareButton
                        idNr={'2'}
                        hrefVal={'/map'}
                        textVal={'Explore the Exhibitors'}
                    />
                    <SquareButton
                        idNr={'3'}
                        hrefVal={'/for-companies'}
                        textVal={'Partner with us'}
                    />
                </div>
                <h3 style={{ marginTop: '20px' }}>
                    Check out the brand new Armada <a href='/map'>Map</a>
                </h3>
                <p id='text'>
                    This year we created from scratch a brand new interactive
                    map that provides you with all the information you need to
                    make the best decision for yourself to which companies you
                    should visit. This replaces the old printed exhibitor lists
                    we've had in the past and gives a dynamic experience of the
                    fair. Check it out <a href='/map'>here</a>
                </p>
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

            {/*<GifHoverButtons />*/}
            <div className='homepage'>
                <Newsfeed />
                <PartnerLogos />
                {/*<PhotoGallery photoCount={6} /> Armada pictures are removed for now since the slideshow is bugged. Will readd in Okt-Nov*/}
            </div>
            <animated.div ref={ref2} style={inView2}>
                <div className='Events-container'>
                    <EventList />
                </div>
            </animated.div>
        </>
    )
}

export default Homepage
