import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";

const App = () => {
  useEffect(() => {
    fetch("/aircraft")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Dashboard />
      </header>
    </div>
  );
};

export default App;
