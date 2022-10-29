import React from 'react'
import './index.scss'
import Alstom from '../../../static/assets/PartnerLogos/Alstom_Logo_Screen.png'
import SSAB from '../../../static/assets/PartnerLogos/SSAB_Logo_Screen.png'
import Futurice from '../../../static/assets/PartnerLogos/Futurice_Logo_Screen.png'
import ERI from '../../../static/assets/PartnerLogos/ERI_vertical_Logo_Screen.png'
import Siemens from '../../../static/assets/PartnerLogos/SE_Logo_Color_RGB.png'

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
