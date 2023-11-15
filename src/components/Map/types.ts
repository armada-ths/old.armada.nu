export interface Exhibitor {
  id: number;
  color: string;
  name: string;
  logo_squared: string;
  logo_freesize: string;
  map_coordinates: [number, number][];
  fair_placement: string[];
  industries: Array<{
    name: string;
  }>;
  employments: Array<{
    id: string;
    name: string;
  }>;
}
