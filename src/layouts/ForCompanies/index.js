/* Added by Nima Mehrabadi in March 2023. This file merges the previous "The Fair", "Registration" and "Exhibitor FAQ" (and updating it) */
import React, { useEffect, useRef } from 'react'
import './index.scss'
import Page from '../../templates/page'
import FAQContainer from '../../components/FAQ'
import SideBarContents from '../../components/SideBarContents/index.tsx'

const QueryFunc = () => {
    const headingsdata = [] // Append all the headingdata to be sent as props
    document.querySelectorAll('h2').forEach(ele => {
        ele.text = ele.innerText
        headingsdata.push({
            level: 2,
            text: ele.text,
            id: ele.id,
        })
    })
    return headingsdata
}

const ForCompanies = props => {
    const headingsData = useRef(null)
    useEffect(() => {
        headingsData.current = QueryFunc()
    }, [])
    console.log(headingsData.current)
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
            <SideBarContents headings={QueryFunc()} />
        </>
    )
}

export default ForCompanies
