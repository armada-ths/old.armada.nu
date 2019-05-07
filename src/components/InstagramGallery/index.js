import React from 'react';
import PropTypes from "prop-types";

import './instagram-gallery.scss';

class InstagramImage extends React.Component {
    render() {
        return (
            <div className="instagram-image">
                <div className="square">
                    <div className="image-info">
                        caption
                    </div>
                </div>
            </div>
        );
    }
}

InstagramImage.propTypes = {
    imageUrl: PropTypes.string,
    caption: PropTypes.string,
    likeCount: PropTypes.number,
    commentCount: PropTypes.number,
};

class InstagramGallery extends React.Component {
    render() {
        return (
            <div className="instagram-gallery">
                <InstagramImage />
                <InstagramImage />
                <InstagramImage />
                <InstagramImage />
                <InstagramImage />
                <InstagramImage />
            </div>
        );
    }
}

InstagramGallery.propTypes = {
};

export default InstagramGallery;
