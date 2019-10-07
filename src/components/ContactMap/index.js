import React from 'react';

import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import "./contact-map.scss";

// stupid hack so that leaflet's images work after going through webpack
import marker from 'leaflet/dist/images/marker-icon.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: marker2x,
    iconUrl: marker,
    shadowUrl: markerShadow
});

class ContactMap extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [59.347150, 18.067456],
      zoom: 16.5,
      zoomControl: false,
      layers: [
        L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
    L.marker([59.347252, 18.070580]).addTo(this.map);
    L.control.zoom({
      position:'topright'
    }).addTo(this.map);
  }
  render() {
    
    return (<div>
              <div id="map-container">
                <div id="map-info"><p id="map-text">Find us at:<br/>THS Kårhus, Floor 2<br/>114 28 Stockholm</p></div>
                <div id="map"></div>
              </div>
            </div>);
  }
 }
    export default ContactMap;