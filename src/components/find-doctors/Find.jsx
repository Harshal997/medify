import React, { useState } from "react";
import Footer from "../footer/Footer";
import styles from "./find.module.css";
import { Navbar } from "../navbar/Navbar";

const Find = () => {
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
  return (
    <div>
      <div className={styles.navBackground}>
      <div className={styles.navContainer}>
        <Navbar />
      </div>
      </div>
      <div className={styles.inputs}>
        <input
          className={styles.input}
          type="text"
          name=""
          id=""
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="State"
        />
        <input
          className={styles.input}
          type="text"
          name=""
          id=""
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
        <button className={styles.searchButton}>Search</button>
      </div>
      <Footer />
    </div>
  );
};

export default Find;
