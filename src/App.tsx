import React, { useEffect, useRef } from "react";
import Dashboard from "./components/Dashboard";
import useDashboardStore from "./store/store";
import { generateMockFlightset } from "./helpers/generate-mock-flight-data";
import { Airplane, AirplaneGroup } from "./types";

const App = () => {
  const addAirplanes = useDashboardStore((state) => state.addAirplanes);
  const setIsInitialFetchComplete = useDashboardStore(
    (state) => state.setIsInitialFetchComplete
  );

  /* Lesson learned: React Strict Mode renders every component at least twice when running in dev env, as an enforced check of unsafe mounting behaviour - so even code that is wrapped in the useEffect equivalent of didMount will still run twice - in this case, leading to an unnecessary double fetch. Adding below flag as workaround - CN */
  const isFetchNeeded = useRef(true);

  /* Initial fetch of data */
  useEffect(() => {
    if (isFetchNeeded.current) {
      isFetchNeeded.current = false;
      fetch("/airplanes")
        .then((response) => response.json())
        .then((data) => {
          const airplanes = Object.values(data.airplanes) as Airplane[];
          const airplanesWithFlights = {} as AirplaneGroup;
          airplanes.forEach((airplane) => {
            airplanesWithFlights[airplane.registration] = {
              ...airplane,
              flights: generateMockFlightset(airplane.registration),
            };
          });
          addAirplanes(airplanesWithFlights);
          setIsInitialFetchComplete(true);
        });
    }
  }, [addAirplanes, setIsInitialFetchComplete]);

  return <Dashboard />;
};

export default App;
