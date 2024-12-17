import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    selected === "Find Doctors" && navigate('/find');
  },[selected])

  return (
    <div className={styles.container}>
      <img src={logo} alt="Medify" style={{cursor: 'pointer'}} onClick={() => navigate('/')} />
      <div className={styles.optionsContainer}>
          {[
            "Find Doctors",
            "Hospitals",
            "Medicines",
            "Surgeries",
            "Software for Provider",
            "Facilities",
          ].map((text) => (
            <p
              key={text}
              onClick={() => setSelected(text)}
              style={{
                color: selected === text ? "#2AA7FF" : "black"
              }}
            >
              {text}
            </p>
          ))}
        <button onClick={() => navigate('/bookings')} className={styles.myBookings}>My Bookings</button>
      </div>
    </div>
  );
};
