import React from 'react'
import { useEffect, useState } from "react";
import JobsIllustration from '../../../static/assets/HomePage/jobs-illustration.gif'
import OfficeIllustration from '../../../static/assets/HomePage/office-illustration.gif'
import './index.scss'
const GifHoverButtons = () => {
    return (
        <div class="buttons">
            <a class="button-box" href="http://localhost:8000/recruitment/">
                <p>For students</p>
                <img src={JobsIllustration} alt = "" />
            </a>
        <a class="button-box" href="http://localhost:8000/exhibitor_info/">
            <p>For companies</p>
            <img src={OfficeIllustration} alt = "" />
        </a>
        </div>
    )
}
export default GifHoverButtons