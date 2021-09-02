//diminuir o tamanho das caixas no celular
import React from "react";
import { Form, Button, FormGroup, Container } from "react-bootstrap";

import "./Contact.scss";

const Contact = () => {
  return (
    <Form xs={12} lg={6} className="contact">
      <Container className="tittle">
        <h1 className="text-container">Contato</h1>
      </Container>
      <Container>
        <Form.Group className="mb-3 px-5" controlId="exampleForm.ControlInput1">
          <Form.Label>Nome completo (obrigatório)</Form.Label>
          <Form.Control type="text" placeholder="Digite seu nome" />
        </Form.Group>
        <Form.Group className="mb-3 px-5" controlId="exampleForm.ControlInput1">
          <Form.Label>Email (obrigatório)</Form.Label>
          <Form.Control type="email" placeholder="Digite seu email" />
        </Form.Group>
        <Form.Group className="mb-3 px-5" controlId="exampleForm.ControlInput1">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="number" placeholder="(00)0000-0000" />
        </Form.Group>
        <Form.Group className="mb-3 px-5" controlId="exampleForm.ControlInput1">
          <Form.Label>Motivo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Troca/devolução/reclamação/outros"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 px-5"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Mensagem</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <FormGroup className="container-btn">
          <Button className="btn-contact" variant="secondary" size="lg">
            Enviar
          </Button>
        </FormGroup>
      </Container>
    </Form>
  );
};

export default Contact;
