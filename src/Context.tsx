"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { Item } from "./types/Item";
import { BaggageItem } from "./types/Baggage";
import Flight from "./types/Flight";

export const DialogContext = createContext<React.RefObject<HTMLDialogElement | null> | null>(null);
export const ItemContext = createContext<Dispatch<SetStateAction<Item[]>> | null>(null);
export const BaggageContext = createContext<Dispatch<SetStateAction<BaggageItem[]>> | null>(null);
export const SelectedContext = createContext<any>(null);
