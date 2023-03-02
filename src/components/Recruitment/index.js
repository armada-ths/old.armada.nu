import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import './index.scss'
import Testimonials from '../Testimonials'
import { StickyContainer, Sticky } from 'react-sticky'
//Come up with a solution using position: sticky in css instead
const Recruitment = () => {
    const navbarOffset = 60
    const [groups, setGroups] = useState()
    const [recruitmentLink, setRecruitmentLink] = useState('')

    useEffect(() => {
        axios.get('https://ais.armada.nu/api/recruitment').then(res => {
            let result = res.data
            if (result.length > 0) {
                setGroups(result[0].groups)
                setRecruitmentLink(result[0].link)
            }
        })
    }, [])

    return groups ? (
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

                {Object.keys(groups).map((groupKey, i) => (
                    <div className='groups' key={i}>
                        {groups[groupKey].map((role, j) => {
                            return <RoleSection role={role} key={`${j}`} />
                        })}
                    </div>
                ))}
            </StickyContainer>
        </div>
    ) : (
        <div>
            <h4>Application is closed, stay tuned for new roles</h4>
            <Testimonials />
        </div>
    )
}

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
