import React from "react";
import { Header } from "../header/Header";
import { Section } from "../specialization-section/Section";
import Hospital from "../../shared/hospital/Hospital";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Section />
      <Footer />
      {/* <Hospital /> */}
    </div>
  );
};

export default Home;
