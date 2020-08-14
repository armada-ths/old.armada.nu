import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import axios from 'axios'
import Select from 'react-select'
import Loading from '../Loading'
import CareerAccordion from '../CareerAccordion'
import useDebounce from '../../hooks/useDebounce'

const CareerContent = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [noAvailable, setNoAvailable] = useState(false)

    const [employments, setEmployments] = useState([])
    const [competences, setCompetences] = useState([])
    const [schoolYears, setSchoolYears] = useState([])
    const [locations, setLocations] = useState([])
    const [companies, setCompanies] = useState([])
    const [activeTags, setActiveTags] = useState({
        schoolYears: [],
        employments: [],
        competences: [],
        locations: [],
        companies: [],
    })
    const [jobs, setJobs] = useState([])
    const [jobsResult, setJobsResult] = useState([])
    const [accordions, setAccordions] = useState({})
    const [searchQuery, setSearchQuery] = useState('')
    const debouncedSearchQuery = useDebounce(searchQuery, 300)

    const filters = [
        {
            label: 'School Year',
            values: schoolYears,
            set: setSchoolYears,
            placeholder: 'Select school years...',
            category: 'schoolYears',
            attr: 'schoolYears',
            tag: true,
            isArray: true,
        },
        {
            label: 'Employment type',
            values: employments,
            set: setEmployments,
            placeholder: 'Select employment type...',
            category: 'employments',
            attr: 'employments',
            tag: true,
            isArray: true,
        },
        {
            label: 'Competences',
            values: competences,
            set: setCompetences,
            placeholder: 'Select competences...',
            category: 'competences',
            attr: 'competences',
            tag: true,
            isArray: true,
        },
        {
            label: 'Locations',
            values: locations,
            set: setLocations,
            placeholder: 'Select locations...',
            category: 'locations',
            attr: 'locations',
            tag: false,
            isArray: true,
        },
        {
            label: 'Companies',
            values: companies,
            set: setCompanies,
            placeholder: 'Select companies...',
            category: 'companies',
            attr: 'company',
            tag: false,
            isArray: false,
        },
    ]

    const searchFields = [
        ...filters.map(filter => filter.attr),
        'jobTitle',
        'aboutJob',
    ]

    const latestFilters = useRef(filters)
    const latestSearchFields = useRef(searchFields)

    useEffect(() => {
        latestFilters.current = filters
        latestSearchFields.current = searchFields
    })

    //TODO Replace with the career endpoint when it's done
    useEffect(() => {
        const sampleSchoolYears = [
            ['Year 1', 'Year 2'],
            ['Year 3', 'Year 4', 'Year 5'],
            ['Year 3'],
            ['Year 5'],
            ['Year 2'],
            ['Year 1'],
            ['Year 4'],
        ]

        axios
            .get(`https://ais.armada.nu/api/exhibitors/?year=2019`)
            .then(res => {
                let data = res.data
                let jobList = data.map(job => {
                    return {
                        company: job.name,
                        jobTitle:
                            job.industries.length > 0
                                ? job.industries[0].name
                                : 'A job',
                        locations: job.cities
                            .split(',')
                            .slice(0, Math.floor(Math.random() * 6))
                            .filter(city => city !== '')
                            .map(city => city.trim()),
                        external: job.company_website,
                        aboutJob: job.about,
                        lookingFor: job.about,
                        aboutCompany: job.about,
                        schoolYears:
                            sampleSchoolYears[
                                Math.floor(
                                    Math.random() * sampleSchoolYears.length
                                )
                            ],
                        employments: job.employments
                            .map(function (elem) {
                                return elem.name
                            })
                            .sort(),
                        competences: job.competences
                            .map(function (elem) {
                                return elem.name
                            })
                            .sort(),
                        logo: job.logo_squared
                            ? job.logo_squared
                            : job.logo_freesize,
                    }
                })

                setJobs(jobList)
                setJobsResult(jobList)
                setNoAvailable(jobList.length === 0)
                for (const filter of latestFilters.current) {
                    filter.set(
                        jobList
                            .map(job => job[filter.attr])
                            .flat()
                            .filter(
                                (elem, index, self) =>
                                    index === self.indexOf(elem)
                            )
                            .sort()
                    )
                }
                setIsLoading(false)
            })
            .catch(() => {
                setNoAvailable(true)
                setIsLoading(false)
            })
    }, [])

    useEffect(() => {
        setIsLoading(true)
    }, [searchQuery])

    useEffect(() => {
        const updateJobResults = () => {
            let copy = jobs.map(el => Object.assign({}, el))

            const filterOnAttr = (job, category, attr) => {
                return activeTags[category].length > 0
                    ? activeTags[category]
                          .map(el => el.label)
                          .includes(job[attr])
                    : true
            }

            const filterOnAttrArray = (job, attr) => {
                return activeTags[attr].length > 0
                    ? job[attr].filter(
                          function (e) {
                              return this.indexOf(e) >= 0
                          },
                          activeTags[attr].map(tag => tag.label)
                      ).length > 0
                    : true
            }

            const searchAttr = (job, attr) => {
                const prepareSearchStr = (str, clean) => {
                    const lowercase = str.trim().toLowerCase()
                    return clean
                        ? lowercase.replace(/[^a-z0-9]/gi, '')
                        : lowercase
                }

                return Array.isArray(job[attr])
                    ? job[attr].filter(function (el) {
                          return (
                              prepareSearchStr(el).includes(
                                  debouncedSearchQuery
                              ) ||
                              prepareSearchStr(el, true).includes(
                                  prepareSearchStr(debouncedSearchQuery, true)
                              )
                          )
                      }).length > 0
                    : prepareSearchStr(job[attr]).includes(
                          debouncedSearchQuery
                      ) ||
                          prepareSearchStr(job[attr], true).includes(
                              debouncedSearchQuery
                          )
            }

            if (Object.values(activeTags).flat().length > 0) {
                copy = copy.filter(job =>
                    latestFilters.current
                        .map(el =>
                            el.isArray
                                ? filterOnAttrArray(job, el.attr)
                                : filterOnAttr(job, el.category, el.attr)
                        )
                        .every(el => el)
                )
            }

            if (debouncedSearchQuery.length > 1) {
                copy = copy.filter(job =>
                    latestSearchFields.current
                        .map(field => searchAttr(job, field))
                        .some(el => el)
                )
            }

            setJobsResult(copy)
            setAccordions({})
        }
        updateJobResults()
        setIsLoading(jobs.length === 0)
    }, [jobs, debouncedSearchQuery, activeTags])

    const getJobTags = job => {
        return [].concat.apply(
            [],
            filters
                .filter(filter => filter.tag)
                .map(filter =>
                    job[filter.category].map(el => {
                        return {
                            label: el,
                            category: filter.category,
                        }
                    })
                )
        )
    }

    const handleSearch = query => {
        setSearchQuery(query.trim().toLowerCase())
    }

    const handleAccordionClick = accordion => {
        setAccordions({ [accordion]: !accordions[accordion] })
    }

    const scrollToTop = () => {
        document
            .getElementById('job-query')
            .scrollIntoView({ behavior: 'smooth' })
    }

    const handleChipClick = ({ label, category }) => {
        const chipOption = { label: label, value: label }
        const activeCategoryTags = activeTags[category]
        const selected =
            activeCategoryTags.filter(e => e.value === label).length > 0
        setActiveTags({
            ...activeTags,
            ...{
                [category]: selected
                    ? activeCategoryTags.filter(e => e.value !== label)
                    : activeCategoryTags
                    ? [...activeCategoryTags, chipOption]
                    : [chipOption],
            },
        })
        scrollToTop()
    }

    const handleSelectChange = (value, category) => {
        setActiveTags({ ...activeTags, ...{ [category]: value ?? [] } })
        scrollToTop()
    }

    return (
        <div className='career-content' id='career-content'>
            <div className='career-header'>
                <h1>Career</h1>
                {children}
            </div>

            <div className='job-query' id='job-query'>
                <div className='advanced-search'>
                    {filters.map(filter => (
                        <div key={filter.label}>
                            <h4>{filter.label}</h4>
                            <Select
                                placeholder={filter.placeholder}
                                value={activeTags[filter.category]}
                                closeMenuOnSelect={false}
                                blurInputOnSelect={false}
                                isMulti
                                isSearchable={true}
                                options={filter.values.map(tag => {
                                    return { label: tag, value: tag }
                                })}
                                onChange={value =>
                                    handleSelectChange(value, filter.category)
                                }
                                className='basic-multi-select'
                                classNamePrefix='select'
                                isLoading={isLoading}
                            />
                        </div>
                    ))}
                </div>
                <input
                    aria-label='search'
                    placeholder='Search jobs...'
                    onChange={e => handleSearch(e.target.value)}
                    className='job-search'
                />
                {jobsResult.length && !isLoading > 0 ? (
                    <div className='results'>
                        <b>{jobsResult.length}</b>{' '}
                        {`result${jobsResult.length === 1 ? '' : 's'}`}
                    </div>
                ) : (
                    <></>
                )}
            </div>

            {isLoading ? (
                <div className='career-loading'>
                    <Loading />
                </div>
            ) : jobsResult.length > 0 ? (
                jobsResult.map((job, i) => {
                    return (
                        <CareerAccordion
                            key={`accordion_${i}`}
                            id={`accordion_${i}`}
                            company={job.company}
                            logo={job.logo}
                            jobTitle={job.jobTitle}
                            locations={job.locations}
                            external={job.external}
                            aboutJob={job.aboutJob}
                            lookingFor={job.lookingFor}
                            aboutCompany={job.aboutCompany}
                            tags={getJobTags(job)}
                            activeTags={activeTags}
                            accordions={accordions}
                            setAccordion={accordion =>
                                handleAccordionClick(accordion)
                            }
                            setChip={chip => handleChipClick(chip)}
                        />
                    )
                })
            ) : (
                <div className='career-not-found'>
                    <p>
                        {noAvailable
                            ? 'There are currently no jobs available. Check back soon!'
                            : 'No jobs were found. Please adjust your search.'}
                    </p>
                </div>
            )}
        </div>
    )
}

CareerContent.propTypes = {
    children: PropTypes.element,
}

export default CareerContent
