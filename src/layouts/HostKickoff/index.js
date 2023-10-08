import React from 'react'
import './index.scss'
import Page from '../../templates/page'
import armada_bingo from '../../../static/assets/images/armada-bingo.png'
import BingoBoard from './BingoBoard'
const HostKickoff = props => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h1>HI HOSTS!</h1>
            <img className='armada-bingo' style={{}} src={armada_bingo}></img>
            <BingoBoard />
            <iframe
                src='https://docs.google.com/presentation/d/e/2PACX-1vQkb2TGE9lcSzXzde_rdvGf0GsJWDOmyuNY4wroLNjJduAhFpk9yLrGbW97_hY0wP41xwrXxx3Hc3t9/embed?start=false&loop=false&delayms=3000'
                frameborder='0'
                width='400'
                height='569'
                allowfullscreen='true'
                mozallowfullscreen='true'
                webkitallowfullscreen='true'
                style={{}}
            ></iframe>
        </div>
    )
}

export default HostKickoff
