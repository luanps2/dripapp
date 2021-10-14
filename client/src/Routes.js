import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';

export default () => {  
    return (
        <Switch>
            <Route exact path="/">
            <Home/>
            </Route>

            <Route exact path="/home">
            <Home/>
            </Route>

            <Route exact path="/login">
                <Login/>
            </Route>

            <Route exact path="/cadastro">
                <Cadastro/>
            </Route>

            <Route exact path="/produtos">
                <Produtos/>
            </Route>

            <Route exact path="/sobre">
                <Sobre/>
            </Route>

            <Route exact path="/sair">
                <Login/>
            </Route>

        </Switch>
    )
}
