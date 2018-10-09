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

//base of server adress
const ais = 'https://ais.armada.nu/';

//Easter egg button combos
const armada2018 = ["a","r","m","a","d","a","2","0","1","8"];
const banquet = ["b","a","n","q","u","e","t"];

class ExhibitorList extends React.Component {
    constructor(props) {
        super(props); // adopts parent qualities
        this.state = {
            exhibitors: [],  // json object
            exhibitorList: [], //displayed exhibitors
            showModal: false, //show individual company card
            exhibitorName: undefined,
            isLoading: true,
            search: '', //search query string
            jobfilters: {},
            shine: '',
            diversityfilter: false,
            sustainabilityfilter: false,
            startupfilter: false,
            diversitysrc: '/assets/diversity_a.svg',
            sustainabilitysrc: '/assets/sustainability.svg',
            location: "Anywhere",
            sector: "All",
            locations : ['Sweden', 'Europe', 'Asia', 'Oceania', 'North America', 'South America', 'Africa'], //TODO: fill dynamically from api {locations + sector}
            sectors : ['Retail','Graphic Productions','Recruitment','Architecture','Investment','Environmental Sector',
            'Pedagogy','Web Development','Solid Mechanics','Simulation Technology','Pharmacy','Nuclear Power',
            'Fluid Mechanics','Wood-Processing Industry','Medical Technology','Media Technology','Marine Systems',
            'Manufacturing Industry','Management Consulting','Management','Insurance','Finance & Consultancy','Construction',
            'Aerospace','Telecommunication','Electronics','Material Development','Industry','Energy Technology','Research',
            'Systems Development','Property & Infrastructure','Computer Science & IT','Technical Consulting','Product Development',
            'Interaction Design','Industry Design'],

        };
    }

    //currently only deals w/ getting data from api (unsure)
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

    //search
    updateSearch(event){
        this.setState({search: event.target.value.substr(0,100)});
    }

    //displays types of jobs offered by company in its Modal
    getJobContainer(exhibitor){
        return(
          <div className = "job-container">

                <h3>Job Opportunities</h3>
                <ul>
                  {exhibitor.employments.map((jobtype) => <li className="job-section">{jobtype.name}</li>)}
                </ul>
          </div>
        )
    }

    showModal = (exhibitorName) => {
        this.setState({showModal: !this.state.showModal, exhibitorName});
        this.props.onChangeExhibitorName(exhibitorName);
    };

    displayExhibitor = (exhibitor) => {
        //TODO: add more data to modal. locations etc, change how it's displayed
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

                    <div className = "location-container">
                        <h3>Locations</h3>
                        <ul>
                          {exhibitor.locations.map((loc) =>
                            <li className="location-section">
                              {loc.name}
                            </li>)}
                        </ul>
                    </div>

                    <div className='fairposition-container'>
                        <h3>Find us at the fair</h3>
                        <div className='fairposition'>
                            <div className='icon'><img src='/assets/place.svg'/></div>
                            <div className="position">{exhibitor.exhibitor_location}</div>
                        </div>
                        {/* TODO: Add Map feature to Modal
                          {exhibitor.map_location_url.includes('missing') == false ? <div className="map"><img src={exhibitor.map_location_url} /></div> : null} */}
                    </div>
                </div>

            </Modal>
        );
    }

    //TODO: combine an simplify those two functions
    //diversity and sustainability filters special effects {cssshine, cssShineOff}
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

    //filter functions to be called onChange
    jobFilter(value){
        let jobfilters = this.state.jobfilters;
        jobfilters[value] = !jobfilters[value];
        this.setState({jobfilters})
    }

    //TODO: startup, diversity, and sustainability to be combined
    startupFilter() {
        let startupfilter = this.state.startupfilter;
        if (startupfilter === false) { startupfilter = true }
        else if (startupfilter === true) { startupfilter = false }
        this.setState({ startupfilter })
    }

    diversityFilter() {
        let diversityfilter = this.state.diversityfilter;
        let diversitysrc = this.state.diversitysrc;
        if (diversityfilter === false) {
          diversityfilter = true;
          diversitysrc = '/assets/diversity_selected.svg';
        } else if (diversityfilter === true) {
          diversityfilter = false;
          diversitysrc = '/assets/diversity_a.svg';
        }
        this.setState({ diversityfilter })
        this.setState({ diversitysrc })
    }

    sustainabilityFilter() {
        let sustainabilityfilter = this.state.sustainabilityfilter;
        let sustainabilitysrc = this.state.sustainabilitysrc;
        if (sustainabilityfilter === false) {
          sustainabilityfilter = true;
          sustainabilitysrc = '/assets/sustainability_selected.svg';
        } else if (sustainabilityfilter === true) {
          sustainabilityfilter = false;
          sustainabilitysrc = '/assets/sustainability.svg';
        }
        this.setState({ sustainabilityfilter })
        this.setState({ sustainabilitysrc })
    }

    // groupFilter(group) {
    //     let groupfilter = this.state.groupfilter[value];
    //     if (groupfilter[group] === false) { groupfilter[group] = true }
    //     else if (groupfilter[group] === true) { groupfilter[group] = false }
    //     this.setState({ groupfilter[0] })
    // }

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

    //build options for dropdown filters
    buildOptions(array) {
      var listitems = []

      for (let i = 0; i < array.length; i++) {
        listitems.push(<option key={array[i]} value={array[i]}>{array[i]}</option>);
      }
      return listitems;
    }

    //TODO: divide and simplify into nested components
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

        //Diversity filter
        if (this.state.diversityfilter === true) {
            filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
                return exhibitorItem.props.exhibitor.groups.name == 'diversity';
            });
        }

        //Sustainability filter
        if (this.state.sustainabilityfilter === true) {
            filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
                return exhibitorItem.props.exhibitor.groups.name == 'sustainability';
            });
        }

        // Startup filter
        if (this.state.startupfilter === true) {
            filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
                return exhibitorItem.props.exhibitor.groups.name == 'startup';
            });
        }

        //Job type filter
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

        //Location filter
        if (this.state.location === "Anywhere") {
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

                    {/*TODO: remove blue box around special filters*/}
                    <div className = "filter-special">

                      <input id="diversity" type="image" alt='diversity filter' src={this.state.diversitysrc}
                        onClick={()=>this.diversityFilter()}
                        onMouseEnter = {() => this.cssShine('purple')}
                        onMouseLeave = {() => this.cssShineOff()}
                      />

                      <input id="sustainability" type="image" alt='sustainability filter' src={this.state.sustainabilitysrc}
                        onClick ={()=>this.sustainabilityFilter()}
                        onMouseEnter = {() => this.cssShine('green')}
                        onMouseLeave = {() => this.cssShineOff()}
                      />

                    </div>

                    <div className = "search-container">
                        <input type = "text"
                        placeholder= "Search Exhibitor"
                               value={this.state.search}
                               onChange ={this.updateSearch.bind(this)}
                        />
                    </div>

                    <div className="dropdown-container">
                      <div className="select">
                          <select onChange={this.sectorFilter.bind(this)}>
                              <option value="All">All Sectors</option>
                              {this.buildOptions(this.state.sectors)}
                          </select>
                          <div className="select_arrow"></div>
                      </div>
                    </div>

                    <div className="dropdown-container">
                      <div className="select">
                          <select onChange={this.locationFilter.bind(this)}>
                              <option value="Any">Anywhere</option>
                              {this.buildOptions(this.state.locations)}
                          </select>
                          <div className="select_arrow"></div>
                      </div>
                    </div>

                    {/* TODO: everything should be dynamic instead of hard-coded */}
                    <div className = "checkboxes">
                    <div className = "checkbox-filtering">

                        <div className = "checkbox-container">
                            <input type="checkbox" id="check7" onClick ={()=>this.jobFilter("Full time job")} />
                            <label htmlFor={"check7"}>Full Time Job</label>
                        </div>

                        <div className = "checkbox-container">
                            <input type="checkbox" id="check4" onClick ={()=>this.jobFilter("Part time job")} />
                            <label htmlFor={"check4"}>Part Time Job</label>
                        </div>

                        <div className = "checkbox-container">
                            <input type="checkbox" id="check3" onClick ={()=>this.jobFilter("Summer job")}/>
                            <label htmlFor={"check3"}>Summer Job</label>
                        </div>

                    </div>

                    <div className = "checkbox-filtering">

                        <div className = "checkbox-container">
                            <input type="checkbox" id="check2" onClick ={()=>this.jobFilter("Master thesis")}/>
                            <label htmlFor={"check2"}>Master Thesis</label>
                        </div>

                        <div className = "checkbox-container">
                            <input type="checkbox" id="check6" onClick ={()=>this.jobFilter("Bachelor thesis")} />
                            <label htmlFor={"check6"}>Bachelor Thesis</label>
                        </div>

                    </div>

                    <div className = "checkbox-filtering">

                      <div className = "checkbox-container">
                          <input type="checkbox" id="check5" onClick ={()=>this.jobFilter("Internship")} />
                          <label htmlFor={"check5"}>Internship</label>
                      </div>

                      <div className = "checkbox-container">
                          <input type="checkbox" id="check1" onClick ={()=>this.jobFilter("Trainee")} />
                          <label htmlFor={"check1"}>Trainee</label>
                      </div>

                    </div>
                    <div className = "checkbox-filtering">
                      <div className="checkbox-container">
                          <input type="checkbox" id="startupcb" onClick={() => this.startupFilter()} />
                          <label htmlFor={"startupcb"} id="startuplabel">Startup</label>
                      </div>
                    </div>
                  </div>

                    {/*Loading + no results found components*/}
                    <div className = "loading">
                        {this.state.isLoading ? <Loading/> :null}
                    </div>
                    {/*TODO: don't display cat when first loading*/}
                    <div className="exhibitor-feed">
                        {filteredCompanies.length && !this.state.isLoading ? filteredCompanies :
                          <div className="Noresultsfound">
                            <p className="noresultstext">
                              Sorry, we couldn't find any companies that match your search. Please look at our cat instead!
                            </p>
                              <Cat/>
                          </div>
                        }
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

//TODO: stop using proptypes
//TODO: reorg of this code into proper places

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
