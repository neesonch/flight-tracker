import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { AirplaneGroup, Portfolio } from "../types";

interface DashboardState {
  airplanes: AirplaneGroup;
  activePortfolioId: string | null;
  setActivePortfolioId: (id: string | null) => void;
  portfolios: Portfolio[];
  addAirplanes: (newAirplane: AirplaneGroup) => void;
}

const useDashboardStore = create<DashboardState>()((set) => ({
  airplanes: {},
  activePortfolioId: null,
  setActivePortfolioId: (id: string | null) => {
    set(() => ({ activePortfolioId: id }));
  },
  portfolios: [
    {
      name: "Hardcoded portfolio",
      airplaneByRegistration: ["ZS-GAO", "XA-AMZ"],
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
    },
    {
      name: "Another hardcoded portfolio",
      airplaneByRegistration: ["ZS-GAO", "LY-BFM", "B-6636"],
      id: "4abcd2",
    },
  ],
  addAirplanes: (newAirplanes: AirplaneGroup) => {
    set((state) => ({ airplanes: { ...newAirplanes, ...state.airplanes } }));
  },
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useDashboardStore);
}

export default useDashboardStore;
