"use client";

import Flight from "@/types/Flight";
import { SelectedContext } from "@/context";
import FlightCard from "./_components/FlightCard";
import Continue from "../_components/Continue";
import useSWR from "swr";

import flightReviver from "@/utils/flightReviver";
import { useFlightStore } from "stores/flightStore";
import styles from "./flight.module.css";
import { useGlobalStore } from "@/stores/globalStore";

const URL = process.env.NEXT_PUBLIC_API_URL + "/booking/flight?";

const fetcher = async (searchParams: URLSearchParams) => {
  const response = await fetch(URL + searchParams);
  const data = await response.text();
  return await JSON.parse(data, flightReviver);
};

export default function FlightPage() {
  const location = useGlobalStore(state => state.location);
  const destination = useGlobalStore(state => state.destination);
  const hasReturnFlight = useGlobalStore(state => state.hasReturnFlight);

  const searchParams = new URLSearchParams({
    location: location,
    destination: destination,
    hasReturnFlight: hasReturnFlight ? "true" : "",
  });

  const { data } = useSWR("flights", () => fetcher(searchParams));

  const getDepart = useFlightStore(state => state.departFlight);
  const setDepart = useFlightStore(state => state.setDepartFlight);

  const getReturn = useFlightStore(state => state.returnFlight);
  const setReturn = useFlightStore(state => state.setReturnFlight);

  const totalPrice = (getDepart?.price || 0) + (getReturn?.price || 0);

  if (!data) return "loading";

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Flights</h1>

      <section className={styles.flightSelection}>
        <h2 className={styles.heading2}>Departing Flights</h2>

        <SelectedContext.Provider value={[getDepart, setDepart]}>
          {data.departing.map((flight: Flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </SelectedContext.Provider>

        <SelectedContext.Provider value={[getReturn, setReturn]}>
          <h2 className={styles.heading2}>Returning Flights</h2>
          {data.returning.map((flight: Flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </SelectedContext.Provider>

        <Continue price={totalPrice} link="./baggage" />
      </section>
    </div>
  );
}
