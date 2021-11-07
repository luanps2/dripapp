import { React, useState } from "react";

const Axios = require('axios');



const Page = () => {

    const [produtos, setProdutos] = useState([]);
    const handleClickJSON = (values) => {
        Axios.get(`http://localhost:3001/produtoJSON`, {
        }).then((response) => {
            setProdutos(response.data);


        });
    };

    return (
        <div>
            <h2>JSON - Tabela Produtos</h2>

       <a href="http://localhost:3001/produtoJSON" class="btn btn-success" >Gerar JSON</a>

        </div>

    );
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