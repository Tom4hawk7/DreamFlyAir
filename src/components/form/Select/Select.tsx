"use client";

import { useRef } from "react";
import styles from "./Select.module.css";
import { DialogContext } from "Context";
import { read } from "node:fs";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

// perhaps put the input in as a child
// label
// default value
// icon

// input should just be type text
// onClick it should pop up a the dialog
// that should be what the child is

// need to make the text inside the input non-editable by the user
// play with the readOnly option for the input

// could use a context for the ref

export default function Select({ label, name, icon, placeholder, children }: InputProps) {
  let refSelect = useRef<HTMLInputElement>(null);
  let refDialog = useRef<HTMLDialogElement>(null);

  const open = () => refDialog.current?.show();
  const close = () => (refSelect.current!.value = refDialog.current!.returnValue);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} onClick={open}>
        <span className={styles.section}>
          <label tabIndex={0} className={styles.label} htmlFor={name}>
            {label}
          </label>
          <input
            readOnly
            placeholder={placeholder}
            className={styles.input}
            ref={refSelect}
            id={name}
            name={name}
            type="text"
          />
        </span>
        <span className={styles.icon}>{icon}</span>
      </div>
      <span>
        <DialogContext.Provider value={refDialog}>
          <dialog
            onBlur={() => refDialog.current?.close()}
            className={styles.dialog}
            onClose={close}
            ref={refDialog}
          >
            {children}
          </dialog>
        </DialogContext.Provider>
      </span>
    </div>
  );
}
