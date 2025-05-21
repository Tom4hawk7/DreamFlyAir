import Passenger from "@/types/Passenger";
import styles from "./page.module.css";
import PassengerCard from "./Passenger";
import Continue from "../_components/Continue";

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
  const total = 0;
  const DATA = passengerUnkown;

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Booking Details</h1>
          {DATA.map((passenger, i) => (
            <PassengerCard key={i} passenger={passenger} num={i} />
          ))}
        </div>
        <div>
          <h1 className={styles.heading}>Contact Information</h1>
          {/* <label htmlFor=""></label> */}
          {/* <input type="text" /> */}
        </div>
      </section>
      <Continue price={total} />
    </>
  );
}
