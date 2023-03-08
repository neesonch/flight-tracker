import React from "react";
import { Typography, Stack } from "@mui/material";

const FlightsChartEmptyState = () => (
  <Stack direction="column" justifyContent="center" sx={{ height: "100%" }}>
    <Typography textAlign="center">
      Add airplanes to portfolio to view chart
    </Typography>
  </Stack>
);

export default FlightsChartEmptyState;
