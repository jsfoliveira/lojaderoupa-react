import React from "react";
import { Carousel } from "react-bootstrap";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";

import "./Hero.scss";

import { Link } from "react-router-dom";

const Hero = () => (
  <Carousel>
    <Carousel.Item>
      <img className="carousel1" src={carousel1} alt="First slide" />
      <Carousel.Caption>
        <Link to="/Promocao" className="carousel-text">
          Liquida até 70% off
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="carousel2" src={carousel2} alt="Second slide" />
      <Carousel.Caption>
        <Link to="/Colecao" className="carousel-text">
          Coleção primavera-verão
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="carousel3" src={carousel3} alt="Third slide" />
      <Carousel.Caption>
        <Link to="/Marcas" className="carousel-text">
          Conheça nossas marcas
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Hero;
