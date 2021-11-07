import React from "react";


import { AreaUpdate } from './styled'
import { ContainerPage, TitlePage } from "../../componets/Main";
import '../../../src/App.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
import * as yup from "yup";

const Page = () => {

    
    const handleClickUpdate = (values) => {

       
        Axios.get("http://localhost:3001/UpdateCliente/:cliente_id", {

            // endereco_cliente: values.endereco_cliente,
            // nome_cliente: values.nome_cliente,
            // cel_cliente: values.cel_cliente,
            // email_cliente: values.email_cliente,
            // senha_cliente: values.senha_cliente,
            // datanasc_cliente: values.datanasc_cliente,
            // rg_cliente: values.rg_cliente,
            // cpf_cliente: values.cpf_cliente,

        }).then((response) => {
            console.log(response);
            alert(response.data.msg);
        });
    };

    // const validationRegister = yup.object().shape({
    //     email: yup
    //         .string()
    //         .email("Não é um email")
    //         .required("Este campo é obrigatório"),
    //     senha_cliente: yup
    //         .string()
    //         .min(4, "A senha deve ter 4 caracteres")
    //         .required("Este campo é obrigatório"),
    //     confirmPassword: yup
    //         .string()
    //         .oneOf([yup.ref("senha_cliente"), null], "As senhas não são iguais!"),
    // });

    return (
        <ContainerPage>
            <AreaUpdate>
                <TitlePage>
                    <div className="container">
                        <h1>Alterar dados</h1>
                        <div>
                            <Formik initialValues={{}}
                                onSubmit={handleClickUpdate}  >
                                    {/* validationSchema={validationRegister} */}

                                <Form className="cadastro-form">

                                    <div className="cadastro-form-group">
                                        <Field
                                            name="nome_cliente"
                                            className="form-field"
                                            placeHolder="Nome" 
                                           
                                            />

                                        <ErrorMessage
                                            component="span"
                                            name="nome_cliente"
                                            className="form-error" />
                                    </div>

                                    <div className="cadastro-form-group">
                                        <Field
                                            name="cel_cliente"
                                            className="form-field"
                                            placeHolder="Celular" />

                                        <ErrorMessage
                                            component="span"
                                            name="cel_cliente"
                                            className="form-error" />
                                    </div>

                                    <div className="cadastro-form-group">
                                        <Field
                                            name="email_cliente"
                                            className="form-field"
                                            placeHolder="Email" />

                                        <ErrorMessage
                                            component="span"
                                            name="email_cliente"
                                            className="form-error" />
                                    </div>

                                    <div className="cadastro-form-group">
                                        <Field
                                            name="senha_cliente"
                                            className="form-field"
                                            type="password"
                                            placeHolder="Senha" />

                                        <ErrorMessage
                                            component="span"
                                            name="senha_cliente"
                                            className="form-error" />
                                    </div>

                                    <div className="cadastro-form-group">
                                        <Field
                                            name="confirmPassword"
                                            className="form-field"
                                            type="password"
                                            placeHolder="Confirme sua Senha" />

                                        <ErrorMessage
                                            component="span"
                                            name="confirmPassword"
                                            className="form-error" />
                                    </div>

                                    <div className="cadastro-form-group">
                                        <Field
                                            name="datanasc_cliente"
                                            className="form-field"
                                            placeHolder="Data de Nascimento" />

                                        <ErrorMessage
                                            component="span"
                                            name="datanasc_cliente"
                                            className="form-error" />
                                    </div>

                                    <div className="cadastro-form-group">
                                        <Field
                                            name="endereco_cliente"
                                            className="form-field"
                                            placeHolder="Endereço" />

                                        <ErrorMessage
                                            component="span"
                                            name="endereco_cliente"
                                            className="form-error" />
                                    </div>

                                    <div className="cadastro-form-group">
                                        <Field
                                            name="rg_cliente"
                                            className="form-field"
                                            placeHolder="RG" />

                                        <ErrorMessage
                                            component="span"
                                            name="rg_cliente"
                                            className="form-error" />
                                    </div>

                                    <div className="cadastro-form-group">
                                        <Field
                                            name="cpf_cliente"
                                            className="form-field"
                                            placeHolder="CPF" />

                                        <ErrorMessage
                                            component="span"
                                            name="cpf_cliente"
                                            className="form-error" 
                                            />

                                    </div>

                                    <br />

                                    <button
                                        className="button"
                                        type="submit" class="btn btn-success">Cadastrar</button>

                                </Form>
                            </Formik>
                        </div>
                    </div>
                </TitlePage>
            </AreaUpdate>
        </ContainerPage >
    );
}

function dados (){

}

export default Page;