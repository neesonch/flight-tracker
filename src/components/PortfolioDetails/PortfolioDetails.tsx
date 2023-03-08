import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import FlightsChart from "../FlightsChart/FlightsChart";
import AirplanesList from "./AirplanesList/AirplanesList";
import useDashboardStore from "../../store/store";

const StyledPaper = styled(Paper)`
  max-width: 99%;
  height: 95vh;
`;

const PortfolioDetails = () => {
  const activePortfolioId = useDashboardStore(
    (state) => state.activePortfolioId
  );
  const portfolios = useDashboardStore((state) => state.portfolios);

  const activePortfolio = activePortfolioId
    ? portfolios[activePortfolioId]
    : null;

  return (
    <StyledPaper variant="outlined">
      <Grid container direction="column">
        <Typography variant="h5" display="flex" justifyContent="center">
          {activePortfolio ? activePortfolio.name : "Please select a portfolio"}
        </Typography>
        {activePortfolioId ? (
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <FlightsChart />
            </Grid>
            <Grid item xs={2}>
              <AirplanesList activePortfolioId={activePortfolioId} />
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </StyledPaper>
  );
};

export default PortfolioDetails;
