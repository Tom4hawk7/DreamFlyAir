"use server";

import { sql } from "@/database";
import Flight from "@/types/Flight";

// type FlightRecord = Flight | Record<string, any>

export async function getFeaturedFlights(): Promise<Flight[]> {
  const flights = await sql`
  SELECT 
    flight_id AS id,
    source_airport_id AS location,
    destination_airport_id AS destination,
    departure_time AS departure,
    arrival_time AS arrival,
    plane_type_id AS plane,
    price AS price
  FROM flight_details
  ORDER BY RANDOM()
  LIMIT 6
  `;

  return flights as Flight[];
}
