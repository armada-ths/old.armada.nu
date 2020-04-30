import React from 'react';

import { Map, TileLayer } from 'react-leaflet-universal'
import 'leaflet/dist/leaflet.css';
import "./contact-map.scss";

class ContactMap extends React.Component {
  render() {

    return (<div>
      <div id="map-container">
        <div id="map-info"><p id="map-text">Find us at<br />THS Kårhus, Nymble<br />Drottning Kristinas väg 15-19<br />114 28 Stockholm</p></div>
        <Map center={[59.347150, 18.067456]} zoom={16} zoomControl={false}>
          <TileLayer
            url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
        </Map></div>
    </div>);
  }
 }
    export default ContactMap;