import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import roupa1 from "../assets/roupa1.jpeg";
import roupa3 from "../assets/roupa3.jpeg";
import roupa4 from "../assets/roupa4.jpeg";
import roupa5 from "../assets/roupa5.jpeg";
import roupa6 from "../assets/roupa6.jpeg";
import roupa8 from "../assets/roupa8.jpeg";

import { Link } from "react-router-dom";
import "./Products.scss";

const Products2 = () => {
  return (
    <CardGroup className="body2">
      <Card className="body-card">
        <Card.Img variant="top" src={roupa1} />
        <Card.Body>
          <Card.Title>Conjunto azul</Card.Title>
          <Card.Text>Cropped e short azuis</Card.Text>
          <Card.Text>R$80,00</Card.Text>
          <Link to="/Comprar">
            <Button variant="primary">Comprar</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="body-card">
        <Card.Img variant="top" src={roupa3} />
        <Card.Body>
          <Card.Title>Vestido</Card.Title>
          <Card.Text>Vermelho com manga</Card.Text>
          <Card.Text>R$80,00</Card.Text>
          <Link to="/Comprar">
            <Button variant="primary" className="btn-body">
              Comprar
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="body-card">
        <Card.Img variant="top" src={roupa4} />
        <Card.Body>
          <Card.Title>Cropped</Card.Title>
          <Card.Text>Cropped Juliette branco</Card.Text>
          <Card.Text>R$60,00</Card.Text>
          <Link to="/Comprar">
            <Button variant="primary" className="btn-body">
              Comprar
            </Button>
          </Link>
        </Card.Body>
      </Card>

      <Card className="body-card">
        <Card.Img variant="top" src={roupa5} />
        <Card.Body>
          <Card.Title>Short saia</Card.Title>
          <Card.Text>Rosa com botões na frante</Card.Text>
          <Card.Text>R$60,00</Card.Text>
          <Link to="/Comprar">
            <Button variant="primary" className="btn-body">
              Comprar
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="body-card">
        <Card.Img variant="top" src={roupa6} />
        <Card.Body>
          <Card.Title>Cropped </Card.Title>
          <Card.Text>Todo em suplex poliamida </Card.Text>
          <Card.Text>R$40,00</Card.Text>
          <Link to="/Comprar">
            <Button variant="primary" className="btn-body">
              Comprar
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="body-card">
        <Card.Img variant="top" src={roupa8} />
        <Card.Body>
          <Card.Title>Cropped </Card.Title>
          <Card.Text>Tricô modal quadriculados</Card.Text>
          <Card.Text>R$65,00</Card.Text>
          <Link to="/Comprar">
            <Button variant="primary" className="btn-body">
              Comprar
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Products2;
