export interface Exhibitor {
  id: number;
  color: string;
  name: string;
  logo_squared: string;
  map_coordinates: [number, number][];
  fair_placement: string[];
}
