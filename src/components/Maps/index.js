import React, {Component} from "react";
import axios from "axios";
import "./maps.scss";
import Modal from "../Modal";
import Loading from '../Loading';

class Maps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locations: [],
			detailedLocations: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		axios.get('https://ais.armada.nu/api/exhibitors/locations')
		.then(res => {
			let locations = res.data;
			locations = locations
			.filter(location => location.has_map === true);

			locations.map(location => {
				axios.get('https://ais.armada.nu/api/exhibitors/locations/' + location.id)
				.then(res2 => {
					let detailedLocation= res2.data;
					this.setState({detailedLocations: [...this.state.detailedLocations, detailedLocation]});
				});
			});

			this.setState({locations, isLoading: false});
		});
	}

	render() {
		return (
			<div className="maps">
			{this.state.isLoading ? (<Loading />) : (
				<div className="map-grid">
					{this.state.detailedLocations.map(location => (
						<div className="map-item" key={location.id}>
							<img className="image-section" src={'https://ais.armada.nu/' + location.map.url} />
							<h3 className="name">{location.parent.name + ' - ' + location.name}</h3>
						</div>
					))}
				</div>
			)}
			</div>
		)
	}
}

export default Maps;
