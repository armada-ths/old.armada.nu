import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
import {ReactPageClick} from 'react-page-click';
import "./exhibitorlist.scss";

const urlPropsQueryConfig = {
  exhibitorName: { type: UrlQueryParamTypes.string, queryParam: 'exhibitorName' },
};



const Modal = ({onClose, ...rest}) => (
      <div className='popupcontainer'>
        <div className="shade" onClick={onClose} >
          <div className='shadecontent'>
            <p className='cross'>˟</p>
          </div>
        </div>
        <ReactPageClick notify={()=> {return}}>
          <div className="popup">
            <div className="modalcontent" {...rest} />
          </div>
        </ReactPageClick>
      </div>
    );

Modal.propTypes = {
      onClose: () => {} //function doing nothing
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
                <div className = "event-item" onClick={()=>this.showModal(exhibitor.company)}>
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


            <div className="events">
            {this.state.showModal ? (this.displayExhibitor(exhibitorToDisplay) ) : null}

                <div className="events-feed">
                  <div className='comingEvents'>
                  <h2> Upcoming Events </h2>
                      { this.state.exhibitors.map(this.getExhibitorItem)}

                  </div>



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
