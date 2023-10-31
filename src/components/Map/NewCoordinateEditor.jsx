import React, { useRef, useState } from "react";
import {
  Rectangle,
  Polygon,
  Polyline,
  useMapEvent,
  Tooltip,
} from "react-leaflet";

export function NewCoordinateEditor({
  editorCoordinates,
  setEditorCoordinates,
}) {
  const polyRef = useRef();
  const [rectangleStart, setRectangleStart] = useState(null);
  const [lineCoordinates, setLineCoordinates] = useState(null);

  useMapEvent("click", (event) => {
    if (
      polyRef.current &&
      polyRef.current._containsPoint(event.containerPoint)
    ) {
      return;
    }

    if (!rectangleStart) {
      setRectangleStart([event.latlng.lat, event.latlng.lng]);
    } else {
      const bounds = [
        [event.latlng.lat, event.latlng.lng], // Northeast corner
        [rectangleStart[0], event.latlng.lng], // Northwest corner
        rectangleStart, // Southwest corner
        [event.latlng.lat, rectangleStart[1]], // Southeast corner
      ];

      // Push the bounds directly
      setEditorCoordinates([...editorCoordinates, bounds]);
      setRectangleStart(null);
      setLineCoordinates(null);
    }
  });

  if (editorCoordinates.length === 0) return null;

  return (
    <>
      {lineCoordinates && <Polyline positions={lineCoordinates} color="blue" />}
      {editorCoordinates.map((coords, index) => (
        <>
          {console.log(JSON.stringify(coords))}
          <Polygon
            ref={polyRef}
            key={index}
            positions={coords}
            color="#00d790"
            eventHandlers={{
              click: () => {
                navigator.clipboard.writeText(JSON.stringify(coords));
              },
            }}
          >
            <Tooltip direction="top">Copy</Tooltip>
          </Polygon>
        </>
      ))}
    </>
  );
}
