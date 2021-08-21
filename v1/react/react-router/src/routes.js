// React Router Dom -> Usado para trabalhar com rotas no React
// Para a instalação do React Router Dom -> npm install react-router-dom

import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

const Routes = () => {
   return(

       //BrowserRouter: é um componente responsável por informar a nossa aplicação que teremos um roteamento de componentes.

       //Route: componente que associa a rota ao componente.

       //O parâmetro {component} recebe o componente que precisa ser exibido ao acessar a rota.

       //Path: é o caminho na URL que precisa ser acessado para mostrar o componente, definido pelo parâmetro component.

       //Exact -> Exatemente o que definirmos

       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Sobre }  path="/sobre" />
           <Route component = { Usuario }  path="/usuario" />
       </BrowserRouter>
   )
}

export default Routes;