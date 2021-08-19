import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TrocarDevolver from "../../components/TrocarDevolver";

function devolverTrocar() {
  return (
    <div>
      <Navbar />
      <TrocarDevolver />
      <Footer />
    </div>
  );
}

export default devolverTrocar;
