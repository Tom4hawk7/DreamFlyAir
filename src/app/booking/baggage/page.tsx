"use client";

import { BaggageItem } from "@/types/Baggage";
import { BaggageContext } from "@/context";
import BaggageCard from "./_components/BaggageCard";

import { useState } from "react";
import Continue from "../_components/Continue";
import styles from "./baggage.module.css";
import { usePassengerStore } from "@/stores/passengerStore";
import { shallow } from "zustand/shallow";
import Passenger from "@/types/Passenger";
import { useShallow } from "zustand/shallow";

const BAGGAGE_ITEMS: Array<BaggageItem> = [
  { id: 1, type: "adult", departure: "outbound", weight: 0, price: 0 },
  { id: 1, type: "adult", departure: "return", weight: 0, price: 0 },
  { id: 2, type: "child", departure: "outbound", weight: 0, price: 0 },
  { id: 2, type: "child", departure: "return", weight: 0, price: 0 },
  { id: 3, type: "infant", departure: "outbound", weight: 0, price: 0 },
  { id: 3, type: "infant", departure: "return", weight: 0, price: 0 },
];

export default function BaggagePage() {
  const [baggage, setBaggage] = useState<Array<BaggageItem>>(BAGGAGE_ITEMS);

  const { adultPassengers, childPassengers, infantPassengers } = usePassengerStore(
    useShallow(state => ({
      adultPassengers: state.adultPassengers,
      childPassengers: state.childPassengers,
      infantPassengers: state.infantPassengers,
    }))
  );

  // }), shallow<Passenger>())

  const departing = baggage.filter(item => item.departure === "outbound");
  const returning = baggage.filter(item => item.departure === "return");

  const total = baggage.reduce((acc, item) => acc + item.price, 0);

  return (
    <BaggageContext.Provider value={setBaggage}>
      <div>
        <h1 className={styles.heading}>Baggage</h1>

        <section>
          <h2 className={styles.heading2}>Departing Flight</h2>

          {departing.map(item => (
            <BaggageCard key={`${item.id}-${item.departure}`} item={item} />
          ))}

          <h2 className={styles.heading2}>Arriving Flight</h2>

          {returning.map(item => (
            <BaggageCard key={`${item.id}-${item.departure}`} item={item} />
          ))}

          <Continue link="/booking/seat" price={total} />
        </section>
      </div>
    </BaggageContext.Provider>
  );
}
