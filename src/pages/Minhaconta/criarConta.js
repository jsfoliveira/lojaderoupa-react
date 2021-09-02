import React from "react";
import Navbar from "../../components/Navbar";
import CriarConta from "../../components/CriarConta";
import Footer from "../../components/Footer";

function criarConta() {
  return (
    <div className="criarContaPage">
      <Navbar />
      <CriarConta />
      <Footer />
    </div>
  );
}

export default criarConta;
