const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");
const env_mongo = process.env.MONGO_URL;

mongoose.connect(env_mongo);

const database = mongoose.connection;
database.on("error", (e) => {
  console.log(e);
});
database.once("connected", () => {
  console.log("Conectado");
});

const app = express();

app.get("/test", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Hola mundo!",
  });
});

app.post("/test", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Envia un mensaje!",
  });
});

app.listen(port, () => console.log(`Perfect Port ${port}`));
