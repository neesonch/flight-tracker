import mockAirportCodes from "./mocks/mockAirportData";

export interface Aircraft {
  registration: string;
  model: "A320-200" | "B737-800";
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

export interface Portfolio {
  name: string;
  aircraftByRegistration: string[];
  id: string;
}
