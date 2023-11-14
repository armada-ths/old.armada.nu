import React, { useContext } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import './index.scss'
import Modal from '../Modal'
import Loading from '../Loading'
import Cat from '../Cat'
import Select from 'react-select'
import { Link } from 'gatsby'
import Collapsible from 'react-collapsible'
import { ExtendedZoom } from '../Map'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'
import { BsSliders } from 'react-icons/bs'
import { PlaceGoldFirst } from '@/templates/placeGoldFirst'

import Questionnaire from '../Questionnaire'
/* armada.nu/exhibitors is no longer being used. To do is to patch all this and make it work with the API again //Nima


//Change all Select element according to https://react-select.com/upgrade#from-v3-to-v4
/*const urlPropsQueryConfig = {
    exhibitorName: {
        type: UrlQueryParamTypes.string,
        queryParam: 'exhibitorName',
    },
}*/

//base of server adress

const dropDownAttributes = {
    width: '100%',
    padding: '0.1em 0em 0.5em 0em',
    outline: 0,
    // border:
    'background-color': '#00d790',
}

const ais = 'https://ais.armada.nu/'
const isMockup = false //change this to go into manual/API fetching mode
const showFilters = true

function checkListOfCoordinates(arr) {
    console.log(typeof arr)
    if (arr !== null && typeof arr !== 'undefined') {
        if (arr.length > 2) {
            for (const subArray of arr) {
                if (subArray.length !== 2) {
                    return false
                } else {
                    if (
                        !(
                            typeof subArray[0] === 'number' &&
                            typeof subArray[1] === 'number'
                        )
                    ) {
                        return false
                    }
                }
            }
        } else {
            return false
        }
        return true
    } else {
        return false
    }
    return false
}

function checkFairLocation(fairLocation) {
    /* Used to check if fair location exists */
    let formattedFairLocation
    if (fairLocation !== null && typeof fairLocation !== 'undefined') {
        if (fairLocation.length > 0) {
            formattedFairLocation = [fairLocation]
            return formattedFairLocation
        }
    }
    return false
}

export function getExhibitors(setExhibitorsForMap) {
    setExhibitorsForMap(exhibitorsConst)
}

export class ExhibitorList extends React.Component {
    constructor(props) {
        super(props) // adopts parent qualities
        this.state = {
            previousYear: new Date(
                new Date().setFullYear(new Date().getFullYear() - 1)
            )
                .getFullYear()
                .toString(), //get the previous year
            exhibitors: [], // json object
            exhibitorList: [], //displayed exhibitors
            showModal: false, //show individual company card
            exhibitorName: undefined,
            isLoading: true,
            search: '', //search query string
            jobfilters: {},
            sectorfilters: {},
            competencefilters: {},
            locationfilters: {},
            fairPlacementfilters: {},
            shine: '',
            diversityfilter: false,
            sustainabilityfilter: false,
            startupfilter: false,
            showAllCompanies: false, //this is used for the checkbox filter
            diversitysrc: '/assets/diversity/diversity_a.svg',
            sustainabilitysrc: '/assets/sustainability/sustainability.svg',
            location: 'All',
            sector: 'All',
            locations: [
                { value: 'Sweden', label: 'Sweden' },
                { value: 'Europe', label: 'Europe' },
                { value: 'Asia', label: 'Asia' },
                { value: 'Oceania', label: 'Oceania' },
                { value: 'North America', label: 'North America' },
                { value: 'South America', label: 'South America' },
                { value: 'Africa', label: 'Africa' },
            ],
            sectors: [
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
            ],
            jobs: [
                { value: 'Full-time', label: 'Full-time' },
                { value: 'Part-time', label: 'Part-time' },
                { value: 'Summer job', label: 'Summer job' },
                { value: 'Internship', label: 'Internship' },
                { value: 'Trainee', label: 'Trainee' },
                { value: 'Bachelor thesis', label: 'Bachelor Thesis' },
                { value: 'Master thesis', label: 'Master thesis' },
            ],
            competences: [
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
            ],
            fair_placements: [
                { value: 'Nymble - 1st Floor', label: 'Nymble - 1st Floor' },
                { value: 'Nymble - 2nd Floor', label: 'Nymble - 2nd Floor' },
                { value: 'Nymble - 3rd Floor', label: 'Nymble - 3rd Floor' },
                { value: 'Library - 1st Floor', label: 'Library - 1st Floor' },
                { value: 'Library - 2nd Floor', label: 'Library - 2nd Floor' },
            ],
            showamount: 20,
            dataFromSessionStorage: {}, //data from questionnaire
        }

        let sortedSectors = this.state.sectors.sort((a, b) =>
            a.label.localeCompare(b.label)
        )
        this.setState({ sectors: sortedSectors })
    }
    apiFetcher(props, update) {
        const yearParam = update ? '&year=' + props.year : ''
        axios
            .get(
                ais +
                    `api/exhibitors?img alt=''_placeholder=true${
                        this.props.lastYear
                            ? '&year=' + this.state.previousYear
                            : yearParam
                    }`
            )
            .then(res => {
                console.log('UPDATE')
                let exhibitors = res.data // create variable and store result within parameter data
                exhibitors = exhibitors.filter(
                    exhibitor =>
                        checkListOfCoordinates(exhibitor.map_coordinates) &&
                        exhibitor.fair_location.length > 0
                )
                exhibitors.forEach(ex => {
                    ex.fair_placement = [ex.fair_location]
                })

                exhibitors.sort((a, b) => a.name.localeCompare(b.name))
                console.log(exhibitors)
                //To do: Add Gold-Bronze sorting here

                let exhibitorList = exhibitors.map(exhibitor => (
                    <ExhibitorItem
                        key={exhibitor.id}
                        name={exhibitor.name}
                        exhibitor={exhibitor}
                        showModal={this.showModal}
                    />
                ))
                this.setState({
                    exhibitors,
                    exhibitorList,
                    isLoading: false,
                }) // component saves its own data --- What does this mean?? //Nima

                // Get from url path the GET params ?id=number, to know what event to display

                if (this.props.exhibitorName !== undefined) {
                    this.setState({
                        exhibitorName: props.exhibitorName,
                        showModal: true,
                    })
                }
            })
        // }
    }

    updateLocationShowed(location) {
        this.setState({
            fairPlacementfilters: [{ value: location, label: location }],
        })
    }

    updateExhibitorsShowed(exhibitorsInput) {
        exhibitorsInput.sort((a, b) => a.name.localeCompare(b.name))
        exhibitorsInput = PlaceGoldFirst(exhibitorsInput) //sort by gold first
        let exhibitorList = exhibitorsInput.map(exhibitor => (
            <ExhibitorItem
                key={exhibitor.id}
                name={exhibitor.name}
                exhibitor={exhibitor}
                showModal={this.showModal}
            />
        ))
        this.setState({
            exhibitors: exhibitorsInput,
            exhibitorList: exhibitorList,
            isLoading: false,
        })
    }

    componentDidUpdate(prevProps) {
        //console.log(this.props.fairInputLocation, prevProps.fairInputLocation) //remove this later
        //console.log(this.props.fairInputExhibitors) //remove this also later.
        if (this.props.fairInputLocation !== prevProps.fairInputLocation) {
            this.updateLocationShowed(this.props.fairInputLocation)
        }

        if (this.props.fairInputExhibitors !== prevProps.fairInputExhibitors) {
            this.updateExhibitorsShowed(this.props.fairInputExhibitors)
        }

        if (this.props.exhibitorName !== prevProps.exhibitorName) {
            this.showMore()
            this.setState({
                exhibitorName: this.props.exhibitorName,
                showModal: true,
            })
        }

        // Do not update unless the floor changed
        /*
        let fairPlacementInFilter = false
        for (let filterkey in this.state.fairPlacementfilters) {
            if (
                this.state.fairPlacementfilters[filterkey] ===
                props.fairInputLocation
            ) {
                fairPlacementInFilter = true
            }
        }
        console.log('#1', !fairPlacementInFilter)
        console.log('#2', !fairPlacementInFilter)
        if (
            !fairPlacementInFilter &&
            // Sorry to whoever needs to read this :D
            (typeof this.state.fairPlacementfilters === 'object' ||
                (Array.isArray(this.state.fairPlacementfilters) &&
                    this.state.fairPlacementfilters?.[0].value !==
                        props.fairInputLocation))
        ) {
            console.log('Im running')
            this.setState({
                ...this.state,
                fairPlacementFilters: [
                    {
                        value: props.fairInputLocation,
                        label: props.fairInputLocation,
                    },
                ],
            })
        }
        console.log('Updating....')
        console.log(this.state.fairPlacementfilters)
        */
    }
    //currently only deals w/ getting data from api (unsure)
    componentDidMount(props) {
        if (this.props.fairInputLocation) {
            this.updateLocationShowed(this.props.fairInputLocation) //check if undefined and set the default fair location shown
        }
        // only called when exhibitor page is created or updated.
        const filterContainer = document.getElementById('filter-container')
        filterContainer.classList.toggle('hidden')
        /*if (!isMockup) {
            this.apiFetcher(props, false)
        } else*/
        if (isMockup) {
            let exhibitorList = exhibitorsConst.map(exhibitor => (
                <ExhibitorItem
                    key={exhibitor.id}
                    name={exhibitor.name}
                    exhibitor={exhibitor}
                    showModal={this.showModal}
                />
            ))
            this.setState({
                exhibitors: exhibitorsConst,
                exhibitorList: exhibitorList,
                isLoading: false,
            })
        }

        const questionnaireData = JSON.parse(sessionStorage.getItem('my-data'))
        if (questionnaireData) {
            console.log('1111111')
            console.log(questionnaireData)
            this.setState({ dataFromSessionStorage: questionnaireData })
        }
    }

    //search
    updateSearch(event) {
        this.setdefault()
        this.setState({ search: event.target.value.substr(0, 100) })
        console.log(event.target.value)
        if (event.target.value.length > 0) {
            this.state.showAllCompanies = true
        } else {
            this.state.showAllCompanies = false
        }
    }

    //displays types of jobs offered by company in its Modal
    getJobContainer(exhibitor) {
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

    showModal = exhibitorName => {
        this.setState({ showModal: !this.state.showModal, exhibitorName })
    }

    displayExhibitor = exhibitor => {
        //TODO: add more data to modal. locations etc, change how it's displayed
        return (
            <Modal
                onClose={() => {
                    this.showModal(null)
                    console.log('test')
                    this.setState({
                        exhibitorName: undefined, //reset the exhibitorName input so we can press a company 2 times
                    })
                }}
            >
                <div className='modal-container'>
                    <div className='modal-flex-1'>
                        <div className='modalimage-exhib'>
                            {exhibitor.logo_squared && (
                                <img
                                    src={exhibitor.logo_squared}
                                    alt={exhibitor.name + ' logo'}
                                />
                            )}
                        </div>
                        <h1 className='modal-title'>
                            {exhibitor.company_website ? (
                                <div className='exhibitor-title-website'>
                                    <a
                                        href={exhibitor.company_website}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <u>{exhibitor.name}</u>
                                    </a>
                                </div>
                            ) : (
                                <div>{exhibitor.name}</div>
                            )}
                        </h1>
                        <div className='locationOnFair'>
                            {exhibitor.fair_placement[0] &&
                            !this.props.lastYear ? (
                                <h3 id='fair-location'>
                                    Location: {exhibitor.fair_placement[0]}
                                </h3>
                            ) : null}
                            {exhibitor.flyer ? (
                                <h3 className='links'>
                                    <a
                                        href={ais + exhibitor.flyer}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {exhibitor.name + ' Digital Flyer'}
                                    </a>
                                </h3>
                            ) : null}
                        </div>
                    </div>
                    <div className='modal-flex-2'>
                        <div className='modalinfo'>
                            <div className='modal-property'>
                                <div className='icon-group'>
                                    {exhibitor.diversity ? (
                                        <img
                                            alt=''
                                            className='special'
                                            src='/assets/diversity/diversity_a.svg'
                                        />
                                    ) : null}
                                    {exhibitor.sustainability ? (
                                        <img
                                            alt=''
                                            className='special'
                                            src='/assets/sustainability/sustainability.svg'
                                        />
                                    ) : null}
                                </div>
                            </div>

                            <div className='description-container'>
                                <p className='purpose-text'>
                                    <b>{exhibitor.purpose}</b>
                                </p>
                                <br />
                                <div className='description'>
                                    {exhibitor.about
                                        ? exhibitor.about
                                              .split('\n')
                                              .map((paragraph, index) => (
                                                  <p key={index}>
                                                      {' '}
                                                      {paragraph}{' '}
                                                  </p>
                                              ))
                                        : null}
                                </div>
                                {/*<div className='climate-compensation'>
                                    {exhibitor.climate_compensation ? (
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
                                    ) : null}
                                    </div>*/}
                            </div>

                            <div className='job-location-container'>
                                {exhibitor.employments &&
                                exhibitor.employments.length > 0
                                    ? this.getJobContainer(exhibitor)
                                    : null}

                                {exhibitor.locations &&
                                    exhibitor.locations.length > 0 && (
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
                                {exhibitor.competences &&
                                    exhibitor.competences.length > 0 && (
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
                                {exhibitor.cities &&
                                    exhibitor.cities.length > 0 && (
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

    //TODO: combine an simplify those two functions
    //diversity and sustainability filters special effects {cssshine, cssShineOff}
    cssShine(value) {
        if (global.document !== undefined) {
            let shineItems = global.document.getElementsByClassName(value)
            for (let i = 0; i < shineItems.length; i++) {
                shineItems[i].className += ' shine-loop'
            }
        }
    }

    cssShineOff() {
        if (global.document !== undefined) {
            let shineItems =
                global.document.getElementsByClassName('shine-loop')
            while (shineItems.length > 0) {
                let className = shineItems[0].className
                shineItems[0].className = className.replace('shine-loop', '')
            }
        }
    }

    //filter functions to be called onChange
    jobFilter(value) {
        this.setdefault()
        let jobfilters = this.state.jobfilters
        jobfilters = value
        this.setState({ jobfilters })
    }

    //filter functions to be called onChange
    sectorFilter(value) {
        this.setdefault()
        let sectorfilters = this.state.sectorfilters
        sectorfilters = value
        this.setState({ sectorfilters })
    }

    competenceFilter(value) {
        this.setdefault()
        let competencefilters = this.state.competencefilters
        competencefilters = value
        this.setState({ competencefilters })
    }

    locationFilter(value) {
        this.setdefault()
        let locationfilters = this.state.locationfilters
        locationfilters = value
        this.setState({ locationfilters })
    }

    fairPlacementFilter(value) {
        this.setdefault()
        let fairPlacementfilters = this.state.fairPlacementfilters
        fairPlacementfilters = value
        this.setState({ fairPlacementfilters })
    }

    showMore() {
        let showamount = this.state.showamount
        showamount = 183 //change this hardcoded
        this.setState({ showamount })
    }

    setdefault() {
        let showamount = this.state.showamount
        showamount = 20
        this.setState({ showamount })
    }

    //TODO: startup, diversity, and sustainability to be combined
    startupFilter() {
        this.setdefault()
        let startupfilter = this.state.startupfilter
        if (!startupfilter) {
            startupfilter = true
        } else if (startupfilter) {
            startupfilter = false
        }
        this.setState({ startupfilter })
    }

    diversityFilter() {
        this.setdefault()
        let diversityfilter = this.state.diversityfilter
        let diversitysrc = this.state.diversitysrc
        if (diversityfilter === false) {
            diversityfilter = true
            diversitysrc = '/assets/diversity/diversity_selected.svg'
        } else if (diversityfilter === true) {
            diversityfilter = false
            diversitysrc = '/assets/diversity/diversity_a.svg'
        }
        this.setState({ diversityfilter })
        this.setState({ diversitysrc })
    }

    sustainabilityFilter() {
        this.setdefault()
        let sustainabilityfilter = this.state.sustainabilityfilter
        let sustainabilitysrc = this.state.sustainabilitysrc
        if (sustainabilityfilter === false) {
            sustainabilityfilter = true
            sustainabilitysrc =
                '/assets/sustainability/sustainability_selected.svg'
        } else if (sustainabilityfilter === true) {
            sustainabilityfilter = false
            sustainabilitysrc = '/assets/sustainability/sustainability.svg'
        }
        this.setState({ sustainabilityfilter })
        this.setState({ sustainabilitysrc })
    }

    //build options for dropdown filters
    buildOptions(array) {
        var listitems = []

        for (let i = 0; i < array.length; i++) {
            listitems.push(
                <option key={array[i]} value={array[i]}>
                    {array[i]}
                </option>
            )
        }
        return listitems
    }

    //TODO: divide and simplify into nested components
    render() {
        // Here you decide if list of exhibitors should be displayed or not
        let showExhibitors = true
        let thisYear = new Date().getFullYear().toString()
        //console.log('poop' + this.props.fairLocation)
        if (this.year === thisYear) {
            showExhibitors = false
        }
        let exhibitorToDisplay = this.state.exhibitors.filter(
            exhibitor => exhibitor.name === this.state.exhibitorName
        )[0]

        let filteredCompanies = this.state.exhibitorList.filter(
            exhibitorItem => {
                return exhibitorItem.props.name
                    .toLowerCase()
                    .startsWith(this.state.search.toLowerCase())
            }
        )
        if (filteredCompanies.length < 1) {
            filteredCompanies = this.state.exhibitorList.filter(
                exhibitorItem => {
                    return (
                        exhibitorItem.props.name
                            .toLowerCase()
                            .indexOf(this.state.search.toLowerCase()) !== -1
                    )
                }
            )
        }

        //Diversity filter
        if (this.state.diversityfilter) {
            filteredCompanies = filteredCompanies.filter(exhibitorItem => {
                return (
                    exhibitorItem.props.exhibitor.location_special ===
                    'Diversity Room'
                )
            })
        }

        //Sustainability filter
        if (this.state.sustainabilityfilter) {
            filteredCompanies = filteredCompanies.filter(exhibitorItem => {
                return (
                    exhibitorItem.props.exhibitor.location_special ===
                    'Green Room'
                )
            })
        }

        // Startup filter
        if (this.state.startupfilter) {
            filteredCompanies = filteredCompanies.filter(exhibitorItem => {
                return exhibitorItem.props.exhibitor.groups.name === 'startup'
            })
        }

        //Job type filter
        for (let filterkey in this.state.jobfilters) {
            if (this.state.jobfilters[filterkey]) {
                filteredCompanies = filteredCompanies.filter(exhibitorItem => {
                    for (let jobtypeindex in exhibitorItem.props.exhibitor
                        .employments) {
                        if (
                            exhibitorItem.props.exhibitor.employments[
                                jobtypeindex
                            ].name === this.state.jobfilters[filterkey].value
                        ) {
                            return true
                        }
                    }
                    return false
                })
            }
        }

        //Sector type filter
        for (let filterkey in this.state.sectorfilters) {
            if (this.state.sectorfilters[filterkey]) {
                filteredCompanies = filteredCompanies.filter(exhibitorItem => {
                    for (let sectorindex in exhibitorItem.props.exhibitor
                        .industries) {
                        if (
                            exhibitorItem.props.exhibitor.industries[
                                sectorindex
                            ].name === this.state.sectorfilters[filterkey].value
                        ) {
                            return true
                        }
                    }
                    return false
                })
            }
        }

        //Sector type filter
        for (let filterkey in this.state.competencefilters) {
            if (this.state.competencefilters[filterkey]) {
                filteredCompanies = filteredCompanies.filter(exhibitorItem => {
                    for (let competenceindex in exhibitorItem.props.exhibitor
                        .competences) {
                        if (
                            exhibitorItem.props.exhibitor.competences[
                                competenceindex
                            ].name ===
                            this.state.competencefilters[filterkey].value
                        ) {
                            return true
                        }
                    }
                    return false
                })
            }
        }

        //Location type filter
        for (let filterkey in this.state.locationfilters) {
            if (this.state.locationfilters[filterkey]) {
                filteredCompanies = filteredCompanies.filter(exhibitorItem => {
                    for (let locationindex in exhibitorItem.props.exhibitor
                        .locations) {
                        if (
                            exhibitorItem.props.exhibitor.locations[
                                locationindex
                            ].name ===
                            this.state.locationfilters[filterkey].value
                        ) {
                            return true
                        }
                    }
                    return false
                })
            }
        }

        //fair placement filter
        if (!this.state.showAllCompanies) {
            for (let filterkey in this.state.fairPlacementfilters) {
                if (this.state.fairPlacementfilters[filterkey]) {
                    filteredCompanies = filteredCompanies.filter(
                        exhibitorItem => {
                            //console.log(exhibitorItem)
                            for (let fair_placement_index in exhibitorItem.props
                                .exhibitor.fair_placement) {
                                if (
                                    exhibitorItem.props.exhibitor
                                        .fair_placement[
                                        fair_placement_index
                                    ] ===
                                    this.state.fairPlacementfilters[filterkey]
                                        .value
                                ) {
                                    return true
                                }
                            }
                            return false
                        }
                    )
                }
            }
        }

        let showall = filteredCompanies.length > this.state.showamount

        function toggleFilterVisibility() {
            const filterContainer = document.getElementById('filter-container')
            filterContainer.classList.toggle('hidden')
        }
        if (showExhibitors) {
            return (
                <div className='exhibitors'>
                    <Questionnaire />
                    {/* <h1>
                        {this.props.lastYear ? "Last Year's " : ''}Exhibitors
                    </h1>
                    <br />
                    <p
                        style={{
                            width: '90%',
                            margin:'0em 2em 0em 2em',
                            paddingBottom: this.props.lastYear ? '1em' : {},
                        }}
                    >
                        {this.props.lastYear ? (
                            `These are the exhibitors from the ${this.state.previousYear} fair.`
                        ) : (
                            <span>
                                <span className='bold'>
                                    Sustainability & Diversity
                                </span>{' '}
                                form the core values at the heart of our
                                organization. To highlight our core values, we
                                have chosen to dedicate focus areas of the fair
                                called Green Room and Diversity Room. If an
                                exhibitor is tagged with one of the images
                                below, they are in one of these rooms!
                            </span>
                        )}
                    </p> */}
                    {this.state.showModal
                        ? this.displayExhibitor(exhibitorToDisplay)
                        : null}

                    <div className='search'>
                        <div className='search-container'>
                            <div className='search-line'>
                                <input
                                    type='text'
                                    placeholder='Search Exhibitors'
                                    aria-label='search'
                                    value={this.state.search}
                                    onChange={this.updateSearch.bind(this)}
                                    className='main-search-box'
                                />
                                {/* <button id='search-button'>Search</button> */}
                                <div
                                    id='filter-button'
                                    onClick={toggleFilterVisibility}
                                    aria-details='filter button'
                                    alt='filter button'
                                >
                                    <BsSliders className='filter-icon' /> Filter
                                </div>
                                {/* <Collapsible
                                    trigger={"Filters"}
                                    triggerStyle={dropDownAttributes}
                                > */}
                            </div>
                            <div id='filter-container'>
                                {this.state.showAllCompanies ? (
                                    <div
                                        className='showAllBox'
                                        onClick={() => {
                                            this.setState({
                                                ...this.state,
                                                showAllCompanies: false,
                                            })
                                        }}
                                    >
                                        <GrCheckboxSelected />
                                        Show All Companies
                                    </div>
                                ) : (
                                    <div
                                        className='showAllBox'
                                        onClick={() => {
                                            this.setState({
                                                ...this.state,
                                                showAllCompanies: true,
                                            })
                                        }}
                                    >
                                        <GrCheckbox />
                                        Show All Companies
                                    </div>
                                )}

                                <Select
                                    closeMenuOnSelect={false}
                                    blurInputOnSelect={false}
                                    isMulti
                                    isSearchable
                                    value={
                                        this.state.dataFromSessionStorage[
                                            'Job Type'
                                        ]
                                    }
                                    name='Job filter'
                                    placeholder='All Jobs'
                                    options={this.state.jobs}
                                    onChange={event => this.jobFilter(event)}
                                    className='basic-multi-select'
                                    classNamePrefix='select'
                                />

                                <Select
                                    closeMenuOnSelect={false}
                                    blurInputOnSelect={false}
                                    isMulti
                                    isSearchable={false}
                                    value={
                                        this.state.dataFromSessionStorage[
                                            'Programme'
                                        ]
                                    }
                                    name='Sector filter'
                                    placeholder='All Industries'
                                    options={this.state.sectors}
                                    onChange={event => this.sectorFilter(event)}
                                    className='basic-multi-select'
                                    classNamePrefix='select'
                                />

                                {/*<Select
                                    closeMenuOnSelect={false}
                                    blurInputOnSelect={false}
                                    isMulti
                                    isSearchable
                                    name='Competence filter'
                                    placeholder='All Competences'
                                    options={this.state.competences}
                                    onChange={event =>
                                        this.competenceFilter(event)
                                    }
                                    className='basic-multi-select'
                                    classNamePrefix='select'
                                /> Disabled filter for now since no companies have filled in /Nima*/}

                                <Select
                                    closeMenuOnSelect={false}
                                    blurInputOnSelect={false}
                                    isMulti
                                    isSearchable
                                    name='Location filter'
                                    placeholder='All Locations'
                                    options={this.state.locations}
                                    onChange={event =>
                                        this.locationFilter(event)
                                    }
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
                                    options={this.state.fair_placements}
                                    onChange={event =>
                                        this.fairPlacementFilter(event)
                                    }
                                    className='basic-multi-select'
                                    classNamePrefix='select'
                                />
                                {this.props.showCV && (
                                    <div
                                        className={`filter-special ${
                                            this.props.lastYear
                                                ? 'display-none'
                                                : ''
                                        }`}
                                    >
                                        <input
                                            id='diversity'
                                            type='image'
                                            alt='diversity filter'
                                            src={this.state.diversitysrc}
                                            onClick={() =>
                                                this.diversityFilter()
                                            }
                                        />
                                        <input
                                            id='sustainability'
                                            type='image'
                                            alt='sustainability filter'
                                            src={this.state.sustainabilitysrc}
                                            onClick={() =>
                                                this.sustainabilityFilter()
                                            }
                                        />
                                    </div>
                                )}
                            </div>
                            {/* </Collapsible> */}
                        </div>
                        {showFilters ? (
                            <div
                                className={`filters ${
                                    this.props.lastYear ? 'display-none' : ''
                                }`}
                            ></div>
                        ) : null}
                    </div>

                    {/*<div className='supercontainer'>
                        <p className='matching_link'>
                            Pssst! Find your perfect company by using Armada's
                            new{' '}
                            <Link
                                className='matching_link_style'
                                to='/matching'
                            >
                                matching functionality!
                            </Link>
                        </p>
                        </div>*/}

                    {/* TODO: everything should be dynamic instead of hard-coded */}

                    <div className='loading'>
                        {this.state.isLoading ? <Loading /> : null}
                    </div>
                    <div
                        className={
                            'exhibitor-feed ' +
                            (this.state.showModal ? 'notDisplay' : '')
                        }
                    >
                        <div className='recommended-exhibitors'>
                            <div className='recommended-exhibitors-text'>
                                <b>Recommended exhibitors for you</b>
                            </div>
                            <div className='recommended-exhibitors-entries'></div>
                        </div>
                        <div className='all-exhibitors'>
                            <div className='all-exhibitors-text'>
                                <b>All Exhibitors</b>
                            </div>
                            <div className='all-exhibitors-entries'>
                                {filteredCompanies.length &&
                                !this.state.isLoading ? (
                                    filteredCompanies.splice(
                                        0,
                                        this.state.showamount
                                    )
                                ) : (
                                    //filteredCompanies
                                    <div className='Noresultsfound'>
                                        {!this.state.isLoading ? (
                                            <div>
                                                <p className='noresultstext'>
                                                    Sorry, we couldn&apos;t find
                                                    any companies that match
                                                    your search. Please look at
                                                    our cat instead!
                                                </p>
                                                <Cat />
                                            </div>
                                        ) : null}
                                    </div>
                                )}
                                {showall ? (
                                    <div className='showmore-container'>
                                        <button
                                            className='showmorebutton'
                                            onClick={() => this.showMore()}
                                        >
                                            Show All
                                        </button>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div>Exhibitors will be released after summer.</div>
        }
    }
}

//TODO: stop using proptypes
//TODO: reorg of this code into proper places

ExhibitorList.propTypes = {
    exhibitorName: PropTypes.string,
    onChangeExhibitorName: PropTypes.func,
    lastYear: PropTypes.bool,
    year: PropTypes.string,
    showCV: PropTypes.bool,
}

export default ExhibitorList
const ExhibitorItem = props => {
    const setFocusCoordinate = useContext(ExtendedZoom)
    let classname = props.exhibitor.sustainability ? ' green' : ''
    classname += props.exhibitor.diversity ? ' purple' : ''
    classname +=
        props.exhibitor.tier && props.exhibitor.tier === '3'
            ? ' gold-exhib'
            : ''
    classname +=
        props.exhibitor.tier && props.exhibitor.tier === '2'
            ? ' silver-exhib'
            : ''
    return (
        <div
            id={props.exhibitor.id}
            role='presentation'
            className={'exhibitor-box ' + classname}
            onClick={() => {
                console.log('testestest')
                console.log(props.exhibitor)
                setFocusCoordinate({
                    coordinates: props.exhibitor.map_coordinates,
                    floor: props.exhibitor.fair_placement,
                })
                const exhibitorBoxes =
                    document.getElementsByClassName('exhibitor-box')
                for (const box of exhibitorBoxes) {
                    box.style.backgroundColor = '#fafafa'
                }
                document.getElementById(
                    props.exhibitor.id
                ).style.backgroundColor = '#00d790'
                props.showModal(props.exhibitor.name)
            }}
        >
            <div className='image-container'>
                {props.exhibitor.logo_squared != null && (
                    <img
                        alt={props.exhibitor.name}
                        src={props.exhibitor.logo_squared}
                    />
                )}
            </div>
            <p> {props.exhibitor.name} </p>
            {props.exhibitor.location_special === 'Diversity Room' ? (
                <div className='corner-special'>
                    <img
                        alt='Exhibitor in Diversity Room'
                        src='/assets/diversity/diversity-black-nolabel.png'
                    />
                </div>
            ) : null}
            {props.exhibitor.location_special === 'Green Room' ? (
                <div className='corner-special'>
                    <img
                        alt='Exhibitor in Green room'
                        src='/assets/sustainability/sustainability-black-nolabel.png'
                    />
                </div>
            ) : null}
            {props.exhibitor.tier && props.exhibitor.tier === '3' ? (
                <div className='corner-special corner-gold'>
                    <img
                        alt='Gold exhibitor'
                        src='/assets/TierListCard/armada_logo_text_gold.png'
                    />
                </div>
            ) : null}
            {props.exhibitor.tier && props.exhibitor.tier === '2' ? (
                <div className='corner-special corner-gold'>
                    <img
                        alt='Silver exhibitor'
                        src='/assets/TierListCard/armada_logo_text_silver.png'
                    />
                </div>
            ) : null}
        </div>
    )
}

ExhibitorItem.propTypes = {
    name: PropTypes.string,
    exhibitor: PropTypes.object,
    showModal: PropTypes.func,
}
