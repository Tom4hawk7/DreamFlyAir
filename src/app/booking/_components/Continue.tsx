import Link from "next/link";
import styles from "./Continue.module.css";

interface ContinueProps {
  price: number;
  link?: string;
}

export default function Continue({ price, link = "" }: ContinueProps) {
  return (
    <div className={styles.finalSection}>
      Total: ${price}
      <Link href={link}>
        <button className={styles.continueButton}>Continue</button>
      </Link>
    </div>
  );
}
