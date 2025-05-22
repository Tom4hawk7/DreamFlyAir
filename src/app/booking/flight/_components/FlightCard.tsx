import Flight from "@/types/Flight";
// import { SelectedContext } from "@/context";
import { useEffect } from "react";
import styles from "./FlightCard.module.css";
import useBookingStore from "stores/bookingStore";

const MILLISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;

interface FlightCardProps {
  flight: Flight;
  type: 'returning' | 'departing';
}

const format = (date: Date) =>
  date.toLocaleString("en-GB", { dateStyle: "short", timeStyle: "short", hour12: true });

export default function FlightCard({ flight, type }: FlightCardProps) {
  // const [selected, handleSelected] = use(SelectedContext);

  const { departingFlightId, returningFlightId, setDepartingFlightId, setReturningFlightId } = useBookingStore();


  //logging for testing
  useEffect(() => {
    console.log("State updated - Departing:", departingFlightId, "Returning:", returningFlightId);
  }, [departingFlightId, returningFlightId])


  //check if card is selected
  const isSelected = type === 'departing' ? departingFlightId === flight.id : returningFlightId === flight.id;


  //time calculation
  const timeDiff = Math.abs(flight.departure.getTime() - flight.arrival.getTime());

  const hours = Math.floor(
    timeDiff / (MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR)
  );
  const minutes = Math.floor(
    ((timeDiff % (MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR)) /
      MILLISECONDS_IN_SECOND) *
    SECONDS_IN_MINUTE
  );

  const duration = `${hours}h ${minutes}m`;

  //handle clicking
  const handleFlightSelect = (flightId: string, type: 'returning' | 'departing') => {
    if (type === 'departing') {
      setDepartingFlightId(flightId);
    } else {
      setReturningFlightId(flightId);
    }
  }

  return (
    <div
      key={flight.id}
      className={`${styles.flightOptions} ${isSelected ? styles.selected : ""}`}
      onClick={() => handleFlightSelect(flight.id, type)}
    >
      <div className={styles.flightTimes}>
        <div className={styles.timeBadge}>
          {/* <span>{flight.departure.toLocaleString("en")}</span> */}
          <span>{format(flight.departure)}</span>
          <span className={styles.arrow}> › </span>
          <span>{format(flight.arrival)}</span>
        </div>
        <div className={styles.duration}>{duration}</div>
      </div>

      <div className={styles.flightDetail}>
        <div className={styles.airline}>
          <div className={styles.airlineLogo}>DF</div>
          <div className={styles.flightNumber}>DF 123</div>
        </div>
      </div>

      <div className={styles.flightPrice}>${flight.price}</div>
      <button className={styles.selectFlight}>Select Flight</button>
    </div>
  );
}
