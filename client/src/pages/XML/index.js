import { React, useState } from "react";


const Axios = require('axios');



const Page = () => {

    const [produtos, setProdutos] = useState([]);
    const handleClickXML = (values) => {
        Axios.get(`http://localhost:3001/produtoXML`, {
        }).then((response) => {
            setProdutos(response.data);


        });
    };

    return (
        <div>
            <h2>XML - Tabela Produtos</h2>

            

            <br />

            {/* <button class="btn btn-success mb-1" id="json">Visualizar JSON nesta página</button> */}
            <button class="btn btn-success mb-1" id="xml" onClick={handleClickXML}>Visualizar XML nesta página</button> <br />
            <a href="http://localhost:3001/produtoXML2" class="btn btn-success mb-1">Visualizar XML externo</a> <br />

            {/* <a href="http://localhost:8080/lojaCDs/geraXML.jsp"> <button class="btn btn-success ">Página XML</button></a>
            <a href="http://localhost:8080/lojaCDs/geraJSON.jsp"> <button class="btn btn-success ">Página JSON</button></a> */}

            {"<produtos>"}
            {produtos.map(produto => {
                return (
                    <div class="col-md-3">

                        {"<produto>"}
                        {"<produtoId>" + produto.produto_id + "</produtoId>"}
                        {"<nomeProduto>" + produto.nome_produto + "</nomeProduto>"}
                        {"<preco>" + produto.preco_produto + "</preco>"}
                        {"<categoriaId>" + produto.categoria_id + "</categoriaId>"}
                        {"<vendedorId>" + produto.vendedor_id + "</vendedorId>"}
                        {"<qtdEstoque>" + produto.qtd_estoque + "</qtdEstoque>"}
                        {"</produto>"}


                    </div>
                )
            })

            }
            {"</produtos>"}


            <br /><br />

        </div>

    );
}

function teste(data) {


    document.getElementById("divresultados").innerHTML = '';

    document.getElementById("divresultados").innerHTML += '<produtos>'
    for (let i = 0; i < data.length; i++) {

        document.getElementById("divresultados").innerHTML += '<produto>';

        document.getElementById('divresultados').innerHtml += "<produtoId>" + data[i].produto_id + "</produtoId>" + "</br>"
        document.getElementById('divresultados').innerHtml += "<nomeProduto>" + data[i].nome_produto + "</nomeProduto>" + "</br>"
        document.getElementById('divresultados').innerHtml += "<preco>" + data[i].preco_produto + "</preco>" + "</br>"
        document.getElementById('divresultados').innerHtml += "<categoriaId>" + data[i].categoria_id + "</categoriaId>" + "</br>"
        document.getElementById('divresultados').innerHtml += "<vendedorId>" + data[i].vendedor_id + "</vendedorId>" + "</br>"
        document.getElementById('divresultados').innerHtml += "<qtdEstoque>" + data[i].qtd_estoque + "</qtdEstoque>" + "</br>"

        // document.getElementById("divresultados").innerHTML += `
        // ${data[i].produto_id} -
        // ${data[i].nome_produto} -
        // ${data[i].preco_produto} -
        // ${data[i].categoria_id} -
        // ${data[i].vendedor_id} -
        // ${data[i].qtd_estoque} - <br>
        // `;
        document.getElementById("divresultados").innerHTML += '</produto>';
    }
    document.getElementById("divresultados").innerHTML += '</produtos>';
}

function GerarXML() {



    let data = null;

    // let xmlhttp = new XMLHttpRequest();
    // xmlhttp.open("GET", "http://localhost:3001/produtoXML", false);
    // xmlhttp.send();
    // let xmlDoc = xmlhttp.responseXML;

    // const produtos = xmlDoc.getElementsByTagName("produto");

    Axios.get("http://localhost:3001/produtoXML", {

    }).then((response) => {
        teste(response.data);
    });
}





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