'use client';

import Form from "next/form";
import styles from "./baggage.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";


import { CSSProperties } from "react";

const layer: CSSProperties = {
  position: "relative",
};

// $20 a kilo for adults,
// $10 a kilo for childs

export default function Baggage() {
  const router = useRouter();

  const [trip, setTrip] = useState({
    departingAdults: [
      {weight: 0},
      {weight: 0}
    ],
    departingChildren: [
      {weight: 0}
    ],
    arrivingAdults: [
      {weight: 0}
    ],
    arrivingChildren: [
      {weight: 0}
    ],
  });

  const handleWeightChange = (
    type: "departingAdults" | "departingChildren" | "arrivingAdults" | "arrivingChildren",
    index: number,
    delta: number
  ) => {
    setTrip(prev => ({
      ...prev,
      [type]: prev[type].map((person: { weight: number }, i: number) =>
        i === index ? { ...person, weight: Math.max(0, person.weight + delta) } : person
      ),
    }));
  };

  const totalPrice =
    trip.departingAdults.reduce((sum, adult) => sum + adult.weight, 0) * 20 +
    trip.arrivingAdults.reduce((sum, adult) => sum + adult.weight, 0) * 20 +
    trip.departingChildren.reduce((sum, child) => sum + child.weight, 0) * 10 +
    trip.arrivingChildren.reduce((sum, child) => sum + child.weight, 0) * 10;

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Baggage</h1>

      <section className={styles.flightSelection}>
        <h2 className={styles.heading2}>Departing Flight</h2>

        {/* Departing Flight Adults Baggage */}
        {trip.departingAdults.map((adult, index) => {
          return (
          <div className={`${styles.baggageDiv}`} key={index}>
            <div className={styles.baggageSection}>
                <span>Adult</span>              
              </div>
            <div className={styles.baggageSection}>
              <div className={styles.weightDiv}>
                <button onClick={() => handleWeightChange("departingAdults", index, 1)}>+</button>
                <span>{adult.weight} kg</span>
                <button onClick={() => handleWeightChange("departingAdults", index, -1)}>-</button>
              </div>
            </div>
            <div className={styles.baggagePrice}>${adult.weight * 20}</div>
          </div>
          )})
        }

        {/* Departing Flight Kids Baggage */}
        {trip.departingChildren.map((child, index) => {
          return (
          <div className={`${styles.baggageDiv}`} key={index}>
            <div className={styles.baggageSection}>
                <span>Child</span>
              </div>
            <div className={styles.baggageSection}>
              <div className={styles.weightDiv}>
                <button onClick={() => handleWeightChange("departingChildren", index, 1)}>+</button>
                <span>{child.weight} kg</span>
                <button onClick={() => handleWeightChange("departingChildren", index, -1)}>-</button>
              </div>
            </div>
            <div className={styles.baggagePrice}>${child.weight * 20}</div>
          </div>
          )})
        }

        <h2 className={styles.heading2}>Arriving Flight</h2>
        {/* Arriving Flight Adults Baggage */}
        {trip.arrivingAdults.map((adult, index) => {
          return (
          <div className={`${styles.baggageDiv}`} key={index}>
            <div className={styles.baggageSection}>
                <span>Adult</span>
              </div>
            <div className={styles.baggageSection}>
              <div className={styles.weightDiv}>
                <button onClick={() => handleWeightChange("arrivingAdults", index, 1)}>+</button>
                <span>{adult.weight} kg</span>
                <button onClick={() => handleWeightChange("arrivingAdults", index, -1)}>-</button>
              </div>
            </div>
            <div className={styles.baggagePrice}>${adult.weight * 20}</div>
          </div>
          )})
        }

        {/* Arriving Flight Kids Baggage */}
        {trip.arrivingChildren.map((child, index) => {
          return (
          <div className={`${styles.baggageDiv}`} key={index}>
            <div className={styles.baggageSection}>
                <span>Child</span>
              </div>
            <div className={styles.baggageSection}>
              <div className={styles.weightDiv}>
                <button onClick={() => handleWeightChange("arrivingChildren", index, 1)}>+</button>
                <span>{child.weight} kg</span>
                <button onClick={() => handleWeightChange("arrivingChildren", index, -1)}>-</button>
              </div>
            </div>
            <div className={styles.baggagePrice}>${child.weight * 20}</div>
          </div>
          )})
        }

        <div className={styles.finalSection}>
          Total: ${totalPrice}
          <button className={styles.continueButton} onClick={() => router.push('/booking/seat')}>Continue</button>
        </div>
      </section>
    </div>
  );
}
