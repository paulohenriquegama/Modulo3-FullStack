import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/header/Header';
import Filme from './pages/filme/Fime'

const Routes = () =>{

  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;