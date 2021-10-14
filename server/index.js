const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require('cors');
const bcrypt = require("bcrypt");
const saltRounds = 10;


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "driprestes"
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {

    const endereco_cliente = req.body.endereco_cliente;
    const nome_cliente = req.body.nome_cliente;
    const cel_cliente = req.body.cel_cliente;
    const email_cliente = req.body.email_cliente;
    const senha_cliente = req.body.senha_cliente;
    const datanasc_cliente = req.body.datanasc_cliente;
    const rg_cliente = req.body.rg_cliente;
    const cpf_cliente = req.body.cpf_cliente;

    db.query("SELECT * FROM cliente WHERE email_cliente = ?", [email_cliente],
        (err, result) => {
            if (err) {
                res.send(err);
            }
            if (result.length == 0) {
                bcrypt.hash(senha_cliente, saltRounds, (erro, senhaHash) => {
                    db.query(
                        "INSERT INTO cliente (endereco_cliente, nome_cliente, cel_cliente, email_cliente, senha_cliente, datanasc_cliente, rg_cliente, cpf_cliente) values (?,?,?,?,?,?,?,?)",
                        [endereco_cliente, nome_cliente, cel_cliente, email_cliente, senhaHash, datanasc_cliente, rg_cliente, cpf_cliente], (err, result) => {
                            if (err) {
                                res.send(err);
                            }
                            res.send({ msg: "Usuário cadastrado com sucesso!" });
                        }
                    );
                })

            } else {
                res.send({ msg: "usuário já cadastrado!" })
            }
        });
});


app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password,
                (erro, result) => {
                    if (result) {

                        res.redirect('http://localhost:3000/');


                        // if (response.data.status == 200) {
                        //     <Route exact path="../home">
                        //         <Home />
                        //     </Route>
                        // }
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





app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(3001, () => {
    console.log("Rodando na porta 3001")
});