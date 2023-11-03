import L from "leaflet";
import { Polygon, Marker, useMap, useMapEvent } from "react-leaflet";
import React, { useMemo, useState } from "react";
import { Exhibitor } from "@/components/Map/types";
import no_image from "../../../static/assets/armada_marker.png";
import { findPolygonCenter } from "@/components/Map/find_polygon_center";

function customIcon(exhibitor: Exhibitor, zoom: number) {
  let xIcon = zoom >= 2 ? 80 : 50;
  let yIcon = zoom >= 2 ? 80 : 50;
  let iconImage = exhibitor.logo_squared ?? no_image;

  return L.icon({
    iconUrl: iconImage,
    iconSize: [xIcon, yIcon], // size of the icon
    iconAnchor: [xIcon / 2, yIcon - yIcon / 2], // point of the icon which will correspond to marker's location
  });
}
interface Props {
  ex: Exhibitor;
  handlePolygonSelect: (ex: Exhibitor) => void;
}

export function ExhibitorMapBox({ ex, handlePolygonSelect }: Props) {
  const map = useMap();

  const [zoom, setZoom] = useState(map.getZoom());

  const center = useMemo(
    () => findPolygonCenter(ex.map_coordinates),
    [ex.map_coordinates]
  );

  const icon = useMemo(() => customIcon(ex, zoom), [ex, zoom]);

  useMapEvent("zoom", (e) => {
    setZoom(e.target.getZoom());
  });

  return (
    <Polygon
      key={ex.id}
      positions={ex.map_coordinates}
      color={"#ffffff"}
      fillColor={"#bcf6bc"}
      weight={1}
      opacity={1}
      eventHandlers={{
        click: () => handlePolygonSelect(ex),
      }}
    >
      <Marker
        eventHandlers={{
          click: () => handlePolygonSelect(ex),
        }}
        key={0}
        position={center}
        title={ex.name}
        icon={icon}
      />
    </Polygon>
  );
}
