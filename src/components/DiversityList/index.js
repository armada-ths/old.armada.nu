import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
import "./index.scss";
import Modal from "../Modal";
import Loading from "../Loading"


const urlPropsQueryConfig = {
  exhibitorName: {type: UrlQueryParamTypes.string, queryParam: 'exhibitorName'},
};

//base of server adress
const ais = 'https://ais.armada.nu/';

class DiversityList extends React.Component {
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
      location: "All",
      sector: "All",
      locations: ['Sweden', 'Europe', 'Asia', 'Oceania', 'North America', 'South America', 'Africa'], //TODO: fill dynamically from api {locations + sector}
      sectors: ['Retail', 'Graphic Productions', 'Recruitment', 'Architecture', 'Investment', 'Environmental Sector',
        'Pedagogy', 'Web Development', 'Solid Mechanics', 'Simulation Technology', 'Pharmacy', 'Nuclear Power',
        'Fluid Mechanics', 'Wood-Processing Industry', 'Medical Technology', 'Media Technology', 'Marine Systems',
        'Manufacturing Industry', 'Management Consulting', 'Management', 'Insurance', 'Finance & Consultancy', 'Construction',
        'Aerospace', 'Telecommunication', 'Electronics', 'Material Development', 'Industry', 'Energy Technology', 'Research',
        'Systems Development', 'Property & Infrastructure', 'Computer Science & IT', 'Technical Consulting', 'Product Development',
        'Interaction Design', 'Industry Design'],
      jobs: [{value: 'Full time job', label: 'Full Time Job'},
        {value: 'Part time job', label: 'Part Time Job'},
        {value: 'Summer job', label: 'Summer Job'},
        {value: 'Internship', label: 'Internship'},
        {value: 'Trainee', label: 'Trainee'},
        {value: 'Master thesis', label: 'Master Thesis'},
        {value: 'Bachelor thesis', label: 'Bachelor Thesis'}],
      showamount: 20,
    };
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


  showModal = (exhibitorName) => {
    this.setState({showModal: !this.state.showModal, exhibitorName});
    this.props.onChangeExhibitorName(exhibitorName);
  };

  showMore() {
    let showamount = this.state.showamount;
    showamount = 183;
    this.setState({showamount})
  }

  displayExhibitor = (exhibitor) => {
    //TODO: add more data to modal. locations etc, change how it's displayed
    return (
        <Modal onClose={() => this.showModal(null)}>
          <div className="modalimage-exhib">
            <img src={ais + exhibitor.logo_squared} alt={exhibitor.name + " logo"}/>
          </div>
        </Modal>
    );
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
        if (window.location.href.includes('diversity')) {
          filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
            return exhibitorItem.props.exhibitor.location_special == 'Diversity Room';
          });
        }
    
        //Sustainability filter
        if (window.location.href.includes('sustainability')) {
          filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
            return exhibitorItem.props.exhibitor.location_special == 'Green Room';
          });
        }

    let showall = filteredCompanies.length > this.state.showamount ? true : false;

    if (showExhibitors) {
      return (
          <div className="exhibitors">
						<h1>Companies Working With This Core Value</h1>
            {this.state.showModal ? (this.displayExhibitor(exhibitorToDisplay)) : null}
            <div className="loading">
              {this.state.isLoading ? <Loading/> : null}
            </div>
            <div className="exhibitor-feed">
              {filteredCompanies.length && !this.state.isLoading ? filteredCompanies.splice(0, this.state.showamount) :
                  <div className="Noresultsfound">
                    {!this.state.isLoading ? <div><p className="noresultstext">
                      Sorry, we couldn't find any companies at the moment!
                    </p></div> : null}
                  </div>
              }
              {showall ?
                <div className="showmore-container">
                  <button className="showmorebutton" onClick={() => this.showMore()}>Show All</button>
                </div> : null}
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

DiversityList.propTypes = {
  exhibitorName: PropTypes.string,
  onChangeExhibitorName: PropTypes.func,
}

let toExport;
if (global.window != undefined) {
  toExport = addUrlProps({urlPropsQueryConfig})(DiversityList);
} else {
  toExport = DiversityList;
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
        {props.exhibitor.diversity == true
            ? <div className='corner-special'><img src='/assets/diversity_a.svg'/></div> : null}
        {props.exhibitor.sustainability == true
            ? <div className='corner-special'><img src='/assets/sustainability.svg'/></div> : null}
      </div>)
}

ExhibitorItem.propTypes = {
  name: PropTypes.string,
  exhibitor: PropTypes.object,
  showModal: PropTypes.func,
}
