"use server";

import flightReviver from "@/utils/flightReviver";
const URL = "http://" + process.env.VERCEL_URL + "/api/booking/flight?";

export const fetcher = async (searchParams: URLSearchParams) => {
  const response = await fetch(URL + searchParams);
  const data = await response.text();
  return await JSON.parse(data, flightReviver);
};
