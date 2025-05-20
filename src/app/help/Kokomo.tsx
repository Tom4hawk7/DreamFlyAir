"use client";

import { useRef } from "react";
import styles from "./page.module.css";

export default function Kokomo() {
  let ref = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (ref.current?.paused) ref.current?.play();
    else ref.current?.pause();
  };

  return (
    <>
      <audio ref={ref}>
        <source src="/sounds/kokomo.flac" type="audio/flac" />
      </audio>

      <details className={styles.details} onClick={toggle}>
        <summary className={styles.question}>Can I go to Kokomo?</summary>
        <p className={styles.answer}>Not yet, we are working on it.</p>
      </details>
    </>
  );
}
