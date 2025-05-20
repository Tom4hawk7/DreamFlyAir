"use client";

import { ChangeEvent, useState } from "react";
import styles from "./PassengerCard.module.css";
import Passenger from "@/types/Passenger";

interface PassengerCardProps {
  passenger: Passenger;
  num: number;
}

export default function PassengerCard({ passenger, num }: PassengerCardProps) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const header =
    firstName || lastName ? `${firstName} ${lastName}` : `${passenger.type} | Passenger: ${num}`;

  // helper function
  const genId = (name: string) => `${passenger.id}_${name}`;

  return (
    <div className={styles.container}>
      <details className={styles.details}>
        <summary>{header}</summary>

        <fieldset className={styles.fieldset}>
          <span className={styles.person}>
            <label htmlFor={genId("title")}>Title</label>
            <select name={genId("title")} id={genId("title")} defaultValue={passenger.title}>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
            </select>
          </span>

          <span className={styles.person}>
            <label htmlFor={genId("firstName")}>First Name</label>
            <input
              name={genId("firstName")}
              id={genId("firstName")}
              type="text"
              onChange={e => setFirstName(e.target.value)}
            />
          </span>

          <span className={styles.person}>
            <label htmlFor={genId("lastName")}>Last Name</label>
            <input
              name={genId("lastName")}
              id={genId("lastName")}
              type="text"
              onChange={e => setLastName(e.target.value)}
            />
          </span>

          <span className={styles.person}>
            <label htmlFor={genId("dob")}>Date of Birth</label>
            <input name={genId("dob")} id={genId("dob")} type="date" />
          </span>
        </fieldset>
      </details>
    </div>
  );
}

// helper function
const defineHeader = (passenger: Passenger, num: number) => {
  if (Object.hasOwn(passenger, "firstName")) {
    return `${passenger.firstName} ${passenger.lastName}`;
  } else {
    return passenger.type + ` | Passenger ${num}`;
  }
};
