import './index.scss'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
/*New slideshow component (used primarily for homepage BUT can now be REUSED), remade from PhotoGallery comp, /Nima 
Please message me if something is unclear, the old component had no comments at all
*/

const SlideShowGallery = ({ gridAmount }) => {
    const FLICKR_API_KEY = '381c0c551c89c0f23e326456eae0c6a8'
    const FLICKR_PHOTOSET_ID = '72157708626862634'
    const FLICKR_USER_ID = '51450332@N02'

    function generateFlickrApiURL() {
        return `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${FLICKR_PHOTOSET_ID}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1`
    } //some jquerying going on

    const [loading, setLoading] = useState(true)
    const [images, setImages] = useState([])
    useEffect(() => {
        const loadPics = async () => {
            setLoading(true)

            const res = await axios.get(generateFlickrApiURL())
            setImages(res)

            setLoading(false)
        }
        loadPics()
    }, [])
}
