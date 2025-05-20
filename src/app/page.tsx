"use server";

import Form from "next/form";
import styles from "./page.module.css";

import { CalendarIcon, SewingPinFilledIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Card, Deal, Hero } from "@/components/ui";
import Image from "next/image";
import { Increment, Select } from "@/components/form";
import Flight from "@/types/Flight";

import Locations from "./_options/Locations";
import Dates from "./_options/Dates";
import { getData } from "./actions";

const featuredFlights: Array<Flight> = [
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

const magIcon = <SewingPinFilledIcon width="24px" height="24px" />;
const calIcon = <CalendarIcon width="24px" height="24px" />;

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Your Destination Awaits</h1>
      <Image className="background" src="/images/pietro.jpg" alt="" width={5979} height={3986} />

      <div className={styles.card}>
        {/* <button onClick={getData}>Test</button> */}
        <Form action="post" className={styles.form}>
          <div className={styles.formRow}>
            <Select name="location" label="From" icon={magIcon} placeholder="Current">
              <Locations />
            </Select>

            <Select name="destination" label="To" icon={magIcon} placeholder="Where?">
              <Locations />
            </Select>

            <Select name="departure" label="Departure Date" icon={calIcon} placeholder="When?">
              <Dates />
            </Select>
          </div>

          <div className={styles.itemRow}>
            <span className={styles.itemRow}>
              <Increment name="adults" label="Adults" />
              <Increment name="children" label="Children" />
              <Increment name="infants" label="Infants" />
            </span>

            <button className={styles.submit} type="submit">
              <MagnifyingGlassIcon width="24px" height="24px" />
            </button>
          </div>
        </Form>
      </div>

      <section className={styles.featuredContainer}>
        <h2 className={styles.featuredHeading}>Featured deals</h2>
        <div className={styles.featured}>
          {featuredFlights.map(flight => (
            <Deal key={flight.id} flight={flight} />
          ))}
        </div>
      </section>
    </main>
  );
}
