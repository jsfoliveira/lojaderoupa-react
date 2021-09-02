import React from "react";
import Navbar from "../../components/Navbar";
import SouCliente from "../../components/SouCliente";
import Footer from "../../components/Footer";

function Acessar() {
  return (
    <div className="AcessarPage">
      <Navbar />
      <SouCliente />
      <Footer />
    </div>
  );
}

export default Acessar;
