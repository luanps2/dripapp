

import Axios from "axios";
import { ContainerPage, TitlePage } from "../../componets/Main";
import { React, useState } from "react";
// const Axios = require('axios');



const Page = () => {





    const [clientes, setClientes] = useState([]);

    const [cliente, setCliente] = useState([]);

    const handleClickList = (values) => {
        Axios.get(`http://localhost:3001/select`, {
        }).then((response) => {
            setClientes(response.data);


        });
    };

   

    function handleClickAlterar(id) {

        Axios.get("http://localhost:3001/select/" + id, {

        }).then((response) => {
            console.log(response)
            setCliente(response.data[0]);
        }).catch((error) => {
            alert(error)
        });
    };

    handleClickList();

    return (
        <ContainerPage className="container">
            <div class="row">

                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Celular</th>
                            <th>Email</th>
                            <th>Senha</th>
                            <th>Data Nasc.</th>
                            <th>RG</th>
                            <th>CPF</th>
                            <th>Ações</th>
                        </tr>

                    </thead>
                    <tbody>
                        {clientes.map(cliente => {
                            return (
                                <tr>
                                    <td>{cliente.cliente_id}</td>
                                    <td>{cliente.nome_cliente}</td>
                                    <td>{cliente.endereco_cliente}</td>
                                    <td>{cliente.cel_cliente}</td>
                                    <td>{cliente.email_cliente}</td>
                                    <td class="text-truncate">{cliente.senha_cliente}</td>
                                    <td>{cliente.datanasc_cliente}</td>
                                    <td>{cliente.rg_cliente}</td>
                                    <td>{cliente.cpf_cliente}</td>

                                    <td>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#ModalAlterar" onClick={() => {
                                            handleClickAlterar(cliente.cliente_id)
                                        }} class="btn btn-warning">
                                            Alterar
                                        </button>
                                    </td>

                                    <td>
                                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#ModalExcluir">
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            )
                        })

                        }
                    </tbody>

                </table>





                {cliente != null ? (

                    
                <div class="modal fade" id="ModalAlterar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{cliente.nome_cliente}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                                    <form>
                                        <input type="text"/>
                                    </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

                ) : <h1>não</h1>}








            </div>
        </ContainerPage>

    )
};





// document.getElementById('xml').addEventListener('click', () => {

// });

// $("#json").on("click", () => {
//     $("#divresultados").empty();
//     $.getJSON("http://localhost:8080/lojaCDs/geraJSON.jsp",
//         function (dados) {
//             console.log(dados.cds.length);
//             var N = dados.cds.length;
//             for (i = 0; i < N; i++) {
//                 $("#divresultados").append(

//                     dados.cds[i].codigo + " - "
//                     + dados.cds[i].titulo + " - "
//                     + dados.cds[i].interprete + " - "
//                     + dados.cds[i].genero + " - "
//                     + dados.cds[i].preco + "<br>");
//             }
//         });
// })





export default Page;