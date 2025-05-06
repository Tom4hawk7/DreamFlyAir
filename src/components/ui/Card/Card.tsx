import styles from "./Card.module.css";

interface CardProps {
  className?: string;
  variant?: string;
  children: React.ReactNode;
}

export default function Card({ className = "", variant = "", children }: Readonly<CardProps>) {
  return <div className={`${styles.card} ${styles[variant]} ${className}`}>{children}</div>;
}
