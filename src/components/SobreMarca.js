import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import "./SobreMarca.scss";

const SobreMarca = () => {
  return (
    <Col className="sobremarca">
      <Row>
        <h2>História da Minha Lojinha</h2>
        <p>
          Com mais de seis décadas de expertise no mercado da moda, a marca
          carrega em seu DNA a modelagem perfeita e o caimento impecável da
          alfaiataria, além do pioneirismo em tricot no Brasil, que a
          transformou na maior referência deste segmento.
        </p>
        <p>
          A Minha Lojinha valoriza a união entre inovação e criatividade através
          da busca constante pelo desenvolvimento de novos fios e tecidos
          tecnológicos, como o Technoblock®, seu tecido exclusivo que não
          amassa, não marca o corpo e proporciona grande conforto térmico.
        </p>
        <p>
          A marca possui centenas de pontos físicos pelo Brasil entre lojas
          próprias e multimarcas.
        </p>
      </Row>
      <Row>
        <h4 className="fundadoras">Fundadoras</h4>
        <Col xs={12} md={6}>
          <Image src="../assets/sobremarca/171x180" rounded />
        </Col>
        <Col xs={12} md={6}>
          <p>
            Fulana está à frente da direção criativa da Minha Lojinha há mais de
            25 anos. Ela participou ativamente no desenvolvimento de todas as
            coleções. Expert em fios e tecidos, está constantemente em busca por
            inovações para as matérias primas da marca.
          </p>
          <p>
            Fulana trouxe uma grande inovação: o reaproveitamento da sobra dos
            tecido para a produção de máscaras de proteção doadas à população e
            funcionários. O sucesso foi tão grande que gerou a oportunidade de
            comercialização dos kits com máscaras, que se tornaram os mais
            queridos entre as celebridades e empresários.
          </p>
        </Col>
      </Row>
    </Col>
  );
};

export default SobreMarca;
