/* Added by Nima Mehrabadi in March 2023. This file merges the previous "The Fair", "Registration" and "Exhibitor FAQ" (and updating it) */
import React from 'react'
import './index.scss'
import Page from '../../templates/page'
import FAQContainer from '../../components/FAQ'
import SideBarContents from '../../components/SideBarContents/index.tsx'

const ForCompanies = props => {
    return (
        <>
            <div className='info-container'>
                <div className='page-container'>
                    <Page {...props} />
                    <div className='faqpage-container'>
                        <FAQContainer type='exhibitor' />
                    </div>
                </div>
            </div>
            <SideBarContents />
        </>
    )
}

export default ForCompanies
