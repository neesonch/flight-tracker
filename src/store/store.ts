import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { Aircraft, Portfolio } from "../types";

interface DashboardState {
  aircraft: Aircraft[];
  portfolios: Portfolio[];
  addAircraft: (newAircraft: Aircraft[]) => void;
}

const useDashboardState = create<DashboardState>()((set) => ({
  aircraft: [],
  portfolios: [
    {
      name: "Hardcoded portfolio",
      aircraftByRegistration: ["ZS-GAO", "XA-AMZ"],
    },
  ],
  addAircraft: (newAircraft: Aircraft[]) => {
    set((state) => ({ aircraft: [...newAircraft, ...state.aircraft] }));
  },
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useDashboardState);
}

export default useDashboardState;
