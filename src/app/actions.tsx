"use server";

// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";
const sql = neon(
  `postgresql://neondb_owner:npg_wyu7Nadq4lRP@ep-shiny-pine-a731yr8u-pooler.ap-southeast-2.aws.neon.tech/neondb?sslmode=require`
);

export async function getData() {
  // need to limit how many you get
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
  `;
}
