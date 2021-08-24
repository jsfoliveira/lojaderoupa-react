import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import "./Privacidade.scss";

const Privacidade = () => {
  return (
    <Col className="privacy">
      <Row>
        <Container className="tittle">
          <h1 className="text-container">Política e seguraça</h1>
        </Container>
        <p>
          A Minha Lojinha respeita o sigilo e a segurança de suas informações.
        </p>
        <h6>Dados pessoais</h6>
        <p>
          Dados pessoais não serão divulgados a outras instituições, exceto no
          cumprimento de ordens emitidas por autoridades públicas, e/ou para
          fornecedores especializados em proteção de compra online. No segundo
          caso, a finalidade é concretizar seus pedidos com segurança. Em
          algumas circunstâncias, você pode receber contato por telefone para
          confirmar seus dados cadastrais e, assim, aprovar sua compra de forma
          segura. Todas as informações que passam pelo nosso sistema são
          codificadas, desde a sua senha pessoal até os dados do seu cartão de
          crédito. Nossas operações são criptografadas e, por isso, não podem
          ser lidas nem alteradas por terceiros. Nosso sistema de proteção é o
          mesmo utilizado pelas principais instituições financeiras do mercado.
        </p>
        <h6>Acesso seguro</h6>
        <p>
          O cadeado fechado, localizado no canto superior da tela, é a garantia
          de que você está navegando em um ambiente seguro.
        </p>
        <h6>Cadastro</h6>
        <p>
          Para efetuar sua primeira aquisição na Minha Lojinha será necessário
          completar o nosso cadastro. Nas próximas vezes, basta fazer login.
          Apenas seus dados cadastrais (nome, sexo, telefone, CEP e data de
          nascimento) ficarão armazenados em nosso sistema. O número de seu
          cartão de crédito e quaisquer outras informações sobre pagamento não
          serão armazenadas. Caso queira remover o seu cadastro por completo do
          nosso site ou tenha alguma dúvida, entre em contato com o Atendimento
          Online Lafort. Durante o processo de cadastro a loja solicita alguns
          dados pessoais. Quanto maior o número de informações corretas,
          melhores serão nossas possibilidades de lhe oferecer um serviço
          personalizado. Você terá acesso on-line ao seu cadastro, podendo
          retificar informações incorretas a qualquer momento.{" "}
        </p>
        <h6>Cookies</h6>
        <p>
          Durante o processo de cadastro o e-commerce da Minha Lojinha solicita
          alguns dados pessoais. Quanto maior o número de informações corretas,
          melhores serão nossas possibilidades de lhe oferecer um serviço
          personalizado. Cookies são pequenos arquivos enviados ao seu
          computador. Eles são uma ferramenta importantíssima para acompanhar a
          navegação do usuário, tornando mais fáceis e rápidos os serviços de
          personalização e compras. Os cookies são utilizados para oferecer
          serviços diferenciados, lembrando quem você é e quais são os seus
          hábitos de navegação, frequência ao site e áreas de maior acesso. As
          informações coletadas pela e-commerce da Minha Lojinha serão
          utilizadas para orientar o conteúdo de nosso site, isso inclui
          serviços de personalização, compras on-line e outros tipos de
          serviços. Ao sabermos mais sobre você, poderemos oferecer produtos e
          serviços que sejam mais relevantes e estejam de acordo com a seu
          gosto. Terceiros poderão coletar dados de navegação, mas você pode
          desautorizar essa coleta entrando em contato conosco.
        </p>
        <h6>Anti-spam</h6>
        <p>
          Minha Lojinha é contra o spam e lixo eletrônico. Portanto, se você
          receber algum que mencione a Lafort ou um dos nossos serviços, pedimos
          que entre em contato conosco para que possamos investigar. Agradecemos
          desde já a ajuda!
        </p>
        <h6>Newsletter</h6>
        <p>
          Caso não queira mais receber nossa newsletter, clique na opção
          “descadastre-se”, localizada na parte inferior de qualquer e-mail
          recebido.
        </p>
        <h6>Criptogragia</h6>
        <p>
          A criptografia permite transformar em código dados pessoais coletadas
          durante uma compra on-line. Desta forma, ao comprar no e-commerce da
          Lafort, toda e qualquer informação que você fornecer (sejam dados
          pessoais ou informações de pagamento) será automaticamente codificada
          antes de ser transmitida e arquivada em ambiente interno próprio, que
          é de acesso exclusivo de nossa equipe.
        </p>
        <h6>Compras no cartão de crédito</h6>
        <p>
          Minha lojinha não retém números de cartões de crédito. É importante
          lembrar que, durante esse processo de transmissão de dados, você
          estará em um ambiente de comércio eletrônico seguro
        </p>
        <h6>Cancelamento ou suspensão por iniciativa da loja</h6>
        <ul>
          O e-commerce da Minha lojinha se reserva o direito de suspender ou
          cancelar um pedido, ao seu exclusivo critério, nas seguintes
          situações:
        </ul>
        <li>Impossibilidade de execução do débito correspondente à compra;</li>
        <li>Inconsistência de dados preenchidos no pedido.</li>
        <li>
          A restituição de valores por iniciativa Minha Lojinha ocorrem nas
          seguintes situações: Impossibilidade de entrega da mercadoria (após
          três tentativas) em função de inexistência do endereço indicado pela
          cliente ou problemas de acesso relatados pelos
          Correios/transportadoras.
        </li>
        <li>
          Nestes casos o produto retorna para o nosso Centro de Distribuição. A
          partir daí devolvemos o valor pago à cliente excluindo custos com
          frete, ou realizamos nova tentativa de entrega, caso o endereço seja
          retificado.
        </li>
        <li>
          Falta da mercadoria adquirida no e-commerce, em função de falha no
          sistema integrado de estoques. Nestes casos devolvemos o valor pago à
          cliente através do mesmo meio de pagamento utilizado na compra.
        </li>
      </Row>
    </Col>
  );
};

export default Privacidade;
