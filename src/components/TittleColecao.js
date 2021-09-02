import React from "react";
import { Col, Row } from "react-bootstrap";
import "./TittlePages.scss";

function TittleColecao() {
  return (
    <Col className="main">
      <Row className="color"></Row>
      <Row className="main-text">
        <h1>Coleção</h1>
      </Row>
    </Col>
  );
}

export default TittleColecao;
