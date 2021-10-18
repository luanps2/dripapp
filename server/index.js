const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require('cors');
const bcrypt = require("bcrypt");
const { response } = require('express');
const saltRounds = 10;


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "driprestes"
});

app.use(express.json());
app.use(cors());

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

app.get("/produto/:produto_id", (req, res) => {

    const produto_id = req.params.produto_id;
    const sql = `SELECT * FROM produto WHERE produto_id = ${produto_id}`;

        db.query(sql, [produto_id], (erro, result) => {

            if (erro) {
                console.log(erro)
            }
            res.send(result);
        })
})




app.get('/', (req, res) => {
    res.send("Hello world")
})


app.listen(3001, () => {
    console.log("Rodando na porta 3001")
});