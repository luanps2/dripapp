import React from "react";


import { AreaPesquisa } from './styled'
import { ContainerPage, TitlePage } from "../../componets/Main";
import '../../../src/App.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
// import * as yup from "yup";

const Page = () => {
    const handleClickPesquisa = (values) => {
        Axios.post("http://localhost:3001/pesquisarprodutos", {

            nome_produto: values.nome_produto,

        }).then((response) => {
            console.log(response);
            alert(response.data.msg);
        });
    };


    return (
        <ContainerPage>
            <AreaPesquisa>
                <TitlePage>
                    <div className="container">
                        <h1>Pesquisar Produtos</h1>
                        <div>
                            <Formik initialValues={{}}
                                onSubmit={handleClickPesquisa} >
                                <Form className="produtos-form">


                                    <div className="produtos-form-group">
                                        <Field
                                            name="nome_produto"
                                            className="form-field"
                                            placeHolder="Nome do Produto" />

                                        <ErrorMessage
                                            component="span"
                                            name="nome_produto"
                                            className="form-error" />
                                    </div>



                                    <button
                                        className="button"
                                        type="submit" class="btn btn-success">Pesquisar</button>




                                </Form>
                                
                            </Formik>

                            
                        </div>

                        
                    </div>
                </TitlePage>
            </AreaPesquisa>
        </ContainerPage >
    );
}

export default Page;