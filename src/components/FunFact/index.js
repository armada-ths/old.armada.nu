import React, { useEffect, useState } from 'react'
import './index.scss'
import Zoom from 'react-reveal/Zoom'

const FunFact = (props) => {
    const [fact, setFact] = useState([])

    useEffect(() => {

      const facts = props.facts

      setFact(facts.sort(() => 0.5 - Math.random()).slice(0, 1))
    }, [props.facts])
    return (
        <div className={props.page}>
            <div className='fact-header'>
                 <b>Did you know that...</b>
             </div>
            <Zoom>
              <div className='flex-container'>
                      {fact.map(fact => (
                          <div key={fact.title+"0"} className='fact-box'>
                              <div key={fact.title+"1"} className='fact-info'>
                                  <div key={fact.title+"2"} className='fact-break'>
                                      ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
                                  </div>
                                  <div key={fact.title +"3"} className='fact-text'>
                                 {fact.statement}
                                      <br/>
                                      { fact.link.length > 0 &&
                                      <a href={fact.link}>Video</a>}
                                  </div>
                              </div>
                          </div>
                      ))}
                      
              </div>
            </Zoom>
        </div>
    )
}

export default FunFact
