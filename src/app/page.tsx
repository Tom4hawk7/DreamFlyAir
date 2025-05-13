"use server";

import Form from "next/form";
import styles from "./page.module.css";

import { CalendarIcon, SewingPinFilledIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Card, Hero } from "@/components/ui";
import { Increment, Select } from "@/components/form";

import Locations from "./_options/Locations";
import Dates from "./_options/Dates";

const magIcon = <SewingPinFilledIcon width="24px" height="24px" />;
const calIcon = <CalendarIcon width="24px" height="24px" />;

export default async function Home() {
  return (
    <main>
      <Hero src="/images/pietro.jpg" height="400px">
        <h1 className="heading">Your Destination Awaits</h1>
        <Card className={styles.card}>
          <Form action="post" className={styles.form}>
            <div className={styles.formRow}>
              {/* Tom - need to look more into this at home */}
              {/* <select name="location_test" id="location_test">
                <option value="here">Here</option>
                <option value="there">There</option>
                <option value="where">Where</option>
                <option value="why">Why</option>
              </select> */}

              <Select name="location" label="From" icon={magIcon} placeholder="Current">
                <Locations />
              </Select>

              <Select name="destination" label="To" icon={magIcon} placeholder="Where?">
                <Locations />
              </Select>

              <Select name="date_range" label="Dates" icon={calIcon} placeholder="When?">
                <Dates />
              </Select>
            </div>

            <div className={styles.formRow}>
              <span className={styles.formRow}>
                <Increment name="adults" label="Adults" />
                <Increment name="children" label="Children" />
                <Increment name="infants" label="Infants" />
              </span>

              <span>
                <button className={styles.submit} type="submit">
                  <MagnifyingGlassIcon width="24px" height="24px" />
                </button>
              </span>
            </div>
          </Form>
        </Card>
      </Hero>
    </main>
  );
}
