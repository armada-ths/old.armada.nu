import React, { useEffect, useState } from 'react'
import './index.scss'
//import Zoom from 'react-reveal/Zoom'
import Zoom from 'react-awesome-reveal'
import treeisland from '../../../static/assets/sustainability/treeisland.svg'
import vector1 from '../../../static/assets/sustainability/didyouknow/vector1.svg'
import vector2 from '../../../static/assets/sustainability/didyouknow/vector2.svg'

/* Edited By Nima Sep-Okt 2023 according to design in Figma by Laila. Some of this code is questionable */

const FactContainer = ({ fact, vector }) => {
    const [factActual, setFact] = useState()
    useEffect(() => {
        console.log(fact)
        setFact(fact)
    }, [fact])

    return (
        <div className='factBox'>
            <div className='fact-description'>
                <img src={vector} alt='A leaf'></img>
                <div style={{ marginLeft: '10%' }}>
                    <div className='fact-title'>{factActual?.title}</div>
                    <div className='fact-statement'>
                        {factActual?.statement}
                    </div>
                    {factActual?.link === '' ? (
                        <></>
                    ) : (
                        <a
                            style={{
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                            target='_blank'
                            href={factActual?.link}
                        >
                            Link
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

const FunFact = props => {
    const [facts, setFacts] = useState([])
    useEffect(() => {
        const facts = props.facts //facts.title, facts.statement
        setFacts(facts.sort(() => 0.5 - Math.random()))
        //console.log(facts[0])
    }, [props.facts])
    return (
        <div>
            {props.page === 'sustainabilityFunFact' ? (
                <div className='fact-header'>
                    <b>Did you know that...</b>
                    <img src={treeisland} alt='A sustainability logo'></img>
                </div>
            ) : (
                <div className='fact-header'>
                    <b>Did you know that...</b>
                </div>
            )}
            <div className='funFactFlex'>
                <FactContainer fact={facts[0]} vector={vector1} />
                <FactContainer fact={facts[1]} vector={vector2} />
            </div>
        </div>
    )
}

export default FunFact
