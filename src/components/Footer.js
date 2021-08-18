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
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => (
  <footer className="background-footer">
    <Container className="container-footer">
      <Row>
        <Col xs={12} lg={6} className="first-col">
          <Container className="container-text">
            <h6>
              <Link to="/Sobre-marca" className="links-footer">
                Sobre a marca
              </Link>
            </h6>
            <h6>
              <Link to="/Central-de-atendimento" className="links-footer">
                Central de atendimento
              </Link>
            </h6>
            <h6>
              <Link to="/Trocar-devolver" className="links-footer">
                Quero trocar/devolver um produto
              </Link>
            </h6>
            <h6>
              <Link to="/Politica-de-privacidade" className="links-footer">
                Política de privacidade
              </Link>
            </h6>
            <h6>
              <Link to="/Contato" className="links-footer">
                Contato
              </Link>
            </h6>
          </Container>
        </Col>
        <Col xs={12} lg={6} className="second-col">
          <h5>Redes Sociais</h5>
          <ul className="icons-footer">
            <a href="https://facebook.com/" target="_blank" className="icons">
              <FontAwesomeIcon
                icon={faFacebook}
                className="fab fa-facebook fa-2x"
              />
            </a>
            <a href="https://twitter.com/" target="_blank" className="icons">
              <FontAwesomeIcon
                icon={faTwitter}
                className="fab fa-twitter fa-2x"
              />
            </a>
            <a href="https://instagram.com/" target="_blank" className="icons">
              <FontAwesomeIcon
                icon={faInstagram}
                className="fab fa-instagram fa-2x"
              />
            </a>
            <a href="https://tiktok.com/" target="_blank" className="icons">
              <FontAwesomeIcon
                icon={faTiktok}
                className="fab fa-tiktok fa-2x"
              />
            </a>
          </ul>
          <h5>Formas de pagamento</h5>
          <ul className="icons-pay">
            <a>
              <FontAwesomeIcon
                icon={faCcMastercard}
                className="fab fa-cc-mastercard fa-3x"
              />
            </a>
            <a>
              <FontAwesomeIcon
                icon={faCcAmazonPay}
                className="fab fa-cc-amazon-pay fa-3x"
              />
            </a>
            <a>
              <FontAwesomeIcon
                icon={faCcVisa}
                className="fab fa-cc-visa fa-3x"
              />
            </a>
            <a>
              <FontAwesomeIcon
                icon={faCcAmex}
                className="fab fa-cc-amex fa-3x"
              />
            </a>
            <a>
              <FontAwesomeIcon
                icon={faCcDinersClub}
                className="fab fa-cc-diners-club fa-3x"
              />
            </a>
          </ul>
        </Col>
      </Row>

      <div className="line"></div>
      <Col className="end-footer">
        <p>Lojinha e-store LTDA. CNPJ:00.000.000./0001-00.</p>
      </Col>
    </Container>
  </footer>
);

export default Footer;
