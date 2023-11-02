import React, { useMemo } from "react";
import { Polygon, Marker, ImageOverlay } from "react-leaflet";
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
/*
                {exhibitorsMap.map((ex) => {
                  console.log(ex.name + ex.color);
                  let ifShowPolygon = false;
                  ifShowPolygon = ex.fair_placement.includes(fairLocation); // if one is the exhibitors floors is matching with fairLocation then show that polygon

                  let bounds = [];
                  if (ifShowPolygon) {
                    bounds = COMPANY_LOGO_POSITION_CACHE.get(ex.id) ?? [];
                    if (bounds.length === 0) {
                      bounds = findLargestRectangle(ex.map_coordinates);
                      COMPANY_LOGO_POSITION_CACHE.set(ex.id, bounds);
                    } else {
                      console.log("CACHE HIT");
                    }
                  }

                  return (
                    ifShowPolygon && (
                      <ExhibitorRendering
                        ex={ex}
                        handlePolygonSelect={handlePo}
                      />
                    )
                  );
                })}*/
