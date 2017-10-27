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
            showModal: false,
            exhibitorName: undefined,
            isLoading: true,
            search: ''
        };
    }

    componentDidMount() {  // only called when exhibitor page is created or updated.
        axios.get('https://ais.armada.nu/api/exhibitors')  // fetch data witt promise (then) and res(ult)
          .then( (res)  => {
            let exhibitors = res.data;  // create variable and store result within parameter data


            this.setState({ exhibitors,  isLoading:false, });  // component saves its own data
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
        <Modal onClose={() => this.showModal(exhibitor.company)}>
            <div>
                <div className="modalimage2">
                    <img src={exhibitor.logo_url}/>
                </div>
                <div className="modalinfo">
                    <h3>{exhibitor.company}</h3>

                    <div className='modal-event-property'>
                        <div className='icon_group'>
                            <img className='icon' src='/assets/place.svg'/>
                            <p>
                                {exhibitor.exhibitor_location == "Nymble > Plan 2 > Gamla matsalen" ? <img className='icon' src='/assets/diversity.png'/> : null }
                                {exhibitor.exhibitor_location == "Nymble > Plan 2 > Nya matsalen" ? <img className='icon' src='/assets/sustainability.png'/> : null }
                                {exhibitor.exhibitor_location}
                            </p>

                        </div>
                    </div>
                </div>
                    <div className="description2">
                      {exhibitor.about.split('\n').map( (paragraph) => <p> {paragraph} </p> )}

                      {/*<p>  {exhibitor.facts} </p>*/}

                    </div>
                </div>

      </Modal>
    );
  }

    getExhibitorItem = (exhibitor) => {

        return (
            <div className = "exhibitor-box" onClick={()=>this.showModal(exhibitor.company)}>
                <div className = "image-container">
                  <img src = { exhibitor.logo_url }/>
                </div>
                <p>  {exhibitor.company} </p>
            </div>
        );
    }

    render() {

      let exhibitorToDisplay = this.state.exhibitors.filter(exhibitor => exhibitor.company == this.state.exhibitorName)[0];
      {this.state.exhibitors.sort((a, b) => a.company.localeCompare(b.company))}

      let filteredCompanies = this.state.exhibitors.filter(
        (exhibitor) => {
          return exhibitor.company.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      );

            return (
            <div className = "exhibitors">
                {this.state.showModal ? (this.displayExhibitor(exhibitorToDisplay) ) : null}
                <h2> Exhibitors </h2>
                  <div className = "search-containter">
                    <input type = "text" placeholder="Search Company"
                      value={this.state.search}
                      onChange ={this.updateSearch.bind(this)}
                      />
                  </div>
                <div className="exhibitor-feed">
                    {this.state.isLoading ? <Loading/> :null}
                    {filteredCompanies.map(this.getExhibitorItem)}
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
