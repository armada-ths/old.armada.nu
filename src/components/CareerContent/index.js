import React, { useState, useEffect } from 'react'
import './index.scss'
import axios from 'axios'
import Select from 'react-select'
import Loading from '../Loading'
import CareerAccordion from '../CareerAccordion'

const CareerContent = () => {
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
    const [searchQuery, setSearchQuery] = useState('')
    const [accordions, setAccordions] = useState({})

    const filters = [
        {
            label: 'School Year',
            values: schoolYears,
            set: setSchoolYears,
            placeholder: 'Select school years...',
            category: 'schoolYears',
            attrName: 'schoolYears',
            tag: true,
        },
        {
            label: 'Employment type',
            values: employments,
            set: setEmployments,
            placeholder: 'Select employment type...',
            category: 'employments',
            attrName: 'employments',
            tag: true,
        },
        {
            label: 'Competences',
            values: competences,
            set: setCompetences,
            placeholder: 'Select competences...',
            category: 'competences',
            attrName: 'competences',
            tag: true,
        },
        {
            label: 'Locations',
            values: locations,
            set: setLocations,
            placeholder: 'Select locations...',
            category: 'locations',
            attrName: 'locations',
            tag: false,
        },
        {
            label: 'Companies',
            values: companies,
            set: setCompanies,
            placeholder: 'Select companies...',
            category: 'companies',
            attrName: 'company',
            tag: false,
        },
    ]

    //TODO Replace with the career endpoint when it's done
    //Don't forget to remove the splice
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
                let jobList = data.splice(50, 30).map(job => {
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
                for (const filter of filters) {
                    filter.set(
                        jobList
                            .map(job => job[filter.attrName])
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
            .catch(() => setIsLoading(false))
    }, [])

    useEffect(() => {
        const updateJobResults = () => {
            let copy = jobs.map(el => Object.assign({}, el))

            const filterOnAttr = (job, category, attrName) => {
                return activeTags[category].length > 0
                    ? activeTags[category]
                          .map(el => el.label)
                          .includes(job[attrName])
                    : true
            }

            const filterOnAttrArray = (job, attrName) => {
                return activeTags[attrName].length > 0
                    ? job[attrName].filter(
                          function (e) {
                              return this.indexOf(e) >= 0
                          },
                          activeTags[attrName].map(tag => tag.label)
                      ).length > 0
                    : true
            }

            const searchAttr = (job, attrName) => {
                const prepareSearchStr = (str, clean) => {
                    const lowercase = str.toLowerCase()
                    return clean
                        ? lowercase.replace(/[^a-z0-9]/gi, '')
                        : lowercase
                }
                return Array.isArray(job[attrName])
                    ? job[attrName].filter(function (el) {
                          return (
                              prepareSearchStr(el).includes(searchQuery) ||
                              prepareSearchStr(el, true).includes(
                                  prepareSearchStr(searchQuery, true)
                              )
                          )
                      }).length > 0
                    : prepareSearchStr(job[attrName]).includes(searchQuery) ||
                          prepareSearchStr(job[attrName], true).includes(
                              searchQuery
                          )
            }
            copy = activeTags
                ? Object.values(activeTags).flat().length > 0
                    ? copy.filter(
                          job =>
                              filterOnAttrArray(job, 'competences') &&
                              filterOnAttrArray(job, 'employments') &&
                              filterOnAttrArray(job, 'schoolYears') &&
                              filterOnAttrArray(job, 'locations') &&
                              filterOnAttr(job, 'companies', 'company')
                      )
                    : copy
                : copy

            copy =
                searchQuery.length > 1
                    ? copy.filter(
                          job =>
                              searchAttr(job, 'competences') ||
                              searchAttr(job, 'employments') ||
                              searchAttr(job, 'schoolYears') ||
                              searchAttr(job, 'locations') ||
                              searchAttr(job, 'company') ||
                              searchAttr(job, 'jobTitle') ||
                              searchAttr(job, 'aboutJob') ||
                              searchAttr(job, 'lookingFor') ||
                              searchAttr(job, 'aboutCompany')
                      )
                    : copy

            setJobsResult(copy)
            setAccordions({})
        }
        updateJobResults()
    }, [jobs, searchQuery, activeTags])

    const handleSearch = query => {
        setSearchQuery(query.toLowerCase())
    }

    const handleAccordionClick = accordion => {
        setAccordions({ [accordion]: !accordions[accordion] })
    }

    const scrollToTop = () => {
        document
            .getElementById('job-query')
            .scrollIntoView({ behavior: 'smooth' })
    }

    const handleChipClick = chip => {
        const chipOption = { label: chip.label, value: chip.label }
        const activeCategoryTags = activeTags[chip.category]
        const selected =
            activeCategoryTags.filter(e => e.value === chip.label).length > 0
        setActiveTags({
            ...activeTags,
            ...{
                [chip.category]: selected
                    ? activeCategoryTags.filter(e => e.value !== chip.label)
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
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eu eros in lacus mollis mattis. In augue
                    libero, maximus sit amet tempus pretium, gravida sed magna.
                    Vestibulum quis massa rhoncus turpis pretium commodo.
                    Integer elit tellus, egestas id ultrices in, sollicitudin
                    nec urna. Aenean in arcu gravida, tristique orci sit amet,
                    scelerisque ex. Aliquam fringilla pellentesque augue. Aenean
                    eleifend lacus non risus efficitur maximus. Sed elementum
                    sapien odio, a porttitor metus maximus sagittis.
                </p>
            </div>

            <div className='job-query' id='job-query'>
                <input
                    aria-label='search'
                    placeholder='Search jobs...'
                    onChange={e => handleSearch(e.target.value)}
                    className='job-search'
                />
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
                {jobsResult.length > 0 ? (
                    <div className='results'>
                        <b>{jobsResult.length}</b>{' '}
                        {`result${jobsResult.length === 1 ? '' : 's'}`}
                    </div>
                ) : (
                    <></>
                )}
            </div>

            {isLoading ? (
                <Loading />
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
                            tags={[].concat.apply(
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
                            )}
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

export default CareerContent
