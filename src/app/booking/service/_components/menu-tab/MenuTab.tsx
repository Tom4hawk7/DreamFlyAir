"use client";

import MenuItem from "../menu-item/MenuItem";
import styles from "./MenuTab.module.css";
import { useState } from "react";

interface MenuGroup {
  name: string;
  items: Array<{
    name: string;
    price: number;
  }>;
}

interface Menu extends Array<MenuGroup> {}

export default function MenuTab() {
  const [menu, setMenu] = useState<Menu>(FOOD_MENU);
  // const changeMenu = (type: ItemType) => setItemMenu(MENU_ITEMS[type]);

  return (
    <section className={styles.container}>
      <div className={styles.tab}>
        <button type="button" onClick={() => setMenu(FOOD_MENU)}>
          Food
        </button>
        <button type="button" onClick={() => setMenu(BEVERAGE_MENU)}>
          Beverages
        </button>
        <button type="button" onClick={() => setMenu(EXTRA_MENU)}>
          Extras
        </button>
      </div>
      <div className={styles.list}>
        {menu.map(group => (
          <details key={group.name}>
            <summary>{group.name}</summary>
            {group.items.map(item => (
              <MenuItem key={item.name} name={item.name} price={item.price} />
            ))}
          </details>
        ))}
      </div>
    </section>
  );
}

const FOOD_MENU: Menu = [
  {
    name: "Burger",
    items: [
      {
        name: "Wagyu Steak",
        price: 5,
      },
      {
        name: "Ham & Cheese",
        price: 10,
      },
      {
        name: "Bacon & Egg",
        price: 15,
      },
    ],
  },
  {
    name: "Chips",
    items: [
      {
        name: "Thin cut",
        price: 12,
      },
      {
        name: "Thick cut",
        price: 15,
      },
      {
        name: "French Fries",
        price: 8,
      },
    ],
  },
];

const BEVERAGE_MENU: Menu = [
  {
    name: "Soft drink",
    items: [
      {
        name: "Coke",
        price: 7,
      },
    ],
  },
];

const EXTRA_MENU: Menu = [
  {
    name: "Soft drink",
    items: [
      {
        name: "Coke",
        price: 7,
      },
    ],
  },
];
