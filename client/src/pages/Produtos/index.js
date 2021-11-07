import React from "react";


import { AreaProdutos } from './styled'
import { ContainerPage, TitlePage } from "../../componets/Main";
import '../../../src/App.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
// import * as yup from "yup";

const Page = () => {
    const handleClickCadastro = (values) => {
        Axios.post("http://localhost:3001/produtos", {
            
            nome_produto: values.nome_produto,
            preco_produto: values.preco_produto,
            categoria_id: values.categoria_id,
            vendedor_id: values.vendedor_id,
            qtd_estoque: values.qtd_estoque,

        }).then((response) => {
            console.log(response);
            alert(response.data.msg);
        });
    };

    
    return (
        <ContainerPage>
            <AreaProdutos>
                <TitlePage>
                <div className="container">
                    <h1>Produtos</h1>
                    <div>
                        <Formik initialValues={{}}
                            onSubmit={handleClickCadastro} >
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
                          
                          
                                <div className="produtos-form-group">
                                    <Field
                                        name="preco_produto"
                                        className="form-field"
                                        placeHolder="Preço do Produto" />

                                    <ErrorMessage
                                        component="span"
                                        name="preco_produto"
                                        className="form-error" />
                                </div>
                          

                                <div className="produtos-form-group">
                                    <Field
                                        name="categoria_id"
                                        className="form-field"
                                        placeHolder="ID da Categoria" />

                                    <ErrorMessage
                                        component="span"
                                        name="preco_produto"
                                        className="form-error" />
                                </div>
                          

                                <div className="produtos-form-group">
                                    <Field
                                        name="vendedor_id"
                                        className="form-field"
                                        placeHolder="ID do Vendedor" />

                                    <ErrorMessage
                                        component="span"
                                        name="vendedor_id"
                                        className="form-error" />
                                </div>
                          

                                <div className="produtos-form-group">
                                    <Field
                                        name="qtd_estoque"
                                        className="form-field"
                                        placeHolder="Quantidade" />

                                    <ErrorMessage
                                        component="span"
                                        name="qtd_estoque"
                                        className="form-error" />
                                </div> <br/>

                             

                                <button
                                    className="button"
                                    type="submit" class="btn btn-success">Cadastrar</button>

                            </Form>
                        </Formik>
                        </div>
                    </div>
                </TitlePage>
            </AreaProdutos>
        </ContainerPage >
    );
}

export default Page;