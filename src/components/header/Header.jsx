import React from "react";
import hero from "../../assets/doctor_hero_image.png";
import tag_hero from "../../assets/tag_hero.png";
import styles from "./header.module.css";
import { Navbar } from "../navbar/Navbar";

export const Header = () => {
  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <img src={tag_hero} alt="tag_hero" />
      <img src={hero} alt="hero" />
    </div>
    </>
  );
};
