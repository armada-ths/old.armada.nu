import React from 'react';
import PropTypes from "prop-types";

import './photo-gallery.scss';

const FLICKR_API_KEY = '381c0c551c89c0f23e326456eae0c6a8';
const FLICKR_PHOTOSET_ID = '72157704339470804';
const FLICKR_USER_ID = '51450332@N02';

class Photo extends React.Component {
    render() {
        const fileURL = this.props.fileURL;
        const pageURL = this.props.pageURL;
        const bgStyle = {
            backgroundImage: `url("${fileURL}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };
        return (
            <div className="photo">
                <div className="square" style={bgStyle}>
                    <a className="photo-info" target="_blank" href={pageURL}>
                        {this.props.title}
                    </a>
                </div>
            </div>
        );
    }
}

Photo.propTypes = {
    fileURL: PropTypes.string,
    pageURL: PropTypes.string,
    title: PropTypes.string,
};

class PhotoGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            photos: []
        };
    }

    componentDidMount() {
        fetch(this.generateFlickrApiURL())
            .then(res => res.json())
            .then(res => {
                this.setState({
                    loaded: true,
                    photos: res.photoset.photo
                });
            })
            .catch(err => {
                this.setState({
                    error: err
                });
            });
    }

    render() {
        const maxPhotoCount = this.props.maxPhotoCount || 1000;
        return (
            <div className="photo-gallery">
                { !this.state.loaded ? 
                    <span></span> :
                    this.state.photos.slice(0, maxPhotoCount).map(photo => {
                        return <Photo key={photo.id}
                            fileURL={this.generateFlickrPhotoFileURL(photo.farm, photo.server, photo.id, photo.secret)}
                            pageURL={this.generateFlickrPhotoPageURL(photo.id)}
                            title={photo.title} />
                    })
                }
            </div>
        );
    }

    generateFlickrApiURL() {
        return `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${FLICKR_PHOTOSET_ID}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1`;
    }

    generateFlickrPhotoFileURL(farmId, serverId, photoId, secret) {
        return `https://farm${farmId}.staticflickr.com/${serverId}/${photoId}_${secret}_n.jpg`;
    }

    generateFlickrPhotoPageURL(photoId) {
        return `https://www.flickr.com/photos/armadakth/${photoId}/in/album-${FLICKR_PHOTOSET_ID}/`;
    }
}

PhotoGallery.propTypes = {
    maxPhotoCount: PropTypes.number
};

export default PhotoGallery;
