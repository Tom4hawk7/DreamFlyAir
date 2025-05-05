import Form from "next/form";
import styles from "./page.module.css";

import { CalendarIcon, SewingPinFilledIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { CSSProperties } from "react";

import { Card, Hero } from "@/components/ui";
import { Increment, Select } from "@/components/form";

import Locations from "./options/Locations";
import Dates from "./options/Dates";

const magIcon = <SewingPinFilledIcon width="24px" height="24px" />;
const calIcon = <CalendarIcon width="24px" height="24px" />;

const layer: CSSProperties = {
  position: "relative",
};

export default function Home() {
  return (
    <main>
      <Hero src="/images/pietro.jpg" height="400px">
        <h1 className={styles.heading}>Your Destination Awaits</h1>
        <Card width="75%" margin="auto">
          {/* need to give the form a valid action now */}
          <Form action="post" className="form">
            <div className={styles.formRow}>
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
