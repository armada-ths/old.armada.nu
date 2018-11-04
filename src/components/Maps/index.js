import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
import "./maps.scss";
import Modal from "../Modal";

const urlPropsQueryConfig = {
  mapId: { type: UrlQueryParamTypes.number, queryParam: 'mapId' },
};

const fairlocations = ["Biblotekshall - höger", "Biblotekshall - vänster", "Biblotekshall - längst in", 
"Biblotek - entre vänster", "Nya Matsalen", "Gamla Matsalen", "Student Lounge/Korridor",
"Ångsdomen", "Tidningsrummet", "Hyllan", "Kårbokhandeln"]


class Maps extends React.Component {
    constructor(props) {
        super(props); // adopts parent qualities
        this.state = {
            maps: [],  // json object
            showModal: false,
            mapId: undefined
        };
    }

    componentDidMount() {  // only called when mappage is created or updated.
        axios.get('https://ais.armada.nu/api/locations')  // fetch data witt promise (then) and res(ult)
          .then( (res)  => {
            let maps = res.data;  // create variable and store result within parameter data

            this.setState({ maps });  // component saves its own data
            // Get from url path the GET params ?id=number, to know what map to display
            if (this.props.mapId !== undefined ){
              this.setState({mapId: this.props.mapId, showModal:true, maps});
          }
          });
    }

    showModal = (mapId) => {
      this.setState({showModal: !this.state.showModal, mapId});
      this.props.onChangeMapId(mapId);
    };

    displayMap = (map) => {
      return (
        <Modal onClose={() => this.showModal(null)}>
          <div>
            <div className="modalimage-map">
              <img src={map.image_url}/>
            </div>

            <div className="modalinfo">
              <h2>{map.name}</h2>
              <div className='modal-property-map'>
                <div className='icon-group'>
                  <img className='icon' src='/assets/place.svg'/>
                  <p> {map.location}</p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      );
    }

    getMapItem = (map) => {
      return (
        <div>
          <div className = "map-item" onClick={()=>this.showModal(map.id)}>
              <div className = "image-section">
                  <img src = { map.image_url }/>
              </div>

              <div className = "details-section">
                <h3 className ="name" >{map.name} </h3>

                <div className='map-property'>
                    <img className='icon' src='/assets/place.svg'/>
                    <p> {map.location}</p>
                </div>
              </div>
          </div>

          <hr/>
        </div>
      );
    }


    render() {
        let maps = this.state.maps;

				if (this.state.mapId != undefined) {
        	let modalMap = this.state.maps.filter(map => map.id == this.state.mapId)[0];
				}

        return (
            <div className="maps">
              {this.state.showModal ? (this.displayMap(modalMap) ) : null}

              <div className="maps-feed">
                {maps.length > 0 ? (maps.map(this.getMapItem)) : (<p>Stay tuned!</p>)}
              </div>

            </div>
        )
    }
}

Maps.propTypes = {
    mapId: PropTypes.number,
    onChangeMapId: PropTypes.func,
}

let toExport;
if(global.window!=undefined){
  toExport = addUrlProps({urlPropsQueryConfig})(Maps);
}else{
  toExport=Maps;
}
export default toExport;
