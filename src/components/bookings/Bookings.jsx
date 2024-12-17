import React, { useState } from "react";
import { Header } from "../header/Header";
import Footer from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import styles from "./bookings.module.css";
import Hospital from "../../shared/hospital/Hospital";

const Bookings = () => {
    const [bookings, setBookings] = useState(() => {
        return localStorage.getItem("bookings") ? JSON.parse(localStorage.getItem("bookings")) : [];
    })
  return (
    <div>
      <div className={styles.navBackground}>
        <div className={styles.navContainer}>
          <Navbar />
        </div>
        <p className={styles.navText}>My Bookings</p>
      </div>
      <div className={styles.bookingsContainer}>
        {bookings && bookings.length && bookings.map((booking) => (
            <Hospital data={booking} booking={true}/>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Bookings;
