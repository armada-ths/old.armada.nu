import React from "react";
import axios from "axios";
import "./maps.scss";
import Modal from "../Modal";

class Maps extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			locations: [],
			imageURLs: [],
		};
	}


	componentDidMount() {
		axios.get('https://ais.armada.nu/api/exhibitors/locations')
		.then(res => {
			let locations = res.data;
			locations = locations
			.filter(location => location.has_map === true)
			.sort((a,b) => a.id < b.id);
			this.setState({locations});
		});

		for(let i=4;i<6;i++) {
			axios.get('https://ais.armada.nu/api/exhibitors/locations/' + i)
			.then(res => {
				this.setState({
					imageURLs: [...this.state.imageURLs, res.data.map.url]
				});
			});
		}

		// this.state.locations.map(location => (
		// 	axios.get('https://ais.armada.nu/api/exhibitors/locations/' + location.id)
		// 	.then(res2 =>{
		// 		this.setState({
		// 			imageURLs: [...this.state.imageURLs, res2.data.map.url]
		// 		})
		// 	})
		// ));
	}

	render() {
		return (
			<ul>
				{this.state.locations.map(location => (<li key={location.id}>{location.name}</li>))}
			</ul>
		)
	}
}

export default Maps;
