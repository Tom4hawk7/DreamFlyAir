import Passenger from "@/types/Passenger";
import { create } from "zustand";

interface State {
  adultPassengers: Passenger[] | undefined[] | undefined;
  childPassengers: Passenger[] | undefined[] | undefined;
  infantPassengers: Passenger[] | undefined[] | undefined;
}

interface Actions {
  setPassengers: (adult: Passenger[], children: Passenger[], infant: Passenger[]) => void;
}

export const usePassengerStore = create<State & Actions>()(set => ({
  adultPassengers: [],
  childPassengers: [],
  infantPassengers: [],

  setAdultPassenger: (passenger) => set((state) => ({
    adultPassengers: [...(state.adultPassengers || []), passenger]
  })),
  
  setChildPassenger: (passenger) => set((state) => ({
    childPassengers: [...(state.childPassengers || []), passenger]
  })),
  
  setInfantPassenger: (passenger) => set((state) => ({
    infantPassengers: [...(state.infantPassengers || []), passenger]
  })),

  resetPassengers: () => set({
    adultPassengers: [],
    childPassengers: [],
    infantPassengers: []
  })
}));
