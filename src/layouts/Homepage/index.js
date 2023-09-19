import React from 'react'
import PartnerLogos from '../../components/PartnerLogosLocal'
import './index.scss'
import Page from '../../templates/page'
import Loading from '../../components/Loading'
import Loadable from 'react-loadable'
import Newsfeed from '../../components/Newsfeed'
import { Zoom } from 'react-awesome-reveal'
import GifHoverButtons from '../../components/GifButtons'
/* Started edit by Nima Sep to redesign homepage.
Using https://codesandbox.io/s/react-spring-useinview-example-3f20nz?from-embed=&file=/src/App.js:334-337 inspiration (react-springs)
*/
const Homepage = props => {
    const PhotoGallery = Loadable({
        loader: () => import('../../components/PhotoGallery'),
        loading() {
            return <Loading />
        },
    })

    return (
        <>
            <div className='homepage'>
                <Page {...props} />
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
