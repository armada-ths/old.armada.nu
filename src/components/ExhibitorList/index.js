import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
import "./exhibitorlist.scss";
import Helmet from "react-helmet";
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
        };
    }

    componentDidMount() {  // only called when exhibitor page is created or updated.
        axios.get('https://ais.armada.nu/api/exhibitors')  // fetch data witt promise (then) and res(ult)
          .then( (res)  => {
            let exhibitors = res.data;  // create variable and store result within parameter data
            exhibitors.sort((a, b) => a.company.localeCompare(b.company));
            let exhibitorList = exhibitors.map((exhibitor) =>
                <ExhibitorItem name={exhibitor.company} exhibitor={exhibitor} showModal={this.showModal}/>);

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

    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked
        });
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

    render() {
      let exhibitorToDisplay = this.state.exhibitors.filter(exhibitor => exhibitor.company == this.state.exhibitorName)[0];
      let filteredCompanies = this.state.exhibitorList.filter(
        (exhibitorItem) => {return (exhibitorItem.props.name.toLowerCase().startsWith(this.state.search.toLowerCase()) );}
        );

      if (filteredCompanies.length < 1 ) {
        filteredCompanies = this.state.exhibitorList.filter(
        (exhibitorItem) => {
          return (exhibitorItem.props.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
          })
        }


            return (

            <div className = "exhibitors">
                {this.state.showModal ? (this.displayExhibitor(exhibitorToDisplay) ) : null}
                <h2> Exhibitors </h2>
                <div className = "filter-special">
                    <img src='/assets/diversity.png'/>
                    <img src='/assets/sustainability.png'/>
                </div>

                  <div className = "search-containter">
                    <input type = "text" placeholder="Search Exhibitor"
                      value={this.state.search}
                      onChange ={this.updateSearch.bind(this)}
                      />
                  </div>

                      <div className = "checkbox-filtering">
                          <label>
                              <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} /> Trainee
                          </label>
                          <label>
                              <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} /> Msc Thesis
                          </label>
                          <label>
                              <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} /> Internship
                          </label>
                          <label>
                              <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} /> Summer Job
                          </label>
                          <label>
                              <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} /> Part-time job
                          </label>
                          <label>
                              <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} /> Full-time job
                          </label>
                      </div>
                <div className = "loading">
                  {this.state.isLoading ? <Loading/> :null}
                </div>
                <div className="exhibitor-feed">
                    {filteredCompanies}
                    <Helmet title={ "Exhibitors" }/>
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

  return (<div id={props.name} className = {"exhibitor-box " + classname} onClick={()=> props.showModal(props.exhibitor.company)}>

              <div className = "image-container">
                <img src = {props.exhibitor.logo_url}/>
              </div>
              <p> {props.exhibitor.company} </p>
              </div>)
}

ExhibitorItem.propTypes = {
    name: PropTypes.string,
    exhibitor: PropTypes.object,
    showModal: PropTypes.func,
}
