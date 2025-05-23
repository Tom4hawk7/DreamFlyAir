import Passenger from "@/types/Passenger";
import { create } from "zustand";

interface State {
  adultPassengers: Passenger[] | undefined;
  childPassengers: Passenger[] | undefined;
  infantPassengers: Passenger[] | undefined;
}

interface Actions {}

export const usePassengerStore = create<State & Actions>()(set => ({
  adultPassengers: undefined,
  childPassengers: undefined,
  infantPassengers: undefined,
}));
