import React from 'react';
import styles from './facility.module.css'

export const Facility = ({img, text, search}) => {
  return (
    <div className={styles.container} style={{width: search && "15em", padding: search && 0, rowGap: search && 10}}>
        <img src={img} alt="text" height={70} width={70} />
        <p className={styles.facilityText}>{text}</p>
    </div>
  )
}
