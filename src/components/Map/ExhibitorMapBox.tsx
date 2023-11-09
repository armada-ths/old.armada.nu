import L from "leaflet";
import { Polygon, Marker } from "react-leaflet";
import React, { useMemo } from "react";
import { Exhibitor } from "@/components/Map/types";
import no_image from "../../../static/assets/armada_marker.png";
import { findPolygonCenter } from "@/components/Map/find_polygon_center";

const ICON_CACHE = new Map<number, L.DivIcon>();

function customIcon(exhibitor: Exhibitor) {
  if (ICON_CACHE.has(exhibitor.id)) return ICON_CACHE.get(exhibitor.id);

  const icon = L.divIcon({
    html: `
      <div
        style="display: flex; justify-content: center; align-items: center; background-color: transparent;"
      >
      ${
        exhibitor.logo_squared || exhibitor.logo_freesize
          ? `<img
             loading="lazy"
             style="width: 80px; object-fit: contain; border-radius: 5px;"
             src="${exhibitor.logo_squared ?? exhibitor.logo_freesize}"
             alt="${exhibitor.name}"
           />`
          : `<p style="font-size: 10px; object-fit: contain;">${exhibitor.name}</p>`
      }
      </div>
    `,
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
    [
      /* ex.map_coordinates */
    ]
  );

  const icon = useMemo(
    () => customIcon(ex),
    [
      /* ex */
    ]
  );

  return (
    <Polygon
      key={ex.id}
      positions={ex.map_coordinates}
      color={"#ffffff"}
      fillColor={"#2986cc"}
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
