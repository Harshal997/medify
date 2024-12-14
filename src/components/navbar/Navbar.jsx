import React from 'react'
import logo from '../../assets/logo.png'
import styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.container}>
        <img src={logo} alt="" />
        <div className={styles.optionsContainer}>
        <p>Find Doctors</p>
        <p>Hospitals</p>
        <p>Medicines</p>
        <p>Surgeries</p>
        <p>Software for Provider</p>
        <p>Facilities</p>
        <button className={styles.myBookings}>My Bookings</button>
    </div>
    </div>
  )
}
