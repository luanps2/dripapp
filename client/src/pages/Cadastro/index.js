import React from "react";


import { AreaCadastro } from './styled'
import { ContainerPage, TitlePage } from "../../componets/Main";
import '../../../src/App.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
import * as yup from "yup";

const Page = () => {
    const handleClickCadastro = (values) => {
        Axios.post("http://localhost:3001/register", {
            email: values.email,
            password: values.password,
        }).then((response) => {
            console.log(response);
            alert(response.data.msg);
        });
    };

    const validationRegister = yup.object().shape({
        email: yup
            .string()
            .email("Não é um email")
            .required("Este campo é obrigatório"),
        password: yup
            .string()
            .min(4, "A senha deve ter 4 caracteres")
            .required("Este campo é obrigatório"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "As senhas não são iguais!"),

    });
    return (
        <ContainerPage>
            <AreaCadastro>
                <TitlePage>
                <div className="container">
                    <h1>Cadastro</h1>
                    <div>
                        <Formik initialValues={{}}
                            onSubmit={handleClickCadastro} validationSchema={validationRegister} >
                            <Form className="login-form">

                                <div className="login-form-group">
                                    <Field
                                        name="email"
                                        className="form-field"
                                        placeHolder="Email" />

                                    <ErrorMessage
                                        component="span"
                                        name="email"
                                        className="form-error" />
                                </div>

                                <div className="login-form-group">
                                    <Field
                                        name="password"
                                        className="form-field"
                                        placeHolder="Senha" />

                                    <ErrorMessage
                                        component="span"
                                        name="password"
                                        className="form-error" />
                                </div>

                                <div className="login-form-group">
                                    <Field
                                        name="confirmPassword"
                                        className="form-field"
                                        placeHolder="Confirme sua Senha" />

                                    <ErrorMessage
                                        component="span"
                                        name="confirmPassword"
                                        className="form-error" />
                                </div> <br />

                                <button
                                    className="button"
                                    type="submit" class="btn btn-success">Cadastrar</button>

                            </Form>
                        </Formik>
                        </div>
                    </div>
                </TitlePage>
            </AreaCadastro>
        </ContainerPage >
    );
}

export default Page;