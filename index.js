const express = require ("express");
const app = express();
app.use(express.json());

const cardapio = [
    "bananaa", "maçã"
]

app.get("/", function (req,res){
    res.send("Olá mundo!")
})

app.get("/cardapio", (req,res) => {
    res.send(cardapio)
})

app.get("/cardapio/:id", (req,res) => {
    const id = req.params.id
    res.send(cardapio[id -1])
})


app.listen(3000)