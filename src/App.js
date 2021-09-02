import React from "react";

import Promocao from "./pages/Promocao/Promocao";
import Home from "./pages/Home";
import Marcas from "./pages/Marcas/Marcas";
import Colecao from "./pages/Colecao/Colecao";

import Acessar from "./pages/Minhaconta/Acessar";
import criarConta from "./pages/Minhaconta/criarConta";
import minhasCompras from "./pages/Minhaconta/minhasCompras";

import Comprar from "./pages/Btn-comprar/Comprar";

import sobreMarca from "./pages/Footer/sobreMarca";
import politicaDeUso from "./pages/Footer/politicaDeUso";
import trocarDevolver from "./pages/Footer/devolverTrocar";
import politicaPrivacidade from "./pages/Footer/privacidade";
import Contato from "./pages/Footer/Contato";

import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

//toda a parte de rotas eu coloquei aqui no app, a página Home que vai ser a primeira página que o cliente vai acessar esta aqui, depois que ele entrar na Home vai navegar para as outras páginas.
const App = () => (
  //Path = É o cominho que ele que ele tem que seguir, estou importando ele ali em cima
  // exact = Estou dizendo que quero que ele diretamente para aquela página, "Você esta forcando "
  // component = Como tudo no react e componente então aquela importação que você faz ali em cima voce deve colocar dentro do component
  <div class="App">
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/Promocao" component={Promocao} />
      <Route path="/Marcas" component={Marcas} />
      <Route path="/Colecao" component={Colecao} />

      <Route path="/Acessar" component={Acessar} />
      <Route path="/Criar-conta" component={criarConta} />
      <Route path="/Minhas-compras" component={minhasCompras} />

      <Route path="/Comprar" component={Comprar} />

      <Route path="/Sobre-marca" component={sobreMarca} />
      <Route path="/Politica-de-uso" component={politicaDeUso} />
      <Route path="/Trocar-devolver" component={trocarDevolver} />
      <Route path="/Politica-de-privacidade" component={politicaPrivacidade} />
      <Route path="/Contato" component={Contato} />
    </BrowserRouter>
  </div>
);

export default App;
