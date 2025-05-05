"use client";

import { use } from "react";
import styles from "./Option.module.css";
import { DialogContext } from "Context";

interface OptionProps {
  header: string;
  caption: string;
  value?: string;
}

// could make an option list component perhaps

export default function Option({ header, caption, value = header }: OptionProps) {
  const ref = use(DialogContext);
  const handleClick = (value: string) => ref?.current?.close(value);

  return (
    <div className={styles.container} onClick={() => handleClick(value)}>
      <p className={styles.header}>{header}</p>
      <p className={styles.caption}>{caption}</p>
    </div>
  );
}
