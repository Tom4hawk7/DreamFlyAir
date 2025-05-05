"use client";

import { createContext } from "react";

interface RefObject<T> {
  current: T;
}

export const DialogContext = createContext<React.RefObject<HTMLDialogElement | null> | null>(null);
