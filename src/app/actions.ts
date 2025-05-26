"use server";

import flightReviver from "@/utils/flightReviver";
import Flight from "@/types/Flight";
import Airport from "@/types/Airport";
import path from "path";

const URL = "http://" + process.env.VERCEL_URL + "/api";

export async function getFlights(): Promise<Array<Flight>> {
  const data = await fetch(URL, { cache: "force-cache" });
  const text = await data.text();

  return await JSON.parse(text, flightReviver);
}

export async function getAirports(): Promise<Array<Airport>> {
  const data = await fetch(URL + "/airport", { cache: "force-cache" });
  return await data.json();
}
