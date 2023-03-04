import React, { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import useDashboardState from "./store/store";

const App = () => {
  const addAircraft = useDashboardState((state) => state.addAircraft);

  useEffect(() => {
    fetch("/aircraft")
      .then((response) => response.json())
      .then((data) => addAircraft(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Dashboard />;
};

export default App;
