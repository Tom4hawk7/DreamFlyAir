"use client";

import { RefObject, useRef } from "react";

type PopoverReturn = [
  RefObject<HTMLInputElement | null>,
  RefObject<HTMLDivElement | null>,
  (value: string) => void
];

export default function usePopover(): PopoverReturn {
  const inputRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const setValue = (value: string) => {
    inputRef.current!.value = value;
    popoverRef.current?.hidePopover();
  };

  return [inputRef, popoverRef, setValue];
}
