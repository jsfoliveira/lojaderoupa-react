import React from "react";
import Navbar from "../../components/Navbar";
import TittleColecao from "../../components/TittleColecao";
import Products1 from "../../components/Products1";
import Products2 from "../../components/Products2";
import Footer from "../../components/Footer";

function Colecao() {
  return (
    <div>
      <Navbar />
      <TittleColecao />
      <Products1 />
      <Products2 />
      <Footer />
    </div>
  );
}

export default Colecao;
