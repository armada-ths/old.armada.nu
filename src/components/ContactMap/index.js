import React from 'react';
import './contact-map.scss';
import GoogleMapReact from 'google-map-react';

const GOOGLE_MAPS_API_KEY = `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

class ContactMap extends React.Component {
    static defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };

    render() {
        return (
        <div>
          <h1 className="helmet">Find US</h1>
          <div className="contact-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY}}
              defaultCenter={{lat:59.347186,lng:18.070766}}
              defaultZoom={17}
            >
            </GoogleMapReact>
          </div>
        </div>
        );
      }
    }
     
    export default ContactMap;