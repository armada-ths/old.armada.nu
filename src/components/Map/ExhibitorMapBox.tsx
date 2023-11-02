import { Polygon, Marker, ImageOverlay } from "react-leaflet";
import React, { useMemo } from "react";
import { Exhibitor } from "@/components/Map/types";
import no_image from "../../../static/assets/armada_marker.png";
import { findLargestRectangle } from "./calc_polygon_rectangle";

interface Props {
  ex: Exhibitor;
  handlePolygonSelect: (ex: Exhibitor) => void;
}

export function ExhibitorMapBox({ ex, handlePolygonSelect }: Props) {
  const bounds = useMemo(
    () => findLargestRectangle(ex.map_coordinates),
    [ex.map_coordinates]
  );

  return (
    <Polygon
      key={ex.id}
      positions={ex.map_coordinates}
      color={ex.color}
      stroke={false}
      eventHandlers={{
        click: () => handlePolygonSelect(ex),
      }}
    >
      <ImageOverlay url={ex.logo_squared ?? no_image} bounds={bounds ?? []} />
      {/* <Marker
        eventHandlers={{
          click: () => handlePolygonSelect(ex),
        }}
        key={0}
        position={findMiddle(ex.map_coordinates)}
        title={ex.name}
      >
      </Marker> */}
    </Polygon>
  );
}
