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
  const [activeTags, setActiveTags] = useState([])
  const [jobs, setJobs] = useState([])
  const [jobsResult, setJobsResult] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [accordions, setAccordions] = useState({})

  const getCategoryOptions = (list, attr) =>
    list
      .map(job => job[attr])
      .flat()
      .filter((elem, index, self) => index === self.indexOf(elem))
      .sort()

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
              job.industries.length > 0 ? job.industries[0].name : 'A job',
            locations: job.cities
              .split(',')
              .slice(0, Math.floor(Math.random() * 6))
              .filter(city => city !== ''),
            external: job.company_website,
            aboutJob: job.about,
            lookingFor: job.about,
            aboutCompany: job.about,
            schoolYears:
              sampleSchoolYears[
                Math.floor(Math.random() * sampleSchoolYears.length)
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
            logo: job.logo_squared ? job.logo_squared : job.logo_freesize,
          }
        })
        setJobs(jobList)
        setJobsResult(jobList)
        setNoAvailable(jobList.length === 0)
        setEmployments(getCategoryOptions(jobList, 'employments'))
        setCompetences(getCategoryOptions(jobList, 'competences'))
        setSchoolYears(getCategoryOptions(jobList, 'schoolYears'))
        setLocations(getCategoryOptions(jobList, 'locations'))
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    const updateJobResults = () => {
      let copy = jobs.map(el => Object.assign({}, el))

      const filterOnAttrArray = (job, attrName) => {
        return (
          job[attrName].filter(
            function (e) {
              return this.indexOf(e) >= 0
            },
            activeTags.map(tag => tag.value)
          ).length > 0
        )
      }

      const searchAttr = (job, attrName) => {
        const prepareSearchStr = (str, clean)  => {
            const lowercase = str.toLowerCase()
            return clean ? lowercase.replace(/[^a-z0-9]/gi,'') : lowercase
        }
        return Array.isArray(job[attrName])
          ? job[attrName].filter(function (el) {
              return prepareSearchStr(el).includes(searchQuery) || prepareSearchStr(el, true).includes(prepareSearchStr(searchQuery, true)) 
            }).length > 0
          : prepareSearchStr(job[attrName]).includes(searchQuery) || prepareSearchStr(job[attrName], true).includes(searchQuery)
      }

      copy = activeTags
        ? activeTags.length > 0
          ? copy.filter(
              job =>
                filterOnAttrArray(job, 'competences') ||
                filterOnAttrArray(job, 'employments') ||
                filterOnAttrArray(job, 'schoolYears') ||
                filterOnAttrArray(job, 'locations')
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
    document.getElementById('job-query').scrollIntoView({ behavior: 'smooth' })
  }

  const handleChipClick = chip => {
    const chipOption = { label: chip, value: chip }
    const selected = activeTags.filter(e => e.value === chip).length > 0
    setActiveTags(
      selected
        ? activeTags.filter(e => e.value !== chip)
        : activeTags
        ? [...activeTags, chipOption]
        : [chipOption]
    )
    scrollToTop()
  }

  const handleSelectChange = value => {
    setActiveTags(value ?? [])
    scrollToTop()
  }

  const options = [
    {
      label: 'School years',
      options: schoolYears.map(tag => {
        return { label: tag, value: tag }
      }),
    },
    {
      label: 'Employment types',
      options: employments.map(tag => {
        return { label: tag, value: tag }
      }),
    },
    {
      label: 'Competences',
      options: competences.map(tag => {
        return { label: tag, value: tag }
      }),
    },
    {
      label: 'Locations',
      options: locations.map(tag => {
        return { label: tag, value: tag }
      }),
    },
  ]

  const formatGroupLabel = data => {
    const groupStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }
    const groupBadgeStyles = {
      backgroundColor: '#EBECF0',
      borderRadius: '2em',
      color: '#172B4D',
      display: 'inline-block',
      fontSize: 12,
      fontWeight: 'normal',
      lineHeight: '1',
      minWidth: 1,
      padding: '0.16666666666667em 0.5em',
      textAlign: 'center',
    }
    return (
      <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
      </div>
    )
  }

  return (
    <div className='career-content' id='career-content'>
      <div className='career-header'>
        <h1>Career</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eu eros in lacus mollis mattis. In augue libero, maximus sit amet
          tempus pretium, gravida sed magna. Vestibulum quis massa rhoncus
          turpis pretium commodo. Integer elit tellus, egestas id ultrices in,
          sollicitudin nec urna. Aenean in arcu gravida, tristique orci sit
          amet, scelerisque ex. Aliquam fringilla pellentesque augue. Aenean
          eleifend lacus non risus efficitur maximus. Sed elementum sapien odio,
          a porttitor metus maximus sagittis.
        </p>
      </div>

      <div className='job-query' id='job-query'>
        <Select
          placeholder='Select one or more options...'
          value={activeTags}
          closeMenuOnSelect={false}
          blurInputOnSelect={false}
          isMulti
          isSearchable={true}
          options={options}
          onChange={handleSelectChange}
          defaultValue={activeTags}
          formatGroupLabel={formatGroupLabel}
          className='basic-multi-select'
          classNamePrefix='select'
          isLoading={isLoading}
        />
        <input
          aria-label='search'
          placeholder='Search jobs...'
          onChange={e => handleSearch(e.target.value)}
          className='job-search'
        />
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
        jobsResult.map((job, i) => (
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
            tags={[...job.employments, ...job.competences, ...job.schoolYears]}
            activeTags={activeTags}
            accordions={accordions}
            setAccordion={accordion => handleAccordionClick(accordion)}
            setChip={chip => handleChipClick(chip)}
          />
        ))
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
