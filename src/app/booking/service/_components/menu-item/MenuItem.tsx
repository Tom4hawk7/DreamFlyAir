"use client ";

import { ItemContext } from "Context";
import { use } from "react";
import { Item } from "@/types/Item";
import styles from "./MenuItem.module.css";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

interface MenuItemProps {
  name: string;
  price: number;
}

export default function MenuItem({ name, price }: MenuItemProps) {
  const setItems = use(ItemContext);

  function add(items: Item[]) {
    let inArray: boolean = false;

    const itemList = items.map(i => {
      if (i.name === name) {
        const newQuantity = i.quantity++;
        inArray = true;

        return { ...i, quantity: newQuantity };
      } else return i;
    });

    if (inArray === false) {
      const new_list = [...itemList, { name: name, price: price, quantity: 1 }];
      return new_list;
    } else return itemList;
  }

  function minus(items: Item[]) {
    let newQuantity: number = 0;

    const item_list = items.map(i => {
      if (i.name === name) {
        newQuantity = i.quantity--;
        return { ...i, quantity: newQuantity };
      } else return i;
    });

    if (newQuantity === 0) {
      const newList = item_list.filter(item => item.name != name);
      return newList;
    } else {
      return item_list;
    }
  }

  const increment = () => {
    setItems!(items => add(items));
  };

  const decrement = () => {
    setItems!(items => minus(items));
  };

  return (
    <div className={styles.container}>
      <p className={styles.heading}>{name}</p>

      <span className={styles.incrementers}>
        <button className={styles.counter} onClick={increment}>
          <PlusIcon width="16" height="16" />
        </button>
        <button className={styles.counter} onClick={decrement}>
          <MinusIcon width="16" height="16" />
        </button>
      </span>
      <p className={styles.tagPrice}>${price}</p>
    </div>
  );
}
