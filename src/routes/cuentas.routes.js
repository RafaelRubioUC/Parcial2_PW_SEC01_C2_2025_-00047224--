import { Router } from "express";
import { getCuentas, getCuentaById, searchCuentas } from "../controllers/cuentas.controller.js";
import { getCuentasBalance } from "../controllers/cuentas.controller.js";

const router = Router();

router.get("/cuentas", (req, res) => {
  if (req.query && typeof req.query.queryParam !== "undefined" && req.query.queryParam !== "") {
    return searchCuentas(req, res);
  }
  return getCuentas(req, res);
});

router.get("/cuenta/:id", getCuentaById);
router.get("/cuentasBalance", getCuentasBalance);

export default router;
