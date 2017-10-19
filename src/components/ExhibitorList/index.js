import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
import "./exhibitorlist.scss";

import Modal from "../Modal";



const urlPropsQueryConfig = {
  exhibitorName: { type: UrlQueryParamTypes.string, queryParam: 'exhibitorName' },
};





class ExhibitorList extends React.Component {
    constructor(props) {
        super(props); // adopts parent qualities
        this.state = {
            exhibitors: [],  // json object
            showModal: false,
            exhibitorName: undefined
        };
    }

    componentDidMount() {  // only called when exhibitor page is created or updated.
        axios.get('https://ais.armada.nu/api/exhibitors')  // fetch data witt promise (then) and res(ult)
          .then( (res)  => {
            let exhibitors = res.data;  // create variable and store result within parameter data


            this.setState({ exhibitors });  // component saves its own data
            // Get from url path the GET params ?id=number, to know what event to display
            if (this.props.exhibitorName !== undefined ){
              this.setState({exhibitorName: this.props.exhibitorName, showModal:true, exhibitors});
          }
          });
    }

    showModal = (exhibitorName) => {
      this.setState({showModal: !this.state.showModal, exhibitorName});
      this.props.onChangeExhibitorName(exhibitorName);
    };

    displayExhibitor = (exhibitor) => {


      return (
        <Modal onClose={() => this.showModal(exhibitor.company)}>
        <div>
          <div className="modalimage">
            <img src={exhibitor.logo_url}/>
          </div>
            <div className="modalinfo">
              <h3>{exhibitor.company}</h3>
            </div>
          </div>
      </Modal>
    );
  }

    getExhibitorItem = (exhibitor) => {


        return (
            <div>
                <div className = "exhibitor-item" onClick={()=>this.showModal(exhibitor.company)}>
                    <div className = "image-section">
                        <img src = { exhibitor.logo_url }/>
                    </div>

                </div>

                <hr/>
            </div>
        );
    }


    render() {

        let exhibitorToDisplay = this.state.exhibitors.filter(exhibitor => exhibitor.company == this.state.exhibitorName)[0];

        return (


            <div className="exhibitors">
            {this.state.showModal ? (this.displayExhibitor(exhibitorToDisplay) ) : null}

                <div className="exhibitor-feed">

                  <h2> Exhibitors </h2>
                      { this.state.exhibitors.map(this.getExhibitorItem)}

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
