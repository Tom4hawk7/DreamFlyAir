import Passenger from "@/types/Passenger";
import styles from "./page.module.css";
import PassengerCard from "./Passenger";

// two different testing objects for different scenarios
const passengerUnkown: Array<Passenger> = [
  { id: 0, type: "Adult" },
  { id: 1, type: "Adult" },
  { id: 2, type: "Child" },
  { id: 3, type: "Child" },
  { id: 4, type: "Infant" },
  { id: 5, type: "Infant" },
];

const passengersKnown: Array<Passenger> = [
  { id: 0, type: "Adult", title: "Mr", firstName: "Thomas", lastName: "McGrath" },
  { id: 1, type: "Child", title: "Mr", firstName: "Sammy", lastName: "Junior" },
  { id: 2, type: "Infant", title: "Mr" },
  { id: 3, type: "Infant", title: "Mr" },
];

export default function Details() {
  const DATA = passengerUnkown;

  return (
    <section>
      <h1 className={styles.heading}>Booking Details</h1>
      <section className={styles.container}>
        {DATA.map((passenger, i) => (
          <PassengerCard key={i} passenger={passenger} num={i} />
        ))}
      </section>
      <div></div>
    </section>
  );
}
