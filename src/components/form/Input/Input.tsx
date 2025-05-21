"use client";

import { useId } from "react";
import { InputContext } from "@/context";

import styles from "./Input.module.css";
import usePopover from "@/hooks/usePopover";

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Input({ name, label, placeholder, icon, children }: InputProps) {
  const [inputRef, popoverRef, setValue] = usePopover();
  const id = useId();

  return (
    <>
      <button className={styles.container} type="button" popoverTarget={id}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        <input
          id={name}
          name={name}
          ref={inputRef}
          className={styles.input}
          placeholder={placeholder}
          readOnly
        />
        {/* could supply icon as src  */}
        <span className={styles.icon}>{icon}</span>
      </button>

      <InputContext value={setValue}>
        <div id={id} ref={popoverRef} className={styles.content} popover="auto">
          {children}
        </div>
      </InputContext>
    </>
  );
}
