import styles from "./Deal.module.css";
import Flight from "@/types/Flight";

// use display grid for this
const CONVERSION_UNIT = 10;
const saleDuration = Math.ceil(Math.random() * CONVERSION_UNIT);

export default function Deal({ flight }: { flight: Flight }) {
  return (
    <div className={styles.container}>
      <span className={styles.upper}>
        <p className={styles.location}>From {flight.location}</p>
        <p className={styles.destination}>To {flight.destination}</p>
        <p className={styles.priceLabel}>From</p>
        <p className={styles.price}>${flight.price}</p>
      </span>
      <span className={styles.lower}>
        <p className={styles.dateRange}>
          {flight.departure.toLocaleDateString("en")}
          {" > "}
          {flight.arrival.toLocaleDateString("en")}
        </p>
        <p>{saleDuration} Days left</p>
      </span>
    </div>
  );
}
