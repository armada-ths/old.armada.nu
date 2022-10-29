import React from 'react'
import './index.scss'
import Alstom from '../../../static/assets/PartnerLogos/Alstom_Logo_Screen.png'

const PartnerLogos = () => {
    return (
        <div className="partners">
        <h1 className="partnersTitle" >Armada 2022 Partners</h1>
        <div className='partnersGallery'>
           <img alt="Alstom" src={Alstom}/>
        </div>
         
        </div>
    )
}
export default PartnerLogos
