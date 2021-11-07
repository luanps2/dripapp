import { React, useState } from "react";




import { AreaPesquisa } from './styled'
import { ContainerPage, TitlePage } from "../../componets/Main";
import '../../../src/App.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
// import * as yup from "yup";



const Page = () => {

   

    // const [produtos, setProdutos] = useState([]);


    // const handleClickPesquisa = (values) => {
        // Axios.get(`http://localhost:3001/produto/${props.match.params.produto_id}`, {
        // }).then((response) => {
        //     console.log(response.data)
        // }).catch((ex) => {
        //     console.log(ex.getMessage())
        // }) ;
    // };


    return (
        <ContainerPage>
            <AreaPesquisa>
                <TitlePage>
                    <div className="container">
                        <h1>Pesquisar Produtos</h1>



                    </div>

                    <div class="row mt-2"   >



                    </div>

                    <div className="container">



                    </div>
                </TitlePage>
            </AreaPesquisa>
        </ContainerPage >
    );
}

export default Page;