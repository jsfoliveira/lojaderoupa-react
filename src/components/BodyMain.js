import React from "react";
import { Col, Row } from "react-bootstrap";
import saiabody from "../assets/saia-bodymain.jpg";
import vestidobody from "../assets/vestido-bodymain.jpeg";
import casacobody from "../assets/casaco-bodymain.jpg";
import calcabody from "../assets/calca-bodymain.jpeg";
import "./BodyMain.scss";

const BodyMain = () => {
  return (
    <Row className="container_options">
      <Col className="vestidobody">
        <img src={vestidobody} />
        <h2>Vestidos</h2>
      </Col>

      <Col className="casaco-calca">
        <img className="img-casacocalca" src={casacobody} />
        <h2>Casacos</h2>
        <img className="img-casacocalca" src={calcabody} />
        <h2>Calças</h2>
      </Col>

      <Col className="saiabody">
        <img src={saiabody} />
        <h2>Saias</h2>
      </Col>
    </Row>
  );
};

export default BodyMain;
