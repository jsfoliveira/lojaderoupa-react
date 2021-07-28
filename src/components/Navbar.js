import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  ButtonGroup,
  Container,
} from "react-bootstrap";
import "./Navbar.scss";

const Navigation = () => (
  <Navbar variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#">Minha Lojinha</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />

      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">Roupas</Nav.Link>
          <Nav.Link href="#action2">Acessórios</Nav.Link>
          <Nav.Link href="#action2">Marcas</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="O que você procura?"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="secondary">Buscar</Button>
        </Form>

        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-light">
            <NavDropdown title="Minha conta" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Acessar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Meu perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Minhas compras
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Criar conta
              </NavDropdown.Item>
            </NavDropdown>
          </Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;

//varint=dark (deixa a cor da fonte branco)
//<Button variant="outline-light"></Button> (deixa o botão com a linha branca)
