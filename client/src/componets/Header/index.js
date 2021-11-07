import React from "react";
import { Link } from 'react-router-dom'

import { AreaHeader } from './styled';


function Header() {
    return (
        <AreaHeader>
            <div className="barra">
                <div className="logo">
                    <img src="https://driprestes.000webhostapp.com/img/logo2.png" alt="logo"></img>
                </div>

                <nav>
                    <ul>
                        <li> <Link to="/select">ListarClientes</Link></li>
                        <li> <Link to="/alterarcliente">Alterar Dados Cliente</Link></li>
                        <li> <Link to="/produtoXML">XML</Link></li>
                        <li> <Link to="/produtoJSON">JSON</Link></li>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/login"> Login</Link></li>
                        <li> <Link to="/cadastro">Cadastro</Link></li>
                        <li> <Link to="/produtos">Produtos</Link></li>
                        <li> <Link to="/pesquisarprodutos">Pesquisar</Link></li>
                        <li> <Link to="/acessorios">Acessórios</Link></li>
                        <li> <Link to="/marcas">Marcas</Link></li>
                        <li> <Link to="/sobre">Sobre</Link></li>
                        <li> <Link to="/sair">Sair</Link></li>
                    </ul>
                </nav>
            </div>

        </AreaHeader>

    );
}

export default Header;