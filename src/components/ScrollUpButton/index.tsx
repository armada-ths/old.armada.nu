import React, { FC, useState } from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'
import './index.scss'
function checkScrollPosition(): boolean {
    const scrollPosition = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight

    const isScrolledHalfway =
        scrollPosition / (scrollHeight - windowHeight) >= 0.4
    return isScrolledHalfway
}

const ScrollUpButton: FC = () => {
    const [show, setShow] = useState(false)
    const isBrowser = () => typeof window !== 'undefined'
    isBrowser() &&
        window.addEventListener('scroll', () => {
            setShow(checkScrollPosition())
        }) //check for when user is scrolling.

    return (
        <>
            {show ? (
                <div
                    className={`srButton ${show ? 'show' : ''}`}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                >
                    <BsArrowUpCircle className='srInner' />
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default ScrollUpButton
