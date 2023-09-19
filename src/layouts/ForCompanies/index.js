/* Added by Nima Mehrabadi in March 2023. This file merges the previous "The Fair", "Registration" and "Exhibitor FAQ" (and updating it) */
import React, { useEffect, useState } from 'react'
import './index.scss'
import Page from '../../templates/page'
import FAQContainer from '../../components/FAQ'
import SideBarContents from '../../components/SideBarContents/index.tsx'
import ConentsMobile from '../../components/SideBarContents/ContentsMobile'
import SubmissionForm from '../../components/SubmissionForm'
const QueryFunc = () => {
    const headingsdata = [] // Append all the headingdata to be sent as props
    document.querySelectorAll('h1, h2, h3, h4').forEach(ele => {
        if (ele.id !== 'ignore' && ele.className !== 'contactTitle') {
            ele.text = ele.innerText
            var lev = 2
            if (ele.nodeName === 'H2') {
                lev = 2
            } else if (ele.nodeName === 'H3') {
                lev = 3
            } else if (ele.nodeName === 'H4') {
                lev = 4
            } else if (ele.nodeName === 'H1') {
                lev = 1
            }
            headingsdata.push({
                level: lev,
                text: ele.text,
                id: ele.id,
            })
        }
    })
    return headingsdata
}

const ForCompanies = props => {
    const [headingData, setheadingData] = useState([])
    useEffect(() => {
        setheadingData(QueryFunc())
    }, [])
    console.log(headingData)
    return (
        <>
            {/* <div class='TOC'>
                <SideBarContents headings={headingData} />
            </div> */}
            {/* <div class='TOCMobile'>
                <ConentsMobile headings={headingData} />
            </div> */}
            <SubmissionForm />
            <div className='info-container'>
                <div className='page-container assign-button-right'>
                    <Page {...props} />
                    <div className='faqpage-container'>
                        <FAQContainer type='exhibitor' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForCompanies
