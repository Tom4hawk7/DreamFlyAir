"use server";

import { sql } from "@/database";
import Flight from "@/types/Flight";

export async function GetFlights(
  location: string | undefined,
  destination: string | undefined,
  hasReturnFlight: boolean
) {
  "use server";

  const departingFlights = await sql`
    SELECT 
      flight_id AS id,
      source_airport_id AS location,
      destination_airport_id AS destination,
      departure_time AS departure,
      arrival_time AS arrival,
      plane_type_id AS plane,
      price AS price
    FROM flight_details
    WHERE source_airport_id = ${location}
    AND destination_airport_id = ${destination}
    LIMIT 4
  `;

  const returningFlights = hasReturnFlight
    ? await sql`
  SELECT 
      flight_id AS id,
      source_airport_id AS location,
      destination_airport_id AS destination,
      departure_time AS departure,
      arrival_time AS arrival,
      plane_type_id AS plane,
      price AS price
    FROM flight_details
    WHERE source_airport_id = ${destination}
    AND destination_airport_id = ${location}
    LIMIT 4
  `
    : undefined;

  return [departingFlights as Flight[], returningFlights as Flight[] | undefined];
}
