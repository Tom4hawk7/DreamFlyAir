"use client";

import { MouseEventHandler, RefObject, useRef } from "react";

type IncrementProps = [RefObject<HTMLInputElement | null>, MouseEventHandler, MouseEventHandler];

export default function useIncrement(): IncrementProps {
  let ref = useRef<HTMLInputElement>(null);

  const increment: MouseEventHandler = () => ref.current?.stepUp();
  const decrement: MouseEventHandler = () => ref.current?.stepDown();

  return [ref, increment, decrement];
}
