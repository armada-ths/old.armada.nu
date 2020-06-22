import React, { useEffect } from 'react'
import FAQContainer from '../../components/FAQ'

import './index.scss'

const FAQPage = () => {

  useEffect(() => {
    document.body.classList.add('header-invisible')

    return () => {
      document.body.classList.remove('header-invisible')
    }
  }, [])

  return <FAQContainer />

}

export default FAQPage
