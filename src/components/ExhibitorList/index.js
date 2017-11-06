import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
import "./exhibitorlist.scss";
import Helmet from "react-helmet"
import Modal from "../Modal";
import Loading from "../Loading"


const urlPropsQueryConfig = {
  exhibitorName: { type: UrlQueryParamTypes.string, queryParam: 'exhibitorName' },
};

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
            filters: {},
            shine: '',
        };
    }

    componentDidMount() {  // only called when exhibitor page is created or updated.
        axios.get('https://ais.armada.nu/api/exhibitors')  // fetch data witt promise (then) and res(ult)
          .then( (res)  => {
            let exhibitors = res.data;  // create variable and store result within parameter data
            exhibitors.sort((a, b) => a.company.localeCompare(b.company));
            let exhibitorList = exhibitors.map((exhibitor) => <ExhibitorItem key={exhibitor.id} name={exhibitor.company}
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
        <h3>Job Oportunities</h3>
        {exhibitor.job_types.map((jobtype) => <div className="job-section"><li> {jobtype.name} </li></div>)}
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
                    <img src={exhibitor.logo_url}/>
                </div>

                <div className="modalinfo">
                    <div className='icon_group'>
                          {exhibitor.diversity == true
                              ? <img className='special' src='/assets/diversity.png'/> : null }
                          {exhibitor.sustainability == true
                              ? <img className='special' src='/assets/sustainability.png'/> : null }
                    </div>

                    <div className="description-container">
                      <h3>{exhibitor.company}</h3>
                      <div className="description">
                        {exhibitor.about.split('\n').map( (paragraph) => <p> {paragraph} </p> )}
                      </div>
                    </div>
                      {exhibitor.job_types.length > 0 ?  this.getJobContainer(exhibitor) : null}
                    <div className='location-container'>
                    <h3>Find us at the fair</h3>
                      <div className='location'>
                        <div className='icon'><img src='/assets/place.svg'/></div>
                        <div className="position">{exhibitor.exhibitor_location}</div>
                      </div>
                      {exhibitor.map_location_url.includes('missing') == false ? <div className="map"><img src={exhibitor.map_location_url}/></div> : null}
                    </div>
                </div>

      </Modal>
    );
  }

    specialFilter(value){
      let filters = this.state.filters;
      filters['all']= false;
      filters['diversity']= false;
      filters['sustainability']= false;
      filters[value]= true;
      this.setState({filters})
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

    render() {

      let exhibitorToDisplay = this.state.exhibitors.filter(exhibitor => exhibitor.company == this.state.exhibitorName)[0];
      let filteredCompanies = this.state.exhibitorList.filter(
        (exhibitorItem) => {return (exhibitorItem.props.name.toLowerCase().startsWith(this.state.search.toLowerCase()) );}
        );

      if (filteredCompanies.length < 1 ) {
        filteredCompanies = this.state.exhibitorList.filter(
        (exhibitorItem) => {
          return (exhibitorItem.props.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
          });
        }

        if(this.state.filters['all'] === false){
          if (this.state.filters['diversity'] === true){
            filteredCompanies = filteredCompanies.filter((exhibitorItem)=>{
              return (exhibitorItem.props.exhibitor.diversity);
            });
          }
          if (this.state.filters['sustainability'] === true){
            filteredCompanies = filteredCompanies.filter((exhibitorItem)=>{
              return (exhibitorItem.props.exhibitor.sustainability);
            });
          }
        }

        //Loop through the properties of filters object:
          for(let filterkey in this.state.jobfilters) {
              if (this.state.jobfilters[filterkey] == true) {
                  filteredCompanies = filteredCompanies.filter((exhibitorItem) => {
                      for (let jobtypeindex in exhibitorItem.props.exhibitor.job_types) {
                          if (exhibitorItem.props.exhibitor.job_types[jobtypeindex].name == filterkey) {
                              return true;
                          }
                      }
                      return false;
                  });
              }
          }

            return (

            <div className = "exhibitors">
                <Helmet
                    title={ "Exhibitors" }
                />
                {this.state.showModal ? (this.displayExhibitor(exhibitorToDisplay) ) : null}
                <div className = "filter-special">
                  <div id="quality" onMouseEnter = {() => this.cssShine('exhibitor-box')} onMouseLeave = {() => this.cssShineOff()} onClick ={()=>this.specialFilter('all')}><img src='/assets/quality.svg'/></div>
                  <div id="diversity" onMouseEnter = {() => this.cssShine('purple')} onMouseLeave = {() => this.cssShineOff()}onClick ={()=>this.specialFilter('diversity')}><img src='/assets/diversity_a.svg'/></div>
                  <div id="sustainability" onMouseEnter = {() => this.cssShine('green')} onMouseLeave = {() => this.cssShineOff()}onClick ={()=>this.specialFilter('sustainability')}><img src='/assets/sustainability.svg'/></div>
                </div>
                  <div className = "search-containter">
                    <input type = "text" placeholder="Search Exhibitor"
                      value={this.state.search}
                      onChange ={this.updateSearch.bind(this)}
                      />
                  </div>
                      <div className = "checkbox-filtering">
                          <div className = "checkbox1">
                              <input type="checkbox" onClick ={()=>this.jobFilter("Trainee Employment")} /> Internship
                          </div>
                          <div className = "checkbox2">
                              <input type="checkbox" onClick ={()=>this.jobFilter("Master's Thesis")}/> Master Thesis
                          </div>
                          <div className = "checkbox3">
                              <input type="checkbox" onClick ={()=>this.jobFilter("Summer Jobs")}/> Summer Job
                          </div>
                           <div className = "checkbox4">
                              <input type="checkbox" onClick ={()=>this.jobFilter("Part-time Jobs")}  /> Part-time job
                           </div>
                      </div>

                <div className = "loading">
                  {this.state.isLoading ? <Loading/> :null}
                </div>
                <div className="exhibitor-feed">
                    {filteredCompanies}
                </div>
            </div>
            )
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
    <div id={props.name} className = {"exhibitor-box " + classname} onClick={()=> props.showModal(props.exhibitor.company)}>
      <div className = "image-container">
        <img src = {props.exhibitor.logo_url}/>
      </div>
      <p> {props.exhibitor.company} </p>
      {props.exhibitor.diversity == true
          ? <div className='corner-special'><img  src='/assets/diversity.png'/></div>: null }
      {props.exhibitor.sustainability == true
          ? <div className='corner-special'><img src='/assets/sustainability.png'/></div> : null }
    </div>)
}

ExhibitorItem.propTypes = {
    name: PropTypes.string,
    exhibitor: PropTypes.object,
    showModal: PropTypes.func,
}
