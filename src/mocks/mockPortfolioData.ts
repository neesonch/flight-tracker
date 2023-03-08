import { PortfolioGroup } from "../types";

const mockPortfolioData: PortfolioGroup = {
  "3cc64a54-103d-4e45-94a4-cfc7f61f9907": {
    name: "All aircraft",
    airplanesByRegistration: [
      "D-AIUO",
      "ZS-GAO",
      "XA-AMZ",
      "LY-BFM",
      "B-6636",
      "G-GDFW",
    ],
    id: "3cc64a54-103d-4e45-94a4-cfc7f61f9907",
  },
  "e598e96f-8210-47d8-840a-8f3ae52d21d6": {
    name: "A320s",
    airplanesByRegistration: ["B-6636", "ZS-GAO", "D-AIUO"],
    id: "e598e96f-8210-47d8-840a-8f3ae52d21d6",
  },
};

export default mockPortfolioData;
