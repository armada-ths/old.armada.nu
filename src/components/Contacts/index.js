import React, { useEffect, useState, Suspense } from 'react'
import './index.scss'
import ContactCard from '../ContactCard'
import axios from 'axios'
import data from './convertcsv.json'
/* Last edited in March 2023 to add API call instead. To do: Add more information from the API
make the filtering on the backend side instead of front end as well as updating images on the backend instead */

/* Please note the following: Currently it's way to slow to load the images. We have tried a lot. If you want to try, replace in the image field below.
We recently transfered to Gatsby images instead to make it faster, but this doesn't work on those since gatsby renders it on build.
The animations have been removed because of this lag */

function getInfoByName(name, firstName) {
    //Check out convertcsv.json. We quickly manually generated this from taking the excel in drive, deleting columns and using: https://www.convertcsv.com/csv-to-json.htm
    const cachedPg = data.find(item => item.Name === name)
    if (cachedPg) {
        return [cachedPg['Armada Email'], cachedPg['Group']]
    } else {
        const cachedPg = data.find(item => item.Name.includes(firstName)) //If we don't find it by full name try the first name.
        //But if multiple people have the same first name unfortunately it will only return the first one.
        if (cachedPg) {
            return [cachedPg['Armada Email'], cachedPg['Group']]
        } else {
            return [null, null]
        }
    }
}

const Contacts = () => {
    const [allPg, setAllPg] = useState([])
    const [groups, setGroups] = useState([])
    const order = [
        'Project Manager',
        'Business Relations',
        'Career Fair and Logistics',
        'Career Fair and Logistics -  Logistics',
        'Career Fair and Logistics - Career Fair',
        'Career Fair and Logistics - Events',
        'Career Fair and Logistics - Events',
        'Career Fair and Logistics - Service',
        'Core Values',
        'IT',
        'IT - Internal Systems',
        'IT - Web',
        'Logistics and Fair',
        'Marketing and Communication',
        'Marketing and Communication - Banquet',
        'Marketing and Communication - HR',
        'Sustainability and Diversity',
    ]

    const compareGroupFn = (a, b) => {
        const indexA = order.indexOf(a.name)
        const indexB = order.indexOf(b.name)
        return indexA - indexB
    }

    useEffect(() => {
        // const pgProfiles = []
        // var names = []
        axios.get('https://ais.armada.nu/api/organization/v2').then(res => {
            //res contains all people
            res.data.forEach(team => {
                // names.push(team.name)
                if (team.people.length > 0) {
                    if (team.name === 'Business Relations') {
                        setGroups(old => [team, ...old])
                    }
                    if (team.name === 'Project Manager') {
                        setGroups(old => [team, ...old])
                    }
                    setGroups(old => [...old, team])
                }
            })
            console.log(groups)
            // const groupsSorted = groups.sort(compareGroupFn)
            // console.log(groupsSorted)
            // setGroups(groupsSorted)
            // setAllPg(pgProfiles)
        })
    }, [])

    const createCard = armadian => {
        // console.log(armadian.name)
        return (
            <ContactCard
                key={armadian.id}
                name={armadian.name}
                linkedInUrl={armadian.linkedin_url}
                imageUrl={armadian.picture}
                //localImage={path + item.firstName + '.jpg'}
                title={armadian.role}
                email={armadian.email ?? ''}
                emoji={''}
            />
        )
    }

    const createCards = group => {
        return group.people.map(person => {
            // console.log(person)
            return createCard(person)
        })
        // return allPg
        //     .filter(item => item.group === groupName)
        //     .map(armadian => (
        //         <ContactCard
        //             name={armadian.name}
        //             linkedInUrl={armadian.linkedin_url}
        //             imageUrl={armadian.picture}
        //             //localImage={path + item.firstName + '.jpg'}
        //             title={armadian.role}
        //             email={armadian.email ?? ''}
        //             emoji={''}
        //         />
        //     ))
        /*return allPg.slice(start, end).map(item => {
            return (
                <ContactCard
                    name={item.name}
                    linkedInUrl={item.linkedin_url}
                    imageUrl={item.picture}
                    //localImage={path + item.firstName + '.jpg'}
                    title={item.role}
                    email={item.email ?? ''}
                    emoji={''}
                />
            )
        }) */
    }

    return (
        <div className='contacts'>
            <h1>Contact ARMADA</h1>
            {groups.map(group => {
                // console.log(group)
                return (
                    <div className='contact-list'>
                        <h2 className='backgroundTitle'>{group.name}</h2>
                        <Suspense fallback={<div>Loading...</div>}>
                            {createCards(group)}
                        </Suspense>
                        <div className='line' />
                    </div>
                )
            })}
            {/*<div className='contact-list'>
                <h2 className='backgroundTitle'>Project Manager</h2>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards('Project Manager')}
                </Suspense>
                <div className='line' />
            </div>
            <div className='contact-list'>
                <h2 className='backgroundTitle'>Business Relations</h2>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards('Business Relations')}
                </Suspense>
                <div className='line' />
            </div>
            <div className='contact-list'>
                <h2 className='backgroundTitle'>Media & Communications</h2>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards('Media & Communications')}
                </Suspense>
                <div className='line' />
            </div>
            <div className='contact-list'>
                <h2 className='backgroundTitle'>Logistics & Fair</h2>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards('Logistics & Fair')}
                </Suspense>
                <div className='line' />
            </div>
            <div className='contact-list'>
                <h2 className='backgroundTitle'>IT</h2>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards('IT')}
                </Suspense>
                <div className='line' />
            </div>
            <div className='contact-list'>
                <h2 className='backgroundTitle'>Core Values</h2>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards('Core Values')}
                </Suspense>
                <div className='line' />
            </div>
            <div className='contact-list'>
                <h2 className='backgroundTitle'></h2>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards(null)}
                </Suspense>
                <div className='line' />
        </div>*/}
        </div>
    )
}

export default Contacts
