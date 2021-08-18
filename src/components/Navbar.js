import React from "react";

import "../pages/Acessorios/Acessorios";
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
import { Link } from "react-router-dom";

const Navigation = () => (
  //depois de importar todas as páginas no app.js, você usa o <Link to> para redirecionar para as paginas
  <div>
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="logo">
            Minha Lojinha
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/Colecao" className="links-navbar">
                Coleção
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Acessorios" className="links-navbar">
                Acessórios
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Marcas" className="links-navbar">
                Marcas
              </Link>
            </Nav.Link>
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
                <NavDropdown.Item>
                  <Link to="/Acessar" className="links-minhaconta">
                    Acessar
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Meu-perfil" className="links-minhaconta">
                    Meu perfil
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Minhas-compras" className="links-minhaconta">
                    Minhas compras
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/Criar-conta" className="links-minhaconta">
                    Criar conta
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Button>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default Navigation;

//varint=dark (deixa a cor da fonte branco)
//<Button variant="outline-light"></Button> (deixa o botão com a linha branca)
