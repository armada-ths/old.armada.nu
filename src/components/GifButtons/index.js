import React from 'react'
import { useEffect, useState } from 'react'
import JobsIllustrationPng from '../../../static/assets/HomePage/jobs-illustration.png'
import OfficeIllustrationPng from '../../../static/assets/HomePage/office-illustration.png'
import JobsIllustrationGif from '../../../static/assets/HomePage/jobs-illustration.gif'
import OfficeIllustrationGif from '../../../static/assets/HomePage/office-illustration.gif'
import './index.scss'
const GifHoverButtons = () => {
    return (
        <>
            <h1 class='gif-title'>Check out</h1>
            <div class='buttons'>
                <a
                    class='button-box'
                    title='For students'
                    href='http://localhost:8000/recruitment/'
                >
                    <p>For students</p>
                    <img src={JobsIllustrationPng} alt='' id='static' />
                    <img src={JobsIllustrationGif} alt='' id='gif' />
                </a>
                <a class='button-box' href='/for-companies'>
                    <p>For companies</p>
                    <img src={OfficeIllustrationPng} alt='' id='static' />
                    <img src={OfficeIllustrationGif} alt='' id='gif' />
                </a>
            </div>
        </>
    )
}
export default GifHoverButtons
