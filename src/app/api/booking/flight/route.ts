import { NextRequest } from "next/server";
import { sql } from "@/database";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // clean search params
  const location = searchParams.get("location");
  const destination = searchParams.get("destination");
  const hasReturn = Boolean(searchParams.get("hasReturnFlight"));

  // get data for departing and returning flights
  const departingFlights = await GetFlights(location, destination);
  const returningFlights = hasReturn ? await GetFlights(destination, location) : undefined;

  // return response
  return Response.json({
    departing: departingFlights,
    returning: returningFlights,
  });
}

async function GetFlights(start: string | null, finish: string | null) {
  const flights = await sql`
    SELECT 
      flight_id AS id,
      source_airport_id AS location,
      destination_airport_id AS destination,
      Date(departure_time) AS departure,
      Date(arrival_time) AS arrival,
      plane_type_id AS plane,
      price AS price
    FROM flight_details
    WHERE source_airport_id = ${start}
    AND destination_airport_id = ${finish}
    LIMIT 4
  `;

  return flights;
}
