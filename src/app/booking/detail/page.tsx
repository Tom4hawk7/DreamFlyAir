import styles from "./page.module.css";

// const passengerList = []

export default function Details() {
  return (
    <section>
      <h1 className={styles.heading}>Booking Details</h1>
      <section className={styles.container}>
        <Passenger heading="Adult  1" />
        <Passenger heading="Adult  2" />
        <Passenger heading="Child  1" />
        <Passenger heading="Adult  2" />
        <Passenger heading="Adult  1" />
      </section>
      {/* <div className={styles.passenger}>
        <details className={styles.details}>
          <summary>Adult passenger 1</summary>
          <fieldset>
            <label htmlFor="title">Title</label>
            <select name="title" id="title">
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
            </select>

            <label htmlFor="firstName">First Name</label>
            <input name="firstName" id="firstName" type="text" />

            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" id="lastName" type="text" />

            <label htmlFor="birthDate">Date of Birth</label>
            <input name="birthDate" id="birthDate" type="date" />
          </fieldset>
        </details>
      </div> */}
    </section>
  );
}

function Passenger({ heading }: { heading: string }) {
  return (
    <div className={styles.passenger}>
      <details className={styles.details}>
        <summary>{heading}</summary>

        <fieldset className={styles.fieldset}>
          <span>
            <label htmlFor="title">Title</label>
            <select name="title" id="title">
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
            </select>
          </span>

          <span>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" id="firstName" type="text" />
          </span>

          <span>
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" id="lastName" type="text" />
          </span>

          <span>
            <label htmlFor="birthDate">Date of Birth</label>
            <input name="birthDate" id="birthDate" type="date" />
          </span>
        </fieldset>
      </details>
    </div>
  );
}
