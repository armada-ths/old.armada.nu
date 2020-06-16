import React from 'react'
import './index.scss'
import axios from 'axios'
import Loading from '../Loading'
import CareerAccordion from '../CareerAccordion'

class CareerContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            noAvailable: false,
            tags: [],
            accordions: {},
            chips: {},
            jobs: [],
            jobsResult: [],
            searchQuery: ''
        }; 
        
        this.handleAccordionClick = this.handleAccordionClick.bind(this);
        this.handleChipClick = this.handleChipClick.bind(this);
        this.getActiveTags = this.getActiveTags.bind(this);
        
        this.updateJobResults = this.updateJobResults.bind(this);
    }

    componentDidMount() {
        //TODO Replace with the career endpoint when it's done
        //Don't forget to remove the splice
        axios.get(`https://ais.armada.nu/api/exhibitors/?year=2019`)
            .then((res) => {
            let jobs = res.data;
            let jobList = jobs.splice(20,30).map((job) => { 
                console.log((job.logo_squared ? job.logo_squared : job.logo_freesize))
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
            });
            this.setState({
                jobs: jobList,
                noAvailable: jobList.length > 0 ? false: true,
                tags: jobList.map(job => job.tags).flat().filter((elem, index, self) => (index === self.indexOf(elem))).sort(),
            }, () => this.setState({ jobsResult: this.state.jobs, isLoading: false }))
            
        });
    }
    
    getActiveTags() {
        return Object.keys(this.state.chips).filter((id) => this.state.chips[id])
    }

    handleSearch(query) {
        this.setState( { searchQuery: query.toLowerCase() }, function() { this.updateJobResults() } )
    }

    handleAccordionClick(accordion) {
        this.setState( { accordions: { [accordion]: !this.state.accordions[accordion] } })
    }

    handleChipClick(chip) {
        this.setState( { chips: {...this.state.chips, [chip]: !this.state.chips[chip] } }, function() { this.updateJobResults() } )
    }

    updateJobResults() {
        let copy = this.state.jobs.map(a => Object.assign({}, a));

        copy = copy.filter(job => {
            return this.getActiveTags().length > 0 ? job.tags.filter(
                function(e) {
                  return this.indexOf(e) >= 0;
                },
                this.getActiveTags()
            ).length > 0 : copy
        })

        copy = this.state.searchQuery.length > 1 ? copy.filter(job => 
            job.tags.map(function(x){ return x.toLowerCase().replace(/[^a-z0-9]/gi,'') }).includes(this.state.searchQuery.replace(/[^a-z0-9]/gi,'')) || 
            job.company.toLowerCase().includes(this.state.searchQuery) || 
            job.jobTitle.toLowerCase().includes(this.state.searchQuery) || 
            job.location.toLowerCase().includes(this.state.searchQuery) || 
            job.aboutJob.toLowerCase().includes(this.state.searchQuery) || 
            job.lookingFor.toLowerCase().includes(this.state.searchQuery) || 
            job.aboutCompany.toLowerCase().includes(this.state.searchQuery)) 
            : copy

        this.setState({
            jobsResult: copy,
            accordions: {}
        })
    }
    
    render() {
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
            
            <input placeholder='Search jobs...' className='job-query' onChange={(e) => this.handleSearch(e.target.value)}/>
            <div style={{flexDirection: 'row', paddingLeft: '0.5em'}}>
                { this.state.tags.map(tag => <div key={tag} className={`chip ${this.state.chips[tag] ? 'selected' : ''}`} onClick={() => this.handleChipClick(tag)}>{tag}</div>) }
            </div>
            { this.state.isLoading ? <Loading /> :
                this.state.jobsResult.length > 0 ? this.state.jobsResult.map((job, i)=>
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
                        accordions={this.state.accordions}
                        setAccordion={(accordion) => this.handleAccordionClick(accordion)}
                        chips={this.state.chips}
                        setChip={(chip) => this.handleChipClick(chip)}
                        logo={job.logo} />
                ) : 
                    <div className='not-found'>
                        <p>
                            {this.state.noAvailable ? 'There are currently no jobs available. Check back soon!' : 'No jobs were found. Please adjust your search.'}
                        </p>
                    </div>
            }
        </div>)
    }
}

export default CareerContent
