import React, { useEffect, useState, Suspense } from 'react'
import './index.scss'
import ContactCard from '../ContactCard'
import axios from 'axios'
/* Last edited in March 2023 to add API call instead. To do: Add more information from the API
make the filtering on the backend side instead of front end as well as updating images on the backend instead */

/* Please note the following: Currently it's way to slow to load the images from the AIS automatically. We have tried everything possible. If you want to try, replace in the image field below.
We recently transfered to Gatsby images instead to make it faster, but this doesn't work on those since gatsby renders it on build.
For now we will have to manually load in the images */
const Contacts = () => {
    //const path = '/assets/images/PG23/' The image path for all the images
    const [allPg, setAllPg] = useState([])
    useEffect(() => {
        const pgProfiles = []
        axios.get('https://ais.armada.nu/api/organization/').then(res => {
            //filters out people who have not yet been recruited and are not PG
            res.data.filter(item => {
                if (item.people.length > 0) {
                    const pgRole = item.role
                    const pg = item.people.filter(person =>
                        person.role.includes('Project Group')
                    )
                    if (pg.length > 0) {
                        pg.forEach(person => {
                            const pgObject = person
                            const firstIndex = pgObject.name.indexOf(' ')
                            const pgfirstName = pgObject.name.substr(
                                0,
                                firstIndex
                            )
                            const pgsurName = pgObject.name.substr(
                                firstIndex + 1
                            )
                            const fixedPgObject = {
                                ...pgObject,
                                picture: pgObject.picture.replace(
                                    'https://ais.armada.nu/', //remove the error with the image url
                                    ''
                                ),
                                firstName: pgfirstName, //we split into first name and last name to be able to use this for matching later
                                surName: pgsurName,
                            }
                            fixedPgObject.role = pgRole.substring(16) //This adds a field "role" that was previously in the overall object (not the "people" field) back to the "people" field
                            setAllPg(oldArray => [...oldArray, fixedPgObject]) //Each item from the API includes "people" which is a length 1 array
                        })
                    }
                }
                return null
            })
        })
        setAllPg(pgProfiles)
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
        console.log(allPg)
        return allPg.slice(start, end).map(item => {
            return (
                <ContactCard
                    name={item.name}
                    linkedInUrl={item.linkedin_url}
                    imageUrl={item.picture}
                    //localImage={path + item.firstName + '.jpg'}
                    title={item.role}
                    email={''}
                    emoji={''}
                />
            )
        })
    }
    return (
        <div className='contacts'>
            <h1>Contact ARMADA</h1>
            <div className='contact-list'>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards(0, 4)}
                </Suspense>
                <div className='line' />
            </div>
            <div className='contact-list'>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards(4, 8)}
                </Suspense>
                <div className='line' />
            </div>
            <div className='contact-list'>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards(8, 12)}
                </Suspense>

                <div className='line' />
            </div>
            <div className='contact-list'>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards(12, 16)}
                </Suspense>

                <div className='line' />
            </div>
            <div className='contact-list'>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards(16, 20)}
                </Suspense>

                <div className='line' />
            </div>
            <div className='contact-list'>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards(20, 24)}
                </Suspense>
                <div className='line' />
            </div>
            <div className='contact-list'>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards(24, 28)}
                </Suspense>
                <div className='line' />
            </div>
        </div>
    )
}

export default Contacts
