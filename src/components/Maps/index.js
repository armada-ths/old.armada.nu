import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
import "./maps.scss";
import Modal from "../Modal";

const urlPropsQueryConfig = {
  mapId: { type: UrlQueryParamTypes.number, queryParam: 'mapId' },
};


class Maps extends React.Component {
    constructor(props) {
        super(props); // adopts parent qualities
        this.state = {
						fairlocations: ["Biblotekshall - höger", "Biblotekshall - vänster", "Biblotekshall - längst in",
					"Biblotek - entre vänster", "Nya Matsalen", "Gamla Matsalen", "Student Lounge/Korridor",
					"Ångsdomen", "Tidningsrummet", "Hyllan", "Kårbokhandeln"],
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
              this.setState({mapId: this.props.mapId, showModal:true});
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
              <img src={"https://hatrabbits.com/wp-content/uploads/2016/12/rare-combinaties.jpg"}/>
            </div>

            <div className="modalinfo">
              <h2>{this.state.fairlocations[map]}</h2>
							<ul>
								<li>{/*TODO: all booths at this location and companies*/}</li>
							</ul>
            </div>
          </div>
        </Modal>
      );
    }

    getMapItem = (locname) => {
      return (
          <div className = "map-item">
              <div className = "image-section" onClick={this.showModal(this.state.fairlocations.indexOf(locname))}>
                  <img src = {"https://hatrabbits.com/wp-content/uploads/2016/12/rare-combinaties.jpg"}/>
              </div>
                <h3 className ="name" >{locname}</h3>
          </div>
      );
    }


    render() {

				let fl = this.state.fairlocations;

				let mapToDisplay = this.state.fairlocations.filter(map => this.state.fairlocations.indexOf(map) == this.state.mapId)[0];


        return (
            <div className="maps">
              {this.state.showModal ? (this.displayMap(mapToDisplay) ) : null}

							<div className="maps-feed">
								{fl.length > 0 ? (fl.map(this.getMapItem)) : (<p>Stay tuned!</p>)}
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
