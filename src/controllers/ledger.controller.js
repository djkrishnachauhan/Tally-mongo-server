const Ledger = require("../models/ledger.model");

exports.getLedgers = async (req, res) => {
  const q = {};
  if (req.query.name) q.NAME = new RegExp(req.query.name, "i");
  const data = await Ledger.find(q).limit(500);
  res.json(data);
};
