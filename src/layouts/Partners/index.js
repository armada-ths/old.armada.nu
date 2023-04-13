import React from 'react'
import './index.scss'
import Page from '../../templates/page'
import PartnersGallery from '../../components/PartnersGallery'

const Partners = props => {
    return (
        <div className='content'>
            <div className='aboutpage-container'>
                <Page {...props} />
                <PartnersGallery />
            </div>
        </div>
    )
}

export default Partners
