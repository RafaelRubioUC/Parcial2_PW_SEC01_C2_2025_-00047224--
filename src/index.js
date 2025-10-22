import express from "express";
import cuentasRoutes from "./routes/cuentas.routes.js";

const app = express();

app.use("/", cuentasRoutes);

const PORT = 3130;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
