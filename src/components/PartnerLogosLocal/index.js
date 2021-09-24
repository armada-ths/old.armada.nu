import React from 'react'
import './index.scss'
import ABB from '../../../static/assets/PartnerLogos/ABB_Logo_Screen.png'
import SSAB from '../../../static/assets/PartnerLogos/SSAB_Logo_Screen.png'
import Futurice from '../../../static/assets/PartnerLogos/Futurice_Logo_Screen.png'
import ERI from '../../../static/assets/PartnerLogos/ERI_vertical_Logo_Screen.png'
import Siemens from '../../../static/assets/PartnerLogos/SE_Logo_Color_RGB.png'

const PartnerLogos = () => {
    return (
        <div className="partners">
        <h1 className="partnersTitle" >Armada 2021 Partners</h1>
        <div className='partnersGallery'>
           <img alt="ABB" src={ABB}></img>
           <img alt="Ericsson" src={ERI}></img>
           <img alt="Siemens"src={Siemens}></img>
           <img alt="SSAB" src={SSAB}></img>
           <img className = "Futurice" alt="Futurice" src={Futurice}></img>
        </div>
         
        </div>
    )
}
export default PartnerLogos
