import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import "./index.scss";

const markerData = {
  entrance: {
    className: "label",
    html: '<div class="label"><b>Entrance</b></div>',
  },
  nya_mat: {
    className: "label",
    html: '<div class="label"><b>Nya Matsalen</b></div>',
  },
  gamla_mat: {
    className: "label",
    html: '<div class="label"><b>Gamla Matsalen</b></div>',
  },
  susroom: {
    className: "label",
    html: '<div class="label label-small"><b>Sustainability Room</b></div>',
  },
  hyllan: {
    className: "label",
    html: '<div class="label"><b>Hyllan</b></div>',
  },
  gröten: {
    className: "label",
    html: '<div class="label"><b>Gröten</b></div>',
  },
  div_room: {
    className: "label",
    html: '<div class="label"><b>Diversity Room</b></div>',
  },
  musik: {
    className: "label",
    html: '<div class="label"><b>Musikrummet</b></div>',
  },
  ångdomen: {
    className: "label",
    html: '<div class="label label-small"><b>Entrance to Ångdomen</b></div>',
  },
  trans_room: {
    className: "label",
    html: '<div class="label"><b>Transition Room</b></div>',
  },
  pubben: {
    className: "label",
    html: '<div class="label"><b>Pubben</b></div>',
  },
  student_lounge: {
    className: "label",
    html: '<div class="label label-small"><b>Student Lounge</b></div>',
  },
  tidningsrummet: {
    className: "label",
    html: '<div class="label"><b>Tidningsrummet</b></div>',
  },
  radiorummet: {
    className: "label",
    html: '<div class="label label-small"><b>Radiorummet</b></div>',
  },
  tvrummet: {
    className: "label",
    html: '<div class="label"><b>TV-rummet</b></div>',
  },
};

const markersByFloor = {
  "Nymble - 2nd Floor": [
    { position: [110, 158.5], icon: markerData.entrance },
    { position: [297.46255118940945, 668], icon: markerData.nya_mat },
    { position: [379.5143186628729, 280.5], icon: markerData.gamla_mat },
    { position: [300, 280.5], icon: markerData.susroom },
    { position: [110, 581], icon: markerData.hyllan },
    { position: [162, 845], icon: markerData.gröten },
    { position: [475, 615], icon: markerData.div_room },
    { position: [480, 441], icon: markerData.trans_room },
    { position: [222.34139327279283, 280.5], icon: markerData.pubben },
  ],
  "Nymble - 3rd Floor": [
    { position: [150, 620], icon: markerData.musik },
    { position: [110, 640], icon: markerData.student_lounge },
    { position: [297.8443304344079, -120], icon: markerData.tidningsrummet },
    { position: [150, 440], icon: markerData.radiorummet },
    { position: [170, 300.5], icon: markerData.tvrummet },
  ],
  "Nymble - 1st Floor": [
    { position: [150, 107], icon: markerData.entrance },
    { position: [281, 830.5], icon: markerData.entrance },
  ],
  "Library Main": [
    { position: [0, 249.5], icon: markerData.entrance },
    { position: [520, 175], icon: markerData.ångdomen },
  ],
};

const TooltipMarkers = ({ floor }) => {
  const floorMarkers = markersByFloor[floor] || [];

  return (
    <>
      {floorMarkers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          icon={L.divIcon(marker.icon)}
        />
      ))}
    </>
  );
};

export default TooltipMarkers;
