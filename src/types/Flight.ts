import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

type Flight = {
  id: string;
  location: string;
  destination: string;
  departure: Date;
  arrival: Date;
  plane: string;
  price: number;
};

export default Flight;
