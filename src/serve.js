const express = require("express");
const cors = require("cors");
const todosRoutes = require("./todos.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(todosRoutes);

const port = process.env.PORT || 3333;

app.get("/jj", (req, res) => {
  return res.json("TESTE JJ");
});

app.listen(port, () => console.log("Server up in " + port));
