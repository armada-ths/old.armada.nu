import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import './index.scss'
import Testimonials from '../Testimonials'
import { StickyContainer, Sticky } from 'react-sticky'
import { StaticImage } from 'gatsby-plugin-image'

//Come up with a solution using position: sticky in css instead

/* Fixed by Nima 27-03-2023. Please read axios manual... Previously it was set to setGroups(result[0].groups) so it would only get the first one... */
/* Edited by Nima 08-04-2023. Sorting every role into groups */
const Recruitment = () => {
    const navbarOffset = 60
    const [groups, setGroups] = useState()
    const [recruitmentLink, setRecruitmentLink] = useState('')

    useEffect(() => {
        let mergedGroupsObject = {}

        axios.get('https://ais.armada.nu/api/recruitment').then(res => {
            const result = res.data
            let group_IT = []
            let group_BR = []
            let group_LF = []
            let group_MC = []
            let group_CV = [] //Core values
            let group_OTHER = []

            result.forEach(item => {
                const gr = item.groups
                if (result.length > 0) {
                    mergedGroupsObject = { ...mergedGroupsObject, ...gr }
                    //setGroups(result[0].groups)
                }
            }) //Make sure to merge all the data together from the API, for example through testing the IT recruitment could appear "outside" the rest
            Object.keys(mergedGroupsObject).forEach(title => {
                if (title.includes('Career Fair and Logistics')) {
                    group_LF.push(mergedGroupsObject[title]) //Go through each "title" that is in the API a 1 item array, and then group those accordingly
                } else if (title.includes('IT')) {
                    group_IT.push(mergedGroupsObject[title]) //We have to do this since some titles are mixed up in the AIS which affects the API
                } else if (title.includes('Business Relations')) {
                    group_BR.push(mergedGroupsObject[title])
                } else if (title.includes('Marketing and Communication')) {
                    group_MC.push(mergedGroupsObject[title])
                } else if (title.includes('Core Values')) {
                    group_CV.push(mergedGroupsObject[title])
                } else {
                    group_OTHER.push(mergedGroupsObject[title])
                }
            })
            setGroups([
                {
                    title: 'Logistics & Fair',
                    values: group_LF,
                    img: (
                        <StaticImage
                            className='role-icon'
                            src='../../../static/assets/GroupIcons/LF.png'
                        />
                    ),
                },
                {
                    title: 'IT',
                    values: group_IT,
                    img: (
                        <StaticImage
                            className='role-icon'
                            src='../../../static/assets/GroupIcons/IT.png'
                        />
                    ),
                },
                {
                    title: 'Business Relations',
                    values: group_BR,
                    img: (
                        <StaticImage
                            className='role-icon'
                            src='../../../static/assets/GroupIcons/BR.png'
                        />
                    ),
                },
                {
                    title: 'Media & Communications',
                    values: group_MC,
                    img: (
                        <StaticImage
                            className='role-icon'
                            src='../../../static/assets/GroupIcons/MC.png'
                        />
                    ),
                },
                {
                    title: 'Sustainability & Diversity',
                    values: group_CV,
                    img: (
                        <StaticImage
                            className='role-icon'
                            src='../../../static/assets/GroupIcons/Sus_and_div.png'
                        />
                    ),
                },
                {
                    title: 'Other',
                    values: group_OTHER,
                    img: (
                        <StaticImage
                            className='role-icon'
                            src='../../../static/assets/GroupIcons/LF.png'
                        />
                    ),
                },
            ])
            if (result.length > 0) {
                setRecruitmentLink(result[0].link) //this line is still fine since the link is same for all of them
            }
        })
    }, []) //happens on page load, this sideloads everything
    return groups & (recruitmentLink === '') ? (
        <div className='rolelist'>
            <StickyContainer>
                <Sticky topOffset={-navbarOffset}>
                    {({ style }) => {
                        return (
                            <div style={{ ...style, top: `0px` }}>
                                <div className={'apply-section'}>
                                    <a
                                        href={
                                            'https://ais.armada.nu' +
                                            recruitmentLink
                                        }
                                    >
                                        <button>APPLY HERE</button>
                                    </a>
                                </div>
                            </div>
                        )
                    }}
                </Sticky>
                <div className='description-header'>
                    <h2>Available Roles</h2>
                </div>
                <button
                    onClick={() => {
                        const targetClass = document.querySelectorAll('.groups')
                        targetClass.forEach(cl => {
                            if (cl.style.display === 'none') {
                                cl.style.display = 'block'
                            } else {
                                cl.style.display = 'none'
                            }
                        })
                    }}
                >
                    Hide/Show
                </button>
                <div className='groups'>
                    {groups.map(item => {
                        console.log(item)
                        return item.values.length > 0 ? (
                            <>
                                <div className='role-detail'>
                                    {item.img}
                                    <h2 className='role-title'>{item.title}</h2>
                                </div>
                                {item.values.map(object => {
                                    return (
                                        <>
                                            {object.map(role => {
                                                return (
                                                    <RoleSection role={role} />
                                                )
                                            })}
                                        </>
                                    )
                                })}
                            </>
                        ) : null
                    })}
                </div>
            </StickyContainer>
        </div>
    ) : (
        <div>
            <h4>Application is closed, stay tuned for new roles</h4>
            <Testimonials />
        </div>
    )
}
//This looks like copypasted code. Todo: redo this
const RoleSection = ({ role }) => {
    const [collapsed, setCollapsed] = useState(true)
    const newText = role.description.split('\n').map(str => <p>{str}</p>)
    return (
        <div className='role-container'>
            <div
                role='presentation'
                className='role-header'
                onClick={() => setCollapsed(!collapsed)}
            >
                <div className='role-name'>{role.name}</div>
                <div className='role-arrow-container'>
                    <p
                        className={
                            'arrow-icon' +
                            (collapsed ? ' collapsed-arrow' : ' expanded-arrow')
                        }
                    >
                        {' '}
                        ›{' '}
                    </p>
                </div>
            </div>
            <div
                className={
                    'role-description' +
                    (collapsed ? ' collapsed' : ' expanded')
                }
            >
                {!collapsed ? newText : null}
            </div>
        </div>
    )
}

RoleSection.propTypes = {
    role: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
    }),
}

export default Recruitment
