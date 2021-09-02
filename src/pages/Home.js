import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BodyMain from "../components/BodyMain";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Main() {
  return (
    <>
      <Navbar />
      <Hero />
      <BodyMain />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Main;
