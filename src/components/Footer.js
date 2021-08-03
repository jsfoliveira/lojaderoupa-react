import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcAmazonPay,
  faCcAmex,
  faCcApplePay,
  faCcDinersClub,
  faCcDiscover,
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
    <Container>
      <Row>
        <Col xs={12} lg={6} className="first-col">
          <h6>Sobre a marca</h6>
          <h6>Central de atendimento</h6>
          <h6>Quero trocar/devolver um produto</h6>
          <h6>Política de privacidade</h6>
        </Col>
        <Col xs={12} lg={6} className="second-col">
          <h5>Redes Sociais</h5>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTiktok} />
          <h5>Formas de pagamento</h5>
          <FontAwesomeIcon icon={faCcMastercard} />
          <FontAwesomeIcon icon={faCcAmazonPay} />
          <FontAwesomeIcon icon={faCcVisa} />
          <FontAwesomeIcon icon={faCcApplePay} />
          <FontAwesomeIcon icon={faCcAmex} />
          <FontAwesomeIcon icon={faCcDinersClub} />
        </Col>
        <Col>
          <p>Lojinha e-store LTDA. CNPJ:00.000.000./0001-00.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
