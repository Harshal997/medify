import React from 'react';
import doctor_icon from "../../assets/doctor-icon.png"
import styles from './facility.module.css'

export const Facility = ({img, text}) => {
  return (
    <div className={styles.container}>
        <img src={img} alt="text" height={70} width={70} />
        <p className={styles.facilityText}>{text}</p>
    </div>
  )
}
