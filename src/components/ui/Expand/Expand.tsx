"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronDownIcon } from "@radix-ui/react-icons";
// could also rotate the chevron using css

import styles from "./Expand.module.css";

interface ExpandProps {
  title: string;
  children: React.ReactNode;
}

export default function Expand({ title, children }: ExpandProps) {
  const [visible, setVisible] = useState(false);
  const active = visible ? styles.active : "";

  const toggle = () => setVisible(!visible);

  return (
    <div className={styles.container}>
      <span className={`${styles.header} ${active}`}>
        <p>{title}</p>
        <button className={`${styles.button} ${active}`} type="button" onClick={toggle}>
          <ChevronLeftIcon width="16px" height="16px" className={`${styles.icon} ${active}`} />
        </button>
      </span>
      {visible && <div className={styles.content}>{children}</div>}
    </div>
  );
}
