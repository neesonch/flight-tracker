import React from "react";
import { Card, Skeleton, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)`
  margin: 5px;
`;

const StyledStack = styled(Stack)`
  padding: 5px;
`;

const PortfolioSkeletonCard = () => {
  return (
    <StyledCard>
      <StyledStack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
        <Skeleton variant="rectangular" width="100%" height={40} />
      </StyledStack>
    </StyledCard>
  );
};

export default PortfolioSkeletonCard;
