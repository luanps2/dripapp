import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Produtos from './pages/Produtos';
import Produto from './pages/PesquisarProdutos/produto'
import Sobre from './pages/Sobre';
import PesquisarProdutos from './pages/PesquisarProdutos';
import ListarProdutos from "./pages/ListarProdutos";



const func = () => {  
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

            <Route exact path="/pesquisarprodutos">
                <PesquisarProdutos/>
            </Route>

            <Route exact path="/sobre">
                <Sobre/>
            </Route>

            <Route exact path="/sair">
                <Login/>
            </Route>

            <Route exact path="/listarprodutos">
                <ListarProdutos/>
            </Route>

            {/* <Route exact path="/produto/:produto_id">
                <Produto/>
            </Route> */}

            <Route path="/produto/:produto_id" component={Produto} />

        </Switch>
    )
}

export default func;