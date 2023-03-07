import fromUnixTime from "date-fns/fromUnixTime";
import format from "date-fns/format";
import secondsToHours from "date-fns/secondsToHours";
import { Airplane, Flight, Flightset, Datapoint } from "../types";

const generateChartData = (airplanes: Airplane[]) => {
  const allPortfolioFlights: Flight[] = [];
  Object.values(airplanes).forEach((airplane) => {
    if (airplane.flights) {
      allPortfolioFlights.push(...airplane.flights);
    }
  });

  const flightsByDate: Flightset = {};
  allPortfolioFlights.forEach((flight) => {
    const flightDate = format(fromUnixTime(flight.arrival_timestamp), "PP");
    if (Object.hasOwn(flightsByDate, flightDate)) {
      flightsByDate[flightDate].push(flight);
    } else {
      flightsByDate[flightDate] = [flight];
    }
  });

  // console.log({ flightsByDate }); // DEBUG
  const flightCyclesDatapoints: Datapoint[] = [];
  const flightHoursDatapoints: Datapoint[] = [];
  Object.keys(flightsByDate).forEach((date) => {
    flightCyclesDatapoints.push({ x: date, y: flightsByDate[date].length });

    const flightDurationDailyTotal = flightsByDate[date].reduce(
      (acc, flight) => {
        return acc + (flight.arrival_timestamp - flight.departure_timestamp);
      },
      0
    );
    flightHoursDatapoints.push({
      x: date,
      y: secondsToHours(flightDurationDailyTotal),
    });
  });
  return [
    {
      id: "Flight Cycles",
      color: "hsl(329, 70%, 50%)",
      data: flightCyclesDatapoints,
    },
    {
      id: "Flight Hours",
      color: "hsl(149, 70%, 50%)",
      data: flightHoursDatapoints,
    },
  ];
};

export default generateChartData;
