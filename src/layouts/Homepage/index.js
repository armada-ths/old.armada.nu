import React from 'react'
import PartnersGallery from '../../components/PartnersGallery';
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
          <PartnersGallery mainOnly/>
      </div>

  )
}

export default Homepage
