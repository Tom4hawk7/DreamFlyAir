"use server";

import { sql } from "@/database";
import { useGlobalStore } from "@/store";
import Flight from "@/types/Flight";

// type FlightRecord = Flight | Record<string, any>
const AIRPORT_ID_LENGTH = 3;

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

// export async function FindFlights(formData: FormData) {
//   // formData cleaning
//   const location = formData.get("location")?.slice(-AIRPORT_ID_LENGTH);
//   const destination = formData.get("destination")?.slice(-AIRPORT_ID_LENGTH);

//   const hasReturnFlight = Boolean(formData.get("hasReturnFlight"));
//   useGlobalStore(state => state.setHasReturnFlight(hasReturnFlight));
//   //
//   // const sql`
//   // SELECT

//   // `;
// }

// export async function FindFlights(formData: FormData) {
//   // formData cleaning
//   const location = formData.get("location")?.slice(-AIRPORT_ID_LENGTH);
//   const destination = formData.get("destination")?.slice(-AIRPORT_ID_LENGTH);

//   const hasReturnFlight = Boolean(formData.get("hasReturnFlight"));
//   //
//   // const sql`
//   // SELECT

//   // `;
// }

// get last three letters of string
//

// location: Newcastle - Port Stephens - NTL    |    Type: string
// destination: Gold Coast - OOL    |    Type: string
// hasReturnFlight: true    |    Type: string
// startDate: 2025-05-12    |    Type: string
// endDate: 2025-05-14    |    Type: string
// adults: 2    |    Type: string
// children: 1    |    Type: string
// infants: 2    |    Type: string
