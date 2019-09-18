import React from 'react';
import './contact-map.scss';

const GOOGLE_MAPS_API_KEY = '';

class ContactMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
        };
    }

    render() {
        return (
            <div className="contact-map">
            </div>
        );
    }
}

export default ContactMap;
