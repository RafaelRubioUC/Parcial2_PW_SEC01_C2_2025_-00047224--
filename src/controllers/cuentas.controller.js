import { cuentas } from "../data/cuentas.js";

export const getCuentas = (req, res) => {
  res.json({
    count: cuentas.length,
    data: cuentas,
  });
};

export const getCuentaById = (req, res) => {
  const { id } = req.params;
  const account = cuentas.find((c) => c._id === id) || null;

  res.json({
    finded: !!account,
    account,
  });
};

export const searchCuentas = (req, res) => {
  const { queryParam } = req.query;

  if (!queryParam) {
    return res.json({ finded: false, account: null, data: [] });
  }

  const q = String(queryParam).toLowerCase();

  const byId = cuentas.find((c) => c._id === queryParam);
  if (byId) {
    return res.json({ finded: true, account: byId });
  }

  const matches = cuentas.filter((c) => c.client.toLowerCase().includes(q) || c.gender.toLowerCase() === q);

  if (matches.length === 0) {
    return res.json({ finded: false, account: null, data: [] });
  }

  if (matches.length === 1) {
    return res.json({ finded: true, account: matches[0] });
  }

  return res.json({ finded: true, data: matches });
};
