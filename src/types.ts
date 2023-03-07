import mockAirportCodes from "./mocks/mockAirportData";

export interface Airplane {
  registration: string;
  model: "A320-200" | "B737-800";
  flights?: Flight[];
}

export interface AirplaneGroup {
  [key: string]: Airplane;
}

export type AirportCode = (typeof mockAirportCodes)[number];

export interface Flight {
  flight_number: string;
  registration: string;
  departure_airport: AirportCode;
  departure_timestamp: number;
  arrival_airport: AirportCode;
  arrival_timestamp: number;
}

export interface Flightset {
  [key: string]: Flight[];
}

export interface Portfolio {
  name: string;
  airplaneByRegistration: string[];
  id: string;
}

export interface Datapoint {
  x: string;
  y: number;
}

export interface ChartDataSet {
  id: string;
  color: string;
  data: Datapoint[];
}
