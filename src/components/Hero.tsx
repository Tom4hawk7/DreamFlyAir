import styles from "@/styles/Hero.module.css";
import { CSSProperties } from "react";

interface HeroProps {
  src: string;
  pos?: string;
  children?: React.ReactNode;
}

export default function Hero({ src, pos = "0 50%", children }: HeroProps) {
  const style: CSSProperties = {
    backgroundImage: `url(${src})`,
    backgroundPosition: pos,
  };

  return (
    <div className={styles.hero} style={style}>
      <span className={styles.header}>
        <h1>{children}</h1>
      </span>
    </div>
  );
}
