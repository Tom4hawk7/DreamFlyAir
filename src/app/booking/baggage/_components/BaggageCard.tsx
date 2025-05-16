"use client";

import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";
import { BaggageItem, BaggageRate } from "@/types/Baggage";
import { use } from "react";
import { BaggageContext } from "@/context";
import styles from "./BaggageCard.module.css";

export default function BaggageCard({ item }: { item: BaggageItem }) {
  const setBaggage = use(BaggageContext);

  // counter functions
  const increment = () => setBaggage!(list => update(list, item.weight + 1));
  const decrement = () => {
    if (item.weight > 0) setBaggage!(list => update(list, item.weight - 1));
  };

  // helper function
  const update = (list: BaggageItem[], weight: number): BaggageItem[] => {
    // console.log("Clicked", item.weight);
    const newPrice = weight * BaggageRate[item.type];

    return list.map(baggage => {
      if (baggage.id === item.id && baggage.departure === item.departure) {
        return { ...baggage, weight: weight, price: newPrice };
      } else return baggage;
    });
  };

  return (
    <div className={styles.container}>
      <p className={styles.header}>{item.type}</p>

      <span className={styles.incrementer}>
        <button className={styles.button} onClick={increment}>
          <PlusIcon width="16" height="16" />
        </button>

        <p className={styles.weight}>{item.weight} kg</p>

        <button className={styles.button} onClick={decrement}>
          <MinusIcon width="16" height="16" />
        </button>
      </span>

      <p className={styles.price}>${item.price}</p>
    </div>
  );
}
