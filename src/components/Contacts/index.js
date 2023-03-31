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
        console.log([cachedPg['Armada Email'], cachedPg['Group']])
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
                            const [pgEmail, pgGroup] = getInfoByName(
                                pgObject.name,
                                pgfirstName
                            )
                            const fixedPgObject = {
                                ...pgObject,
                                picture: pgObject.picture.replace(
                                    'https://ais.armada.nu/', //remove the error with the image url
                                    ''
                                ),
                                firstName: pgfirstName, //we split into first name and last name to be able to use this for matching later
                                surName: pgsurName,
                                email: pgEmail, //note this might return null
                                group: pgGroup, //this also
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

    const createCards = groupName => {
        console.log(allPg)
        return allPg
            .filter(item => item.group === groupName)
            .map(armadian => (
                <ContactCard
                    name={armadian.name}
                    linkedInUrl={armadian.linkedin_url}
                    imageUrl={armadian.picture}
                    //localImage={path + item.firstName + '.jpg'}
                    title={armadian.role}
                    email={armadian.email ?? ''}
                    emoji={''}
                />
            ))
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

            <div className='contact-list'>
                <h2 className='backgroundTitle'>Project Manager</h2>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards('Project Manager')}
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
                <h2 className='backgroundTitle'>Business Relations</h2>
                <Suspense fallback={<div>Loading...</div>}>
                    {createCards('Business Relations')}
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
            </div>
        </div>
    )
}

export default Contacts
