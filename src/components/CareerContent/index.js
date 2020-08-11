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
    const [activeTags, setActiveTags] = useState([])
    const [jobs, setJobs] = useState([])
    const [jobsResult, setJobsResult] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [accordions, setAccordions] = useState({})
    const [chips, setChips] = useState({})

    const getCategoryOptions = (list, attr) => (
        list.map(job => job[attr]).flat().filter((elem, index, self) => (index === self.indexOf(elem))).sort()
    )

    //TODO Replace with the career endpoint when it's done
    //Don't forget to remove the splice
    useEffect(() => {
        axios.get(`https://ais.armada.nu/api/exhibitors/?year=2019`).then((res) => {
            let data = res.data;
            let jobList = data.splice(20,30).map((job) => { 
                return {
                    company: job.name,
                    jobTitle: job.industries.length > 0 ? job.industries[0].name : 'A job',
                    location: job.cities.substr(0, job.cities.indexOf(',')),
                    external: job.company_website,
                    aboutJob: job.about,
                    lookingFor: job.about,
                    aboutCompany: job.about,
                    employments: job.employments.map(function(elem){
                        return elem.name;
                    }).sort(),
                    competences: job.competences.map(function(elem){
                        return elem.name;
                    }).sort(),
                    logo: (job.logo_squared ? job.logo_squared : job.logo_freesize)
                }
            })
            setJobs(jobList)
            setNoAvailable(jobList.length === 0)
            setEmployments(getCategoryOptions(jobList, 'employments'))
            setCompetences(getCategoryOptions(jobList, 'competences'))
            setJobsResult(jobList)
            setIsLoading(false)
        }).catch(err => 
            setIsLoading(false)
        );
    }, [])

    useEffect(() => {
        const getActiveTags = () => {
            return Object.keys(chips).filter((id) => chips[id])
        }
        const updateJobResults = () => {
            let copy = jobs.map(a => Object.assign({}, a));
            console.log(activeTags)
    
                /*
            copy = copy.filter(job => {
                return activeTags ? job.employments.filter(
                    function(e) {
                      return this.indexOf(e) >= 0;
                    },
                    activeTags.map(tag => tag.value)
                ).length > 0 : copy
            })*/

            copy = copy.filter(job => {
                return activeTags ? job.competences.filter(
                    function(e) {
                      return this.indexOf(e) >= 0;
                    },
                    activeTags.map(tag => tag.value)
                ).length > 0 : copy
            })
    
            copy = searchQuery.length > 1 ? copy.filter(job => 
                job.employments.map(function(x){ return x.toLowerCase().replace(/[^a-z0-9]/gi,'') }).includes(searchQuery.replace(/[^a-z0-9]/gi,'')) || 
                job.company.toLowerCase().includes(searchQuery) || 
                job.jobTitle.toLowerCase().includes(searchQuery) || 
                job.location.toLowerCase().includes(searchQuery) || 
                job.aboutJob.toLowerCase().includes(searchQuery) || 
                job.lookingFor.toLowerCase().includes(searchQuery) || 
                job.aboutCompany.toLowerCase().includes(searchQuery)) 
                : copy
    
            setJobsResult(copy)
            setAccordions({})
        }
        updateJobResults()
    }, [jobs, searchQuery, chips, activeTags])
    
    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase())
    }

    const handleAccordionClick = (accordion) => {
        setAccordions({ [accordion]: !accordions[accordion] })
    }

    const handleChipClick = (chip) => {
        setChips({...chips, [chip]: !chips[chip] })
    }
    
  const options = [
    {
        label: "School years",
        options: [
            { label: "Year 1", value: "year_1" },
            { label: "Year 2", value: "year_2" },
            { label: "Year 3", value: "year_3" },
            { label: "Year 4", value: "year_4" },
            { label: "Year 5", value: "year_5" },
            { label: "Unspecified", value: "year_unspecified" },
        ]
    },
    {
      label: "Employment types",
      options: employments.map(tag => { return {label: tag, value: tag}})
    },
    {
        label: "Competences",
        options: competences.map(tag => { return {label: tag, value: tag}})
    },
    { label: "A root option", value: "value_3" },
    { label: "Another root option", value: "value_4" }
  ];
    const formatGroupLabel = (data) => {
        const groupStyles = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        };
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
        };
        return <div style={groupStyles}>
            <span>{data.label}</span>
            <span style={groupBadgeStyles}>{data.options.length}</span>
        </div>
    };

    return(<div className='career-content'>
        <div className='career-header'>
            <h1>Career</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros in lacus mollis mattis. 
                In augue libero, maximus sit amet tempus pretium, gravida sed magna. Vestibulum quis massa rhoncus turpis pretium commodo. 
                Integer elit tellus, egestas id ultrices in, sollicitudin nec urna. Aenean in arcu gravida, tristique orci sit amet, scelerisque ex. 
                Aliquam fringilla pellentesque augue. Aenean eleifend lacus non risus efficitur maximus. Sed elementum sapien odio, a porttitor metus maximus sagittis.
            </p>
        </div>
        
        <Select
            placeholder='Select one or more options...'
            value={activeTags}
            closeMenuOnSelect={false}
            blurInputOnSelect={false}
            isMulti
            isSearchable= {false}
            options = {options}
            onChange={(value) => setActiveTags(value)}
            defaultValue={activeTags}
            formatGroupLabel={formatGroupLabel}
            className='basic-multi-select'
            classNamePrefix='select'/>
        <input aria-label='search' placeholder='Search jobs...' className='job-query' onChange={(e) => handleSearch(e.target.value)}/>
        <div style={{flexDirection: 'row', paddingLeft: '0.5em'}}>
            { employments.map(tag => <div key={tag} role='presentation' className={`chip ${chips[tag] ? 'selected' : ''}`} onClick={() => handleChipClick(tag)}>{tag}</div>) }
        </div>
        { isLoading ? <Loading /> :
            jobsResult.length > 0 ? jobsResult.map((job, i)=>
                <CareerAccordion 
                    key={`accordion_${i}`}
                    id={`accordion_${i}`}
                    company={job.company}
                    jobTitle={job.jobTitle} 
                    location={job.location}
                    external={job.external}
                    aboutJob={job.aboutJob}
                    lookingFor={job.lookingFor}
                    aboutCompany={job.aboutCompany}
                    tags={job.employments}
                    accordions={accordions}
                    setAccordion={(accordion) => handleAccordionClick(accordion)}
                    chips={chips}
                    setChip={(chip) => handleChipClick(chip)}
                    logo={job.logo} />
            ) : 
                <div className='not-found'>
                    <p>
                        {noAvailable ? 'There are currently no jobs available. Check back soon!' : 'No jobs were found. Please adjust your search.'}
                    </p>
                </div>
        }
    </div>)

}

export default CareerContent
