import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import useDashboardStore from "../../../store/store";

const StyledCard = styled(Card)`
  margin: 5px;
`;

interface PortfolioCardProps {
  name: string;
  id: string;
}

const PortfolioCard = ({ name, id }: PortfolioCardProps) => {
  const activePortfolioId = useDashboardStore(
    (state) => state.activePortfolioId
  );
  const setActivePortfolioId = useDashboardStore(
    (state) => state.setActivePortfolioId
  );
  const removePortfolio = useDashboardStore((state) => state.removePortfolio);

  const handleDelete = (portfolioId: string) => {
    if (portfolioId === activePortfolioId) {
      setActivePortfolioId(null);
    }
    removePortfolio(portfolioId);
  };

  return (
    <StyledCard elevation={3}>
      <CardContent>
        <Typography> {name}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Button
            variant="contained"
            onClick={() => setActivePortfolioId(id)}
            endIcon={<RemoveRedEyeIcon />}
          >
            View
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleDelete(id)}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default PortfolioCard;
