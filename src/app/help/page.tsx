"use server";

import styles from "./page.module.css";

import { Card, Expand, Hero } from "@/components/ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";

// could get data from static folder
// and then just .map() the json array

export default async function Help() {
  return (
    <main>
      <Hero src="/images/pietro.jpg" height="400px">
        <h1 className="heading">Frequently Asked Questions</h1>
        <Card className={styles.container}>
          <Expand title="Question 1">
            <p>Answer to question 1.</p>
            <p>Some text down here</p>
          </Expand>

          <Expand title="Question 2">
            <p>Answer to question 2.</p>
            <p>Some text down here</p>
          </Expand>

          <Expand title="Question 3">
            <p>Answer to question 3.</p>
            <p>Some text down here</p>
          </Expand>

          <Expand title="Question 4">
            <p>Answer to question 4.</p>
            <p>Some text down here</p>
          </Expand>

          <Expand title="Question 5">
            <p>Answer to question 5.</p>
            <p>Some text down here</p>
          </Expand>

          <Expand title="Question 6">
            <p>Answer to question 6.</p>
            <p>Some text down here</p>
          </Expand>
        </Card>
      </Hero>
    </main>
  );
}
