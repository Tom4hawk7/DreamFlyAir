import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>
        <Link href="/">
          <Image src="/logo-small.png" alt="Logo" width="40" height="40" />
        </Link>
      </span>
      <span className={styles.container}>
        <Link href="">Help</Link>
        <Link href="">Bookings</Link>
        <Link href="/login">
          <button className={styles.loginBtn}>Login</button>
        </Link>
      </span>
    </nav>
  );
}
