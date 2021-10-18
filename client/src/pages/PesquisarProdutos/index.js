import { React, useState } from "react";




import { AreaPesquisa } from './styled'
import { ContainerPage, TitlePage } from "../../componets/Main";
import '../../../src/App.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
// import * as yup from "yup";



const Page = () => {
    const [produtos, setProdutos] = useState([]);


    const handleClickPesquisa = (values) => {
        Axios.get(`http://localhost:3001/pesquisarprodutos/${values.nome_produto}`, {
        }).then((response) => {
            setProdutos(response.data);
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

                    <div class="row mt-2"   >
                     
                            
                        {produtos.map(produto => {
                            return (
                                <div class="col-md-3">
                                <div class="card">
                                    <img src="https://static.wikia.nocookie.net/nickelodeon6666/images/1/18/BobEsponja.png/revision/latest/scale-to-width-down/470?cb=20160421162154&path-prefix=pt-br" class="card-img-top" alt="..." />
                                    <div class="card-body">

                                        <h5 class="card-title"><a href={"/produto/" + produto.produto_id}> Nome: {produto.nome_produto} </a> </h5>
                                        <p class="card-text">Qtd: {produto.qtd_estoque}</p>
                                        <p class="card-text">Preço: R${produto.preco_produto}</p>

                                        <a href="#" class="btn btn-primary">Comprar</a>
                                    </div>
                                </div>
                                </div>
                            )
                        })

                        }
                        
                    </div>

                    <div className="container">



                    </div>
                </TitlePage>
            </AreaPesquisa>
        </ContainerPage >
    );
}

export default Page;