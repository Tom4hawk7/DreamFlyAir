"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { Item } from "./types/Item";

// may get rid of this one later when better select components are made

interface RefObject<T> {
  current: T;
}

export const DialogContext = createContext<React.RefObject<HTMLDialogElement | null> | null>(null);

// keep this though

// export const ItemContext = createContext<Dispatch<SetStateAction<Item[]>> | null>(null);
export const ItemContext = createContext<Dispatch<SetStateAction<Item[]>> | null>(null);
// export const ItemContext = createContext<Dispatch<SetStateAction<Map<any, any>> | null>(null);

// 'Dispatch<SetStateAction<Map<any, any>>>'
