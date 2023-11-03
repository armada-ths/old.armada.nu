type Point = [number, number];
function isInsidePolygon(point: Point, polygon: Point[]) {
  let x = point[0];
  let y = point[1];
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    let xi = polygon[i][0],
      yi = polygon[i][1];
    let xj = polygon[j][0],
      yj = polygon[j][1];
    let intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

// This function is brutally slow, use as little as possible
export function findLargestRectangle(polygon: Point[], step = 1) {
  let minX = -1;
  let maxX = -1;
  let minY = -1;
  let maxY = -1;
  for (let i = 0; i < polygon.length; i++) {
    if (minX === null || polygon[i][0] < minX) minX = polygon[i][0];
    if (maxX === null || polygon[i][0] > maxX) maxX = polygon[i][0];
    if (minY === null || polygon[i][1] < minY) minY = polygon[i][1];
    if (maxY === null || polygon[i][1] > maxY) maxY = polygon[i][1];
  }

  let maxArea = 0;
  let bestRectangle: Point[] | null = null;

  for (let x1 = minX; x1 <= maxX; x1 += step) {
    for (let y1 = minY; y1 <= maxY; y1 += step) {
      for (let x2 = x1 + step; x2 <= maxX; x2 += step) {
        for (let y2 = y1 + step; y2 <= maxY; y2 += step) {
          const rectangle = [
            [x1, y1],
            [x2, y1],
            [x2, y2],
            [x1, y2],
          ] as Point[];
          if (rectangle.every((p) => isInsidePolygon(p, polygon))) {
            let area = (x2 - x1) * (y2 - y1);
            if (area > maxArea) {
              maxArea = area;
              bestRectangle = rectangle;
            }
          }
        }
      }
    }
  }

  return bestRectangle;
}
