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
  adultPassengers: undefined,
  childPassengers: undefined,
  infantPassengers: undefined,

  setPassengers: (adult: Passenger[], children: Passenger[], infant: Passenger[]) =>
    set({ adultPassengers: adult, childPassengers: children, infantPassengers: infant }),
}));
