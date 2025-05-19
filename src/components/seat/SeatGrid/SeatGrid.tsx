"use client";
import React from "react";
import { useState } from "react";
import styles from "./SeatTest.module.css";

export type SeatInfo = {
    id: string;
    price: number;
    type: 'Economy' | 'Business' | 'First Class';
    status: 'Confirmed' | 'Selected' | 'Booked';
}

type SeatMapProps = {
    seats: SeatInfo[];
    onSeatSelect: (seatId: string) => void;
}

const SeatSelection: React.FC<SeatMapProps> = ({ seats, onSeatSelect}) => {
    const renderSeatMap = () => {
        //group by row
        const seatsByRow: { [key: string]: SeatInfo[] } = {};

        seats.forEach(seat => {
            //turn '1A' -> '1'
            const rowNum = seat.id.replace(/[A-F]/g, '');

            if (!seatsByRow[rowNum]) {
                seatsByRow[rowNum] = [];
            }

            seatsByRow[rowNum].push(seat);
        });

        Object.values(seatsByRow).forEach(rowSeats => {
            rowSeats.sort((a, b) => {
                const firstLetter = a.id.slice(-1);
                const secondLetter = b.id.slice(-1);
                return firstLetter.localeCompare(secondLetter);
            })
        });

        return Object.keys(seatsByRow).map(rowNum => {
            const rowSeats = seatsByRow[rowNum];

            // Split seats into left and right groups
            const leftSeats = rowSeats.filter(seat =>
                seat.id.endsWith('A') || seat.id.endsWith('B') || seat.id.endsWith('C')
            );

            const rightSeats = rowSeats.filter(seat =>
                seat.id.endsWith('D') || seat.id.endsWith('E') || seat.id.endsWith('F')
            );

            //create elements for each seat
            const createSeatElement = (seat: SeatInfo) => {
                // determine css based on type and status
                let seatClassName = styles.seat;
            
                if (seat.status === 'Booked') {
                    seatClassName = `${seatClassName} ${styles.seatBooked}`;
                } else if (seat.status === 'Selected') {
                    seatClassName = `${seatClassName} ${styles.seatSelected}`;
                } else if (seat.type === 'Business') {
                    seatClassName = `${seatClassName} ${styles.seatBusiness}`;
                } else if (seat.type === 'First Class') {
                    seatClassName = `${seatClassName} ${styles.seatFirstClass}`;
                } else {
                    seatClassName = `${seatClassName} ${styles.seatEconomy}`;
                }

                return (
                    <div 
                        key={seat.id} 
                        className={seatClassName} 
                        onClick={() => onSeatSelect(seat.id)}
                    >
                        {seat.id}
                    </div>
                );
            };

            return (
                <div key={`row-${rowNum}`} className={styles.row}>
                    <div className={styles.rowNumber}>{rowNum}</div>
                    <div className={styles.seats}>
                        {/* Left group (ABC) */}
                        {leftSeats.map(createSeatElement)}

                        {/* Aisle */}
                        <div className={styles.aisle}></div>

                        {/* Right group (DEF) */}
                        {rightSeats.map(createSeatElement)}
                    </div>
                </div>
            );
        });
    };





    return (

        <div className={styles.seatGrid}>
            {renderSeatMap()}
        </div>

    )
}

export default SeatSelection;