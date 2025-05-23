import { create } from "zustand";

import Flight from "./types/Flight";

interface State {
  bookingId: string;
  hasReturnFlight: boolean;

  returnFlight: Flight | undefined;
  departFlight: Flight | undefined;
}

interface Actions {
  setBookingId: (newId: string) => void;
  setHasReturnFlight: (value: boolean) => void;

  setReturnFlight: (flight: Flight) => void;
  setDepartFlight: (flight: Flight) => void;
}

export const useGlobalStore = create<State & Actions>()(set => ({
  bookingId: "",
  hasReturnFlight: false,

  returnFlight: undefined,
  departFlight: undefined,

  setBookingId: (newId: string) => set({ bookingId: newId }),
  setHasReturnFlight: (value: boolean) => set({ hasReturnFlight: value }),

  setReturnFlight: (flight: Flight) => set({ returnFlight: flight }),
  setDepartFlight: (flight: Flight) => set({ departFlight: flight }),
}));
