function isInsidePolygon(point, polygon) {
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

let totalTime = 0;

// This function is brutally slow, use as little as possible
export function findLargestRectangle(polygon, step = 1) {
  let minX = Math.min(...polygon.map((p) => p[0]));
  let maxX = Math.max(...polygon.map((p) => p[0]));
  let minY = Math.min(...polygon.map((p) => p[1]));
  let maxY = Math.max(...polygon.map((p) => p[1]));

  let maxArea = 0;
  let bestRectangle = null;

  let start = performance.now();

  for (let x1 = minX; x1 <= maxX; x1 += step) {
    for (let y1 = minY; y1 <= maxY; y1 += step) {
      for (let x2 = x1 + step; x2 <= maxX; x2 += step) {
        for (let y2 = y1 + step; y2 <= maxY; y2 += step) {
          let rectangle = [
            [x1, y1],
            [x2, y1],
            [x2, y2],
            [x1, y2],
          ];
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

  totalTime += performance.now() - start;
  console.log("Diff", performance.now() - start, "ms");
  console.log("Total time", totalTime / 1000, "s");

  return bestRectangle;
}
