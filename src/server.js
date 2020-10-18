//importar lib
const express = require("express");
const path = require("path");

//importando arquivo pages.js
const pages = require("./pages.js");

//iniciando o express
const server = express();

server
  // utilizar body do req
  .use(express.urlencoded({ extended: true }))
  //utilizando arquivos estáticos
  .use(express.static("public"))

  //configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //rotas da aplicação
  .get("/", pages.index)
  .get("/unity", pages.unity)
  .get("/units", pages.units)
  .get("/create-unity", pages.createunity)
  .post("/save-unity", pages.saveunity);

//ligar o servidor
server.listen(5500);
