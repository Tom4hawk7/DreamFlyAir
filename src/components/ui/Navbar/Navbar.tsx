import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>
        <Link href="/">DreamFlyAir</Link>
      </span>
      <span className={styles.container}>
        <Link href="">Booking</Link>
        <Link href="">Help</Link>
      </span>
    </nav>
  );
}
