import React from 'react';
import axios from 'axios';
import './partners.scss';

class Partners extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            partners: []
        };
    }

    componentDidMount() {
        axios.get('https://ais.armada.nu/api/partners')
          .then( (res)  => {
            const partners = res.data;
            this.setState({ partners });
          });
    }


    render() {
        return (<div className='partners'>
                { this.state.partners.length > 0 ? <div>
                    <h2>Partners</h2>
                    <div className='partners-table'>
                        {this.state.partners.map(partner =>
                            (<a  key={partner.id} href={partner.link_url}>
                            <img src={partner.logo_url} />
                            </a>)
                        )}
                    </div>
                </div> : <div></div> }
        </div>);
    }

}

export default Partners;
