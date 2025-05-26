"use server";

import { Option } from "@/components/form";
import { sql } from "@/database";
import Airport from "@/types/Airport";

async function getAirports() {
  const airports = await sql`
      SELECT airport_id AS id, city, country
      FROM Airports
      WHERE country = 'Australia'`;

  return airports as Airport[];
}

export default async function Airports() {
  const airports = await getAirports();

  return (
    <>
      {airports.map(airport => (
        <Option
          key={airport.id}
          header={`${airport.city} - ${airport.id}`}
          caption={airport.country}
          value={airport.id}
        />
      ))}
    </>
  );
}
