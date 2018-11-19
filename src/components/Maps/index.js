 import React from "react";
// import axios from "axios";
 import "./maps.scss";
// import Modal from "../Modal";
// import Loading from '../Loading';
// import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
// import PropTypes from "prop-types";
//
// const urlPropsQueryConfig = {
//   mapId: { type: UrlQueryParamTypes.number, queryParam: 'mapId' },
// };
//
// class Maps extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			locations: [],
// 			detailedLocations: [],
// 			showModal: false,
// 			mapId: undefined,
// 			isLoading: true,
// 			showMaps: false,
// 		};
// 	}
//
// 	componentDidMount() {
// 		axios.get('https://ais.armada.nu/api/exhibitors/locations')
// 		.then(res => {
// 			let locations = res.data;
// 			locations = locations
// 			.filter(location => location.has_map === true);
//
// 			locations.map(location => {
// 				axios.get('https://ais.armada.nu/api/exhibitors/locations/' + location.id)
// 				.then(res2 => {
// 					let detailedLocation= res2.data;
// 					this.setState({detailedLocations: [...this.state.detailedLocations, detailedLocation]});
// 				});
// 			});
//
// 			this.setState({locations, isLoading: false});
//
// 			if (this.props.mapId !== undefined ){
// 				this.setState({mapId: this.props.mapId, showModal:true});
// 			}
//
// 		});
// 	}
//
// 	showModal = (mapId) => {
// 		this.setState({showModal: !this.state.showModal, mapId});
// 		this.props.onChangeMapId(mapId);
// 	};
//
// 	displayMap = (map) => {
// 		return (
// 		<Modal onClose={() => this.showModal(null)}>
// 			<div>
// 				<img src={'https://ais.armada.nu' + map.map.url} />
// 			</div>
// 			<h3>{map.name}</h3>
// 		</Modal>
// 	);
// 	}
//
// 	render() {
// 		let mapToDisplay = this.state.detailedLocations.filter(location => location.id == this.state.mapId)[0];
//
// 		return (
// 			<div>
// 			<h4>Green room location: Gamla matsalen, Nymble</h4>
// 			<h4>Diversity room location: Puben, Nymble</h4>
// 			{this.state.showMaps ?
// 			<div className="maps">
// 			{this.state.showModal ? (this.displayMap(mapToDisplay) ) : null}
// 			{this.state.isLoading ? (<Loading />) : (
// 				<div className="map-grid">
// 					{this.state.detailedLocations.map(location => (
// 						<div className="map-item" key={location.id} onClick={() => this.showModal(location.id)}>
// 							<img className="image-section" src={'https://ais.armada.nu/' + location.map.url} />
// 							<h3 className="name">{location.parent.name + ' - ' + location.name}</h3>
// 						</div>
// 					))}
// 				</div>
// 			)}
// 			</div>
// 		: <h4>Maps coming soon!</h4>}
// 		</div>
// 		)
// 	}
// }
//
//
// Maps.propTypes = {
//     mapId: PropTypes.number,
//     onChangeMapId: PropTypes.func,
// }
//
// let toExport;
// if(global.window!=undefined){
//   toExport = addUrlProps({urlPropsQueryConfig})(Maps);
// }else{
//   toExport=Maps;
// }
// export default toExport;


//TODO: NOT PERMANENT SOLUTION FIX PLEASE
const Maps = () => {
	return (
	<div className="center">
		<h1 className="helmet">Maps</h1>
		<h3 className="licorice"><a href="https://maps.armada.nu/" target="_blank">View Fair Maps</a></h3>
		<h4>Green room:</h4>
		<p>Gamla matsalen, Nymble </p>
		<h4 className="diversity">Diversity room:</h4>
		<p>Puben, Nymble</p>
	</div>
)
}

export default Maps
