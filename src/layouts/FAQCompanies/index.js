import React from 'react'
import FAQExhibitors from '../../components/FAQExhibitors'

import './index.scss'

const FAQPageCompanies = () => {

  return <div className="faqcompanies-container">
      <h2>Frequently Asked Questions</h2>
      <FAQExhibitors />
      <p>Didn't find the answer you were looking for? Contact <a href="mailto:sales@armada.nu">sales@armada.nu</a></p>
  </div>

}

export default FAQPageCompanies