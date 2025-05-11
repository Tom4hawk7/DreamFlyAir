"use server";

import styles from "./page.module.css";

import { Card, Hero } from "@/components/ui";

// could get data from static folder
// and then just .map() the json array

export default async function Help() {
  return (
    <main>
      <Hero src="/images/pietro.jpg" height="400px">
        <h1 className="heading">Frequently Asked Questions</h1>
        <Card className={styles.container}>
          <details>
            <summary>Question 1</summary>
            <p>Answer to question 1.</p>
            <p>Some text down here</p>
          </details>

          <details>
            <summary>Question 2</summary>
            <p>Answer to question 2.</p>
            <p>Some text down here</p>
          </details>

          <details>
            <summary>Question 3</summary>
            <p>Answer to question 3.</p>
            <p>Some text down here</p>
          </details>

          <details>
            <summary>Question 4</summary>
            <p>Answer to question 4.</p>
            <p>Some text down here</p>
          </details>

          <details>
            <summary>Question 5</summary>
            <p>Answer to question 5.</p>
            <p>Some text down here</p>
          </details>

          <details>
            <summary>Question 6</summary>
            <p>Answer to question 6.</p>
            <p>Some text down here</p>
          </details>
        </Card>
      </Hero>
    </main>
  );
}
