import React from "react";
import { Col, Row } from "react-bootstrap";
import "./TittlePages.scss";

function TittlePromocao() {
  return (
    <Col className="main">
      <Row className="color"></Row>
      <Row className="main-text">
        <h1>Promoção</h1>
      </Row>
    </Col>
  );
}
export default TittlePromocao;
