import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcAmazonPay,
  faCcAmex,
  faCcDinersClub,
  faCcMastercard,
  faCcVisa,
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer = () => (
  <footer className="background-footer">
    <Container className="container-footer">
      <Row>
        <Col xs={12} lg={6} className="first-col">
          <h6>Sobre a marca</h6>
          <h6>Central de atendimento</h6>
          <h6>Quero trocar/devolver um produto</h6>
          <h6>Política de privacidade</h6>
          <h6>Contato</h6>
        </Col>
        <Col xs={12} lg={6} className="second-col">
          <h5>Redes Sociais</h5>
          <ul>
            <a href="https://facebook.com/" target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                className="fab fa-facebook fa-2x"
              />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                className="fab fa-twitter fa-2x"
              />
            </a>
            <a href="https://instagram.com/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="fab fa-instagram fa-2x"
              />
            </a>
            <a href="https://tiktok.com/" target="_blank">
              <FontAwesomeIcon
                icon={faTiktok}
                className="fab fa-tiktok fa-2x"
              />
            </a>
          </ul>
          <h5>Formas de pagamento</h5>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faCcMastercard}
                className="fab fa-cc-mastercard fa-3x"
              />
              <FontAwesomeIcon
                icon={faCcAmazonPay}
                className="fab fa-cc-amazon-pay fa-3x"
              />
              <FontAwesomeIcon
                icon={faCcVisa}
                className="fab fa-cc-visa fa-3x"
              />
              <FontAwesomeIcon
                icon={faCcAmex}
                className="fab fa-cc-amex fa-3x"
              />
              <FontAwesomeIcon
                icon={faCcDinersClub}
                className="fab fa-cc-diners-club fa-3x"
              />
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    <Col className="end-footer">
      <p>Lojinha e-store LTDA. CNPJ:00.000.000./0001-00.</p>
    </Col>
  </footer>
);

export default Footer;
