import React from 'react'
import './index.scss'
const SquareButton = ({ idNr, hrefVal, textVal }) => {
    return (
        <a id={`a${idNr}`} href={hrefVal}>
            <button id={`b${idNr}`}>{textVal}</button>
        </a>
    )
}

export default SquareButton
