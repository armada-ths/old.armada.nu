import React, { useState } from 'react'
import Select from 'react-select'
/*To put it lightly, the exhibitorlist component is too large (why did they do this?), so were moving the filters here /Nima */

//This is work in WIP since we can't use this right now:

function FilterContainer(props) {
    const [ticked, setTicked] = useState(false)

    return (
        <div>
            <Select
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                isMulti
                isSearchable
                name='Job filter'
                placeholder='All Jobs'
                options={props.jobs}
                onChange={event => props.jobFilter(event)}
                className='basic-multi-select'
                classNamePrefix='select'
            />

            <Select
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                isMulti
                isSearchable
                name='Sector filter'
                placeholder='All Industries'
                options={props.sectors}
                onChange={event => props.sectorFilter(event)}
                className='basic-multi-select'
                classNamePrefix='select'
            />

            <Select
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                isMulti
                isSearchable
                name='Competence filter'
                placeholder='All Competences'
                options={props.competences}
                onChange={event => props.competenceFilter(event)}
                className='basic-multi-select'
                classNamePrefix='select'
            />

            <Select
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                isMulti
                isSearchable
                name='Location filter'
                placeholder='All Locations'
                options={props.locations}
                onChange={event => props.locationFilter(event)}
                className='basic-multi-select'
                classNamePrefix='select'
            />

            <Select
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                isMulti
                isSearchable
                name='Fair Placement filter'
                placeholder='All Fair Placements'
                options={props.fair_placements}
                onChange={event => props.fairPlacementFilter(event)}
                className='basic-multi-select'
                classNamePrefix='select'
            />
        </div>
    )
}

export default FilterContainer
