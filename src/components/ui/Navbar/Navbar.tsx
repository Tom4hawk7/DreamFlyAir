import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>
        <Link href="/">DreamFlyAir</Link>
      </span>
      {/* This links are just for testing */}
      <span className={styles.container}>
        <Link href="">Flights</Link>
        <Link href="">Baggage</Link>
        <Link href="">Seats</Link>
        <Link href="/services">Services</Link>
        <Link href="">Details</Link>
        {/* <Link href="">Payment</Link>
        <Link href="">Pass</Link> */}
      </span>
      <span className={styles.container}>
        <Link href="">Booking</Link>
        <Link href="/help">Help</Link>
      </span>
    </nav>
  );
}
