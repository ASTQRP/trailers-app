const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3050;
const app = express();
app.use(bodyParser.json());
app.use(cors());
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "5GES85RJFFULX",
  database: "trailersDB",
});

app.get("/", (req, res) => {
  const sql = "select * from trailers order by id desc ";
  connection.query(sql, (error, results) => {
    if (error) throw error;
    results.length > 0 ? res.json(results) : res.send("Not result");
  });
});

app.get("/trailer/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM trailers WHERE id = ${id}`;
  connection.query(sql, (error, result) => {
    if (error) throw error;
    result.length > 0 ? res.json(result) : res.send("Not result");
  });
});

app.post("/add", (req, res) => {
  const sql = "INSERT INTO trailers SET ?";
  const customerObj = {
    titulo: req.body.titulo,
    year: req.body.year,
    preview_url: req.body.preview_url,
    descripcion: req.body.descripcion,
    url: req.body.url,
  };

  connection.query(sql, customerObj, (error) => {
    if (error) throw error;
    res.send("Trailer Creado!");
  });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, year, preview_url, descripcion, url } = req.body;
  const sql = `UPDATE trailers SET titulo = '${titulo}', year='${year}', preview_url='${preview_url}', descripcion='${descripcion}', url='${url}'  WHERE id = ${id}`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Trailer Modificado!");
  });
});

app.delete("/eleminar/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM trailers WHERE id = ${id}`;

  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Trailer elimando!");
  });
});

//Datos de login

app.post("/login", (req, res) => {
  const { user_name, password } = req.body;
  const sql = `SELECT * FROM usuario WHERE user_name = '${user_name}' AND PASSWORD = '${password}'`;
  connection.query(sql, (error, result) => {
    if (error) throw error;
    result.length > 0
      ? res.send("Usuario Encontrado")
      : res.send("Usuario o Contraseña Incorrecto!...");
  });
});

//Check connect

connection.connect((error) => {
  if (error) throw error;
  console.log("Database server running!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
