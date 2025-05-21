"use server";

import Form from "next/form";
import styles from "./page.module.css";

import { CalendarIcon, SewingPinFilledIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Increment, Select } from "@/components/form";
import { Deal } from "@/components/ui";
import Image from "next/image";
import Flight from "@/types/Flight";

import Locations from "./_options/Locations";
import Dates from "./_options/Dates";
import { getFeaturedFlights } from "./actions";

const magIcon = <SewingPinFilledIcon width="24px" height="24px" />;
const calIcon = <CalendarIcon width="24px" height="24px" />;

export default async function Home() {
  const flights = await getFeaturedFlights();

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Your Destination Awaits</h1>
      <Image
        className="background"
        src="/images/pietro.webp"
        alt=""
        width={3461}
        height={2306}
        priority
      />

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
          {flights.map(flight => (
            <Deal key={flight.id} flight={flight} />
          ))}
        </div>
      </section>
    </main>
  );
}
