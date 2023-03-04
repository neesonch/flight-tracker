import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const PortfolioList = () => {
  const mockCards = [];
  for (let i = 0; i < 15; i += 1) {
    mockCards.push(1);
  }

  const StyledBox = styled(Box)`
    max-height: 100vh;
    overflow-y: scroll;
  `;

  return (
    <StyledBox>
      {mockCards.map((mockCard) => (
        <PortfolioCard />
      ))}
    </StyledBox>
  );
};

export default PortfolioList;
