import L from "leaflet";
import { Polygon, Marker, useMap, useMapEvent } from "react-leaflet";
import React, { useMemo, useState } from "react";
import { Exhibitor } from "@/components/Map/types";
import no_image from "../../../static/assets/armada_marker.png";
import { findPolygonCenter } from "@/components/Map/find_polygon_center";
import ReactDomServer from "react-dom/server";

const ICON_CACHE = new Map<number, L.DivIcon>();

function customIcon(exhibitor: Exhibitor) {
  if (ICON_CACHE.has(exhibitor.id)) return ICON_CACHE.get(exhibitor.id);

  const icon = L.divIcon({
    html: ReactDomServer.renderToString(
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <img
          style={{
            width: "80px",
            objectFit: "contain",
          }}
          src={exhibitor.logo_squared ?? no_image}
        />
      </div>
    ),
  });
  ICON_CACHE.set(exhibitor.id, icon);
  return icon;
}
interface Props {
  ex: Exhibitor;
  handlePolygonSelect: (ex: Exhibitor) => void;
}

export function ExhibitorMapBox({ ex, handlePolygonSelect }: Props) {
  const center = useMemo(
    () => findPolygonCenter(ex.map_coordinates),
    [ex.map_coordinates]
  );

  const icon = useMemo(() => customIcon(ex), [ex]);

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
