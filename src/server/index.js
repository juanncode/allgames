const express = require("express");
const canchasApiRouter = require("./router/api/canchas");
var bodyParser = require("body-parser");
const cors = require("cors");
//iniciando el server express
const app = express();
//permite leer los datos enviados en el body, todo en formato json
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
//routes
app.use("/api/canchas", canchasApiRouter);

const server = app.listen(3002, () => {
  console.log(`escuchando puerto : http://localhost:${server.address().port}`);
});
