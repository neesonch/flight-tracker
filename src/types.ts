export interface Aircraft {
  registration: string;
  model: "A320-200" | "B737-800";
}

export interface Flight {
  flight_number: string;
  registration: string;
  departure_airport: string;
  departure_timestamp: number;
  arrival_airport: string;
  arrival_timestamp: number;
}

export interface Portfolio {
  name: string;
  aircraftByRegistration: string[];
  id: string;
}
