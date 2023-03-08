import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import AddPortfolioCard from "../AddPortfolioCard/AddPortfolioCard";
import PortfolioSkeletonCard from "../PortfolioSkeletonCard/PortfolioSkeletonCard";
import useDashboardStore from "../../../store/store";

const PortfolioList = () => {
  const portfolios = useDashboardStore((state) => state.portfolios);

  const isInitialFetchComplete = useDashboardStore(
    (state) => state.isInitialFetchComplete
  );

  const StyledBox = styled(Box)`
    max-height: 100vh;
    overflow-y: scroll;
  `;

  const skeletonCards = [...Array(3)].map((el, index) => (
    // Disabling rule as list is static, and thus not subject to the problems associated with using index as list item keys - CN
    // eslint-disable-next-line react/no-array-index-key
    <PortfolioSkeletonCard key={`skeleton-card-${index}`} />
  ));

  return (
    <StyledBox>
      {isInitialFetchComplete ? (
        <>
          {Object.values(portfolios).map((portfolio) => (
            <PortfolioCard
              name={portfolio.name}
              id={portfolio.id}
              key={portfolio.id}
            />
          ))}
          <AddPortfolioCard />
        </>
      ) : (
        skeletonCards
      )}
    </StyledBox>
  );
};

export default PortfolioList;
