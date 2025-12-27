const r = require("express").Router();
const c = require("../controllers/ledger.controller");
r.get("/", c.getLedgers);
module.exports = r;
