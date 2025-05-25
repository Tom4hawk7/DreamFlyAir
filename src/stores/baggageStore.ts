import { Baggage, BaggageType } from "@/types/Baggage";
import { create } from "zustand";

interface State {
  depart: {
    adult: Baggage[] | undefined;
    child: Baggage[] | undefined;
    infant: Baggage[] | undefined;
  };
  return: {
    adult: Baggage[] | undefined;
    child: Baggage[] | undefined;
    infant: Baggage[] | undefined;
  };
}

interface Actions {}

export const useBaggageStore = create<State & Actions>()(set => ({
  depart: {
    adult: undefined,
    child: undefined,
    infant: undefined,
  },
  return: {
    adult: undefined,
    child: undefined,
    infant: undefined,
  },

  //   setDepart: (baggage: Baggage, type: BaggageType, index: number) =>
  //     set(state => ({
  //       depart: {
  //         ...state.depart,
  //         child: state.depart.child!.map((value, i) => (i === index ? baggage : value)),
  //       },
  //     })),

  //   setDepartAdult: (baggage: Baggage, index: number) =>
  //     set({
  //       depart: {
  //         ...useBaggageStore(state => state.depart),
  //         adult: ...useBaggageStore(state => [ [...state.depart.adult],  state.depart.adult![index]]),
  //         // child: undefined,
  //         // infant: undefined
  //       },
  //     }),

  //   setDepartBaggage: (baggage: Baggage, type: BaggageType, index: number) =>
  //     set({
  //       depart: {
  //         adult: [baggage, baggage],
  //         infant: undefined,
  //         child: undefined,
  //       },
  //     }),

  //   setPassengers: (adult: Passenger[], children: Passenger[], infant: Passenger[]) =>
  //     set({ adultPassengers: adult, childPassengers: children, infantPassengers: infant }),
}));
