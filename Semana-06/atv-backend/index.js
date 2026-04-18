const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts")
const produtoRota = require("./rotas/produtos")
const viewRota = require("./rotas/viewProdutos")

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', 'layouts/layout-album')
app.use(express.json())
app.use('/static', express.static('public'))

app.use("/api/produtos", produtoRota)
app.use("/", viewRota)

app.listen(8080, () => {
  console.log(`Servidor pronto na porta 8080 no ambiente ${process.env.NODE_ENV}`);
});