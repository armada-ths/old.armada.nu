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
			imageURLs: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		axios.get('https://ais.armada.nu/api/exhibitors/locations')
		.then(res => {
			let locations = res.data;
			locations = locations
			.filter(location => location.has_map === true)
			.sort((a,b) => a.id < b.id);
			this.setState({locations, isLoading: false});
		});

		for(let i=4;i<6;i++) {
			axios.get('https://ais.armada.nu/api/exhibitors/locations/' + i)
			.then(res => {
				this.setState({
					imageURLs: [...this.state.imageURLs, res.data.map.url]
				});
			});
		}
	}

	render() {
		return (
			<div>
			{this.state.isLoading ? (<Loading />) : (
				<ul>
					{this.state.locations.map(location => (<li key={location.id}>{location.name}</li>))}
				</ul>
			)}
			</div>
		)
	}
}

export default Maps;
