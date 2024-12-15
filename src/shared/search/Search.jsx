import React from 'react'
import styles from './search.module.css'
import { Facility } from '../facility/Facility'
import doctor_icon from '../../assets/doctor-icon.png'
import labs_icon from '../../assets/labs-icon.png'
import hospital_icon from '../../assets/hospital-icon.png'
import medical_store_icon from '../../assets/medical-store-icon.png'
import ambulance_icon from '../../assets/ambulance-icon.png'

const facilites = [
    {id: 0, text: "Doctors", img: doctor_icon},
    {id: 1, text: "Labs ", img: labs_icon},
    {id: 2, text: "Hospitals", img: hospital_icon},
    {id: 3, text: "Medical Store", img: medical_store_icon},
    {id: 4, text: "Ambulance", img: ambulance_icon},
]

const Search = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inputs}>
            <input className={styles.input} type="text" name="" id="" placeholder='State' />
            <input className={styles.input} type="text" name="" id="" placeholder='City' />
            <button className={styles.searchButton}>Search</button>
        </div>
        <h1 className={styles.heading}>You may be looking for</h1>
        <div className={styles.serviceContainer}>
                {facilites.map((facility) => (
                    <Facility search={true} key={facility.id} img={facility.img} text={facility.text}/>
                ))}
            </div>
    </div>
  )
}

export default Search