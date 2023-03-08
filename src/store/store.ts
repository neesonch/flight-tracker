import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { v4 as uuidv4 } from "uuid";
import { AirplaneGroup, PortfolioGroup } from "../types";
import mockPortfolioData from "../mocks/mockPortfolioData";

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
  removeAirplaneFromPortfolio: (
    airplaneRegistration: string,
    portfolioId: string
  ) => void;
  addNewPortfolio: (portfolioName: string) => void;
  removePortfolio: (portfolioId: string) => void;
  isInitialFetchComplete: boolean;
  setIsInitialFetchComplete: (isInitialFetchComplete: boolean) => void;
}

const useDashboardStore = create<DashboardState>()((set) => ({
  airplanes: {},
  activePortfolioId: null,
  setActivePortfolioId: (id: string | null) => {
    set(() => ({ activePortfolioId: id }));
  },
  portfolios: mockPortfolioData,
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
          airplanesByRegistration: [
            airplaneRegistration,
            ...state.portfolios[portfolioId].airplanesByRegistration,
          ],
        },
      },
    }));
  },
  removeAirplaneFromPortfolio: (airplaneRegistration, portfolioId) => {
    set((state) => ({
      portfolios: {
        ...state.portfolios,
        [portfolioId]: {
          id: state.portfolios[portfolioId].id,
          name: state.portfolios[portfolioId].name,
          airplanesByRegistration: [
            ...state.portfolios[portfolioId].airplanesByRegistration.filter(
              (registration) => registration !== airplaneRegistration
            ),
          ],
        },
      },
    }));
  },
  addNewPortfolio: (portfolioName) => {
    const newPortfolioId = uuidv4();
    set((state) => ({
      portfolios: {
        ...state.portfolios,
        [newPortfolioId]: {
          name: portfolioName,
          id: newPortfolioId,
          airplanesByRegistration: [],
        },
      },
    }));
  },
  removePortfolio: (portfolioId) => {
    set((state) => {
      const { [portfolioId]: portfolioToRemove, ...updatedPortfolios } =
        state.portfolios;
      return { portfolios: updatedPortfolios };
    });
  },
  isInitialFetchComplete: false,
  setIsInitialFetchComplete: (isInitialFetchComplete) => {
    set(() => ({ isInitialFetchComplete }));
  },
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useDashboardStore);
}

export default useDashboardStore;
