import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { CSSProperties } from "react";
import Form from "next/form";

const layer: CSSProperties = {
  position: "relative",
};

export default function Home() {
  return (
    <main>
      <Hero src="/pietro.jpg">Your Destination Awaits</Hero>
      <Card variant="hero">
        <Form action="post">
          {/* assign values from specialised components to hidden inputs for submitting formData */}

          <div>
            {/* this will need to be a <select> option later*/}
            <label htmlFor="location">From</label>
            <input id="location" name="location" type="text" />

            {/* this will need to be a <select> option later */}
            <label htmlFor="destination">To</label>
            <input id="destination" name="destination" type="text" />

            {/* this will need to be a date range picker later */}
            <label htmlFor="date_range">Date Range</label>
            <input id="date_range" name="date_range" type="date" />
          </div>
          <div>
            {/* this will need to be changed later */}
            <label htmlFor="adults">Adults</label>
            <input id="adults" name="adults" type="number" />

            {/* this will need to be changed later */}
            <label htmlFor="children">Children</label>
            <input id="children" name="children" type="number" />

            {/* this will need to be changed later */}
            <label htmlFor="infants">Infants</label>
            <input id="infants" name="infants" type="number" />
          </div>
        </Form>
      </Card>
    </main>
  );
}
