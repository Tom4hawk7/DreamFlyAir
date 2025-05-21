"use client";
import FlightNav from "../_components/FlightNav";
import styles from "./flight.module.css";
import { useState } from "react";

import Flight from "@/types/Flight";
import { SelectedContext } from "@/context";
import FlightCard from "./_components/FlightCard";
import Continue from "../_components/Continue";
import { useGlobalStore } from "store";

const departingFlights: Array<Flight> = [
  {
    id: "d1",
    location: "Sydney",
    destination: "Nowhere",
    departure: new Date("2025-05-12"),
    arrival: new Date("2025-05-13"),
    price: 299,
    plane: "dfds",
  },
  {
    id: "d2",
    location: "Brisbane",
    destination: "New Zealand",
    departure: new Date("2025-03-15"),
    arrival: new Date("2025-03-16"),
    price: 329,
    plane: "das",
  },
];
const returningFlights: Array<Flight> = [
  {
    id: "r1",
    location: "Downey",
    destination: "Uppity",
    departure: new Date("2025-04-05"),
    arrival: new Date("2025-04-06"),
    price: 289,
    plane: "dfds",
  },
  {
    id: "r2",
    location: "For",
    destination: "Noew",
    departure: new Date("2025-04-04"),
    arrival: new Date("2025-04-05"),
    price: 259,
    plane: "dfds",
  },
];

// const testSelected = {
//   depart: {
//     id: "r1",
//     location: "Downey",
//     destination: "Uppity",
//     departure: new Date("2025-03-15"),
//     arrival: new Date("2025-03-16"),
//     price: 289,
//     plane: "dfds",
//   },
//   return: {
//     id: "d2",
//     location: "Brisbane",
//     destination: "New Zealand",
//     departure: new Date("2025-05-12"),
//     arrival: new Date("2025-05-13"),
//     price: 329,
//     plane: "das",
//   },
// };

interface FlightPageState {
  depart: Flight | undefined;
  return: Flight | undefined;
}

export default function FlightPage() {
  const [selected, setSelected] = useState<FlightPageState>({
    depart: undefined,
    return: undefined,
  });

  const changeDeparture = (flight: Flight) => setSelected({ ...selected, depart: flight });
  const changeReturn = (flight: Flight) => setSelected({ ...selected, return: flight });

  const totalPrice = (selected.depart?.price || 0) + (selected.return?.price || 0);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Flights</h1>

      <section className={styles.flightSelection}>
        <h2 className={styles.heading2}>Departing Flights</h2>

        <SelectedContext.Provider value={[selected.depart, changeDeparture]}>
          {departingFlights.map(flight => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </SelectedContext.Provider>

        <SelectedContext.Provider value={[selected.return, changeReturn]}>
          <h2 className={styles.heading2}>Returning Flights</h2>
          {returningFlights.map(flight => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </SelectedContext.Provider>

        <Continue price={totalPrice} />
      </section>
    </div>
  );
}
