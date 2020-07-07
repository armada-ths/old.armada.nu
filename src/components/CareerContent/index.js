import React, { useState, useEffect } from 'react'
import './index.scss'
import axios from 'axios'
import Loading from '../Loading'
import CareerAccordion from '../CareerAccordion'

const CareerContent = () => {
    
    const [isLoading, setIsLoading] = useState(true)
    const [noAvailable, setNoAvailable] = useState(false)

    const [tags, setTags] = useState([])
    const [jobs, setJobs] = useState([])
    const [jobsResult, setJobsResult] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [accordions, setAccordions] = useState({})
    const [chips, setChips] = useState({})

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
                    tags: job.employments.map(function(elem){
                        return elem.name;
                    }).sort(),
                    logo: (job.logo_squared ? job.logo_squared : job.logo_freesize)
                }
            })
            setJobs(jobList)
            setNoAvailable(jobList.length === 0)
            setTags(jobList.map(job => job.tags).flat().filter((elem, index, self) => (index === self.indexOf(elem))).sort())
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
    
            copy = copy.filter(job => {
                return getActiveTags().length > 0 ? job.tags.filter(
                    function(e) {
                      return this.indexOf(e) >= 0;
                    },
                    getActiveTags()
                ).length > 0 : copy
            })
    
            copy = searchQuery.length > 1 ? copy.filter(job => 
                job.tags.map(function(x){ return x.toLowerCase().replace(/[^a-z0-9]/gi,'') }).includes(searchQuery.replace(/[^a-z0-9]/gi,'')) || 
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
    }, [jobs, searchQuery, chips])
    
    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase())
    }

    const handleAccordionClick = (accordion) => {
        setAccordions({ [accordion]: !accordions[accordion] })
    }

    const handleChipClick = (chip) => {
        setChips({...chips, [chip]: !chips[chip] })
    }

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
        
        <input aria-label='search' placeholder='Search jobs...' className='job-query' onChange={(e) => handleSearch(e.target.value)}/>
        <div style={{flexDirection: 'row', paddingLeft: '0.5em'}}>
            { tags.map(tag => <div key={tag} role='presentation' className={`chip ${chips[tag] ? 'selected' : ''}`} onClick={() => handleChipClick(tag)}>{tag}</div>) }
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
                    tags={job.tags}
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
