import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import FlightsChart from "../FlightsChart/FlightsChart";
import useDashboardStore from "../../store/store";

const StyledPaper = styled(Paper)`
  max-width: 99%;
`;

const PortfolioDetails = () => {
  const activePortfolioId = useDashboardStore(
    (state) => state.activePortfolioId
  );
  const portfolios = useDashboardStore((state) => state.portfolios);
  const activePortfolio = portfolios.find(
    (portfolio) => portfolio.id === activePortfolioId
  );

  return (
    <StyledPaper variant="outlined">
      <Grid container direction="column">
        <Typography variant="h5" display="flex" justifyContent="center">
          {activePortfolio ? activePortfolio.name : "Please select a portfolio"}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <FlightsChart />
          </Grid>
          <Grid item xs={2}>
            <div>Aircraft go here</div>
          </Grid>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default PortfolioDetails;
