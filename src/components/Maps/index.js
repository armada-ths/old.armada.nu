 import React from "react";
// import axios from "axios";
 import "./maps.scss";
 import Modal from "../Modal";
 import Loading from '../Loading';
 import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
 import PropTypes from "prop-types";

const urlPropsQueryConfig = {
  mapId: { type: UrlQueryParamTypes.number, queryParam: 'mapId' },
};

class Maps extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			locations: [{id: 1, name: "KTH-B & Entre", url: "/assets/images/KTHB_entre.png", listurl: "/assets/images/KTHB_entre-companies.png"} ,
																{id: 2, name: "Nymble", url: "/assets/images/nymble.png", listurl: "/assets/images/nymble-companies.png"}],
			showModal: false,
			mapId: undefined,
			isLoading: false,
		};
	}

	componentDidMount() {

			if (this.props.mapId !== undefined ){
				this.setState({mapId: this.props.mapId, showModal:true});
			}
	}

	showModal = (mapId) => {
		this.setState({showModal: !this.state.showModal, mapId});
		this.props.onChangeMapId(mapId);
	};

	displayMap = (map) => {
		return (
		<Modal onClose={() => this.showModal(null)}>
			<div>
				<img src={map.url} />
				<img src={map.listurl} />
			</div>
			<h3>{map.name}</h3>
		</Modal>
	);
	}

	render() {
		let mapToDisplay = this.state.locations.filter(location => location.id == this.state.mapId)[0];

		return (
			<div>
			<div className="center">
				<h1 className="helmet">Maps</h1>
				<h4 className="licorice space"><a href="https://maps.armada.nu/" target="_blank">View Interactive Maps</a></h4>
				<h4 className="space">Green room:</h4>
				<p>Gamla matsalen, Nymble </p>
				<h4 className="diversity space">Diversity room:</h4>
				<p>Puben, Nymble</p>
			</div>
			<div className="maps">
			{this.state.showModal ? (this.displayMap(mapToDisplay) ) : null}
			{this.state.isLoading ? (<Loading />) : (
				<div className="map-grid">
					{this.state.locations.map(location => (
						<div className="map-item" key={location.id} onClick={() => this.showModal(location.id)}>
							<img className="image-section" src={location.url} alt={location.name + ' map'}/>

						</div>
					))}
				</div>
			)}
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
