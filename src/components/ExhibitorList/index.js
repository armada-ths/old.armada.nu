import React from "react";
import axios from "axios";
import EasterEgg from "react-easter";
import PropTypes from "prop-types";
import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
import "./exhibitorlist.scss";
import Modal from "../Modal";
import Loading from "../Loading"
import Cat from "../Cat"
import Select from 'react-select'
// import {Link} from "react-router"


const urlPropsQueryConfig = {
  exhibitorName: {type: UrlQueryParamTypes.string, queryParam: 'exhibitorName'},
};

//base of server adress
const ais = 'https://ais.armada.nu/';

//Easter egg button combos
const armada2018 = ["a", "r", "m", "a", "d", "a", "2", "0", "1", "8"];

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
      sectorfilters: {},
      locationfilters: {},
      shine: '',
      diversityfilter: false,
      sustainabilityfilter: false,
      startupfilter: false,
      diversitysrc: '/assets/diversity_a.svg',
      sustainabilitysrc: '/assets/sustainability.svg',
      location: "All",
      sector: "All",
      locations: [{value: 'Sweden', label: 'Sweden'},
        {value: 'Europe', label: 'Europe'}, 
        {value: 'Asia', label: 'Asia'},
        {value: 'Oceania', label: 'Oceania'},
        {value: 'North America', label: 'North America'}, 
        {value: 'South America', label: 'South America'},
        {value: 'Africa', label: 'Africa'}
      ],
      sectors: [{value: 'Retail', label: 'Retail'}, 
        {value: 'Recruitment', label: 'Recruitment'}, 
        {value: 'Architecture', label: 'Architecture'},
        {value: 'Automotive', label: 'Automotive'}, 
        {value: 'Environmental Sector', label: 'Environmental Sector'},
        {value: 'Pedagogy', label: 'Pedagogy'}, 
        {value: 'Web Development', label: 'Web Development'}, 
        {value: 'Solid Mechanics', label: 'Solid Mechanics'}, 
        {value: 'Simulation Technology', label: 'Simulation Technology'}, 
        {value: 'Pharmaceutical', label: 'Pharmaceutical'}, 
        {value: 'Biotechnology', label: 'Biotechnology'},
        {value: 'Acoustics', label: 'Acoustics'}, 
        {value: 'Nuclear Power', label: 'Nuclear Power'},
        {value: 'Fluid Mechanics', label: 'Fluid Mechanics'}, 
        {value: 'Wood-Processing Industry', label: 'Wood-Processing Industry'}, 
        {value: 'Steel Industry', label: 'Steel Industry'}, 
        {value: 'Medical Technology', label: 'Medical Technology'}, 
        {value: 'Media Technology', label: 'Media Technology'}, 
        {value: 'Marine Systems', label: 'Marine Systems'},
        {value: 'Manufacturing Industry', label: 'Manufacturing Industry'}, 
        {value: 'Management Consulting', label: 'Management Consulting'}, 
        {value: 'Insurance', label: 'Insurance'}, 
        {value: 'Finance', label: 'Finance'}, 
        {value: 'Construction', label: 'Construction'},
        {value: 'Aerospace', label: 'Aerospace'},
        {value: 'Logistics & Supply Chain', label: 'Logistics & Supply Chain'},
        {value: 'Telecommunication', label: 'Telecommunication'}, 
        {value: 'Mechatronics', label: 'Mechatronics'},
        {value: 'Electronics', label: 'Electronics'}, 
        {value: 'Material Development', label: 'Material Development'}, 
        {value: 'Energy Technology', label: 'Energy Technology'},
        {value: 'Nanotechnology', label: 'Nanotechnology'}, 
        {value: 'Research', label: 'Research'}, 
        {value: 'Property & Infrastructure', label: 'Property & Infrastructure'},
        {value: 'Infrastructure', label: 'Infrastructure'}, 
        {value: 'Technical Consulting', label: 'Technical Consulting'}, 
        {value: 'IT Consulting', label: 'IT Consulting'},
        {value: 'Software Development', label: 'Software Development'},
        {value: 'Railway', label: 'Railway'}, 
        {value: 'Product Development', label: 'Product Development'}, 
        {value: 'Interaction Design', label: 'Interaction Design'},
        {value: 'Industry Design', label: 'Industry Design'}
      ],
      jobs: [{value: 'Full time job', label: 'Full Time Job'},
        {value: 'Part time job', label: 'Part Time Job'},
        {value: 'Summer job', label: 'Summer Job'},
        {value: 'Internship', label: 'Internship'},
        {value: 'Trainee', label: 'Trainee'},
        {value: 'Master thesis', label: 'Master Thesis'},
        {value: 'Bachelor thesis', label: 'Bachelor Thesis'}],
      showamount: 20,
    };

    let sortedSectors = this.state.sectors.sort((a, b) => a.label.localeCompare(b.label));
    this.setState({sectors: sortedSectors});
  }

  //currently only deals w/ getting data from api (unsure)
  componentDidMount() {  // only called when exhibitor page is created or updated.
    axios.get(ais + 'api/exhibitors?img_placeholder=true')  // fetch data witt promise (then) and res(ult)
        .then((res) => {
          let exhibitors = res.data;  // create variable and store result within parameter data
          exhibitors.sort((a, b) => a.name.localeCompare(b.name));
          let exhibitorList = exhibitors.map((exhibitor) => <ExhibitorItem key={exhibitor.id} name={exhibitor.name}
                                                                           exhibitor={exhibitor} showModal={this.showModal}/>);
          this.setState({exhibitors, exhibitorList, isLoading: false,});  // component saves its own data
          // Get from url path the GET params ?id=number, to know what event to display
          if (this.props.exhibitorName !== undefined) {
            this.setState({exhibitorName: this.props.exhibitorName, showModal: true});
          }
        });
  }

  //search
  updateSearch(event) {
    this.setdefault()
    this.setState({search: event.target.value.substr(0, 100)});
  }

  //displays types of jobs offered by company in its Modal
  getJobContainer(exhibitor) {
    return (
        <div className="job-container">

          <h3 className="modal-subheaders">Job Opportunities</h3>
          <ul>
            {exhibitor.employments.map((jobtype, index) => <li key={index} className="job-section">{jobtype.name}</li>)}
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
          <div className="modal-container">
            <div className="modal-flex-1">
              <div className="modalimage-exhib">
                <img src={ais + exhibitor.logo_squared} alt={exhibitor.name + " logo"}/>
              </div>
              <h1 className="modal-title">{exhibitor.name}</h1>
              <div>
              {exhibitor.company_website ? <h3 className="links"><a href={exhibitor.company_website} target="_blank">{exhibitor.name + " Website"}</a></h3> : null}
              {exhibitor.vyer_position ? <h3 className="links"><a href={exhibitor.vyer_position} target="_blank">Map position</a></h3> : null}
              {exhibitor.flyer ? <h3 className="links"><a href={ais + exhibitor.flyer} target="_blank">{exhibitor.name + " Digital Flyer"}</a></h3> : null}
              </div>
            </div>
            <div className="modal-flex-2">
              <div className="modalinfo">
                <div className='modal-property'>
                  <div className='icon-group'>
                    {exhibitor.diversity == true
                        ? <img className='special' src='/assets/diversity_a.svg'/> : null}
                    {exhibitor.sustainability == true
                        ? <img className='special' src='/assets/sustainability.svg'/> : null}
                  </div>
                </div>

                <div className="description-container">
                  {/*<h3>{exhibitor.name}</h3>*/}
                  <p className="purpose-text"><b>{exhibitor.purpose}</b></p>
                  <br/>
                  <div className="description">
                    {exhibitor.about ? exhibitor.about.split('\n').map((paragraph, index) => <p key={index}> {paragraph} </p>) : null}
                  </div>
                  <div className="climate-compensation">{exhibitor.climate_compensation ? <i>&#127811; This company has climate compensated for their participation in  THS Armada &#127811;</i> : null}</div>
                </div>
                
                <div className="job-location-container">
                  {exhibitor.employments.length > 0 ? this.getJobContainer(exhibitor) : null}

                  {exhibitor.locations.length > 0 &&
                  <div className="location-container">

                    <h3 className="modal-subheaders">Locations</h3>
                    <ul>
                      {exhibitor.locations.map((loc, index) =>
                          <li key={index} className="location-section">
                            {loc.name}
                          </li>)}
                    </ul>
                  </div>
                  }
                {exhibitor.competences.length > 0 &&
                <div className="location-container">
                  <h3 className="modal-subheaders">Competences</h3>
                  <ul>
                    {exhibitor.competences.map((comp, index) =>
                      <li key={index} className="location-section">
                        {comp.name}
                      </li>)}
                  </ul>
                </div>
                }
                {exhibitor.cities.length > 0 &&
                <div className="location-container">
                  <h3 className="modal-subheaders">Cities</h3>
                    {exhibitor.cities}
                </div>
                }
                </div>
              </div>
            </div>
          </div>
        </Modal>
    );
  }

  //TODO: combine an simplify those two functions
  //diversity and sustainability filters special effects {cssshine, cssShineOff}
  cssShine(value) {
    if (global.document != undefined) {
      let shineItems = global.document.getElementsByClassName(value);
      for (let i = 0; i < shineItems.length; i++) {
        shineItems[i].className += ' shine-loop';
      }
    }
  }

  cssShineOff() {
    if (global.document != undefined) {
      let shineItems = global.document.getElementsByClassName('shine-loop');
      while (shineItems.length > 0) {
        let className = shineItems[0].className;
        shineItems[0].className = className.replace('shine-loop', '');
      }
    }
  }

  //filter functions to be called onChange
  jobFilter(value) {
    this.setdefault()
    let jobfilters = this.state.jobfilters;
    jobfilters = value;
    this.setState({jobfilters})
  }

  //filter functions to be called onChange
  sectorFilter(value) {
    this.setdefault()
    let sectorfilters = this.state.sectorfilters;
    sectorfilters = value;
    this.setState({sectorfilters})
  }

  locationFilter(value) {
    this.setdefault()
    let locationfilters = this.state.locationfilters;
    locationfilters = value;
    this.setState({locationfilters});
  }

  showMore() {
    let showamount = this.state.showamount;
    showamount = 183;
    this.setState({showamount})
  }

  setdefault() {
    let showamount = this.state.showamount;
    showamount = 20;
    this.setState({showamount})
  }

  //TODO: startup, diversity, and sustainability to be combined
  startupFilter() {
    this.setdefault()
    let startupfilter = this.state.startupfilter;
    if (startupfilter === false) {
      startupfilter = true
    }
    else if (startupfilter === true) {
      startupfilter = false
    }
    this.setState({startupfilter})
  }

  diversityFilter() {
    this.setdefault()
    let diversityfilter = this.state.diversityfilter;
    let diversitysrc = this.state.diversitysrc;
    if (diversityfilter === false) {
      diversityfilter = true;
      diversitysrc = '/assets/diversity_selected.svg';
    } else if (diversityfilter === true) {
      diversityfilter = false;
      diversitysrc = '/assets/diversity_a.svg';
    }
    this.setState({diversityfilter})
    this.setState({diversitysrc})
  }

  sustainabilityFilter() {
    this.setdefault()
    let sustainabilityfilter = this.state.sustainabilityfilter;
    let sustainabilitysrc = this.state.sustainabilitysrc;
    if (sustainabilityfilter === false) {
      sustainabilityfilter = true;
      sustainabilitysrc = '/assets/sustainability_selected.svg';
    } else if (sustainabilityfilter === true) {
      sustainabilityfilter = false;
      sustainabilitysrc = '/assets/sustainability.svg';
    }
    this.setState({sustainabilityfilter})
    this.setState({sustainabilitysrc})
  }

  // groupFilter(group) {
  //     let groupfilter = this.state.groupfilter[value];
  //     if (groupfilter[group] === false) { groupfilter[group] = true }
  //     else if (groupfilter[group] === true) { groupfilter[group] = false }
  //     this.setState({ groupfilter[0] })
  // }

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
        (exhibitorItem) => {
          return (exhibitorItem.props.name.toLowerCase().startsWith(this.state.search.toLowerCase()));
        }
    );
    if (filteredCompanies.length < 1) {
      filteredCompanies = this.state.exhibitorList.filter(
          (exhibitorItem) => {
            return (exhibitorItem.props.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
          });
    }

    //Diversity filter
    if (this.state.diversityfilter === true) {
      filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
        return exhibitorItem.props.exhibitor.location_special == 'Diversity Room';
      });
    }

    //Sustainability filter
    if (this.state.sustainabilityfilter === true) {
      filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
        return exhibitorItem.props.exhibitor.location_special == 'Green Room';
      });
    }

    // Startup filter
    if (this.state.startupfilter === true) {
      filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
        return exhibitorItem.props.exhibitor.groups.name == 'startup';
      });
    }

    //Job type filter
    for (let filterkey in this.state.jobfilters) {
      if (this.state.jobfilters[filterkey]) {
        filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
          for (let jobtypeindex in exhibitorItem.props.exhibitor.employments) {
            if (exhibitorItem.props.exhibitor.employments[jobtypeindex].name == this.state.jobfilters[filterkey].value) {
              return true;
            }
          }
          return false;
        });
      }
    }

    //Sector type filter
    for (let filterkey in this.state.sectorfilters) {
      if (this.state.sectorfilters[filterkey]) {
        filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
          for (let sectorindex in exhibitorItem.props.exhibitor.industries) {
            if (exhibitorItem.props.exhibitor.industries[sectorindex].name == this.state.sectorfilters[filterkey].value) {
              return true;
            }
          }
          return false;
        });
      }
    }

    //Location type filter
    for (let filterkey in this.state.locationfilters) {
      if (this.state.locationfilters[filterkey]) {
        filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
          for (let locationindex in exhibitorItem.props.exhibitor.locations) {
            if (exhibitorItem.props.exhibitor.locations[locationindex].name == this.state.locationfilters[filterkey].value) {
              return true;
            }
          }
          return false;
        });
      }
    }

    let showall = filteredCompanies.length > this.state.showamount ? true : false;

    if (showExhibitors) {
      return (
          <div className="exhibitors">

            <EasterEgg keys={armada2018} timeout={7000}>
              <div className="armadaRainbow easterEggPosition"/>
            </EasterEgg>

						<h1>Exhibitors</h1>
						<p><span className="bold" >Sustainability & Diversity</span> form the core values at the heart of our organization. To highlight our core values, we have chosen to dedicate focus areas of the fair called Green Room and Diversity Room.</p>
            {this.state.showModal ? (this.displayExhibitor(exhibitorToDisplay)) : null}

            {/*TODO: remove blue box around special filters*/}
            <div className="filter-special">

              <input id="diversity" type="image" alt='diversity filter' src={this.state.diversitysrc} 
                     onClick={() => this.diversityFilter()}
                     //onMouseEnter={() => this.cssShine('purple')}
                     //onMouseLeave={() => this.cssShineOff()}
              />

              <input id="sustainability" type="image" alt='sustainability filter' src={this.state.sustainabilitysrc} 
                     onClick={() => this.sustainabilityFilter()}
                     //onMouseEnter={() => this.cssShine('green')}
                     //onMouseLeave={() => this.cssShineOff()}
              />

            </div>

            <div className="search-container">
              <input type="text"
                     placeholder="Search Exhibitors"
                     value={this.state.search}
                     onChange={this.updateSearch.bind(this)}
              />
            </div>
            <Select
                closeMenuOnSelect={false}
                isMulti
                isSearchable
                name="Job filter"
                placeholder="All Jobs"
                options={this.state.jobs}
                onChange={event => this.jobFilter(event)}
                className="basic-multi-select"
                classNamePrefix="select"
            />

            <Select
              closeMenuOnSelect={false}
              isMulti
              isSearchable
              name="Sector filter"
              placeholder="All Industries"
              options={this.state.sectors}
              onChange={event => this.sectorFilter(event)}
              className="basic-multi-select"
              classNamePrefix="select"
            />

            <Select
              closeMenuOnSelect={false}
              isMulti
              isSearchable
              name="Location filter"
              placeholder="All Locations"
              options={this.state.locations}
              onChange={event => this.locationFilter(event)}
              className="basic-multi-select"
              classNamePrefix="select"
            />
            
            {/* <div className="supercontainer">
              <p className="matching_link">Pssst! Find your perfect company by using Armada's new <Link className="matching_link_style" to="/matching">matching functionality!</Link></p>
            </div> */}


            {/* TODO: everything should be dynamic instead of hard-coded */}

            <div className="loading">
              {this.state.isLoading ? <Loading/> : null}
            </div>
            <div className="exhibitor-feed">
              {filteredCompanies.length && !this.state.isLoading ? filteredCompanies.splice(0, this.state.showamount) :
                  <div className="Noresultsfound">
                    {!this.state.isLoading ? <div><p className="noresultstext">
                      Sorry, we couldn't find any companies that match your search. Please look at our cat instead!
                    </p><Cat/></div> : null}
                  </div>
              }
            </div>
            {showall ?
                <div className="showmore-container">
                  <button className="showmorebutton" onClick={() => this.showMore()}>Show All</button>
                </div> : null}
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
if (global.window != undefined) {
  toExport = addUrlProps({urlPropsQueryConfig})(ExhibitorList);
} else {
  toExport = ExhibitorList;
}
export default toExport;

const ExhibitorItem = (props) => {
  let classname = props.exhibitor.sustainability == true ? " green" : "";
  classname += props.exhibitor.diversity == true ? " purple" : "";

  return (
      <div id={props.name} className={"exhibitor-box " + classname} onClick={() => props.showModal(props.exhibitor.name)}>
        <div className="image-container">
          <img src={ais + props.exhibitor.logo_squared}/>
        </div>
        <p> {props.exhibitor.name} </p>
        {props.exhibitor.location_special == "Diversity Room" ? <div className='corner-special'><img src='/assets/diversity-black-nolabel.png'/></div> : null}
        {props.exhibitor.location_special == "Green Room" ? <div className='corner-special'><img src='/assets/sustainability-black-nolabel.png'/></div> : null}
      </div>)
}

ExhibitorItem.propTypes = {
  name: PropTypes.string,
  exhibitor: PropTypes.object,
  showModal: PropTypes.func,
}
