const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");
const Message = require("./models/Message");
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

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/test", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Hola mundo!",
  });
});

app.post("/test", async (req, res) => {
  const {ok, message} = req.body;
  console.log(message);
  const newMessage = new Message({ok, message})
  const savedMessage = await newMessage.save()
  res.status(200).json(savedMessage);
});

app.listen(port, () => console.log(`Perfect Port ${port}`));
