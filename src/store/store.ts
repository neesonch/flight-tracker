import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { AirplaneGroup, Portfolio, PortfolioGroup } from "../types";

interface DashboardState {
  airplanes: AirplaneGroup;
  activePortfolioId: string | null;
  setActivePortfolioId: (id: string | null) => void;
  portfolios: PortfolioGroup;
  addAirplanes: (newAirplane: AirplaneGroup) => void;
  addAirplaneToPortfolio: (
    airplaneRegistration: string,
    portfolioId: string
  ) => void;
}

const useDashboardStore = create<DashboardState>()((set) => ({
  airplanes: {},
  activePortfolioId: null,
  setActivePortfolioId: (id: string | null) => {
    set(() => ({ activePortfolioId: id }));
  },
  portfolios: {
    "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed": {
      name: "Hardcoded portfolio",
      airplaneByRegistration: ["ZS-GAO", "XA-AMZ"],
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
    },
    "4abcd2": {
      name: "Another hardcoded portfolio",
      airplaneByRegistration: ["ZS-GAO", "LY-BFM", "B-6636"],
      id: "4abcd2",
    },
  },
  addAirplanes: (newAirplanes: AirplaneGroup) => {
    set((state) => ({ airplanes: { ...newAirplanes, ...state.airplanes } }));
  },
  addAirplaneToPortfolio: (airplaneRegistration, portfolioId) => {
    set((state) => ({
      portfolios: {
        ...state.portfolios,
        [portfolioId]: {
          id: state.portfolios[portfolioId].id,
          name: state.portfolios[portfolioId].name,
          airplaneByRegistration: [
            airplaneRegistration,
            ...state.portfolios[portfolioId].airplaneByRegistration,
          ],
        },
      },
    }));
  },
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useDashboardStore);
}

export default useDashboardStore;
