import React from "react";
import Navbar from "../../components/Navbar";
import TittlePromocao from "../../components/TittlePromocao";
import Products1 from "../../components/Products1";
import Products2 from "../../components/Products2";
import Footer from "../../components/Footer";

function Acessorios() {
  return (
    <div className="AcessoriosPage">
      <Navbar />
      <TittlePromocao />
      <Products1 />
      <Products2 />
      <Footer />
    </div>
  );
}

export default Acessorios;
