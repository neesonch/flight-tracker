import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, Card, CardContent, TextField } from "@mui/material";
import useDashboardStore from "../../../store/store";

const StyledCard = styled(Card)`
  margin: 5px;
`;

const AddPortfolioCard = () => {
  const addNewPortfolio = useDashboardStore((state) => state.addNewPortfolio);
  const [newPortfolioName, setNewPortfolioName] = useState("");

  return (
    <StyledCard elevation={3}>
      <CardContent>
        <TextField
          id="new-portfolio-name"
          label="Portfolio name"
          value={newPortfolioName}
          onChange={(e) => setNewPortfolioName(e.target.value)}
          sx={{ width: "99%" }}
        />
        <Button
          disabled={!newPortfolioName}
          variant="text"
          onClick={() => addNewPortfolio(newPortfolioName)}
        >
          Add new portfolio
        </Button>
      </CardContent>
    </StyledCard>
  );
};

export default AddPortfolioCard;
