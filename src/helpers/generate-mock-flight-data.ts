import startOfToday from "date-fns/startOfToday";
import hoursToSeconds from "date-fns/hoursToSeconds";
import getUnixTime from "date-fns/getUnixTime";
import subDays from "date-fns/subDays";
import isPast from "date-fns/isPast";
import fromUnixTime from "date-fns/fromUnixTime";
import format from "date-fns/format";
import { AirportCode, Flight, Flightset } from "../types";
import mockAirportCodes from "../mocks/mockAirportData";

const generateRandomTimeInHours = (minHours = 0, maxHours: number): number => {
  const hours = Math.floor(Math.random() * (maxHours - minHours));
  const quarterHours = Math.floor(Math.random() * 3) * 0.25;
  return hours + quarterHours + minHours;
};

const generateRandomFlightCode = (carrierCode: string): string => {
  const digits = `${Math.floor(Math.random() * 9999)}`.padStart(4, "0");
  return `${carrierCode}-${digits}`;
};

const getRandomAirportCode = (departure_airport?: AirportCode): AirportCode => {
  const validDestinations = mockAirportCodes.filter(
    (airportCode) => airportCode !== departure_airport
  );
  return validDestinations[
    Math.floor(Math.random() * validDestinations.length)
  ];
};

interface GenerateMockFlightProps {
  registration: string;
  departure_airport: AirportCode;
  departure_timestamp: number;
}

export const generateMockFlight = ({
  registration,
  departure_airport,
  departure_timestamp,
}: GenerateMockFlightProps): Flight => {
  return {
    flight_number: generateRandomFlightCode("FR"),
    registration,
    departure_airport,
    departure_timestamp,
    arrival_airport: getRandomAirportCode(departure_airport),
    arrival_timestamp:
      departure_timestamp + hoursToSeconds(generateRandomTimeInHours(1, 5)),
  };
};

export const generateMockFlightset = (registration: string): Flight[] => {
  let mostRecentAirport = getRandomAirportCode();
  let nextDepartureTime =
    getUnixTime(subDays(startOfToday(), 7)) +
    hoursToSeconds(generateRandomTimeInHours(5, 9));

  const flightsByDate: Flightset = {};
  const flights: Flight[] = [];

  while (isPast(fromUnixTime(nextDepartureTime))) {
    const lastFlight = generateMockFlight({
      registration,
      departure_airport: mostRecentAirport,
      departure_timestamp: nextDepartureTime,
    });
    flights.push(lastFlight);
    const flightDate = format(fromUnixTime(lastFlight.arrival_timestamp), "PP");
    if (Object.hasOwn(flightsByDate, flightDate)) {
      flightsByDate[flightDate].push(lastFlight);
    } else {
      flightsByDate[flightDate] = [lastFlight];
    }
    mostRecentAirport = lastFlight.arrival_airport;
    nextDepartureTime =
      lastFlight.arrival_timestamp +
      hoursToSeconds(generateRandomTimeInHours(2, 12));
  }
  return flights;
};
