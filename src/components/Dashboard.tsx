import React from "react";
import Grid from "@mui/material/Grid";
import PortfolioList from "./Portfolios/PortfolioList/PortfolioList";
import PortfolioDetails from "./PortfolioDetails/PortfolioDetails";

const Dashboard = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <PortfolioList />
      </Grid>
      <Grid item xs={9}>
        <PortfolioDetails />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
