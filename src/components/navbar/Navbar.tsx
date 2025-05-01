import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span>
        <Link href="/">Logo</Link>
      </span>
      <span className={styles.container}>
        <Link href="">Help</Link>
        <Link href="">Bookings</Link>
        <Link href="">Login</Link>
      </span>
    </nav>
  );
}
