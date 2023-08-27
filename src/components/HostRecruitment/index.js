import React, { useState, useEffect } from 'react'
import './index.scss'
import jsonData from './roledesc_2023.json'
import { BsArrowsAngleContract, BsArrowsAngleExpand } from 'react-icons/bs'
import axios from 'axios'
import altImg from '../../../static/assets/armada_round_logo_green.png'
const HostRecruitment = () => {
    const [parsedData, setParsedData] = useState('')
    const [isExpanded, setIsExpanded] = useState(true)
    return (
        <div className='host-flex'>
            <div className='host-box'>
                <div className='topTitle'>
                    <h1>Hey Hosts! Look here!</h1>
                    {isExpanded ? (
                        <BsArrowsAngleContract
                            className='topButton'
                            onClick={() => {
                                setIsExpanded(false)
                            }}
                        />
                    ) : (
                        <BsArrowsAngleExpand
                            className='topButton'
                            onClick={() => {
                                setIsExpanded(true)
                            }}
                        />
                    )}
                </div>
                {isExpanded ? (
                    <>
                        <p style={{ textAlign: 'center', padding: 'unset' }}>
                            Here are the positions available for the host
                            recruitment
                        </p>
                        {jsonData.teams.map((team, index) => (
                            <TeamComponent key={index} team={team} />
                        ))}
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

function PersonSearch({ position }) {
    //searches for a given person using their role
    const [names, setNames] = useState([])
    const [images, setImages] = useState([]) //image url from ais

    useEffect(() => {
        axios.get('https://ais.armada.nu/api/organization/v2').then(res => {
            res.data.forEach(team => {
                team.people.forEach(person => {
                    console.log(person)
                    if (person.role.includes(position)) {
                        setNames(old => [...old, person.name])
                        setImages(old => [...old, person.picture])
                    }
                })
            })
        })
        console.log('This is the name' + name)
    }, [])

    return (
        <div className='recruiterBox'>
            <h4>Say hello to your Team Leader(s)</h4>
            <div className='recruiterList'>
                {names.map((name, index) => (
                    <div key={index} className='recruiter'>
                        <img
                            className='recruiter-image'
                            src={images[index]}
                            alt={name}
                        ></img>
                        <div className='recruiterText'>
                            <p>{name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const PositionComponent = ({ position }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <div className='position'>
            <h3 onClick={() => setIsExpanded(!isExpanded)}>
                {position.title}
                <span className='expand-button'>{isExpanded ? '-' : '+'}</span>
            </h3>
            {isExpanded && (
                <div className='description'>
                    <div className='descriptionFlex'>
                        <PersonSearch position={position.team_leader} />
                        <p className='posDesc'>{position.description}</p>
                    </div>
                    {position.tasks && (
                        <div>
                            <h4>Some of the tasks may include:</h4>
                            <ul>
                                {position.tasks.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <h4>Working Hours</h4>
                    <ul>
                        {position.working_hours.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

const TeamComponent = ({ team }) => {
    return (
        <div className='team'>
            <h2>{team.name}</h2>
            {team.positions.map((position, index) => (
                <PositionComponent key={index} position={position} />
            ))}
        </div>
    )
}

export default HostRecruitment
