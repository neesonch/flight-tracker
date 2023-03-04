import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { Aircraft, Portfolio } from "../types";

interface DashboardState {
  aircraft: Aircraft[];
  activePortfolioId: string | null;
  setActivePortfolioId: (id: string | null) => void;
  portfolios: Portfolio[];
  addAircraft: (newAircraft: Aircraft[]) => void;
}

const useDashboardStore = create<DashboardState>()((set) => ({
  aircraft: [],
  activePortfolioId: null,
  setActivePortfolioId: (id: string | null) => {
    set(() => ({ activePortfolioId: id }));
  },
  portfolios: [
    {
      name: "Hardcoded portfolio",
      aircraftByRegistration: ["ZS-GAO", "XA-AMZ"],
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
    },
    {
      name: "Another hardcoded portfolio",
      aircraftByRegistration: ["ZS-GAO", "XA-AMZ"],
      id: "4abcd2",
    },
  ],
  addAircraft: (newAircraft: Aircraft[]) => {
    set((state) => ({ aircraft: [...newAircraft, ...state.aircraft] }));
  },
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useDashboardStore);
}

export default useDashboardStore;
