import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Card, CardContent, Typography } from "@mui/material";

const StyledCard = styled(Card)`
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

const PortfolioCard = () => {
  return (
    <StyledCard elevation={3}>
      <CardContent>
        <Typography> Some portfolio name </Typography>
        <Button variant="contained">View</Button>
        <Button variant="outlined">Delete</Button>
      </CardContent>
    </StyledCard>
  );
};

export default PortfolioCard;
