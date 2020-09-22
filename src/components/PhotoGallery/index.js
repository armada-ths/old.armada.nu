import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import Zoom from 'react-reveal/Zoom'
import axios from 'axios'

const FLICKR_API_KEY = '381c0c551c89c0f23e326456eae0c6a8'
const FLICKR_PHOTOSET_ID = '72157708626862634'
const FLICKR_USER_ID = '51450332@N02'

const Photo = props => {
    const fileURL = props.fileURL
    const pageURL = props.pageURL
    const bgStyle = {
        backgroundImage: `url('${fileURL}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        <Zoom>
            <div className='photo'>
                <div className='square' style={bgStyle}>
                    <a
                        className='photo-info'
                        target='_blank'
                        rel='noreferrer'
                        href={pageURL}
                    >
                        {props.title}
                    </a>
                </div>
            </div>
        </Zoom>
    )
}

Photo.propTypes = {
    fileURL: PropTypes.string,
    pageURL: PropTypes.string,
    title: PropTypes.string,
}

const PhotoGallery = props => {
    const [loaded, setLoaded] = useState(false)
    const [photos, setPhotos] = useState([])
    const [startFrom, setStartFrom] = useState()

    let interval

    useEffect(() => {
        axios
            .get(generateFlickrApiURL())
            .then(res => {
                setLoaded(true)
                setPhotos(res.data.photoset.photo)
                interval = setInterval(() => cyclePhotos(), 10000)
            })
            .catch(err => console.error(err))
    }, [])

    const generateFlickrApiURL = () => {
        return `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${FLICKR_PHOTOSET_ID}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1`
    }

    const generateFlickrPhotoFileURL = (farmId, serverId, photoId, secret) => {
        return `https://farm${farmId}.staticflickr.com/${serverId}/${photoId}_${secret}_n.jpg`
    }

    const generateFlickrPhotoPageURL = photoId => {
        return `https://www.flickr.com/photos/armadakth/${photoId}/in/album-${FLICKR_PHOTOSET_ID}/`
    }

    const cyclePhotos = () => {
        setStartFrom((startFrom + props.photoCount) % photos.length)
    }

    const photoCount = props.photoCount

    let _photos = []
    if (loaded) {
        _photos = photos.slice(startFrom, startFrom + photoCount)
        if (_photos.length < photoCount) {
            _photos = [
                ..._photos,
                ...photos.slice(0, photoCount - _photos.length),
            ]
        }
    }

    return (
        <div>
            <h1 className='gallery-title'>Armada in pictures</h1>
            <div className='photo-gallery'>
                {loaded &&
                    _photos.map(p => (
                        <Photo
                            key={p.id}
                            fileURL={generateFlickrPhotoFileURL(
                                p.farm,
                                p.server,
                                p.id,
                                p.secret
                            )}
                            pageURL={generateFlickrPhotoPageURL(p.id)}
                            title={p.title}
                        />
                    ))}
            </div>
        </div>
    )
}

PhotoGallery.propTypes = {
    photoCount: PropTypes.number,
}

export default PhotoGallery
