import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
import "./exhibitorlist.scss";

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

        };
    }

    componentDidMount() {  // only called when exhibitor page is created or updated.
        axios.get('https://ais.armada.nu/api/exhibitors')  // fetch data witt promise (then) and res(ult)
          .then( (res)  => {
            let exhibitors = res.data;  // create variable and store result within parameter data
            exhibitors.sort((a, b) => a.company.localeCompare(b.company));
            let exhibitorList = exhibitors.map((exhibitor) => <ExhibitorItem key={exhibitor.id} name={exhibitor.company} exhibitor={exhibitor} showModal={this.showModal}/>);

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

    showModal = (exhibitorName) => {
      this.setState({showModal: !this.state.showModal, exhibitorName});
      this.props.onChangeExhibitorName(exhibitorName);
    };

    displayExhibitor = (exhibitor) => {
      return (
        <Modal onClose={() => this.showModal(null)}>
            <div>
                <div className="modalimage-exhib">
                    <img src={exhibitor.logo_url}/>

                </div>
                <div className="modalinfo">
                    <h3>{exhibitor.company}</h3>
                    <div className='modal-property'>
                        <div className='icon_group'>
                            {/*<div className='icon'>
                                <img src='/assets/place.svg'/>
                            </div>
                            <div className='location'>
                                //{exhibitor.exhibitor_location}
                            </div>*/}
                              {exhibitor.diversity == true
                                  ? <img className='special' src='/assets/diversity.png'/> : null }
                              {exhibitor.sustainability == true
                                  ? <img className='special' src='/assets/sustainability.png'/> : null }
                              {/*<div className="map">*/}
                                  {/*<img src={exhibitor.map_location_url}/>*/}
                              {/*</div>*/}

                        </div>
                    </div>
                    <div className="description">
                      {exhibitor.about.split('\n').map( (paragraph) => <p> {paragraph} </p> )}
                      {/*<p>  {exhibitor.facts} </p>*/}
                    </div>
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

          // SAVVAS SEE YOUR CODE BELOW <3, you can thank me tomorrow :D OBS you use: jobfilters
          for(let filterkey in this.state.filters){
            if (this.state.jobfilters[filterkey] === true){
              filteredCompanies = filteredCompanies.filter((exhibitorItem)=>{
                for(let jobtype in exhibitorItem.props.exhibitor.job_types){
                  if (jobtype.name == filterkey) {
                    return true;
                  }
                }
                return false;
              });
          }
        }

            return (

            <div className = "exhibitors">
                {this.state.showModal ? (this.displayExhibitor(exhibitorToDisplay) ) : null}
                <h2> Exhibitors </h2>
                <div className = "filter-special">
                  <div onClick ={()=>this.specialFilter('all')}><img src='/assets/quality.png'/></div>
                  <div onClick ={()=>this.specialFilter('diversity')}><img src='/assets/diversity.png'/></div>
                  <div onClick ={()=>this.specialFilter('sustainability')}><img src='/assets/sustainability.png'/></div>
                </div>
                {/*<span class="input input--makiko">
        					<input class="input__field input__field--makiko" id="input-16" type="text"/>
        					<label class="input__label input__label--makiko" for="input-16">
        						<span class="input__label-content input__label-content--makiko">Search</span>
        					</label>
        				</span>*/}
                  <div className = "search-containter">
                    <input type = "text" placeholder="Search Exhibitor"
                      value={this.state.search}
                      onChange ={this.updateSearch.bind(this)}
                      />
                  </div>
                {/*<span className="input input--makiko">*/}
					{/*<input className="input__field input__field--makiko" type="text" id="input-16"*/}
                           {/*value={this.state.search}*/}
                           {/*onChange ={this.updateSearch.bind(this)}*/}
                    {/*/>*/}
					{/*<label className="input__label input__label--makiko">*/}
						{/*<span className="input__label-content input__label-content--makiko">Search</span>*/}
					{/*</label>*/}
				{/*</span>*/}

                      {/*<div className = "checkbox-filtering">*/}
                          {/*<label>*/}
                              {/*<input type="checkbox"   /> Trainee*/}
                          {/*</label>*/}
                          {/*<label>*/}
                              {/*<input type="checkbox"  /> Msc Thesis*/}
                          {/*</label>*/}
                          {/*<label>*/}
                              {/*<input type="checkbox"   /> Internship*/}
                          {/*</label>*/}
                          {/*<label>*/}
                              {/*<input type="checkbox"   /> Summer Job*/}
                          {/*</label>*/}
                          {/*<label>*/}
                              {/*<input type="checkbox"   /> Part-time job*/}
                          {/*</label>*/}
                          {/*<label>*/}
                              {/*<input type="checkbox" r/> Full-time job*/}
                          {/*</label>*/}
                      {/*</div>*/}
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
        classname += props.exhibitor.diversity == true ? " red": "";

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
