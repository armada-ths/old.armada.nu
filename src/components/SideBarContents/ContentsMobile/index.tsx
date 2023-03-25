/* Table of contents but for mobile view. */
import React, { useState } from 'react'
import SideBarContents, { Heading } from '../'
import './index.scss'
type Props = {
    headings: Heading[]
}

const ConentsMobile = ({ headings }: Props) => {
    const [opened, open] = useState(false)
    const buttonStyle = opened ? 'tocOpen' : 'tocClosed'
    return (
        <div>
            <button
                type='button'
                className='tocBtn'
                onClick={() => open(!opened)}
            >
                {opened ? 'Close' : 'Table of Contents'}
            </button>
            <div className={buttonStyle}>
                <div className='ContentsMobile'>
                    <SideBarContents headings={headings} />
                </div>
            </div>
        </div>
    )
}

export default ConentsMobile
