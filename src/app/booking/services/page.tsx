import { Card } from "@/components/ui";
import styles from "./page.module.css";

export default function Services() {
  return (
    <main className={styles.main}>
      {/* I'll leave this for the form nav component */}
      {/* this component should be layered ontop */}
      {/* <header></header> */}

      {/* Sections will split the page up into columns */}
      <section>
        <h1>Departing Flight</h1>
        {/* could semantically call this a nav */}
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
            <p>Wagyu steak</p>
          </details>

          <details>
            <summary>Fries</summary>
            <p>Crisp cut</p>
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
    </main>
  );
}
