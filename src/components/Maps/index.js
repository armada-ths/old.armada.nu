 import React from "react";
// import axios from "axios";
 import "./maps.scss";
 import Modal from "../Modal";
 //import Loading from '../Loading';
 import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
 import PropTypes from "prop-types";

const urlPropsQueryConfig = {
  mapId: { type: UrlQueryParamTypes.number, queryParam: 'mapId' },
};

class Maps extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			mapId: undefined,
			isLoading: false,
			mobile: true
		};
	}

	componentDidMount() {

		if (this.props.mapId !== undefined ){
			this.setState({mapId: this.props.mapId, showModal:true});
		}
		if(window.innerWidth < 850) {
			this.setState({
				mobile: true
			});
		} else {
			this.setState({
				mobile: false
			});
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

		//let specialrooms = <div><h4 className="space">Green room</h4><p>Gamla matsalen, Nymble </p><h4 className="diversity space">Diversity room</h4><p>Puben, Nymble</p></div>;

		return (
			<div>
			<div className="center">
				<h1 className="helmet">Maps</h1>
				<h3 className="vyer-link"><a href="https://app.vyer.com/site/siAHJfkxortC8DtAftEkfeNa?story=syLyAScxudoXAnsGW12XTuLj" target="_blank">View Interactive Map <br /> (in separate tab)</a></h3>
				{!this.state.mobile ? 
					<div className="map-grid"><iframe className="vyer-map" src="https://app.vyer.com/site/siAHJfkxortC8DtAftEkfeNa?story=syLyAScxudoXAnsGW12XTuLj"></iframe></div>
					: null}
				
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
