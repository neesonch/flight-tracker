import React from "react";
import Grid from "@mui/material/Grid";
import PortfolioList from "./Portfolios/PortfolioList/PortfolioList";
import FlightsChart from "./FlightsChart/FlightsChart";

const Dashboard = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <PortfolioList />
      </Grid>
      <Grid item xs={8}>
        <FlightsChart />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
