import React, { useEffect, useState } from 'react'
import './index.scss'
//import Zoom from 'react-reveal/Zoom'
import Zoom from 'react-awesome-reveal'
import treeisland from '../../../static/assets/sustainability/treeisland.svg'

/* Edited By Nima Sep-Okt 2023 according to design in Figma by Laila. Some of this code is questionable */

const FunFact = props => {
    const [fact, setFact] = useState([])

    useEffect(() => {
        const facts = props.facts //facts.title, facts.statement
        console.log(props)
        setFact(facts.sort(() => 0.5 - Math.random()).slice(0, 1)) ///?????????? /Nima
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
            <div className={props.page}>
                <Zoom>
                    <div className='flex-container'>
                        {fact.map(fact => (
                            <div key={fact.title + '0'} className='fact-box'>
                                <div
                                    key={fact.title + '1'}
                                    className='fact-info'
                                >
                                    <div
                                        key={fact.title + '2'}
                                        className='fact-break'
                                    >
                                        ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
                                    </div>
                                    <div
                                        key={fact.title + '3'}
                                        className='fact-text'
                                    >
                                        {fact.statement}
                                        <br />
                                        {fact.link.length > 0 && (
                                            <a href={fact.link}>Video</a>
                                        )}
                                        {/* What is this harcode??? ^^*/}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default FunFact
