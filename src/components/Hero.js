import React from "react";
import { Carousel } from "react-bootstrap";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import "./Hero.scss";

const Hero = () => (
  <Carousel>
    <Carousel.Item>
      <img className="carousel1" src={carousel1} alt="First slide" />
      <Carousel.Caption>
        <h3>Liquida até 70% off</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="carousel2" src={carousel2} alt="Second slide" />
      <Carousel.Caption>
        <h3>Coleção primavera-verão</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="carousel3" src={carousel3} alt="Third slide" />
      <Carousel.Caption>
        <h3>Coleção outono-inverno</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Hero;
