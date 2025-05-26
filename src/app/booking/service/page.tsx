"use client";

import { Item } from "@/types/Item";
import { ItemContext } from "@/context";
import ServiceItem from "./_components/service-item/ServiceItem";

import { useState } from "react";
import styles from "./page.module.css";
import MenuList from "./_components/menu-tab/MenuTab";
import Continue from "../_components/Continue";

export default function Services() {
  const [items, setItems] = useState<Item[]>([]);
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <section className={styles.main}>
        <section className={styles.padder}>
          <h1 className={styles.heading}>Departing Flight</h1>
          {items.map((item, i) => (
            <ServiceItem key={i} item={item} />
          ))}
        </section>

        <section className={styles.padder}>
          <ItemContext.Provider value={setItems}>
            <MenuList />
          </ItemContext.Provider>
        </section>
      </section>
      <Continue price={total} link="./detail" />
    </>
  );
}
