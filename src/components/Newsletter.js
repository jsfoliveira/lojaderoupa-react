import React from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import "./Newsletter.scss";

const Newsletter = () => (
  <Form>
    <Row className="newsletter">
      <Col xs={8} lg={4} className="newsletter-text">
        <Form.Text xs="auto">Assine nossa newsletter</Form.Text>
      </Col>
      <Col xs={8} lg={4} className="newsletter-form1">
        <Form.Label htmlFor="inlineFormInputName" visuallyHidden></Form.Label>
        <Form.Control id="inlineFormInputName" placeholder="Nome" />
      </Col>
      <Col xs={8} lg={4} className="newsletter-form2">
        <Form.Label htmlFor="inlineFormInputName" visuallyHidden></Form.Label>
        <Form.Control id="inlineFormInputName" placeholder="E-mail" />
      </Col>
      <Col xs={8} lg={2} className="newsletter-button">
        <button type="submit" className="btn-newsletter">
          Assinar
        </button>
      </Col>
    </Row>
  </Form>
);

export default Newsletter;
