import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span>
        <Link href="/">
          <Image src="/logo-small.png" alt="Logo" width="50" height="50" />
        </Link>
      </span>
      <span className={styles.container}>
        <Link href="">Help</Link>
        <Link href="">Bookings</Link>
        <Link href="">
          <button className={styles.loginBtn}>Login</button>
        </Link>
      </span>
    </nav>
  );
}
