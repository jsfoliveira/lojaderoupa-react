import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import "./TrocarDevolver.scss";

const TrocarDevolver = () => {
  return (
    <Col className="trocar-devolver">
      <Row>
        <Container className="tittle">
          <h1 className="text-container">Trocas e Devoluções</h1>
        </Container>
        <p>
          Desejamos que a sua experiência em nosso site seja incrível e que você
          fique completamente satisfeito com suas compras!
        </p>
        <p>
          Para isso, caso seja necessária a troca ou devolução de algum produto,
          criamos uma política que atenda às suas necessidades e respeita a
          legislação vigente (Lei Federal nº 8.078, de 1990, que deu origem ao
          Código de Defesa do Consumidor).
        </p>
        <ul>
          <li>
            Prazo para Troca: 30 dias corridos a partir do recebimento do
            pedido;
          </li>
          <li>
            Prazo para Devolução: 07 dias corridos a partir do recebimento do
            pedido;
          </li>
          <li>
            Prazo para Análise de produto com defeito: 90 dias corridos a partir
            do recebimento do pedido.
          </li>
        </ul>
        <h4>Troca e devolução do produto</h4>
        <p>
          Para solicitar troca ou devolução, preencha o formulário de contato
          disponível em nosso site:
        </p>
        <ul>
          <li>
            Informe seus dados pessoais e selecione o assunto 'Trocas e
            Devoluções';
          </li>
          <li>
            No campo mensagem, informe número do pedido, quais itens deseja
            trocar/devolver e motivo pelo qual você está efetuando troca ou
            devolução.
          </li>
          <li>
            Nossa equipe retornará seu contato em até 3 dias úteis. Você poderá
            optar por:
          </li>
        </ul>
        <h6>Troca do produto</h6>
        <p>
          Troca pelo mesmo produto com tamanho ou cor diferente, ou receberá um
          vale troca
        </p>
        <p>
          O vale troca será gerado a partir do valor pago pela peça devolvida e
          poderá ser utilizado em até 30 dias após sua liberação, considerando
          os valores de compra vigentes naquele momento.
        </p>
        <h6>Devolução do produto</h6>
        <p>Estorno do valor pago pelo produto devolvido e frete.</p>
        <p>Caso o valor tenha sido cobrado:</p>
        <ul>
          <li>
            Pagamento com boleto: o valor é creditado integralmente na conta
            solicitada em até 5 dias úteis após o prazo de análise da devolução.
            A visualização do crédito em conta depende de procedimentos internos
            de cada banco.
          </li>
          <li>
            Pagamento com cartão de crédito: O valor é creditado integralmente
            em até duas faturas seguintes do seu cartão de crédito. A
            visualização depende da data de fechamento da fatura, assim como de
            procedimentos internos de cada operadora de cartão.
          </li>
        </ul>
        <h6>Condições para troca ou devolução</h6>
        <p>
          Quando recebermos a sua devolução, o nosso Departamento de Controle de
          Qualidade fará a análise dos produtos, que pode ser concluída em até 5
          dias úteis. Com a aprovação da análise, daremos sequência ao processo
          de troca ou devolução.
        </p>
        <p>
          As peças devolvidas devem estar acompanhadas do DANFE (Documento
          Auxiliar da Nota Fiscal Eletrônica) original com as seguintes
          informações no verso:
        </p>
        <ul>
          <li>Código de autorização de postagem dos Correios</li>
          <li>Nome e código dos produtos a serem devolvidos</li>
          <li>Motivo da devolução</li>
          <li>Assinatura da cliente</li>
        </ul>
        <h6>Análise de produto com defeito</h6>
        <p>
          A Minha Lojinha tem obrigação legal de fazer análise de seus produtos
          que apresentem defeito dentro do prazo de 90 dias corridos após
          recebimento do mesmo.
        </p>
        <p>
          O produto devolvido será analisado pelo Controle de Qualidade e, se
          constatado defeito de fabricação será realizado o estorno de pagamento
          ou concedido um vale troca.
        </p>
        <p>
          Nos reservamos ao direito de recusar a devolução e retornar o produto
          para o cliente, caso algum item não esteja dentro dos padrões
          informados ou haja desconformidade entre os produtos devolvidos e a
          respectiva Nota Fiscal. Neste caso, o frete de retorno será por conta
          do cliente.
        </p>
      </Row>
    </Col>
  );
};

export default TrocarDevolver;
