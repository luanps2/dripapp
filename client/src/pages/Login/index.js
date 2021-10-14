import React from "react";

import { AreaLogin } from './styled'
import { ContainerPage, TitlePage } from "../../componets/Main";
import '../../../src/App.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
import * as yup from "yup";

const Page = () => {
    const handleClickLogin = (values) => {
        Axios.post("http://localhost:3001/login", {
            email: values.email,
            password: values.password,
        }).then((response) => {
            console.log(response)
            alert(response.data);
        })
    };

    const validationLogin = yup.object().shape({
        email: yup
            .string()
            .email("Não é um email")
            .required("Este campo é obrigatório"),
        password: yup
            .string()
            .min(4, "A senha deve ter 4 caracteres")
            .required("Este campo é obrigatório"),
    });
    return (
        <ContainerPage>
            <AreaLogin>
                <TitlePage>



                    <div>
                        <div className="container">
                            <h1>Login</h1>
                            <Formik initialValues={{}}
                                onSubmit={handleClickLogin} validationSchema={validationLogin} >
                                <Form className="login-form">

                                    <div className="login-form-group">
                                        <Field name="email" className="form-field" placeHolder="Email" />

                                        <ErrorMessage component="span" name="email" className="form-error" />
                                    </div>

                                    <div className="login-form-group">
                                        <Field name="password" className="form-field" placeHolder="Senha" />

                                        <ErrorMessage component="span" name="password" className="form-error" /> <br /> <br />
                                    </div>

                                    <button className="button" type="submit" class="btn btn-success">Login</button>

                                </Form>
                            </Formik>
                        </div>
                    </div>
                </TitlePage>
            </AreaLogin>
        </ContainerPage >
    );
}

export default Page;