import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./App.scss";

const App = () => (
  <div class="App">
    <Navbar />
    <Hero />
    <Body />
    <Newsletter />
    <Footer />
  </div>
);

export default App;
