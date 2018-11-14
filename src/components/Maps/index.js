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
			<div>
			{this.state.isLoading ? (<Loading />) : (
				<div>
					{this.state.detailedLocations.map(loc => (
						<Map location={location} />
					))}
				</div>
			)}
			</div>
		)
	}
}

function Map(props) {
	return (
		<div key={this.props.location.id}>
			<img src={'https://ais.armada.nu/' + this.props.location.map.url} />
			<h2>{this.props.location.parent.name + ' - ' + this.props.location.name}</h2>
		</div>
	);
}

export default Maps;
