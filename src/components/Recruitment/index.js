import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
import './index.scss';
import Testimonials from '../Testimonials'
import { StickyContainer, Sticky } from 'react-sticky';

const Recruitment = () => {
    const navbarOffset = 60;
    const [groups, setGroups] = useState()
    const [recruitmentLink, setRecruitmentLink] = useState('')
    
    useEffect(() => {
        axios.get('https://ais.armada.nu/api/recruitment')
          .then((res)  => {
            let result = res.data;
            if(result.length > 0) {
                setGroups(result[0].groups)
                setRecruitmentLink(result[0].link)
            }
          });
    }, [])
    
    return groups ?
        <div className='rolelist'>
            <StickyContainer>
                <Sticky topOffset={-navbarOffset}>
                    {
                        ({style}) => {
                            return (
                                <div style={{...style, top: `${navbarOffset + style.top}px`}}>
                                    <div className={'apply-section'}>
                                        <a href={'https://ais.armada.nu/' + recruitmentLink}>
                                            <button>APPLY HERE</button>
                                        </a>
                                    </div>
                                </div>
                            )
                        }
                    }
                </Sticky>
                { Object.keys(groups).map((groupKey, i)=>
                    <div className='groups' key={i}>
                        <h3 className='group-header'>{groupKey}</h3>
                        {groups[groupKey].map((role, j) => {
                            return( <RoleSection role={role} key={`${j}`}/>);
                        })}
                    </div>
                )}
            </StickyContainer>
        </div> 
        : 
        <div>
            <h4>Application is closed, stay tuned for new roles</h4>
            <Testimonials/>
        </div>
}

const RoleSection = ({role}) => {

    const [collapsed, setCollapsed] = useState(true);

    return (<div className='role-container'>
        <div role='presentation' className='role-header' onClick={() => setCollapsed(!collapsed)} >
            <div className='role-header-left' >
                <h4>{role.name}</h4>
            </div>
            <div className='role-header-right' >
                <p className={'arrow-icon' + (collapsed ? ' collapsed-arrow': ' expanded-arrow')}> › </p>
            </div>
        </div>
        <div className={'role-description' + (collapsed ? ' collapsed': ' expanded')}>
            {!collapsed ? <p>{role.description}</p> : null }
        </div>
    </div>
    );
}

RoleSection.propTypes = {
    role: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string
    }),
}
  
export default Recruitment;
