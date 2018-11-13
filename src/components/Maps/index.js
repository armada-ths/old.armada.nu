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
			locations = locations.filter(location => location.has_map === true);
			this.setState({locations});


			// for(location in locations) {
			// 	axios.get('https://ais.armada.nu/api/locations/' + location.id)
			// 	.then((res2)=>{
			// 		this.setState({(prevState) =>
			// 			({imageURLs: [prevState.imageURLs, res2.data.map.url]})
			// 		});
			// 	});
			// }
		});
	}

	render() {
		return (
			<ul>
				<li>hello</li>
			</ul>
		)
	}
}

export default Maps;
