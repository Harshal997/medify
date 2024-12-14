import React from 'react'
import faq from '../../assets/faq.png'
import download from '../../assets/downloadMedify.png'
import footer from '../../assets/footer.png'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <img className={styles.faq} src={faq} alt="faq" />
        <img className={styles.download} src={download} alt="download" />
        <img className={styles.footer} src={footer} alt="footer" />
    </div>
  )
}

export default Footer