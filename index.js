// index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const { sequelize, createDatabase } = require("./config/database");
const routes = require("./routes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Rotas
app.use("/api", routes);

// Conectar ao banco de dados e iniciar o servidor
createDatabase()
  .then(() => sequelize.authenticate())
  .then(() => {
    console.log("Conexão com o banco de dados bem-sucedida.");
    return sequelize.sync({ force: false }); // Sincroniza os modelos com o banco de dados
  })
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar com o banco de dados:", err);
  });

module.exports = app;
