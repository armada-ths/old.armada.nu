import React from 'react'
import './index.scss'
import Telenor from '../../../static/assets/PartnerLogos/Telenor_Logo.svg'
import Sture from '../../../static/assets/PartnerLogos/sture-logo.png'
/* This can't be hardcoded :( */

const PartnerLogos = () => {
    return (
        <div className='partners'>
            <h1 className='partnersTitle'>Armada 2023 Partners</h1>
            <div className='partnersGallery'>
                <img alt='Telenor' src={Telenor} />
                <img alt='Sture' src={Sture} id='sture' />
            </div>
        </div>
    )
}
export default PartnerLogos
