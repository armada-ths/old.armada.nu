import React, { useEffect } from 'react'
import './index.scss'
import ContactCard from '../ContactCard'
import axios from 'axios'
/* Last edited in March 2023 to add API call instead. To do: Add more information from the API
make the filtering on the backend side instead of front end as well as updating images on the backend instead */
const Contacts = () => {
    useEffect(() => {
        axios.get('https://ais.armada.nu/api/organization/').then(res => {
            //filters out people who have not yet been recruited and are not PG
            const nonEmptyTargets = res.data.filter(item => {
                if (item.people.length > 0) {
                    const pg = item.people.filter(person =>
                        person.role.includes('Project Group')
                    )
                    return pg.length > 0
                }
                return null
            })
            console.log(nonEmptyTargets)
        })
    }, [])

    const projectGroup = [
        {
            name: 'Leonard Hökby',
            title: 'Project Manager 2023',
            email: 'a@armada.nu',
            emoji: '👨‍💼',
            imageUrl: '/assets/images/PG23/Leonard.JPG',
            linkedInUrl: 'https://www.linkedin.com/in/leonard-h%C3%B6kby/',
        },
    ]

    const createCards = (start, end) => {
        return projectGroup
            .filter((i, index) => index < end && index >= start)
            .map((info, index) => (
                <ContactCard
                    name={info.name}
                    key={index}
                    title={info.title}
                    email={info.email}
                    emoji={info.emoji}
                    imageUrl={info.imageUrl}
                    linkedInUrl={info.linkedInUrl}
                />
            ))
    }

    return (
        <div className='contacts'>
            <h1>Contact ARMADA</h1>
            <div className='contact-list'>
                {createCards(0, 4)}
                <div className='line' />
            </div>
            <div className='contact-list'>
                {createCards(4, 8)}
                <div className='line' />
            </div>
            <div className='contact-list'>
                {createCards(8, 12)}
                <div className='line' />
            </div>
            <div className='contact-list'>
                {createCards(12, 16)}
                <div className='line' />
            </div>
            <div className='contact-list'>{createCards(16, 20)}</div>
            <div className='contact-list'>{createCards(20, 24)}</div>
        </div>
    )
}

export default Contacts
