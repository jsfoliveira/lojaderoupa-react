import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./Newsletter.scss";

const Newsletter = () => (
  <Form>
    <Row className="newsletter">
      <Col className="newsletter-col">
        <Form.Text xs="auto" className="newsletter-text">
          Assine nossa newsletter
        </Form.Text>
      </Col>
      <Col sm={3} xs="auto" className="newsletter-form1">
        <Form.Label htmlFor="inlineFormInputName" visuallyHidden></Form.Label>
        <Form.Control id="inlineFormInputName" placeholder="Nome" />
      </Col>
      <Col sm={3} xs="auto" className="newsletter-form2">
        <Form.Label htmlFor="inlineFormInputName" visuallyHidden></Form.Label>
        <Form.Control id="inlineFormInputName" placeholder="E-mail" />
      </Col>
      <Col className="newsletter-button">
        <Button type="submit">Assinar</Button>
      </Col>
    </Row>
  </Form>
);

export default Newsletter;
