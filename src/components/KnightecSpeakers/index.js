import React from 'react'
import './index.scss'
import ContactCard from '../KnightecCard'

const KnightecSpeakers = () => {
    const speakers = [
        {
            name: 'Cecilia Borg',
            workTitle: 'Engineering Director, Spotify',
            education: 'MSc Computer Science, KTH',
            videoUrl: 'https://youtu.be/uCdsIFrhlhE',
            linkedInUrl: 'https://www.linkedin.com/in/cecilia-borg-3a53b5/',
            profileImageUrl: '/assets/images/knightec/cecilia-borg.png',
            zoomUrl: 'https://zoom.us/j/95540438169',
            description:
                'Cecilia started her career as a software engineer and has since then had roles like product owner, engineering manager, CTO, and CEO. Today she works as Engineering Director at Spotify.',
        },
        {
            name: 'Izabelle Back',
            workTitle: 'Manager, Engineering Program Mngmt at Plenty',
            education: 'MEng Sustainable Energy Technology, KTH',
            videoUrl: 'https://youtu.be/1fe3KeMUYDE',
            linkedInUrl: 'https://www.linkedin.com/in/izabelleback/',
            profileImageUrl: '/assets/images/knightec/izabelleback.png',
            zoomUrl: 'https://zoom.us/j/95482712066',
            description:
                'If you are interested in an international career, Izabelle is the one to listen to! After graduating, she started her career as a trainee at Tesla, where she quickly advanced within the organization and became Sr Engineering Program Manager.',
        },
        {
            name: 'Helena Börjesson',
            workTitle: 'CTO, Boule Diagnostics',
            education: 'MSc Engineering Physics, KTH',
            videoUrl: 'https://youtu.be/EOck5DerZ8Y',
            linkedInUrl:
                'https://www.linkedin.com/in/helena-b%C3%B6rjesson-1b72163/',
            profileImageUrl: '/assets/images/knightec/helena-borjesson.png',
            zoomUrl: 'https://zoom.us/j/91645884244',
            description:
                'Helena has an impressive resume with several senior management positions in her backpack. After several years in senior roles at Ericsson, Helena has worked within the Medtech industry in the later years, and today she works as CTO at Boule Diagnostics.',
        },
        {
            name: 'Sara Lindstrand',
            workTitle: 'Sr Manager Sustainability, AFRY',
            education: 'MSc Design and Product Realisation, KTH',
            videoUrl: 'https://youtu.be/K0h1Tqjlqz4',
            linkedInUrl:
                'https://www.linkedin.com/in/sara-lindstrand-9a27401a/',
            profileImageUrl: '/assets/images/knightec/sara-lindstrand.png',
            zoomUrl: 'https://zoom.us/j/98339444967',
            description:
                'For Sara it is important to make a change and contribute to something bigger. She started her career as an embedded developer, but since a few years back, she works with a question close to her heart, sustainability.',
        },
        {
            name: 'Catharina Modahl Nilsson',
            workTitle: 'Executive Vice President R&D Permobil',
            education: 'MSc Vehicle Engineering, KTH',
            videoUrl: 'https://youtu.be/HoQOMN8TPyg',
            linkedInUrl:
                'https://www.linkedin.com/in/catharina-modahl-nilsson-b394a51/',
            profileImageUrl: '/assets/images/knightec/catharina-modahl.png',
            zoomUrl: 'https://zoom.us/j/93635993672',
            description:
                'Catharina is an experienced leader with several senior management positions from primarily Scania, on her resume. Since a little more than a year back, she is the EVP R&D at Permobil. Apart from this, she is also an experienced board member.',
        },
        {
            name: 'Sara Mazur',
            workTitle: 'Chairwomen and Director of the Board',
            education: 'MSc Electrical Engineering, KTH',
            videoUrl: 'https://youtu.be/5q3hgOqJLkk',
            linkedInUrl: 'https://www.linkedin.com/in/sara-mazur-479535187/',
            profileImageUrl: '/assets/images/knightec/sara-mazur.png',
            zoomUrl: 'https://zoom.us/j/95212877780',
            description:
                'Since 2007, Sara is a member of the Royal Swedish Academy of Engineering Sciences. She also has several board assignments, for example, Chairwomen in Wallenberg Artificial Intelligence, Director of the board at Saab, and Combitech.',
        },
    ]

    const speakers2 = [
        {
            name: 'Kit Gullbrandsson',
            profileImageUrl: '/assets/images/knightec/kit-gullbrandsson.png',
            description: '',
        },
        {
            name: 'Cecilia Sjöstedt',
            profileImageUrl: '/assets/images/knightec/cecilia.png',
            description: '',
        },
        {
            name: 'Sigbritt Karlsson',
            profileImageUrl: '/assets/images/knightec/sigbritt.png',
            description: '',
        },
    ]

    const createCards = (start, end) => {
        return speakers
            .filter((i, index) => index < end && index >= start)
            .map((info, index) => (
                <ContactCard
                    name={info.name}
                    key={index}
                    workTitle={info.workTitle}
                    education={info.education}
                    videoUrl={info.videoUrl}
                    linkedInUrl={info.linkedInUrl}
                    profileImageUrl={info.profileImageUrl}
                    zoomUrl={info.zoomUrl}
                    description={info.description}
                />
            ))
    }

    return (
        <div className='knightec'>
            <div className='speakers'>
                <div className='speaker-list'>
                    {createCards(0, 3)}
                    <div className='line' />
                </div>
                <div className='speaker-list'>
                    {createCards(3, 6)}
                    <div className='line' />
                </div>
            </div>
            <div className='event-text'>
                <p className='event-description'>
                    During this event, you will meet several KTH alumni with an
                    inspirational career who will share their journeys. Our
                    guests have had a wide range of jobs from CEO, CTO, Board
                    Director to Sustainability Manager, and worked across the
                    globe in smaller companies to larger ones such as Spotify.
                    You will get the chance to pick who you want to listen to,
                    but all speakers will be recorded so that you can listen to
                    as many as you want afterward. Our guests will share their
                    stories and best tips for the future. There will also be
                    time for you to ask questions, so take the opportunity to
                    learn from and connect with some of the best KTH alumni!{' '}
                </p>

                <p className='event-description'>
                    To finish up, Sigbritt Karlsson, principal of KTH will share
                    some words of inspiration for the future.
                </p>

                <div className='agenda'>
                    <h2>Agenda</h2>
                    <div className='schedule'>
                        <div className='schedule-text'>
                            <p>
                                15:00 – 15:15 Introduction with our host Kit
                                Gullbrandsson{' '}
                            </p>

                            <p>
                                15:15 – 15:45 30 minutes inspirational talks in
                                parallel{' '}
                            </p>

                            <p>
                                15:45 – 16:00 Video greeting from Cecilia
                                Sjöstedt, Site Manager &amp; Managing Director
                                at Cytiva
                            </p>

                            <p>
                                16:00 – 16:15 Principal of KTH, Sigbritt
                                Karlsson, summarizes the event
                            </p>
                        </div>
                        <div className='image-speakers2'>
                            <img
                                className='images2'
                                draggable='false'
                                alt={speakers2[0].name}
                                src={
                                    speakers2[0].profileImageUrl ??
                                    '/assets/armadalogogreen.jpg'
                                }
                            />
                            <img
                                className='images2'
                                draggable='false'
                                alt={speakers2[1].name}
                                src={
                                    speakers2[1].profileImageUrl ??
                                    '/assets/armadalogogreen.jpg'
                                }
                            />
                            <img
                                className='images2'
                                draggable='false'
                                alt={speakers2[2].name}
                                src={
                                    speakers2[2].profileImageUrl ??
                                    '/assets/armadalogogreen.jpg'
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KnightecSpeakers
