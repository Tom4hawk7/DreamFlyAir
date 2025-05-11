"use client";
import styles from "./flight.module.css";
import { useState } from "react";

export default function FlightPage(){
    interface Flight{
        id: String,
        startTime: String,
        finishTime: String,
        price: number
    }

    const [selectedDeparture, setSelectedDeparture] = useState<Flight | null>(null);
    const [selectedReturn, setSelectedReturn] = useState<Flight | null>(null);

    const handleSelectedDeparture = (flight:Flight) => {
        setSelectedDeparture(flight);
    }

    const handleSelectedReturn = (flight:Flight) => {
        setSelectedReturn(flight);
    }
    const departingFlights = [
        { id: "d1", startTime: "09:00", finishTime: "15:30", price: 299 },
        { id: "d2", startTime: "13:45", finishTime: "19:20", price: 329 }
    ]
    const returningFlights = [
        { id: "r1", startTime: "14:30", finishTime: "21:00", price: 289 },
        { id: "r2", startTime: "13:30", finishTime: "21:00", price: 259 }
      ];

    const totalPrice = (selectedDeparture ? selectedDeparture.price : 0) + (selectedReturn ? selectedReturn.price : 0);
    
    return(
        <div className={styles.pageContainer}>
            <div className={styles.flightSteps}>
                <div className={styles.step}><div className={styles.checkboxChecked}>✓</div>Flights</div>
                <div className={styles.step}><div className={styles.checkbox}></div>Baggage</div>
                <div className={styles.step}><div className={styles.checkbox}></div>Seats</div>
                <div className={styles.step}><div className={styles.checkbox}></div>Services</div>
                <div className={styles.step}><div className={styles.checkbox}></div>Details</div>
                <div className={styles.step}><div className={styles.checkbox}></div>Payment</div>
            </div>
            
            <h1 className={styles.heading}>Flights</h1>
            
            
            <section className={styles.flightSelection}>
                <h2 className={styles.heading2}>Departing Flights</h2>  
                {departingFlights.map(flight => {
                    // Calculate flight duration
                    const dummyDate = '2023-01-01';
                    const startDate = new Date(`${dummyDate}T${flight.startTime}:00`);
                    const finishDate = new Date(`${dummyDate}T${flight.finishTime}:00`);
                    const durationMs = finishDate.getTime() - startDate.getTime();
                    const hours = Math.floor(durationMs / (1000 * 60 * 60));
                    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
                    const duration = `${hours}h ${minutes}m`;

                    return(
                    <div key={flight.id} className={`${styles.flightOptions} ${selectedDeparture?.id === flight.id ? styles.selected : ''}`} onClick={() => handleSelectedDeparture(flight)}>

                        <div className={styles.flightTimes}>
                            <div className={styles.timeBadge}>
                                <span>{flight.startTime}</span>
                                <span className={styles.arrow}> › </span>
                                <span>{flight.finishTime}</span>
                                
                            </div>
                            <div className={styles.duration}>{duration}</div>
                        </div>

                        <div className={styles.flightDetail}>

                            <div className={styles.airline}>

                                <div className={styles.airlineLogo}>DF</div>
                                <div className={styles.flightNumber}>DF 123</div>

                            </div>

                        </div>

                        <div className={styles.flightPrice}>${flight.price}</div>
                        <button className={styles.selectFlight}>Select Flight</button>

                    </div>
                    );
                })}

                <h2 className={styles.heading2}>Returning Flights</h2>  
                {returningFlights.map(flight =>{
                    // Calculate flight duration
                    const dummyDate = '2023-01-01';
                    const startDate = new Date(`${dummyDate}T${flight.startTime}:00`);
                    const finishDate = new Date(`${dummyDate}T${flight.finishTime}:00`);
                    const durationMs = finishDate.getTime() - startDate.getTime();
                    const hours = Math.floor(durationMs / (1000 * 60 * 60));
                    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
                    const duration = `${hours}h ${minutes}m`;
                    return(
                    <div key={flight.id} className={`${styles.flightOptions} ${selectedReturn?.id === flight.id ? styles.selected : ''}`} onClick={() => handleSelectedReturn(flight)} >

                        <div className={styles.flightTimes}>
                            <div className={styles.timeBadge}>
                                <span>{flight.startTime}</span>
                                <span className={styles.arrow}> › </span>
                                <span>{flight.finishTime}</span>
                                
                            </div>
                            <div className={styles.duration}>{duration}</div>
                        </div>

                        <div className={styles.flightDetail}>

                            <div className={styles.airline}>

                                <div className={styles.airlineLogo}>DF</div>
                                <div className={styles.flightNumber}>DF 123</div>

                            </div>

                        </div>

                        <div className={styles.flightPrice}>${flight.price}</div>
                        <button className={styles.selectFlight}>Select Flight</button>

                    </div>
                    );
                })} 

                <div className={styles.finalSection}>
                    Total: ${totalPrice}
                    <button className={styles.continueButton}>Continue</button>
                </div>
                
            </section>
        </div>
    );
}