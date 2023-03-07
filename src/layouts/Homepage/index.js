import React from 'react'
import PartnerLogos from '../../components/PartnerLogosLocal'
import './index.scss'
import Page from '../../templates/page';
import Loading from '../../components/Loading';
import Loadable from 'react-loadable'
import Newsfeed from '../../components/Newsfeed';

const Homepage = (props) => {

  const PhotoGallery = Loadable({ loader: () => import('../../components/PhotoGallery'), loading() { return <Loading/> }});

  return (

      <div className='homepage'>
        <Page { ...props }/>
        <Newsfeed/>
          <PhotoGallery photoCount={6}/>
          <PartnerLogos/>
      </div>

  )
}

export default Homepage
