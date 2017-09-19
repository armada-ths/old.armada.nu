import React from "react";
//import axios from "axios";
//
import './recruitment.scss';

class Recruitment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            roles: []
        };
    }

    componentDidMount() {
        /*
        axios.get('https://ais.armada.nu/api/recruitment') // This API node does not yet exist (September 2017)
          .then( (res)  => {
            const partners = res.data;
            this.setState({ partners });
          });
          */
    }


    render() {
            /** OBS, a tag needs to be outside button for the link to work in firefox **/
        return (<div className="application-section"> 
            <a href="https://ais.armada.nu/recruitment"> <button> APPLY HERE
            </button>
            </a>
        </div>);
    }

}

export default Recruitment;
