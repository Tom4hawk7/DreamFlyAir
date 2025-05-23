"use client";

import { useState } from "react";

import Flight from "@/types/Flight";
import { SelectedContext } from "@/context";
import FlightCard from "./_components/FlightCard";
import Continue from "../_components/Continue";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

import styles from "./flight.module.css";
import flightReviver from "@/utils/flightReviver";

interface FlightPageState {
  departing: Flight | undefined;
  returning: Flight | undefined;
}

const URL = process.env.NEXT_PUBLIC_API_URL + "/booking/flight?";

const fetcher = async (searchParams: URLSearchParams) => {
  const response = await fetch(URL + searchParams);
  const data = await response.text();
  return await JSON.parse(data, flightReviver);
};

export default function FlightPage() {
  const searchParams = useSearchParams();
  const { data } = useSWR("flights", () => fetcher(searchParams));

  const [selected, setSelected] = useState<FlightPageState>({
    departing: undefined,
    returning: undefined,
  });

  const changeDeparture = (flight: Flight) => setSelected({ ...selected, departing: flight });
  const changeReturn = (flight: Flight) => setSelected({ ...selected, returning: flight });

  const totalPrice = (selected.departing?.price || 0) + (selected.returning?.price || 0);

  if (!data) return "loading";

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Flights</h1>

      <section className={styles.flightSelection}>
        <h2 className={styles.heading2}>Departing Flights</h2>

        <SelectedContext.Provider value={[selected.departing, changeDeparture]}>
          {data.departing.map((flight: Flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </SelectedContext.Provider>

        <SelectedContext.Provider value={[selected.returning, changeReturn]}>
          <h2 className={styles.heading2}>Returning Flights</h2>
          {data.returning.map((flight: Flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </SelectedContext.Provider>

        <Continue price={totalPrice} />
      </section>
    </div>
  );
}
