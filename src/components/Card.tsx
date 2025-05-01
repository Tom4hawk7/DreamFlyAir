import styles from "@/styles/Card.module.css";

interface CardProps {
  variant?: string;
  children: React.ReactNode;
}

export default function Card({ variant = "", children }: Readonly<CardProps>) {
  return <div className={`${styles.card} ${styles[variant]}`}>{children}</div>;
}
