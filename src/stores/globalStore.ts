import { create } from "zustand";

interface State {
  bookingId: string;
  location: string;
  destination: string;
  hasReturnFlight: boolean;
}

interface Actions {
  setBookingId: (newId: string) => void;
  setDetails: (location: string, destination: string, hasReturnFlight: boolean) => void;
}

export const useGlobalStore = create<State & Actions>()(set => ({
  bookingId: "",

  location: "",
  destination: "",
  hasReturnFlight: false,

  setBookingId: (newId: string) => set({ bookingId: newId }),

  setDetails: (location: string, destination: string, hasReturnFlight: boolean) =>
    set({
      location: location,
      destination: destination,
      hasReturnFlight: hasReturnFlight,
    }),
}));
