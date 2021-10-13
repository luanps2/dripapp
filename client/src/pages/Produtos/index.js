import React, {useState} from "react";
import '../../../src/App.css';
import { ContainerPage, TitlePage } from "../../componets/Main";

const Page = () => {
const [values, setValues] = useState();

const handleChangeValues = (value) => {
    setValues(prevValue=>({
        ...prevValue,
        [value.target.name]: value.target.value,

    }));
};

const handleClickButton = () => {
    console.log(values);
};

    return (

        <ContainerPage>
            <TitlePage>

                <div className="app--container">
                    <div className="register--container">



                        <div className="container">
                            <h1 class="text-center">Cadastrar Produtos</h1>
                            <input type="text" name="nome" placeholder="Nome" className="register--input" onChange={handleChangeValues}></input> <br />
                            <input type="text" name="preco" placeholder="Preço" className="register--input" onChange={handleChangeValues}></input><br />
                            <input type="text" name="idCategoria" placeholder="ID da categoria" className="register--input" onChange={handleChangeValues}></input><br />
                            <input type="text" name="vendedor" placeholder="Vendedor" className="register--input" onChange={handleChangeValues}></input><br />
                            <input type="text" name="qtd" placeholder="Qtd." className="register--input" onChange={handleChangeValues}></input><br /><br />

                            <button className="register--button" class="btn btn-success" onClick={() => handleClickButton()}>Adicionar Produto</button>
                        </div>



                    </div>

                </div>


                <div className="container">
                    <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.quicksearch/2.3.1/jquery.quicksearch.js"></script>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />

                    <h1 class="text-center">Listar Produtos</h1>

                    <div class="form-group input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>
                        <input name="consulta" id="txt_consulta" placeholder="Consultar" type="text" class="form-control" />
                    </div>



                    <table id="tabela" class="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>ID Categoria</th>
                                <th>Vendedor</th>
                                <th>Qtd</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Nike Air 360</td>
                                <td>R$756,45</td>
                                <td>Tênis</td>
                                <td>1</td>
                                <td>5</td>
                            </tr>

                            <tr>
                                <th>2</th>
                                <td>Nike Shox R4</td>
                                <td>R$875,57</td>
                                <td>Tênis</td>
                                <td>1</td>
                                <td>15</td>
                            </tr>


                            <tr>
                                <th>3</th>
                                <td>Casaco Abercrombie</td>
                                <td>R$987,65</td>
                                <td>Blusas</td>
                                <td>2</td>
                                <td>10</td>
                            </tr>


                            <tr>
                                <th>4</th>
                                <td>Calça Calvin Klein</td>
                                <td>R$687,25</td>
                                <td>Calças</td>
                                <td>3</td>
                                <td>2</td>
                            </tr>


                        </tbody>
                    </table>



                    <script>
                        $('input#txt_consulta').quicksearch('table#tabela tbody tr');
                    </script>
                </div>
            </TitlePage>
        </ContainerPage>
    );
}

export default Page;