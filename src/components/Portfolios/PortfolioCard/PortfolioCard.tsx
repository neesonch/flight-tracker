import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Card, CardContent, Typography } from "@mui/material";
import useDashboardStore from "../../../store/store";

const StyledCard = styled(Card)`
  margin: 5px;
`;

interface PortfolioCardProps {
  name: string;
  id: string;
}

const PortfolioCard = ({ name, id }: PortfolioCardProps) => {
  const setActivePortfolioId = useDashboardStore(
    (state) => state.setActivePortfolioId
  );

  return (
    <StyledCard elevation={3}>
      <CardContent>
        <Typography> {name}</Typography>
        <Button variant="contained" onClick={() => setActivePortfolioId(id)}>
          View
        </Button>
        <Button variant="outlined">Delete</Button>
      </CardContent>
    </StyledCard>
  );
};

export default PortfolioCard;
