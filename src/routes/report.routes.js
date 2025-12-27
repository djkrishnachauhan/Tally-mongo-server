const r = require("express").Router();
const c = require("../controllers/report.controller");
r.get("/party-total", c.partyWiseTotal);
module.exports = r;
