import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import Modal from '../Modal'
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query'
import { isSafari } from 'react-device-detect'

const urlPropsQueryConfig = {
    mapId: { type: UrlQueryParamTypes.number, queryParam: 'mapId' },
}

const Maps = props => {
    const [showModal, setShowModal] = useState(false)
    const [mapId, setMapId] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        if (props.mapId !== undefined) {
            this.setState({ mapId: this.props.mapId, showModal: true })
        }
        if (window.innerWidth < 850) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    })

    const selectMapId = _mapId => {
        setShowModal(!showModal)
        setMapId(_mapId)
        props.onChangeMapId(mapId)
    }

    const displayMap = map => {
        return (
            <Modal onClose={() => selectMapId(null)}>
                <div>
                    <img alt='' src={map.url} />
                    <img alt='' src={map.listurl} />
                </div>
                <h3>{map.name}</h3>
            </Modal>
        )
    }

    const divScroll = () => {
        document.body.style.overflow = 'hidden'
    }

    //let specialrooms = <div><h4 className='space'>Green room</h4><p>Gamla matsalen, Nymble </p><h4 className='diversity space'>Diversity room</h4><p>Puben, Nymble</p></div>;

    return (
        <div>
            <div className='center'>
                <h1 className='helmet'>Maps</h1>
                {!mobile && !isSafari && (
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
                {!mobile && !isSafari && (
                    <div className='map-grid'>
                        <iframe
                            role='presentation'
                            title='vyer'
                            className='vyer-map'
                            onMouseOver={this.divScroll}
                            onFocus={this.divScroll}
                            src='https://app.vyer.com/site/siAHJfkxortC8DtAftEkfeNa/filter?story=syLyAScxudoXAnsGW12XTuLj'
                        />
                    </div>
                )}
                {mobile ||
                    (isSafari && (
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
                    ))}
                {!mobile && !isSafari && (
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

Maps.propTypes = {
    mapId: PropTypes.number,
    onChangeMapId: PropTypes.func,
}

let toExport
if (global.window !== undefined) {
    toExport = addUrlProps({ urlPropsQueryConfig })(Maps)
} else {
    toExport = Maps
}
export default toExport
