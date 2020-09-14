import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query'
import './index.scss'
import Modal from '../Modal'
import Loading from '../Loading'
import Cat from '../Cat'
import Select from 'react-select'

const urlPropsQueryConfig = {
    exhibitorName: {
        type: UrlQueryParamTypes.string,
        queryParam: 'exhibitorName',
    },
}

//base of server adress
const ais = 'https://ais.armada.nu/'

const ExhibitorList = props => {
    const [previousYear, setPreviousYear] = useState(
        new Date(new Date().setFullYear(new Date().getFullYear() - 1))
            .getFullYear()
            .toString()
    )
    const [exhibitors, setExhibitors] = useState([])
    const [exhibitorList, setExhibitorList] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [exhibitorName, setExhibitorName] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [jobfilters, setJobfilters] = useState({})
    const [sectorfilters, setSectorfilters] = useState({})
    const [competencefilters, setCompetencefilters] = useState({})
    const [locationfilters, setLocationfilters] = useState({})
    const [shine, setShine] = useState('')
    const [diversityfilter, setDiversityfilter] = useState(false)
    const [sustainabilityfilter, setSustainabilityfilter] = useState(false)
    const [startupfilter, setStartupfilter] = useState(false)
    const [diversitysrc, setDiversitysrc] = useState('/assets/diversity_a.svg')
    const [sustainabilitysrc, setSustainabilitysrc] = useState(
        '/assets/sustainability.svg'
    )
    const [location, setLocation] = useState('All')
    const [sector, setSector] = useState('All')
    const [locations, setLocations] = useState([
        { value: 'Sweden', label: 'Sweden' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Asia', label: 'Asia' },
        { value: 'Oceania', label: 'Oceania' },
        { value: 'North America', label: 'North America' },
        { value: 'South America', label: 'South America' },
        { value: 'Africa', label: 'Africa' },
    ])
    const [sectors, setSectors] = useState(
        [
            { value: 'Retail', label: 'Retail' },
            { value: 'Recruitment', label: 'Recruitment' },
            { value: 'Architecture', label: 'Architecture' },
            { value: 'Automotive', label: 'Automotive' },
            {
                value: 'Environmental Sector',
                label: 'Environmental Sector',
            },
            { value: 'Pedagogy', label: 'Pedagogy' },
            { value: 'Web Development', label: 'Web Development' },
            { value: 'Solid Mechanics', label: 'Solid Mechanics' },
            {
                value: 'Simulation Technology',
                label: 'Simulation Technology',
            },
            { value: 'Pharmaceutical', label: 'Pharmaceutical' },
            { value: 'Biotechnology', label: 'Biotechnology' },
            { value: 'Acoustics', label: 'Acoustics' },
            { value: 'Nuclear Power', label: 'Nuclear Power' },
            { value: 'Fluid Mechanics', label: 'Fluid Mechanics' },
            {
                value: 'Wood-Processing Industry',
                label: 'Wood-Processing Industry',
            },
            { value: 'Steel Industry', label: 'Steel Industry' },
            { value: 'Medical Technology', label: 'Medical Technology' },
            { value: 'Media Technology', label: 'Media Technology' },
            { value: 'Marine Systems', label: 'Marine Systems' },
            {
                value: 'Manufacturing Industry',
                label: 'Manufacturing Industry',
            },
            {
                value: 'Management Consulting',
                label: 'Management Consulting',
            },
            { value: 'Insurance', label: 'Insurance' },
            { value: 'Finance', label: 'Finance' },
            { value: 'Construction', label: 'Construction' },
            { value: 'Aerospace', label: 'Aerospace' },
            {
                value: 'Logistics & Supply Chain',
                label: 'Logistics & Supply Chain',
            },
            { value: 'Telecommunication', label: 'Telecommunication' },
            { value: 'Mechatronics', label: 'Mechatronics' },
            { value: 'Electronics', label: 'Electronics' },
            {
                value: 'Material Development',
                label: 'Material Development',
            },
            { value: 'Energy Technology', label: 'Energy Technology' },
            { value: 'Nanotechnology', label: 'Nanotechnology' },
            { value: 'Research', label: 'Research' },
            {
                value: 'Property & Infrastructure',
                label: 'Property & Infrastructure',
            },
            { value: 'IT Infrastructure', label: 'IT Infrastructure' },
            {
                value: 'Technical Consulting',
                label: 'Technical Consulting',
            },
            { value: 'IT Consulting', label: 'IT Consulting' },
            {
                value: 'Software Development',
                label: 'Software Development',
            },
            { value: 'Railway', label: 'Railway' },
            { value: 'Product Development', label: 'Product Development' },
            { value: 'Interaction Design', label: 'Interaction Design' },
            { value: 'Industry Design', label: 'Industry Design' },
        ].sort((a, b) => a.label.localeCompare(b.label))
    )
    const [jobs, setJobs] = useState([
        { value: 'Full time job', label: 'Full Time Job' },
        { value: 'Part time job', label: 'Part Time Job' },
        { value: 'Summer job', label: 'Summer Job' },
        { value: 'Internship', label: 'Internship' },
        { value: 'Trainee', label: 'Trainee' },
        { value: 'Master thesis', label: 'Master Thesis' },
        { value: 'Bachelor thesis', label: 'Bachelor Thesis' },
    ])
    const [competences, setCompetences] = useState([
        {
            value: 'Architecture',
            label: 'Architecture',
            id: 28,
        },
        {
            value: 'Civil Engineering',
            label: 'Civil Engineering',
            id: 30,
        },
        {
            value: 'Construction Engineering',
            label: 'Construction Engineering',
            id: 29,
        },
        {
            value: 'Real Estate & Construction Management',
            label: 'Real Estate & Construction Management',
            id: 31,
        },
        {
            value: 'Biotechnology',
            label: 'Biotechnology',
            id: 22,
        },
        {
            value: 'Medical Engineering',
            label: 'Medical Engineering',
            id: 23,
        },
        {
            value: 'Electrical Engineering',
            label: 'Electrical Engineering',
            id: 6,
        },
        {
            value: 'Mechatronics',
            label: 'Mechatronics',
            id: 7,
        },
        {
            value: 'Electric Power Engineering',
            label: 'Electric Power Engineering',
            id: 24,
        },
        {
            value: 'Energy Engineering',
            label: 'Energy Engineering',
            id: 25,
        },
        {
            value: 'Nuclear Energy Engineering',
            label: 'Nuclear Energy Engineering',
            id: 27,
        },
        {
            value: 'Sustainable Technology',
            label: 'Sustainable Technology',
            id: 26,
        },
        {
            value: 'Back End Development',
            label: 'Back End Development',
            id: 2,
        },
        {
            value: 'Data Science & Machine Learning',
            label: 'Data Science & Machine Learning',
            id: 4,
        },
        {
            value: 'Front End Development',
            label: 'Front End Development',
            id: 1,
        },
        {
            value: 'User Experience Design',
            label: 'User Experience Design',
            id: 5,
        },
        {
            value: 'Web Development',
            label: 'Web Development',
            id: 3,
        },
        {
            value: 'Business Development',
            label: 'Business Development',
            id: 10,
        },
        {
            value: 'Finance',
            label: 'Finance',
            id: 9,
        },
        {
            value: 'Logistics & Supply Chain Management',
            label: 'Logistics & Supply Chain Management',
            id: 11,
        },
        {
            value: 'Project Management',
            label: 'Project Management',
            id: 8,
        },
        {
            value: 'Chemical Engineering',
            label: 'Chemical Engineering',
            id: 20,
        },
        {
            value: 'Materials Engineering',
            label: 'Materials Engineering',
            id: 18,
        },
        {
            value: 'Molecular Engineering',
            label: 'Molecular Engineering',
            id: 19,
        },
        {
            value: 'Nanotechnology',
            label: 'Nanotechnology',
            id: 21,
        },
        {
            value: 'Engineering Mechanics',
            label: 'Engineering Mechanics',
            id: 12,
        },
        {
            value: 'Industrial Design',
            label: 'Industrial Design',
            id: 14,
        },
        {
            value: 'Production Engineering',
            label: 'Production Engineering',
            id: 13,
        },
        {
            value: 'Applied Mathematics',
            label: 'Applied Mathematics',
            id: 16,
        },
        {
            value: 'Engineering Physics',
            label: 'Engineering Physics',
            id: 15,
        },
        {
            value: 'Scientific Computing',
            label: 'Scientific Computing',
            id: 17,
        },
        {
            value: 'Aerospace Engineering',
            label: 'Aerospace Engineering',
            id: 34,
        },
        {
            value: 'Human Resources',
            label: 'Human Resources',
            id: 36,
        },
        {
            value: 'Maritime Engineering',
            label: 'Maritime Engineering',
            id: 35,
        },
        {
            value: 'Marketing',
            label: 'Marketing',
            id: 39,
        },
        {
            value: 'Railway Engineering',
            label: 'Railway Engineering',
            id: 33,
        },
        {
            value: 'Sales',
            label: 'Sales',
            id: 38,
        },
        {
            value: 'Teaching',
            label: 'Teaching',
            id: 37,
        },
        {
            value: 'Vehicle Engineering',
            label: 'Vehicle Engineering',
            id: 32,
        },
    ])
    const [showamount, setShowamount] = useState(20)

    useEffect(() => {
        axios
            .get(
                `${ais}api/exhibitors?img alt=''_placeholder=true${
                    props.lastYear && '&year=' + previousYear
                }`
            )
            .then(res => {
                const exhibitors = res.data // create variable and store result within parameter data
                exhibitors.sort((a, b) => a.name.localeCompare(b.name))
                const exhibitorList = exhibitors.map(exhibitor => (
                    <ExhibitorItem
                        key={exhibitor.id}
                        name={exhibitor.name}
                        exhibitor={exhibitor}
                        updateExhibitorName={updateExhibitorName}
                    />
                ))
                setExhibitors(exhibitors)
                setExhibitorList(exhibitorList)
                setIsLoading(false)
                // Get from url path the GET params ?id=number, to know what event to display
                if (props.exhibitorName !== undefined) {
                    setExhibitorName(props.exhibitorName)
                    setShowModal(true)
                }
            })
    }, [])

    const updateSearch = event => {
        setdefault()
        setSearch(event.target.value.substr(0, 100))
    }

    //displays types of jobs offered by company in its Modal
    const getJobContainer = exhibitor => {
        return (
            <div className='job-container'>
                <h3 className='modal-subheaders'>Job Opportunities</h3>
                <ul>
                    {exhibitor.employments.map((jobtype, index) => (
                        <li key={index} className='job-section'>
                            {jobtype.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    const updateExhibitorName = _exhibitorName => {
        setShowModal(!showModal)
        setExhibitorName(_exhibitorName)
        props.onChangeExhibitorName(_exhibitorName)
    }

    const displayExhibitor = exhibitor => {
        return (
            <Modal onClose={() => updateExhibitorName(null)}>
                <div className='modal-container'>
                    <div className='modal-flex-1'>
                        <div className='modalimage-exhib'>
                            <img
                                src={ais + exhibitor.logo_squared}
                                alt={exhibitor.name + ' logo'}
                            />
                        </div>
                        <h1 className='modal-title'>{exhibitor.name}</h1>
                        <div>
                            {exhibitor.vyer_position && !props.lastYear && (
                                <h3 className='links'>
                                    <a
                                        href={exhibitor.vyer_position}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        Click for Map position
                                    </a>
                                </h3>
                            )}
                            {exhibitor.fair_location && !props.lastYear && (
                                <h3 id='fair-location'>
                                    {exhibitor.fair_location}
                                </h3>
                            )}
                            {exhibitor.company_website && (
                                <h3 className='links'>
                                    <a
                                        href={exhibitor.company_website}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {exhibitor.name + ' Website'}
                                    </a>
                                </h3>
                            )}
                            {exhibitor.flyer && (
                                <h3 className='links'>
                                    <a
                                        href={ais + exhibitor.flyer}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {exhibitor.name + ' Digital Flyer'}
                                    </a>
                                </h3>
                            )}
                        </div>
                    </div>
                    <div className='modal-flex-2'>
                        <div className='modalinfo'>
                            <div className='modal-property'>
                                <div className='icon-group'>
                                    {exhibitor.diversity && (
                                        <img
                                            alt=''
                                            className='special'
                                            src='/assets/diversity_a.svg'
                                        />
                                    )}
                                    {exhibitor.sustainability && (
                                        <img
                                            alt=''
                                            className='special'
                                            src='/assets/sustainability.svg'
                                        />
                                    )}
                                </div>
                            </div>

                            <div className='description-container'>
                                <p className='purpose-text'>
                                    <b>{exhibitor.purpose}</b>
                                </p>
                                <br />
                                <div className='description'>
                                    {exhibitor.about &&
                                        exhibitor.about
                                            .split('\n')
                                            .map((paragraph, index) => (
                                                <p key={index}> {paragraph} </p>
                                            ))}
                                </div>
                                <div className='climate-compensation'>
                                    {exhibitor.climate_compensation && (
                                        <i style={{ fontSize: 'large' }}>
                                            <span role='img' aria-label='leaf'>
                                                &#127811;
                                            </span>{' '}
                                            This company has climate compensated
                                            for their participation in THS
                                            Armada{' '}
                                            <span role='img' aria-label='leaf'>
                                                &#127811;
                                            </span>
                                        </i>
                                    )}
                                </div>
                            </div>

                            <div className='job-location-container'>
                                {exhibitor.employments.length > 0 &&
                                    getJobContainer(exhibitor)}

                                {exhibitor.locations.length > 0 && (
                                    <div className='location-container'>
                                        <h3 className='modal-subheaders'>
                                            Locations
                                        </h3>
                                        <ul>
                                            {exhibitor.locations.map(
                                                (loc, index) => (
                                                    <li
                                                        key={index}
                                                        className='location-section'
                                                    >
                                                        {loc.name}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}
                                {exhibitor.competences.length > 0 && (
                                    <div className='competence-container'>
                                        <h3 className='modal-subheaders'>
                                            Competences
                                        </h3>
                                        <ul>
                                            {exhibitor.competences.map(
                                                (comp, index) => (
                                                    <li
                                                        key={index}
                                                        className='competence-section'
                                                    >
                                                        {comp.name}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}
                                {exhibitor.cities.length > 0 && (
                                    <div className='city-container'>
                                        <h3 className='modal-subheaders'>
                                            Cities
                                        </h3>
                                        <p className='city-string'>
                                            {exhibitor.cities}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }

    //diversity and sustainability filters special effects {cssshine, cssShineOff}
    const cssShine = value => {
        if (global.document !== undefined) {
            let shineItems = global.document.getElementsByClassName(value)
            for (let i = 0; i < shineItems.length; i++) {
                shineItems[i].className += ' shine-loop'
            }
        }
    }

    const cssShineOff = () => {
        if (global.document !== undefined) {
            let shineItems = global.document.getElementsByClassName(
                'shine-loop'
            )
            while (shineItems.length > 0) {
                let className = shineItems[0].className
                shineItems[0].className = className.replace('shine-loop', '')
            }
        }
    }

    //filter functions to be called onChange
    const jobFilter = value => {
        setdefault()
        setJobfilters(value)
    }

    //filter functions to be called onChange
    const sectorFilter = value => {
        setdefault()
        setSectorfilters(value)
    }

    const competenceFilter = value => {
        setdefault()
        setCompetencefilters(value)
    }

    const locationFilter = value => {
        setdefault()
        setLocationfilters(value)
    }

    const showMore = () => {
        setShowamount(183)
    }

    const setdefault = () => {
        setShowamount(20)
    }

    const startupFilter = () => {
        setdefault()
        setStartupfilter(!startupFilter)
    }

    const diversityFilter = () => {
        setdefault()
        setDiversityfilter(!diversityfilter)
        if (diversityfilter) {
            setDiversitysrc('/assets/diversity_selected.svg')
        } else {
            setDiversitysrc('/assets/diversity_a.svg')
        }
    }

    const sustainabilityFilter = () => {
        setdefault()
        setSustainabilityfilter(!sustainabilityfilter)
        if (sustainabilityfilter) {
            setSustainabilitysrc('/assets/sustainability_selected.svg')
        } else {
            setSustainabilitysrc('/assets/sustainability.svg')
        }
    }

    //build options for dropdown filters
    const buildOptions = array => {
        return array.map(e => (
            <option key={e} value={e}>
                {e}
            </option>
        ))
    }

    // Here you decide if list of exhibitors should be displayed or not
    let showExhibitors = true
    const exhibitorToDisplay = exhibitors.find(e => e.name === exhibitorName)
    let filteredCompanies = exhibitorList.filter(e =>
        e.props.name.toLowerCase().startsWith(search.toLowerCase())
    )
    if (filteredCompanies.length < 1) {
        filteredCompanies = exhibitorList.filter(e =>
            e.props.name.toLowerCase().includes(search.toLowerCase())
        )
    }

    //Diversity filter
    if (diversityfilter) {
        filteredCompanies = filteredCompanies.filter(
            e => e.props.exhibitor.location_special === 'Diversity Room'
        )
    }

    //Sustainability filter
    if (sustainabilityfilter) {
        filteredCompanies = filteredCompanies.filter(
            e => e.props.exhibitor.location_special === 'Green Room'
        )
    }

    // Startup filter
    if (startupfilter) {
        filteredCompanies = filteredCompanies.filter(
            e => e.props.exhibitor.groups.name === 'startup'
        )
    }

    //Job type filter
    for (const [key, filter] in Object.entries(jobfilters)) {
        filteredCompanies = filteredCompanies.filter(e => {
            // Returnera true om något employment type matchar filter
            return e.props.exhibitor.employments.reduce(
                (prev, cur) => prev || cur.name === filter.value,
                false
            )
        })
    }

    //Sector type filter
    for (const [key, filter] in Object.entries(sectorfilters)) {
        filteredCompanies = filteredCompanies.filter(e => {
            // Returnera true om något employment type matchar filter
            return e.props.exhibitor.industries.reduce(
                (prev, cur) => prev || cur.name === filter.value,
                false
            )
        })
    }

    //Competence type filter
    for (const [key, filter] in Object.entries(competencefilters)) {
        filteredCompanies = filteredCompanies.filter(e => {
            // Returnera true om något employment type matchar filter
            return e.props.exhibitor.competences.reduce(
                (prev, cur) => prev || cur.name === filter.value,
                false
            )
        })
    }

    //Location type filter
    for (const [key, filter] in Object.entries(locationfilters)) {
        filteredCompanies = filteredCompanies.filter(e => {
            // Returnera true om något employment type matchar filter
            return e.props.exhibitor.locations.reduce(
                (prev, cur) => prev || cur.name === filter.value,
                false
            )
        })
    }

    let showall = filteredCompanies.length > showamount

    return !showExhibitors ? (
        <div>Exhibitors will be released after summer.</div>
    ) : (
        <div className='exhibitors'>
            <h1>{props.lastYear ? "Last Year's " : ''}Exhibitors</h1>
            <br />
            <p
                style={{
                    paddingBottom: props.lastYear ? '1em' : {},
                }}
            >
                {props.lastYear ? (
                    `These are the exhibitors from the ${previousYear} fair.`
                ) : (
                    <span>
                        <span className='bold'>Sustainability & Diversity</span>{' '}
                        form the core values at the heart of our organization.
                        To highlight our core values, we have chosen to dedicate
                        focus areas of the fair called Green Room and Diversity
                        Room. If an exhibitor is tagged with one of the images
                        below, they are in one of these rooms!
                    </span>
                )}
            </p>

            {showModal && displayExhibitor(exhibitorToDisplay)}

            <div
                className={`filter-special ${props.lastYear && 'display-none'}`}
            >
                <input
                    id='diversity'
                    type='image'
                    alt='diversity filter'
                    src={diversitysrc}
                    onClick={() => diversityFilter()}
                />
                <input
                    id='sustainability'
                    type='image'
                    alt='sustainability filter'
                    src={sustainabilitysrc}
                    onClick={() => sustainabilityFilter()}
                />
            </div>

            <div className='search'>
                <div className='search-container'>
                    <input
                        type='text'
                        placeholder='Search Exhibitors'
                        aria-label='search'
                        value={search}
                        onChange={updateSearch.bind(this)}
                    />
                </div>
                <div className={`filters ${props.lastYear && 'display-none'}`}>
                    <Select
                        closeMenuOnSelect={false}
                        blurInputOnSelect={false}
                        isMulti
                        isSearchable
                        name='Job filter'
                        placeholder='All Jobs'
                        options={jobs}
                        onChange={event => jobFilter(event)}
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
                        options={sectors}
                        onChange={event => sectorFilter(event)}
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
                        options={competences}
                        onChange={event => competenceFilter(event)}
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
                        options={locations}
                        onChange={event => locationFilter(event)}
                        className='basic-multi-select'
                        classNamePrefix='select'
                    />
                </div>
            </div>

            {/* <div className="supercontainer">
                  <p className="matching_link">Pssst! Find your perfect company by using Armada's new <Link className="matching_link_style" to="/matching">matching functionality!</Link></p>
                </div> */}

            <div className='loading'>{isLoading && <Loading />}</div>
            <div className='exhibitor-feed'>
                {filteredCompanies.length && !isLoading ? (
                    filteredCompanies.splice(0, showamount)
                ) : (
                    <div className='Noresultsfound'>
                        {!isLoading && (
                            <div>
                                <p className='noresultstext'>
                                    Sorry, we couldn&apos;t find any companies
                                    that match your search. Please look at our
                                    cat instead!
                                </p>
                                <Cat />
                            </div>
                        )}
                    </div>
                )}
            </div>
            {showall && (
                <div className='showmore-container'>
                    <button
                        className='showmorebutton'
                        onClick={() => showMore()}
                    >
                        Show All
                    </button>
                </div>
            )}
        </div>
    )
}

let toExport
if (global.window !== undefined) {
    toExport = addUrlProps({ urlPropsQueryConfig })(ExhibitorList)
} else {
    toExport = ExhibitorList
}
export default toExport

const ExhibitorItem = props => {
    let classname = props.exhibitor.sustainability ? ' green' : ''
    classname += props.exhibitor.diversity ? ' purple' : ''

    return (
        <div
            id={props.name}
            role='presentation'
            className={'exhibitor-box ' + classname}
            onClick={() => props.updateExhibitorName(props.exhibitor.name)}
        >
            <div className='image-container'>
                <img alt='' src={ais + props.exhibitor.logo_squared} />
            </div>
            <p> {props.exhibitor.name} </p>
            {props.exhibitor.location_special === 'Diversity Room' && (
                <div className='corner-special'>
                    <img alt='' src='/assets/diversity-black-nolabel.png' />
                </div>
            )}
            {(props.exhibitor.location_special === 'Green Room') &
            (
                <div className='corner-special'>
                    <img
                        alt=''
                        src='/assets/sustainability-black-nolabel.png'
                    />
                </div>
            )}
        </div>
    )
}
