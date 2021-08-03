import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import roupa1 from "../assets/roupa1.jpeg";
import roupa2 from "../assets/roupa2.jpeg";
import roupa3 from "../assets/roupa3.jpeg";
import roupa4 from "../assets/roupa4.jpeg";
import roupa5 from "../assets/roupa5.jpeg";
import roupa6 from "../assets/roupa6.jpeg";
import roupa7 from "../assets/roupa7.jpeg";
import roupa8 from "../assets/roupa8.jpeg";
import "./Body.scss";

const Body = () => (
  <CardGroup>
    <Card>
      <Card.Img variant="top" src={roupa1} />
      <Card.Body>
        <Card.Title>Conjunto azul</Card.Title>
        <Card.Text>Cropped e short</Card.Text>
        <Card.Text>R$80,00</Card.Text>
        <Button variant="primary">Comprar{""}</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src={roupa2} />
      <Card.Body>
        <Card.Title>Conjunto Rosa</Card.Title>
        <Card.Text>Cropped com vestido longo</Card.Text>
        <Card.Text>R$80,00</Card.Text>
        <Button variant="primary">Comprar</Button>{" "}
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src={roupa3} />
      <Card.Body>
        <Card.Title>Vestido</Card.Title>
        <Card.Text>Vermelho com manga</Card.Text>
        <Card.Text>R$80,00</Card.Text>
        <Button variant="primary">Comprar</Button>{" "}
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src={roupa4} />
      <Card.Body>
        <Card.Title>Cropped</Card.Title>
        <Card.Text>Cropped Juliette branco</Card.Text>
        <Card.Text>R$60,00</Card.Text>
        <Button variant="primary">Comprar</Button>{" "}
      </Card.Body>
    </Card>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={roupa5} />
        <Card.Body>
          <Card.Title>Short saia</Card.Title>
          <Card.Text>Rosa com botões na frante</Card.Text>
          <Card.Text>R$60,00</Card.Text>
          <Button variant="primary">Comprar</Button>{" "}
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={roupa6} />
        <Card.Body>
          <Card.Title>Cropped Juliette</Card.Title>
          <Card.Text>Todo em suplex poliamida e mangas chiffon</Card.Text>
          <Card.Text>R$40,00</Card.Text>
          <Button variant="primary">Comprar</Button>{" "}
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={roupa7} />
        <Card.Body>
          <Card.Title>Corsete</Card.Title>
          <Card.Text>
            Com barbatanas estruturadas e fechamento em ilhós
          </Card.Text>
          <Card.Text>R$58,00</Card.Text>
          <Button variant="primary">Comprar</Button>{" "}
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={roupa8} />
        <Card.Body>
          <Card.Title>Cropped </Card.Title>
          <Card.Text>Tricô modal</Card.Text>
          <Card.Text>R$65,00</Card.Text>
          <Button variant="primary">Comprar</Button>{" "}
        </Card.Body>
      </Card>
    </CardGroup>
  </CardGroup>
);

export default Body;
