"use client";

import { Card } from "@/components/ui";
import { MenuItem } from "@/components/form";

import { Item } from "@/types/Item";
import { ItemContext } from "@/context";

import { useState } from "react";
import styles from "./page.module.css";

// test data
// const itemList: Item[] = [
//   {
//     name: "Wagyu Steak",
//     quantity: 0,
//     price: 5,
//   },
//   {
//     name: "10",
//     quantity: 0,
//     price: 10,
//   },
// ];

export default function Services() {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <ItemContext.Provider value={setItems}>
      <section className={styles.main}>
        <section>
          <h1>Departing Flight</h1>
          {items.map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: "24px" }}>
              <p>Name {item.name}</p>
              <p>Total Price: {item.price * item.quantity}</p>
              <p>Quantity {item.quantity}</p>
            </div>
          ))}
        </section>

        <section>
          <Card className={styles.tab}>
            <button type="button">Food</button>
            <button type="button">Beverages</button>
            <button type="button">Extras</button>
          </Card>

          <div className={styles.list}>
            <details>
              <summary>Burgers</summary>
              <MenuItem name="Wagyu steak" price={5} />
              <MenuItem name="Ham sandwich" price={10} />
            </details>

            <details>
              <summary>Fries</summary>
              <MenuItem name="Thin cut" price={5} />
              <MenuItem name="Thick cut" price={6} />
            </details>

            <details>
              <summary>Confectionary</summary>
              <p>Chocolate</p>
            </details>

            <details>
              <summary>Tasty</summary>
              <p>Idk</p>
            </details>
          </div>
        </section>
      </section>
    </ItemContext.Provider>
  );
}
