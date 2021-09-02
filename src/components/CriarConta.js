import React from "react";
import { Form, Button, FormGroup, Container } from "react-bootstrap";
import "./CriarConta.scss";

const CriarConta = () => {
  return (
    <Form xs={12} lg={6} className="criar-conta">
      <Container className="tittle">
        <h2 className="text-container">Quero criar uma conta</h2>
      </Container>
      <Container className="form-criar-conta">
        <Form.Group
          className="container-form-conta"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Nome completo</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group
          className="container-form-conta"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Senha</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group
          className="container-form-conta"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>CPF</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group
          className="container-form-conta"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group
          className="container-form-conta"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Endereço</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Li e aceito a Política de privacidade da Minha Lojinha"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Aceito receber promoções no meu e-mail"
          />
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

export default CriarConta;
