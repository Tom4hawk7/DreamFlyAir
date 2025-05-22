import { create } from "zustand";

interface State {
  bookingId: string;
  hasReturnFlight: boolean;
}

interface Actions {
  setBookingId: (newId: string) => void;
  setHasReturnFlight: (value: boolean) => void;
}

// interface StoreState {
//   bookingId: string;
//   setBookingId: (newId: string) => void;
// }

export const useGlobalStore = create<State & Actions>()(set => ({
  bookingId: "",
  hasReturnFlight: false,
  setBookingId: (newId: string) => set({ bookingId: newId }),
  setHasReturnFlight: (value: boolean) => set({ hasReturnFlight: value }),
}));
