const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.get("/test", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Hola mundo!",
  });
});
app.listen(port, () => console.log(`Perfect Port ${port}`));
