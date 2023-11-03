export function findPolygonCenter(coordinates: [number, number][]) {
  let max_x = 0;
  let max_y = 0;
  let min_x = 10000;
  let min_y = 10000;
  for (let i = 0; i < coordinates.length; i++) {
    if (coordinates[i][1] > max_x) {
      max_x = coordinates[i][1];
    }
    if (coordinates[i][0] > max_y) {
      max_y = coordinates[i][0];
    }
    if (coordinates[i][1] < min_x) {
      min_x = coordinates[i][1];
    }
    if (coordinates[i][0] < min_y) {
      min_y = coordinates[i][0];
    }
  }
  //check for biggest/smallest x and y coordinate

  let avg_x = min_x + (max_x - min_x) / 2;
  let avg_y = min_y + (max_y - min_y) / 2;
  //console.log(avg_y, avg_x)
  return [avg_y, avg_x] as [number, number];
}
