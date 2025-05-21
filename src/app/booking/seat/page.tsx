import styles from "./seat.module.css";
import SeatBooking from "components/seat/SeatBooking";

export default function SeatPage() {
  // Pre-determined booked seats that are unavailable
  const bookedSeats = ["1A", "1F", "3C", "3D", "5A", "5B", "7E", "7F", "9B", "9E"];

  //add this later
  const start = "Sydney";
  const end = "Perth";

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Seat Selection</h1>
      <div className={styles.flightDetails}>
        <p>
          Flight: FD123 • {start} (SYD) → {end} (PE) • May 20, 2025 • 09:45
        </p>
      </div>
      <div className={styles.flightInfo}>
        <span className={styles.seats}>
          <span className={styles.firstClass}></span>First Class $49.99
        </span>
        <span className={styles.seats}>
          <span className={styles.business}></span>Business $39.99
        </span>
        <span className={styles.seats}>
          <span className={styles.economy}></span>Economy $29.99
        </span>
        <span className={styles.seats}>
          <span className={styles.selected}></span>Selected
        </span>
        <span className={styles.seats}>
          <span className={styles.unavailable}></span>Unavailable
        </span>
      </div>

      <SeatBooking rows={30} bookedSeats={bookedSeats} />
    </section>
  );
}
