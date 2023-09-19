import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './index.scss'
import { BsArrowsAngleContract, BsArrowsAngleExpand } from 'react-icons/bs'

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
    }, [])

    return (
        <div>
            {names.map((name, index) => (
                <div key={index} className='pitcher'>
                    <img
                        className='pitcher-image'
                        src={images[index]}
                        alt={name}
                    ></img>
                    <div className='pitcherText'>
                        <p>{name}</p>
                        <p>{position}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

const RecruitmentPitch = () => {
    const [isExpanded, setIsExpanded] = useState(true)

    return (
        <div className='pitchBox'>
            <div className='pitchTop'>
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
                <h3>A message from our Project Group</h3>
            </div>
            {isExpanded ? (
                <>
                    <div className='pitchContainer'>
                        <PersonSearch position={'Project Manager'} />
                        <PersonSearch position={'Head of Human Resources'} />
                    </div>
                    <p className='pitchInfo'>
                        Are you ready to embark on an extraordinary journey?
                        Join Armada, a dynamic and innovative organization that
                        brings students and companies together, and opens doors
                        to a world of limitless opportunities!
                    </p>
                    <p className='pitchInfo'>
                        Imagine stepping beyond the borders of your chapter and
                        forging connections with like-minded individuals from
                        across the globe. As an Armada member, you'll expand
                        your horizons, making lifelong friends from diverse
                        backgrounds, enriching your perspective in ways you
                        never thought possible.
                    </p>
                    <p className='pitchInfo'>
                        {' '}
                        But that's not all. As an Armada member you'll get free
                        access to our prestigious Grand Banquet and its
                        afterparty, which will take place at Berns in central
                        Stockholm during in November. You also get free access
                        to Armada's very own cruise party taking place in
                        December.
                    </p>
                    <p className='pitchInfo'>
                        Don't miss the chance to be part of something bigger –
                        join Armada and sail toward a horizon of friendships,
                        experiences, and growth. Your journey starts here
                    </p>
                </>
            ) : (
                <></>
            )}
        </div>
    )
}

export default RecruitmentPitch
