import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import styles from "./find.module.css";
import { Navbar } from "../navbar/Navbar";
import {
  getAllStates,
  getCentersByStatesAndCities,
  getCitiesByState,
} from "../../api";
import Hospital from "../../shared/hospital/Hospital";

const Find = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  const handleSearch = async () => {
    if (state && city) {
      const response = await getCentersByStatesAndCities(state, city);
      setHospitals(response);
    }
  };

  useEffect(() => {
    const getCities = async () => {
      const response = await getCitiesByState(state);
      setCities(response);
    };
    state && getCities();
  }, [state]);

  useEffect(() => {
    const getStates = async () => {
      const states = await getAllStates();
      setStates(states);
    };
    getStates();
  }, []);

  return (
    <div>
      <div className={styles.navBackground}>
        <div className={styles.navContainer}>
          <Navbar />
        </div>
      </div>
      <div className={styles.inputs}>
        <select
          name="cities"
          id=""
          onChange={(e) => setState(e.target.value)}
          className={styles.select}
        >
          <option value="State" disabled selected>
            State
          </option>
          {states &&
            states.length &&
            states.map((state) => <option value={state}>{state}</option>)}
        </select>
        <select
          name="cities"
          id=""
          onChange={(e) => setCity(e.target.value)}
          className={styles.select}
        >
          <option value="City" disabled selected>
            City
          </option>
          {cities &&
            cities.length &&
            cities.map((city) => <option value={city}>{city}</option>)}
        </select>
        <button onClick={handleSearch} className={styles.searchButton}>
          Search
        </button>
      </div>
      <div className={styles.hospitalDetails}>
        <h6>{hospitals.length} medical centers available in {city}</h6>
        <p>Book appointments with minimum wait-time & verified doctor details</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1em",
        }}
      >
        {hospitals &&
          hospitals.length &&
          hospitals.map((hospital) => <Hospital data={hospital} />)}
      </div>
      <Footer />
    </div>
  );
};

export default Find;
