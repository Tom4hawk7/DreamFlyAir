import { CSSProperties } from "react";
import styles from "./Card.module.css";

interface CardProps {
  variant?: string;
  width?: string;
  margin?: string;
  radius?: string;
  pad?: string;
  children: React.ReactNode;
}

// should probably just make a style prop or turn it into a variant

export default function Card({
  variant = "",
  width = "100%",
  margin = "0",
  radius = "16px",
  pad = "16px",
  children,
}: Readonly<CardProps>) {
  const style: CSSProperties = {
    width: width,
    margin: margin,
    borderRadius: radius,
    padding: pad,
  };

  return (
    <div style={style} className={`${styles.card} ${styles[variant]}`}>
      {children}
    </div>
  );
}
