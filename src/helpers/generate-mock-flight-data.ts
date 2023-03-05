import startOfToday from "date-fns/startOfToday";
import { Flight } from "../types";

const generateRandomFlightTimeInHours = () => {
  const MIN_FLIGHT_TIME = 0.5;
  const hours = Math.floor(Math.random() * 4);
  const quarterHours = Math.floor(Math.random() * 3) * 0.25;
  return Math.max(hours + quarterHours, MIN_FLIGHT_TIME);
};

export const generateMockFlightData = (registration: string): Flight => {
  return {
    flight_number: "BLAH",
    registration,
    departure_airport: "DUB",
    departure_timestamp: 0,
    arrival_airport: "LHR",
    arrival_timestamp: 1024,
  };
};

export const generateMockFlightset = () => {
  const mostRecentAirport = "DUB";
  const mostRecentArrivalTime = startOfToday();
  generateRandomFlightTimeInHours(); // DEBUG
  // TODO: continue flightset logic
};
