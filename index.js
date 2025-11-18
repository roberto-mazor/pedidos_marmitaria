const express = require("express");
const app = express();
app.use(express.json());

const marmitas = [
  { id: 1, nome: "Marmita Delícia", descricao: "arroz, feijoada, torresmo, farofa", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEUOCKN64keEFLVqrw8Hx_SB1yLO_aPcZzA&shttps://m.media-amazon.com/images/I/61UlBn52nrL.jpg", preco: 23.9 },
  { id: 2, nome: "Marmita Maravilha", descricao: "arroz, feijão, batata frita, bife a cavalo", foto: "https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/marmita-1-640w.jpg", preco: 25.9 },
  { id: 3, nome: "Marmita Show", descricao: "macarrão à bolonhesa", foto: "https://static.itdg.com.br/images/640-auto/b0753fe0ff3dc03fb2bc0041d1386bd5/macarrao-marmita.jpeg", preco: 22.9 },
  { id: 4, nome: "Marmita Fit", descricao: "peito de frango", foto: "https://i.pinimg.com/736x/ef/d8/11/efd811bb41334f8a51bc98c4946cc074.jpg", preco: 21.9 },
];

const saladas = [
  { id: 1, nome: "Salada Simples", descricao: "alface e tomate", foto: "https://img.cdndsgni.com/preview/11780971.jpg", preco: 8.9 },
  { id: 2, nome: "Salada Caesar", descricao: "alface, frango, molho caesar", foto: "https://receitadaboa.com.br/wp-content/uploads/2024/04/bottom_view_caesar_salad_oval_plate_dark_red_table-23000869-1.jpg", preco: 12.9 }
];

const bebidas = [
  { id: 1, nome: "Coca-Cola 2L", descricao: "Refrigerante Cola", foto: "https://fortatacadista.vteximg.com.br/arquivos/ids/299392-1000-1000/2301822_7894900027013_BEB-REFRIG.COCA-COLA-2L-PET..jpg?v=637764859239570000", preco: 7.9 },
  { id: 2, nome: "Guaraná 1L", descricao: "Refrigerante Guaraná", foto: "https://padariavillalourdes.com.br/web/image/product.template/2448/image_1024?unique=f1584aa", preco: 5.9 }
];

app.get("/", (req, res) => {
  res.send("API da Marmitaria funcionando!");
});

/* ROTAS DE MARMITAS */
app.get("/marmitas", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(marmitas);
});

app.get("/marmitas/:id", (req, res) => {
  const item = marmitas.find(m => m.id == req.params.id);
  item ? res.send(item) : res.status(404).send("Marmita não encontrada");
});

/* ROTAS DE SALADAS*/
app.get("/saladas", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(saladas);
});

app.get("/saladas/:id", (req, res) => {
  const item = saladas.find(s => s.id == req.params.id);
  item ? res.send(item) : res.status(404).send("Salada não encontrada");
});

/* ROTAS DE BEBIDAS */
app.get("/bebidas", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(bebidas);
});

app.get("/bebidas/:id", (req, res) => {
  const item = bebidas.find(b => b.id == req.params.id);
  item ? res.send(item) : res.status(404).send("Bebida não encontrada");
});

app.listen(3030, () => {
  console.log("Servidor rodando na porta 3030");
});
