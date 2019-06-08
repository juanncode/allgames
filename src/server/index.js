const express = require("express");
const canchasApiRouter = require("./router/api/canchas");
var bodyParser = require("body-parser");
//iniciando el server express
const app = express();
//permite leer los datos enviados en el body, todo en formato json
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
//routes
app.use("/api/canchas", canchasApiRouter);

app.use(bodyParser.json());

const server = app.listen(3002, () => {
  console.log(
    `escuchando puerto 3002: http://localhost:${server.address().port}`
  );
});
