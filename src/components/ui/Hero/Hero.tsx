import styles from "./Hero.module.css";
import { CSSProperties } from "react";

interface HeroProps {
  src: string;
  pos?: string;
  height?: string;
  children?: React.ReactNode;
}

export default function Hero({ src, pos = "0 50%", height = "500px", children }: HeroProps) {
  const style: CSSProperties = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${src})`,
    backgroundPosition: pos,
    height: height,
  };

  return (
    <div className={styles.hero} style={style}>
      {children}
    </div>
  );
}

interface HeroHeaderProps {
  children?: React.ReactNode;
}
