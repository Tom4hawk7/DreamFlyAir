  "use client";

import styles from "./page.module.css";

import { Card, Hero } from "@/components/ui";

// could get data from static folder
// and then just .map() the json array

export default function Help() {
  var isPlaying: boolean = false

  const kokomoClick = () => {
      if (!isPlaying) {
        const audio = new Audio('/sounds/kokomo.flac');
        audio.play();
        isPlaying = true;
      }
  };
  const faq = [
    {
      question: "Can I bring food on the plane?",
      answer: "Yes, you may bring food on board. However, please be mindful of customs restrictions on fresh produce and perishable items, especially when traveling internationally."
    },
    {
      question: "What should I do if I miss my flight?",
      answer: "If you miss your flight, we recommend contacting the airline or our customer support team as soon as possible. Depending on your fare conditions, you may be eligible for rebooking or a partial refund."
    },
    {
      question: "Do I need to print my ticket?",
      answer: "A printed ticket is not required in most cases. Airlines typically accept mobile boarding passes, which can be scanned directly from your phone at check-in and boarding."
    },
    {
      question: "Is there an additional cost for selecting a window seat?",
      answer: "Seat selection policies vary by airline. While some seats may be included in the base fare, others—such as window, aisle, or extra legroom options—may incur an additional charge during the booking process."
    },
    {
      question: "Is it true that flights are cheaper on Tuesdays?",
      answer: "While some data suggests that certain days of the week may offer better prices, flight fares fluctuate regularly based on demand and availability. We recommend booking early and using fare alerts to find the best deals."
    },
    {
      question: "Can I change the name on my ticket?",
      answer: "Minor name corrections are often allowed, but significant changes may require additional documentation and may be subject to fees. Please review your airline’s name change policy or contact support for assistance."
    },
    {
      question: "Which seats offer the most legroom?",
      answer: "Exit row and bulkhead seats typically offer more legroom than standard seats. Availability and eligibility requirements (such as physical ability to assist in an emergency) may apply."
    },
    {
      question: "Do infants require their own ticket?",
      answer: "Yes. Infants under 2 years of age must be included in the booking. They may travel on a parent’s lap for a reduced fare or, in some cases, with their own seat at a discounted rate, depending on the airline’s policy."
    },
    {
      question: "How good is the Wagyu burger?",
      answer: "Yes."
    }
  ];

  return (
    <main>
      <Hero src="/images/pietro.jpg" height="400px">
        <h1 className="heading">Frequently Asked Questions</h1>
        <Card className={styles.container}>
          <details className={styles.details} onClick={kokomoClick}>
            <summary className={styles.question}>Can I go to Kokomo?</summary>
            <video className={styles.kokomo} title="Kokomo" autoPlay muted loop>
              <source src="/videos/kokomo.mp4" type="video/mp4"/>
            </video>
            <p className={styles.answer}>We do not currently international flights, but we are working on it.</p>
          </details>
          {faq.map((question, index) => {
            return (
              <details className={styles.details} key={index}>
                <summary className={styles.question}>{question.question}</summary>
                <p className={styles.answer}>{question.answer}</p>
              </details>
            )
          })}
        </Card>
      </Hero>
    </main>
  );
}
