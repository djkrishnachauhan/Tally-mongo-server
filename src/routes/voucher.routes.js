const r = require("express").Router();
const c = require("../controllers/voucher.controller");

r.get("/", c.getVouchers);
r.get("/:guid", c.getVoucherByGuid);
module.exports = r;
