import { create } from "zustand";

interface StoreState {
  bookingId: string;
  setBookingId: (newId: string) => void;
}

export const useGlobalStore = create<StoreState>()(set => ({
  bookingId: "fdsa",
  setBookingId: (newId: string) => set({ bookingId: newId }),
}));
