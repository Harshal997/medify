import React from 'react'
import { Facility } from '../../shared/facility/Facility'
import styles from './specialization.module.css'
import dentisty from '../../assets/labs-icon.png' 
import primary_care from '../../assets/primary-care-icon.png' 
import cardiology from '../../assets/cardiology-icon.png' 
import mri_resonance from '../../assets/mri-icon.png' 
import blood_test from '../../assets/blood-test-icon.png' 
import piscologist from '../../assets/piscologist-icon.png' 
import laboratory from '../../assets/labs-icon.png' 
import x_ray from '../../assets/x-ray-icon.png' 


const facilites = [
    {id: 0, text: "Dentistry", img: dentisty},
    {id: 1, text: "Primary Care ", img: primary_care},
    {id: 2, text: "Cardiology", img: cardiology},
    {id: 3, text: "MRI Resonance", img: mri_resonance},
    {id: 4, text: "Blood Test", img: blood_test},
    {id: 5, text: "Piscologist", img: piscologist},
    {id: 6, text: "Laboratory", img: laboratory},
    {id: 7, text: "X-Ray", img: x_ray},
]

export const Section = () => {
  return (
    <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Find By Specialization</h1>
    <div className={styles.container}>
        {facilites.map((facility) => (
            <Facility key={facility.id} img={facility.img} text={facility.text}/>
        ))}
    </div>
    </div>
  )
}
