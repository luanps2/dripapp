const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require('cors');
const bcrypt = require("bcrypt");
const { response } = require('express');
const saltRounds = 10;
const { toXML } = require("jstoxml");





const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "driprestes"
});

app.use(express.json());
app.use(cors());

//Cadastrar Usuário
app.post("/cadastro", (req, res) => {

    const endereco_cliente = req.body.endereco_cliente;
    const nome_cliente = req.body.nome_cliente;
    const cel_cliente = req.body.cel_cliente;
    const email_cliente = req.body.email_cliente;
    const senha_cliente = req.body.senha_cliente;
    const datanasc_cliente = req.body.datanasc_cliente;
    const rg_cliente = req.body.rg_cliente;
    const cpf_cliente = req.body.cpf_cliente;

    const sql = "SELECT * FROM cliente WHERE email_cliente = ?";

    db.query(sql, [email_cliente],
        (err, result) => {
            if (err) {
                res.send(err);
            }
            if (result.length == 0) {
                bcrypt.hash(senha_cliente, saltRounds, (erro, senhaHash) => {
                    db.query(
                        "INSERT INTO cliente (endereco_cliente, nome_cliente, cel_cliente, email_cliente, senha_cliente, datanasc_cliente, rg_cliente, cpf_cliente) VALUES (?,?,?,?,?,?,?,?)",
                        [endereco_cliente, nome_cliente, cel_cliente, email_cliente, senhaHash, datanasc_cliente, rg_cliente, cpf_cliente], (err, result) => {
                            if (err) {
                                res.send(err);
                            }
                            res.send({ msg: "Usuário cadastrado com sucesso!" });
                        }
                    );
                })

            } else {
                res.send({ msg: "Usuário já cadastrado!" });
            }
        });
});


//Listar Clientes
app.get("/select/:cliente_id?", function (req, res) {
    let sql = '';
    let parametro = req.params.cliente_id
    if (!parametro) {

        sql = `SELECT * FROM cliente`;
        db.query(sql, (err, results) => {
            res.send(results);
        });


    } else {

        sql = `SELECT * FROM cliente WHERE cliente_id=${req.params.cliente_id}`
        db.query(sql, (err, results) => {
            res.send(results);

        });

    }



});


//Trazer dados do cliente preenchidos
app.get("/updateCliente/:cliente_id", function (req, res) {
    db.query("select * from cliente where cliente_id=?", [req.params.cliente_id], function (err, results, fields) {
        res.render('updateCliente', {
            cliente_id: req.params.cliente_id,
            endereco_cliente: results[0].endereco_cliente,
            nome_cliente: results[0].nome_cliente,
            cel_cliente: results[0].cel_cliente,
            email_cliente: results[0].email_cliente,
            senha_cliente: results[0].senha_cliente,
            datanasc_cliente: results[0].datanasc_cliente,
            rg_cliente: results[0].rg_cliente,
            cpf_cliente: results[0].cpf_cliente,
        });
    });
});

//Atualizar dados do cliente
app.post("/UpdateCliente", function (req, res) {
    db.query("UPDATE cliente SET endereco_cliente=?,nome_cliente=?, cel_cliente=?, email_cliente=?, senha_cliente=?, datanasc_cliente=?, rg_cliente=?, cpf_cliente=? WHERE cliente_id=?",
        [req.body.endereco_cliente,
        req.body.nome_cliente,
        req.body.cel_cliente,
        req.body.email_cliente,
        req.body.senha_cliente,
        req.body.datanasc_cliente,
        req.body.rg_cliente,
        req.body.cpf_cliente,
        req.body.cliente_id]);
    res.send({ msg: "Usuário alterado com sucesso!" });
});


//Deletar dados do cliente
app.get("/deletarCliente/:cliente_id", (req, res) => {

    const id = req.body.cliente_id;
    let sql = `DELETE FROM cliente FROM cliente_id=${id}`;
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send("Usuario deletado com sucesso!")
    });

});




//Login de usuário
app.post("/login", (req, res) => {

    const email_cliente = req.body.email_cliente;
    const senha_cliente = req.body.senha_cliente;

    db.query("SELECT * FROM cliente WHERE email_cliente = ?", [email_cliente], (err, result) => {
        if (result.length > 0) {

            bcrypt.compare(senha_cliente, result[0].senha_cliente,
                (erro, result) => {
                    if (result) {
                        res.send("Usuário logado com sucesso!")
                    } else {
                        res.send("Senha Incorreta!");
                    }
                });
        } else {
            res.send({ msg: "conta não encontrada" });
        }

    });
});
// app.get('/', (req, res) =>{
//     db.query("INSERT INTO usuarios (email, password) VALUES ('teste@gmail.com', '1234')", (err, result) => {
//         if(err){
//             console.log("erro: " + err);
//         }
//     }
//     );
// })


//Inserir Produtos
app.post("/produtos", (req, res) => {

    const produto = req.body.nome_produto;
    const preco = req.body.preco_produto;
    const categoria_id = req.body.categoria_id;
    const vendedor_id = req.body.vendedor_id;
    const qtd_estoque = req.body.qtd_estoque;

    const sql = "INSERT INTO produto (nome_produto, preco_produto, categoria_id, vendedor_id, qtd_estoque) values (?,?,?,?,?)"
    db.query(sql, [produto, preco, categoria_id, vendedor_id, qtd_estoque], (err, result) => {
        if (err) {
            alert(err)
        };
        res.send({ msg: "poduto cadastrado com sucesso!" });
    });

});

//Listar todos Produtos ou Listar produto por ID
app.get("/select/:produto_id?", function (req, res) {
    let sql = '';
    let parametro = req.params.produto_id
    if (!parametro) {

        sql = `SELECT * FROM produto`;
        db.query(sql, (err, results) => {
            res.send(results);
        });
    } else {
        sql = `SELECT * FROM produto WHERE produto_id=${req.params.produto_id}`
        db.query(sql, (err, results) => {
            res.send(results);
        });
    }
});

//Pesquisar produtos por nome
app.get("/pesquisarprodutos/:nome_produto", (req, res) => {

    const nomeProduto = req.params.nome_produto;
    const sql = `SELECT * FROM produto WHERE nome_produto LIKE "%${nomeProduto}%"`;

    db.query(sql, [nomeProduto], (erro, result) => {

        if (erro) {
            console.log(erro)
        }
        res.send(result);
    })
})


//Pesquisar produto por ID
app.get("/produto/:produto_id", (req, res) => {

    const produto_id = req.params.produto_id;
    const sql = `SELECT * FROM produto WHERE produto_id = ${produto_id}`;

    db.query(sql, [produto_id], (erro, result) => {

        if (erro) {
            console.log(erro)
        }
        res.send(result);
    })
});

//Trazer dados do produto preenchidos
app.get("/updateProduto/:produto_id", function (req, res) {
    db.query("SELECT * FROM produto WHERE produto_id=?", [req.params.produto_id], function (err, results, fields) {
        res.render('updateProduto', {
            produto_id: req.params.produto_id,
            nome_produto: results[0].nome_produto,
            preco_produto: results[0].preco_produto,
            categoria_id: results[0].categoria_id,
            vendedor_id: results[0].vendedor_id,
            qtd_estoque: results[0].qtd_estoque
        });
    });
});

//Atualizar dados do produto
app.post("/UpdateProduto", function (req, res) {
    db.query("UPDATE produto SET nome_produto=?, preco_produto=?, categoria_id=?, vendedor_id=?, senha_cliente=?, qtd_estoque=? WHERE produto_id=?",
        [req.body.nome_produto,
        req.body.preco_produto,
        req.body.categoria_id,
        req.body.vendedor_id,
        req.body.qtd_estoque,
        req.body.produto_id]);
    res.send({ msg: "Produto alterado com sucesso!" });
});

//Deletar dados do produto
app.get("/deletarProduto/:produto_id", (req, res) => {

    const produto_id = req.body.produto_id;
    let sql = `DELETE FROM produto FROM produto_id=${produto_id}`;
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send("produto deletado com sucesso!")
    });

});



// const { cliente_id } = req.params;

// const sql = ''
// sql = `DELETE FROM cliente FROM cliente_id=?`;

// db.query(sql, [cliente_id], (err, results) => {
//     if (erro) {
//         console.log(erro);
//     }
//     res.send(results);
// })



//Gerar XML na página(frontend)
app.get("/produtoXML", (req, res) => {
    const sql = `SELECT * FROM produto`;

    db.query(sql, (erro, result) => {

        if (erro) {
            console.log(erro)
        }

        res.send(result);
    })
})

//Gerar XML Externo(backend)
app.get("/produtoXML2", (req, res) => {
    const sql = `SELECT * FROM produto`;

    db.query(sql, (erro, result) => {

        if (erro) {
            console.log(erro)
        }

        res.json(toXML(result));

        //    console.log(toXML(result));

    })
})

//Gerar JSON em outra página
app.get("/produtoJSON", (req, res) => {
    const sql = `SELECT * FROM produto`;

    db.query(sql, (erro, result) => {

        if (erro) {
            console.log(erro)
        }

        res.send(result);
    })
})







//Teste página inicial backend /localhost:3001/
app.get('/', (req, res) => {
    res.send("Hello world")
})


app.listen(3001, () => {
    console.log("Rodando na porta 3001")
});