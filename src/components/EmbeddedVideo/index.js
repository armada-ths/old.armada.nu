import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import './index.scss'
const EmbeddedVideo = ({ videoLink }) => {
    return (
        <div className='videoPlayer'>
            <ReactPlayer
                width='100%'
                height='100%'
                controls={true}
                className='reactPlayer'
                url={videoLink}
            />
        </div>
    )
}
EmbeddedVideo.propTypes = {
    videoLink: PropTypes.string,
}
export default EmbeddedVideo
