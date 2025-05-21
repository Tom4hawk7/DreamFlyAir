import { Item } from "@/types/Item";
import styles from "./ServiceItem.module.css";

export default function ServiceItem({ item }: { item: Item }) {
  return (
    <div key={item.name} className={styles.container}>
      <p className={styles.name}>{item.name}</p>
      <p className={styles.quantity}>x{item.quantity}</p>
      <p className={styles.price}>${item.quantity * item.price}</p>
    </div>
  );
}
