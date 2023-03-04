import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import useDashboardStore from "../../../store/store";

const PortfolioList = () => {
  const portfolios = useDashboardStore((state) => state.portfolios);

  const StyledBox = styled(Box)`
    max-height: 100vh;
    overflow-y: scroll;
  `;

  return (
    <StyledBox>
      {portfolios.map((portfolio) => (
        <PortfolioCard
          name={portfolio.name}
          id={portfolio.id}
          key={portfolio.id}
        />
      ))}
    </StyledBox>
  );
};

export default PortfolioList;
