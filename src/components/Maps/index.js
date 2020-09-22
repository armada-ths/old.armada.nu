import React from 'react'
import './index.scss'
import { isSafari, isMobile } from 'react-device-detect'

const Maps = () => {
    const divScroll = () => {
        document.body.style.overflow = 'hidden'
    }

    return (
        <div>
            <div className='center'>
                <h1 className='helmet'>Maps</h1>
                {!isMobile && !isSafari && (
                    <div className='map-instructions'>
                        <h3 className='map-inst-header'>
                            How to use the map below
                        </h3>
                        <h4 className='map-steps'>
                            Double click mouse button to zoom in
                        </h4>
                        <h4 className='map-steps'>
                            Shift + double click mouse button to zoom out
                        </h4>
                    </div>
                )}
                {!isMobile && !isSafari && (
                    <div className='map-grid'>
                        <iframe
                            role='presentation'
                            title='vyer'
                            className='vyer-map'
                            onMouseOver={divScroll}
                            onFocus={divScroll}
                            src='https://app.vyer.com/site/siAHJfkxortC8DtAftEkfeNa/filter?story=syLyAScxudoXAnsGW12XTuLj'
                        />
                    </div>
                )}
                {(isMobile || isSafari) && (
                    <div className='map-icon-container'>
                        <a
                            aria-label='map'
                            href='https://app.vyer.com/site/siAHJfkxortC8DtAftEkfeNa?story=syLyAScxudoXAnsGW12XTuLj'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                alt=''
                                className='mobile-map-icon'
                                src='/assets/mapicon.png'
                            />
                        </a>
                    </div>
                )}
                {!isMobile && !isSafari && (
                    <h3 className='vyer-link'>
                        <a
                            href='https://app.vyer.com/site/siAHJfkxortC8DtAftEkfeNa/filter?story=syLyAScxudoXAnsGW12XTuLj'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Open map in separate tab
                        </a>
                    </h3>
                )}
                <h4 className='powered-by'>Map powered by</h4>
                <div className='vyer-icon-container'>
                    <a href='https://www.vyer.io/' aria-label='vyer'>
                        <img
                            alt=''
                            className='vyer-icon'
                            src='/assets/vyer.png'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Maps
