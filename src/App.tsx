import React, { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import useDashboardStore from "./store/store";

const App = () => {
  const addAircraft = useDashboardStore((state) => state.addAircraft);

  useEffect(() => {
    fetch("/aircraft")
      .then((response) => response.json())
      .then((data) => addAircraft(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Dashboard />;
};

export default App;
