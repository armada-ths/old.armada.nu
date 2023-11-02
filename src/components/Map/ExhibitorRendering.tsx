import React, { useMemo } from "react";
import { Exhibitor } from "./types";
import { ExhibitorMapBox } from "@/components/Map/ExhibitorMapBox";

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
  // Only select relevant exhibitors to render on the map
  const visibleExhibitors = useMemo(
    () => exhibitorMap.filter((ex) => ex.fair_placement[0] === fairLocation),
    [exhibitorMap, fairLocation]
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
