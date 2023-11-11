import React, { useEffect, useMemo, useState } from "react";
import { Exhibitor } from "./types";
import { ExhibitorMapBox } from "@/components/Map/ExhibitorMapBox";
import { useMap, useMapEvents } from "react-leaflet";
import { useThrottle } from "@uidotdev/usehooks";

interface Props {
  fairLocation: string;
  exhibitorMap: Exhibitor[];
  handlePolygonSelect: (ex: Exhibitor) => void;
}

export function ExhibitorRendering({
  fairLocation,
  exhibitorMap,
  handlePolygonSelect,
}: Props) {
  const [bounds, setBounds] = useState<L.LatLngBounds>();
  const throttleBounds = useThrottle(bounds, 250);
  const map = useMap();
  const setBoundsWithPadding = () => setBounds(map.getBounds().pad(0.5));
  useMapEvents({
    move: setBoundsWithPadding,
    zoom: setBoundsWithPadding,
  });

  // Only select relevant exhibitors to render on the map
  const visibleExhibitors = useMemo(
    () =>
      exhibitorMap.filter(
        (ex) =>
          ex.fair_placement[0] === fairLocation &&
          (bounds?.contains(ex.map_coordinates[0]) ?? true)
      ),
    [exhibitorMap, fairLocation, throttleBounds]
  );

  return (
    <div>
      {visibleExhibitors.map((ex) => (
        <ExhibitorMapBox
          key={ex.id}
          ex={ex}
          handlePolygonSelect={handlePolygonSelect}
        />
      ))}
    </div>
  );
}
