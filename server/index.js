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
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email = ?", [email],
        (err, result) => {
            if (err) {
                res.send(err);
            }
            if (result.length == 0) {
                bcrypt.hash(password, saltRounds, (erro, hash) => {
                    db.query(
                        "INSERT INTO usuarios (email, password) values (?,?)",
                        [email, hash], (err, result) => {
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
const sql = "INSERT INTO produto (nome_produto, preco_produto, categoria_id, vendedor_id, qtd_estoque) values (?,?,?,?,?);";

    db.query(sql, [produto, preco, categoria_id, vendedor_id, qtd_estoque], (erro, result) => {
        if (erro) {
            res.send(erro);
        }
        res.send({ msg: "Produto cadastrado com sucesso!" });
    });
});





app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(3001, () => {
    console.log("Rodando na porta 3001")
});