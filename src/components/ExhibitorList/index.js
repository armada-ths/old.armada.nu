import React from "react";
import axios from "axios";
import EasterEgg from "react-easter";
import Confetti from "react-confetti";
import PropTypes from "prop-types";
import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
import "./exhibitorlist.scss";
import Helmet from "react-helmet"
import Modal from "../Modal";
import Loading from "../Loading"
import Cat from "../Cat"


const urlPropsQueryConfig = {
    exhibitorName: { type: UrlQueryParamTypes.string, queryParam: 'exhibitorName' },
};
const ais = 'https://ais.armada.nu/';

const armada2018 = ["a","r","m","a","d","a","2","0","1","8"];
const banquet = ["b","a","n","q","u","e","t"];

class ExhibitorList extends React.Component {
    constructor(props) {
        super(props); // adopts parent qualities
        this.state = {
            exhibitors: [],  // json object
            exhibitorList: [],
            showModal: false,
            exhibitorName: undefined,
            isLoading: true,
            search: '',
            jobfilters: {},
            shine: '',
            num: 0,
            diversityfilter: false,
            sustainabilityfilter: false,
            startupfilter: false,
            location: "Any",
            sector: "All",
            locations : ['Sweden', 'Europe', 'Asia', 'Oceania', 'North America', 'South America', 'Africa'],
            sectors : ['Retail','Graphic Productions','Recruitment','Architecture','Investment','Environmental Sector','Pedagogy','Web Development','Solid Mechanics','Simulation Technology','Pharmacy','Nuclear Power','Fluid Mechanics','Wood-Processing Industry','Medical Technology','Media Technology','Marine Systems','Manufacturing Industry','Management Consulting','Management','Insurance','Finance & Consultancy','Construction','Aerospace','Telecommunication','Electronics','Material Development','Industry','Energy Technology','Research','Systems Development','Property & Infrastructure','Computer Science & IT','Technical Consulting','Product Development','Interaction Design','Industry Design'],

        };
    }

    componentDidMount() {  // only called when exhibitor page is created or updated.
        axios.get( ais + 'api/exhibitors?img_placeholder=true')  // fetch data witt promise (then) and res(ult)
            .then( (res)  => {
                let exhibitors = res.data;  // create variable and store result within parameter data
                exhibitors.sort((a, b) => a.name.localeCompare(b.name));
                let exhibitorList = exhibitors.map((exhibitor) => <ExhibitorItem key={exhibitor.id} name={exhibitor.name}
                                                                                 exhibitor={exhibitor} showModal={this.showModal}/>);
                this.setState({ exhibitors, exhibitorList, isLoading:false, });  // component saves its own data
                // Get from url path the GET params ?id=number, to know what event to display
                if (this.props.exhibitorName !== undefined ){
                    this.setState({exhibitorName: this.props.exhibitorName, showModal:true});
                }
            });
    }
    updateSearch(event){
        this.setState({search: event.target.value.substr(0,100)});
    }
    getJobContainer(exhibitor){
        return(  <div className = "job-container">

                <h3>Job Opportunities</h3>
                {exhibitor.employments.map((jobtype) => <div className="job-section">{jobtype.name}</div>)}

            </div>
        )
    }

    showModal = (exhibitorName) => {
        this.setState({showModal: !this.state.showModal, exhibitorName});
        this.props.onChangeExhibitorName(exhibitorName);
    };

    displayExhibitor = (exhibitor) => {
        return (
            <Modal onClose={() => this.showModal(null)}>
                <div className="modalimage-exhib">
                    <img src={ais + exhibitor.logo_squared} />
                </div>

                <div className="modalinfo">
                    <div className='modal-property'>
                        <div className='icon-group'>
                            {exhibitor.diversity == true
                                ? <img className='special' src='/assets/diversity_a.svg'/> : null }
                            {exhibitor.sustainability == true
                                ? <img className='special' src='/assets/sustainability.svg'/> : null }
                        </div>
                    </div>

                    <div className="description-container">
                        <h3>{exhibitor.company}</h3>
                        <div className="description">
                            {exhibitor.about.split('\n').map( (paragraph) => <p> {paragraph} </p> )}
                        </div>
                    </div>
                    {exhibitor.employments.length > 0 ? this.getJobContainer(exhibitor) : null}
                    <div className='location-container'>
                        <h3>Find us at the fair</h3>
                        <div className='location'>
                            <div className='icon'><img src='/assets/place.svg'/></div>
                            <div className="position">{exhibitor.exhibitor_location}</div>
                        </div>
                        {/* {exhibitor.map_location_url.includes('missing') == false ? <div className="map"><img src={exhibitor.map_location_url} /></div> : null} */}
                    </div>
                </div>

            </Modal>
        );
    }

    cssShine(value){
        if (global.document != undefined){
            let shineItems = global.document.getElementsByClassName(value);
            for (let i = 0; i < shineItems.length; i++){
                shineItems[i].className += ' shine-loop';
            }
        }
    }

    cssShineOff(){
        if (global.document != undefined){
            let shineItems = global.document.getElementsByClassName('shine-loop');
            while (shineItems.length> 0){
                let className = shineItems[0].className;
                shineItems[0].className = className.replace('shine-loop','') ;
            }
        }
    }

    jobFilter(value){
        let jobfilters = this.state.jobfilters;
        jobfilters[value] = !jobfilters[value];
        this.setState({jobfilters})
    }

    // Gets value from checkbox regarding startup filtering
    startupFilter() {
        let startupfilter = this.state.startupfilter;
        if (startupfilter === false) { startupfilter = true }
        else if (startupfilter === true) { startupfilter = false }
        this.setState({ startupfilter })
    }

    diversityFilter() {
        let diversityfilter = this.state.diversityfilter;
        if (diversityfilter === false) { diversityfilter = true }
        else if (diversityfilter === true) { diversityfilter = false }
        this.setState({ diversityfilter })
    }

    sustainabilityFilter() {
        let sustainabilityfilter = this.state.sustainabilityfilter;
        if (sustainabilityfilter === false) { sustainabilityfilter = true }
        else if (sustainabilityfilter === true) { sustainabilityfilter = false }
        this.setState({ sustainabilityfilter })
    }

    buildOptions(array) {
      var listitems = []

      for (let i = 0; i < array.length; i++) {
        listitems.push(<option key={array[i]} value={array[i]}>{array[i]}</option>);
      }
      return listitems;
    }

    locationFilter(e) {
      let location = this.state.location;
      location = e.target.value;
      this.setState({ location });
    }

    sectorFilter(e) {
        let sector = this.state.sector;
        sector = e.target.value;
        this.setState({ sector });
    }

    render() {
        // Here you decide if list of exhibitors should be displayed or not
        let showExhibitors = true;
        let exhibitorToDisplay = this.state.exhibitors.filter(exhibitor => exhibitor.name == this.state.exhibitorName)[0];
        let filteredCompanies = this.state.exhibitorList.filter(
            (exhibitorItem) => {return (exhibitorItem.props.name.toLowerCase().startsWith(this.state.search.toLowerCase()) );}
        );
        if (filteredCompanies.length < 1 ) {
            filteredCompanies = this.state.exhibitorList.filter(
                (exhibitorItem) => {
                    return (exhibitorItem.props.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
                });
        }

        if (this.state.diversityfilter === true) {
            filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
                return exhibitorItem.props.exhibitor.groups.name == 'diversity';
            });
        }

        if (this.state.sustainabilityfilter === true) {
            filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
                return exhibitorItem.props.exhibitor.groups.name == 'sustainability';
            });
        }

        //Loop through the properties of filters object:
        for(let filterkey in this.state.jobfilters) {
            if (this.state.jobfilters[filterkey] == true) {
                filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
                    for (let jobtypeindex in exhibitorItem.props.exhibitor.employments) {
                        if (exhibitorItem.props.exhibitor.employments[jobtypeindex].name == filterkey) {
                            return true;
                        }
                    }
                    return false;
                });
            }
        }

        // Startup filter
        if (this.state.startupfilter === true) {
            filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
                return exhibitorItem.props.exhibitor.groups.name == 'startup';
            });
        }

        //Location filter
        if (this.state.location === "Any") {
            filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
                    return exhibitorItem;
            });
        }
        else{
            filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
              if (this.state.location == 'Sweden') {
                for (let i in exhibitorItem.props.exhibitor.locations) {
                    if (exhibitorItem.props.exhibitor.locations[i].name[0] == 'S') {
                        return true;
                    }
                }
                return false;
              } else {
                for (let i in exhibitorItem.props.exhibitor.locations) {
                    if (exhibitorItem.props.exhibitor.locations[i].name == 'World \u2013 ' + this.state.location) {
                        return true;
                    }
                }
                return false;
              }
            });
        }

        // Sector filter
        if (this.state.sector === "All") {
            filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
                    return exhibitorItem;
            });
        }
        else{
            filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
                for (let sectorindex in exhibitorItem.props.exhibitor.industries) {
                    if (exhibitorItem.props.exhibitor.industries[sectorindex].name == this.state.sector) {
                        return true;
                    }
                }
                return false;
            });
        }

        if (showExhibitors) {
            return (
                <div className = "exhibitors">

                <EasterEgg keys={armada2018} timeout={7000}>
                  <div className="armadaRainbow easterEggPosition"/>
                </EasterEgg>

                <EasterEgg keys={banquet} timeout={10000}>
                  <div className="armadaConfetti easterEggPosition">
                    <Confetti width={2000} height={2000} wind={0.03} numberOfPieces={500} confettiSource={{x: -100, y: 120}} gravity={0.15}/>
                  </div>
                </EasterEgg>


                    <Helmet
                        title={ "Exhibitors" }
                    />
                    {this.state.showModal ? (this.displayExhibitor(exhibitorToDisplay) ) : null}

                    <div className = "filter-special">

                      <input id="diversity" type="image" alt='diversity filter' src='/assets/diversity_a.svg'
                        onClick={()=>this.diversityFilter()}
                        onMouseEnter = {() => this.cssShine('purple')}
                        onMouseLeave = {() => this.cssShineOff()}
                      />

                      <input id="sustainability" type="image" alt='sustainability filter' src='/assets/sustainability.svg'
                        onClick ={()=>this.sustainabilityFilter()}
                        onMouseEnter = {() => this.cssShine('green')}
                        onMouseLeave = {() => this.cssShineOff()}
                      />


                    </div>

                    <div className = "search-containter">
                        <input type = "text"
                        placeholder= "Search Exhibitor"
                               value={this.state.search}
                               onChange ={this.updateSearch.bind(this)}
                        />
                    </div>

                    <div className="dropdown-container">
                      <div className="select">
                          <select onChange={this.sectorFilter.bind(this)}>
                              <option value="All" selected>All Sectors</option>
                              {this.buildOptions(this.state.sectors)}
                          </select>
                          <div className="select_arrow"></div>
                      </div>
                    </div>

                    <div className="dropdown-container">
                      <div className="select">
                          <select onChange={this.locationFilter.bind(this)}>
                              <option value="Any" selected>Any</option>
                              {this.buildOptions(this.state.locations)}
                          </select>
                          <div className="select_arrow"></div>
                      </div>
                    </div>

                    {/* a point of improvement could be to create a list of available filters in the ais and then map them here.
                    and not hardcode it as it is now. Then the options would change automatically if the jobs offered in the ais change
                    no word for the coder and less risk of displaying the wrong filters */}
                    <div className = "checkbox-filtering">

                        <div className = "checkbox-container">
                            <input type="checkbox" id="check1" onClick ={()=>this.jobFilter("Trainee")} />
                            <label htmlFor={"check1"}>Trainee</label>
                        </div>

                        <div className = "checkbox-container">
                            <input type="checkbox" id="check2" onClick ={()=>this.jobFilter("Master thesis")}/>
                            <label htmlFor={"check2"}>Master Thesis</label>
                        </div>

                        <div className = "checkbox-container">
                            <input type="checkbox" id="check3" onClick ={()=>this.jobFilter("Summer job")}/>
                            <label htmlFor={"check3"}>Summer Job</label>
                        </div>

                        <div className = "checkbox-container">
                            <input type="checkbox" id="check4" onClick ={()=>this.jobFilter("Part time job")} />
                            <label htmlFor={"check4"}>Part Time Job</label>
                        </div>

                        <div className = "checkbox-container">
                            <input type="checkbox" id="check5" onClick ={()=>this.jobFilter("Internship")} />
                            <label htmlFor={"check5"}>Internship</label>
                        </div>

                        <div className = "checkbox-container">
                            <input type="checkbox" id="check6" onClick ={()=>this.jobFilter("Bachelor thesis")} />
                            <label htmlFor={"check6"}>Bachelor Thesis</label>
                        </div>

                        <div className = "checkbox-container">
                            <input type="checkbox" id="check7" onClick ={()=>this.jobFilter("Full time job")} />
                            <label htmlFor={"check7"}>Full Time Job</label>
                        </div>

                        <div className="checkbox-container">
                            <input type="checkbox" id="check8" onClick={() => this.startupFilter()} />
                            <label htmlFor={"check8"}>Startup</label>
                        </div>

                    </div>

                    <div className = "loading">
                        {this.state.isLoading ? <Loading/> :null}
                    </div>
                    <div className="exhibitor-feed">
                        {filteredCompanies.length && !this.state.isLoading ? filteredCompanies : <div className="Noresultsfound"><p className="noresultstext">Sorry, we couldn't find any companies that match your search. Please look at our cat instead!</p><Cat/></div>}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    Exhibitors will be released after summer.
                </div>
            )
        }
    }
}


ExhibitorList.propTypes = {
    exhibitorName: PropTypes.string,
    onChangeExhibitorName: PropTypes.func,
}

let toExport;
if(global.window!=undefined){
    toExport = addUrlProps({urlPropsQueryConfig})(ExhibitorList);
}else{
    toExport=ExhibitorList;
}
export default toExport;

const ExhibitorItem = (props) => {
    let classname = props.exhibitor.sustainability == true ? " green" : "" ;
    classname += props.exhibitor.diversity == true ? " purple": "";

    return (
        <div id={props.name} className = {"exhibitor-box " + classname} onClick={()=> props.showModal(props.exhibitor.name)}>
            <div className = "image-container">
                <img src = {ais + props.exhibitor.logo_squared} />
            </div>
            <p> {props.exhibitor.name} </p>
            {props.exhibitor.diversity == true
                ? <div className='corner-special'><img  src='/assets/diversity_a.svg'/></div>: null }
            {props.exhibitor.sustainability == true
                ? <div className='corner-special'><img src='/assets/sustainability.svg'/></div> : null }
        </div>)
}

ExhibitorItem.propTypes = {
    name: PropTypes.string,
    exhibitor: PropTypes.object,
    showModal: PropTypes.func,
}
