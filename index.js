const express = require ("express");
const app = express();
app.use(express.json());

const itensCardapio = [
{
    "id":1,
    "nome": "Marmita Delícia",
    "descricao": "arroz, feijoada, torresmo, farofa",
    "foto": "foto.png",
    "preco": 23.9
},
{
    "id":2,
    "nome": "Marmita Maravilha",
    "descricao": "arroz, feijão,p batata frita, bife a cavalo",
    "foto": "foto.png",
    "preco": 25.9
},
{
    "id":3,
    "nome": "Marmita Show",
    "descricao": "macarrão a bolonhesa",
    "foto": "foto.png",
    "preco": 22.9
},
{
    "id":4,
    "nome": "Marmita fit",
    "descricao": "peito de frango",
    "foto": "foto.png",
    "preco": 21.9
},
{
    "id":5,
    "nome": "Coca-Cola 2L",
    "descrição": "Refrigerante Cola",
    "foto": "foto.png",
    "preco": 7.9
}
]

app.get("/", function (req,res){
    res.send("Olá mundo!")
})

app.get("/marmitas", (req,res) => {
    res.send("marmitas")
})

// app.get("/cardapio/:id", (req,res) => {
//     const id = req.params.id
//     res.send(cardapio[id -1])
// })

// app.get('/cardapio/inserir', (req,res) => {
//     const produto = req.query.produto.trim()
//     cardapio.push(produto)
//     res.send(cardapio)
// })




app.listen(3030)