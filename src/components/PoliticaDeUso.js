import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import "./PoliticaDeUso.scss";

const PoliticaDeUso = () => {
  return (
    <Col className="termo-uso">
      <Row>
        <Container className="tittle">
          <h1 className="text-container">Termos de Uso</h1>
        </Container>
        <p>
          A Minha Lojinha se esforça para manter as informações e conteúdo deste
          site corretos e atualizados. No entanto, incorreções ou omissões
          relacionadas às descrições dos produtos, preços e disponibilidade de
          peças podem eventualmente ocorrer. A Minha Lojinha se reserva o
          direito de corrigi-los, modificá-los e atualizar as informações do
          site sem comunicação prévia. Esta norma nunca irá contra os limites
          éticos da empresa.
        </p>
        <h6>informações dos produtos</h6>
        <ul>
          <li>
            Nem todos os produtos apresentados em nossas mídias e lojas estão
            disponíveis para compra no e-commerce Minha Lojinha;
          </li>
          <li>
            Alguns produtos disponíveis no e-commerce podem não estar
            disponíveis em lojas físicas ou multimarcas;
          </li>
          <li>
            Alguns itens divulgados em nosso site são meramente ilustrativos e
            não estão disponíveis para venda;
          </li>
          <li>
            As informações sobre preços e disponibilidade de produtos estão
            sujeitas a alterações;
          </li>
          <li>
            Os preços no e-commerce podem ser diferentes dos praticados em lojas
            físicas;
          </li>
        </ul>
        <h6>Propriedade Intelectual</h6>
        <p>
          Todo material visual contido no e-commerce da Minha Lojinha, como
          logotipos, gráficos, imagens, textos, ilustrações, fotografias,
          videoclipes e flashes, entre outros, é de propriedade exclusiva da
          Minha Lojinha e não pode ser reproduzido, copiado, publicado,
          transmitido, vendido, distribuído ou modificado sem prévia autorização
          expressa e formal da Minha Lojinha.
        </p>
        <p>
          A Minha lojinha respeita o sigilo e segurança de suas informações. Por
          isso, dados pessoais não serão divulgados a outras instituições,
          exceto no cumprimento de ordens emitidas por autoridades públicas e
          para fornecedores especializados em proteções de compra online com a
          finalidade de concretizar seus pedidos com segurança.
        </p>
        <p>
          A Minha lojinha e seus fornecedores não garantem que a informação
          fornecida através do e-commerce Lafort seja exata, completa ou
          atualizada.
        </p>
        <p>
          A Minha lojinha respeita o sigilo e segurança de suas informações. Por
          isso, dados pessoais não serão divulgados a outras instituições,
          exceto no cumprimento de ordens emitidas por autoridades públicas e
          para fornecedores especializados em proteções de compra online com a
          finalidade de concretizar seus pedidos com segurança.
        </p>
      </Row>
    </Col>
  );
};

export default PoliticaDeUso;
