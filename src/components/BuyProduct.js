import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import roupa2 from "../assets/roupa2.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import "./BuyProduct.scss";

function BuyProduct() {
  return (
    <Container>
      <Row className="buy-product">
        <Col className="container-product">
          <Image className="image-product" variant="top" src={roupa2} />
        </Col>
        <Col className="container-information">
          <h2 className="information-product">
            Conjunto cropped e saia longa rosa
          </h2>
          <h6 className="price">
            <span className="price1">R$80,00</span> por
            <span className="price2">R$60,00</span> ou 6xR$10,00
          </h6>
          <Col className="box">
            <p className="box-number">
              <span className="box-modified">36</span>
            </p>
            <p className="box-number">37</p>
            <p className="box-number">38</p>
            <p className="box-number">39</p>
            <p className="box-number">40</p>
          </Col>
          <Col className="like-btn">
            <FontAwesomeIcon
              icon={faGratipay}
              className="fab fa-gratipay fa-4x"
            />
            <button className="btn-product">Adicionar à sacola</button>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className="container-description">
          <h6>Descrição</h6>
          <p>
            Cropedd em v, com alças finas, 100% algodão, botão de abertura nas
            costas, da cor rosa. Saia longa, comprimento até o joelho, com 50%
            algodão e 50% elastano, zíper de abertura na lateral, da cor rosa.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default BuyProduct;
