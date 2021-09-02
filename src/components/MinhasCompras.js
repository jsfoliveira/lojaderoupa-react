import React from "react";
import { Col, Container } from "react-bootstrap";
import "./MinhasCompras.scss";

const MinhasCompras = () => {
  return (
    <Container xs={12} lg={6} className="minhas-compras">
      <Col className="tittle">
        <h2 className="text-container">Minhas compras</h2>
        <p>vazio</p>
      </Col>
    </Container>
  );
};

export default MinhasCompras;
