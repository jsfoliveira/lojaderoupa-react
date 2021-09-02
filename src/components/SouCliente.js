import React from "react";
import { Form, Button, FormGroup, Container } from "react-bootstrap";
import "./CriarConta.scss";

const SouCliente = () => {
  return (
    <Form xs={12} lg={6} className="criar-conta">
      <Container className="tittle">
        <h2 className="text-container">Acessar conta</h2>
      </Container>
      <Container className="form-criar-conta">
        <Form.Group
          className="container-form-conta"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Digite seu e-mail</Form.Label>
          <Form.Control type="email" placeholder="E-mail" />
        </Form.Group>
      </Container>
      <Container className="form-criar-conta">
        <Form.Group
          className="container-form-conta"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Digite sua senha</Form.Label>
          <Form.Control type="text" placeholder="Senha" />
        </Form.Group>
      </Container>
      <FormGroup className="container-btn">
        <Button variant="secondary" size="lg">
          Criar conta
        </Button>
      </FormGroup>
    </Form>
  );
};

export default SouCliente;
