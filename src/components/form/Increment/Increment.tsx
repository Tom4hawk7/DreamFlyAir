"use client";

import useIncrement from "@/hooks/useIncrement";
import styles from "./Increment.module.css";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";
import { useRef } from "react";

interface IncrementProps {
  name: string;
  label: string;
}

export default function Increment({ name, label }: IncrementProps) {
  let [ref, increment, decrement] = useIncrement();
  // let ref = useRef<HTMLInputElement>(null);

  // const increment = () => ref.current?.stepUp();
  // const decrement = () => ref.current?.stepDown();

  // will use icons for plus and minus icons later

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>

      <span className={styles.container}>
        <button type="button" className={styles.btn} onClick={decrement}>
          <MinusIcon width="16px" height="16px" />
        </button>
        <input
          className={styles.counter}
          id={name}
          name={name}
          ref={ref}
          defaultValue="0"
          type="number"
          min="0"
          step="1"
        />
        <button type="button" className={styles.btn} onClick={increment}>
          <PlusIcon width="16px" height="16px" />
        </button>
      </span>
    </div>
  );
}
