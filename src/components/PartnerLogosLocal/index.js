import React from 'react'
import './index.scss'
import Telenor from '../../../static/assets/PartnerLogos/Telenor_Logo.svg'
import Sture from '../../../static/assets/PartnerLogos/sture-logo.png'
import FM from '../../../static/assets/PartnerLogos/fm.png'
import ESA from '../../../static/assets/PartnerLogos/ESA-logo.png'
import Nordea from '../../../static/assets/PartnerLogos/nordea-logo.png'
import FMV from '../../../static/assets/PartnerLogos/fmv-logo.svg'

const PartnerLogos = () => {
    return (
        <div className='partners'>
            <h1 className='partnersTitle'>Armada 2023 Partners</h1>
            <div className='partnersGallery'>
                <a href='https://www.telenor.se/'>
                    <img
                        alt='Telenor'
                        src={Telenor}
                        id='telenor'
                        className='partnerImage'
                    />
                </a>
                <a href='https://www.sture.se/'>
                    <img
                        alt='Sture'
                        src={Sture}
                        id='sture'
                        className='partnerImage'
                    />
                </a>
                <a href='https://www.forsvarsmakten.se/'>
                    <img
                        alt='Försvarsmakten'
                        src={FM}
                        id='fm'
                        className='partnerImage'
                    />
                </a>
                <a href='https://www.esa.int/'>
                    <img
                        alt='European Space Agency'
                        src={ESA}
                        className='partnerImage'
                        id='esa'
                    />
                </a>
                <a href='https://www.nordea.se/'>
                    <img
                        alt='Nordea'
                        src={Nordea}
                        className='partnerImage'
                        id='nordea'
                    />
                </a>
                <a href='https://www.fmv.se/'>
                    <img
                        alt='Försvarets Materielverk'
                        src={FMV}
                        className='partnerImage'
                        id='fmv'
                    />
                </a>
            </div>
        </div>
    )
}

export default PartnerLogos
